import {Platform, Dimensions, PixelRatio} from 'react-native';

const {width: SCREEN_WIDTH} = Dimensions.get('window');

// base on iphone 11
const BASE_WIDTH = 375;

class FontScale {
  static scale(size: number) {
    const scale = SCREEN_WIDTH / BASE_WIDTH;
    let newSize = size * scale;
    if (Platform.OS === 'ios') {
      return Math.round(PixelRatio.roundToNearestPixel(newSize));
    } else {
      return Math.round(PixelRatio.roundToNearestPixel(newSize)) + 2;
    }
  }
  static winWidth = Dimensions.get('window').width;
  static winHeight = Dimensions.get('window').height;
}

export default FontScale;
