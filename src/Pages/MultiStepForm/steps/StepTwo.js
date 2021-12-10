import React from 'react'
import Input from '../../../components/Input'

function StepTwo({ data }) {
    return (
        <>
            <Input data={data} name='city' id='city' label='city' />
            <Input data={data} name='age' id='age' label='age' />
            <Input data={data} name='bio' id='bio' label='bio' />

        </>
    )
}

export default StepTwo
