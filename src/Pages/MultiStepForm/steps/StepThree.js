import { React, useState } from 'react'
import { useHistory } from 'react-router-dom';
import axios from 'axios'
import { Formik, Form } from 'formik'
import * as Yup from 'yup'
import { makeStyles } from '@mui/styles'
import { BASEURL } from '../../../constants/Urls'

const useStyle = makeStyles({
    b: {
        marginLeft: 'auto',
        marginRight: 'auto',
        width: '50%',
        height: '50%',
    },
    btn: {
        color: 'red'
    }
})

function StepThree({ render, step, handleNext }) {
    const classes = useStyle()
    const history = useHistory()

    const [data, setData] = useState({
        firstName: '',
        lastName: '',
        email: '',
        city: '',
        age: '',
        bio: ''
    })

    const validationYupSchema = [
        Yup.object().shape({
            firstName: Yup.string().required("enter Name "),
            lastName: Yup.string().required('enter lastName'),
            email: Yup.string().email().required('enter email'),
        }),
        Yup.object().shape({
            city: Yup.string().required("enter city"),
            age: Yup.number().required('enter Age'),
            bio: Yup.string().required('enter bio'),

        }),
    ]
    const postData = async (values) => {
        try {
            await axios.post(`${BASEURL}/notes`, values)
                .then(() => history.push('/show'))
        } catch (err) {
            throw new Error('Something went wrong')
        }
    }

    return (
        <>
            <Formik
                initialValues={data}
                validationSchema={validationYupSchema[step]}
                onSubmit={(values) => {
                    if (step == '0') {
                        handleNext()
                    } else {
                        postData(values)
                    }
                }}

            >
                {(data) => (
                    <Form className={classes.b}>
                        {render(data)}
                    </Form>
                )}
            </Formik>
        </>
    )
}

export default StepThree
