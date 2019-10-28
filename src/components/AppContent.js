import React, { Component } from 'react'
import axios from 'axios';

class AppContent extends Component {
    constructor(props) {
        super(props);
        this.state = { games: [] };
    }
    componentDidMount() {
        axios.get(`/api/games/1`)
            .then(res => {
                this.setState({ games: res.data });
            })
            .catch(console.log);
    }
    render() {
        return (
            this.state.games.map((game) => (
                <div className="gameData" key={game.appid}>
                    <div className="gameImage"><img src={game.headerimage}></img></div>
                    <div className="gameTitle"><p>{game.name}</p></div>
                    <div className="gameDescription">
                        <p>{game.description}</p>
                        <p>Release Date: {game.releasedate}</p>
                        <p>Owners: {game.reviewCount}</p>
                    </div>
                    <div className="gameSalesPrediction">Revenue: {game.reviewCount * game.price}</div>
                </div>
            ))

        );
    }

}

export default AppContent;