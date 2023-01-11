//App to see how to use functions with js with react.

import React from "react";

// export default function Test() {
//   function handleClick() {
//     console.log("I was clicked");
//   }
//   function handleHover() {
//     console.log("se mira pero no se toca");
//   }
//   return (
//     <div className="container">
//       <img
//         onMouseOver={handleHover}
//         src="https://picsum.photos/650/360"
//         alt="cool"
//       />
//       <button onClick={handleClick}>Click me </button>
//     </div>
//   );
// }

// Exercise 2

export default function Test() {
  const [thingsArray, setThings] = React.useState(["Thing 1", "Thing 2"]);

  /* Challenge: Map over the thingsArray to generate a <p> element
  for each item and render them on the page. */

  /**
   * Challenge: Add an event listener to the button so when
   * it is clicked, it adds another thing to our array
   *
   * Hint: use the array length + 1 to determine the number
   * of the "Thing" being added. Also, have you event listener
   * console.log(thingsArray) after adding the new item to the
   * array
   *
   * Spoiler: the page won't update when new things get added
   * to the array!
   */
  function addThing() {
    const newThing = `Thing ${thingsArray.length + 1}`;
    setThings((prevState) => [...prevState, newThing]);
  }

  const things = thingsArray.map((element) => <p key={element}>{element}</p>);
  return (
    <div>
      <button onClick={addThing}> Add Item</button>
      {things}
    </div>
  );
}
