import React, { Component } from "react";
import Header from "./Header";
import Image from "./Image";

class Game extends Component {

    state = {
        score: 0,
        topScore: 0,
        guessed: "Click an image to begin"
    }

    render() {

        return (
            <>
                <Header guessed={this.state.guessed} score={this.state.score} topScore={this.state.topScore} />
                <Image />

            </>
        );
    }


}
export default Game;