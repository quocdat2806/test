import {StyleSheet} from 'react-native';
import {WIN_WIDTH} from '../../constants/dimensions';

const style = StyleSheet.create({
  contentPostWrapper: {
    paddingHorizontal: 12,
  },
  imagePost: {
    width: '100%',
    marginTop: 12,
    height: WIN_WIDTH * 1.08,
    borderRadius: 12,
  },
});
export default style;
