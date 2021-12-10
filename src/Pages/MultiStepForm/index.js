import { React, useState } from 'react'
import Container from '@mui/material/Container'
import ButtonBar from '../../components/ButtonBar'
import StepOne from './steps/StepOne'
import StepTwo from './steps/StepTwo'
import StepThree from './steps/StepThree'

function MultiStepForm() {
    const [step, setStep] = useState(0)

    const handleNext = () => {
        setStep(prevSt => prevSt + 1)
    }

    const handleBack = () => {
        setStep(prevSt => prevSt - 1)
    }

    return (
        <div>
            <Container >
                <StepThree
                    step={step}
                    handleNext={handleNext}
                    render={(data) => {
                        return (
                            <>
                                {step === 0 ?
                                    <StepOne data={data} />
                                    :
                                    (<>
                                        <StepTwo data={data} />
                                    </>
                                    )
                                }
                                <ButtonBar step={step} handleBack={handleBack} />
                            </>
                        )
                    }}
                />
            </Container>
        </div >
    )
}

export default MultiStepForm
