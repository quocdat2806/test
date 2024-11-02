import React, {View} from 'react-native';
import style from '../style';
import AppImage from '../../../components/Image';
import {CameraVideo01} from '../../../assets/icons';

const HomeBanner = () => {
  const url =
    'https://www.vietnamworks.com/hrinsider/wp-content/uploads/2023/12/hinh-thien-nhien-3d-002.jpg';
  return (
    <View style={style.bannerWrapper}>
      <AppImage
        type="background"
        style={style.imgBanner}
        source={{
          uri: url,
        }}
      />
      <View style={style.cameraWrapper}>
        <CameraVideo01 />
      </View>
    </View>
  );
};
export default HomeBanner;
