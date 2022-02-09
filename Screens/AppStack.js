import React from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { Text, View, TouchableOpacity } from 'react-native';
import { AuthContext } from '../components/AuthContext';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';
import { GooglePlacesAutocomplete } from 'react-native-google-places-autocomplete';
import HomeScreen from './HomeScreen';
import { TextInput } from 'react-native-gesture-handler';

const Tab = createBottomTabNavigator();




const RecScreen = () => {
  const { signOut } = React.useContext(AuthContext);
  return (
    <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
      <Text> Invitaion Received </Text>

    </View>
  )
}

const CreateInvite = () => {
  const { signOut } = React.useContext(AuthContext);

  const [location, setLocation] = React.useState('');

  console.log(location.length);

  return (
    <View style={{ flex: 1, flexDirection: 'row' }}>

      {
        location.length == 0 &&


        <View style={{ flex: 4, padding: 15 }} >
          <GooglePlacesAutocomplete
            placeholder='Select a place'
            onPress={(data, details = null) => {
              // 'details' is provided when fetchDetails = true
               setLocation(details.structured_formatting.main_text)
              //setLocation(details.description)
              // console.log(details);
            }}
            query={{
              key: 'AIzaSyBQHKZTwhPJX_9IevM5jKC8kmz0NzqAaBk',
              language: 'en',
            }}
          />
        </View>
      }

      {
        location.length > 0 &&

        <View style={{ flex: 6, padding: 15, height: 90, }} >
          <TextInput value={location} enabled={false} multiline={true}
    numberOfLines={2}></TextInput>

        </View>


      }

      {
        location.length > 0 &&
        <TouchableOpacity style={{ flex: 2, padding: 25, height: 72, }} onPress={()=>{setLocation('')}} >
          <MaterialIcons name="edit" size={23} />
        </TouchableOpacity>

      }




      {/* {location.length > 0 ?

        <>
          <View style={{ flex: 2, padding: 15, height: 62, justifyContent: 'flex-end' }} >

          {location &&
            <View>  {location} </View>
            }

          </View>
          <View style={{ flex: 2, padding: 15, height: 62, justifyContent: 'flex-end' }} >

            <TouchableOpacity>   <MaterialIcons name="upload-file" size={23} />  </TouchableOpacity>

          </View>
        </> : null

      } */}

    </View>
  )
}


const NotificationScreen = () => {
  const { signOut } = React.useContext(AuthContext);
  return (
    <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
      <Text> Notification Screen  </Text>

    </View>
  )
}

const SettingsScreen = () => {

  const { signOut } = React.useContext(AuthContext);


  return (
    <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
      <TouchableOpacity
        onPress={() => { signOut() }}
      >
        <Text>Logout</Text>
      </TouchableOpacity>
    </View>
  )
}

const AppStack = ({ navigation }) => {



  return (
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
          headerTitleAlign: 'center',
          headerStyle: {
            backgroundColor: '#abdbe3'
          },
          tabBarLabel: 'Sent',
          tabBarIcon: ({ color }) => (
            <MaterialIcons name="upload-file" size={23} />
          ),
        }}
      />

      <Tab.Screen name="Received" component={RecScreen}
        options={{
          headerTitleAlign: 'center',
          headerStyle: {
            backgroundColor: '#abdbe3'
          },
          tabBarLabel: 'Received',
          tabBarIcon: ({ color }) => (
            <MaterialIcons name="mark-email-read" size={23} />
          ),
        }}
      />


      <Tab.Screen name="Invitation" component={CreateInvite}
        options={{
          headerTitleAlign: 'center',
          headerStyle: {
            backgroundColor: '#abdbe3'
          },
          // tabBarLabel: 'Received',
          tabBarIcon: ({ color }) => (
            <MaterialIcons name="add" size={23} />
          ),
        }}
      />

      <Tab.Screen name="Notifcations" component={NotificationScreen}
        options={{
          headerTitleAlign: 'center',
          headerStyle: {
            backgroundColor: '#abdbe3'
          },
          tabBarLabel: 'Notifcations',
          tabBarIcon: ({ color }) => (
            <MaterialIcons name="add-alert" size={23} />
          ),
        }}
      />






      <Tab.Screen name="Settings" component={SettingsScreen}
        options={{
          headerTitleAlign: 'center',
          headerStyle: {
            backgroundColor: '#abdbe3'
          },
          tabBarLabel: 'Settings',
          tabBarIcon: ({ color }) => (
            <MaterialIcons name="account-circle" size={23} />
          ),
        }}
      />
    </Tab.Navigator>
  )
}



export default AppStack;