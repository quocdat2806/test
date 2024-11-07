import React, {useRef} from 'react';
import {View} from 'react-native';

import Video, {VideoRef} from 'react-native-video';

import style from './style';
import AppImage from '../../../../components/Image';

const ItemAction = ({icon, text}: {icon: React.ReactNode; text: string}) => {
  return <View style={style.itemActionContainer}></View>;
};

export const VideoItem = () => {
  const videoRef = useRef<VideoRef>(null);
  return (
    <View style={style.videoItemContainer}>
      {/* // video */}
      <Video
        source={{}}
        ref={videoRef}
        onBuffer={() => {}}
        onError={() => {}}
        style={style.videoStyle}
      />

      {/* actions */}
      <View>
        <AppImage
          source={{
            uri: '',
          }}
        />
        <View style={style.actionsContainer}>
          <ItemAction text="alo" icon={<></>} />
          <ItemAction text="alo" icon={<></>} />
          <ItemAction text="alo" icon={<></>} />
        </View>
      </View>
    </View>
  );
};
