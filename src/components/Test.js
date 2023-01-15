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

// export default function Test() {
//   /**
//    * Challenge: Convert the code below to use an array
//    * held in state instead of a local variable. Initialize
//    * the state array with the same 2 items below
//    *
//    * Don't worry about fixing `addItem` quite yet.
//    */
//   const [thingsArray, setThingsArray] = React.useState(["Thing 1", "Thing 2"]);

//   function addItem() {
//     setThingsArray((prevState) => [
//       ...prevState,
//       `Thing ${prevState.length + 1}`,
//     ]);
//   }

//   const thingsElements = thingsArray.map((thing) => <p key={thing}>{thing}</p>);

//   return (
//     <div>
//       <button onClick={addItem}>Add Item</button>
//       {thingsElements}
//     </div>
//   );
// }

// export default function App() {
//   const [contact, setContact] = React.useState({
//     firstName: "John",
//     lastName: "Schmoe",
//     phone: "+2 (719) 555-1212",
//     email: "johnschmoe@example.com",
//     isFavorite: false,
//   });
//   /**
//    * Challenge: Fill in the values in the markup
//    * using the properties of our state object above
//    * (Ignore `isFavorite` for now)
//    */

//   /**
//    * Challenge: Use a ternary to determine which star image filename
//    * should be used based on the `contact.isFavorite` property
//    *
//    * `true` => "star-filled.png"
//    * `false` => "star-empty.png"
//    */

//   let starIcon = contact.isFavorite ? "filled" : "empty";

//   function toggleFavorite() {
//     setContact((prevState) => ({
//       ...prevState,
//       isFavorite: !prevState.isFavorite,
//     }));
//   }

//   return (
//     <main>
//       <article className="card">
//         <img src="./images/user.png" className="card--image" alt="gentleman" />
//         <div className="card--info">
//           <img
//             src={`../images/star-${starIcon}.png`}
//             className="card--favorite"
//             onClick={toggleFavorite}
//             alt={`star-${starIcon}`}
//           />
//           <h2 className="card--name">{`${contact.firstName} ${contact.lastName}`}</h2>
//           <p className="card--contact">{contact.phone}</p>
//           <p className="card--contact">{contact.email}</p>
//         </div>
//       </article>
//     </main>
//   );
// }

// export default function Test() {
//   const [count, setCount] = React.useState(0);

//   function add() {
//     setCount((prevCount) => prevCount + 1);
//   }

//   function subtract() {
//     setCount((prevCount) => prevCount - 1);
//   }

//   console.log("test redered");

//   /**
//    * Challenge:
//    * - Create a new component named Count
//    *    - It should receive a prop called `number`, whose value
//    *      is the current value of our count
//    *    - Have the component render the whole div.counter--count
//    *      and display the incoming prop `number`
//    * - Replace the div.counter--count below with an instance of
//    *   the new Count component
//    */
//   return (
//     <div className="counter">
//       <button className="counter--minus" onClick={subtract}>
//         –
//       </button>
//       <Count number={count} />
//       <button className="counter--plus" onClick={add}>
//         +
//       </button>
//     </div>
//   );
// }

// function Count(props) {
//   const { number } = props;
//   console.log("count rendered");
//   return (
//     <div className="counter--count">
//       <h1>{number}</h1>
//     </div>
//   );
// }

// export default function Test() {
//   const [contact, setContact] = React.useState({
//     firstName: "John",
//     lastName: "Doe",
//     phone: "+1 (719) 555-1212",
//     email: "itsmyrealname@example.com",
//     isFavorite: true,
//   });

//   /**
//    * Challenge: Move the star image into its own component
//    * - It should receive a prop called `isFilled` that it
//    *   uses to determine which icon it will display
//    * - Import and render that component, passing the value of
//    *   `isFavorite` to the new `isFilled` prop.
//    * - Don't worry about the abiliity to flip this value quite yet.
//    *   Instead, you can test if it's working by manually changing
//    *   `isFavorite` in state above.
//    */

//   function toggleFavorite() {
//     setContact((prevContact) => ({
//       ...prevContact,
//       isFavorite: !prevContact.isFavorite,
//     }));
//   }

//   return (
//     <main>
//       <article className="card">
//         <img src="./images/user.png" className="card--image" alt="gentleman" />
//         <div className="card--info">
//           <Star isFilled={contact.isFavorite} handleClick={toggleFavorite} />
//           <h2 className="card--name">
//             {contact.firstName} {contact.lastName}
//           </h2>
//           <p className="card--contact">{contact.phone}</p>
//           <p className="card--contact">{contact.email}</p>
//         </div>
//       </article>
//     </main>
//   );
// }

// function Star(props) {
//   const { isFilled, handleClick } = props;
//   let starIcon = isFilled ? "star-filled.png" : "star-empty.png";
//   return (
//     <img
//       src={`../images/${starIcon}`}
//       className="card--favorite"
//       onClick={handleClick}
//       alt={starIcon}
//     />
//   );
// }

// const boxesArray = [
//   {
//     id: 1,
//     on: true,
//   },
//   {
//     id: 2,
//     on: false,
//   },
//   {
//     id: 3,
//     on: true,
//   },
//   {
//     id: 4,
//     on: true,
//   },
//   {
//     id: 5,
//     on: false,
//   },
//   {
//     id: 6,
//     on: false,
//   },
// ];

// export default function Test() {
//   /**
//    * Challenge part 1:
//    * 1. Initialize state with the default value of the
//    *    array pulled in from boxes.js
//    * 2. Map over that state array and display each one
//    *    as an empty square (black border, transparent bg color)
//    *    (Don't worry about using the "on" property yet)
//    */

//   /**
//    * Challenge part 2:
//    * 1. Create a separate component called "Box" and
//    *    replace the `div` above with our <Box /> components
//    * 2. Pass the Box component a prop called `on` with the
//    *    value of the same name from the `boxes` objects
//    * 3. In the Box component, apply dynamic styles to determine
//    *    the backgroundColor of the box. If it's `on`, set the
//    *    backgroundColor to "#222222". If off, set it to "none"
//    */
//   const [boxes, setBoxes] = React.useState(boxesArray);
//   /**
//    * Challenge: Create a toggle() function that logs
//    * "clicked!" to the console
//    *
//    * Pass that function down to each of the Box components
//    * and set it up so when they get clicked it runs the function
//    */

//   /**
//    * Challenge: use setSquares to update the
//    * correct square in the array.
//    *
//    * Make sure not to directly modify state!
//    *
//    * Hint: look back at the lesson on updating arrays
//    * in state if you need a reminder on how to do this
//    */

//   function toggleBox(id) {
//     setBoxes((prevBoxes) => {
//       return prevBoxes.map((box) => {
//         return box.id === id ? { ...box, on: !box.on } : box;
//       });
//     });
//   }

//   const displayBoxes = boxes.map((box) => (
//     <Box toggleBox={() => toggleBox(box.id)} on={box.on} key={box.id} />
//   ));
//   return (
//     <main>
//       <h1>Boxes will go here</h1>
//       {displayBoxes}
//     </main>
//   );
// }

// function Box(props) {
//   const { toggleBox, on } = props;
//   /**
//    * Challenge: Create state controlling whether
//    * this box is "on" or "off". Use the incoming
//    * `props.on` to determine the initial state.
//    *
//    * Create an event listener so when the box is clicked,
//    * it toggles from "on" to "off".
//    *
//    * Goal: clicking each box should toggle it on and off.
//    */

//   const styles = {
//     backgroundColor: on ? "#222222" : "transparent",
//   };

//   return <div className="box" style={styles} onClick={toggleBox}></div>;
// }

// export default function Joke(props) {
//     /**
//      * Challenge:
//      * - Create state `isShown` (boolean, default to `false`)
//      * - Add a button that toggles the value back and forth
//      */
//     const [isShown, setIsShown] = React.useState(false)
//     /**
//      * Challenge:
//      * - Only display the punchline paragraph if `isShown` is true
//      */
//     function toggleShown(){
//         setIsShown(prevShown => !prevShown)
//     }
//     return (
//         <div>
//             {props.setup && <h3>{props.setup}</h3>}
//             {isShown && <p>{props.punchline}</p>}
//             <button onClick={toggleShown}>Show Punchline</button>
//             <hr />
//         </div>
//     )
// }

// export default function Test() {
//   const [messages, setMessages] = React.useState(["a", "b"]);
//   /**
//    * Challenge:
//    * - Only display the <h1> below if there are unread messages
//    */
//   return (
//     <div>
//       {messages.length > 0 && (
//         <h1>You have {messages.length} unread messages!</h1>
//       )}
//     </div>
//   );
// }

// export default function Joke(props) {
//   const [isShown, setIsShown] = React.useState(false);
//   const action = isShown ? "Hide" : "Show";
//   function toggleShown() {
//     setIsShown((prevShown) => !prevShown);
//   }
//   return (
//     <div>
//       {props.setup && <h3>{props.setup}</h3>}
//       {isShown && <p>{props.punchline}</p>}
//       <button onClick={toggleShown}>{action} Punchline</button>
//       <hr />
//     </div>
//   );
// }

// export default function Test() {
//   const [messages, setMessages] = React.useState(["a", "b"]);
//   /**
//    * Challenge:
//    * - If there are no unread messages, display "You're all caught up!"
//    * - If there are > 0 unread messages, display "You have <n> unread
//    *   message(s)"
//    *      - If there's exactly 1 unread message, it should read "message"
//    *        (singular)
//    */
//   const displayFrase =
//     messages.length > 0
//       ? `You have ${messages.length} unread message${
//           messages.length > 1 ? "s" : ""
//         }`
//       : "You're all caught up!";
//   return (
//     <div>
//       <h1>{displayFrase}</h1>
//     </div>
//   );
// }

// export default function Form() {
//   const [formData, setFormData] = React.useState({
//     firstName: "",
//     lastName: "",
//     email: "",
//     comments: "",
//     isFriendly: true,
//     employment: "",
//     favColor: "",
//   });

//   function handleChange(event) {
//     /**
//      * Challenge: update the firstName state on every keystroke
//      */
//     const { name, value, type, checked } = event.target;
//     setFormData((prevFormData) => {
//       return {
//         ...prevFormData,
//         [name]: type === "checkbox" ? checked : value,
//       };
//     });
//   }
//   /**
//    * Challenge: Track the applicant's last name as well
//    */
//   /**
//    * Challenge: add an email field/state to the form
//    */
//   function handleSubmit(event) {
//     event.preventDefault();
//     // submitToApi(formData)
//     console.log(formData);
//   }
//   return (
//     <form onSubmit={handleSubmit}>
//       <input
//         type="text"
//         placeholder="First Name"
//         onChange={handleChange}
//         name="firstName"
//         value={formData.firstName}
//       />
//       <input
//         type="text"
//         placeholder="Last Name"
//         onChange={handleChange}
//         name="lastName"
//         value={formData.lastName}
//       />
//       <input
//         type="email"
//         placeholder="Email"
//         onChange={handleChange}
//         name="email"
//         value={formData.email}
//       />
//       {/*
//        * Challenge: Add a textarea for "comments" to the form
//        * Make sure to update state when it changes.
//        */}
//       <textarea
//         value={formData.comments}
//         placeholder="Comments"
//         name="comments"
//         onChange={handleChange}
//       />
//       <input
//         type="checkbox"
//         id="isFriendly"
//         checked={formData.isFriendly}
//         onChange={handleChange}
//         name="isFriendly"
//       />
//       <label htmlFor="isFriendly">Are you friendly?</label>
//       <fieldset>
//         <legend>Current employment status</legend>

//         <input
//           type="radio"
//           id="unemployed"
//           name="employment"
//           value="unemployed"
//           checked={formData.employment === "unemployed"}
//           onChange={handleChange}
//         />
//         <label htmlFor="unemployed">Unemployed</label>
//         <br />

//         <input
//           type="radio"
//           id="part-time"
//           name="employment"
//           value="part-time"
//           checked={formData.employment === "part-time"}
//           onChange={handleChange}
//         />
//         <label htmlFor="part-time">Part-time</label>
//         <br />

//         <input
//           type="radio"
//           id="full-time"
//           name="employment"
//           value="full-time"
//           checked={formData.employment === "full-time"}
//           onChange={handleChange}
//         />
//         <label htmlFor="full-time">Full-time</label>
//         <br />
//       </fieldset>
//       <label htmlFor="favColor">What is your favorite color?</label>
//       <select
//         id="favColor"
//         value={formData.favColor}
//         onChange={handleChange}
//         name="favColor"
//       >
//         <option value="">-- Choose --</option>
//         <option value="red">Red</option>
//         <option value="orange">Orange</option>
//         <option value="yellow">Yellow</option>
//         <option value="green">Green</option>
//         <option value="blue">Blue</option>
//         <option value="indigo">Indigo</option>
//         <option value="violet">Violet</option>
//       </select>
//       <button>Submit</button>
//     </form>
//   );
// }

// export default function App() {
//   /**
//    * Challenge: Connect the form to local state
//    *
//    * 1. Create a state object to store the 4 values we need to save.
//    * 2. Create a single handleChange function that can
//    *    manage the state of all the inputs and set it up
//    *    correctly
//    * 3. When the user clicks "Sign up", check if the
//    *    password & confirmation match each other. If
//    *    so, log "Successfully signed up" to the console.
//    *    If not, log "passwords to not match" to the console.
//    * 4. Also when submitting the form, if the person checked
//    *    the "newsletter" checkbox, log "Thanks for signing
//    *    up for our newsletter!" to the console.
//    */
//   const [formData, setFormData] = React.useState({
//     email: "",
//     password: "",
//     passwordConfirm: "",
//     newsletter: true,
//   });

//   function handleChange(event) {
//     const { name, value, type, checked } = event.target;
//     setFormData((prevFormData) => {
//       return {
//         ...prevFormData,
//         [name]: type === "checkbox" ? checked : value,
//       };
//     });
//   }

//   function handleSubmit(event) {
//     event.preventDefault();
//     const { password, passwordConfirm, newsletter } = formData;
//     if (password === passwordConfirm) console.log("Successfully signed up");
//     else {
//       console.log("Passwords do not match");
//       return;
//     }
//     if (newsletter) console.log("Thanks for signing up for our newsletter!");
//   }

//   return (
//     <div className="form-container">
//       <form className="form" onSubmit={handleSubmit}>
//         <input
//           type="email"
//           placeholder="Email address"
//           className="form--input"
//           name="email"
//           value={formData.email}
//           onChange={handleChange}
//         />
//         <input
//           type="password"
//           placeholder="Password"
//           className="form--input"
//           name="password"
//           value={formData.password}
//           onChange={handleChange}
//         />
//         <input
//           type="password"
//           placeholder="Confirm password"
//           className="form--input"
//           name="passwordConfirm"
//           value={formData.passwordConfirm}
//           onChange={handleChange}
//         />

//         <div className="form--marketing">
//           <input
//             id="okayToEmail"
//             type="checkbox"
//             checked={formData.newsletter}
//             name="newsletter"
//             onChange={handleChange}
//           />
//           <label htmlFor="okayToEmail">I want to join the newsletter</label>
//         </div>
//         <button className="form--submit">Sign up</button>
//       </form>
//     </div>
//   );
// }

// export default function Test() {
//   const [starWarsData, setStarWarsData] = React.useState({});
//   const [count, setCount] = React.useState(0);

//   // 1. GET the starWarsData (fetch)
//   // 2. Save the starWarsData to state
//   console.log("component rendered");

//   /**
//    * Challenge: re-write the useEffect
//    * It should run any time `count` changes
//    * For now, just console.log("Effect function ran")
//    */
//   /**
//    * Quiz:
//    * 1. What will happen if I put back our Star Wars API call
//    *    into the effect function?
//    * 2. How will the useEffect be different if I use
//    *    setStarWarsData() instead of console.log()
//    * 3. What SHOULD be in our dependencies array in this case?
//    */
//   React.useEffect(() => {
//     console.log("Effect function ran");
//     fetch("https://swapi.dev/api/people/1")
//       .then((res) => res.json())
//       .then((data) => setStarWarsData(data));
//   }, []);

//   return (
//     <div>
//       <pre>{JSON.stringify(starWarsData, null, 2)}</pre>
//       <h2>The count is {count}</h2>
//       <button onClick={() => setCount((prevCount) => prevCount + 1)}>
//         Add
//       </button>
//     </div>
//   );
// }

// export default function App() {
//   const [starWarsData, setStarWarsData] = React.useState({});
//   const [count, setCount] = React.useState(1);

//   /**
//    * Challenge: Combine `count` with the request URL
//    * so pressing the "Get Next Character" button will
//    * get a new character from the Star Wars API.
//    * Remember: don't forget to consider the dependencies
//    * array!
//    */

//   React.useEffect(
//     function () {
//       console.log("Effect ran");
//       fetch(`https://swapi.dev/api/people/${count}`)
//         .then((res) => res.json())
//         .then((data) => setStarWarsData(data));
//     },
//     [count]
//   );

//   return (
//     <div>
//       <h2>The count is {count}</h2>
//       <button onClick={() => setCount((prevCount) => prevCount + 1)}>
//         Get Next Character
//       </button>
//       <pre>{JSON.stringify(starWarsData, null, 2)}</pre>
//     </div>
//   );
// }
