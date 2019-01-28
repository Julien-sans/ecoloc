import {
    EDITOR_INPUT_FORM,
    CREATE_ACTIVITE_SUCCESS,
    CREATE_ACTIVITE_REQUEST,
    CREATE_ACTIVITE_FAILURE,
    FETCH_ACTIVITE_SUCCESS,
    FETCH_ACTIVITE_REQUEST,
    FETCH_ACTIVITE_FAILURE,
    FETCH_SINGLE_ACTIVITE_REQUEST,
    FETCH_SINGLE_ACTIVITE_SUCCESS,
    FETCH_SINGLE_ACTIVITE_FAILURE
} from '../actions/forms';

const initialState = {
    title: '',
    description: '',
    date: '',
    prix: '',
    lieu: '',
    infos: '',
    activite: [],
    loading: false,
    error: null
}

const reducer = (state = initialState, action) => {
    switch (action.type) {

        case EDITOR_INPUT_FORM:
            const { key, value } = action
            return { ...state, [key]: value }

        case CREATE_ACTIVITE_REQUEST:
            return { ...state, loading: true };
        case CREATE_ACTIVITE_SUCCESS:
            const form = action.form
            return { ...state, activite: [...state.activite, form], loading: false }
        case CREATE_ACTIVITE_FAILURE:
            return { ...state, loading: false, error: action.error };

        case FETCH_ACTIVITE_REQUEST:
            return { ...state, loading: true };
        case FETCH_ACTIVITE_SUCCESS:
            return { ...state, activite: action.activite, loading: false };
        case FETCH_ACTIVITE_FAILURE: {
            return { ...state, loading: false, error: action.error };
        }

        case FETCH_SINGLE_ACTIVITE_REQUEST:
            return { ...state, loading: true };
        case FETCH_SINGLE_ACTIVITE_SUCCESS:
            const activite = [...state.activite];
            const existingArticle = activite.find(art => art.id === action.activite.id);
            if (!existingArticle) {
                activite.push(action.activite);
            }
            const { title, date, prix, lieu, description, infos } = action.activite;
            return { ...state, activite, title, date, prix, lieu, description, infos };
        case FETCH_SINGLE_ACTIVITE_FAILURE: {
            return { ...state, loading: false, error: action.error };
        }

        default:
            return state
    }
}


export default reducer;