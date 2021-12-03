import {StyleSheet, Dimensions} from 'react-native';

const dimensions = Dimensions.get('window');

export default StyleSheet.create({
  container: {
    padding: 15,
    width: dimensions.width,
    height: dimensions.height / 3,
    marginBottom: 5,
  },
  image: {
    width: '100%',
    height: '80%',
  },
  title: {
    fontWeight: 'bold',
    fontSize: 20,
    padding: 5,
    textAlign: 'center',
    backgroundColor: '#f39c12',
    borderBottomLeftRadius: 10,
    borderBottomRightRadius: 10,
    color: 'white',
  },
});
