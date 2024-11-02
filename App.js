
import { StyleSheet, Text, View } from 'react-native';
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { useEffect, useState } from 'react';
import { FIREBASE_AUTH } from './firebaseConfig';


import Login from './screens/Login';
import Register from './screens/Register';
import History from './screens/secure/History';
import Home from './screens/secure/Home';
import Leaderboard from './screens/secure/Leaderboard';
import Trades from './screens/secure/Trades';



const Stack = createNativeStackNavigator();
const Tab = createBottomTabNavigator();

function SecureTabs() {
  return (
    <Tab.Navigator>
      <Tab.Screen name="Home" component={Home}/>
      <Tab.Screen name="Trades" component={Trades}/>
      <Tab.Screen name="History" component={History}/>
      <Tab.Screen name="Leaderboard" component={Leaderboard}/>
    </Tab.Navigator>

  );
}


export default function App() {

  const [user, setUser] = useState(null);

  useEffect(() => {
    const unsubscribe = FIREBASE_AUTH.onAuthStateChanged((user) => {
      setUser(user);
    })
    return unsubscribe;
  }, []);

  

  return (
    <NavigationContainer>
      <Stack.Navigator screenOptions={{ headerShown: false}}>
        { user ? (
            <Stack.Screen name='SecureTabs' component={SecureTabs}/>
         ) : (
          <>
            <Stack.Screen  name="Login" component={Login}/>
            <Stack.Screen  name="Register" component={Register}/>
          </>
          )}
      </Stack.Navigator>
    </NavigationContainer>
  );
}


const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
