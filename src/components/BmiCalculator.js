import React from 'react'
import BmiInput from './BmiInput'


const BmiCalculator = () => {
    const onChangeInput = () => {}
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
                                >
                                    <option value="metric">Metric</option>
                                    <option value="imperial">Imperial</option>
                            </select>
                        </div>
                    </div>
                    <BmiInput
                        type='text'
                        name='heighCount'
                        title={`Height (cm)`}
                        value=""
                        onChange={onChangeInput}/>
                    <BmiInput
                        type='text'
                        name='inchesCount'
                        title={` (in)`}
                        value=""
                        onChange={onChangeInput}/>
                    <BmiInput
                        type='text'
                        name='weightCount'
                        title={`Weight (kg)`}
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
