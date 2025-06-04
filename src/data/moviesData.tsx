// src/data/moviesData.tsx
export interface Movie {
  id: number;
  title: string;
  poster_path: string;
  overview: string;
}

export const movies: Movie[] = [
  {
    id: 16,
    title: "Me Before You",
    poster_path: "https://image.tmdb.org/t/p/original/Ia3dzj5LnCj1ZBdlVeJrbKJQxG.jpg",
    overview: "A girl forms a bond with a wealthy man left paralyzed after an accident."
  },
  {
    id: 17,
    title: "Five Feet Apart",
    poster_path: "https://image.tmdb.org/t/p/original/khQolo0hQCQjByVpfUhkyQtOJSq.jpg",
    overview: "Two teens with cystic fibrosis fall in love but must stay apart physically."
  },
  {
    id: 3,
    title: "The Fault In Our Stars ",
    poster_path: "https://image.tmdb.org/t/p/original/iuuQpZ81Y1GRV6LMPP4ml1FrQn6.jpg",
    overview: "A weekend with girlfriend’s family turns disturbing."
  },
  {
    id: 4,
    title: "All The Bright Places",
    poster_path: "https://image.tmdb.org/t/p/original/z5mqMj9FeF9N6tS5XkuAezxZsWk.jpg",
    overview: "A team of explorers travel through a wormhole in space."
  },
  {
    id: 2,
    title: "La La Land",
    poster_path: "https://www.themoviedb.org/t/p/w600_and_h900_bestv2/uDO8zWDhfWwoFdKS4fzkUJt0Rf0.jpg",
    overview: "Batman faces the Joker, a criminal mastermind wreaking havoc in Gotham."
  },
  {
    id: 5,
    title: "Parasite",
    poster_path: "/7IiTTgloJzvGI1TAYymCfbfl3vT.jpg",
    overview: "A poor family schemes to become employed by a wealthy family."
  },
  {
    id: 6,
    title: "Joker",
    poster_path: "/udDclJoHjfjb8Ekgsd4FDteOkCU.jpg",
    overview: "A failed comedian descends into madness and chaos."
  },
  {
    id: 7,
    title: "The Matrix",
    poster_path: "/f89U3ADr1oiB1s9GkdPOEpXUk5H.jpg",
    overview: "A hacker discovers the nature of reality and his role in the war."
  },
  {
    id: 8,
    title: "Avengers: Endgame",
    poster_path: "/or06FN3Dka5tukK1e9sl16pB3iy.jpg",
    overview: "The Avengers assemble once more to undo Thanos' destruction."
  },
  {
    id: 9,
    title: "Titanic",
    poster_path: "/9xjZS2rlVxm8SFx8kPC3aIGCOYQ.jpg",
    overview: "A love story aboard the doomed RMS Titanic."
  },
  {
    id: 10,
    title: "The Shawshank Redemption",
    poster_path: "/q6y0Go1tsGEsmtFryDOJo3dEmqu.jpg",
    overview: "Two imprisoned men bond over years, finding solace and hope."
  },
  {
    id: 11,
    title: "Fight Club",
    poster_path: "/bptfVGEQuv6vDTIMVCHjJ9Dz8PX.jpg",
    overview: "An insomniac and a soap maker form an underground fight club."
  },
  {
    id: 12,
    title: "Forrest Gump",
    poster_path: "/clolk7rB5lAjs41SD0Vt6IXYLMm.jpg",
    overview: "The presidencies of Kennedy and Johnson seen through a man's eyes."
  },
  {
    id: 13,
    title: "The Lion King",
    poster_path: "/2bXbqYdUdNVa8VIWXVfclP2ICtT.jpg",
    overview: "A young lion prince flees his kingdom after his father’s death."
  },
  {
    id: 14,
    title: "Gladiator",
    poster_path: "/ty8TGRuvJLPUmAR1H1nRIsgwvim.jpg",
    overview: "A former Roman General seeks revenge against the corrupt emperor."
  }
  
];
