import React from "react";
import memesData from "./memesData";

export default function Meme() {
  /**
   * Challenge: Save the random meme URL in state
   * - Create new state called `memeImage` with an
   *   empty string as default
   * - When the getMemeImage function is called, update
   *   the `memeImage` state to be the random chosen
   *   image URL
   * - Below the div.form, add an <img /> and set the
   *   src to the new `memeImage` state you created
   */
  const [memeImage, setMemeImage] = React.useState("");
  function getMemeImage() {
    const memesArray = memesData.data.memes;
    const randomMeme =
      memesArray[Math.floor(Math.random() * memesArray.length)];
    setMemeImage(randomMeme.url);
    console.log(memeImage);
  }
  return (
    <main className="meme">
      <div className="form">
        <input type="text" className="input" placeholder="top text" />
        <input type="text" className="input" placeholder="bottom text" />
        <button className="button" onClick={getMemeImage}>
          Get a new meme image 🖼
        </button>
      </div>
      <img className="memeImage" src={memeImage} alt="meme" />
    </main>
  );
}
