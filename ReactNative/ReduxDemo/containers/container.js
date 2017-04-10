

import React,{Component} from 'react';
import {bindActionCreators} from 'redux';
import * as allActions from '../actions/actions';
import { connect } from 'react-redux';

import Box from '../components/box';

class Container extends Component {
  constructor(props){
    super(props);
  }
  
  render() {
    return (
      <Box  {...this.props}
        />
    );
  }
}

export default connect(state => ({
    state:state.reduxDemoReducer,
  }),
  (dispatch) => ({
    actions: bindActionCreators(allActions, dispatch)
  })
)(Container);