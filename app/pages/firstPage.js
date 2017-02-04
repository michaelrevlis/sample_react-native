import React, { Component, } from 'react'
import { StyleSheet, View, } from 'react-native'
import Button from '../components/button';  //select file depends on platform
import Hello from '../components/Hello';

class FirstPage extends Component {

  static propTypes = {}

  static defaultProps = {}

  constructor(props) {
    super(props)
    this.state = {}
  }

  render() {
    return (
      <View style={styles.container}>
        <Hello></Hello>
        <Button text="Click ME"></Button>
      </View>
    )
  }
}

module.exports = FirstPage;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
});