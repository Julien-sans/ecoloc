export const EDITOR_INPUT_FORM = 'EDITOR_INPUT_FORM';

export const CREATE_ACTIVITE_REQUEST = 'CREATE_ACTIVITE_REQUEST';
export const CREATE_ACTIVITE_SUCCESS = 'CREATE_ACTIVITE_SUCCESS';
export const CREATE_ACTIVITE_FAILURE = 'CREATE_ACTIVITE_FAILURE';

export const FETCH_ACTIVITE_REQUEST = 'FETCH_ACTIVITE_REQUEST';
export const FETCH_ACTIVITE_SUCCESS = 'FETCH_ACTIVITE_SUCCESS';
export const FETCH_ACTIVITE_FAILURE = 'FETCH_ACTIVITE_FAILURE';

export const FETCH_SINGLE_ACTIVITE_REQUEST = 'FETCH_SINGLE_ACTIVITE_REQUEST';
export const FETCH_SINGLE_ACTIVITE_SUCCESS = 'FETCH_SINGLE_ACTIVITE_SUCCESS';
export const FETCH_SINGLE_ACTIVITE_FAILURE = 'FETCH_SINGLE_ACTIVITE_FAILURE';


export const editorInputForm = (key, value) => ({
    type: EDITOR_INPUT_FORM,
    key,
    value
});

// Créer une activité

export const createActiviteRequest = () => ({
    type: CREATE_ACTIVITE_REQUEST
})

export const createActiviteSuccess = (form) => ({
    type: CREATE_ACTIVITE_SUCCESS,
    form
});

export const createActiviteFailure = (error) => ({
    type: CREATE_ACTIVITE_FAILURE,
    error
});

// Lire le contenu du tableau des activités

export const fetchActiviteRequest = () => ({
    type: FETCH_ACTIVITE_REQUEST
})

export const fetchActiviteSuccess = (activite) => ({
    type: FETCH_ACTIVITE_SUCCESS,
    activite
});

export const fetchActiviteFailure = (error) => ({
    type: FETCH_ACTIVITE_FAILURE,
    error
});

// Editer un seul article en fonction de son id

export const fetchSingleActiviteRequest = () => ({
    type: FETCH_SINGLE_ACTIVITE_REQUEST
})

export const fetchSingleActiviteSuccess = (activite) => ({
    type: FETCH_SINGLE_ACTIVITE_SUCCESS,
    activite
});

export const fetchSingleActiviteFailure = (error) => ({
    type: FETCH_SINGLE_ACTIVITE_FAILURE,
    error
});
