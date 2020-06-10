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

export default class Promo extends Component {
  render() {
    return (
      <View style={{ marginTop: 8, marginHorizontal: 12 }}>
        <View
          style={{
            flexDirection: 'row',
            justifyContent: 'space-between',
            backgroundColor: '#2C5FB8',
            borderTopLeftRadius: 4,
            borderTopRightRadius: 4,
            padding: 14,
          }}>
          <Image source={require('../assets/gojek/gopay.png')} />
          <Text style={{ color: 'white', fontWeight: 'bold', fontSize: 17 }}>
            Rp54.000
          </Text>
        </View>

        <View
          style={{
            flexDirection: 'row',
            paddingTop: 20,
            paddingBottom: 14,
            backgroundColor: '#2F65BD',
            borderBottomLeftRadius: 4,
            borderBottomRightRadius: 4,
          }}>
          <View style={styles.boxCenter}>
            <Image
              source={require('../assets/gojek/pay.png')}
              style={styles.imgCenter}
            />
            <Text style={styles.txtCenter}>Pay</Text>
          </View>
          <View style={styles.boxCenter}>
            <Image
              source={require('../assets/gojek/nearby.png')}
              style={styles.imgCenter}
            />
            <Text style={styles.txtCenter}>Nearby</Text>
          </View>
          <View style={styles.boxCenter}>
            <Image
              source={require('../assets/gojek/topup.png')}
              style={styles.imgCenter}
            />
            <Text style={styles.txtCenter}>Top Up</Text>
          </View>
          <View style={styles.boxCenter}>
            <Image
              source={require('../assets/gojek/more.png')}
              style={styles.imgCenter}
            />
            <Text style={styles.txtCenter}>More</Text>
          </View>
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  boxCenter: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  txtCenter: {
    color: 'white',
    fontSize: 13,
    fontWeight: 'bold',
    marginTop: 15,
  },
});
