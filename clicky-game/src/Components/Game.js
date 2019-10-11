import React, { Component } from "react";
import Header from "./Header";
import Image from "./Image";
import Images from "../images.json";
const styles={
    container:{
    maxWidth: "960px",
    border: "solid 5px black",
    margin:"auto",
    height:"800px",
    marginTop:"100px",
    background: "yellow"
    }
}

        class Game extends Component {
         

            state = {
            score: 0,
            topScore: 0,
            guessed: "Click an image to begin",
            updateImages :Images
            };

        
              

            };

            render() {

                return (
                    <>
                    <Header guessed={this.state.guessed} score={this.state.score} topScore={this.state.topScore} />
                    <div style={styles.container}>
                    {Images.map(img => (
                        <Image
                            handleClickImage={this.handleClickImage}
                            id={img.id}
                            key={img.id}
                            src={img.src}

                        />
                    ))}
                    </div>
                  
                
                    </>
                    );
            }


        }

export default Game;