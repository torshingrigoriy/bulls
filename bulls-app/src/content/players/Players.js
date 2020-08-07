import React from 'react';

import style from './Players.module.css';
import Player from "./player/Player";
import AddPlayer from "./addPlayer/AddPlayer";

import * as axios from 'axios';

class Players extends React.Component {

    componentDidMount() {
        axios.get('http://arni.incolor.com.ua/players/players').then(response => {
            this.props.actions.setPlayers(response.data.players);
        });
    }

    render() {
        let player = (this.props.players.map(player => {
            return <Player
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
            />
        }));
        return <div>
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
            <div className="players_list">{player}</div>
            <AddPlayer actions={this.props.actions} livedata={this.props.livedata}/>
        </div>
    }
}

export default Players;
