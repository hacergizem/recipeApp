import React from 'react';
import {Text, Image, View, TouchableWithoutFeedback} from 'react-native';

import styles from './DetailCard.style';

const DetailCard = ({detail, onSelect}) => {
  return (
    <TouchableWithoutFeedback onPress={onSelect}>
      <View style={styles.container}>
        <Image style={styles.image} source={{uri: detail.strMealThumb}} />
        <Text style={styles.title}>{detail.strMeal}</Text>
      </View>
    </TouchableWithoutFeedback>
  );
};

export default DetailCard;
