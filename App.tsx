import { useEffect, useState } from "react";

import { Router } from "./routes";
import { io } from "socket.io-client";
import { AppState } from "react-native";

export default function App() {
  const websoc: any = io("https://wenlan-pavilion.top:5000");
  websoc.emit("online", "666a6267c5850954c0391481");
  useEffect(() => {
    const handleAppStateChange = (nextAppState) => {
      if (nextAppState === "background") {
        websoc.emit("under", "666a6267c5850954c0391481");
      }
      if (nextAppState == "active") {
        websoc.emit("online", "666a6267c5850954c0391481");
      }
    };

    AppState.addEventListener("change", handleAppStateChange);
  }, []);
  return <Router />;
}
