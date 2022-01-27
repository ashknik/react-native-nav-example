import React from 'react';
import { Text, TextInput , Platform, View, StyleSheet, TouchableOpacity, Image, Dimensions } from 'react-native';
import FontAwesome from 'react-native-vector-icons/FontAwesome';
import Feather from 'react-native-vector-icons/Feather';

import { AuthContext } from '../components/AuthContext';



const SigInScreen = ({navigation}) =>{


    const { signIn } =  React.useContext(AuthContext);

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
                        
                        />
                      
                        </View>

                        <View style={styles.button}>
                <TouchableOpacity
                    style={styles.signIn}
                    onPress={() => signIn()}
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