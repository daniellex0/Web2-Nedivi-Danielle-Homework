import React from 'react';
import styled from 'styled-components';

/* Components ---------------------------*/
import Template from '../Shared/Template.jsx';
import UniversalForm from 'React/Shared/UniversalForm/UniversalForm.jsx';

const Login = () => {

    const defaultData = [
        { id: 'username', value: '', required: true, label: 'Username', type: 'text',},
        { id: 'password', value: '', required: true, label: 'Password', type: 'text',}
    ]

    const handleOnSubmit = (newFormData) => {
        console.log('newFormData Posted Form')
    }

    /*---------------------------
    | Render
    ---------------------------*/

    return (
        <LoginStyled className='Login'>
            <Template title='Login'> 
                <UniversalForm
                    formData={ defaultData }
                    submitText='Log In'
                    onSubmit={ handleOnSubmit }
                />
            </Template >
        </LoginStyled>
    );
}

export default Login;

const LoginStyled = styled.div`
    
`;