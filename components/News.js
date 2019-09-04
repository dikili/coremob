import React, {Component} from 'React';
import {FlatList, Text, ListItem} from 'react-native';
import ActionButton from 'react-native-action-button';

class News extends Component {
state = {
    news:[ {
        "title": "title1",
        "author": "author1",
        "description": "desc1",
        "url": "url",
        "urlToImage": "urlToImage",
        "publishedAt": "2012-03-19T07:22Z",
        "content": "context",
        "source": "31287389-9fb2-4e26-ae9a-998a33f04db1"

    },
    {
        "title": "title2",
        "author": "author1",
        "description": "desc1",
        "url": "url",
        "urlToImage": "urlToImage",
        "publishedAt": "2012-03-19T07:22Z",
        "content": "context",
        "source": "333d815f-f750-4c9e-81a3-d2c8027a3bd9"

    },
    {
        "title": "title3",
        "author": "author1",
        "description": "desc1",
        "url": "url",
        "urlToImage": "urlToImage",
        "publishedAt": "2012-03-19T07:22Z",
        "content": "context",
        "source": "42c4cf08-29b0-42b4-882b-08c9b6bd8883"

    },
    {
        "title": "title4",
        "author": "author1",
        "description": "desc1",
        "url": "url",
        "urlToImage": "urlToImage",
        "publishedAt": "2012-03-19T07:22Z",
        "content": "context",
        "source": "6471c665-4b4a-4691-8fd4-c790b259a88e"

    },
    {
        "title": "titl5",
        "author": "author1",
        "description": "desc1",
        "url": "url",
        "urlToImage": "urlToImage",
        "publishedAt": "2012-03-19T07:22Z",
        "content": "context",
        "source": "eb046e1b-0beb-4417-88a5-cbaac5b8aa7e"

    },
    {
        "title": "title6",
        "author": "author1",
        "description": "desc1",
        "url": "url",
        "urlToImage": "urlToImage",
        "publishedAt": "2012-03-19T07:22Z",
        "content": "context",
        "source": "b2cdc12c-c9e8-4816-882f-f31af3a12c93"

    },
    {
        "title": "title7",
        "author": "author1",
        "description": "desc1",
        "url": "url",
        "urlToImage": "urlToImage",
        "publishedAt": "2012-03-19T07:22Z",
        "content": "context",
        "source": "070b0850-ea78-4766-a0f8-904f35237169"

    }]
   
}
handleAddEvent = () => {
    this.props.navigation.navigate('events');
}
// componentDidMount() {
//     const events = this.state.events;
//     this.setState({events});
// }
    render() {
        return [
           <FlatList
             data={this.state.news}
             renderItem={({item})=> <Text>{item.title}</Text>}
             keyExtractor={item => item.source}
             key={item => item.source}
           />,
           <ActionButton  
           key="fab"
           onPress= {this.handleAddEvent}
           buttonColor="rgba(231,76,60,1)"
           />
        
        ];
    }
} 

export default News