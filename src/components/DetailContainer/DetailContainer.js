import React from 'react';
import {View, Text, Image, Linking, TouchableOpacity} from 'react-native';

import styles from './DetailContainer.style';

const DetailContainer = ({recipe}) => {
  const redirectToYoutube = () => Linking.openURL(recipe.strYoutube);

  return (
    <View style={styles.container}>
      <Image style={styles.image} source={{uri: recipe.strMealThumb}} />
      <Text style={styles.title}>{recipe.strMeal}</Text>

      <View style={styles.body_container}>
        <Text style={styles.recipeDesc}>{recipe.strInstructions}</Text>
        <TouchableOpacity
          style={styles.youtube_button}
          onPress={redirectToYoutube}>
          <Text style={styles.youtube_text}>Watch on Youtube</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default DetailContainer;
