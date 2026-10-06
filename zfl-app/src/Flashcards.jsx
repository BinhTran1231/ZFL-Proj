import { useEffect, useMemo, useState } from 'react'
import { buildDeck } from './data.js'

const STORE = 'zfl-srs-v1'
const DAY = 86400000
const load = () => { try { return JSON.parse(localStorage.getItem(STORE)) || {} } catch { return {} } }
const save = (s) => { try { localStorage.setItem(STORE, JSON.stringify(s)) } catch {} }

// SM-2 style scheduling. grade: 0 Again, 1 Hard, 2 Good, 3 Easy
export function schedule(state, grade, now = Date.now()) {
  let { ease = 2.5, interval = 0, reps = 0 } = state || {}
  if (grade === 0) {
    return { ease: Math.max(1.3, ease - 0.2), interval: 0, reps: 0, due: now + 60 * 1000 }
  }
  if (grade === 1) ease = Math.max(1.3, ease - 0.15)
  if (grade === 3) ease += 0.15
  reps += 1
  if (reps === 1) interval = grade === 3 ? 3 : 1
  else if (reps === 2) interval = grade === 1 ? 2 : grade === 3 ? 6 : 4
  else interval = Math.round(interval * ease * (grade === 1 ? 0.8 : grade === 3 ? 1.3 : 1))
  return { ease, interval, reps, due: now + interval * DAY }
}

const label = (d) => (d < 1 ? '<1 phút' : d === 1 ? '1 ngày' : `${d} ngày`)
const preview = (st, g) => { const n = schedule(st, g); return g === 0 ? '1 phút' : label(n.interval) }

export default function Flashcards() {
  const deck = useMemo(buildDeck, [])
  const [progress, setProgress] = useState(load)
  const [filter, setFilter] = useState('all')
  const [flipped, setFlipped] = useState(false)
  const [tick, setTick] = useState(0) // bump to re-evaluate due cards

  useEffect(() => save(progress), [progress])

  const pool = deck.filter((c) => filter === 'all' || c.type === filter)
  const now = Date.now()
  const isNew = (c) => !progress[c.id]
  const isDue = (c) => progress[c.id] && progress[c.id].due <= now
  const queue = [...pool.filter(isDue).sort((a, b) => progress[a.id].due - progress[b.id].due), ...pool.filter(isNew)]
  const card = queue[0]
  const stats = { due: pool.filter(isDue).length, fresh: pool.filter(isNew).length, learned: pool.filter((c) => progress[c.id] && progress[c.id].interval >= 1).length }

  // when only "again" cards remain, wake up when the next one is due
  useEffect(() => {
    if (card) return
    const waiting = pool.filter((c) => progress[c.id]).map((c) => progress[c.id].due)
    if (!waiting.length) return
    const t = setTimeout(() => setTick((x) => x + 1), Math.max(1000, Math.min(...waiting) - Date.now()))
    return () => clearTimeout(t)
  }, [card, progress, tick, filter]) // eslint-disable-line

  const grade = (g) => {
    setProgress((p) => ({ ...p, [card.id]: schedule(p[card.id], g) }))
    setFlipped(false)
  }
  const reset = () => { if (confirm('Xoá toàn bộ tiến độ ôn tập?')) { setProgress({}); setFlipped(false) } }

  useEffect(() => {
    const onKey = (e) => {
      if (!card) return
      if (e.code === 'Space') { e.preventDefault(); setFlipped((f) => !f) }
      else if (flipped && ['1', '2', '3', '4'].includes(e.key)) grade(Number(e.key) - 1)
    }
    window.addEventListener('keydown', onKey)
    return () => window.removeEventListener('keydown', onKey)
  })

  return (
    <div>
      <div className="mb-5 flex flex-wrap items-center justify-between gap-3">
        <div className="flex rounded-full border border-ink/15 bg-paper-2 p-1 text-sm">
          {[['all', 'Tất cả'], ['char', 'Chữ'], ['sentence', 'Câu']].map(([id, l]) => (
            <button key={id} onClick={() => { setFilter(id); setFlipped(false) }}
              className={`rounded-full px-3.5 py-1 font-medium ${filter === id ? 'bg-ink text-paper' : 'text-ink-2'}`}>{l}</button>
          ))}
        </div>
        <div className="flex gap-4 text-sm text-ink-2">
          <span><b className="text-seal">{stats.fresh}</b> mới</span>
          <span><b className="text-jade">{stats.due}</b> đến hạn</span>
          <span><b className="text-ink">{stats.learned}</b> đã thuộc</span>
        </div>
      </div>

      {!card ? (
        <div className="rounded-xl border border-ink/10 bg-white/60 p-10 text-center">
          <p className="font-han text-5xl text-jade">完</p>
          <p className="mt-4 text-lg font-semibold">Xong hôm nay!</p>
          <p className="mt-1 text-sm text-ink-2">Không còn thẻ nào đến hạn. Quay lại sau để ôn tiếp.</p>
          <button onClick={reset} className="mt-6 text-sm text-ink-2 underline">Xoá tiến độ</button>
        </div>
      ) : (
        <>
          <button
            onClick={() => setFlipped(!flipped)}
            className="group block h-[22rem] w-full [perspective:1200px] focus:outline-none sm:h-[24rem]"
            aria-label="Lật thẻ"
          >
            <div className={`relative h-full w-full transition-transform duration-500 [transform-style:preserve-3d] ${flipped ? '[transform:rotateY(180deg)]' : ''}`}>
              {/* Front */}
              <div className="absolute inset-0 grid place-items-center rounded-2xl border border-ink/10 bg-white p-6 shadow-md [backface-visibility:hidden]">
                <div className="text-center">
                  <p className="mb-4 text-xs font-semibold uppercase tracking-wide text-ink-2">
                    {card.type === 'char' ? 'Chữ này nghĩa là gì?' : 'Dịch câu này'}
                  </p>
                  <p lang="zh-Hant" className={`font-han leading-snug ${card.type === 'char' ? 'text-8xl' : 'text-3xl sm:text-4xl'}`}>{card.front}</p>
                  <p className="mt-6 text-xs text-ink-2">Chạm hoặc nhấn Space để lật</p>
                </div>
              </div>
              {/* Back */}
              <div className="absolute inset-0 grid place-items-center overflow-y-auto rounded-2xl border border-seal/30 bg-paper-2 p-6 shadow-md [backface-visibility:hidden] [transform:rotateY(180deg)]">
                <div className="text-center">
                  <p lang="zh-Hant" className={`font-han ${card.type === 'char' ? 'text-5xl' : 'text-xl'}`}>{card.front}</p>
                  <p className="mt-2 text-xl font-semibold text-seal">{card.pinyin}</p>
                  <p className="mt-3 text-lg">{card.meaning}</p>
                  <p className="mt-1 text-sm italic text-ink-2">Hán Việt: {card.hv}</p>
                  {card.type === 'char' && (
                    <p className="mt-4 text-sm text-ink-2">
                      Bộ <span className="font-han text-lg text-ink">{card.radical.ch}</span> ({card.radical.vi}) ·{' '}
                      {card.parts.map(([p]) => p).join(' + ')}
                    </p>
                  )}
                </div>
              </div>
            </div>
          </button>

          <div className={`mt-5 grid grid-cols-4 gap-2 transition ${flipped ? 'opacity-100' : 'pointer-events-none opacity-30'}`}>
            {[['Lại', 'bg-seal'], ['Khó', 'bg-amber-600'], ['Tốt', 'bg-jade'], ['Dễ', 'bg-sky-700']].map(([l, c], g) => (
              <button key={l} onClick={() => grade(g)} disabled={!flipped}
                className={`${c} rounded-lg px-2 py-3 text-white shadow-sm transition active:scale-95`}>
                <span className="block font-semibold">{l}</span>
                <span className="block text-xs opacity-80">{preview(progress[card.id], g)}</span>
              </button>
            ))}
          </div>
          <p className="mt-3 text-center text-xs text-ink-2">Phím tắt: Space lật · 1 Lại · 2 Khó · 3 Tốt · 4 Dễ</p>
          <div className="mt-6 text-center"><button onClick={reset} className="text-xs text-ink-2 underline">Xoá tiến độ</button></div>
        </>
      )}
    </div>
  )
}
