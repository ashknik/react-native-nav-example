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

    // const [isLoading, setIsLoading] = React.useState(true);
    // const [userToken, setUserToken] = React.useState(null); 



    const initalLoginState = {
      isLoading:true,
      userName:null,
      userToken:null
    }


    const loginReducer = (prevState, action) =>{
        switch(action.type) {
          case 'RETRIVE_TOKEN':
                    return {
                      ...prevState,
                      userToken:action.token,
                      isLoading:false

                    };
          case 'LOGIN':
              return {
                ...prevState,
                userName:action.id,
                userToken:action.token,
                isLoading:false
              };
           case 'LOGOUT':
                return {
                  ...prevState,
                  userName:null,
                  userToken:null,
                  userToken:action.token,
                  isLoading:false
                };
            case 'REGISTER':
                  return {
                    ...prevState,
                    userName:action.id,
                    userToken:action.token,
                    isLoading:false
                  };

        }
    }


    const [ loginState,dispatch] = React.useReducer(loginReducer,initalLoginState);

    console.log("HERE",loginState);

    const authContext =React.useMemo(()=>({
      signIn:(userName,password)=>{
        let userToken;
        
      
        if(userName === 'user'  && password === '123456') {
          userToken = 'gdjsagdjagsdj';
        } else {
          userName =null;
        }
        console.log("HERE  ",userName,password);
        dispatch({type:'LOGIN', id:userName,token:userToken});
        // setIsLoading(false);
        // setUserToken('gsgagshja');
      },
      signOut:()=>{
        // setIsLoading(false);
        // setUserToken(null);

        dispatch({type:'LOGOUT'});
      },
      signUp:()=>{
        // setIsLoading(false);
        // setUserToken('gsgagshja');
        userToken
        if(userName != null  && password != null) {
          userToken = 'gdjsagdjagsdj';
        } else {
          userName =null;
        }
      //  console.log("HERE  ",userName,password);
        dispatch({type:'REGISTER', id:userName,token:userToken});


      },
    }),[]);


    React.useEffect(() => {
        setTimeout(()=>{
           // setIsLoading(false);
           dispatch({type:'RETRIVE_TOKEN', token:'userToken'});
        },1000)
    }, []);

    if(loginState.isLoading) {
      return(<View style={{flex:1,justifyContent:'center',alignItems:'center'}}>
              <ActivityIndicator size="large"/>
      </View>)
    }




  return (

    <AuthContext.Provider value={authContext}>
          <NavigationContainer>

            { loginState.userToken != null ?
            <AppStack/>
            :<RootStackScreen/> }
      
        {/* <AppStack/> */}
    </NavigationContainer>
    </AuthContext.Provider>
    
  );
};



export default App;
 