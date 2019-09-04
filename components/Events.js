import React, {Component} from 'React';
import {View, Text, TouchableHighlight} from 'react-native';

class Events extends Component {
    handleAddPress = () => {
        this.props.navigation.navigate('news');
    }

    render() {
    return (
        <View>
            <TouchableHighlight
            onPress={this.handleAddPress}
            >
                <Text>Add</Text>
            </TouchableHighlight>
        </View>
    );
}
} 

export default Events