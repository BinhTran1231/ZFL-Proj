// Sample data — sentences taken from Lecture 1 («不同層次有不同層次的法»),
// 《轉法輪》 (zfl-pdf.pdf, pp. 7–8 of the book).
// Each character: pinyin, Hán Việt (hv), Vietnamese meaning (vi), English (en),
// Kangxi radical, and component breakdown.

export const CHARS = {
  真: { py: 'zhēn', hv: 'chân', vi: 'thật, chân thật', en: 'true, real', radical: { ch: '目', py: 'mù', vi: 'mắt' }, parts: [['十', 'mười'], ['目', 'mắt'], ['八', 'tám']], note: 'Dạng cổ 眞 có thêm 匕 phía trên.' },
  正: { py: 'zhèng', hv: 'chính', vi: 'ngay thẳng, đúng', en: 'upright, correct', radical: { ch: '止', py: 'zhǐ', vi: 'dừng' }, parts: [['一', 'một / đường ranh'], ['止', 'dừng chân']], note: 'Đi thẳng đến đích → “đúng, chính”.' },
  傳: { py: 'chuán', hv: 'truyền', vi: 'truyền, trao lại', en: 'to pass on, transmit', radical: { ch: '亻', py: 'rén', vi: 'người' }, parts: [['亻', 'người'], ['專', 'zhuān – chuyên (âm)']], note: 'Giản thể: 传.' },
  功: { py: 'gōng', hv: 'công', vi: 'công, công phu', en: 'merit, skill, effort', radical: { ch: '力', py: 'lì', vi: 'sức' }, parts: [['工', 'công việc'], ['力', 'sức lực']], note: '“Công” ở đây là 功 trong 傳功 – truyền công pháp.' },
  要: { py: 'yào', hv: 'yếu', vi: 'phải, cần, muốn', en: 'must, need, want', radical: { ch: '襾', py: 'yà', vi: 'che phủ' }, parts: [['西', 'tây'], ['女', 'nữ']], note: 'Nghĩa gốc là “eo”; nghĩa “cần/phải” là phổ biến nhất.' },
  講: { py: 'jiǎng', hv: 'giảng', vi: 'giảng, nói', en: 'to explain, speak', radical: { ch: '言', py: 'yán', vi: 'lời nói' }, parts: [['訁', 'lời nói'], ['冓', 'gòu – cấu (âm)']], note: 'Giản thể: 讲.' },
  法: { py: 'fǎ', hv: 'pháp', vi: 'Pháp, phép, phương pháp', en: 'law, method, Dharma/Fa', radical: { ch: '氵', py: 'shuǐ', vi: 'nước' }, parts: [['氵', 'nước'], ['去', 'đi, rời']], note: 'Nước chảy theo một lẽ nhất định → “phép tắc”.' },
  說: { py: 'shuō', hv: 'thuyết', vi: 'nói', en: 'to say, speak', radical: { ch: '言', py: 'yán', vi: 'lời nói' }, parts: [['訁', 'lời nói'], ['兌', 'duì – đoái (âm)']], note: 'Giản thể: 说.' },
  道: { py: 'dào', hv: 'đạo', vi: 'đạo, con đường', en: 'way, path, Dao', radical: { ch: '辶', py: 'chuò', vi: 'đi bộ' }, parts: [['辶', 'bước đi'], ['首', 'đầu']], note: 'Con đường mà “người đứng đầu” dẫn đi.' },
  的: { py: 'de', hv: 'đích', vi: 'trợ từ sở hữu / nhấn mạnh', en: 'particle (of; sentence-final “it is so”)', radical: { ch: '白', py: 'bái', vi: 'trắng' }, parts: [['白', 'trắng'], ['勺', 'sháo – muỗng']], note: 'Cuối câu 的 nhấn mạnh, khẳng định.' },
  我: { py: 'wǒ', hv: 'ngã', vi: 'tôi, ta', en: 'I, me', radical: { ch: '戈', py: 'gē', vi: 'giáo' }, parts: [['手', 'tay'], ['戈', 'giáo']], note: '' },
  們: { py: 'men', hv: 'môn', vi: 'các, chúng (số nhiều)', en: 'plural for people', radical: { ch: '亻', py: 'rén', vi: 'người' }, parts: [['亻', 'người'], ['門', 'mén – cửa (âm)']], note: 'Giản thể: 们. 我們 = chúng ta / chúng tôi.' },
  修: { py: 'xiū', hv: 'tu', vi: 'tu, sửa, rèn', en: 'to cultivate, repair', radical: { ch: '亻', py: 'rén', vi: 'người' }, parts: [['攸', 'yōu – du (âm)'], ['彡', 'nét trang trí']], note: '修煉 = tu luyện.' },
  煉: { py: 'liàn', hv: 'luyện', vi: 'luyện, nung', en: 'to refine, smelt', radical: { ch: '火', py: 'huǒ', vi: 'lửa' }, parts: [['火', 'lửa'], ['柬', 'jiǎn – giản (âm)']], note: 'Giản thể: 炼.' },
  是: { py: 'shì', hv: 'thị', vi: 'là, đúng', en: 'to be; yes', radical: { ch: '日', py: 'rì', vi: 'mặt trời' }, parts: [['日', 'mặt trời'], ['疋', 'bàn chân']], note: '' },
  釋: { py: 'shì', hv: 'thích', vi: 'giải thích, thả ra; (họ) Thích', en: 'to explain, release', radical: { ch: '釆', py: 'biàn', vi: 'phân biệt' }, parts: [['釆', 'phân biệt'], ['睪', 'yì – dịch (âm)']], note: 'Giản thể: 释. Trong 釋迦牟尼 chỉ họ “Thích”.' },
  迦: { py: 'jiā', hv: 'ca', vi: '(âm dịch) ca', en: 'phonetic character (Sakya)', radical: { ch: '辶', py: 'chuò', vi: 'đi bộ' }, parts: [['辶', 'bước đi'], ['加', 'jiā – gia (âm)']], note: 'Chỉ dùng để phiên âm tiếng Phạn.' },
  牟: { py: 'móu', hv: 'mâu', vi: '(âm dịch) mâu', en: 'phonetic character (muni)', radical: { ch: '牛', py: 'niú', vi: 'bò' }, parts: [['厶', 'riêng tư'], ['牛', 'bò']], note: 'Nghĩa gốc: tiếng bò kêu; ở đây dùng phiên âm.' },
  尼: { py: 'ní', hv: 'ni', vi: 'ni cô; (âm dịch) ni', en: 'nun; phonetic character', radical: { ch: '尸', py: 'shī', vi: 'thân người' }, parts: [['尸', 'thân người'], ['匕', 'cái thìa / người']], note: '釋迦牟尼 = Thích Ca Mâu Ni.' },
  無: { py: 'wú', hv: 'vô', vi: 'không, vô', en: 'without, none', radical: { ch: '灬', py: 'huǒ', vi: 'lửa (dạng dưới)' }, parts: [['無', 'hình người múa cầm cờ (nguyên gốc)'], ['灬', 'lửa']], note: 'Giản thể: 无.' },
  定: { py: 'dìng', hv: 'định', vi: 'định, cố định', en: 'fixed, to settle', radical: { ch: '宀', py: 'mián', vi: 'mái nhà' }, parts: [['宀', 'mái nhà'], ['正', 'chính, ngay']], note: 'Dưới mái nhà ngay ngắn → ổn định.' },
}

// Punctuation is stored in `chars` with no pinyin.
export const SENTENCES = [
  {
    id: 's1',
    source: 'Bài giảng 1 – 不同層次有不同層次的法 (tr. 8)',
    text: '真正傳功要講法、要說道的。',
    chars: [
      ['真', 'zhēn'], ['正', 'zhèng'], ['傳', 'chuán'], ['功', 'gōng'], ['要', 'yào'],
      ['講', 'jiǎng'], ['法', 'fǎ'], ['、', ''], ['要', 'yào'], ['說', 'shuō'], ['道', 'dào'],
      ['的', 'de'], ['。', ''],
    ],
    vi: 'Truyền công chân chính thì phải giảng Pháp, phải nói về Đạo.',
    han: 'Chân chính truyền công yếu giảng pháp, yếu thuyết đạo đích.',
    en: 'Genuinely teaching gong requires explaining the Fa and speaking of the Dao.',
  },
  {
    id: 's2',
    source: 'Bài giảng 1 – 不同層次有不同層次的法 (tr. 8)',
    text: '我們修煉，是要傳功講法的。',
    chars: [
      ['我', 'wǒ'], ['們', 'men'], ['修', 'xiū'], ['煉', 'liàn'], ['，', ''], ['是', 'shì'],
      ['要', 'yào'], ['傳', 'chuán'], ['功', 'gōng'], ['講', 'jiǎng'], ['法', 'fǎ'], ['的', 'de'], ['。', ''],
    ],
    vi: 'Chúng ta tu luyện, là phải truyền công giảng Pháp.',
    han: 'Ngã môn tu luyện, thị yếu truyền công giảng pháp đích.',
    en: 'We cultivate — which means teaching gong and explaining the Fa.',
  },
  {
    id: 's3',
    source: 'Bài giảng 1 – 不同層次有不同層次的法 (tr. 8)',
    text: '釋迦牟尼說：法無定法。',
    chars: [
      ['釋', 'shì'], ['迦', 'jiā'], ['牟', 'móu'], ['尼', 'ní'], ['說', 'shuō'], ['：', ''],
      ['法', 'fǎ'], ['無', 'wú'], ['定', 'dìng'], ['法', 'fǎ'], ['。', ''],
    ],
    vi: 'Thích Ca Mâu Ni nói: Pháp không có pháp cố định.',
    han: 'Thích Ca Mâu Ni thuyết: Pháp vô định pháp.',
    en: 'Shakyamuni said: the Fa has no fixed Fa.',
  },
]

// Flashcard deck: one card per unique character + one per sentence.
export function buildDeck() {
  const cards = Object.entries(CHARS).map(([ch, d]) => ({
    id: `c-${ch}`,
    type: 'char',
    front: ch,
    pinyin: d.py,
    hv: d.hv,
    meaning: d.vi,
    en: d.en,
    radical: d.radical,
    parts: d.parts,
  }))
  SENTENCES.forEach((s) =>
    cards.push({
      id: `s-${s.id}`,
      type: 'sentence',
      front: s.text,
      pinyin: s.chars.map(([, p]) => p).filter(Boolean).join(' '),
      hv: s.han,
      meaning: s.vi,
      en: s.en,
    })
  )
  return cards
}
