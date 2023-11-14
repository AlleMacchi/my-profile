import React from "react";
import styles from '../../styles/components/videoFullWidth/style.module.css'

export default function VideoFullWidth(props){
    return(

        <div className={styles.containter}>
            <video className={styles.containerVideo} src={props.url} typeof={props.codec} autoPlay loop muted></video>
        </div>
    )
}