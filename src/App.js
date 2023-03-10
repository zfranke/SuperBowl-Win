import React from "react";
import SuperBowlPrediction from "./components/SuperBowlPrediction";

const App = () => {
  const nfcTeams = [
    { name: "Eagles", logoUrl: "https://content.sportslogos.net/logos/7/167/thumbs/960.gif" },
    { name: "49ers", logoUrl: "https://content.sportslogos.net/logos/7/179/thumbs/17994552009.gif" }
    
  ];

  const afcTeams = [
    { name: "Chiefs", logoUrl: "https://content.sportslogos.net/logos/7/162/thumbs/857.gif" },
    { name: "Bengals", logoUrl: "https://content.sportslogos.net/logos/7/154/thumbs/15420492021.gif" }
    
  ];

  return (
    <SuperBowlPrediction nfcTeams={nfcTeams} afcTeams={afcTeams} />
  );
};

export default App;

