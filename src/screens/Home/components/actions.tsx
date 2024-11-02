import React from 'react';
import {View} from 'react-native';
import style from '../style';
import {MockDataIcons} from '../../../mock';
import AppText from '../../../components/Text';
import appGlobalStyle from '../../../style';
import {AVatar, ShellCheck, UserProfile01Icon} from '../../../assets/icons';
import AppTextInput from '../../../components/TextInput';

const renderIcons = () =>
  MockDataIcons.map(item => <item.icon key={item.id} />);

const HomeActions = () => {
  return (
    <View style={style.actionsWrapper}>
      <View style={appGlobalStyle.flexRow}>
        <View
          style={[appGlobalStyle.flex1, style.btnLeft, appGlobalStyle.flexRow]}>
          <ShellCheck />
          <AppText
            fontFamily="SemiBold"
            style={style.textBtnLeft}
            text="Quản lý"
          />
        </View>
        <View
          style={[
            appGlobalStyle.flex1,
            style.btnRight,
            appGlobalStyle.flexRow,
          ]}>
          <UserProfile01Icon />
          <AppText
            style={style.textBtnRight}
            fontFamily="SemiBold"
            text="Mời"
          />
        </View>
      </View>
      <View style={[appGlobalStyle.flexRow, style.inputCreatePostWrapper]}>
        <AppTextInput
          leftComponent={<AVatar width={44} height={44} />}
          inputStyle={style.textInputCreatePost}
          placeHolder="Hãy viết gì đó cho hôm nay"
        />
      </View>
      <View style={[appGlobalStyle.flexRow, style.iconsWrapper]}>
        {renderIcons()}
      </View>
    </View>
  );
};
export default HomeActions;
