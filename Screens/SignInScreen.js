import React from 'react';
import { Text, TextInput , Platform, View, StyleSheet, TouchableOpacity, Image, Dimensions } from 'react-native';
import FontAwesome from 'react-native-vector-icons/FontAwesome';
import Feather from 'react-native-vector-icons/Feather';

import { AuthContext } from '../components/AuthContext';



const SigInScreen = ({navigation}) =>{

    const [data,setData]  = React.useState({
        userName:'',
        password:''
    })

    const textInputChange = (val) => {
        if( val.trim().length >= 4 ) {
            setData({
                ...data,
                userName: val,
            });
        }
    }

    const passwordInputChange = (val) => {
        if( val.trim().length >= 4 ) {
            setData({
                ...data,
                password: val,
            });
        }
    }


    const { signIn } =  React.useContext(AuthContext);


    const loginHandle = (userName, password) => {

        // const foundUser = Users.filter( item => {
        //     return userName == item.username && password == item.password;
        // } );

        if ( data.userName.length == 0 || data.password.length == 0 ) {
            Alert.alert('Wrong Input!', 'Username or password field cannot be empty.', [
                {text: 'Okay'}
            ]);
            return;
        }



        signIn(userName,password);

       
    }

return(<View style={styles.container} >
            <View  style={styles.header}>
                <Text  style={styles.text_header} > Welcome !  </Text>
            </View>

            <View  style={styles.footer}>
                <Text style={styles.text_footer}> Email </Text>

                <View style={styles.action}>
                <FontAwesome 
                    name="user-o"
                    color="#101011"
                    size={20}
                />
                <TextInput 
                  
                    placeholder="doe@email.com"
                    placeholderTextColor="#666666"
                    style={[styles.textInput, {
                        color: "#101011"
                    }]}
                    onChangeText={(val) => textInputChange(val)}
                    autoCapitalize="none"
                   
                />
                </View>

                <Text style={styles.text_footer}> Password </Text>

                        <View style={styles.action}>
                        <FontAwesome 
                            name="lock"
                            color="#101011"
                            size={20}
                        />
                        <TextInput 
                            
                            placeholder="Your Password"
                            secureTextEntry={true}
                            placeholderTextColor="#666666"
                            style={[styles.textInput, {
                                color: "#101011"
                            }]}
                            autoCapitalize="none"
                            onChangeText={(val) => passwordInputChange(val)}
                        />
                      
                        </View>

                        <View style={styles.button}>
                <TouchableOpacity
                    style={styles.signIn}
                    onPress={() => loginHandle(data.userName,data.password)}
                >
              
                    <Text style={[styles.textSign, {
                        color:'#fff',
                        
                    }]}>Sign In</Text>
              
                </TouchableOpacity>

                <TouchableOpacity
                    onPress={() => navigation.navigate('SignUpScreen')}
                    style={[styles.signIn, {
                        borderColor: '#009387',
                        backgroundColor:'#FFF',
                        borderWidth: 1,
                        marginTop: 15
                    }]}
                >
                    <Text style={[styles.textSign, {
                        color: '#009387'
                    }]}>Sign Up</Text>
                </TouchableOpacity>
            </View>
                        


            </View>

</View>)
}


const styles = StyleSheet.create({
    container: {
      flex: 1, 
      backgroundColor: '#009387'
    },
    header: {
        flex: 1,
        justifyContent: 'flex-end',
        paddingHorizontal: 20,
        paddingBottom: 50
    },
    footer: {
        flex: 3,
        backgroundColor: '#fff',
        borderTopLeftRadius: 30,
        borderTopRightRadius: 30,
        paddingHorizontal: 20,
        paddingVertical: 30
    },
    text_header: {
        color: '#fff',
        fontWeight: 'bold',
        fontSize: 30
    },
    text_footer: {
        color: '#05375a',
        fontSize: 18
    },
    action: {
        flexDirection: 'row',
        marginTop: 10,
        borderBottomWidth: 1,
        borderBottomColor: '#f2f2f2',
        paddingBottom: 5
    },
    actionError: {
        flexDirection: 'row',
        marginTop: 10,
        borderBottomWidth: 1,
        borderBottomColor: '#FF0000',
        paddingBottom: 5
    },
    textInput: {
        flex: 1,
        marginTop: Platform.OS === 'ios' ? 0 : -12,
        paddingLeft: 10,
        color: '#05375a',
    },
    errorMsg: {
        color: '#FF0000',
        fontSize: 14,
    },
    button: {
        alignItems: 'center',
        marginTop: 50
    },
    signIn: {
        width: '100%',
        height: 50,
        justifyContent: 'center',
        alignItems: 'center',
        borderRadius: 10,
        backgroundColor:'#abdbe3'
    },
    textSign: {
        fontSize: 18,
        fontWeight: 'bold'
    },appButtonContainer: {
    elevation: 8,
    backgroundColor: "#009688",
    borderRadius: 10,
    paddingVertical: 10,
    paddingHorizontal: 12
  },
  });


export default SigInScreen;