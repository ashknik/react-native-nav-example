import React from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { Text,View,TouchableOpacity } from 'react-native';
import { AuthContext } from '../components/AuthContext';
import FontAwesome from 'react-native-vector-icons/FontAwesome';

const Tab = createBottomTabNavigator();


const HomeScreen =  ()  =>{

    const { signOut } =  React.useContext(AuthContext);
    return(
    <View style={{flex:1,justifyContent:'center',alignItems:'center'}}> 
        <Text> This is the Home Screen  </Text>
        <TouchableOpacity
                        
                                onPress={() => {signOut()}}
                        >
                                <Text>Logout</Text>
                        </TouchableOpacity>
    </View>
    )
}


const SettingsScreen =  ()  =>{
    return(
    <View style={{flex:1,justifyContent:'center',alignItems:'center'}}> 
        <Text> This is the Settings Screen  </Text>
    </View>
    )
}

const AppStack = ({navigation}) =>{



  return(
    <Tab.Navigator headerMode="none" >
      <Tab.Screen name="Home" component={HomeScreen} 
          options={{
            tabBarLabel: 'Home',
            tabBarIcon: ({ color }) => (
                <FontAwesome 
                name="fa fa-envelope-o"
                color="#101011"
                size={25}
            />
            ),
          }}
      
      />
      <Tab.Screen name="Settings" component={SettingsScreen}  
            options={{
                tabBarLabel: 'Settings',
                tabBarIcon: ({ color }) => (
                    <FontAwesome 
                    name="fa fa-cog"
                    color="#101011"
                    size={25}
                />
                ),
            }}
      />
    </Tab.Navigator>
  )  
}



export default AppStack;