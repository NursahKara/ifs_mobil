import React from 'react';
import * as eva from '@eva-design/eva';
import { ApplicationProvider, Layout, Text } from '@ui-kitten/components';
import {
    Button,View,StyleSheet,TouchableOpacity,ScrollView,Image,Dimensions
  } from 'react-native';
import { default as theme } from '../../theme.json';
import {Actions} from 'react-native-router-flux';
import Icon from 'react-native-vector-icons/FontAwesome';
const { width, height } = Dimensions.get("screen");
const HomeScreen = () => (
    <Layout style={{flex: 1, justifyContent: 'center', alignItems: 'center'}}>
      <Text category='h1'>HOME</Text>
    </Layout>
  );
  
  export default () => (
    <ApplicationProvider {...eva} theme={{ ...eva.light, ...theme }}>
    <Layout style={{ flex: 1, }}>
    <ScrollView>
    <View style={{flex:1, marginBottom:5}}>
        <Image source={require('../../images/headerLogo.jpg')} style={styles.navbar} />
        </View>
        <TouchableOpacity style={styles.container} >
            <TouchableOpacity style={styles.cardLeft} onPress={()=>Actions.materialRequests()}>
                <View>
                    <Image source={require('../../images/stokgrountule.png')} style={styles.imageView} />
                </View>
                <View style={styles.cardTextStyle}>
                    <Text style={{fontSize:18,}}>Malzeme Talepleri</Text>
                    <Text style={{fontSize:12}}>Malzeme Talepleri Onayı</Text>
                </View>
            </TouchableOpacity>
            <TouchableOpacity style={styles.cardRight} onPress={()=>Actions.purchaseRequests()}>
                <View>
                <Image source={require('../../images/siparisonayi.png')} style={styles.imageView} />
                </View>
                <View style={styles.cardTextStyle}>
                    <Text style={{fontSize:18,}}>Satın Alma Talepleri</Text>
                    <Text style={{fontSize:12,}}>Talep Onayı</Text>
                </View>
            </TouchableOpacity>
        </TouchableOpacity>
        <TouchableOpacity style={styles.container}>
            <TouchableOpacity style={styles.cardLeft} onPress={()=>Actions.tmkfApproval()}>
                <View>
                <Image source={require('../../images/siparisizleme.png')} style={styles.imageView} />
                </View>
                <View style={styles.cardTextStyle}>
                    <Text style={{fontSize:18,}}>TMKF Onayı</Text>
                    <Text style={{fontSize:12}}>Bekleyen TMKF Onayları</Text>
                </View>
            </TouchableOpacity>
            <TouchableOpacity style={styles.cardRight} onPress={()=>Actions.sisApproval()}>
                <View>
                <Image source={require('../../images/hizmet.png')} style={styles.imageView} />
                </View>
                <View style={styles.cardTextStyle}>
                    <Text style={{fontSize:18,}}>SİS Onayları</Text>
                    <Text style={{fontSize:12,}}>SİS Onayı</Text>
                </View>
            </TouchableOpacity>
        </TouchableOpacity>
        <TouchableOpacity style={styles.container}>
            <TouchableOpacity style={styles.cardLeft} onPress={()=>Actions.scrapSalesApproval()}>
                <View>
                <Image source={require('../../images/instanceInvoice.png')} style={styles.imageView} />
                </View>
                <View style={styles.cardTextStyle}>
                    <Text style={{fontSize:18,}}>Hurda Satış Onayları</Text>
                    <Text style={{fontSize:12}}>Hurda Satış Onayı</Text>
                </View>
            </TouchableOpacity>
            <TouchableOpacity style={styles.cardRight} onPress={()=>Actions.subcontractorSalesApproval()}>
                <View>
                <Image source={require('../../images/customerOrder.jpg')} style={styles.imageView} />
                </View>
                <View style={styles.cardTextStyle}>
                    <Text style={{fontSize:18,}}>Taşerona Satış</Text>
                    <Text style={{fontSize:18,}}>Onayları</Text>
                    <Text style={{fontSize:12,}}>Taşerona Satış Onayları</Text>
                </View>
            </TouchableOpacity>
        </TouchableOpacity>
        <TouchableOpacity style={styles.container}>
            <TouchableOpacity style={styles.cardLeft} onPress={()=>Actions.contractApproval()}>
                <View>
                <Image source={require('../../images/subContract.png')} style={styles.imageView} />
                </View>
                <View style={styles.cardTextStyle}>
                    <Text style={{fontSize:18,}}>Sözleşme Onayları</Text>
                    <Text style={{fontSize:18,}}>(Taşeron)</Text>
                    <Text style={{fontSize:12}}>Sözleşme Onayları (Taşeron)</Text>
                </View>
            </TouchableOpacity>
            <TouchableOpacity style={styles.cardRight}>
                <View>
                <Image source={require('../../images/cikis.png')} style={styles.imageView} />
                </View>
                <View style={styles.cardTextStyle}>
                    <Text style={{fontSize:18,}}>Çıkış</Text>
                    <Text style={{fontSize:12,}}>Oturumu Kapat</Text>
                </View>
            </TouchableOpacity>
        </TouchableOpacity>
    </ScrollView>
    </Layout>
  </ApplicationProvider>
  );
/////#DCAEFC   ,,,   ECD3FE
  
const styles = StyleSheet.create({
    navbar:{
        width: '100%',
        resizeMode:'contain',
        height:80,
        backgroundColor:'#8b3d8d'
      
      },
    container:{
        flexDirection:'row',
        flex:1,
    },
    cardLeft:{
      opacity: 0.9,
      backgroundColor:'white',
        height:200,
        flex:4,
        margin:8,
        alignItems:'center',
        justifyContent:'center',
        borderRadius:20,
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
    cardRight:{
      opacity: 0.9,
      backgroundColor:'white',
        height:200,
        flex:4,
        margin:8,
        alignItems:'center',
        justifyContent:'center',
        borderRadius:20,
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
    imageView:{
        width:60,
        height:60,
        resizeMode:'contain'
    },
    cardTextStyle:{
        marginTop:20,
        fontSize:20,
        color:'black',
        alignItems:'center',
        justifyContent:'center'
    }
  })