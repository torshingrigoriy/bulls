import React from 'react';

import style from './AddTeam.module.css';

function AddTeam(props) {

    let onChangeName = (e) => {
        let teamname = e.target.value;
        props.addTeamActions.writeTeamname(teamname);
    }
    let onChangeColor = (e) => {
        let teamcolor = e.target.value;
        props.addTeamActions.writeTeamcolor(teamcolor);
    }
    let onChangeCity = (e) => {
        let teamcity = e.target.value;
        props.addTeamActions.writeTeamcity(teamcity);
    }
    let onAddTeam = () => {
        props.addTeamActions.addTeam();
    }
  return (
      <div className={style.addteam}>
          <div className={style.form}>
              <div className={style.teamname}>
                  <input onChange={onChangeName}
                            value={props.teamspage.teamname_live}
                            type="text"
                            placeholder='Enter team name'/>
              </div>
              <div className={style.teamcolor}>
                  <input onChange={onChangeColor}
                         value={props.teamspage.teamcolor_live}
                         type="text"
                         placeholder='Team color' />
              </div>
              <div className={style.teamcity}>
                  <input onChange={onChangeCity}
                         value={props.teamspage.teamcity_live}
                         type="text"
                         placeholder='Team city'/>
              </div>
              
              <div className={style.buttonadd}>
                  <button className={style.button} onClick={onAddTeam}>Add team</button>
              </div>
          </div>
      </div>
  );
}

export default AddTeam;
