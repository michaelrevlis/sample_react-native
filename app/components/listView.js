import React, { Component } from 'react';
import { ListView, StyleSheet, Text, View } from 'react-native';

var REQUEST_URL = 'https://www.googleapis.com/books/v1/volumes?q=subject:fiction'

class theListView extends Component {
  constructor(props) {
    super(props);
    this.state = ({
      isLoading: false,
      dataSource: new ListView.DataSource({
        rowHasChanged:(row1, row2) => row1 !== row2
      }),
    });
  }
  
  componentDidMount(){
     this.fetchData();
  }
  
  fetchData() {
    fetch(REQUEST_URL)
    .then((response) => response.json())
    .then((responseData) => {
      this.setState({
        dataSource: this.state.dataSource.cloneWithRows(responseData.items),
        isLoading: false
      });
    })
    .done();
  }
  
  renderLoadingView() {
    return(
      <View style = {styles.loading}>
        <Text style = {styles.title}>Loading...</Text>
      </View>
    );
  }
  
  renderData(data){
    return(
      <View>
        <View style = {styles.container}>
          <View style = {styles.rightContainer}>
            <Text style = {styles.title}> Title: {data.volumeInfo.title} </Text>
            <Text style = {styles.title}> Authors: {data.volumeInfo.authors} </Text>
          </View>
        </View>
          <View style = {styles.separator} />
      </View>
    );
  }
  
  render() {
    if (this.state.isLoading) {
      return this.renderLoadingView();
    }
    return (
      <View Style = {styles.motherContainer}>
        <ListView
          dataSource = {this.state.dataSource}
          renderRow = {this.renderData.bind(this)}
          style = {styles.listView}
        />
      </View>
    );
  }
}


var styles = StyleSheet.create({
  container: {
    flex:1,
    flexDirection: 'column',
    justifyContent: 'flex-start',
    alignItems: 'flex-start',
    backgroundColor: '#F5FCFF',
    marginTop:20,
    padding: 10},
  motherContainer: {
    flex: 1,
    flexDirection: 'column',
    backgroundColor: 'lightgray',
    marginTop:30,
    padding: 10},
  rightContainer: {
    flex: 2},
  title: {
    fontSize:20,
    marginBottom:8},
  separator: {
    height:1,
    backgroundColor: '#dddddd'},
  listView: {
    backgroundColor: '#F5FCFF'},
  loading: {
    flex:1,
    alignItems: 'center',
    justifyContent: 'center'},
});

module.exports = theListView;