import React, { Component } from 'react';

import { createAppContainer, createStackNavigator } from 'react-navigation';
import HomeScreen from "../screens/HomeScreen";
import ImageDetailScreen from "../screens/ImageDetailScreen";
import ImageListScreen from "../screens/ImageListScreen";

const mapNavigationStateParamsToProps = (ScreenComponent) => {
    return class extends Component {
        static navigationOptions = ScreenComponent.navigationOptions;
        render() {
            const { params } = this.props.navigation.state;
            return <ScreenComponent {...this.props} {...params} />
        }
    }
};

const Navigation = createStackNavigator({
    Home: {screen: mapNavigationStateParamsToProps(HomeScreen)},
    List: {screen: mapNavigationStateParamsToProps(ImageListScreen)},
    Details: {screen: mapNavigationStateParamsToProps(ImageDetailScreen)}
},{
    initialRouteName: 'Home'
});

export default createAppContainer(Navigation);