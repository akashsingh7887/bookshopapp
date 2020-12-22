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
import AntDesign from 'react-native-vector-icons/AntDesign';
import _ListComponent from '../../Components/ListComponent/_ListComponent';
import styles from './styles';
import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';
import {addBook, removeBook} from '../../libs/redux/actions/actions';
import Toast from 'react-native-simple-toast';

const _BookList = props => {
  var updated_list = [...props.list];
  const renderList = ({item, index}) => {
    return (
      <_ListComponent
        rightIcon={'plus'}
        {...item}
        rightIconPress={() => {
          var updated_li = [...updated_list];
          if (updated_li.length == 0) {
            updated_list.push({...item, count: 1});
            props.addBook(updated_list);
          } else {
            let repeated_element = 0;
            updated_li.map((element, ind) => {
              if (element.id == item.id) {
                let list_to_update = [...updated_list];
                list_to_update[ind].count = element.count + 1;
                updated_list = [...list_to_update];
                // Toast.show('Book quantity updated.');
              } else {
                repeated_element = repeated_element + 1;
              }
            });
            if (repeated_element == updated_li.length) {
              updated_list.push({...item, count: 1});
              // Toast.show('Book quantity updated.');
            }
            props.addBook(updated_list);
          }
          Toast.show('Book added to your cart successfully.');
        }}
      />
    );
  };
  return (
    <SafeAreaView style={styles.main_view}>

      <FlatList
        style={styles.flatlist_style}
        data={books}
        renderItem={renderList}
        style={styles.flatlist_style}
        />
    </SafeAreaView>
  );
};
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
)(_BookList);
