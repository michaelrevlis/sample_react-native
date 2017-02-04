import React, { Component, } from 'react'
import {
  View,
  Text,
  TextInput,
} from 'react-native'

class Hello extends Component {

  static propTypes = {}

  static defaultProps = {}

  constructor(props) {
    super(props)
    this.state = {name: 'React Native'}
  }

  render() {
    return (
      <View>
        <Text
          style={{
            color: 'black',
            fontSize: 16,
            fontWeight: 'normal',
            fontFamily: 'Helvetica Neue',
          }}>
          Hello, {this.state.name}
        </Text>
        <TextInput
          style={{
            height: 30, 
            width:  200 ,
            borderWidth: 1,
            borderColor: "rgba(0,0,0,0.5)",
          }}
          placeholder={"Enter your name here."}
          placeholderTextColor={"rgba(198,198,204,1)"}
          ref="name"
          onChangeText={(name) => {this.setState({name})}}
          autoCorrect = {false}
        />
      </View>
    )
  }
  
  onChange(event){
    this.setState({
        name: event.nativeEvent.text
    });
  }
}

module.exports = Hello;