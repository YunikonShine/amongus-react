import "./Home.css";
import React from "react";
import Grid from '@mui/material/Grid';
import ButtonTask from "components/ButtonTask";

function template() {
  return (
    <div className="home home-bg-image box-align-buttons box-align-buttons-upper">
      <Grid className="box-align-buttons" justifyContent="center" alignItems="center">
        <Grid item xs={12} md={2} justifyContent="center" display="flex">
          <ButtonTask text="Jogador" img="impostor.png" redirect="/player"/>
        </Grid>
        <Grid item xs={12} md={2} justifyContent="center" display="flex">
          <ButtonTask text="Bomba" img="bomb.png" redirect="/bombs"/>
        </Grid>
        <Grid item xs={12} md={2} justifyContent="center" display="flex">
          <ButtonTask text="Painel de controle" img="painel.png" redirect="/panel" />
        </Grid>
      </Grid>
    </div>
  );
}

export default template;
