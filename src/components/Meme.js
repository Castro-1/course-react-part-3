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

  /**
   * Challenge: Update our state to save the meme-related
   * data as an object called `meme`. It should have the
   * following 3 properties:
   * topText, bottomText, randomImage.
   *
   * The 2 text states can default to empty strings for now,
   * amd randomImage should default to "http://i.imgflip.com/1bij.jpg"
   *
   * Next, create a new state variable called `allMemeImages`
   * which will default to `memesData`, which we imported above
   *
   * Lastly, update the `getMemeImage` function and the markup
   * to reflect our newly reformed state object and array in the
   * correct way.
   */
  const [meme, setMeme] = React.useState({
    topText: "",
    bottomText: "",
    randomImage: "http://i.imgflip.com/1bij.jpg",
  });

  const [allMemeImages, setAllMemeImages] = React.useState(
    memesData.data.memes
  );

  function getMemeImage() {
    const randomMeme =
      allMemeImages[Math.floor(Math.random() * allMemeImages.length)];
    setMeme((prevState) => ({ ...prevState, randomImage: randomMeme.url }));
    console.log(meme);
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
      <img className="memeImage" src={meme.randomImage} alt="meme" />
    </main>
  );
}
