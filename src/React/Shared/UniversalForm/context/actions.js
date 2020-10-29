import { ActionTypes } from './actionTypes.js';

/*===================================
|| 
|| Action Creators
|| 
===================================*/
export const formDataUpdate = (formData) => {
    return {
        type: ActionTypes.UF_FORM_DATA_UPDATE,
        formData: formData,
    }
}
export const statusUpdate = (formStatus) => {
    return {
        type: ActionTypes.UF_STATUS_UPDATE,
        formStatus: formStatus,
    }
}
export const feedbackMessageUpdate = (feedbackMessage) = {
    return {
        type: ActionTypes.UF_FEEDBACK_MESSAGE_UPDATE,
        feedbackMessage: feedbackMessage,
    }
}

/*===================================
|| 
|| Action Dispatchers
|| 
===================================*/
export const handleOnInputChange = (newFormField, formData) => {
    console.log('handleOnChange', newFormField);

    const newFormData = formData.map((field) => {
        return (field.id === newFormField.id) ? newFormField : field;
    });

    return formDataUpdate(newFormData);
}

export const handleOnSubmit = (state, dispatch) => {
    const {
        formData,
        onSubmit,
    } = state;

    // Validate from data
    let errors = false;
    formData.forEach((field) => {
        if (field.value.length < 1) {
            errors = true;
            dispatch(feedbackMessageUpdate(`The ${field.id} is required`));
        }
    });

    // if invalid, update error message
    if (errors) {
        dispatch(statusUpdate('error'));
    } else {

        // Let parent know of submission
        onSubmit(formData);

        // all passes we will submit data
        dispatch(feedbackMessageUpdate(`'Eurka, you passed our validation.'`));
        dispatch(statusUpdate('success'));
    }
}
