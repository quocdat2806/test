import {View} from 'react-native';
import style from '../style';
import appGlobalStyle from '../../../style';
import AppText from '../../../components/Text';
import {PreviousIcon, SearchIcon} from '../../../assets/icons';

const HomeAppBar = () => {
  return (
    <View style={style.appBarWrapper}>
      <PreviousIcon />
      <AppText
        size={14}
        fontFamily="SemiBold"
        text={'UI/UX Graphic \n Designers in VietNam'}
        style={[appGlobalStyle.flex1, style.titleAppBar]}
      />
      <SearchIcon />
    </View>
  );
};
export default HomeAppBar;
