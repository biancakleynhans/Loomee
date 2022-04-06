import React from "react";
import NavBar from "../../components/NavBar";
import Timer from "../../components/Timer";

export default function Home() {
  //   const timeNow = new Date().getTime();

  //   function saveTimeDone(newTime) {
  //     console.log("CALL BACK RESPONSE:", newTime);
  //   }

  return (
    <>
      {/*ONE WAY COMMS */}
      <NavBar title='Home' />

      {/*TWO WAY COMMS */}
      {/*    NUMBER AS PARAM/PROP           FUNCTION AS PARAM/PROP        */}
      {/* <Timer initTime={timeNow} saveTime={(newTime) => saveTimeDone(newTime)} /> */}
    </>
  );
}
