import React from 'react';
import styled from 'styled-components';

const Essay = (props) => {

    const {
        essay
    } = props;

    const {
        title,
        question, 
        AnswerComponent,
    } = essay;

    return (
        <EssayStyled className='Essay'>
            <h3>{ title } </h3> 
            <div className="question">{ question }</div>
            <AnswerComponent />
        </EssayStyled>
    );
}

export default Essay;

const EssayStyled = styled.div`
    border: solid 1px red;
    padding: 20px;
    margin: 20px 0px;
`;