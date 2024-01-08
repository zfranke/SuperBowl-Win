import React from "react";
import SuperBowlPrediction from "./components/SuperBowlPrediction";

//Team logos
import fortyniners from './logos/49ers.gif';
import Bears  from './logos/Bears.gif';
import Bengals from './logos/Bengals.gif';
import Bills from './logos/Bills.gif';
import Broncos from './logos/Broncos.gif';
import Browns from './logos/Browns.gif';
import Buccaneers from './logos/Buccaneers.gif';
import Cardinals from './logos/Cardinals.gif';
import Chargers from './logos/Chargers.gif';
import Chiefs from './logos/Chiefs.gif';
import Colts from './logos/Colts.gif';
import Commanders from './logos/Commanders.gif';
import Cowboys from './logos/Cowboys.gif';
import Dolphins from './logos/Dolphins.gif';
import Eagles from './logos/Eagles.gif';
import Falcons from './logos/Falcons.gif';
import Giants from './logos/Giants.gif';
import Jaguars from './logos/Jaguars.gif';
import Jets from './logos/Jets.gif';
import Lions from './logos/Lions.gif';
import Packers from './logos/Packers.gif';
import Panthers from './logos/Panthers.gif';
import Patriots from './logos/Patriots.gif';
import Raiders from './logos/Raiders.gif';
import Rams from './logos/Rams.gif';
import Ravens from './logos/Ravens.gif';
import Saints from './logos/Saints.gif';
import Seahawks from './logos/Seahawks.gif';
import Steelers from './logos/Steelers.gif';
import Texans from './logos/Texans.gif';
import Titans from './logos/Titans.gif';
import Vikings from './logos/Vikings.gif';

//2024 NFC teams are 49ers, Cowboys, Lions, Buccaners, Eagles, Rams, and Packers
//2024 AFC teams are Ravens, Bills, Chiefs, Texans, Browns, Dolphins, and Steelers
const App = () => {
  const nfcTeams = [
    { name: "49ers", logoUrl: fortyniners },
    { name: "Cowboys", logoUrl: Cowboys },
    { name: "Lions", logoUrl: Lions },
    { name: "Buccaneers", logoUrl: Buccaneers },
    { name: "Eagles", logoUrl: Eagles },
    { name: "Rams", logoUrl: Rams },
    { name: "Packers", logoUrl: Packers }
  ];

  const afcTeams = [
    { name: "Ravens", logoUrl: Ravens },
    { name: "Bills", logoUrl: Bills },
    { name: "Chiefs", logoUrl: Chiefs },
    { name: "Texans", logoUrl: Texans },
    { name: "Browns", logoUrl: Browns },
    { name: "Dolphins", logoUrl: Dolphins },
    { name: "Steelers", logoUrl: Steelers }
    
  ];

  return (
    <SuperBowlPrediction nfcTeams={nfcTeams} afcTeams={afcTeams} />
  );
};

export default App;
