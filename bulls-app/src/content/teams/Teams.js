import React from 'react';

import style from './Teams.module.css';

import Team from "./team/Team";
import AddTeam from "./add-team/AddTeam";

function Teams(props) {
    let team = props.teamspage.teams
        .map(team => <Team name={team.name} color={team.color} city={team.city}/>)
  return (
      <div className={style.teamwrap}>
          <div className={style.title}><h2>Teams</h2></div>

          <div className={style.teams}>
              {team}
          </div>

          <AddTeam  teamspage={props.teamspage} addTeamActions={props.addTeamActions}/>

      </div>
  );
}

export default Teams;
