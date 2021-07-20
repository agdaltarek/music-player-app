import Player from "./components/player/Player"
import { useState , useEffect } from 'react'


function App() {

  const [songs] = useState([
    {
        title: "Illuminatro",
        artist: "Logic",
        img_src: "./images/cover.jpg",
        src: "./songs/01 Illuminatro.mp3"
      },
      {
        title: "Flexicution",
        artist: "Logic",
        img_src: "./images/cover.jpg",
        src: "./songs/02 Flexicution.mp3"
      },
      {
      title: "The Jam",
        artist: "Logic",
        img_src: "./images/cover.jpg",
        src: "./songs/03 The Jam.mp3"
      },
      {
      title: "Slave II",
        artist: "Logic",
        img_src: "./images/cover.jpg",
        src: "./songs/04 Slave II.mp3"
      },
      {
      title: "A Word From Our Sponsor",
        artist: "Logic",
        img_src: "./images/cover.jpg",
        src: "./songs/05 A Word From Our Sponsor.mp3"
      },
      {
        title: "Wrist (Feat. Pusha T)",
        artist: "Logic",
        img_src: "./images/cover.jpg",
        src: "./songs/06 Wrist (Feat. Pusha T).mp3"
      },
      {
        title: "Super Mario Wold",
        artist: "Logic",
        img_src: "./images/cover.jpg",
        src: "./songs/07 Super Mario Wold.mp3"
      },
      {
        title: "Studio Ambience At Night",
        artist: "Logic",
        img_src: "./images/cover.jpg",
        src: "./songs/08 Studio Ambience At Night.mp3"
      },
      {
        title: "44 Bars",
        artist: "Logic",
        img_src: "./images/cover.jpg",
        src: "./songs/09 44 Bars.mp3"
      },
      {
        title: "Slave",
        artist: "Logic",
        img_src: "./images/cover.jpg",
        src: "./songs/10 Slave.mp3"
      },
      {
        title: "Deeper Than Money",
        artist: "Logic",
        img_src: "./images/cover.jpg",
        src: "./songs/11 Deeper Than Money.mp3"
      },
  ]);

  const [currentSongIndex, setCurrentSongIndex] = useState(0);
  const [nextSongIndex, setNextSongIndex] = useState(0);

  useEffect(() => {
    setNextSongIndex(() => {
      if(currentSongIndex + 1 > songs.length - 1){
        return 0;
      } else {
        return currentSongIndex + 1;
      }
    })
    },[currentSongIndex, songs.length]);


  return (
    <>
      <Player 
      currentSongIndex = {currentSongIndex}
      setCurrentSongIndex = {setCurrentSongIndex}
      nextSongIndex = {nextSongIndex}
      songs = {songs}
      />
    </>
  );
}

export default App;
