import 'react-native';
import React from 'react';
import ImageDetailScreen from '../screens/ImageDetailScreen';
import renderer from 'react-test-renderer';

describe("Image Detail Screen", () => {
    it("should render image detail screen correctly", async () => {
        const navigationMock = { state: { params: {
                    name: 'qwe',
                    tags: 'sun, hot',
                    likes: '123',
                    imageURL: 'http://foo.bar',
                    views: '45'
        }} };

        const tree = await renderer.create(<ImageDetailScreen navigation={navigationMock}/>).toJSON();
        expect(tree).toMatchSnapshot();
    });
});