import React, { Component, } from 'react'
import ListView from '../components/listView';

class SecondPage extends Component {

  static propTypes = {}

  static defaultProps = {}

  constructor(props) {
    super(props)
    this.state = {}
  }

  render() {
    return (
      <ListView></ListView>
    )
  }
}

module.exports = SecondPage;
