import React, { Component } from 'react';
import {
  Platform,
  View,
  Text,
  StyleSheet,
  Image,
  TextInput,
  ScrollView,
} from 'react-native';

export default class Menu extends Component {
  render() {
    return (
      <View
        style={{
          flexDirection: 'row',
          flexWrap: 'wrap',
          marginTop: 18,
          justifyContent: 'space-between',
          marginHorizontal: 12,
        }}>
        <View style={styles.boxCenterParent}>
          <View style={styles.boxContents}>
            <Image
              source={require('../assets/gojek/go-ride.png')}
              style={styles.imgContents}
            />
          </View>
          <Text style={styles.caption}>GO-RIDE</Text>
        </View>

        <View style={styles.boxCenterParent}>
          <View style={styles.boxContents}>
            <Image
              source={require('../assets/gojek/go-car.png')}
              style={styles.imgContents}
            />
          </View>
          <Text style={styles.caption}>GO-CAR</Text>
        </View>

        <View style={styles.boxCenterParent}>
          <View style={styles.boxContents}>
            <Image
              source={require('../assets/gojek/go-bluebird.png')}
              style={styles.imgContents}
            />
          </View>
          <Text style={styles.caption}>GO-BLUEBIRD</Text>
        </View>

        <View style={styles.boxCenterParent}>
          <View style={styles.boxContents}>
            <Image
              source={require('../assets/gojek/go-send.png')}
              style={styles.imgContents}
            />
          </View>
          <Text style={styles.caption}>GO-SEND</Text>
        </View>

        <View style={styles.boxCenterParent}>
          <View style={styles.boxContents}>
            <Image
              source={require('../assets/gojek/go-deals.png')}
              style={styles.imgContents}
            />
          </View>
          <Text style={styles.caption}>GO-DEALS</Text>
        </View>

        <View style={styles.boxCenterParent}>
          <View style={styles.boxContents}>
            <Image
              source={require('../assets/gojek/go-pulsa.png')}
              style={styles.imgContents}
            />
          </View>
          <Text style={styles.caption}>GO-PULSA</Text>
        </View>

        <View style={styles.boxCenterParent}>
          <View style={styles.boxContents}>
            <Image
              source={require('../assets/gojek/go-food.png')}
              style={styles.imgContents}
            />
          </View>
          <Text style={styles.caption}>GO-FOOD</Text>
        </View>

        <View style={styles.boxCenterParent}>
          <View style={styles.boxContents}>
            <Image
              source={require('../assets/gojek/go-more.png')}
              style={styles.imgContents}
            />
          </View>
          <Text style={styles.caption}>MORE</Text>
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  boxCenterParent: {
    marginBottom: 15,
  },
  boxContents: {
    width: 68,
    height: 68,
    borderWidth: 1,
    borderColor: '#EFEFEF',
    borderRadius: 18,
    justifyContent: 'center',
    alignItems: 'center',
  },
  caption: {
    fontSize: 11,
    fontWeight: 'bold',
    textAlign: 'center',
    marginTop: 6,
    color: '#545454',
  },
});
