 import React from 'react';
 import classes from "./index.module.scss";
 import Logo from "../logo";
 import Filter from "../filter";
 
const {mainLg} = classes;
function MainLg() {
    return (
      <main className={mainLg}>
        <Logo />
        <Filter />
      </main>
    );
  }
  export default MainLg;