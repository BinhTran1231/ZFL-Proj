import { useState } from 'react'
import { SENTENCES, CHARS } from './data.js'
import CharPopup from './CharPopup.jsx'

function Toggle({ on, onClick, children }) {
  return (
    <button
      onClick={onClick}
      aria-pressed={on}
      className={`flex items-center gap-2 rounded-full border px-3.5 py-1.5 text-sm font-medium transition ${
        on ? 'border-jade bg-jade text-white' : 'border-ink/20 bg-paper-2 text-ink-2 hover:border-ink/40'
      }`}
    >
      <span className={`h-2 w-2 rounded-full ${on ? 'bg-white' : 'bg-ink/30'}`} />
      {children}
    </button>
  )
}

export default function Reader() {
  const [showPy, setShowPy] = useState(true)
  const [showVi, setShowVi] = useState(true)
  const [showHan, setShowHan] = useState(true)
  const [showEn, setShowEn] = useState(false)
  const [selected, setSelected] = useState(null)

  return (
    <>
      <div className="mb-5 flex flex-wrap gap-2">
        <Toggle on={showPy} onClick={() => setShowPy(!showPy)}>Pinyin</Toggle>
        <Toggle on={showVi} onClick={() => setShowVi(!showVi)}>Tiếng Việt</Toggle>
        <Toggle on={showHan} onClick={() => setShowHan(!showHan)}>Hán Việt</Toggle>
        <Toggle on={showEn} onClick={() => setShowEn(!showEn)}>English</Toggle>
      </div>

      <p className="mb-4 text-sm text-ink-2">Chạm vào bất kỳ chữ Hán nào để xem nghĩa, pinyin và bộ thủ.</p>

      <div className="space-y-5">
        {SENTENCES.map((s, i) => (
          <article key={s.id} className="rounded-lg border border-ink/10 bg-white/60 p-5 shadow-sm">
            <div className="mb-3 flex items-center justify-between text-xs text-ink-2">
              <span className="font-semibold uppercase tracking-wide">Câu {i + 1}</span>
              <span>{s.source}</span>
            </div>

            <p className="font-han text-4xl leading-[2.1] sm:text-5xl" lang="zh-Hant">
              {s.chars.map(([ch, py], idx) =>
                CHARS[ch] ? (
                  <ruby key={idx} className="mx-0.5 align-bottom">
                    <button
                      onClick={() => setSelected(ch)}
                      className="rounded px-0.5 pb-1 transition hover:bg-seal/10 focus:bg-seal/10 focus:outline-none"
                      aria-label={`${ch} ${py}`}
                    >
                      {ch}
                    </button>
                    <rt className={`pb-1 text-[0.8rem] font-medium tracking-wide text-seal sm:text-sm ${showPy ? '' : 'invisible'}`}>
                      {py}
                    </rt>
                  </ruby>
                ) : (
                  <span key={idx} className="px-0.5">{ch}</span>
                )
              )}
            </p>

            {(showVi || showHan || showEn) && (
              <div className="mt-5 space-y-2 border-t border-ink/10 pt-4">
                {showVi && (
                  <p className="text-base"><span className="mr-2 rounded bg-ink px-1.5 py-0.5 text-[10px] font-semibold uppercase text-paper">VI</span>{s.vi}</p>
                )}
                {showHan && (
                  <p className="text-base italic text-ink-2"><span className="mr-2 rounded bg-seal px-1.5 py-0.5 text-[10px] font-semibold uppercase not-italic text-paper">Hán Việt</span>{s.han}</p>
                )}
                {showEn && (
                  <p className="text-sm text-ink-2"><span className="mr-2 rounded bg-ink/60 px-1.5 py-0.5 text-[10px] font-semibold uppercase text-paper">EN</span>{s.en}</p>
                )}
              </div>
            )}
          </article>
        ))}
      </div>

      {selected && <CharPopup ch={selected} onClose={() => setSelected(null)} />}
    </>
  )
}
