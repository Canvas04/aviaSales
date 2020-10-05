import React from "react";
import Checkbox from "./checkbox/";
import classes from "./filter.module.scss";
const { filter, header } = classes;

export default function Filter() {
  return (
    <div className={filter}>
      <h1 className={header}>Количество пересадок</h1>
      <Checkbox label={'Все'} />
      <Checkbox label={'Без пересадок'} />
      <Checkbox label={'1 пересадка'} />
      <Checkbox label={'2 пересадки'} />
      <Checkbox label={'3 пересадки'} />
    </div>
  );
}
