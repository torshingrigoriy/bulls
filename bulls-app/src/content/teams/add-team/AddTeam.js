import React from 'react';

import style from './AddTeam.module.css';
import {writeTeamnameAC, writeTeamcolorAC, writeTeamcityAC, addTeamAC} from "../../../redux/teams/teams-reducer";


function AddTeam(props) {

    let writeTeamname = (e) => {
        let teamname = e.target.value;
        let action = writeTeamnameAC(teamname);
        props.dispatch(action);
    }
    let writeTeamcolor = (e) => {
        let teamcolor = e.target.value;
        let action = writeTeamcolorAC(teamcolor);
        props.dispatch(action);
    }
    let writeTeamcity = (e) => {
        let teamcity = e.target.value;
        let action = writeTeamcityAC(teamcity);
        props.dispatch(action);
    }
    let addTeam = () => {
        let action = addTeamAC();
        props.dispatch(action);
    }
  return (
      <div className={style.addteam}>
          <div className={style.form}>
              <div className={style.teamname}>
                  <input onChange={writeTeamname}
                            value={props.addData.teamname_live}
                            type="text"
                            placeholder='Enter team name'/>
              </div>
              <div className={style.teamcolor}>
                  <input onChange={writeTeamcolor} value={props.addData.teamcolor_live} type="text" placeholder='Team color' />
              </div>
              <div className={style.teamcity}>
                  <input onChange={writeTeamcity} value={props.addData.teamcity_live} type="text" placeholder='Team city'/>
              </div>
              
              <div className={style.buttonadd}>
                  <button className={style.button} onClick={addTeam}>Add team</button>
              </div>
          </div>
      </div>
  );
}

export default AddTeam;
