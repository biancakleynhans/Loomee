import React, { useState } from "react";
import moment from "moment";

export default function Timer({ initTime, saveTime }) {
  const [startTime, setstartTime] = useState(moment(initTime));
  const [currTime, setcurrTime] = useState(moment(new Date()));
  const [timeDiff, settimeDiff] = useState(0); // milisec

  setTimeout(() => {
    setcurrTime(moment(new Date()));
    diffTime();
    // console.log("UPDATE: TIME", currTime);
  });

  function diffTime() {
    let res = 0;
    let s = moment(startTime);
    let e = moment(currTime);

    res = e.diff(s, "seconds");
    // console.log("DIFF", s, e, res);
    settimeDiff(res);
  }

  function endTimer() {
    let final = { start: startTime, end: currTime, diff: timeDiff };
    // call our function passed as a prop here
    saveTime(final);
    // run clean up
    setstartTime(moment(new Date()));
    setcurrTime(moment(new Date()));
    settimeDiff(0);
  }

  return (
    <>
      <h1>Timer</h1> <br />
      <h2>Time started {moment(startTime).format("HH:mm")}</h2> <br />
      <h2>Curr Time {moment(currTime).format("HH:mm")}</h2> <br />
      <h3>Seconds lapsed {timeDiff}</h3> <br />
      <button onClick={() => endTimer()}>Save time</button>
    </>
  );
}
