import React from 'react'
import Div from '../../../components/Div'
import Input from '../../../components/Input'

function StepOne({ data }) {
    return (
        <>
            <Div width='90%'>
                <Input data={data} name='firstName' id='firstName' label='firstName' />
                <Input data={data} name='lastName' id='lastName' label='lastName' />
                <Input data={data} name='email' id='email' label='email' />
            </Div>
        </>
    )
}

export default StepOne
