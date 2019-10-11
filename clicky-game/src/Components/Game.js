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
        copyImages :Images
        };

        handleClickImage= id => {

          
            if(this.state.copyImages[id-1].clicked === "false") {
                this.setState({score:this.state.score+1})
                this.setState({guessed:"You guessed Correctly!"})
                if((this.state.score) >= (this.state.topScore)){
                this.setState({topScore:this.state.topScore+1}) 
                }
                var updateImages  = this.state.copyImages.map(updateimage =>{
                    if (updateimage.id===id){
                        updateimage.clicked="true"
                    }
                    return updateimage;
                    })
                    console.log(updateImages);
        
                    this.setState ({
                    copyImages : updateImages
                    })
            }
         
            else if(this.state.copyImages[id-1].clicked === "true"){
                this.setState({score:0})
                this.setState({guessed:"You guessed InCorrectly!"})
            }

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