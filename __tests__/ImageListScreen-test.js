import 'react-native';
import React from 'react';
import ImageListScreen from '../screens/ImageListScreen';
import renderer from 'react-test-renderer';

describe("Image List Screen", () => {
    it("should render image list screen correctly", () => {
        const navigationMock = { state: { params: {
                    event: 'search'
                }} };

        const tree = renderer.create(<ImageListScreen navigation={navigationMock}/>).toJSON();
        expect(tree).toMatchSnapshot();
    });
});