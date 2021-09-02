import * as React from "react";
import { Button, Header } from 'pikaponents';

// import "./app.css";
require("./app.css")

export interface HelloWorldProps {
  userName: string;
  lang: string;
}
export const App = (props: HelloWorldProps) => (
  <div className="container">
    <Header 
      headerIconLink="https://www.google.co.uk"
      headerText="Portal (Alpha)"
      navLinkText1="Home"
      navLinkText2="About"
      >
      </Header>
    <h1>
      Hi {props.userName}. Welcome to {props.lang}!
    </h1>
    <h2>Subtitle begins here</h2>
    <p>
      Body Text: Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt 
      ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco 
      laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in 
      voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat 
      non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
    </p>
    <Button 
      label="Click for more..."
      size="small"
      backgroundColor="black"
      onClick={() => alert("hi")}></Button>
  </div>
);
