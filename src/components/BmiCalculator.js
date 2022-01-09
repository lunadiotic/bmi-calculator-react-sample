import React, { useState } from 'react'

import BmiInput from './BmiInput'

const BmiCalculator = () => {
    const [heightUnit, setHeightUnit] = useState('')
    const [weightUnit, setWeightUnit] = useState('')
    const [unit, setUnit] = useState('')

    const onChangeInput = () => {}
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
                        type='text'
                        name='heighCount'
                        title={`Height (${heightUnit})`}
                        value=""
                        onChange={onChangeInput}/>
                    {
                        unit === 'imperial' ?
                        <BmiInput
                            type='text'
                            name='inchesCount'
                            title={` (in)`}
                            value=""
                            onChange={onChangeInput}/> : <></>
                    }
                    <BmiInput
                        type='text'
                        name='weightCount'
                        title={`Weight (${weightUnit})`}
                        value=""
                        onChange={onChangeInput}/>
                </div>
                <button className="button" type='reset'>
                    Reset
                </button>
            </div>
        </>
    )
}

export default BmiCalculator
