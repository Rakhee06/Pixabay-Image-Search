import React, { Component } from 'react';
import {
    View,
    FlatList,
    ActivityIndicator,
} from "react-native";
import { ListItem } from "react-native-elements";
import { PIXABAY_API_KEY } from 'react-native-dotenv';
import axios from "axios";
import { MonoText } from '../components/StyledText';

export default class ImageListScreen extends Component {
    static navigationOptions = {
        title: 'List',
    };

    state = {
        searchText: this.props.navigation.state.params.event,
        apiUrl: 'https://pixabay.com/api',
        apiKey: PIXABAY_API_KEY,
        images: [],
        loading: true,
        error: null
    };

    componentDidMount() {
        this.searchImages();
    }

    // Function to fetch images based on search props passed by the home screen
    searchImages = () => {
        this.setState({ loading: true});
        axios.get(`${this.state.apiUrl}/?key=${this.state.apiKey}&q=${this.state.searchText}&image_type=photo&safesearch=true`)
            .then(res => this.setState({
                images: res.data.hits,
                loading: false
            }))
            .catch(error => {
                this.setState({ error, loading: false });
            });
        if(this.state.error){
            return<MonoText>Image Not Found! Please provide a valid input</MonoText>
        }

        return this.state.images;
    };

    renderSeparator = () => {
        return (
            <View
                style={{
                    height: 1,
                    width: "86%",
                    backgroundColor: "#478692",
                    marginLeft: "14%"
                }}
            />
        );
    };

    render() {
        const { navigate } = this.props.navigation;
        if (this.state.loading) {
            return (
                <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
                    <ActivityIndicator
                        size="large"
                        color='#478692'
                    />
                </View>);
        }
        else {
            return (
                <View>
                    <FlatList
                        data={this.state.images}
                        renderItem={({ item }) => (
                            <ListItem
                                roundAvatar
                                title={<MonoText>{item.user}</MonoText>}
                                leftAvatar={{ source: {uri: item.previewURL},
                                    onPress: () => navigate('Details' , {
                                        name: `${item.user}`,
                                        tags: `${item.tags}`,
                                        likes: `${item.likes}`,
                                        imageURL: `${item.largeImageURL}`,
                                        views: `${item.views}`
                                    }) }}
                            />
                        )}
                        keyExtractor={(item, index) => index.toString()}
                        ItemSeparatorComponent={this.renderSeparator}
                    />
                </View>
            );
        }
    }
};