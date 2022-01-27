/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

import React from 'react';
import type {Node} from 'react';
import {
  SafeAreaView,
  ScrollView,
  StatusBar,
  StyleSheet,
  Text,
  useColorScheme,
  ActivityIndicator,
  View,
} from 'react-native';

import { NavigationContainer } from '@react-navigation/native';
import RootStackScreen from './Screens/RootStackScreen';

import AppStack from './Screens/AppStack';
import { AuthContext } from './components/AuthContext';

const App: () => Node = () => {

    const [isLoading, setIsLoading] = React.useState(true);
    const [userToken, setUserToken] = React.useState(null); 

    const authContext =React.useMemo(()=>({
      signIn:()=>{
        setIsLoading(false);
        setUserToken('gsgagshja');
      },
      signOut:()=>{
        setIsLoading(false);
        setUserToken(null);
      },
      signUp:()=>{
        setIsLoading(false);
        setUserToken('gsgagshja');
      },
    }))


    React.useEffect(() => {
        setTimeout(()=>{
            setIsLoading(false);
        },1000)
    }, []);

    if(isLoading) {
      return(<View style={{flex:1,justifyContent:'center',alignItems:'center'}}>
              <ActivityIndicator size="large"/>
      </View>)
    }




  return (

    <AuthContext.Provider value={authContext}>
          <NavigationContainer>

            { userToken != null ?
            <AppStack/>
            :<RootStackScreen/> }
      
        {/* <AppStack/> */}
    </NavigationContainer>
    </AuthContext.Provider>
    
  );
};



export default App;
 