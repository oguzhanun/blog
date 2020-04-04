import React from 'react';
import {createStackNavigator} from "react-navigation-stack"
import {createAppContainer} from "react-navigation"
import IndexScreen from './src/screens/IndexScreen';
import { Provider } from './src/context/BlogContext';
import ShowScreen from './src/screens/ShowScreen';
import CreateScreen from './src/screens/CreateScreen';
import EditScreen from './src/screens/EditScreen';

//npx expo-cli install react-native-gesture-handler react-native-reanimated react-navigation-stack
//bunları da yüklemek gerekiyor...
//
const navigator = createStackNavigator({
  Index : IndexScreen,
  Show : ShowScreen,
  Create : CreateScreen,
  Edit : EditScreen

},

  {
    initialRouteName :"Index",
    defaultNavigationOptions : {
      title :"Blog"
    }
  }
)

const App = createAppContainer(navigator)

export default () => {
  return(
    <Provider>
      <App/>
    </Provider>
  )
}