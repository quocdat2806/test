import {StyleSheet} from 'react-native';
import {WIN_WIDTH} from '../../constants/dimensions';
import AppColors from '../../constants/colors';
const HEIGHT_STICKY_ELEMENT = 64;
const HEIGHT_ICON_WRAPPER = 52;

const style = StyleSheet.create({
  //sticky flatlist
  stickyElement: {
    height: HEIGHT_STICKY_ELEMENT,
    alignItems: 'center',
    flexDirection: 'row',
    backgroundColor: AppColors.white,
  },
  topFlatListStickyElement: {
    marginTop: HEIGHT_STICKY_ELEMENT,
  },

  flatList: {
    overflow: 'hidden',
  },

  //section

  sectionView: {
    padding: 8,
    margin: 6,
    borderRadius: 32,
  },

  //appBar
  appBarWrapper: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    paddingHorizontal: 16,
    paddingVertical: 12,
  },
  titleAppBar: {
    textAlign: 'center',
  },

  //banner
  bannerWrapper: {
    position: 'relative',
  },
  imgBanner: {
    width: WIN_WIDTH,
    height: WIN_WIDTH / 2.2,
  },
  cameraWrapper: {
    position: 'absolute',
    right: 20,
    bottom: 20,
    width: 32,
    height: 32,
    gap: 10,
    padding: 8,
    borderRadius: 100,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: AppColors.white,
  },

  //group

  infoGroupWrapper: {
    flexDirection: 'column',
    paddingHorizontal: 16,
    paddingVertical: 12,
  },
  // status and number of participants

  statusAndNumberOfParticipantsWrapper: {
    paddingTop: 12,
    flexDirection: 'row',
    alignItems: 'center',
  },
  textStatusAndNumberOfParticipant: {
    paddingLeft: 8,
  },

  //actions
  actionsWrapper: {
    flexDirection: 'column',
    paddingTop: 12,
  },

  iconProtected: {
    width: 12,
    height: 16,
  },
  btnLeft: {
    justifyContent: 'center',
    alignItems: 'center',
    marginHorizontal: 12,
    paddingVertical: 12,
    backgroundColor: AppColors.blue,
    borderRadius: 12,
  },
  textBtnLeft: {
    color: AppColors.white,
    paddingLeft: 8,
  },
  textBtnRight: {
    color: AppColors.black1,
    paddingLeft: 8,
  },
  btnRight: {
    justifyContent: 'center',
    alignItems: 'center',
    marginHorizontal: 12,
    paddingVertical: 12,
    backgroundColor: AppColors.gray1,
    borderRadius: 12,
    borderWidth: 1,
    borderColor: AppColors.gray,
  },

  //input
  inputCreatePostWrapper: {
    paddingHorizontal: 12,
    paddingTop: 16,
  },

  inputCommentWrapper: {
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

  textInputCreatePost: {
    paddingLeft: 8,
    fontSize: 14,
    color: AppColors.gray3,
    fontFamily: 'NotoSans-SemiBold',
  },

  //icons

  iconsWrapper: {
    paddingHorizontal: 12,
    justifyContent: 'space-between',
    alignItems: 'center',
    height: HEIGHT_ICON_WRAPPER,
  },

  rightComponentOfInputWrapper: {
    backgroundColor: AppColors.gray1,
    padding: 6,
    marginHorizontal: 2,
    borderRadius: 12,
  },
  postItemWrapper: {
    flexDirection: 'column',
    margin: 8,
  },
});

export default style;
