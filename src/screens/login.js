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
        <ImageBackground
        source={require('../../images/baloncuklu.jpg')}
        style={styles.ImageContainer}
    >
        <ScrollView
            showsVerticalScrollIndicator={false}
            style={{ width, marginTop: '30%' }}
        >
            <View style={styles.loginContainer}>
                {/* <Image source={require('../../assest/images/user.png')} style={{width:120,height:120,marginTop:-60,marginLeft:width/3,zIndex:2,borderWidth:3,borderColor:'black',borderRadius:100}}/> */}
                <View style={{ marginTop: '25%', marginLeft: 17, marginRight: 17, marginBottom: 25 }}>

                    <TextInput
                        style={styles.textInputStyle}
                        placeholder='Email'
                        placeholderTextColor='black'
                        underlineColorAndroid='transparent'
                        />
                    <View style={styles.border}></View>
                    <View style={styles.passwordContainer}>
                        <TextInput
                            style={styles.textInputStyle}
                            placeholder='Şifre'
                            placeholderTextColor='black'
                            underlineColorAndroid='transparent'
                            value={this.props.password}
                        />

                        <View style={{ alignItems: 'flex-end', justifyContent: 'center', marginRight: 10 }}>
                            <TouchableOpacity>
                                <Icon
                                    name="eye"
                                    color='#000'
                                    size={19}
                                />
                            </TouchableOpacity>
                        </View>
                    </View>
                    <View style={styles.border}></View>
                   
                </View>
                <View style={{ flexDirection: 'row', alignItems: 'center', justifyContent: 'flex-end', marginRight: 10 }}>
                    <View style={{ alignItems: 'flex-start' }}>
                        <Text>Beni Hatırla</Text>
                    </View>
                </View>
                <Button
                    title='Giriş'
                    color='#731873' 
                    onPress={()=>Actions.home()}
                    />
            

            </View>
        </ScrollView>
    </ImageBackground>
    )
  }
}
const styles = StyleSheet.create({
    errorStyle: {
        fontSize: 20,
        color: 'red',
        paddingTop: 15,
        alignSelf: 'center'
    },

    loginContainer: {
        justifyContent: 'center',
        height: height / 1.5,
       
        shadowColor: "black",
        shadowOffset: { width: 0, height: 0 },
        shadowRadius: 8,
        shadowOpacity: 0.2,
        zIndex: 2,
        borderRadius: 10,
        opacity: 0.5,
        margin: 12
    },
    signUpTextStyle: {
        color: 'white',
        fontSize: 20
    },
    signUpContainer: {
        opacity: 1,
        flexDirection: 'row',
        marginTop: 20,
        justifyContent: 'center',
        alignItems: 'center',
        fontSize: 18,
        marginRight: 'auto',
        marginLeft: 'auto',
        width: '40%',
        backgroundColor: '#E8C1C1',
        borderRadius: 2,

    },
    ImageContainer: {
        flex: 1,
        padding: 0,
        zIndex: 1
    },
    orText: {
        marginRight: 'auto',
        marginLeft: 'auto',
        width: '40%',
        fontSize: 16
    },
    border: {
        borderBottomWidth: 1,
        borderColor: '#E5E5E8',
    },
    textInputStyle: {
        alignSelf: 'stretch',
        color: 'black',
        padding: 13,
        borderRadius: 5,
        fontSize: 16,
        flexDirection: 'row',
        height: 50,
        width: 'auto',
        // borderColor: '#E5E5E8',
        // borderBottomWidth: 1,
        alignItems: 'center',
        flexGrow: 2,
        fontSize: 17,
        paddingLeft: 10
    },
    textStyle: {
        color: '#d8d8d8',
        fontSize: 18,
        justifyContent: 'center',
        alignItems: 'center',
        marginTop: 35,
        marginLeft: 13
    },
    container: {
        flexDirection: 'row'
    },
    passwordContainer: {
        flexDirection: 'row',
        paddingBottom: 10,
    },
  navbar:{
    width: '100%',
    resizeMode:'stretch',
    height:100
  
  },
  titleStyle: {
      fontSize: 18,
      color: 'black'
  },
  smallTitleStyle: {
      fontSize: 13,
      color: 'black'
  },
  ImageContainer: {
    flex:1,
     padding: 0,
     zIndex: 1,
   }, 
  descriptionStyles: {
      marginLeft: 10,
      marginRight: 10,
      fontSize: 13,
      color: 'black',
      textAlign: 'justify'
  },
  cardStyle: {
      flex: 3,
      flexDirection: "row",
      width: '30%'

  },
  cardWrapper: {
      height: 'auto',
      marginTop: 5,
      marginBottom: 5,
      marginLeft: 5,
      marginRight: 5,
      borderColor: 'gray',
      borderBottomWidth: 0.8,
      flexDirection: 'row',
      flex: 1,
      shadowColor: "#000",
      shadowOffset: {
          width: 0,
          height: 5,
      },
      shadowOpacity: 0.25,
      shadowRadius: 3.84,
      elevation: 0.2
  },
  descriptionWrapper: {
      height: 'auto',
      marginBottom: 5,
      marginLeft: 5,
      marginRight: 5,
      borderLeftWidth: 0.2,
      borderRightWidth: 0.2,
      borderBottomWidth: 0.2,
      borderColor: 'gray',
      flexDirection: 'row',
      flex: 1
  },
  imageView: {
      width: 70,
      height: 70,
  },
})