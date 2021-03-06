import React, { Component } from 'react'
import { View, Text } from 'react-native'
import { Provider } from 'react-redux'
import { createStore } from 'redux'
import firebase from 'firebase'
import reducers from './reducers'
import config from '../firebase'

class App extends Component {

  componentWillMount() {
    console.log(config)
    firebase.initializeApp(config)
  }

  render() {
    return (
      <Provider store={createStore(reducers)}>
        <View>
          <Text>
            Hi
          </Text>
        </View>
      </Provider>
    )
  }
}

export default App
