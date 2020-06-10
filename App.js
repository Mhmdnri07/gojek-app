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
import Constants from 'expo-constants';
import Promo from './components/Promo';
import Menu from './components/Menu';
import Blog from './components/Blog';

export default class App extends Component {
  render() {
    return (
      <View style={styles.container}>
        <ScrollView style={styles.contents}>
          <View style={{ position: 'relative', marginHorizontal: 12 }}>
            <TextInput
              placeholder="What do you want to eat?"
              style={styles.txtSearch}
            />
            <Image
              style={{
                width: 17,
                height: 17,
                position: 'absolute',
                top: 12,
                left: 17,
              }}
              source={require('./assets/img-search/search.png')}
            />
          </View>

          <Promo />
          <Menu />

          <View style={{ height: 17, backgroundColor: '#F2F2F4' }}></View>

          <Blog />
        </ScrollView>

        <View
          style={[
            styles.tabs,
            { borderTopColor: 'whitesmoke', borderTopWidth: 1 },
          ]}>
          <View style={[styles.tabContents, { backgroundColor: 'white' }]}>
            <Image
              style={styles.imgTab}
              source={require('./assets/gojek/home.png')}
            />
            <Text style={styles.txtTabs}>Home</Text>
          </View>
          <View style={[styles.tabContents, { backgroundColor: 'white' }]}>
            <Image
              style={styles.imgTab}
              source={require('./assets/gojek/order.png')}
            />
            <Text style={styles.txtTabs}>Orders</Text>
          </View>
          <View style={[styles.tabContents, { backgroundColor: 'white' }]}>
            <Image
              style={styles.imgTab}
              source={require('./assets/gojek/help.png')}
            />
            <Text style={styles.txtTabs}>Help</Text>
          </View>
          <View style={[styles.tabContents, { backgroundColor: 'white' }]}>
            <Image
              style={styles.imgTab}
              source={require('./assets/gojek/inbox.png')}
            />
            <Text style={styles.txtTabs}>Inbox</Text>
          </View>
          <View style={[styles.tabContents, { backgroundColor: 'white' }]}>
            <Image
              style={styles.imgTab}
              source={require('./assets/gojek/account.png')}
            />
            <Text style={styles.txtTabs}>Accounts</Text>
          </View>
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    marginTop: Platform.OS === 'ios' ? 0 : Constants.statusBarHeight,
    backgroundColor: 'white',
  },
  contents: {
    flex: 1,
    backgroundColor: 'white',

    paddingTop: 15,
  },
  tabs: {
    height: 54,
    backgroundColor: 'whitesmoke',
    flexDirection: 'row',
  },
  tabContents: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  imgTab: {
    width: 25,
    height: 25,
  },
  txtTabs: {
    fontSize: 10,
    color: '#545454',
    marginTop: 4,
  },
  txtSearch: {
    borderWidth: 1,
    borderRadius: 25,
    borderColor: '#E8E8E8',
    height: 40,
    fontSize: 12,
    paddingLeft: 45,
    paddingRight: 14,
    backgroundColor: 'white',
  },
});
