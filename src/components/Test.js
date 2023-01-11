//App to see how to use functions with js with react.

// import React from "react";

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

// export default function Test() {
//   const [thingsArray, setThings] = React.useState(["Thing 1", "Thing 2"]);

//   /* Challenge: Map over the thingsArray to generate a <p> element
//   for each item and render them on the page. */

//   /**
//    * Challenge: Add an event listener to the button so when
//    * it is clicked, it adds another thing to our array
//    *
//    * Hint: use the array length + 1 to determine the number
//    * of the "Thing" being added. Also, have you event listener
//    * console.log(thingsArray) after adding the new item to the
//    * array
//    *
//    * Spoiler: the page won't update when new things get added
//    * to the array!
//    */
//   function addThing() {
//     const newThing = `Thing ${thingsArray.length + 1}`;
//     setThings((prevState) => [...prevState, newThing]);
//   }

//   const things = thingsArray.map((element) => <p key={element}>{element}</p>);
//   return (
//     <div>
//       <button onClick={addThing}> Add Item</button>
//       {things}
//     </div>
//   );
// }

// export default function Test() {
//   /**
//    * Challenge: Replace our hard-coded "Yes" on the page with
//    * some state initiated with React.useState()
//    */
//   const [isImportant, setIsImportant] = React.useState("Yes");
//   /**
//    * Challenge:
//    * 1. Create a function called `handleClick` that runs
//    *    setIsImportant("No")
//    * 2. add a click event listener to the div.state--value
//    *    that runs `handleClick` when the div is clicked.
//    */

//   function handleClick() {
//     setIsImportant("No");
//   }
//   return (
//     <div className="state">
//       <h1 className="state--title">Is state important to know?</h1>
//       <div className="state--value" onClick={handleClick}>
//         <h1>{isImportant}</h1>
//       </div>
//     </div>
//   );
// }

// export default function Test() {
//   /**
//    * Challenge: Set up state to track our count (initial value is 0)
//    */
//   /**
//    * Challenge: Create a function called `add` that runs
//    * when the + button is clicked. (Can just console.log("add") for now)
//    */
//   const [count, setCount] = React.useState(0);
//   function minus() {
//     setCount((prevCount) => prevCount - 1);
//   }
//   function plus() {
//     setCount((prevCount) => prevCount + 1); // Best practice when changing old values.
//   }
//   return (
//     <div className="counter">
//       <button className="counter--minus" onClick={minus}>
//         –
//       </button>
//       <div className="counter--count">
//         <h1>{count}</h1>
//       </div>
//       <button className="counter--plus" onClick={plus}>
//         +
//       </button>
//     </div>
//   );
// }

// export default function Test() {
//   /**
//    * Challenge:
//    * - Initialize state for `isGoingOut` as a boolean
//    * - Make it so clicking the div.state--value flips that
//    *   boolean value (true -> false, false -> true)
//    * - Display "Yes" if `isGoingOut` is `true`, "No" otherwise
//    */
//   const [isGoingOut, setIsGoingOut] = React.useState(true);
//   function flip() {
//     setIsGoingOut((prevIsGoingOut) => !prevIsGoingOut);
//   }

//   return (
//     <div className="state">
//       <h1 className="state--title">Do I feel like going out tonight?</h1>
//       <div className="state--value" onClick={flip}>
//         <h1>{isGoingOut ? "Yes" : "No"}</h1>
//       </div>
//     </div>
//   );
// }
