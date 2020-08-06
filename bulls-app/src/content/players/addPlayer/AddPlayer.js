import React from 'react';

import style from './AddPlayer.module.css';


function AddPlayer(props) {

  let addTeam = () => {
    props.actions.addPlayer();
  }
  let changeFirstname = (e) => {
    let newFirstname = e.target.value;
    props.actions.writeFirtsname(newFirstname);
  }
  let changeLastname = (e) => {
    let newLastname = e.target.value;
    props.actions.writeLastname(newLastname);
  }
  let changePosition = (e) => {
    let newPosition = e.target.value;
    props.actions.writePosition(newPosition);
  }
  let changeHeight = (e) => {
    let newHeight = e.target.value;
    props.actions.writeHeight(newHeight);
  }
  let changeWeight = (e) => {
    let newWeight = e.target.value;
    props.actions.writeWeight(newWeight);
  }
  let changeNumber = (e) => {
    let newNumber = e.target.value;
    props.actions.writeNumber(newNumber);
  }
  let changeBirthday = (e) => {
    let newBirthday = e.target.value;
    props.actions.writeBirthday(newBirthday);
  }
  let changeTeam = (e) => {
    let newTeam = e.target.value;
    props.actions.writeTeam(newTeam);
  }

  return <div>
    <input type="text" onChange={changeFirstname} value={props.livedata.firstname_live} placeholder="Player firstname" /><br/>
    <input type="text" onChange={changeLastname} value={props.livedata.lastname_live} placeholder="Player lastname" /><br/>
    <input type="text" onChange={changePosition} value={props.livedata.position_live} placeholder="Player position" /><br/>
    <input type="text" onChange={changeHeight} value={props.livedata.height_live} placeholder="Player height" /><br/>
    <input type="text" onChange={changeWeight} value={props.livedata.weight_live} placeholder="Player weight" /><br/>
    <input type="text" onChange={changeNumber} value={props.livedata.number_live} placeholder="Player jersey number" /><br/>
    <input type="text" onChange={changeBirthday} value={props.livedata.birthday_live} placeholder="Player birthday" /><br/>
    <input type="text" onChange={changeTeam} value={props.livedata.team_live} placeholder="Player current team" /><br/>
    <button onClick={addTeam} className={style.button}>Add</button>
  </div>
}

export default AddPlayer;
