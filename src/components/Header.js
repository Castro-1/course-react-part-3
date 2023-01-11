import React from "react";

export default function Header() {
  return (
    <header className="header">
      <img
        className="logo"
        src={require("../images/troll.png")}
        alt="troll-face"
      />
      <h2 className="header-title">Meme Generator</h2>
      <p className="header-project">React Course - Project 3</p>
    </header>
  );
}
