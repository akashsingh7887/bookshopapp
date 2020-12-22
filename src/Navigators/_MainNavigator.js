import React from 'react';
import {createStackNavigator} from '@react-navigation/stack';
import BookListScreen from '../Screens/BookList/_BookList';
import CartScreen from '../Screens/Cart/_Cart';
import {View, Text, SafeAreaView, Button} from 'react-native';
import Header from '../Components/Header/_Header';
const Stack = createStackNavigator();

const _AppStack = () => {
  return (
    <Stack.Navigator headerMode={'screen'}>
      <Stack.Screen
        options={{
          header: props => (
            <Header
              {...props}
              headerTitle={'Book Shop'}
              backButtonDisabled
              rightIcon={'cart'}
              rightIconPress={() => props.navigation.navigate('CartScreen')}
            />
          ),
        }}
        name="BookListScreen"
        component={BookListScreen}
      />
      <Stack.Screen
        options={{
          header: props => <Header {...props} headerTitle={'Cart'} />,
        }}
        name="CartScreen"
        component={CartScreen}
      />
    </Stack.Navigator>
  );
};
export default _AppStack;
