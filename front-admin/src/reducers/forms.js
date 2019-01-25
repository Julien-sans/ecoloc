import { EDITOR_INPUT_FORM } from '../actions/forms';
import { CREATE_ACTIVITE } from '../actions/forms';

const initialState = {
    title: '',
    description: '',
    prix: '',
    lieu: '',
    infos: '',
    activite: []
}

const reducer = (state = initialState, action) => {
    switch (action.type) {
        case EDITOR_INPUT_FORM:
            const { key, value } = action
            return { ...state, [key]: value }
        case CREATE_ACTIVITE:
            const form = action.form
            return { ...state, activite: [...state.activite, form] }
        default:
            return state
    }
}


export default reducer;