/* ==========================================================
   サイトの内容（テキスト・作品情報）はここでまとめて編集できます。
   出典：素材/ポートフォリオ pdf 1117.pdf
   「（仮）」と書いてある箇所は未確定です
   ========================================================== */

const SITE = {
  name: "Yunosuke Hara",
  nameJa: "原 優ノ介",
  tagline: "Artist / Designer", // （仮）肩書き
  // トップ中央のコピー（ステートメント末尾の一文から）
  statement: "Continually Encountering<br>Unknown Possibilities.",
  // トップのAbout欄に出す短い紹介
  about:
    "日常で見慣れた物事を、デジタル技術によって複製・変形することで生まれる新たな形態や、複製の過程で失われる性質に関心を持っている。<br><br>複製技術によって再現できるものとできないものの差異に着目し、普段は意識されない対象の性質を、視覚や触覚を通して感覚的に捉えることのできる芸術表現を探求している。",
  email: "yunosuke.hara.0709@gmail.com",
  instagram: "https://www.instagram.com/hara.yunosuke/",
  location: "Tokyo, Japan",
};

/* ステートメント全文（Aboutページ） */
const STATEMENT = {
  ja: [
    "私が技術に魅力を感じるのは、自分の身体や能力を拡張し、想像を超えた形や現象に出会わせてくれるからである。制作における選択や判断は私自身が行うが、その実行の多くは機械に委ねられている。機械が生み出した結果が次の選択に影響し、互いに作用し合いながら制作が進んでいく。その中で大切にしているのは、対象が持つ「そのものらしさ」である。それは固定された特徴ではなく、他のものとの比較や、性質の組み合わせによって感じられるものだと考えている。私にとって技術は、決められた目的を達成するためだけの道具ではない。日常の経験と技術が持つ固有の性質を結びつけ、その振る舞いを観察しながら、自分自身もまだ知らない形や景色を探っている。私にとって制作とは、そうした未知の可能性に出会い続ける行為である。",
  ],
  en: [
    "What fascinates me about technology is that it extends my body and abilities, allowing me to encounter forms and phenomena that go beyond what I could imagine. While I make the choices and decisions in the creative process myself, much of the execution is entrusted to machines. The results they produce influence my next choices, and the work develops through this ongoing interaction. What I value most in this process is the inherent character of the subject—what makes it what it is. I believe this is not a fixed characteristic, but something perceived through comparison with other things or through particular combinations of qualities. Technology, for me, is not merely a tool for achieving a predetermined goal. By connecting everyday experiences with the inherent properties of technology and observing how they interact, I explore forms and landscapes that even I have yet to discover. For me, making work is an act of continually encountering such unknown possibilities.",
  ],
};

/* 経歴（Aboutページ） */
const CV = [
  {
    title: "Education",
    items: [
      ["2021", "日本大学豊山高等学校 卒業"],
      ["2023", "武蔵野美術大学 空間演出デザイン学科 入学"],
      ["2025", "環境メディアデザインコース ando lab"],
    ],
  },
  {
    title: "Exhibition",
    items: [
      ["2026", "「SICF27」（EXHIBITION部門 / スパイラルホール）"],
      ["2026", "「ぴすとる」（グループ展 / studio sola）"],
      ["2025", "「設計図」（Keio Fashion Creator / テレコムセンター）"],
      ["2024", "「How to Dress Love？ Fashion Show」（Keio Fashion Creator / Studio Earth）"],
      ["2023", "「来夢」（グループ展 / Rukki Art&Croft Gallery）"],
    ],
  },
  {
    title: "Award",
    items: [
      ["2026", "「bud brand AWARD 2026」入選（ミラノデザインウィーク展示）"],
      ["2025", "「bud brand AWARD 2025」奨励賞（ミラノデザインウィーク展示）"],
      ["2024", "「JIDAWARD 2024 NEXTAGE部門」銀賞（リビングデザインセンター展示）"],
      ["2024", "「グッドデザイン・ニューホープアワード」入選（六本木ミッドタウン パネル展示）"],
      ["2024", "「木材を使った家具のデザインコンペ 2024」銀賞（LIVING&DESIGN / 東京ビッグサイト展示）"],
    ],
  },
  {
    title: "Selected",
    items: [
      ["2026", "東京大学カオスキャンプ 第2期 採択"],
      ["2026", "ギオン芸術スポーツ振興奨学金 採択"],
      ["2025", "武蔵野美術大学 杉村奨学金（研究室推薦）採択"],
    ],
  },
];

/* お知らせ（トップのUpcoming / News） */
const NEWS = [
  { date: "2026", text: "「SICF27」EXHIBITION部門に出展", place: "スパイラルホール" },
  { date: "2026", text: "「bud brand AWARD 2026」入選", place: "ミラノデザインウィーク" },
  { date: "2026", text: "グループ展「ぴすとる」に参加", place: "studio sola" },
];

/* トップのスライドショーに出す作品（この順番で表示）
   各作品の heroImage があればそれを、なければ images の1枚目を使います */
const HERO = [
  "wind-light",
  "shibuya",
  "sensory-observation-device-003",
  "kimama-no-mamani",
  "slits-stool",
];

/* 作品一覧（新しい順）
   images の1枚目がサムネイル（作品ページの最初の写真）になります */
const WORKS = [
  {
    id: "shibuya",
    title: "視覚の死角による四角",
    sub: "現在の渋谷の形状に、過去の渋谷のテクスチャーを重ねる",
    date: "2026",
    year: "2026",
    material: "ミクストメディア",
    category: "Installation",
    heroImage: "assets/img/shibuya-hero.jpg", // スライドショー用（高画質 3200px）
    images: ["assets/img/shibuya-1.jpg", "assets/img/shibuya-2.jpg"],
    // 作品ページでトップ写真の次に表示するYouTube動画（IDのみ）
    youtube: "kD9faC07OQA",
    text: [
      "本作品では、2026年10月時点の渋谷駅周辺の航空写真を、Blenderのディスプレイス機能によって画像の明暗に応じた起伏へと変換し、3Dプリントで立体物として出力した。さらに、データ上で立体化された時に貼られていたテクスチャーを物理的な空間でも表現したいと考え、出力した立体物の表面に航空写真をプロジェクターで投影し、テクスチャーを重ねた。",
      "投影する映像には、1985年まで遡る航空写真も使用している。2026年10月時点の渋谷の形状に過去の航空写真を投影することで、現在の渋谷の造形に、過去の渋谷のテクスチャーが貼り付けられたような感覚が生まれる。",
      "完璧な街の再現ではなく、画像から立体化されるときのズレ、航空写真のズレによって、生じる陰影は見慣れた渋谷を別の姿に変え、自分が記憶している渋谷との違いを強く意識させる。",
    ],
    textEn: [],
  },
  {
    id: "wind-light",
    title: "Wind Light",
    sub: "「風」そのものを素材として扱う",
    date: "2026.04.14",
    year: "2026",
    material: "風",
    category: "Light",
    heroPosition: "right center", // ランプが右側にあるので右基準（スマホの正方形で切れないように）
    images: ["assets/img/wind-1.jpg", "assets/img/wind-2.jpg", "assets/img/wind-3.jpg", "assets/img/wind-4.jpg"],
    text: [
      "デジタル環境において、アルゴリズムは決定論的な構造に依存しているため、単体では真にランダムな数を生成することはできない。その様な背景において、風は予測困難かつ制御不能な自然現象として、「偶然性」を持つ貴重な存在になり得る。",
      "風は視覚的には捉え難いが、岩を侵食し、砂に模様を刻み、樹木を揺らすなど、時間を介した造形的な作用を持つ自然の彫刻家と呼べる。",
      "本作で重要なのは、こうした造形の痕跡を模倣することではなく、「風」そのものを「素材」として扱う視点である。湿度、気温、風速、気圧などの数値化されたデータをアルゴリズムを介して形態生成プロセスに取り込み3Dプリンターを用いて、「風」を静的な素材として再構成している。",
    ],
    textEn: [
      "In a digital environment, algorithms rely on deterministic structures, so they cannot generate truly random numbers on their own. Against this backdrop, wind can become a valuable source of randomness, because it is a natural phenomenon that is hard to predict and impossible to control. Though wind is barely visible, it erodes rock, carves patterns into sand, and sways trees. Over time it gives shape to its surroundings, and in this sense it could be called nature’s sculptor. What matters in this work is not imitating the forms wind leaves behind, but treating wind itself as a material.",
      "In this work, measured data such as humidity, temperature, wind speed, and atmospheric pressure is fed into the form-generation process through an algorithm. The resulting forms are then 3D printed, reconstituting wind as a static material.",
    ],
  },
  {
    id: "sensory-observation-device-003",
    title: "感覚的観察装置 003",
    sub: "回転する複製物を直線的な光がなぞる",
    date: "2026.03",
    year: "2026",
    material: "ミクストメディア",
    category: "Installation",
    images: ["assets/img/device003-2.jpg", "assets/img/device003-1.jpg", "assets/img/device003-3.jpg"],
    // 作品ページでトップ写真の次に表示するYouTube動画（IDのみ）
    youtube: "IFIanbxnVFA",
    text: [
      "この装置は感覚的観察装置001の装置中央部の装置に回転装置を組み込んでいる。複製物が回転を行うことで静的な光の現象に動きが生み出されている。石の肌を直線的な光がなぞっている。冷たいレーザーの光と冷たくなった石の肌を使ってドラマチックな瞬間を生み出したかった。",
    ],
    textEn: [
      "This device incorporates a rotating mechanism into the central section of Sensory Observation Device 001. The rotation of the replica creates a sense of movement within the static light phenomenon. Linear beams of light trace the surface of the stone. I wanted to create a dramatic moment using the cold laser light and the chilled surface of the stone.",
    ],
  },
  {
    id: "kimama-no-mamani",
    title: "きままのままに",
    sub: "歩く動作に合わせて木材が揺蕩う",
    date: "2025.12.24",
    year: "2025",
    material: "赤松、ボルトナット、綿布（生成り）",
    category: "Fashion",
    heroImage: "assets/img/kimama-3.jpg",
    images: ["assets/img/kimama-0.jpg", "assets/img/kimama-1.jpg", "assets/img/kimama-2.jpg", "assets/img/kimama-3.jpg"],
    text: [
      "この作品の歩く動作に合わせて木材が揺蕩う姿は、普段私たちが認識している木材の硬く静的な印象とは異なる表情を見せる。身体の動きに追従しながらも、木材はその重さや柔軟性によって独自の動きを生み出し、まるで木材そのものが意思を持って動いているかのようにも感じられる。",
      "木材は硬く、形を保つための素材であるという認識が、身体との関係によって変化する。人間が木材を動かしているはずなのに、その動きは必ずしも人間の意図どおりにはならない。身体の動きによって生じた揺れが、木材自身の性質によって変化していく様子から、素材は単に人間の意図を実現するための受動的な存在ではないのではないかと考えた。",
      "私にとって重要なのは、木材の新しい用途を提案することではない。木材が揺蕩うという、普段の用途からは想像しにくい振る舞いを通して、それまで当然だと思っていた素材の姿に疑問を持つことである。素材に与えられた役割から離れ、その性質を異なる関係の中で観察することが、私たちの素材に対する認識や、ものとの関わり方を変えていくのではないかと考えている。",
    ],
    textEn: [
      "The way the wood sways in sync with the act of walking reveals a different side to it than the hard, static impression we usually associate with wood. While following the body’s movements, the wood generates its own unique motion through its weight and flexibility, creating the sensation that the wood itself is moving of its own accord.",
      "The perception of wood as a hard material designed to retain its shape is transformed through its relationship with the body. Although humans are the ones moving the wood, its movements do not necessarily follow human intent. Observing how the swaying caused by bodily movement evolves based on the wood’s inherent properties led me to wonder whether the material is not merely a passive entity meant to fulfill human intentions.",
      "For me, the important thing is not to propose new uses for wood. Rather, it is to question our assumptions about the material—assumptions we had taken for granted—through the behavior of wood as it sways, a behavior that is difficult to imagine based on its usual uses. I believe that stepping away from the roles assigned to a material and observing its properties within different contexts can transform our perception of materials and the way we interact with them.",
    ],
  },
  {
    id: "slits-stool",
    title: "Slits Stool",
    sub: "カーフベンディングで「木の椅子は硬い」を変容させる",
    date: "2024.06",
    year: "2024",
    material: "赤松",
    category: "Furniture",
    heroImage: "assets/img/slits-hero.jpg", // スライドショー用（高画質 3200px）
    images: ["assets/img/slits-3.jpg", "assets/img/slits-1.jpg", "assets/img/slits-2.jpg"],
    text: [
      "家具デザインの領域においては、針葉樹は、家具に向いていないとされてきた。その原因は柔らかさである。硬い広葉樹と比べて強度はない。柔らかいため、傷がつきやすいなどの問題がある。その問題に対して私は、「木は硬くないと家具に向いていない」という常識が針葉樹の可能性を隔てていると感じた。",
      "カーフベンディング（Kerf Bending）という技術は、切り込みを入れることで、木材が柔らかくなる技術である。しかし、この技術は曲げるための技術として扱われ、最終的には木材の柔らかさを身体で感じることを重視されてこなかった。私は、柔らかい座り心地を求め、ピッチやスリットの長さの研究を行い、アカマツの加工性の高さと柔らかさを共存させた椅子を制作した。",
      "私が角材に感じていた硬さが失われ、硬い木という素材のイメージが更新される。座った時の感触は角材とは思えないような、まるでゴムに座っているかの様な感触の椅子が生まれた。カーフベンディングという技術が「木の椅子は硬い」という普遍的な性質を変容させている。",
    ],
    textEn: [
      "In the field of furniture making, coniferous woods have traditionally been considered unsuitable for furniture. The reason for this is their softness. Compared to hard broadleaf woods, they lack strength. Because they are soft, they are prone to scratches and other issues. In response to these problems, I felt that the conventional wisdom—that “wood must be hard to be suitable for furniture”—was limiting the potential of coniferous woods.",
      "Kerf bending is a technique that softens wood by cutting grooves into it. Seeking a soft seating experience, I conducted research on the pitch and length of the slits and created a chair that successfully combines the high workability of Japanese red pine with its softness.",
      "The hardness I had associated with square lumber has disappeared, and my perception of this material as “hard wood” has been transformed. The result is a chair that feels nothing like square lumber when you sit on it—it feels almost as if you’re sitting on rubber. The technique of kerf bending is transforming the perception that “wooden chairs are hard.”",
    ],
  },
];
