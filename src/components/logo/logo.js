import React from "react";
import logo from "./Plane.svg";

export default function Logo() {
  return (
    <>
      <div className='logo-block'>
        <img src={logo} alt="logo" width={200} height={200} />
      </div>
    </>
  );
}
