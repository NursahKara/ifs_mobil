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
                <ImageBackground source={require("../../images/bgbg.png")}
                    style={{ height: "100%", width: "100%" }}>
                    <ScrollView
                        showsVerticalScrollIndicator={false}
                    >
                        <View style={styles.loginContainer}>
                            <View style={{ justifyContent: 'center', alignItems: 'center' }}>
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
                                    color='#f47500'

                                    onPress={getToken(this.state.username, this.state.password)}

                                />
                            </View>

                        </View>
                    </ScrollView>
                </ImageBackground>
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

        borderRadius: 10,
        margin: 20,
        opacity: 1,
        padding: 15,
        marginTop: '20%'

    },
    border: {
        borderBottomWidth: 1,
        borderColor: '#E5E5E8',
    },
    textInputStyle: {
        alignSelf: 'stretch',
        color: 'black',
        fontWeight: 'bold',
        padding: 15,
        borderRadius: 5,
        fontSize: 18,
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
        paddingTop: 40,
        justifyContent: 'center',
        fontSize: 18,
        marginRight: 'auto',
        marginLeft: 'auto',
        width: '80%',

    }
})