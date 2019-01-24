export const EDITOR_INPUT_FORM = 'EDITOR_INPUT_FORM';
export const CREATE_ACTIVITE = 'CREATE_ACTIVITE';

export const editorInputForm = (key, value) => ({
    type: EDITOR_INPUT_FORM,
    key,
    value
});

export const createActivite = (form) => ({
    type: CREATE_ACTIVITE,
    form
});
