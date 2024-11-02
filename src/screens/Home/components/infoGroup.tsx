import React from 'react';
import {View} from 'react-native';
import style from '../style';
import AppText from '../../../components/Text';
import {LockIcon} from '../../../assets/icons';
const HomeInfoGroup = () => {
  return (
    <View style={style.infoGroupWrapper}>
      <AppText
        fontFamily="SemiBold"
        text="UI/UX Graphic Designers in VietNam"
        size={16}
      />
      <View style={style.statusAndNumberOfParticipantsWrapper}>
        <LockIcon />
        <AppText
          style={style.textStatusAndNumberOfParticipant}
          text="Nhóm riêng tư· 36,9k thành viên"
        />
      </View>
    </View>
  );
};
export default HomeInfoGroup;
