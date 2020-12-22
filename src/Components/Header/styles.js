import {StyleSheet} from 'react-native';
import {normalize} from '../../Components/NormalizeFun/NormalizeFun';
import * as color from '../../assets/colors';

const styles = StyleSheet.create({
  outer_view: {backgroundColor: color.white},
  back_arrow:{width:normalize(50)},
  main_view: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginHorizontal: normalize(20),
    // marginVertical: normalize(30),
    marginTop: normalize(30),
    marginBottom: normalize(15),
  },
  header_text: {
    height: normalize(50),
    fontWeight: 'bold',
    fontSize: normalize(30),
    // marginTop:normalize(10),
  },
  count_view: {
    backgroundColor: color.yellow,
    width: normalize(40),
    height: normalize(40),
    fontSize: normalize(20),
    borderRadius: normalize(20),
    justifyContent: 'center',
    marginRight: normalize(5),
  },
  cart_count_text:{
    fontSize:normalize(20),
    textAlign:"center",
    color:color.white,
    fontWeight:"700"
  },
  cart_view:{flexDirection: 'row'}
});

export default styles;
