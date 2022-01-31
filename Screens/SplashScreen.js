import React from 'react';
import { Text, View, StyleSheet, TouchableOpacity, Image, Dimensions } from 'react-native';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';

const SplashScreen = ({ navigation }) => {

        const onPress = () => {
                navigation.navigate('SignInScreen')
        };
        return (<View style={styles.container} >
                <View style={styles.header}>
                        <Image
                                source={require('../assets/logo.png')}
                                style={styles.logo}
                                resizeMode='stretch'
                        />
                </View>
                <View style={styles.footer}>
                        <Text style={styles.title}> Stay Connected With Everyone </Text>
                        {/* <Text  style={styles.text} > SigIn with Account </Text> */}

                     
                        <TouchableOpacity
                                style={styles.appButtonContainer}
                                onPress={onPress}
                        >
                                <Text style={styles.appButtonText}>Get Started</Text>
                        </TouchableOpacity>

                </View>

        </View>)
}
const { height } = Dimensions.get("screen");
const height_logo = height * 0.28;


const styles = StyleSheet.create({
        appButtonContainer: {
                elevation: 8,
                backgroundColor: "#abdbe3",
                borderRadius: 10,
                paddingVertical: 10,
                paddingHorizontal: 12
              },

              appButtonText: {
                fontSize: 18,
                color: "#fff",
                fontWeight: "bold",
                alignSelf: "center",
                textTransform: "uppercase"
              },
        buttonNew: {
                alignItems: "center",
                backgroundColor: "#10101",
                padding: 10
        },
        container: {
                flex: 1,
                backgroundColor: '#abdbe3'
        },
        header: {
                flex: 2,
                justifyContent: 'center',
                alignItems: 'center'
        },
        footer: {
                flex: 1,
                backgroundColor: '#fff',
                borderTopLeftRadius: 30,
                borderTopRightRadius: 30,
                paddingVertical: 50,
                paddingHorizontal: 30
        },
        logo: {
                width: height_logo,
                height: height_logo
        },
        title: {
                color: '#05375a',
                fontSize: 30,
                marginBottom:30,
                fontWeight: 'bold'
        },
        text: {
                color: 'grey',
                marginTop: 5
        },
        button: {
                alignItems: 'flex-end',
                marginTop: 30
        },
        signIn: {
                width: 150,
                height: 40,
                justifyContent: 'center',
                alignItems: 'center',
                borderRadius: 50,
                flexDirection: 'row'
        },
        textSign: {
                color: 'white',
                fontWeight: 'bold'
        }
});



export default SplashScreen;