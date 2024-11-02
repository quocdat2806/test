import {StyleSheet} from 'react-native';
import AppColors from '../../constants/colors';

const style = StyleSheet.create({
  postItemActionWrapper: {
    marginTop: 16,
    flexDirection: 'row',
  },
  actionWrapper: {
    flexDirection: 'row',
    paddingHorizontal: 8,
  },
  textAction: {
    color: AppColors.black1,
    marginLeft: 4,
  },
});
export default style;
