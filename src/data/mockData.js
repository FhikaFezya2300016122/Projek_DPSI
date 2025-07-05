// src/data/mockData.js

// Kita gunakan gambar placeholder dari internet agar tidak ada error path
const gameImage1 = 'https://picsum.photos/seed/game1/400/300';
const gameImage2 = 'https://picsum.photos/seed/game2/400/300';
const gameImage3 = 'https://picsum.photos/seed/game3/400/300';
const gameImage4 = 'https://picsum.photos/seed/game4/400/300';

export const games = [
  {
    id: 'body-word-structure',
    title: 'Body word structure',
    category: 'Puzzle',
    difficulty: 'Easy',
    questions: 10,
    plays: '120k Plays',
    image: gameImage1,
  },
  {
    id: 'simple-past-tense',
    title: 'Simple past tense',
    category: 'Crossword',
    difficulty: 'Medium',
    questions: 15,
    plays: '95k Plays',
    image: gameImage2,
  },
  {
    id: 'fruity-quiz',
    title: 'Fruity Quiz',
    category: 'Puzzle',
    difficulty: 'Easy',
    questions: 10,
    plays: '150k Plays',
    image: gameImage3,
  },
    {
    id: 'offering-help',
    title: 'Offering Help',
    category: 'Puzzle',
    difficulty: 'Difficult',
    questions: 20,
    plays: '80k Plays',
    image: gameImage4,
  },
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
        hard: '+20 poin/soal, tetapi -5 poin jika jawaban salah.',
        bonus: '+ (poin sesuai level) jika menjawab benar 6 soal berturut-turut.',
    },
    questions: [
      {
        id: 1,
        image: 'https://picsum.photos/seed/ear/100/100',
        instruction: 'Arrange them into sentences according to the picture',
        wordBank: [ {id: 'w1', text: 'The ear'}, {id: 'w2', text: 'is'}, {id: 'w3', text: 'for hearing'}],
      },
      {
        id: 2,
        image: 'https://picsum.photos/seed/lips/100/100',
        instruction: 'Arrange them into sentences according to the picture',
        wordBank: [ {id: 'w5', text: 'The mouth'}, {id: 'w6', text: 'is for speaking'}],
      },
      // ... tambahkan soal lainnya di sini jika perlu
    ]
  }
};