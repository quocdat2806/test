import React from 'react';
import {Pressable, View} from 'react-native';
import AppImage from '../Image';
import AppText from '../Text';
import {MoreIcon, PreviousIcon} from '../../assets/icons';
import style from './style';
import {useNavigation} from '@react-navigation/native';
import {formatDateYYYYMMDD} from '../../utils';

type TProps = {
  url?: string;
  name?: string;
  specials?: string;
  time?: string;
  hasIconBack?: boolean;
};

const InfoUser = (value: TProps) => {
  const {
    url = '',
    name = '',
    specials = '',
    time = '',
    hasIconBack = false,
  } = value;

  const navigation = useNavigation();

  const handleBack = () => {
    navigation.goBack();
  };
  return (
    <View style={style.infoUseWrapper}>
      {hasIconBack && (
        <Pressable onPress={handleBack}>
          <PreviousIcon />
        </Pressable>
      )}
      <AppImage width={40} style={style.avatar} source={{uri: url}} />
      <View style={style.subInfoWrapper}>
        <AppText text={name} size={14} fontFamily="Medium" />
        <View style={style.textSubInfo}>
          <AppText style={style.textGray} text={specials} />
          <AppText size={14} text="•" style={{paddingHorizontal: 4}} />
          <AppText style={style.textGray} text={formatDateYYYYMMDD(time)} />
        </View>
      </View>
      <MoreIcon />
    </View>
  );
};

export default InfoUser;
