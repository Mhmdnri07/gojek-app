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
      <View>
        <View
          style={{ marginHorizontal: 18, paddingTop: 10, paddingBottom: 50 }}>
          <View style={styles.boxImgNews}>
            <Image
              source={require('../assets/news/sepak-bola.jpg')}
              style={styles.imgNews}
            />
          </View>
          <View style={{ paddingTop: 16 }}>
            <Text style={{ fontSize: 16, fontWeight: 'bold' }}>GO-NEWS</Text>
            <Text style={{ color: 'grey' }}>
              Dimas Drajat menyelamatkan timnas U-23{' '}
            </Text>
          </View>
        </View>
        <View
          style={{ marginHorizontal: 18, paddingTop: 10, paddingBottom: 50 }}>
          <View style={styles.boxImgNews}>
            <Image
              source={require('../assets/news/sepak-bola.jpg')}
              style={styles.imgNews}
            />
          </View>
          <View style={{ paddingTop: 16 }}>
            <Text style={{ fontSize: 16, fontWeight: 'bold' }}>GO-NEWS</Text>
            <Text style={{ color: 'grey' }}>
              Dimas Drajat menyelamatkan timnas U-23{' '}
            </Text>
          </View>
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  boxImgNews: {
    height: 170,
    flex: 1,
    paddingBottom: 40,
  },
  imgNews: {
    height: 170,
    width: '100%',
    borderRadius: 10,
  },
});
