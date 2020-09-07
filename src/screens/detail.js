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
export default class DetailScreen extends Component{
  render(){
    return(
        <ScrollView>
           <CustomHeader title="Talep Detayları" isHome={false} bg_white={true} navigation={this.props.navigation}/>
            <View style={{margin:15,justifyContent: 'center'}}>
                <View style={styles.card}>
                    <View style={styles.cardContentStart}>
                        <View style={styles.rowLeft}>
                            <Text style={{fontSize:18,fontWeight:'bold'}}>Talep No:</Text>
                        </View>
                        <View style={styles.rowRight}>
                            <Text style={{fontSize:18}}>4629/1/1</Text>
                        </View>
                    </View>
                    <View style={styles.cardContentStart}>
                        <View style={styles.rowLeft}>
                            <Text style={{fontSize:18,fontWeight:'bold'}}>Malzeme:</Text>
                        </View>
                        <View style={styles.rowRight}>
                            <Text style={{fontSize:18}}>H profil 70*70</Text>
                        </View>
                    </View>
                    <View style={styles.cardContentStart}>
                        <View style={styles.rowLeft}>
                            <Text style={{fontSize:18,fontWeight:'bold'}}>Miktar:	</Text>
                        </View>
                        <View style={styles.rowRight}>
                            <Text style={{fontSize:18}}>5</Text>
                        </View>
                    </View>
                    <View style={styles.cardContentStart}>
                        <View style={styles.rowLeft}>
                            <Text style={{fontSize:18,fontWeight:'bold'}}>Talep Tarihi:</Text>
                        </View>
                        <View style={styles.rowRight}>
                            <Text style={{fontSize:18}}>06.07.2018</Text>
                        </View>
                    </View>
                    <View style={styles.cardContentStart}>
                        <View style={styles.rowLeft}>
                            <Text style={{fontSize:18,fontWeight:'bold'}}>İhtiyaç  Tarihi:</Text>
                        </View>
                        <View style={styles.rowRight}>
                            <Text style={{fontSize:18}}>06.07.2018</Text>
                        </View>
                    </View>
                    <View style={styles.cardContentStart}>
                        <View style={styles.rowLeft}>
                            <Text style={{fontSize:18,fontWeight:'bold'}}>Site:</Text>
                        </View>
                        <View style={styles.rowRight}>
                            <Text style={{fontSize:18}}>IFS</Text>
                        </View>
                    </View>
                    <View style={styles.cardContentStart}>
                        <View style={styles.rowLeft}>
                            <Text style={{fontSize:18,fontWeight:'bold'}}>Talep Eden:</Text>
                        </View>
                        <View style={styles.rowRight}>
                            <Text style={{fontSize:18}}>IFSAPP Owner</Text>
                        </View>
                    </View>
                    <View style={styles.cardContentStart}>
                        <View style={styles.rowLeft}>
                            <Text style={{fontSize:18,fontWeight:'bold'}}>Varış Yeri:</Text>
                        </View>
                        <View style={styles.rowRight}>
                            <Text style={{fontSize:18}}></Text>
                        </View>
                    </View>
                    <View style={styles.cardContentStart}>
                        <View style={styles.rowLeft}>
                            <Text style={{fontSize:18,fontWeight:'bold'}}>Not:</Text>
                        </View>
                        <View style={styles.rowRight}>
                            <Text style={{fontSize:18}}></Text>
                        </View>
                    </View>
                    <View style={styles.cardContentStart}>
                        <View style={styles.rowLeft}>
                            <Text style={{fontSize:18,fontWeight:'bold'}}>Atama Tipi:</Text>
                        </View>
                        <View style={styles.rowRight}>
                            <Text style={{fontSize:18}}></Text>
                        </View>
                    </View>
                    <View style={styles.cardContentStart}>
                        <View style={styles.rowLeft}>
                            <Text style={{fontSize:18,fontWeight:'bold'}}>Proje:</Text>
                        </View>
                        <View style={styles.rowRight}>
                            <Text style={{fontSize:18}}></Text>
                        </View>
                    </View>
                </View>
            </View>
            {/* <View style={styles.buttonStyle}>
                    <View style={{flex:2}} >
                       
                    </View>
                    <View style={{alignItems:'flex-start' ,flex:4}} >
                        <Button title="Onayla"  color='#731873' width='100%'/>
                    </View>
                    <View  style={{alignItems:'flex-end',flex:4}}>
                        <Button title="Reddet"  color='#731873'/>
                    </View>
                    <View style={{flex:2}} >
                    
                    </View>
                </View> */}
                <View style={{flex:1,flexDirection:"row"}}>
                    <View style={{flex:2}} >
                    </View>
                    <View style={{flex:4,margin:7}}>
                    <Button title="reddet" color="#FF1239"/>
                    </View>
                    <View style={{flex:4,margin:7}}>
                        <Button title="onayla" color="#731873"/>
                    </View>
                    <View style={{flex:2}} >
                    </View>
                </View>
                <View style={{flex:1,flexDirection:"row"}}>
                    <View style={{flex:2}} >
                    </View>
                    <View style={{flex:8,marginLeft:2,marginRight:2,marginBottom:10}}>
                        <Button title="Bekle" color="#BBC2C7"/>
                    </View>
                    <View style={{flex:2}} >
                    </View>
                </View>
        </ScrollView>
    )
  }
}
const styles = StyleSheet.create({
   card: {
    height: 'auto',
    zIndex: 2,
    borderRadius: 10,
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
    flex:1,
    padding:10
  },
  cardItems:{
      flex:12,
      borderBottomWidth:0.2,
      borderBottomColor:'gray',
      paddingTop:30,
      paddingLeft:10
  },
  cardContentStart:{
    justifyContent:"center",
    flexDirection:'row',
    marginBottom:'2%',
    color:'black',
    flex:12,
    borderBottomWidth:0.2,
    borderBottomColor:'gray',
    paddingTop:30,
    paddingLeft:10
  },
  rowLeft:{
    alignItems:'flex-start',
    flex:2,
    justifyContent:'center'
  },
  rowRight:{
    flex:3,
    justifyContent:'center',
  },
 
})