import React from 'react'
import { Button, Text, View } from 'react-native'
import { connect } from 'react-redux'

class SimulateScreen extends React.Component {
  render () {
    return (
      <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
        <Text>SimulateScreen</Text>
      </View>
    )
  }
}

export default SimulateScreen