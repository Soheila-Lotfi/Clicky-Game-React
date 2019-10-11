import React from "react";

const styles = {
    ul: {
        listStyleType: "none"
    },
    li: {
        display: "inline-block",
        marginLeft: "10%"
    },
    stickyheader: {
        position: "fixed",
        top: "0",
        left: "0",
        width: "100%",
        background: "#98e178"
    },
    clickygame: {
        backgroundImage: "url('../../back.jpg')",
        height: "200px",
        paddingTop: "250px",
        textAlign: "center"
    }
}; 

function Header(props) {

    return (
 <>
            <div style={styles.stickyheader}>
               <ul style={styles.ul}>
                <li style={styles.li}><h1><strong>Clicky Game</strong></h1></li>
                <li style={styles.li}><h1>{props.guessed}</h1></li>
                <li style={styles.li}><h1>Score :{props.score} | Top Score: {props.topScore} </h1></li>
               </ul>

            </div>
            <div style={styles.clickygame} >
                <h1>Clicky Game!</h1>
                <h1 >click on an image to earn points, but don't click on any more than once!</h1>
            </div>
</>
             
    );

}

export default Header;                        