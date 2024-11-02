import React from 'react';
import {View} from 'react-native';
import {ChatIcon, HeartIcon} from '../../assets/icons';
import AppText from '../Text';
import style from './style';
type JustifyContentOptions =
  | 'flex-start'
  | 'center'
  | 'flex-end'
  | 'space-between'
  | 'space-around'
  | 'space-evenly';

interface PostItemActionsProps {
  justifyContentStyle?: JustifyContentOptions;
  distanceMarginItem?: number;
}

const PostItemActions: React.FC<PostItemActionsProps> = ({
  justifyContentStyle = 'space-between',
  distanceMarginItem = 0,
}) => {
  return (
    <View
      style={[
        {justifyContent: justifyContentStyle},
        style.postItemActionWrapper,
      ]}>
      <View
        style={[style.actionWrapper, {marginHorizontal: distanceMarginItem}]}>
        <HeartIcon />
        <AppText text="11k" style={style.textAction} />
      </View>

      <View
        style={[style.actionWrapper, {marginHorizontal: distanceMarginItem}]}>
        <ChatIcon />
        <AppText text="55k" style={style.textAction} />
      </View>
    </View>
  );
};

export default PostItemActions;
