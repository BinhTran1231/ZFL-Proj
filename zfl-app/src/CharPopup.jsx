import { useEffect } from 'react'
import { CHARS } from './data.js'

export default function CharPopup({ ch, onClose }) {
  const d = CHARS[ch]
  useEffect(() => {
    const onKey = (e) => e.key === 'Escape' && onClose()
    window.addEventListener('keydown', onKey)
    return () => window.removeEventListener('keydown', onKey)
  }, [onClose])
  if (!d) return null

  return (
    <div className="fixed inset-0 z-30 flex items-end justify-center bg-ink/50 p-0 sm:items-center sm:p-4" onClick={onClose}>
      <div
        role="dialog"
        aria-modal="true"
        aria-label={`Chữ ${ch}`}
        onClick={(e) => e.stopPropagation()}
        className="max-h-[90vh] w-full max-w-md overflow-y-auto rounded-t-2xl bg-paper p-6 shadow-2xl sm:rounded-2xl"
      >
        <div className="flex items-start justify-between">
          <div className="flex items-center gap-5">
            <div className="grid h-24 w-24 place-items-center rounded-lg border-2 border-seal/60 bg-white font-han text-6xl" lang="zh-Hant">{ch}</div>
            <div>
              <p className="text-2xl font-semibold text-seal">{d.py}</p>
              <p className="text-sm text-ink-2">Hán Việt: <b className="text-ink">{d.hv}</b></p>
            </div>
          </div>
          <button onClick={onClose} aria-label="Đóng" className="rounded-full p-2 text-2xl leading-none text-ink-2 hover:bg-ink/10">×</button>
        </div>

        <section className="mt-5">
          <h3 className="text-xs font-semibold uppercase tracking-wide text-ink-2">Nghĩa</h3>
          <p className="mt-1 text-lg">{d.vi}</p>
          <p className="text-sm text-ink-2">{d.en}</p>
        </section>

        <section className="mt-5">
          <h3 className="text-xs font-semibold uppercase tracking-wide text-ink-2">Bộ thủ</h3>
          <div className="mt-2 flex items-center gap-3 rounded-lg bg-paper-2 p-3">
            <span className="font-han text-4xl" lang="zh-Hant">{d.radical.ch}</span>
            <div className="text-sm">
              <p><b>{d.radical.py}</b> · {d.radical.vi}</p>
              <p className="text-ink-2">Bộ Khang Hy của chữ này</p>
            </div>
          </div>
        </section>

        <section className="mt-5">
          <h3 className="text-xs font-semibold uppercase tracking-wide text-ink-2">Cấu tạo</h3>
          <div className="mt-2 flex flex-wrap items-center gap-2">
            {d.parts.map(([p, m], i) => (
              <span key={i} className="flex items-center gap-2">
                {i > 0 && <span className="text-xl text-ink-2">+</span>}
                <span className="flex items-center gap-2 rounded-lg border border-ink/15 bg-white px-3 py-2">
                  <span className="font-han text-3xl" lang="zh-Hant">{p}</span>
                  <span className="text-xs text-ink-2">{m}</span>
                </span>
              </span>
            ))}
          </div>
          {d.note && <p className="mt-3 text-sm text-ink-2">💡 {d.note}</p>}
        </section>
      </div>
    </div>
  )
}
