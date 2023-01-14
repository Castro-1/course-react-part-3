import React from "react";
// import Header from "./Header";
// import Meme from "./Meme";
import Test from "./Test";

export default function App() {
  return (
    <div className="main-container">
      {/* <Header />
      <Meme /> */}
      <Test />
    </div>
  );
}

/*
To run the challenge put it inside the app function.
challenge: complete the function below
Given a name, return "Good <timeOfDay>, <name>!" depending on the
current time of day.
    4 am - 11:59 am, timeOfDay = "morning"
    12 pm - 4:59 pm: timeOfDay = "afternoon"
    5 pm - 7:59 pm: timeOfDay = "evening"
    8 pm - 3:59 am: timeOfDay = "night"
E.g. if it's currently 1 pm, greeting("Jane") ==> "Good afternoon, Jane!"

Hint: you can get the current time of day by using: 

const date = new Date()
const hours = date.getHours()

*/

// function greeting(name) {
//   const date = new Date();
//   const hours = date.getHours();
//   let timeOfDay = "night";
//   if (hours >= 4 && hours < 12) timeOfDay = "morning";

//   if (hours >= 12 && hours < 17) timeOfDay = "afternoon";

//   if (hours >= 17 && hours < 20) timeOfDay = "evening";

//   console.log(`Good ${timeOfDay}, ${name}!`);
// }
// greeting("Bob");

// This challenge is a simple analogy to understand the difference between
// props and state, props we don't want to change (name) and state we can
// change (hours)
