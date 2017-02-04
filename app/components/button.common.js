import {Alert} from 'react-native';

export default {
  getInitialState() {
    return {
      pressed: false
    }
  },

  handlePress() {
    Alert.alert(
      'Alert Title',
      'You Pressed The Button!',
      [
        {text: 'Cancel', onPress: () => console.log('Cancel Pressed'), style: 'cancel'},
        {text: 'OK', onPress: () => console.log('OK Pressed')},
      ],
      { cancelable: false }
    )
  }
}

