import * as React from "react";
import { Button, Header } from 'pikaponents';

export interface HelloWorldProps {
  userName: string;
  lang: string;
}
export const App = (props: HelloWorldProps) => (
  <div>
    <Header 
      headerIconLink="https://www.google.co.uk"
      headerText="I'm from Pikaponents"
      navLinkText1="Home"
      navLinkText2="About"
      >
      </Header>
    <Button label="Testing"></Button>
    <h1>
      Hi {props.userName} from React! Welcome to {props.lang}!
    </h1>
  </div>
);
