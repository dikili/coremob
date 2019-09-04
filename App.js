import React from 'react';
import {YellowBox} from 'react-native';
import News from './components/News';
import Events from './components/Events';
import { createAppContainer } from 'react-navigation';
import {createStackNavigator} from 'react-navigation-stack';


YellowBox.ignoreWarnings([
  'Warning: componentWillMount is deprecated',
  'Warning: componenetWillReceiveProps is deprecated',
  'Warning: Accessing view manager configs directly off UIManager via UIManager[\'getConstants\'] is no longer supported. Use UIManager.getViewManagerConfig(\'getConstants\') instead'  
]);

// export default function App() {
//   return (
//   <News/>
//   );
// }

const AppNavigator = createStackNavigator({
  news: { screen: News,
   navigationOptions: () => ({
      title: 'Your News',
   })
  },
  events: { screen: Events,
    navigationOptions: () => ({
       title: 'Your Events'
    })
   }, 
   initialRouteName:'News',
  
   
});

export default createAppContainer(AppNavigator);

