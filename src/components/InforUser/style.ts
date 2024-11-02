import {StyleSheet} from 'react-native';
import AppColors from '../../constants/colors';
const style = StyleSheet.create({
  infoUseWrapper: {
    flexDirection: 'row',
    margin: 12,
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  avatar: {
    borderRadius: 40,
  },
  subInfoWrapper: {
    flexDirection: 'column',
    paddingLeft: 6,
    justifyContent: 'flex-start',
    flex: 1,
  },
  textSubInfo: {flexDirection: 'row', alignItems: 'center'},
  textGray: {
    color: AppColors.gray4,
  },
});

export default style;
