import React from "react";
// import images from "../images.json"

const styles={
        container:{
        maxWidth: "960px",
        border: "solid 5px black",
        margin:"auto",
        height:"800px",
        marginTop:"100px",
        background: "yellow"
        },

        img:{
        width :"200px",
        height: "200px",
        margin: "10px"
        }

};


function Image(props) {


    return (
            <img style={styles.img} alt="zootopia-characters" data-id={props.clicked} src={props.src} onClick={() => props.handleClickImage()}/>
         
    )


}

export default Image;