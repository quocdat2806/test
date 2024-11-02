import {StyleSheet} from 'react-native';
import AppColors from '../../constants/colors';

const style = StyleSheet.create({
  wrapper: {
    backgroundColor: AppColors.white,
  },
  scrollView: {
    marginBottom: 100,
    marginTop: 12,
  },
  inputCommentWrapper: {
    paddingHorizontal: 12,
    position: 'relative',
    marginTop: 48,
  },
  inputWrapper: {
    borderRadius: 24,
    marginHorizontal: 4,
    flexDirection: 'row',
    backgroundColor: AppColors.gray1,
    borderWidth: 1,
    borderColor: AppColors.gray1,
    flex: 1,
  },
  inputCommentStyle: {
    marginLeft: 8,
    fontSize: 12,
  },
  rightComponentOfInputWrapper: {
    backgroundColor: AppColors.gray1,
    padding: 6,
    borderRadius: 12,
    marginHorizontal: 4,
  },
  replayInfoWrapper: {
    position: 'absolute',
    height: 36,
    backgroundColor: 'black',
    top: -26,
    left: 0,
    flexDirection: 'row',
    paddingHorizontal: 12,
    alignItems: 'center',
    justifyContent: 'space-between',
    right: 0,
  },
  textReply: {
    color: AppColors.gray2,
  },
});
export default style;
