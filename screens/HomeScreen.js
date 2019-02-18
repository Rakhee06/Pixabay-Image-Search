import React, { Component } from 'react';
import { View,
    StyleSheet
} from 'react-native';
import { Header,
    Input,
    Button
} from 'react-native-elements';
import { Icon } from 'react-native-elements';

import { MonoText } from '../components/StyledText';

export default class HomeScreen extends Component {
    static navigationOptions = {
        title: 'Home',
    };

    state = {
        search: ''
    };

    // Function to navigate to the next screen with search text
    onSubmitHandler= () => {
        const response = this.props.navigation.navigate('List', {
                event: this.state.search
            })
    };
    render() {
        return (
            <View style={styles.container}>
                <Header
                    containerStyle = {{ backgroundColor: '#478692' }}
                    leftComponent={{ color: '#fff' }}
                    centerComponent={<MonoText style={{ color: '#fff' }}>
                        PIXABAY IMAGE SEARCH</MonoText>}>
                </Header>
                <View style={styles.textContainerStyle}>
                    <Input
                        placeholder='Type here..'
                        containerStyle={styles.textInputStyle}
                        onChangeText={search => this.setState({search})}
                        value={this.state.search}
                        onSubmitEditing={this.onSubmitHandler}
                    />
                    <Button
                        buttonStyle={styles.buttonStyle}
                        icon={
                            <Icon
                                name='search1'
                                type='antdesign'
                                color='#fff'
                            />
                        }
                        onPress={this.onSubmitHandler}
                    />
                </View>
            </View>
    );
  };
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: 'lightgray',
    },
    textContainerStyle: {
        flexDirection: 'row',
        marginTop: 75,
        marginLeft: 10,
        marginRight: 10,
    },
    textInputStyle: {
        flex: 1,
    },
    buttonStyle: {
        marginBottom: 8,
        backgroundColor: '#478692',
    }
});