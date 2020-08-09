import React from 'react';

import style from './Players.module.css';
import Player from "./player/Player";
import AddPlayer from "./addPlayer/AddPlayer";
import Pagebar from "../../common/pagebar/Pagebar";
import Preloader from "../../common/preloader/Preloader";

let Players = (props) => {
    /*let trueChars = {
        photo={player.photo}
        firstname={player.firstname}
        lastname={player.lastname}
        position={player.position}
        height={player.height}
        weight={player.weight}
        number={player.number}
        birthday={player.birthday}
        team={player.team}
        rating={player.rating}
        awards={player.awards}
    }*/
    let player = (props.players.map(player => {
        return <Player
            id={player.id}
            name={player.name}
            photo={player.photos.small}
            followed={player.followed}
            status={player.status}
            uniqueUrlName={player.uniqueUrlName}
        />
    }));
    return (
       <>
           {props.isFetching ? <Preloader/> : null}
           <div>
               <Pagebar pageData={props.pagebar}
                        getPageCount={props.actions.getPageCount}
                        setCurrentPage={props.actions.setCurrentPage}
                        onPageChanged={props.actions.onPageChanged}/>
               <div className={style.head}>
                   <div className={style.photo}></div>
                   <div className={style.name}>Name</div>
                   <div className={style.position}>Position</div>
                   <div className={style.height}>Height</div>
                   <div className={style.weight}>Weight</div>
                   <div className={style.number}>Number</div>
                   <div className={style.birthday}>Birthday</div>
                   <div className={style.team}>Team</div>
                   <div className={style.rating}>Rating</div>
               </div>
               <div className="players_list">
                   {player}
               </div>
               <AddPlayer actions={props.actions} livedata={props.livedata}/>

           </div>
       </>
    )
}

export default Players;
