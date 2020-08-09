import React from 'react';
import preloader from '../../assets/images/preloader.gif';
import style from './Preloader.module.css';

let Preloader = (props) => {
    return <div className={style.preloader_img}><img src={preloader} alt=""/></div>
}
export default Preloader;