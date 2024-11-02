import React, {useState} from 'react';
import {Pressable, View} from 'react-native';
import {ChatIcon, HeartIcon} from '../../assets/icons';
import AppText from '../Text';
import style from './style';
import AppColors from '../../constants/colors';

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
  const [like, setLike] = useState(false);

  const handleLike = () => {
    setLike(prevLike => !prevLike);
  };

  return (
    <View
      style={[
        {justifyContent: justifyContentStyle},
        style.postItemActionWrapper,
      ]}>
      <View
        style={[style.actionWrapper, {marginHorizontal: distanceMarginItem}]}>
        <Pressable onPress={handleLike}>
          <HeartIcon color={like ? AppColors.red : AppColors.black2} />
        </Pressable>
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
