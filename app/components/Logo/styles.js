import { Dimensions } from 'react-native';
import EStyleSheet from 'react-native-extended-stylesheet';

const imageWidth = Dimensions.get('window').width / 2;

export default EStyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '$primaryBlue',
  },
  containerImage: {
    alignItems: 'center',
    justifyContent: 'center',
    width: imageWidth,
    height: imageWidth,
  },
  logo: {
    width: imageWidth / 2,
  },
  text: {
    color: '#ffffff',
    fontSize: 28,
    letterSpacing: -0.5,
    marginTop: 15,
    fontWeight: '600',
  },
});
