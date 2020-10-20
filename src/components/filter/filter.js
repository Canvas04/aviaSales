import React from "react";
import Checkbox from "./checkbox/";
import classes from "./filter.module.scss";
import { useMediaQuery } from "react-responsive";
import FilterLg from './filterLg';
import FilterSm from './filterSm';

const { filter, header, aside, search, filterSm, asideSm, searchSm } = classes;



function Filter() {
  const mobileScreen = useMediaQuery({ query: "(max-width: 567px)" });
  const laptopScreen = useMediaQuery({ query: "(min-width: 567px)" });
  return (
    <>
      {mobileScreen && <FilterSm/>}
      {laptopScreen && <FilterLg />}
    </>
  );
}

export default Filter;
