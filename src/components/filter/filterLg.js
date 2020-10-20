import React from "react";
import TabPanel from "../tab-panel";
import classes from "./filter.module.scss";
import { Checkbox } from "antd";
import { pressAll } from "../../action";
import { connect } from "react-redux";
import { pressOne } from "../../action";

const { filter, header, aside, search } = classes;

function FilterLg({ stateCheck, pressAll, pressOne }) {
  return (
    <div className={filter}>
      <aside className={aside}>
        <h1 className={header}>КОЛИЧЕСТВО ПЕРЕСАДОК</h1>
        <Checkbox
          onChange={() => {
            pressAll();
          }}
          checked={
            stateCheck.filter((el) => el.id === 1).map((el) => el.checked)[0]
          }
        >
          {stateCheck
            .filter((el) => el.id === 1)
            .map((el) => el.label)
            .join(" ")}
        </Checkbox>
        <Checkbox
          onChange={() =>
            pressOne(
              stateCheck.filter((el) => el.id === 2).map((el) => el.id)[0]
            )
          }
          checked={
            stateCheck.filter((el) => el.id === 2).map((el) => el.checked)[0]
          }
        >
          {stateCheck
            .filter((el) => el.id === 2)
            .map((el) => el.label)
            .join(" ")}
        </Checkbox>
        <Checkbox
          onChange={() =>
            pressOne(
              stateCheck.filter((el) => el.id === 3).map((el) => el.id)[0]
            )
          }
          checked={
            stateCheck.filter((el) => el.id === 3).map((el) => el.checked)[0]
          }
        >
          {stateCheck
            .filter((el) => el.id === 3)
            .map((el) => el.label)
            .join(" ")}
        </Checkbox>
        <Checkbox
          onChange={() =>
            pressOne(
              stateCheck.filter((el) => el.id === 4).map((el) => el.id)[0]
            )
          }
          checked={
            stateCheck.filter((el) => el.id === 4).map((el) => el.checked)[0]
          }
        >
          {stateCheck
            .filter((el) => el.id === 4)
            .map((el) => el.label)
            .join(" ")}
        </Checkbox>
        <Checkbox
          onChange={() =>
            pressOne(
              stateCheck.filter((el) => el.id === 5).map((el) => el.id)[0]
            )
          }
          checked={
            stateCheck.filter((el) => el.id === 5).map((el) => el.checked)[0]
          }
        >
          {stateCheck
            .filter((el) => el.id === 5)
            .map((el) => el.label)
            .join(" ")}
        </Checkbox>
      </aside>
      <aside className={search}>
        <TabPanel />
      </aside>
    </div>
  );
}

const mapStateToProps = (state) => {
  return {
    stateCheck: state.check.items,
  };
};
const mapDispatchToProps = (dispatch) => {
  return {
    pressAll: () => dispatch(pressAll()),
    pressOne: (id) => dispatch(pressOne(id)),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(FilterLg);
