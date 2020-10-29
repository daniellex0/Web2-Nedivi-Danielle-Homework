import React, { useContext } from 'react';
import styled from 'styled-components';

/* Context ---------------------------*/
import Context from './context/index.js';
import * as UFActions from './context/actions.js';

/* Components ---------------------------*/
import Button from 'React/Shared/UniversalForm/Controls/Button.jsx';

const Feedback = () => {
    /*---------------------------
    | State and Props
    ---------------------------*/
    const { state, dispatch } = useContext(Context);

    const {
        formStatus,
        feedbackMessage,
    } = state;

    const handleClose = () => {
        dispatch(UFActions.feedbackMessageUpdate('pending'));
    }
    
    if (formStatus === 'pending') {
        return '';
    }

    const theColor = (formStatus === 'success') ? 'green' : 'maroon';

    return (
        <FeedbackStyled className='Feedback' theColor={ theColor }>
            <Button 
                onClick={ handleClose }
                className='close'
            >
                X
            </Button>
            <h2>Title</h2>
            <div className="message">
                { feedbackMessage }
            </div>
        </FeedbackStyled>
    );
}

export default Feedback;

const FeedbackStyled = styled.div`
    border: solid 1px ${({theColor}) => theColor };
    max-width: 500px;
    margin: 20px auto;

    position: relative;

    .close {
        position: absolute;
        right: 0px;
        top: 0px;
        padding: 5px 10px;
        margin: 0px;
    }

    h2 {
        background-color: ${({theColor}) => theColor};
        padding: 20px;
        margin: 0px;
        font-size: 16px;
    }

    .message {
        padding: 10px;
    }
`;