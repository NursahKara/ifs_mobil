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
  Button
} from 'react-native';
import {Actions} from 'react-native-router-flux';
import CustomHeader from '../customHeader';
import Icon from 'react-native-vector-icons/FontAwesome';
const { width, height } = Dimensions.get("screen");
export default class MaterialRequestsScreen extends Component{
  render(){
    return(
        <ScrollView>
           <CustomHeader title="Malzeme Talepleri" isHome={false} bg_white={true} navigation={this.props.navigation}/>
          <TouchableOpacity style={styles.card} onPress={()=>Actions.detail()}>
            <View style={styles.cardContentStart}>
              <View style={styles.rowLeft}>
                <Text style={{fontSize:18}}>Talep No:</Text>
              </View>
              <View style={styles.rowRight}>
                <Text style={{fontSize:16}}>4629/1/1</Text>
              </View>
            </View>
            <View style={styles.cardContentMiddle}>
              <View style={styles.rowLeft}>
                <Text style={{fontSize:18}}>Talep Eden:</Text>
              </View>
              <View style={styles.rowRight}>
                <Text style={{fontSize:16}}>IFSAPP OWNER</Text>
                <Text style={{fontSize:16}}>Site: IFS</Text>
                <Text style={{fontSize:16}}>Proje</Text>
              </View>
            </View>
            <View style={styles.cardContentEnd}>
            <View style={styles.rowLeft}>
                <Text style={{fontSize:18}}>Talep Tarihi:</Text>
              </View>
              <View style={styles.rowRight}>
              <TouchableOpacity style={{flexDirection:'row'}}>
                <Text style={{fontSize:16, alignItems:'flex-start',flex:5}}>26.03.2019</Text>
                <Icon 
                  name="angle-double-right"
                  size={25}
                  style={{alignItems:'flex-end',flex:1}}
                />
                </TouchableOpacity>
              </View>
            </View>
          </TouchableOpacity>
          <TouchableOpacity style={styles.card}>
            <View style={styles.cardContentStart}>
              <View style={styles.rowLeft}>
                <Text style={{fontSize:18}}>Talep No:</Text>
              </View>
              <View style={styles.rowRight}>
                <Text style={{fontSize:16}}>4629/1/1</Text>
              </View>
            </View>
            <View style={styles.cardContentMiddle}>
              <View style={styles.rowLeft}>
                <Text style={{fontSize:18}}>Talep Eden:</Text>
              </View>
              <View style={styles.rowRight}>
                <Text style={{fontSize:16}}>IFSAPP OWNER</Text>
                <Text style={{fontSize:16}}>Site: IFS</Text>
                <Text style={{fontSize:16}}>Proje</Text>
              </View>
            </View>
            <View style={styles.cardContentEnd}>
            <View style={styles.rowLeft}>
                <Text style={{fontSize:18}}>Talep Tarihi:</Text>
              </View>
              <View style={styles.rowRight}>
              <TouchableOpacity style={{flexDirection:'row'}}>
                <Text style={{fontSize:16, alignItems:'flex-start',flex:5}}>26.03.2019</Text>
                <Icon 
                  name="angle-double-right"
                  size={25}
                  style={{alignItems:'flex-end',flex:1}}
                />
                </TouchableOpacity>
              </View>
            </View>
          </TouchableOpacity>
          <TouchableOpacity style={styles.card}>
            <View style={styles.cardContentStart}>
              <View style={styles.rowLeft}>
                <Text style={{fontSize:18}}>Talep No:</Text>
              </View>
              <View style={styles.rowRight}>
                <Text style={{fontSize:16}}>4629/1/1</Text>
              </View>
            </View>
            <View style={styles.cardContentMiddle}>
              <View style={styles.rowLeft}>
                <Text style={{fontSize:18}}>Talep Eden:</Text>
              </View>
              <View style={styles.rowRight}>
                <Text style={{fontSize:16}}>IFSAPP OWNER</Text>
                <Text style={{fontSize:16}}>Site: IFS</Text>
                <Text style={{fontSize:16}}>Proje</Text>
              </View>
            </View>
            <View style={styles.cardContentEnd}>
              <View style={styles.rowLeft}>
                <Text style={{fontSize:18}}>Talep Tarihi:</Text>
              </View>
              <View style={styles.rowRight}>
                <TouchableOpacity style={{flexDirection:'row'}}>
                <Text style={{fontSize:16, alignItems:'flex-start',flex:5}}>26.03.2019</Text>
                <Icon 
                  name="angle-double-right"
                  size={25}
                  style={{alignItems:'flex-end',flex:1}}
                />
                </TouchableOpacity>
              </View>
            </View>
          </TouchableOpacity>
        </ScrollView>
    )
  }
}
const styles = StyleSheet.create({
   card: {
      width:'90%',
      height:200,
      borderColor: 'gray',
      flex:1,
      shadowColor: "#000",
        shadowOffset: {
            width: 0,
            height: 5,
        },
        shadowOpacity: 1,
        shadowRadius: 3.84,
        elevation: 15,
      marginLeft:'5%',
      marginRight:'5%',
      marginTop:'2%',
      alignItems:'center',
      justifyContent:"center",
      opacity: 0.9,
      backgroundColor:'white',
      borderRadius:20
  },
  cardContentStart:{
    height:'20%',
    width:'100%',
    borderColor: 'gray',
    borderBottomWidth:0.3,
    justifyContent:"center",
    padding:10,
    flexDirection:'row',
    marginBottom:'2%',
    color:'black',
  },
  cardContentMiddle:{
    height:'45%',
    width:'100%',
    borderColor: 'gray',
    borderBottomWidth:0.3,
    justifyContent:"center",
    padding:10,
    flexDirection:'row',
    marginBottom:'2%',
    color:'black'
  },
  cardContentEnd:{
    height:'20%',
    width:'100%',
    borderColor: 'gray',
    justifyContent:"center",
    padding:10,
    flexDirection:'row',
    marginBottom:'2%',
    color:'black'
  },
  rowLeft:{
    alignItems:'flex-start',
    flex:2,
    justifyContent:'center'
  },
  rowRight:{
    flex:3,
    justifyContent:'center',
    
  }
})