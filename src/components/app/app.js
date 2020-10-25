import React, { useEffect } from "react";
import { useDispatch } from "react-redux";
import { useMediaQuery } from "react-responsive";
import {connnect} from 'react-redux';
import MainLg from './mainLj';
import MainSM from './mainSm';
import {fetchId} from '../../action/loadSearchId';
import {getTickets} from '../../action/loadTickets';

const App = () => {
  const dispatch = useDispatch();
  useEffect(() => {
   const getId = dispatch(fetchId());
  const tickets = dispatch(getTickets())
  },[]);
  const mobileScreen = useMediaQuery({ query: "(max-width: 567px)" });
  const laptopScreen = useMediaQuery({ query: "(min-width: 567px)" });
  return (
    <>
      {" "}
      {laptopScreen && <MainLg />}
      {mobileScreen && <MainSM />}
    </>
  );
};


export default App;
