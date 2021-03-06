import React, { useEffect, useState } from 'react'
import PropTypes from 'prop-types'

import BmiInput from './BmiInput'

const BmiCalculator = (props) => {
    const { getBmiValue } = props
    const [heightUnit, setHeightUnit] = useState('')
    const [weightUnit, setWeightUnit] = useState('')
    const [unit, setUnit] = useState('')
    const [count, setCount] = useState({
        heightCount: '0',
        inchesCount: '0',
        weightCount: '0'
    })

    const { heightCount, inchesCount, weightCount } = count; // destruct object count state 

    const onChangeInput = (e) => {
        // if (e.target.name === 'heightCount') {
        //     setCount({
        //         heightCount: e.target.value
        //     })
        // }

        const { name, value } = e.target;
        setCount(prevState => ({
            ...prevState,
            [name]: value
        }));
    }

    const onSelected = (e) => {
        setUnit(e.target.value)
        if (e.target.value === 'metric') {
            setHeightUnit('cm')
            setWeightUnit('kg')
        } else {
            setHeightUnit('ft')
            setWeightUnit('lbs')
        }
    }

    const resetForm = (e) => {
        e.preventDefault()
        getBmiValue(0)
        setUnit('metric');
        setCount({
            heightCount: '0',
            inchesCount: '0',
            weightCount: '0'
        })
        setHeightUnit('cm')
        setWeightUnit('kg')
    }

    const metricBmi = (height, weight) => {
        if (height > 0 && weight > 0) {
            const bmi = (weight / height / height) * 10000
            // console.log(bmi)
            getBmiValue(Math.round(bmi))
        }
    }

    useEffect(() => { // seperti componentDidMount & componentDidUpdate
        if (unit === '') {
            setUnit('metric')
            setHeightUnit('cm')
            setWeightUnit('kg')
        }
        metricBmi(heightCount, weightCount)
    }, [unit,heightCount, weightCount]) //useEffect akan bekerja setiap ada perubahan nilai pada unit

    return (
        <>
            <div className="bmi-inputs">
                <div className="input-fields">
                    <div>
                        <span className="label-unit">Unit</span>
                        <div className="unit">
                            <select name="unit" 
                                id=""
                                className='form-control form-control-sm'
                                onChange={onSelected}
                                >
                                    <option value="metric">Metric</option>
                                    <option value="imperial">Imperial</option>
                            </select>
                        </div>
                    </div>
                    <BmiInput
                        type='number'
                        name='heightCount'
                        title={`Height (${heightUnit})`}
                        value={heightCount}
                        onChange={onChangeInput}/>
                    {
                        unit === 'imperial' ?
                        <BmiInput
                            type='number'
                            name='inchesCount'
                            title={` (in)`}
                            value={inchesCount}
                            onChange={onChangeInput}/> : <></>
                    }
                    <BmiInput
                        type='number'
                        name='weightCount'
                        title={`Weight (${weightUnit})`}
                        value={weightCount}
                        onChange={onChangeInput}/>
                </div>
                <button className="button" type='reset' onClick={resetForm}>
                    Reset
                </button>
            </div>
        </>
    )
}

BmiCalculator.propTypes = {
    getBmivalue: PropTypes.func
}

export default BmiCalculator
