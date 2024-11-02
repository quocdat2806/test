/* eslint-disable react/function-component-definition */
import React, {FC, ReactNode, useState} from 'react';
import FastImage, {FastImageProps} from 'react-native-fast-image';

type ImageProps = FastImageProps & {
  children?: ReactNode;
  type?: 'background' | 'gif';
  width?: number;
};

const AppImage: FC<ImageProps> = ({
  source,
  style,
  tintColor,
  children,
  type,
  width = 0,
  ...other
}) => {
  const [, setImageError] = useState({
    isError: false,
  });

  const sourceImage = source;

  if (type === 'background') {
    return (
      <FastImage
        onError={() => {
          setImageError(prev => ({...prev, isError: true}));
        }}
        source={source}
        style={style}
        tintColor={tintColor}
        {...other}>
        {children}
      </FastImage>
    );
  }

  return (
    <FastImage
      onError={() => {
        setImageError(prev => ({...prev, isError: true}));
      }}
      source={sourceImage}
      tintColor={tintColor}
      style={style}
      {...other}
    />
  );
};

export default AppImage;
