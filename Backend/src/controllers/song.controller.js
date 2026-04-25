const songs = [
  {
    mood: "happy",
    title: "Happy Vibes",
    url: "https://www.soundhelix.com/examples/mp3/SoundHelix-Song-1.mp3",
    posterUrl: "https://picsum.photos/seed/happy/300/300",
  },
  {
    mood: "happy",
    title: "Upbeat Morning",
    url: "https://www.soundhelix.com/examples/mp3/SoundHelix-Song-4.mp3",
    posterUrl: "https://picsum.photos/seed/happy2/300/300",
  },
  {
    mood: "happy",
    title: "Sunny Groove",
    url: "https://www.soundhelix.com/examples/mp3/SoundHelix-Song-7.mp3",
    posterUrl: "https://picsum.photos/seed/happy3/300/300",
  },

  {
    mood: "sad",
    title: "Rainy Day",
    url: "https://www.soundhelix.com/examples/mp3/SoundHelix-Song-2.mp3",
    posterUrl: "https://picsum.photos/seed/sad/300/300",
  },
  {
    mood: "sad",
    title: "Blue Hours",
    url: "https://www.soundhelix.com/examples/mp3/SoundHelix-Song-5.mp3",
    posterUrl: "https://picsum.photos/seed/sad2/300/300",
  },
  {
    mood: "sad",
    title: "Empty Room",
    url: "https://www.soundhelix.com/examples/mp3/SoundHelix-Song-9.mp3",
    posterUrl: "https://picsum.photos/seed/sad3/300/300",
  },

  {
    mood: "surprised",
    title: "Whoa Moment",
    url: "https://www.soundhelix.com/examples/mp3/SoundHelix-Song-6.mp3",
    posterUrl: "https://picsum.photos/seed/surprised2/300/300",
  },
  {
    mood: "surprised",
    title: "Unexpected Turn",
    url: "https://www.soundhelix.com/examples/mp3/SoundHelix-Song-8.mp3",
    posterUrl: "https://picsum.photos/seed/surprised3/300/300",
  },
];

function getSong(req, res) {
  const { mood } = req.query;
  const matches = songs.filter((s) => s.mood === mood);
  const pool = matches.length > 0 ? matches : songs;
  const song = pool[Math.floor(Math.random() * pool.length)];
  res.status(200).json({ message: "song fetched successfully.", song });
}
module.exports = { getSong };
