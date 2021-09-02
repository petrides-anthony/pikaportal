import * as React from "react";
import { Button, Header, MediaCard } from 'pikaponents';

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
      onClick={() => alert("hi")}>
    </Button>
    <div className='mediaCardRow'>
      <MediaCard
        title="title"
        image='https://images.unsplash.com/photo-1472457897821-70d3819a0e24?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1049&q=80'
        imageAltText='alt text'
        buttonLabel='click for more...'
        buttonLink='https://www.google.co.uk'
        >
        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
      </MediaCard>
      <MediaCard
        title="title"
        image='https://images.unsplash.com/photo-1472457897821-70d3819a0e24?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1049&q=80'
        imageAltText='alt text'
        buttonLabel='click for more...'
        buttonLink='https://www.google.co.uk'
        >
        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
      </MediaCard>
      <MediaCard
        title="title"
        image='https://images.unsplash.com/photo-1472457897821-70d3819a0e24?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1049&q=80'
        imageAltText='alt text'
        buttonLabel='click for more...'
        buttonLink='https://www.google.co.uk'
        >
        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
      </MediaCard>
      <MediaCard
        title="title"
        image='https://images.unsplash.com/photo-1472457897821-70d3819a0e24?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1049&q=80'
        imageAltText='alt text'
        buttonLabel='click for more...'
        buttonLink='https://www.google.co.uk'
        >
        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
      </MediaCard>
      </div>
  </div>
);
