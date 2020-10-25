import React from "react";
import {useSelector} from 'react-redux';
import classes from "./ticketListItem.module.scss";
import logo from "./S7 Logo.svg";
const { li ,pricesAndLogo,content,minorHeader} = classes;

export default function TicketListItem() {
  const ticketsObj = useSelector(store => {
    if(store.loadTickets.tickets.length !== 0) {
      return store.loadTickets.tickets;
    }
  })
  if(ticketsObj) {
    const {tickets} = ticketsObj;
    console.log(tickets);
  }
  return (
    <li className={li}>
      <div className={pricesAndLogo}>
        <h3 >13 400</h3>
        <img src={logo} alt={"S7 AirLines"} />
      </div>
      <div className={content}>
          <span >
              <h4 className={minorHeader}>MOW-HKT</h4>
              <p>10:45 - 08:00</p>
          </span>
          <span >
              <h4 className={minorHeader}>В ПУТИ</h4>
              <p>21ч 15м</p>
          </span>
          <span>
              <h4 className={minorHeader}>2 ПЕРЕСАДКИ</h4>
              <p>HKG,JNB</p>
          </span>
      </div>
      <div className={content}>
          <span>
              <h4 className={minorHeader}>MOW-HKT</h4>
              <p>10:45 - 08:00</p>
          </span>
          <span >
              <h4 className={minorHeader}>В ПУТИ</h4>
              <p>21ч 15м</p>
          </span>
          <span>
              <h4 className={minorHeader}>2 ПЕРЕСАДКИ</h4>
              <p>HKG,JNB</p>
          </span>
      </div>
    </li>
  );
}
