import * as types from '../actions/actionTypes';

const initState = {
    isClicked: false,
};

export default function entranceReducer(state = initState, action = {}) {
    switch(action.type) {
        case types.yh_appEntranceModule_click: 
            return {
                    ...state,
                    isClicked:!state.isClicked,
            }
        default: 
            return state;
    }
        
} 