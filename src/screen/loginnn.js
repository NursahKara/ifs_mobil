import { WebEventResponderInstance } from '@ui-kitten/components/devsupport';
import React, { Component } from 'react';
import {
    SafeAreaView,
    StyleSheet,
    ScrollView,
    View,
    Text,
    StatusBar,
    TouchableOpacity,
    Image,
    ImageBackground,
    Dimensions,
    TextInput, Alert,
    Button, ActivityIndicator
} from 'react-native';
import { getToken } from '../service/loginFetch';
const { width, height } = Dimensions.get("screen");

export default class LoginScreen extends Component {
    constructor(props) {
        super(props);
        this.state = {
            username: '',
            password: '',
            systemID: '',
            data: [],
            dataSuccess: false,
            token: '',
            isLoading: false,

        };
    }


    render() {
        let { isLoading } = this.state;
        const { username, password, systemID } = this.state;
        if (isLoading) {
            return (
                <View style={{ marginTop: height / 2.25 }}>
                    <ActivityIndicator size="large" animating color="black" />
                </View>
            )
        }
        else {
            return (

                <ScrollView
                    showsVerticalScrollIndicator={false}
                >
                    <View style={{ flex: 1, marginBottom: 5 }}>
                        <Image source={require('../../images/headerLogo.jpg')} style={styles.navbar} />
                    </View>
                    <View style={styles.loginContainer}>
                        <View style={{ justifyContent: 'center', alignItems: 'center' }}>
                            {/* <TextInput
                                style={styles.textInputStyle}
                                placeholder='System ID'
                                underlineColorAndroid='transparent'
                                onChangeText={value =>
                                    this.setState({ systemID: value })
                                }
                            /> */}
                            <View style={styles.border}></View>
                            <TextInput
                                style={styles.textInputStyle}
                                placeholder='Username'
                                underlineColorAndroid='transparent'
                                onChangeText={value =>
                                    this.setState({ username: value })
                                }
                            />
                            <View style={styles.border}></View>
                            <View style={styles.passwordContainer}>
                                <TextInput
                                    style={styles.textInputStyle}
                                    placeholder='Şifre'
                                    underlineColorAndroid='transparent'
                                    onChangeText={value =>
                                        this.setState({ password: value })
                                    }

                                />
                                <View style={styles.border}></View>
                            </View>

                        </View>

                        <View style={styles.buttonStyle}>
                            <Button
                                title='Giriş'
                                color='#8b3d8d'
                                onPress={getToken(this.state.username, this.state.password)}
                            />
                        </View>

                    </View>
                </ScrollView>

            )
        }

    }
}
const styles = StyleSheet.create({
    navbar: {
        width: '100%',
        resizeMode: 'contain',
        height: 80,
        backgroundColor: '#8b3d8d'
    },
    loginContainer: {
        justifyContent: 'center',
        height: height / 1.5,
        shadowColor: "black",
        shadowOffset: { width: 0, height: 0 },
        shadowRadius: 8,
        shadowOpacity: 0.9,
        zIndex: 2,
        borderRadius: 10,
        margin: 15,
        opacity: 1,
        backgroundColor: 'white',
        borderColor: 'gray',
        shadowColor: "#000",
        shadowOffset: {
            width: 0,
            height: 5,
        },
        shadowOpacity: 4,
        shadowRadius: 4,
        elevation: 8,
        padding: 15,

    },
    border: {
        borderBottomWidth: 1,
        borderColor: '#E5E5E8',
    },
    textInputStyle: {
        alignSelf: 'stretch',
        color: 'black',
        padding: 15,
        borderRadius: 5,
        fontSize: 16,
        flexDirection: 'row',
        height: 50,
        width: 'auto',
        alignItems: 'center',
        flexGrow: 2,
        fontSize: 17,
        marginBottom: 10,
        borderBottomWidth: 2,
        borderColor: '#ceced0',

    },
    passwordContainer: {
        flexDirection: 'row',
        paddingBottom: 10,
    },
    buttonStyle: {
        marginTop: 5,
        marginBottom: 5,
        height: 49,
        justifyContent: 'center',
        fontSize: 18,
        marginRight: 'auto',
        marginLeft: 'auto',
        width: '50%'

    }
})