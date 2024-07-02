import React from 'react';
import classes from "./AboutUsSocial.module.css";
import {FaGithub, FaInstagram, FaTelegram} from "react-icons/fa";

const AboutUsSocial = () => {
    return (
        <div className={classes.div3}>
            <div >
                <h2 className={classes.h2}>our socials:</h2>
                <div>
                    <h3 className={classes.h3}><a href={"https://google.com"} className={classes.a}>infoTeam2@gmail.com</a></h3>
                    <h3 className={classes.h3}><a href={"https://google.com"} className={classes.a}>reportBugTeam2@gmail.com</a></h3>
                    <h4 className={classes.h4}>You can find us on:</h4> <h3 className={classes.socials}>
                    <a href={"https://instagram.com"} className={classes.a} >
                        <FaInstagram className={classes.instagram}/></a>
                    <a href={"https://telegram.org/"} className={classes.a}>
                        <FaTelegram className={classes.telegram} />
                    </a>
                    <a href={"https://github.com"} className={classes.a}>
                        <FaGithub className={classes.github} />
                    </a>
                </h3>
                </div>
            </div>
        </div>
    );
};

export default AboutUsSocial;