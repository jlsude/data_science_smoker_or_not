
import style from './MainPage.module.css'
import { useHistory } from 'react-router-dom'
import packageJson from '../../../package.json'
import React from 'react';

const MainPage = () => {
    const history = useHistory()

    const handleClick = () => {
        history.push('/computation')
    }

    return ( 
        <div className={style.container}>
            <div className={style.headerCard}>
                <h1 className={style.title}>Smoker or Not</h1>
                <h2 className={style.subtitle}>An adapted data science exercise</h2>
                <p className={style.semVer}>v{packageJson.version}</p>
            </div>
            <div className={style.buttonContainer}>
                <button className={style.button}
                    onClick={() => handleClick()}
                >
                    Click to continue
                </button>
            </div>
        </div>
    );
}
 
export default MainPage;