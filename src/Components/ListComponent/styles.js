import {StyleSheet} from 'react-native';
import {normalize} from '../../Components/NormalizeFun/NormalizeFun';
import * as color from '../../assets/colors';

const styles = StyleSheet.create({
  main_view: {flex: 1},
  flatlist_style: {paddingVertical: normalize(20)},
  outer_view: {
    height: normalize(200),
    borderRadius: normalize(20),
    backgroundColor: color.white,
    margin: normalize(20),
    //   paddingHorizontal: normalize(10),
    flexDirection: 'row',
    paddingVertical: normalize(20),
    paddingHorizontal: normalize(32),
  },
  image_style: {
    height: normalize(160),
    width: normalize(160),
    marginRight: normalize(20),
    borderRadius: normalize(20),
  },
  inner_view: {
    // backgroundColor: 'red',
    justifyContent: 'center',
  },
  name_text: {
    height: normalize(50),
    fontWeight: 'bold',
    fontSize: normalize(30),
  },
  end_view: {alignSelf: 'flex-end', flex: 1,},
  add_icon_view: {
    alignSelf: 'flex-end',
    borderRadius: normalize(10),
    backgroundColor: color.purple,
  },
  cart_count:{
    // backgroundColor: 'red',
    justifyContent:"center",
    textAlign: 'center',
    alignSelf:"flex-end",
    // height: normalize(40),
    fontSize:normalize(20),
    width:normalize(40),
    marginVertical:normalize(10)
  }
});

export default styles;
