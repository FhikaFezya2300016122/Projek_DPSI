// src/data/mockData.js

// Kita gunakan gambar placeholder dari internet agar tidak ada error path
import placeValueImage from '../Images/placevalue.jpg';
import simplePastImage from '../Images/simplepast.jpg';
import fruityImage from '../Images/fruitty.jpg';
import bodywordImage from '../Images/bodyword.jpg';

export const games = [
   {
    id: 'body-word-structure',
    title: 'Body word structure',
    category: 'Puzzle',
    difficulty: 'Easy',
    questions: 10,
    plays: '80k Plays',
    image: bodywordImage,
    gradient: 'from-pink-400 to-red-500',
  },
  {
    id: 'simple-past-tense',
    title: 'Simple past tense',
    category: 'Puzzle',
    difficulty: 'Medium',
    questions: 15,
    plays: '95k Plays',
    image: simplePastImage,
    gradient: 'from-yellow-400 to-orange-500',
  },
  {
    id: 'fruity',
    title: 'Fruity',
    category: 'Crossword',
    difficulty: 'Easy',
    questions: 20,
    plays: '150k Plays',
    image: fruityImage,
    gradient: 'from-purple-500 to-pink-600',
  },
  {
    id: 'place-value',
    title: 'Place value',
    category: 'Crossword',
    difficulty: 'Easy',
    questions: 10,
    plays: '120k Plays',
    image: placeValueImage, // ← pakai gambar lokal
    gradient: 'from-blue-400 to-purple-600',
  }
];

export const leaderboardData = [
    { rank: 1, name: 'Mercus Lipshutz', score: '12.400 PTS', avatar: 'https://i.pravatar.cc/40?u=a' },
    { rank: 2, name: 'Terry Lubin', score: '12.300 PTS', avatar: 'https://i.pravatar.cc/40?u=b' },
    { rank: 3, name: 'Omar Franci', score: '12.250 PTS', avatar: 'https://i.pravatar.cc/40?u=c' },
    { rank: 4, name: 'Nolan Dakuida', score: '12.000 PTS', avatar: 'https://i.pravatar.cc/40?u=d' },
    { rank: 5, name: 'Cooper Gouse', score: '11.980 PTS', avatar: 'https://i.pravatar.cc/40?u=e' },
];

export const myRankData = {
  rank: '55th',
  username: 'Olivia Sara',
  score: '10.800',
  avatar_url: 'https://i.pravatar.cc/40?u=me'
};

// ====================================================================
// --- BAGIAN YANG HILANG DAN SEKARANG DITAMBAHKAN KEMBALI ---
// ====================================================================
export const puzzleDetail = {
  'body-word-structure': {
    title: 'Body word structure',
    difficulty: 'Easy',
    category: 'Puzzle Games',
    totalQuestions: 10,
    author: 'Morgan Kevler',
    authorAvatar: 'https://i.pravatar.cc/150?u=morgan',
    description: 'Game puzzle ini mengajak siswa untuk menyusun potongan kata menjadi kalimat berdasarkan klue gambar pada setiap nomor soal.',
    howToPlay: [
      'Perhatikan klue gambar yang terletak di dekat area jawaban setiap nomor.',
      'Susun potongan kata dengan cara klik atau drag & drop ke area jawaban.',
      'Klik tombol konfirmasi untuk melanjutkan ke soal berikutnya.',
      'Klik tombol finish untuk mengakhiri jawaban.',
    ],
    pointSystem: {
      easy: '+5 poin/soal.',
      medium: '+10 poin/soal.',
      hard: '+20 poin, -5 poin jika salah.',
      bonus: '+ (poin sesuai level) jika menjawab benar 6 soal berturut-turut.',
    },
    questions: [
      {
        id: 1,
        image: 'https://dffdwxmtfytpnndzxdch.supabase.co/storage/v1/object/public/tubuh//ear.jpg',
        instruction: 'Arrange them into sentences according to the picture',
        wordBank: [
          { id: 'w1', text: 'is' },
          { id: 'w2', text: 'The ear' },
          { id: 'w3', text: 'for hearing' }
        ],
        answer: ['The ear', 'is', 'for hearing']
      },
      {
        id: 2,
        image: 'https://dffdwxmtfytpnndzxdch.supabase.co/storage/v1/object/public/tubuh//bibir.jpg',
        instruction: 'Arrange them into sentences according to the picture',
        wordBank: [
          { id: 'w4', text: 'The mouth' },
          { id: 'w5', text: 'for speaking' },
          { id: 'w6', text: 'is' }
        ],
        answer: ['The mouth', 'is', 'for speaking']
      },
      {
        id: 3,
        image: 'https://dffdwxmtfytpnndzxdch.supabase.co/storage/v1/object/public/tubuh//mata.jpg',
        instruction: 'Arrange them into sentences according to the picture',
        wordBank: [
          { id: 'w7', text: 'for seeing' },
          { id: 'w8', text: 'are' },
          { id: 'w9', text: 'The eyes' }
        ],
        answer: ['The eyes', 'are', 'for seeing']
      },
      {
        id: 4,
        image: 'https://dffdwxmtfytpnndzxdch.supabase.co/storage/v1/object/public/tubuh//tgn.jpg',
        instruction: 'Arrange them into sentences according to the picture',
        wordBank: [
          { id: 'w10', text: 'for holding things' },
          { id: 'w11', text: 'The hands' },
          { id: 'w12', text: 'are' }
        ],
        answer: ['The hands', 'are', 'for holding things']
      },
      {
        id: 5,
        image: 'https://dffdwxmtfytpnndzxdch.supabase.co/storage/v1/object/public/tubuh//kaki.jpg',
        instruction: 'Arrange them into sentences according to the picture',
        wordBank: [
          { id: 'w13', text: 'The feet' },
          { id: 'w14', text: 'for walking' },
          { id: 'w15', text: 'are' }
        ],
        answer: ['The feet', 'are', 'for walking']
      },
      {
        id: 6,
        image: 'https://dffdwxmtfytpnndzxdch.supabase.co/storage/v1/object/public/tubuh//nose.jpg',
        instruction: 'Arrange them into sentences according to the picture',
        wordBank: [
          { id: 'w16', text: 'is' },
          { id: 'w17', text: 'The nose' },
          { id: 'w18', text: 'for smelling' }
        ],
        answer: ['The nose', 'is', 'for smelling']
      },
      {
        id: 7,
        image: 'https://dffdwxmtfytpnndzxdch.supabase.co/storage/v1/object/public/tubuh//lidah.jpg',
        instruction: 'Arrange them into sentences according to the picture',
        wordBank: [
          { id: 'w19', text: 'The tongue' },
          { id: 'w20', text: 'is' },
          { id: 'w21', text: 'for tasting' }
        ],
        answer: ['The tongue', 'is', 'for tasting']
      },
      {
        id: 8,
        image: 'https://dffdwxmtfytpnndzxdch.supabase.co/storage/v1/object/public/tubuh//otak.jpg',
        instruction: 'Arrange them into sentences according to the picture',
        wordBank: [
          { id: 'w22', text: 'for thinking' },
          { id: 'w23', text: 'is' },
          { id: 'w24', text: 'The brain' }
        ],
        answer: ['The brain', 'is', 'for thinking']
      },
      {
        id: 9,
        image: 'https://dffdwxmtfytpnndzxdch.supabase.co/storage/v1/object/public/tubuh//perut.jpg',
        instruction: 'Arrange them into sentences according to the picture',
        wordBank: [
          { id: 'w25', text: 'The stomach' },
          { id: 'w26', text: 'is' },
          { id: 'w27', text: 'for digesting food' }
        ],
        answer: ['The stomach', 'is', 'for digesting food']
      },
      {
        id: 10,
        image: 'https://dffdwxmtfytpnndzxdch.supabase.co/storage/v1/object/public/tubuh//hati.jpg',
        instruction: 'Arrange them into sentences according to the picture',
        wordBank: [
          { id: 'w28', text: 'is' },
          { id: 'w29', text: 'The heart' },
          { id: 'w30', text: 'for pumping blood' }
        ],
        answer: ['The heart', 'is', 'for pumping blood']
      }
    ]
  }
};

export const crosswordPuzzle = {
  title: 'Fruit Crossword',
  difficulty: 'Easy',
  category: 'Puzzle Games',
  author: 'Morgan Kevler',
  authorAvatar: 'https://i.pravatar.cc/150?u=morgan',
  description: 'Crossword ini mengajak siswa mengenal berbagai nama buah dalam bahasa Inggris berdasarkan petunjuk gambar.',
  howToPlay: [
    'Klik nomor di kotak teka-teki untuk melihat petunjuk.',
    'Ketik nama buah sesuai gambar.',
    'Jawaban bisa mendatar atau menurun.',
    'Klik finish untuk mengakhiri.',
  ],
  gridSize: 12,
  questions: [
    {
      number: 1,
      direction: 'across',
      clue: 'Red fruit often associated with teachers',
      answer: 'APPLE',
      row: 0,
      col: 0,
      image: 'https://i.ibb.co/zsDwJbJ/apple.png'
    },
    {
      number: 2,
      direction: 'down',
      clue: 'Yellow curved fruit loved by monkeys',
      answer: 'BANANA',
      row: 0,
      col: 2,
      image: 'https://i.ibb.co/1XPRkK0/banana.png'
    },
    {
      number: 3,
      direction: 'across',
      clue: 'Big green fruit with red flesh and black seeds',
      answer: 'WATERMELON',
      row: 2,
      col: 0,
      image: 'https://i.ibb.co/r7yW5N7/watermelon.png'
    },
    {
      number: 4,
      direction: 'down',
      clue: 'Tiny purple or green fruit, often used in wine',
      answer: 'GRAPE',
      row: 1,
      col: 5,
      image: 'https://i.ibb.co/qx65Tfr/grape.png'
    },
    {
      number: 5,
      direction: 'across',
      clue: 'Sour yellow fruit used in lemonade',
      answer: 'LEMON',
      row: 4,
      col: 1,
      image: 'https://i.ibb.co/3Fn1JK3/lemon.png'
    },
    {
      number: 6,
      direction: 'down',
      clue: 'Small red fruit, often used in desserts',
      answer: 'CHERRY',
      row: 3,
      col: 7,
      image: 'https://i.ibb.co/G2TXHhP/cherry.png'
    },
    {
      number: 7,
      direction: 'across',
      clue: 'Fruit with orange color and same name as color',
      answer: 'ORANGE',
      row: 6,
      col: 0,
      image: 'https://i.ibb.co/5xZMLvq/orange.png'
    },
    {
      number: 8,
      direction: 'down',
      clue: 'Tropical fruit with spiky skin and sweet yellow flesh',
      answer: 'PINEAPPLE',
      row: 2,
      col: 9,
      image: 'https://i.ibb.co/ZLrXDW0/pineapple.png'
    }
  ]
};