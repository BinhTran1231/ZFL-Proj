import { useState } from 'react'
import Reader from './Reader.jsx'
import Flashcards from './Flashcards.jsx'

export default function App() {
  const [tab, setTab] = useState('reader')
  return (
    <div className="min-h-screen bg-paper text-ink">
      <header className="sticky top-0 z-20 border-b border-ink/10 bg-paper/90 backdrop-blur">
        <div className="mx-auto flex max-w-3xl items-center justify-between px-4 py-3">
          <div className="flex items-center gap-3">
            <span className="grid h-9 w-9 place-items-center rounded-sm bg-seal font-han text-lg font-bold text-paper">法</span>
            <div className="leading-tight">
              <h1 className="font-han text-lg font-bold">轉法輪 · Học chữ Hán</h1>
              <p className="text-xs text-ink-2">Đọc – tra chữ – ôn thẻ</p>
            </div>
          </div>
          <nav className="flex rounded-full border border-ink/15 bg-paper-2 p-1 text-sm">
            {[['reader', 'Đọc'], ['cards', 'Thẻ ôn']].map(([id, label]) => (
              <button
                key={id}
                onClick={() => setTab(id)}
                className={`rounded-full px-4 py-1.5 font-medium transition ${
                  tab === id ? 'bg-ink text-paper' : 'text-ink-2 hover:text-ink'
                }`}
              >
                {label}
              </button>
            ))}
          </nav>
        </div>
      </header>
      <main className="mx-auto max-w-3xl px-4 py-6">
        {tab === 'reader' ? <Reader /> : <Flashcards />}
      </main>
    </div>
  )
}
