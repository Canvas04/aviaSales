import React from "react";
import TabPanel from "../tab-panel";
import classes from "./filter.module.scss";
import { Checkbox } from "antd";
import { pressAll } from "../../action";
import { connect } from "react-redux";
import { pressOne } from "../../action";
import  {getCheck,getCheckLabel,getCheckId} from './extra';

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
          checked={getCheck(1,stateCheck)}
        >
          {getCheckLabel(1,stateCheck)}
        </Checkbox>
        <Checkbox
          onChange={() =>
            pressOne(
              getCheckId(2,stateCheck)
            )
          }
          checked={getCheck(2,stateCheck)}
        >
         {getCheckLabel(2,stateCheck)}
        </Checkbox>
        <Checkbox
          onChange={() =>
            pressOne(
              getCheckId(3,stateCheck)
            )
          }
          checked={getCheck(3,stateCheck)}
        >
          {getCheckLabel(3,stateCheck)}
        </Checkbox>
        <Checkbox
          onChange={() =>
            pressOne(
              getCheckId(4,stateCheck)
            )
          }
          checked={getCheck(4,stateCheck)}
        >
           {getCheckLabel(4,stateCheck)}
        </Checkbox>
        <Checkbox
          onChange={() =>
            pressOne(
              getCheckId(5,stateCheck)
            )
          }
          checked={getCheck(5,stateCheck)}

        >
          {getCheckLabel(5,stateCheck)}
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
