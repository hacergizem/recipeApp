import {StyleSheet, Dimensions} from 'react-native';

const dimension = Dimensions.get('window');

export default StyleSheet.create({
  body_container: {
    width: dimension.width - 30,
    height: dimension.height / 5,
    margin: 15,
    backgroundColor: '#fad7a0',
    flexDirection: 'row',
    justifyContent: 'space-around',
    alignItems: 'center',
    borderRadius: 100,
    borderWidth: 2,
    borderRightWidth: 0,
    borderColor: '#f39c12',
  },
  image: {
    width: 100,
    height: 100,
    resizeMode: 'contain',
    flex: 1,
  },
  categoryName: {
    fontWeight: 'bold',
    fontSize: 24,
    backgroundColor: '#f5b041',
    color: 'white',
    borderRadius: 15,
    marginRight: 1,
    borderTopRightRadius: 5,
    borderBottomRightRadius: 5,
    textAlign: 'center',
    flex: 1,
    borderWidth: 2,
    borderRightWidth: 0,
    borderColor: '#f39c12',
  },
});
