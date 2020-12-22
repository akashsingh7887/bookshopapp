import {StyleSheet} from 'react-native';
import {normalize} from '../../Components/NormalizeFun/NormalizeFun';
import * as color from '../../assets/colors';
const styles = StyleSheet.create({
  main_view: {flex: 1},
  cart_count_view: {
    flexDirection: 'row',
    alignItems: 'center',
    marginHorizontal: normalize(20),
    marginVertical: normalize(20),
  },
  cart_count: {
    borderRadius: normalize(20),
    height: normalize(60),
    width: normalize(60),
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: color.yellow,
  },
  count_text: {
    fontSize: normalize(25),
    color: color.white,
  },
  added_text: {
    height: normalize(50),
    fontWeight: 'bold',
    fontSize: normalize(30),
    marginHorizontal: normalize(20),
    marginTop: normalize(10),
  },
  flatlist_style: {
    // paddingVertical: normalize(0)
  },
  empty_cart_view: {
    alignItems: 'center',
    justifyContent: 'center',
    flex: 1,
  },
  empty_cart_text: {
    fontSize: normalize(40),
    fontWeight: 'bold',
    marginBottom: normalize(20),
    color: color.grey,
  },
});

export default styles;
