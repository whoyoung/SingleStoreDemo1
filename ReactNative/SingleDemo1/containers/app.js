import React,{Component,} from 'react';
import {
  StyleSheet,
  Text,
  View,
} from 'react-native';
import {createStore,applyMiddleware} from 'redux';
import {Provider,connect} from 'react-redux';
import { Router, Scene, Actions } from 'react-native-router-flux';
import thunk from 'redux-thunk';

const RouterWithRedux = connect()(Router);
import reducers from '../reducers';
const createStoreWithMiddleware = applyMiddleware(thunk)(createStore);
const store = createStoreWithMiddleware(reducers);

import NavigationStyles from '../../Common/navigationStyles';
import LoadInit from './initDataContent';
import ReduxDemo from '../../ReduxDemo';
import SubScene from '../../SubScene';
import TabIcon from './TabIcon';

export default class app extends Component {
    constructor(props) {
        super(props);
    }

    componentWillMount() {
    }
    componentDidMount() {
    }
    componentWillUnmount() {
    }

    render() {
        return (
            <Provider store={store}>
                <RouterWithRedux>
                    <Scene key="yh_initData" title="initData" initial={true} component={LoadInit} hideNavBar={true} />
                    <Scene key="yh_reduxDemo" title="reduxDemo" component={ReduxDemo} hideNavBar={false} 
                        navigationBarStyle={[NavigationStyles.systemNavigatorStyle, { backgroundColor: 'blue' }]}
                        titleStyle={NavigationStyles.systemTitleStyle}
                        leftButtonIconStyle={NavigationStyles.systemNavigationButtonLeft}
                        backButtonImage={require('../../Common/images/nav_bar_back.png')} />
                    <Scene key="yh_tabs" tabs={true} tabBarStyle={styles.tabBarStyle}
                                tabBarSelectedItemStyle={styles.tabBarSelectedItemStyle} >
                        <Scene key="yh_subScene1" title="subScene1" initial={true} hideNavBar={false} hideTabBar={false} icon={TabIcon} >
                            <Scene key="yh_subScene1_1" initial={true} title="scene1_1" component={ReduxDemo} />
                            <Scene key="yh_subScene1_2" title="scene1_2" component={ReduxDemo} />
                        </Scene>
                        <Scene key="yh_subScene2" title="subScene2" component={SubScene} hideNavBar={false} hideTabBar={false} 
                        icon={TabIcon} renderRightButton={() => <Text onPress={()=>alert('hahahaha')}>Right</Text>}/>
                    </Scene>
                </RouterWithRedux>
            </Provider>
        )
    }
}

const styles = StyleSheet.create({
  
  tabBarStyle: {
    backgroundColor: '#999',
  },
  tabBarSelectedItemStyle: {
    backgroundColor: '#ddd',
  },
});