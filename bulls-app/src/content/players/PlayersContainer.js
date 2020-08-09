import React from "react";
import {connect} from "react-redux";
import Players from "./Players";
import {
    like, dislike,
    writeFirstname, writeLastname,
    writePosition, writeHeight,
    writeWeight, writeNumber,
    writeBirthday, writeTeam,
    writeAwards, addPhoto,
    addPlayer, addAwards,
    changeRating, setPlayers,
    toggleIsFetching
} from "../../redux/players/players-reducer";

import {setCurrentPage, getTotalItemCount} from "../../redux/common/pagebar/pagebar-reducer";
import * as axios from "axios";

class PlayersC extends React.Component {
    componentDidMount() {
        this.props.toggleIsFetching(true);
        axios.get(`https://social-network.samuraijs.com/api/1.0/users?page=${this.props.pagebar.currentPage}&count=${this.props.pagebar.pageSize}`).then(response => {
            this.props.setPlayers(response.data.items);
            this.props.getTotalItemCount(response.data.totalCount);
            this.props.toggleIsFetching(false);
        });
    }
    onPageChanged = (pageNumber) => {
        this.props.toggleIsFetching(true);
        this.props.setCurrentPage(pageNumber);
        axios.get(`https://social-network.samuraijs.com/api/1.0/users?page=${pageNumber}&count=${this.props.pagebar.pageSize}`).then(response => {
            this.props.setPlayers(response.data.items);
            this.props.toggleIsFetching(false);
        });
    }
    render() {
        let actions = {
            like : this.props.like,
            dislike : this.props.dislike,
            writeFirstname : this.props.writeFirstname,
            writeLastname : this.props.writeLastname,
            writePosition : this.props.writePosition,
            writeHeight : this.props.writeHeight,
            writeWeight : this.props.writeWeight,
            writeNumber : this.props.writeNumber,
            writeBirthday : this.props.writeBirthday,
            writeTeam : this.props.writeTeam,
            writeAwards : this.props.writeAwards,
            addPhoto : this.props.addPhoto,
            addPlayer : this.props.addPlayer,
            addAwards : this.props.addAwards,
            changeRating : this.props.changeRating,
            setPlayers : this.props.setPlayers,
            getTotalItemCount : this.props.getTotalItemCount,
            setCurrentPage : this.props.setCurrentPage,
            onPageChanged: this.onPageChanged,
        }
        return (
            <>
                <Players livedata={this.props.livedata}
                         pagebar={this.props.pagebar}
                         players={this.props.players}
                         isFetching={this.props.isFetching}
                         actions={actions}
                />

            </>
        )

    }
}

let propsToState = (state) => {
    return {
        players: state.playerspage.players,
        livedata: state.playerspage.livedata,
        pagebar: state.pagebar,
        isFetching: state.playerspage.isFetching,
    }
}

let actionsToState = {
    like,
    dislike,
    writeFirstname,
    writeLastname,
    writePosition,
    writeHeight,
    writeWeight,
    writeNumber,
    writeBirthday,
    writeTeam,
    writeAwards,
    addPhoto,
    addPlayer,
    addAwards,
    changeRating,
    setPlayers,
    getTotalItemCount,
    setCurrentPage,
    toggleIsFetching,
}

const PlayersContainer = connect(propsToState, actionsToState)(PlayersC);

export default PlayersContainer;