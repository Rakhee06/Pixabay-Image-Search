import 'react-native';
import React from 'react';
import HomeScreen from '../screens/HomeScreen';
import renderer from 'react-test-renderer';

describe("Home Screen", () => {
    it('renders the home screen correctly', async () => {
        const tree = await renderer.create(<HomeScreen />).toJSON();
        expect(tree).toMatchSnapshot();
    });
});