import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';

import Categories from './pages/Categories/Categories';
import Detail from './pages/Detail/Detail';
import DetailMeal from './pages/DetailMeal';

const Stack = createNativeStackNavigator();

const Router = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen
          options={{
            title: 'Dishes Delicious',
            headerStyle: {
              backgroundColor: '#f39c12',
            },
            headerTintColor: '#fff',
            headerTitleAlign: 'center',
          }}
          name="Categories"
          component={Categories}
        />
        <Stack.Screen
          options={{
            title: 'Meals',
            headerStyle: {
              backgroundColor: '#f39c12',
            },
            headerTintColor: '#fff',
            headerTitleAlign: 'center',
          }}
          name="Detail"
          component={Detail}
        />
        <Stack.Screen
          options={{
            title: 'Meal Detail',
            headerStyle: {
              backgroundColor: '#f39c12',
            },
            headerTintColor: '#fff',
            headerTitleAlign: 'center',
          }}
          name="DetailMeal"
          component={DetailMeal}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default Router;
