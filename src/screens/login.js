import React, {Component} from 'react';
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
  TextInput,
  Button
} from 'react-native';
import {Actions} from 'react-native-router-flux';
import Icon from 'react-native-vector-icons/FontAwesome';
import CustomHeader from '../customHeader';
const { width, height } = Dimensions.get("screen");
export default class LoginScreen extends Component{
  render(){
    return(
       
        <ScrollView
            showsVerticalScrollIndicator={false}
            style={{ width,  }}
        >
            <View style={{flex:1, marginBottom:5}}>
        <Image source={require('../../images/headerLogo.jpg')} style={styles.navbar} />
        </View>
            <View style={styles.loginContainer}>
                <View style={{ justifyContent:'center',alignItems:'center' }}>
                    <TextInput
                        style={styles.textInputStyle}
                        placeholder='Email'
                        underlineColorAndroid='transparent'
                        />
                    <View style={styles.border}></View>
                    <View style={styles.passwordContainer}>
                        <TextInput
                            style={styles.textInputStyle}
                            placeholder='Şifre'
                            underlineColorAndroid='transparent'
                        />
                        {/* <View style={{ alignItems: 'flex-end', justifyContent: 'center',  }}>
                            <TouchableOpacity>
                                <Icon
                                    name="eye"
                                    color='#000'
                                    size={19}
                                    style={{marginRight:10,paddingBottom:10}}
                                />
                            </TouchableOpacity>
                        </View> */}
                        <View style={styles.border}></View>
                    </View>
                  
                </View>
                {/* <View style={{ flexDirection: 'row', alignItems: 'center', justifyContent: 'flex-end', marginRight: 10 }}>
                    <View style={{ alignItems: 'flex-start' }}>
                        <Text>Beni Hatırla</Text>
                    </View>
                </View> */}
                <View style={styles.buttonStyle}>
                <Button
                    title='Giriş'
                    color='#731873' 
                    onPress={()=>Actions.home()}
                    />
                </View>
                
            </View>
        </ScrollView>
    )
  }
}
const styles = StyleSheet.create({
    navbar:{
        width: '100%',
        resizeMode:'contain',
        height:80,
        backgroundColor:'#8b3d8d'
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
        backgroundColor:'white',
        borderColor: 'gray',
        shadowColor: "#000",
        shadowOffset: {
            width: 0,
            height: 5,
        },
        shadowOpacity: 4,
        shadowRadius: 4,
        elevation: 8,
        padding:15,
        
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
        marginBottom:10,
        borderBottomWidth: 2,
        borderColor: '#ceced0',
       
    },
    passwordContainer: {
        flexDirection: 'row',
        paddingBottom: 10,
    },
    buttonStyle:{
    marginTop:5,
    marginBottom:5,
    height:49,
    justifyContent:'center',
    fontSize: 18,
    marginRight:'auto',
    marginLeft:'auto',
    width:'50%'

    }
})