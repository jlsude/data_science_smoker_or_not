import style from './ComputationPage.module.css'
import React, { useState, useEffect } from 'react'

const ComputationPage = () => {
    const [age, setAge] = useState(null)
    const [bmi, setBmi] = useState(null)
    const [children, setChildren] = useState(null)
    const [isMale, setIsMale] = useState(true)
    const [probability, setProbability] = useState(0)
    const [onEffect, setOnEffect] = useState(false)
    const [canCalculate, setCanCalculate] = useState(false)

    const handleClick = () => {
        
        console.log('Age: ', age, 
                    'BMI: ', bmi, 
                    'No. of Children: ', children, 
                    'Sex: ', isMale ? 'male' : 'female')

        if (isMale === true) {
            console.log('Male')
            const probs = 1 / (1 + 2.718281828459045**(-(-1.1646 + -0.0447 * age + 0.0653 * bmi + 0.1096* children)))
            console.log(probs)
            const rounded = parseFloat(probs.toFixed(4)  * 100)
            const truncated = Math.trunc(rounded * 10000) / 10000;
            setProbability(truncated)
            setOnEffect(true)
        } else if (isMale === false){
            console.log('Female')
            const probsFemale = 1 / (1 + 2.718281828459045**(-(-1.6287 + -0.0828 * age + -0.1135 * bmi + -0.0745* children)))
            console.log(probsFemale)
            const roundedFemale = parseFloat(probsFemale.toFixed(4)  * 100)
            const truncatedFemale = Math.trunc(roundedFemale * 10000) / 10000;
            setProbability(truncatedFemale)
            setOnEffect(true)
        }
    }

    useEffect(() => {
        const isValidAge = age !== null && !isNaN(age) && age >= 0;
        const isValidBMI = bmi !== null && !isNaN(bmi) && bmi >= 0;
        const isValidChildren = children !== null && !isNaN(children) && children >= 0;

        if (isValidAge && isValidBMI && isValidChildren) {
            setCanCalculate(true);
        } else {
            setCanCalculate(false);
        }
    }, [age, bmi, children]);

    useEffect(() => {

        let cardClassName = style.resultCard;
        if (probability < 50 && onEffect) {
            cardClassName += ` ${style.greenWarning}`;
        } else if (probability < 75 && onEffect) {
            cardClassName += ` ${style.yellowWarning}`;
        } else if (probability <= 100 && onEffect) {
            cardClassName += ` ${style.redWarning}`;
        }
    
        const resultCardElement = document.querySelector(`.${style.resultCard}`);
        if (resultCardElement) {
            resultCardElement.className = cardClassName;
        }
    }, [probability, onEffect])

    return ( 
        <div className={style.container}>
            <div className={style.columnsContainer}>
                <div className={style.inputCard}>
                    <div className={style.inputContainer}>
                        <div className={style.inputHeaderContainer}>
                            <label className={style.inputHeader}>Age</label>
                        </div>
                        <input placeholder="Age" className={style.input} 
                            onChange={(e) => setAge(e.target.value)}/>
                   </div>
                    <div className={style.inputContainer}>
                        <div className={style.inputHeaderContainer}>

                            <label className={style.inputHeader}>BMI</label>
                        </div>
                        <input placeholder="BMI" className={style.input} 
                            onChange={(e) => setBmi(e.target.value)}/>
                    </div>
                    <div className={style.inputContainer}>
                        <div className={style.inputHeaderContainer}>
                            <label className={style.inputHeader}>No. of Children</label>

                        </div>    
                        <input placeholder="No. of Children" className={style.input} 
                            onChange={(e) => setChildren(e.target.value)}/>
                    </div>
                    <div className={style.radioButtonContainer}>
                        <div className={style.radioButtonElement}>
                            <input type='radio' className={style.radioButton} 
                                checked={isMale}
                                onChange={(e) => setIsMale(true)}/>
                            <label className={style.inputHeaderRadio}>Male</label>


                        </div>
                        <div className={style.radioButtonElement}>
                            <input type='radio' className={style.radioButton} checked={!isMale} 
                                onChange={(e) => setIsMale(false)}/>
                            <label className={style.inputHeaderRadio}>Female</label>


                        </div>
                    </div>
                </div>
                <div className={style.resultColumn}>
                    <div className={style.resultCard}>
                        <div className={style.headerContainer}>
                        <h2 className={style.header}>Smoker Probability</h2>
                        
                        </div>
                        <div className={style.probContainer}>
                            <h4 className={style.probability}>{probability}%</h4>
                        </div>
                    </div>
                    <button className={style.button}
                        onClick={() => handleClick()}
                        disabled={!canCalculate}
                    >
                        Calculate
                    </button>
                </div>
            </div>
        </div>
    );
}
 
export default ComputationPage;