import React, { Component } from "react";
import Header from "./Component/Header";
class Game extends Component {

    state = {
        score: 0,
        topScore: 0
    }

    render() {

        return (
            <>
                <Header score={this.state.score} topScore={this.state.topScore} />

            </>
        );
    }


}