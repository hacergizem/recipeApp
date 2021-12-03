import React from 'react';
import {View, FlatList} from 'react-native';
import Config from 'react-native-config';
import useFetch from '../../hooks/useFetch';

import DetailContainer from '../../components/DetailContainer';
import styles from './DetailMeal.style';

import Loading from '../../components/Loading';
import Error from '../../components/Error';

const DetailMeal = ({route}) => {
  const {id} = route.params;
  const {loading, error, data} = useFetch(`${Config.MEAL_DETAIL}${id}`);

  if (loading) {
    return <Loading />;
  }
  if (error) {
    return <Error />;
  }

  const renderMeal = ({item}) => {
    return <DetailContainer recipe={item} />;
  };

  return (
    <View style={styles.container}>
      <FlatList data={data.meals} renderItem={renderMeal} />
    </View>
  );
};

export default DetailMeal;
