import React from "react";
import memesData from "./memesData";

export default function Meme() {
  function chooseMeme() {
    const memesArray = memesData.data.memes;
    const randomMeme =
      memesArray[Math.floor(Math.random() * memesArray.length)];
    console.log(randomMeme.url);
  }
  return (
    <main className="meme">
      <div className="form">
        <input type="text" className="input" placeholder="top text" />
        <input type="text" className="input" placeholder="bottom text" />
        <button className="button" onClick={chooseMeme}>
          Get a new meme image 🖼
        </button>
      </div>
    </main>
  );
}
