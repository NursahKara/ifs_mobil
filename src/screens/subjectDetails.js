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
  Dimensions,
  Button, ActivityIndicator
} from 'react-native';
import { Actions } from 'react-native-router-flux';
import CustomHeader from '../customHeader';
import Icon from 'react-native-vector-icons/FontAwesome';
import { FlatList } from 'react-native-gesture-handler';
const { width, height } = Dimensions.get("screen");
export default class SubjectDetailScreen extends Component {
  constructor(props) {
    super(props);
    this.state = {
      isLoading: false,
      data: [],
    }
  }

  render() {
    let { data, isLoading } = this.state;
    const descriptionNo = this.props.selected.DescriptionNo;
    const description = this.props.selected.Description;
    const smallDescription = this.props.selected.SmallDescription;

      console.log("category111111111::::::",descriptionNo)
      console.log("category22222222222::::::",description)
      console.log("category3333333::::::",smallDescription)
    if (isLoading) {
      return (
        <View style={{marginTop:height/2.25}}>
          <ActivityIndicator size="large" animating color="black" />
        </View>
      )

    }
    else {
      console.log("category111111111::::::",descriptionNo)
      console.log("category22222222222::::::",description)
      console.log("category3333333::::::",smallDescription)
      return (
        <ScrollView>
          <CustomHeader title="Detay" isHome={false} bg_white={true} />
              <TouchableOpacity style={styles.card} onPress={() => Actions.detail({token:this.props.token})}>
                <View style={styles.cardContentStart}>
                  <View style={styles.rowLeft}>
                    <Text style={{ fontSize: 18 }}>No:</Text>
                  </View>
                  <View style={styles.rowRight}>
                    <Text style={{ fontSize: 16 }}>{descriptionNo}</Text>
                  </View>
                </View>
                <View style={styles.cardContentMiddle}>
                  <View style={styles.rowLeft}>
                    <Text style={{ fontSize: 18 }}>Açıklama</Text>
                  </View>
                  <View style={styles.rowRight}>
                    <Text style={{ fontSize: 16 }}>{description}</Text>
                  </View>
                </View>
                <View style={styles.cardContentEnd}>
                  <View style={styles.rowLeft}>
                    <Text style={{ fontSize: 18 }}>Kısa Açıklama</Text>
                  </View>
                  <View style={styles.rowRight}>
                    <TouchableOpacity style={{ flexDirection: 'row' }}>
                      <Text style={{ fontSize: 16, alignItems: 'flex-start', flex: 5 }}>{smallDescription}</Text>
                      <Icon
                        name="angle-double-right"
                        size={25}
                        style={{ alignItems: 'flex-end', flex: 1 }}
                      />
                    </TouchableOpacity>
                  </View>
                </View>
              </TouchableOpacity>
        </ScrollView>
      )
    }

  }
}
const styles = StyleSheet.create({
  card: {
    width: '90%',
    height: 200,
    borderColor: 'gray',
    flex: 1,
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 5,
    },
    shadowOpacity: 1,
    shadowRadius: 3.84,
    elevation: 15,
    marginLeft: '5%',
    marginRight: '5%',
    marginTop: '2%',
    alignItems: 'center',
    justifyContent: "center",
    opacity: 0.9,
    backgroundColor: 'white',
    borderRadius: 20
  },
  cardContentStart: {
    height: '20%',
    width: '100%',
    borderColor: 'gray',
    borderBottomWidth: 0.3,
    justifyContent: "center",
    padding: 10,
    flexDirection: 'row',
    marginBottom: '2%',
    color: 'black',
  },
  cardContentMiddle: {
    height: '45%',
    width: '100%',
    borderColor: 'gray',
    borderBottomWidth: 0.3,
    justifyContent: "center",
    padding: 10,
    flexDirection: 'row',
    marginBottom: '2%',
    color: 'black'
  },
  cardContentEnd: {
    height: '20%',
    width: '100%',
    borderColor: 'gray',
    justifyContent: "center",
    padding: 10,
    flexDirection: 'row',
    marginBottom: '2%',
    color: 'black'
  },
  rowLeft: {
    alignItems: 'flex-start',
    flex: 2,
    justifyContent: 'center'
  },
  rowRight: {
    flex: 3,
    justifyContent: 'center',

  }
})