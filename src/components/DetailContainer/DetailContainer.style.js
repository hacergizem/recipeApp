import {StyleSheet, Dimensions} from 'react-native';

const dimensions = Dimensions.get('window');

export default StyleSheet.create({
  container: {
    backgroundColor: 'white',
  },
  image: {
    width: dimensions.width,
    height: dimensions.height / 2,
  },
  title: {
    fontSize: 18,
    textAlign: 'center',
    color: '#fff',
    padding: 10,
    backgroundColor: '#a93226',
  },

  body_container: {
    padding: 20,
  },
  recipeDesc: {
    textAlign: 'justify',
    color: '#641e16',
    borderTopLeftRadius: 10,
  },
  youtube_button: {
    backgroundColor: '#a93226',
    marginTop: 10,
    padding: 10,
    borderRadius: 20,
  },
  youtube_text: {
    fontWeight: 'bold',
    fontSize: 18,
    color: 'white',
    textAlign: 'center',
  },
});
