import React from 'react';
import {
  View,
  Text,
  TouchableOpacity,
  FlatList,
  Image,
  SafeAreaView,
} from 'react-native';
import {books} from '../../assets/Data';
import {normalize} from '../../Components/NormalizeFun/NormalizeFun';
import * as color from '../../assets/colors';
import Entypo from 'react-native-vector-icons/Entypo';
import _ListComponent from '../../Components/ListComponent/_ListComponent';
import styles from './styles';
import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';
import {addBook, removeBook} from '../../libs/redux/actions/actions';
import Toast from 'react-native-simple-toast';

const _Cart = props => {
  var updated_list = [...props.list];
  const renderList = ({item, index}) => {
    return (
      <_ListComponent
        {...item}
        rightIcon={'minus'}
        right_icon_top_value={item.count}
        rightIconPress={() => {
          let list_to_update = [...updated_list];
          if (item.count > 1) {
            list_to_update[index].count = item.count - 1;
            updated_list = [...list_to_update];
          } else {
            list_to_update.splice(index, 1);
            updated_list = [...list_to_update];
            Toast.show('Book removed from your cart successfully.');
          }
          props.addBook(updated_list);
        }}
      />
    );
  };
  return (
    <SafeAreaView style={styles.main_view}>
      {updated_list.length > 0 ? (
        <SafeAreaView style={styles.main_view}>
          <View style={styles.cart_count_view}>
            <View style={styles.cart_count}>
              <Text style={styles.count_text}>{updated_list.length}</Text>
            </View>
            <Text style={styles.added_text}>Added</Text>
          </View>
          <FlatList
            style={styles.flatlist_style}
            data={updated_list}
            renderItem={renderList}
          />
        </SafeAreaView>
      ) : (
        <View style={styles.empty_cart_view}>
          <Text style={styles.empty_cart_text}>Your cart is Empty!</Text>
          <Entypo name="emoji-sad" size={normalize(150)} color={color.grey} />
        </View>
      )}
    </SafeAreaView>
  );
};

// export default _Cart;
const mapStateToProps = state => ({
  list: state.list,
});

const mapDispatchToProps = dispatch =>
  bindActionCreators(
    {
      addBook,
      removeBook,
    },
    dispatch,
  );
export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(_Cart);
