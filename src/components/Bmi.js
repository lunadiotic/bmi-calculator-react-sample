import React, { useState } from 'react'
import BmiCalculator from './BmiCalculator'

const Bmi = () => {
    const [bmiValue, setBmiValue] = useState(0);

    return (
        <>
            <div className="calculator">
                <h3>Body Mass Index Calculator</h3>
                <div className="bmi-result-container">
                    <div className="bmi-result-number">
                        Body Mass Index (BMI) = {bmiValue}
                    </div>
                    <div className={`bmi-category`}>
                        Underweight
                    </div>
                </div>
                <BmiCalculator
                    getBmiValue={setBmiValue} />
            </div>
        </>
    )
}

export default Bmi
