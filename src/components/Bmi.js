import React, { useState } from 'react'
import BmiCalculator from './BmiCalculator'

const Bmi = () => {
    const [bmiValue, setBmiValue] = useState(0);

    const getBmiClass = (bmi) => {
        if (bmi >= 1 && bmi <= 18.5 ) {
            return {
                status: 'Underweight',
                color: 'danger' 
            }
        }
        if (bmi >= 18.5 && bmi <= 24.9 ) {
            return {
                status: 'Normal',
                color: 'success' 
            }
        };
        if (bmi >= 24.9 && bmi <= 29.9 ) {
            return {
                status: 'Overweight',
                color: 'warning' 
            }
        };
        if (bmi >= 30 ) {
            return {
                status: 'Obese',
                color: 'danger' 
            }
        };
        return {
            status: '',
            color: '' 
        }
    }

    const bmiResult = getBmiClass(bmiValue)

    return (
        <>
            <div className="calculator">
                <h3>Body Mass Index Calculator</h3>
                <div className="bmi-result-container">
                    <div className="bmi-result-number">
                        Body Mass Index (BMI) = {bmiValue}
                    </div>
                    <div className={`bmi-category`}>
                        <span className={`badge bg-${bmiResult.color ?? 'secondary'}`}>{bmiResult.status}</span>
                    </div>
                </div>
                <BmiCalculator
                    getBmiValue={setBmiValue} />
            </div>
        </>
    )
}

export default Bmi
