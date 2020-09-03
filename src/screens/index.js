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
import {Actions} from 'react-native-router-flux';
import Icon from 'react-native-vector-icons/FontAwesome';
import CustomHeader from '../customHeader';
const { width, height } = Dimensions.get("screen");
export default class App extends Component{
  render(){
    return(
      <ImageBackground
      source={require('../../images/baloncuklu.jpg')}
      style={styles.ImageContainer}
      >
      <ScrollView>
        <View style={{flex:1, marginBottom:5}}>
        <Image source={require('../../images/headerLogo.jpg')} style={styles.navbar} />
        </View>
        <TouchableOpacity onPress={()=>Actions.materialRequests()}>
          <View style={styles.cardWrapper}>
            <View style={{ flex: 2, justifyContent: 'center', padding: 3 }}>
              <Image source={require('../../images/stokgrountule.png')} style={styles.imageView} />
            </View>
            <View style={{ alignItems: 'flex-start', justifyContent: 'center', flex: 4, marginLeft: 10, marginBottom: 5, marginTop: 5 }}>
              <Text style={styles.titleStyle}>Malzeme Talepleri</Text>
              <Text style={styles.smallTitleStyle}>Malzeme Talebi Onayı</Text>
            </View>
            <TouchableOpacity
              style={{
                  alignItems: 'flex-end',
                  marginRight: 10,
                  justifyContent: 'center',
                  flex: 1
              }}
            >
              <View style={{flexDirection:'row'}}> 
              <Text  style={{ alignItems: 'flex-start' ,marginRight:10,marginTop:2}}>14</Text>
              <Icon
                  name='chevron-right'
                  color="black"
                  size={27}
                  style={{alignItems: 'flex-end'}}
              />
              </View>
            </TouchableOpacity>
          </View>
        </TouchableOpacity>
        <TouchableOpacity onPress={()=>Actions.purchaseRequests()}>
          <View style={styles.cardWrapper}>
            <View style={{ flex: 2, justifyContent: 'center', padding: 3 }}>
              <Image source={require('../../images/siparisonayi.png')} style={styles.imageView} />
            </View>
            <View style={{ alignItems: 'flex-start', justifyContent: 'center', flex: 4, marginLeft: 10, marginBottom: 5, marginTop: 5 }}>
              <Text style={styles.titleStyle}>Satın Alma Talepleri</Text>
              <Text style={styles.smallTitleStyle}>Talep Onayı</Text>
            </View>
            <TouchableOpacity
              style={{
                  alignItems: 'flex-end',
                  marginRight: 10,
                  justifyContent: 'center',
                  flex: 1
              }}
            >
            <View style={{flexDirection:'row'}}> 
              <Text  style={{ alignItems: 'flex-start' ,marginRight:10,marginTop:2}}>14</Text>
              <Icon
                  name='chevron-right'
                  color="black"
                  size={27}
                  style={{alignItems: 'flex-end'}}
              />
              </View>
            </TouchableOpacity>
          </View>
        </TouchableOpacity>
        <TouchableOpacity onPress={()=>Actions.tmkfApproval()}>
          <View style={styles.cardWrapper}>
            <View style={{ flex: 2, justifyContent: 'center', padding: 3 }}>
              <Image source={require('../../images/siparisizleme.png')} style={styles.imageView} />
            </View>
            <View style={{ alignItems: 'flex-start', justifyContent: 'center', flex: 4, marginLeft: 10, marginBottom: 5, marginTop: 5 }}>
              <Text style={styles.titleStyle}>TMKF Onayı</Text>
              <Text style={styles.smallTitleStyle}>Bekleyen TMKF Onayları</Text>
            </View>
            <TouchableOpacity
              style={{
                  alignItems: 'flex-end',
                  marginRight: 10,
                  justifyContent: 'center',
                  flex: 1
              }}
            >
               <View style={{flexDirection:'row'}}> 
              <Text  style={{ alignItems: 'flex-start' ,marginRight:10,marginTop:2}}>14</Text>
              <Icon
                  name='chevron-right'
                  color="black"
                  size={27}
                  style={{alignItems: 'flex-end'}}
              />
              </View>
            </TouchableOpacity>
          </View>
        </TouchableOpacity>
        <TouchableOpacity onPress={()=>Actions.sisApproval()}>
          <View style={styles.cardWrapper}>
            <View style={{ flex: 2, justifyContent: 'center', padding: 3 }}>
              <Image source={require('../../images/hizmet.png')} style={styles.imageView} />
            </View>
            <View style={{ alignItems: 'flex-start', justifyContent: 'center', flex: 4, marginLeft: 10, marginBottom: 5, marginTop: 5 }}>
              <Text style={styles.titleStyle}>SİS Onayları</Text>
              <Text style={styles.smallTitleStyle}>SİS Onayı</Text>
            </View>
            <TouchableOpacity
              style={{
                  alignItems: 'flex-end',
                  marginRight: 10,
                  justifyContent: 'center',
                  flex: 1
              }}
            >
              <View style={{flexDirection:'row'}}> 
              <Text  style={{ alignItems: 'flex-start' ,marginRight:10,marginTop:2}}>14</Text>
              <Icon
                  name='chevron-right'
                  color="black"
                  size={27}
                  style={{alignItems: 'flex-end'}}
              />
              </View>
            </TouchableOpacity>
          </View>
        </TouchableOpacity>
        <TouchableOpacity onPress={()=>Actions.scrapSalesApproval()}>
          <View style={styles.cardWrapper}>
            <View style={{ flex: 2, justifyContent: 'center', padding: 3 }}>
              <Image source={require('../../images/instanceInvoice.png')} style={styles.imageView} />
            </View>
            <View style={{ alignItems: 'flex-start', justifyContent: 'center', flex: 4, marginLeft: 10, marginBottom: 5, marginTop: 5 }}>
              <Text style={styles.titleStyle}>Hurda Satış Onayları</Text>
              <Text style={styles.smallTitleStyle}>Hurda Satış Onayı</Text>
            </View>
            <TouchableOpacity
              style={{
                  alignItems: 'flex-end',
                  marginRight: 10,
                  justifyContent: 'center',
                  flex: 1
              }}
            >
             <View style={{flexDirection:'row'}}> 
              <Text  style={{ alignItems: 'flex-start' ,marginRight:10,marginTop:2}}>14</Text>
              <Icon
                  name='chevron-right'
                  color="black"
                  size={27}
                  style={{alignItems: 'flex-end'}}
              />
              </View>
            </TouchableOpacity>
          </View>
        </TouchableOpacity>
        <TouchableOpacity onPress={()=>Actions.subcontractorSalesApproval()}>
          <View style={styles.cardWrapper}>
            <View style={{ flex: 2, justifyContent: 'center', padding: 3 }}>
              <Image source={require('../../images/customerOrder.jpg')} style={styles.imageView} />
            </View>
            <View style={{ alignItems: 'flex-start', justifyContent: 'center', flex: 4, marginLeft: 10, marginBottom: 5, marginTop: 5 }}>
              <Text style={styles.titleStyle}>Taşerona Satış Onayları</Text>
              <Text style={styles.smallTitleStyle}>Taşerona Satış Onayları</Text>
            </View>
            <TouchableOpacity
              style={{
                  alignItems: 'flex-end',
                  marginRight: 10,
                  justifyContent: 'center',
                  flex: 1
              }}
            >
              <View style={{flexDirection:'row'}}> 
              <Text  style={{ alignItems: 'flex-start' ,marginRight:10,marginTop:2}}>14</Text>
              <Icon
                  name='chevron-right'
                  color="black"
                  size={27}
                  style={{alignItems: 'flex-end'}}
              />
              </View>
            </TouchableOpacity>
          </View>
        </TouchableOpacity>
        <TouchableOpacity onPress={()=>Actions.contractApproval()}>
          <View style={styles.cardWrapper}>
            <View style={{ flex: 2, justifyContent: 'center', padding: 3 }}>
              <Image source={require('../../images/subContract.png')} style={styles.imageView} />
            </View>
            <View style={{ alignItems: 'flex-start', justifyContent: 'center', flex: 4, marginLeft: 10, marginBottom: 5, marginTop: 5 }}>
              <Text style={styles.titleStyle}>Sözleşme Onayları (Taşeron)</Text>
              <Text style={styles.smallTitleStyle}>Sözleşme Onayları (Taşeron)</Text>
            </View>
            <TouchableOpacity
              style={{
                  alignItems: 'flex-end',
                  marginRight: 10,
                  justifyContent: 'center',
                  flex: 1
              }}
            >
              <View style={{flexDirection:'row'}}> 
              <Text  style={{ alignItems: 'flex-start' ,marginRight:10,marginTop:2}}>14</Text>
              <Icon
                  name='chevron-right'
                  color="black"
                  size={27}
                  style={{alignItems: 'flex-end'}}
              />
              </View>
            </TouchableOpacity>
          </View>
        </TouchableOpacity>
        <TouchableOpacity >
          <View style={styles.cardWrapper}>
            <View style={{ flex: 2, justifyContent: 'center', padding: 3 }}>
              <Image source={require('../../images/cikis.png')} style={styles.imageView} />
            </View>
            <View style={{ alignItems: 'flex-start', justifyContent: 'center', flex: 4, marginLeft: 10, marginBottom: 5, marginTop: 5 }}>
              <Text style={styles.titleStyle}>Çıkış</Text>
              <Text style={styles.smallTitleStyle}>Oturumu Kapat</Text>
            </View>
            <TouchableOpacity
              style={{
                  alignItems: 'flex-end',
                  marginRight: 10,
                  justifyContent: 'center',
                  flex: 1
              }}
            >
              <View style={{flexDirection:'row'}}> 
              <Icon
                  name='chevron-right'
                  color="black"
                  size={27}
                  style={{alignItems: 'flex-end'}}
              />
              </View>
            </TouchableOpacity>
          </View>
        </TouchableOpacity>
      </ScrollView>
      </ImageBackground>
    )
  }
}
const styles = StyleSheet.create({
  navbar:{
    width: '100%',
    resizeMode:'contain',
    height:100,
    backgroundColor:'#8b3d8d'
  
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
      resizeMode:'contain'
  },
})