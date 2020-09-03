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
  Dimensions
} from 'react-native';
import CustomHeader from '../customHeader';
const { width, height } = Dimensions.get("screen");
export default class TmkfApprovalScreen extends Component{
  render(){
    return(
      <ImageBackground
      source={require('../../images/baloncuklu.jpg')}
      style={styles.ImageContainer}
      >
        <View>
          <CustomHeader title="TMKF Onayı" isHome={false} bg_white={true} navigation={this.props.navigation}/>
          <Text>TMKF Onayı</Text>
        </View>
      </ImageBackground>
    )
  }
}
const styles = StyleSheet.create({
  ImageContainer: {
    flex:1,
     padding: 0,
     zIndex: 1,
   }, 
})
