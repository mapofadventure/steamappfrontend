import React, { Component } from 'react'
import axios from 'axios';

class AppContent extends Component {
    constructor(props){
        super(props);
        this.state = {games: []};
    }
    componentDidMount() {
        axios.get(`/api/games/1`)
        .then(res => {
            this.setState({games: res.data});
        })
        .catch(console.log);
    }
    render() {
        return(
            this.state.games.map((game) => (
                <div key={game.appid}>{game.name}</div>
            ))

        );
    }

}

export default AppContent;