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
    FETCH_SINGLE_ACTIVITE_FAILURE,
    FORM_EDIT_NEW_ARTICLE,
    FORM_EXISTING_ARTICLE,
    UPDATE_ACTIVITE_REQUEST,
    UPDATE_ACTIVITE_SUCCESS,
    UPDATE_ACTIVITE_FAILURE,
    FETCH_ASSOCIATION_REQUEST,
    FETCH_ASSOCIATION_SUCCESS,
    FETCH_ASSOCIATION_FAILURE
} from '../actions/forms';

const initialState = {
    form: null,
    activite: [],
    association: [],
    loading: false,
    error: null
}

const newActivite = {
    title: '',
    description: '',
    date: '',
    prix: '',
    lieu: '',
    infos: ''
}

const reducer = (state = initialState, action) => {
    switch (action.type) {

        case EDITOR_INPUT_FORM: {
            const { key, value } = action
            const form = { ...state.form, [key]: value }
            // créer une copie de state.form et remplacer la valeur
            // (nouvelle valeur de form)
            // renvoyer state en remplaçant la clé form par cette nouvelle valeur de form
            return { ...state, form }
        }
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
            return { ...state, form: action.activite };
        case FETCH_SINGLE_ACTIVITE_FAILURE: {
            return { ...state, loading: false, error: action.error };
        }

        case FORM_EDIT_NEW_ARTICLE: {
            return { ...state, form: { ...newActivite } }
        }
        case FORM_EXISTING_ARTICLE: {
            return { ...state, form: { ...action.activite } };
        }

        case UPDATE_ACTIVITE_REQUEST:
            return { ...state, loading: true };
        case UPDATE_ACTIVITE_SUCCESS: {
            const activite = state.activite.map(act => act.id === action.activite.id ? { ...action.activite } : { ...act });
            return { ...state, activite }
        }

        case UPDATE_ACTIVITE_FAILURE:
            return { ...state, loading: false, error: action.error };

        case FETCH_ASSOCIATION_REQUEST:
            return { ...state, loading: true };
        case FETCH_ASSOCIATION_SUCCESS:
            return { ...state, association: action.association, loading: false };
        case FETCH_ASSOCIATION_FAILURE: {
            return { ...state, loading: false, error: action.error };
        }

        default:
            return state
    }
}


export default reducer;