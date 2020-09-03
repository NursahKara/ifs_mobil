import React, { Component } from 'react';
import { Text, View, SafeAreaView, Image, TouchableOpacity, ScrollView } from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';
import {Actions} from 'react-native-router-flux';
export default class CustomHeader extends Component {
  render() {
    return (
      <View style={{
        flexDirection: 'row', height: 70, borderBottomWidth: 0.2, shadowColor: "#000",
        shadowOffset: {
          width: 0,
          height: 5,
        },
        shadowOpacity: 0.13,
        shadowRadius: 15,
        elevation: 3,
        backgroundColor:'#8b3d8d'
      }}>
        <View style={{ flex: 1, justifyContent: 'center' }}>
          {
            this.props.isHome ?
              <TouchableOpacity onPress={() => this.props.navigation.openDrawer()}>
                <Image style={{ width: 30, height: 30, marginLeft: 10 }}
                  source={require('../images/menu.png')}
                  resizeMode="contain"
                />
              </TouchableOpacity>
              :
              <TouchableOpacity style={{ flexDirection: 'row', alignItems: 'center' }}
                onPress={() => Actions.pop()}
              >
                <Icon
                  name='chevron-left'
                  color="white"
                  size={20}
                  style={{marginLeft: 10}}
              />
              </TouchableOpacity>
          }

        </View>
        <View style={{ flex: 10, justifyContent: 'center' }}>
              <Text style={{ textAlign: 'center', color: 'white',fontSize:20 }}>
                {this.props.title}
              </Text>
        </View>
        <View style={{ flex: 1, justifyContent: 'center'}}>
        <Image source={require('../images/logo.jpg')} style={{width:55,height:55,resizeMode:'contain'}}/>
        </View>
        <View style={{ flex: 1 }}></View>
      </View>
    )
  }
}