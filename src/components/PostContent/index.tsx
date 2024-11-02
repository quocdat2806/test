import React from 'react';
import {View} from 'react-native';
import AppText from '../Text';
import FastImage from 'react-native-fast-image';
import style from './style';

type TProps = {
  url?: string;
  text?: string;
};

const PostContent = (value: TProps) => {
  const {url, text} = value;
  return (
    <View style={style.contentPostWrapper}>
      <AppText size={14} text={text} />
      <FastImage
        resizeMode={FastImage.resizeMode.cover}
        style={style.imagePost}
        source={{uri: url, cache: 'immutable'}}
      />
    </View>
  );
};

export default PostContent;
