import React from "react";
import SuperBowlPrediction from "./components/SuperBowlPrediction";

const App = () => {
  const nfcTeams = [
    { name: "Eagles", logoUrl: "https://content.sportslogos.net/logos/7/167/thumbs/960.gif" },
    { name: "49ers", logoUrl: "https://content.sportslogos.net/logos/7/179/thumbs/17994552009.gif" },
    { name: "Vikings", logoUrl: "https://content.sportslogos.net/logos/7/172/thumbs/17227042013.gif" },
    { name: "Buccaneers", logoUrl: "https://content.sportslogos.net/logos/7/176/thumbs/17683632020.gif" },
    { name: "Cowboys", logoUrl: "https://content.sportslogos.net/logos/7/165/thumbs/406.gif" },
    { name: "Giants", logoUrl: "https://content.sportslogos.net/logos/7/166/thumbs/919.gif" },
    { name: "Seahawks", logoUrl: "https://content.sportslogos.net/logos/7/180/thumbs/pfiobtreaq7j0pzvadktsc6jv.gif" },
  ];

  const afcTeams = [
    { name: "Chiefs", logoUrl: "https://content.sportslogos.net/logos/7/162/thumbs/857.gif" },
    { name: "Bills", logoUrl: "https://content.sportslogos.net/logos/7/149/thumbs/n0fd1z6xmhigb0eej3323ebwq.gif" },
    { name: "Bengals", logoUrl: "https://content.sportslogos.net/logos/7/154/thumbs/15420492021.gif" },
    { name: "Jaguars", logoUrl: "https://content.sportslogos.net/logos/7/159/thumbs/15988562013.gif" },
    { name: "Chargers", logoUrl: "https://content.sportslogos.net/logos/7/6446/thumbs/644616602020.gif" },
    { name: "Ravens", logoUrl: "https://content.sportslogos.net/logos/7/153/thumbs/318.gif" },
    { name: "Dolphins", logoUrl: "https://content.sportslogos.net/logos/7/150/thumbs/15073062018.gif" },
  ];

  return (
    <SuperBowlPrediction nfcTeams={nfcTeams} afcTeams={afcTeams} />
  );
};

export default App;

