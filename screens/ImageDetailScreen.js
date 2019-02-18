import React, { Component } from 'react';
import {View,
    StyleSheet,
    ActivityIndicator,
    Linking,
    ScrollView
} from 'react-native';
import { Image,
    Icon,
    Card,
    ListItem
} from 'react-native-elements';
import { MonoText } from '../components/StyledText';

export default class ImageDetailScreen extends Component {
    state = {
        imageName: this.props.navigation.state.params.name,
        imageTags: this.props.navigation.state.params.tags,
        imageLikes: this.props.navigation.state.params.likes,
        imageLargeURL: this.props.navigation.state.params.imageURL,
        imageViews: this.props.navigation.state.params.views,
    };

    render(){
        const list = [
            {   icon: 'user',
                title: this.state.imageName
            }, {
                icon: 'eye',
                title: this.state.imageViews
            }, {
                icon: 'like1',
                title: this.state.imageLikes
            }, {
                icon: 'tags',
                title: this.state.imageTags
            }
        ];
        return (
            <ScrollView>
                <View style={styles.container}>
                    <Image
                        source={{ uri: this.state.imageLargeURL }}
                        style={{ width: 350, height: 350}}
                        PlaceholderContent={<ActivityIndicator
                            size="small"
                            color='#478692'
                        />}
                    />
                    <Card title='DETAILS'
                          containerStyle={{ marginRight: 25}}
                    >
                        {
                            list.map((u, i) => {
                                return(
                                    <ListItem key={i}
                                              subtitle={
                                                  <View style={styles.subContainer}>
                                                      <Icon
                                                          name={u.icon}
                                                          type='antdesign'
                                                          color='#478692'
                                                      />
                                                      <MonoText>{u.title}</MonoText>
                                                  </View>
                                              }
                                              bottomDivider={true}
                                    >
                                    </ListItem>
                                );
                            })
                        }
                    </Card>
                    <View
                        style={{ flex: 1, alignItems: 'center', justifyContent: 'center', marginTop: 15, marginBottom: 30 }}>
                        <MonoText
                            style={{ color: '#478692' }}
                            onPress={() => Linking.openURL('https://pixabay.com')}>
                            Pixabay Images
                        </MonoText>
                    </View>
                </View>
            </ScrollView>
        );
    };
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        marginLeft: 13,
        marginTop: 13
    },
    subContainer: {
        flexDirection: 'row',
        flexWrap: 'wrap',
        alignItems: 'center',
        justifyContent: 'space-between'
    }
});
