import React, { useEffect, useState, useRef, Component } from 'react';
import * as eva from '@eva-design/eva';
import { ApplicationProvider, Layout, Text } from '@ui-kitten/components';
import {
  Button, View, StyleSheet, TouchableOpacity, ScrollView, Image, Dimensions, ActivityIndicator, FlatList, DrawerLayoutAndroid
} from 'react-native';
import { default as theme } from '../../theme.json';
import { Actions } from 'react-native-router-flux';
import CustomHeader from '../customHeader';
import { cos } from 'react-native-reanimated';
import { ThemeService } from '@ui-kitten/components/theme/theme/theme.service';
import { request } from 'react-native-permissions';
const { width, height } = Dimensions.get("screen");
function drawerOpen() {
  const drawler = useRef(null);
  drawler.current.openDrawer()
}

// const navigationView = (
  
  // <ScrollView>
  //   <View style={{ marginBottom: 10, flex: 1, padding: 10 }}>
  //     <TouchableOpacity style={{ marginTop: 20, flexDirection: 'row' }} onPress={() => Actions.profile({token:props.token})}>
  //       <View style={{ flex: 1 }}>
  //         <Image source={require('../../images/user.png')} />
  //       </View>
  //       <View style={{ flex: 5 }}>
  //         <Text style={{ fontSize: 20, marginLeft: 15 }}>Profil</Text>
  //       </View>
  //     </TouchableOpacity>
  //     <TouchableOpacity style={{ marginTop: 20, flexDirection: 'row' }} onPress={() => props.navigation.navigate('Home')}>
  //       <View style={{ flex: 1 }}>
  //         <Image source={require('../../images/logout.png')} />
  //       </View>
  //       <View style={{ flex: 5 }}>
  //         <Text style={{ fontSize: 20, marginLeft: 15 }}>Çıkış</Text>
  //       </View>
  //     </TouchableOpacity>
  //   </View>
  // </ScrollView>
// );
// const token=props.token;

export default class App extends Component {
  constructor(props) {
    super(props);
    this.drawler=React.createRef();
    this.state = {
      isLoading: true,
      data: [],
      isLogout:false,
      selected:""
    }
    
    fetch('http://192.168.41.182/NotificationWebService/GetNotificationSubjects', {
      method: 'GET',
      headers: new Headers({
        'Authorization': 'bearer '+ ' ' +this.props.token
      }), 
    })
      .then((response) => response.json())
      .then((responsejson) => {
        this.setState({
          isLoading: false,
          data: responsejson.subjects,
        })
      })
      .catch((error) => console.error(error));
  }
  LogOut =()=>{
    fetch('http://192.168.41.182/NotificationWebService/LogOut', {
        method: 'GET',
        headers: new Headers({
          'Authorization': 'bearer '+ ' ' +this.props.token
        }), 
      })
        .then((response) => response.json())
        .then((responsejson) => {
          this.setState({
            isLoading: false,
            isLogout: responsejson.success,
          })
        })
        .catch((error) => console.error(error));
        console.log(this.state.isLogout)
        if(this.state.isLogout===true){
          this.setState({isLoading:true})
          Actions.login();
          console.log("TRUEEEEEE")
        }
        else{
          console.log("ERROOOOORRRRRR")
        }
   
  }
  componentDidMount() {
    
  }
 
  render() {
    // console.log("index token:::::", this.props.token);
    let { isLoading, data } = this.state;
   
    let imagePath = "";
    if (isLoading) {
      return (
        <View style={{marginTop:height/2.25}}>
          <ActivityIndicator size="large" animating color="black" />
        </View>
      )
    }
    else{
      return (
        <ApplicationProvider {...eva} theme={{ ...eva.light, ...theme }}>
          <DrawerLayoutAndroid
            drawerWidth={300}
            drawerPosition="left"
            renderNavigationView={() =>
            <ScrollView>
              <View style={{ marginBottom: 10, flex: 1, padding: 10 }}>
                <TouchableOpacity style={{ marginTop: 20, flexDirection: 'row' }} onPress={() => Actions.profile({token:this.props.token})}>
                  <View style={{ flex: 1 }}>
                    <Image source={require('../../images/user.png')} />
                  </View>
                  <View style={{ flex: 5 }}>
                    <Text style={{ fontSize: 20, marginLeft: 15 }}>Profil</Text>
                  </View>
                </TouchableOpacity>
                <TouchableOpacity style={{ marginTop: 20, flexDirection: 'row' }} onPress={this.LogOut.bind(this)}>
                  <View style={{ flex: 1 }}>
                    <Image source={require('../../images/logout.png')} />
                  </View>
                  <View style={{ flex: 5 }}>
                    <Text style={{ fontSize: 20, marginLeft: 15 }}>Çıkış</Text>
                  </View>
                </TouchableOpacity>
              </View>
            </ScrollView>}
            ref={this.drawler}
          >
            <ScrollView>
              <View style={{ flex: 1, marginBottom: 5, flexDirection: "row", backgroundColor: '#8b3d8d', height: 80, }}>
                <TouchableOpacity style={{ flex: 1, alignItems: "flex-start", paddingTop: 15 }} onPress={() => this.drawler.current.openDrawer()}>
                  <Image source={require('../../images/open-menu.png')} style={styles.menuStyle} />
                </TouchableOpacity>
                <View style={{ flex: 11, alignItems: "flex-end" }}>
                  <Image source={require('../../images/headerLogo.jpg')} style={styles.navbar} />
                </View>
              </View>
              <TouchableOpacity style={styles.container} >
                <View style={{ flex: 1, padding: 24 }}>
                  <FlatList
                    data={data}
                    keyExtractor={({ id }, index) => id}
                    renderItem={({ item }) => (
                      
                      <TouchableOpacity style={styles.cardLeft} onPress={() => Actions.subjectdetail({token:this.props.token,subject:data,selected:item})}>
                        <View>
                          <Image source={request(item.IconPath)} style={styles.imageView} />
                        </View>
                        <View style={styles.cardTextStyle}>
                          <Text style={{ fontSize: 18, }}>{item.Description}</Text>
                          <Text style={{ fontSize: 12 }}>{item.SmallDescription}</Text>
                          <Text>{item.SubjectCount}</Text>
                          
                          {console.log("imagePath::::::::::::::::::",item.IconPath)}
                        </View>
                      </TouchableOpacity>
                    )}
                    keyExtractor={(item) => item.ID}
                  />
                </View>
              </TouchableOpacity>
            </ScrollView>
          </DrawerLayoutAndroid>
        </ApplicationProvider>
      );
    }
    
  }
}

/////#DCAEFC   ,,,   ECD3FE

const styles = StyleSheet.create({
  menuStyle: {
    width: 50,
    height: 50,
    resizeMode: 'contain',


  },
  navbar: {
    width: '100%',
    resizeMode: 'contain',
    height: 80


  },
  container: {
    flexDirection: 'row',
    flex: 1,
  },
  cardLeft: {
    opacity: 0.9,
    backgroundColor: 'white',
    height: 200,
    flex: 4,
    margin: 8,
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: 20,
    borderColor: 'gray',
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 5,
    },
    shadowOpacity: 1,
    shadowRadius: 3.84,
    elevation: 15,
  },
  cardRight: {
    opacity: 0.9,
    backgroundColor: 'white',
    height: 200,
    flex: 4,
    margin: 8,
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: 20,
    borderColor: 'gray',
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 5,
    },
    shadowOpacity: 1,
    shadowRadius: 3.84,
    elevation: 15,
  },
  imageView: {
    width: 60,
    height: 60,
    resizeMode: 'contain'
  },
  cardTextStyle: {
    marginTop: 20,
    fontSize: 20,
    color: 'black',
    alignItems: 'center',
    justifyContent: 'center'
  }
})