import React from 'react';
import {View, FlatList} from 'react-native';

import Config from 'react-native-config';
import DetailCard from '../../components/DetailCard/DetailCard';
import useFetch from '../../hooks/useFetch';

import Loading from '../../components/Loading';
import Error from '../../components/Error';

const Detail = ({route, navigation}) => {
  const {categoryName} = route.params;
  const {loading, error, data} = useFetch(
    `${Config.CATEGORY_DETAIL}${categoryName}`,
  );

  if (loading) {
    return <Loading />;
  }
  if (error) {
    return <Error />;
  }

  const handleSelectMeal = id => {
    navigation.navigate('DetailMeal', {id});
  };

  const renderDetails = ({item}) => {
    return (
      <DetailCard
        detail={item}
        onSelect={() => handleSelectMeal(item.idMeal)}
      />
    );
  };

  return (
    <View>
      <FlatList data={data.meals} renderItem={renderDetails} />
    </View>
  );
};

export default Detail;
