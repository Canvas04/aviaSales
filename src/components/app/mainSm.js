import React from 'react';
import classes from "./index.module.scss";
import Logo from "../logo";
import Filter from "../filter";

const {mainSm} = classes;

function MainSM() {
    return (
      <main className={mainSm}>
        <Logo />
        <Filter />
      </main>
    );
  }

  export default MainSM;