import React, { Component } from 'react';
import { View, Text, StyleSheet, Platform } from 'react-native';
import Tabs from 'react-native-tabs';
import FirstPage from './pages/firstPage';
import Tabbar_ios from './pages/tabbar';


export default class sample_RN extends Component {
  constructor(props) {
    super(props);
    this.state = {
      page: 'first'
    };
  }

  render() {
    const { page } = this.state;
    const background = styles[page];
    const tabbarStyles = [styles.tabbar];
    if (Platform.OS === 'android') tabbarStyles.push(styles.androidTabbar);  //diff platform in code instead of files
    
    return (
      <Tabbar_ios></Tabbar_ios>
//       <View style={[styles.container, background]}>
//         <Tabs
//           selected={page}
//           style={tabbarStyles}
//           selectedStyle={{color:'red'}} onSelect={el=>this.setState({page:el.props.name})}
//         >
//             <Text name="first">First</Text>
//             <Text name="second">Second</Text>
//             <Text name="third">Third</Text>
//         </Tabs>
        
//         <FirstPage></FirstPage>
        
//       </View>
    )
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center'
  },
  tabbar: {
    backgroundColor:'white',
    height: 64,
    borderTopColor: 'red',
    borderTopWidth: 2
  },
  androidTabbar: {
    top: 0,
    borderBottomColor: 'red',
    borderBottomWidth: 2,
    borderTopColor: 0
  }
});