import {fromJS} from 'immutable';
import {constants} from './index';
import {Editor, EditorState} from 'draft-js';

const defaultState = fromJS({
    editorState: EditorState.createEmpty()
});


export default (state = defaultState, action) => {
    switch (action.type) {
        case constants.HANDLE_ONCHANGE:
            return state.set('editorState', action.value);
        default:
            return state;
    }
}