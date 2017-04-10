
import * as types from '../actions/actionType';

const initState = {
    name:'click me',
}

export default function reduxReducers(state = initState , action) {
    switch (action.type) {
        case types.yh_reduxDemo_click:
            return {
                ...state,
                name:'you are niubility!'
            };
        case types.yh_reduxDemo_clearState:
            return {
                    ...initState
            }
        default:
            return state;
    }

}
