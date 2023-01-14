import React, { useState } from "react";
import { Card, CardContent, Typography, Button, Grid } from "@mui/material";
import { css } from '@emotion/react';

const buttonStyle = css`
    background: linear-gradient(45deg, #FE6B8B 30%, #FF8E53 90%);
    border: 0;
    border-radius: 3px;
    box-shadow: 0 3px 5px 2px rgba(255, 105, 135, .3);
    color: white;
    height: 48px;
    padding: 0 30px;
    margin: 20px 0;
    font-size: 16px;
    text-transform: uppercase;
    font-weight: bold;
    transition: 0.5s;
    &:hover{
        background: linear-gradient(45deg, #FF8E53 30%, #FE6B8B 90%);
        cursor: pointer;
    }
`;


const cardStyle = css`
    width: 45%;
    max-width: 500px;
    margin: 0 auto;
    display: inline-block;
`;

const logoStyle = css`
    width: 100px;
    height: 100px;
    margin: 0 auto;
`;

const SuperBowlPrediction = ({ nfcTeams, afcTeams }) => {
  const [superBowlPrediction, setSuperBowlPrediction] = useState([]);
  const [winnerPrediction, setWinnerPrediction] = useState("");

  const handlePrediction = () => {
    const randomNfcTeam = nfcTeams[Math.floor(Math.random() * nfcTeams.length)];
    const randomAfcTeam = afcTeams[Math.floor(Math.random() * afcTeams.length)];
    setSuperBowlPrediction([randomNfcTeam, randomAfcTeam]);

    //Flip a coin to determine winner
    const coinFlip = Math.floor(Math.random() * 2);
    if (coinFlip === 0) {
        setWinnerPrediction(randomNfcTeam.name);
        }
    else {
        setWinnerPrediction(randomAfcTeam.name);
    }
    
  };


   return (
    <Grid container spacing={3}>
      <Grid item xs={4} alignItems="left" justifyContent="left">
        <h2>AFC Teams</h2>
        {afcTeams.map((team, i) => (
          <Card key={i} css={cardStyle}>
            <CardContent>
              <img
                src={team.logoUrl}
                alt={`${team.name} logo`}
                css={logoStyle}
              />
              <Typography variant="h5" component="h2">
                {team.name}
              </Typography>
            </CardContent>
          </Card>
        ))}
      </Grid>

      <Grid item xs={4} alignItems="center" justifyContent="center">
        <h2>Super Bowl Teams - Prediction</h2>
        <div style={{display: 'flex'}}>
        {superBowlPrediction.map((team, i) => (
          <Card key={i} css={cardStyle}>
            <CardContent>
              <img
                src={team.logoUrl}
                alt={`${team.name} logo`}
                css={logoStyle}
                              />
              <Typography variant="h5" component="h2">
                {team.name}
              </Typography>
            </CardContent>
          </Card>
        ))}
        </div>
        <h2>Super Bowl Winner - Prediction</h2>
          <Card css={cardStyle}>
            <CardContent>
              <img
                src={superBowlPrediction.find(team => team.name === winnerPrediction)?.logoUrl}
                alt={`${winnerPrediction} logo`}
                css={logoStyle}
              />
              <Typography variant="h5" component="h2">
                {winnerPrediction}
              </Typography>
            </CardContent>
          </Card>
          <Button onClick={handlePrediction} css={buttonStyle}>
            Predict
          </Button>
      </Grid>

      <Grid item xs={4} alignItems="right" justifyContent="right">
        <h2>NFC Teams</h2>
        {nfcTeams.map((team, i) => (
          <Card key={i} css={cardStyle}>
            <CardContent>
              <img
                src={team.logoUrl}
                alt={`${team.name} logo`}
                css={logoStyle}
              />
              <Typography variant="h5" component="h2">
                {team.name}
              </Typography>
            </CardContent>
          </Card>
        ))}
      </Grid>
    </Grid>
  );
};


export default SuperBowlPrediction;

