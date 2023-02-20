import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import Login from './src/screens/Login'
import SignUp from './src/screens/SignUp'
import Home from './src/screens/Home'
import Org from './src/screens/Org'

type RootStackParamList = {
  Login: undefined;
  Home: undefined;
  SignUp: undefined;
  Org: {name: string};
};
const RootStack = createNativeStackNavigator<RootStackParamList>();

function App(): JSX.Element {
  return (
    <NavigationContainer>
    <RootStack.Navigator initialRouteName='Login'>
      <RootStack.Screen 
          name="Login"
          component={Login}
          options={{headerShown: false}}/>
      <RootStack.Screen 
          name="SignUp"
          component={SignUp}
          options={{headerShown: false}}/>
      <RootStack.Screen 
          name="Home"
          component={Home}
          options={{headerShown: false}}/>
      <RootStack.Screen 
          name="Org"
          component={Org}
          options={{headerShown: false}}/>
    </RootStack.Navigator>
    </NavigationContainer>
  );
}

export default App;
