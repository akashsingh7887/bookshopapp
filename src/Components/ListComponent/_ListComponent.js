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
import styles from './styles';

const _ListComponent = props => {
  return (
    <View style={styles.outer_view}>
      <Image source={{uri: props.imgUrl}} style={styles.image_style} />
      <View style={styles.inner_view}>
        <Text style={styles.name_text}>{props.name}</Text>
        <Text>{props.author}</Text>
      </View>
      <View style={styles.end_view}>
        {props.right_icon_top_value && (
          <Text style={styles.cart_count}>{props.right_icon_top_value}</Text>
        )}
        <View style={styles.add_icon_view}>
          <AntDesign
            name={props.rightIcon}
            size={normalize(40)}
            color={color.white}
            onPress={() => {
              props.rightIconPress();
            }}
          />
        </View>
      </View>
    </View>
  );
};
export default _ListComponent;
