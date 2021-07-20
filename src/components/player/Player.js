import React from 'react'
import Details from '../details/Details.js'
import Control from '../control/Control'
import {useState, useEffect, useRef} from 'react'

function Player(props) {
    const audioEl = useRef(null);
    const [isPlaying, setIsPlaying] = useState(false);

    useEffect(() => {
        if(isPlaying) {
            audioEl.current.play();
        }
        else {
            audioEl.current.pause();
        }
    });

    const SkipSong = (forwards = true) => {
        if(forwards) {
            props.setCurrentSongIndex(() => {
                let temp = props.currentSongIndex;
                temp++;

                if(temp > props.songs.length - 1 ) {
                    temp = 0;
                }

                return temp;
            });
        } else {
            props.setCurrentSongIndex(() => {
                let temp = props.currentSongIndex;
                temp--;

                if(temp < 0) {
                    temp = props.songs.length - 1;
                }

                return temp;
            });
        }
        };
    return (
        <div className="player">
            <img src="https://c.wallhere.com/photos/c7/36/light_music_blur_canon_dark_blurry_warm_dof-583182.jpg!d" alt="background"/>
            <div className="container">
            <h4>
                Playing now
            </h4>
            <Details song = {props.songs[props.currentSongIndex]}/>
            <Control  
            isPlaying = {isPlaying}
            setIsPlaying = {setIsPlaying}
            SkipSong = {SkipSong}
            />
            <audio 
            className="player_audio" 
            src={props.songs[props.currentSongIndex].src}
            ref={audioEl}
            controls
            ></audio>
            <p>
                <span className="NextUp">Next up :</span> { ' ' }
                <span className="nextSong_info">
                    {props.songs[props.nextSongIndex].title} by {props.songs[props.nextSongIndex].artist}
                </span>
            </p>
            </div>
            
        </div>
    )
}

export default Player
