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
  Dimensions, Switch,
  Button, ActivityIndicator, AsyncStorage
} from 'react-native';
import CheckBox from '@react-native-community/checkbox'
import { Actions } from 'react-native-router-flux';
import CustomHeader from '../customHeader';
import Icon from 'react-native-vector-icons/FontAwesome';
import { FlatList } from 'react-native-gesture-handler';
const { width, height } = Dimensions.get("screen");

export default class ProfileScreen extends Component {
  constructor(props) {
    super(props);
    this.state = {
      isLoading: true,
      dataSource: [],
      data: [],
      checked: false
    }
    fetch('http://192.168.41.182/NotificationService/Profile',{
      method: 'GET',
      headers: new Headers({
        'Authorization': 'bearer '+ ' ' +this.props.token
      }), 
    })
      .then((response) => response.json())
      .then((responsejson) => {
        this.setState({
          isLoading: false,
          dataSource: responsejson.profile.NotificationSubjects,
          data:responsejson.profile.UserInfo,
        })
      })
      .catch((error) => console.error(error))
      .finally(() => setLoading(false));
  }
  
  switchChanged(field, value) {
    var obj = {};
    obj[field] = value;
    AsyncStorage.getItem('settings').then(function (strResult) {
      var result = JSON.parse(strResult) || {};
      Object.assign(result, obj);
      AsyncStorage.setItem('settings', JSON.stringify(result));
    });
    this.setState(obj);
  }
  checkboxChanged(field, value) {
    var obj = {};
    obj[field] = value;
    AsyncStorage.getItem('settings').then(function (strResult) {
      var result = JSON.parse(strResult) || {};
      Object.assign(result, obj);
      AsyncStorage.setItem('settings', JSON.stringify(result));
    });
    this.setState(obj);
  }
  handleOnPress = () => this.setState({checked: !this.state.checked})
  render() {
    let { dataSource, isLoading, data } = this.state;

    if (isLoading) {
      return (
        <View style={{marginTop:height/2.25}}>
          <ActivityIndicator size="large" animating />
        </View>
      )
    }
    
    else {
     
      return (
        
        <ScrollView>
          <CustomHeader title="Profil" isHome={false} bg_white={true} />
          <View style={styles.container}>
            <View style={{ justifyContent: "center", alignItems: "center", marginTop: 10 }}>
              <Image source={require('../../images/profile.png')} style={styles.iconStyle} />
            </View>
            <View style={styles.userCard}>
              <View style={{ justifyContent: "center", alignItems: "center", margin: 20 }}>
                <Text style={{ fontSize: 20, fontWeight: "bold" }}>Kullanıcı Bilgileri</Text>
              </View>
              <FlatList
                data={data}
                renderItem={({ item }) => (
                  <ScrollView>
                    <View style={{ marginTop: 20 }}>
                      <View style={{ flexDirection: "row", flex: 1 }}>
                        <Text style={{ alignItems: "flex-start", flex: 2, fontWeight: "bold" }}>SystemID : </Text>
                        <Text style={{ alignItems: "flex-end", flex: 3 }}>{item.SystemId}</Text>
                      </View>
                      <View style={{ flexDirection: "row", flex: 1 }}>
                        <Text style={{ alignItems: "flex-start", flex: 2, fontWeight: "bold" }}>Username : </Text>
                        <Text style={{ alignItems: "flex-end", flex: 3 }}>{item.Username}</Text>
                      </View>
                    </View>

                  </ScrollView>
                )}
                keyExtractor={(item, index) => index.toString()}
              />
            </View>
            <View style={styles.userCard}>
              <View style={{ justifyContent: "center", alignItems: "center", margin: 20 }}>
                <Text style={{ fontSize: 20, fontWeight: "bold" }}>Bildirim Başlıkları</Text>
              </View>
              <View style={{ flexDirection: "row", flex: 1 }}>
                <Text style={{ alignItems: "flex-start", flex: 10, justifyContent: "center" }}>Bildirim Almak İstiyor Musunuz?</Text>
                <Switch
                  trackColor={{ false: 'gray', true: '#21BD61' }}
                  thumbColor="white"
                  ios_backgroundColor="gray"
                  onValueChange={(value) => this.switchChanged('toggle', value)}
                  value={this.state.toggle}
                  style={{ alignItems: "flex-end", flex: 2 }}
                />
              </View>
              {
                
                this.state.toggle === true ?
                
                  <FlatList
                    data={dataSource}
                    renderItem={({ item }) => (
                      <ScrollView>
                        <View style={{ marginTop: 20,flexDirection:"row" }}>
                          <View style={{alignItems:"flex-start",flex:2}}>
                          <CheckBox
                            value={this.state.isChecked}
                            onValueChange={(value) => this.handleOnPress(!value)}
                            checked={this.state.checked} 
                            onPress={this.handleOnPress}
                          />
                          </View>
                          <View style={{alignItems:"flex-end",flex:10}}>
                            <Text>{item.Description}</Text>
                          </View>
                        </View>
                      </ScrollView>
                    )}
                    keyExtractor={(item, index) => index.toString()}
                  />
                  :
                  <View></View>
              }
            </View>
           
          </View>
        </ScrollView>
      )
    }

  }
}
const styles = StyleSheet.create({
  container: {
    justifyContent: 'center',
    height: "auto",
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
  userCard: {
    justifyContent: 'center',
    height: "auto",
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
  iconStyle: {
    width: 150,
    height: 150,
    resizeMode: 'contain',
    justifyContent: "center",
    alignItems: "center"
  },
})