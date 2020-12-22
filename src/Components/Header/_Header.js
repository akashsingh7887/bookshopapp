import React from 'react';
import {View, Text, SafeAreaView, Button, TouchableOpacity} from 'react-native';
import {normalize} from '../NormalizeFun/NormalizeFun';
import Ionicons from 'react-native-vector-icons/Ionicons';
import * as color from '../../assets/colors';
import styles from './styles';
import {bindActionCreators} from 'redux';
import {addBook, removeBook} from '../../libs/redux/actions/actions';
import Toast from 'react-native-simple-toast';
import {connect} from 'react-redux';

const Header = props => {
  return (
    <View style={styles.outer_view}>
      <SafeAreaView style={styles.main_view}>
        {!props.backButtonDisabled && (
          <Ionicons
            name={'arrow-back-outline'}
            size={normalize(35)}
            color={color.purple}
            onPress={() => props.navigation.goBack()}
            style={styles.back_arrow}
          />
        )}

        <Text style={styles.header_text}>{props.headerTitle}</Text>
        {props.rightIcon && props.rightIcon != null ? (
          <View style={styles.cart_view}>
            <TouchableOpacity
            activeOpacity={1}
              onPress={() => {
                props.rightIconPress();
              }}
              style={styles.count_view}>
              <Text style={styles.cart_count_text}>{props.list.length}</Text>
            </TouchableOpacity>
            <Ionicons
              name={props.rightIcon}
              size={normalize(35)}
              color={color.purple}
              onPress={() => {
                props.rightIconPress();
              }}
              style={{marginTop: normalize(10)}}
            />
          </View>
        ) : (
          <View />
        )}
      </SafeAreaView>
    </View>
  );
};

// export default Header;
const mapStateToProps = state => ({
  list: state.list,
});

// const mapDispatchToProps = dispatch =>
//   bindActionCreators(
//     {
//       addBook,
//       removeBook,
//     },
//     dispatch,
//   );
export default connect(
  mapStateToProps,
  null,
)(Header);
