import React from 'react'
import {
  Image,
  StyleSheet,
  Text,
  TextInput,
  TouchableOpacity,
  View,
  SegmentedControlIOS
} from 'react-native'
import { connect } from 'react-redux'
// import { loginAction } from './loginActions'

/**
 * 首页
 */

const mapStateToProps = state => {
  return state.Home
}

const mapDispatchToProps = dispatch => {
  return {
    onIncreaseClick: () => dispatch()
  }
}

class RegisterScreen extends React.Component {
  render () {
    return (
      <View style={styles.registerPage}>
        {/* header */}
        <View style={styles.headerStyle}>
          <Image
            style={styles.logo}
            source={require('../../images/Logo/loginLogo.png')}
          />
        </View>
        {/* body */}
        <View style={styles.bodyStyle}>
          <View style={styles.inputer}>
            <TextInput
              style={styles.input}
              placeholderTextColor={'black'}
              placeholder='邮箱'
              keyboardType={'email-address'}
              autoCapitalize={'none'}
            />
          </View>
          <View style={styles.inputer}>
            <TextInput
              style={styles.input}
              placeholderTextColor={'black'}
              placeholder='用户名'
              autoCapitalize={'none'}
              maxLength={16}
            />
          </View>
          <View style={styles.inputer}>
            <TextInput
              style={styles.input}
              placeholderTextColor={'black'}
              placeholder='密码'
              keyboardType={'email-address'}
              secureTextEntry
              autoCapitalize={'none'}
              maxLength={20}
            />
          </View>
          <View style={styles.inputer}>
            <TextInput
              style={styles.input}
              placeholderTextColor={'black'}
              placeholder='确认密码'
              secureTextEntry
              autoCapitalize={'none'}
              maxLength={20}
            />
          </View>
          <View style={styles.selectType}>
            <View style={styles.selectItem}>
              <View style={styles.selectActiveText} />
              <Text style={styles.type}>金融新手</Text>
            </View>
            <View style={styles.selecItem}>
              <View style={styles.selectText} />
              <Text style={styles.type}>略有了解</Text>
            </View>
            <View style={styles.selectItem}>
              <View style={styles.selectText} />
              <Text style={styles.type}>从业人员</Text>
              {/* <SegmentedControlIOS
                values={['金融新手', '略有了解','从业人员']}
                selectedIndex={this.state.selectedIndex}
                onChange={event => {
                  this.setState({
                    selectedIndex: event.nativeEvent.selectedSegmentIndex
                  })
                }}
              /> */}
            </View>
          </View>

          <TouchableOpacity
            style={styles.registerButton}
            // onPress={() => navigate('HomeScreen')}
            underlayColor='#fff'
          >
            <Text style={styles.registerButtonText}>创建账号</Text>
          </TouchableOpacity>
        </View>
        {/* footer */}
        <View style={styles.footerStyle}>
          <View style={styles.footerFix}>
            <Text style={styles.remindText}>已经拥有账户？</Text>
            {/* <Button color='black' title='登录.' /> */}
            <TouchableOpacity
              // style={styles.registerButton}
              // onPress={() => navigate('HomeScreen')}
              underlayColor='#fff'
            >
              <Text style={{ fontSize: 14 }}>登录.</Text>
            </TouchableOpacity>
          </View>
        </View>
      </View>
    )
  }
}

const styles = StyleSheet.create({
  registerPage: {
    flex: 1,
    flexDirection: 'column',
    backgroundColor: 'white',
    padding: 0
  },
  headerStyle: {
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: 'black',
    height: 222
  },
  bodyStyle: {
    marginTop: 62,
    alignItems: 'center'
  },
  registerButton: {
    fontSize: 14,
    borderRadius: 21,
    backgroundColor: 'black',
    alignContent: 'center',
    justifyContent: 'center',
    height: 45,
    width: 220,
    marginTop: 35.5
  },
  inputer: {
    height: 31,
    width: 244,
    marginTop: 18.5,
    alignItems: 'center',
    borderBottomWidth: 0.5,
    borderColor: '#BDBDBD'
  },
  input: {
    width: 230,
    height: 21,
    fontSize: 15,
    textAlign: 'center'
  },
  registerButtonText: {
    fontSize: 17,
    textAlign: 'center',
    color: 'white'
  },
  footerStyle: {
    flex: 1,
    position: 'absolute',
    alignItems: 'center',
    justifyContent: 'center',
    bottom: 0,
    left: 0,
    right: 0,
    backgroundColor: '#ECEFF1',
    height: 44
  },
  footerFix: {
    flexDirection: 'row'
  },
  remindText: {
    color: '#777777'
  },
  selectType: {
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    height: 50,
    marginTop: 5
    // borderTopWidth: 3
  },
  selecItem: {
    // paddingBottom: 3
  },
  selectActiveText: {
    borderColor: 'blue',
    paddingRight: 7,
    borderTopWidth: 5,
    borderRadius: 5,
    marginRight: 5
  },
  selectText: {
    borderTopWidth: 5,
    borderColor: '#BDBDBD',
    paddingRight: 7,
    borderRadius: 5,
    marginRight: 5
  },
  type: {
    fontSize: 15,
    color: 'gray',
    padding: 8,
    marginTop: 3
  }
})

export default connect(mapStateToProps, mapDispatchToProps)(RegisterScreen)
