import React from "react";
import {connect} from "react-redux";
import Players from "./Players";
import {
    likeAC,
    dislikeAC,
    writeFirstnameAC,
    writeLastnameAC,
    writePositionAC,
    writeHeightAC,
    writeWeightAC,
    writeNumberAC,
    writeBirthdayAC,
    writeTeamAC,
    writeAwardsAC,
    addPhotoAC, addPlayerAC, addAwardsAC, changeRatingAC, setPlayersAC
} from "../../redux/players/players-reducer";

let propsToState = (state) => {
    return {
        players: state.playerspage.players,
        livedata: state.playerspage.livedata,
    }
}
let dispatchToState = (dispatch) => {
    return {
        actions: {
            like: (id) => {
                dispatch(likeAC(id));
            },
            dislike: (id) => {
                dispatch(dislikeAC(id));
            },
            writeFirtsname: (firstname_live) => {
                dispatch(writeFirstnameAC(firstname_live));
            },
            writeLastname: (lastname_live) => {
                dispatch(writeLastnameAC(lastname_live));
            },
            writePosition: (position_live) => {
                dispatch(writePositionAC(position_live));
            },
            writeHeight: (height_live) => {
                dispatch(writeHeightAC(height_live));
            },
            writeWeight: (weight_live) => {
                dispatch(writeWeightAC(weight_live));
            },
            writeNumber: (number_live) => {
                dispatch(writeNumberAC(number_live));
            },
            writeBirthday: (birthday_live) => {
                dispatch(writeBirthdayAC(birthday_live));
            },
            writeTeam: (team_live) => {
                dispatch(writeTeamAC(team_live));
            },
            writeAwards: (awards_live) => {
                dispatch(writeAwardsAC(awards_live));
            },
            addPhoto: () => {
                dispatch(addPhotoAC());
            },
            addPlayer: () => {
                dispatch(addPlayerAC());
            },
            addAwards: () => {
                dispatch(addAwardsAC());
            },
            changeRating: (id) => {
                dispatch(changeRatingAC(id));
            },
            setPlayers: (players) => {
                dispatch(setPlayersAC(players));
            },
        }
    }
}

const PlayersContainer = connect(propsToState, dispatchToState)(Players);

export default PlayersContainer;