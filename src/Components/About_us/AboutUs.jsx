import React from 'react';
import classes from "./aboutUs.module.css";
import Map from "./aboutUsSocial/Map";
import MoreInfoButton from "./MoreInfo/MoreInfoButton";
const AboutUs = () => {
    return (
        <div className={classes.AboutUs}>

          <div className={classes.back}> <h2 className={classes.h2}>About us:</h2>
         <div className={classes.div1}>
             <h2 className={classes.h2}> About our company</h2>
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. A aliquam at dolor doloremque dolores error illo ipsa, ipsam maiores nulla quam quasi rem suscipit. Dignissimos hic incidunt iste officiis quod.
         </div>
             <div className={classes.div2}>

    Lorem ipsum dolor sit amet, consectetur adipisicing elit. Doloremque eveniet facere mollitia nesciunt officiis perspiciatis qui quis, repudiandae! Accusantium ex fugiat harum ipsum, optio quae tempore veniam voluptate voluptatibus. Consequuntur.

                 Lorem ipsum dolor sit amet, consectetur adipisicing elit. Doloremque eveniet facere mollitia nesciunt officiis perspiciatis qui quis, repudiandae! Accusantium ex fugiat harum ipsum, optio quae tempore veniam voluptate voluptatibus. Consequuntur.

                 Lorem ipsum dolor sit amet, consectetur adipisicing elit. Doloremque eveniet facere mollitia nesciunt officiis perspiciatis qui quis, repudiandae! Accusantium ex fugiat harum ipsum, optio quae tempore veniam voluptate voluptatibus. Consequuntur.

                 Lorem ipsum dolor sit amet, consectetur adipisicing elit. Doloremque eveniet facere mollitia nesciunt officiis perspiciatis qui quis, repudiandae! Accusantium ex fugiat harum ipsum, optio quae tempore veniam voluptate voluptatibus. Consequuntur.
             </div></div>

                <div className={classes.divMap}>
            <h2 className={classes.h2map}>You can find us here: </h2><Map/>
                </div>

            <div className={classes.workWithUs}><p>Work with us:</p>

            <MoreInfoButton/>
          </div>
        </div>

    );
};

export default AboutUs;