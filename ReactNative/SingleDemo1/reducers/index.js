import {combineReducers} from 'redux';
import initialReducer from './initialReducer';
import reduxDemoReducer from '../../ReduxDemo/reducers';

const appReducers = combineReducers({
    initialReducer,
    reduxDemoReducer
});

export default appReducers;