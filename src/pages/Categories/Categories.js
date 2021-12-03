import React from 'react';
import {View, FlatList} from 'react-native';
import styles from './Categories.style';

import Config from 'react-native-config';
import useFetch from '../../hooks/useFetch';

import CategoryCard from '../../components/CategoryCard';

import Loading from '../../components/Loading';
import Error from '../../components/Error';

const Categories = ({navigation}) => {
  const {data, loading, error} = useFetch(Config.API_URL);

  if (loading) {
    return <Loading />;
  }
  if (error) {
    return <Error />;
  }

  const handleCategorySelect = categoryName => {
    navigation.navigate('Detail', {categoryName});
  };

  const renderProduct = ({item}) => {
    return (
      <CategoryCard
        category={item}
        onSelect={() => handleCategorySelect(item.strCategory)}
      />
    );
  };

  return (
    <View style={styles.container}>
      <FlatList data={data.categories} renderItem={renderProduct} />
    </View>
  );
};

export default Categories;
