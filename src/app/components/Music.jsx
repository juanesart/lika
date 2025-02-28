'use client'
import { useState } from 'react';
import { FaPlayCircle, FaPauseCircle } from "react-icons/fa";

export default function Music({ track1 }) {
    const [isPlaying1, setIsPlaying1] = useState(false);

    const handlePlayPause1 = () => {
        const audio = document.getElementById(track1);
        if (isPlaying1) {
            audio.pause();
        } else {
            audio.play();
        }
        setIsPlaying1(!isPlaying1);
    };

    return (
        <div className="music-page">
            <div>
                <button onClick={handlePlayPause1}>
                    {isPlaying1
                        ? <FaPauseCircle size={50} fill='#AA60C8' />
                        : <FaPlayCircle size={50} fill='#AA60C8' />}
                </button>
                <audio id={track1} src={track1}></audio>
            </div>
        </div>
    );
}
