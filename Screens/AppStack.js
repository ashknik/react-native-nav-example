import React from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { Text,View,TouchableOpacity } from 'react-native';
import { AuthContext } from '../components/AuthContext';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';
import HomeScreen from './HomeScreen';

const Tab = createBottomTabNavigator();




const RecScreen =  ()  =>{
    const { signOut } =  React.useContext(AuthContext);
    return(
    <View style={{flex:1,justifyContent:'center',alignItems:'center'}}> 
        <Text> Invitaion Received </Text>
    
    </View>
    )
}

const CreateInvite =  ()  =>{
  const { signOut } =  React.useContext(AuthContext);
  return(
  <View style={{flex:1,justifyContent:'center',alignItems:'center'}}> 
      <Text> Invitaion Received </Text>
      
  </View>
  )
}


const NotificationScreen =  ()  =>{
  const { signOut } =  React.useContext(AuthContext);
  return(
  <View style={{flex:1,justifyContent:'center',alignItems:'center'}}> 
      <Text> Notification Screen  </Text>
      
  </View>
  )
}

const SettingsScreen =  ()  =>{

  const { signOut } = React.useContext(AuthContext);


    return(
    <View style={{flex:1,justifyContent:'center',alignItems:'center'}}> 
         <TouchableOpacity
                onPress={() => { signOut() }}
            >
                <Text>Logout</Text>
            </TouchableOpacity>
    </View>
    )
}

const AppStack = ({navigation}) =>{



  return(
    <Tab.Navigator headerMode="none" 
    screenOptions={{
      activeTintColor: '#FFF',
      tabBarStyle: {
        backgroundColor: '#abdbe3',
        borderTopColor: 'transparent'
      }
    }}
    >
      <Tab.Screen name="Sent" component={HomeScreen} 
          options={{
            headerTitleAlign:'center',
            headerStyle:{
              backgroundColor:'#abdbe3'
            },
            tabBarLabel: 'Sent',
            tabBarIcon: ({ color }) => (
              <MaterialIcons name="upload-file" size={23}  />
            ),
          }}
      />

      <Tab.Screen name="Received" component={RecScreen} 
                options={{
                  headerTitleAlign:'center',
                  headerStyle:{
                    backgroundColor:'#abdbe3'
                  },
                  tabBarLabel: 'Received',
                  tabBarIcon: ({ color }) => (
                    <MaterialIcons name="mark-email-read" size={23}  />
                  ),
                }}
            />


    <Tab.Screen name="Invitation" component={CreateInvite} 
                    options={{
                      headerTitleAlign:'center',
                      headerStyle:{
                        backgroundColor:'#abdbe3'
                      },
                      // tabBarLabel: 'Received',
                      tabBarIcon: ({ color }) => (
                        <MaterialIcons name="add" size={23}  />
                      ),
                    }}
                />

<Tab.Screen name="Notifcations" component={NotificationScreen} 
                    options={{
                      headerTitleAlign:'center',
                      headerStyle:{
                        backgroundColor:'#abdbe3'
                      },
                        tabBarLabel: 'Notifcations',
                      tabBarIcon: ({ color }) => (
                        <MaterialIcons name="add-alert" size={23}  />
                      ),
                    }}
                />
          





      <Tab.Screen name="Settings" component={SettingsScreen}  
            options={{
                 headerTitleAlign:'center',
                 headerStyle:{
                  backgroundColor:'#abdbe3'
                },
                tabBarLabel: 'Settings',
                tabBarIcon: ({ color }) => (
                  <MaterialIcons name="settings" size={23}  />
                ),
            }}
      />
    </Tab.Navigator>
  )  
}



export default AppStack;