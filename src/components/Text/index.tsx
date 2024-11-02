import React, {useMemo} from 'react';
import {StyleProp, Text, TextStyle} from 'react-native';

type TProps = {
  style?: StyleProp<TextStyle>;
  text?: string;
  fontFamily?:
    | 'Black'
    | 'Bold'
    | 'ExtraBold'
    | 'ExtraLight'
    | 'Light'
    | 'Medium'
    | 'Regular'
    | 'SemiBold'
    | 'Thin';
  size?: number;
};

const AppText = (value: TProps) => {
  const {fontFamily, size = 12, style = {}, text = ''} = value;

  const calculatorFontFamily = useMemo(() => {
    let defaultFontFamily = 'NotoSans-Regular';

    switch (fontFamily) {
      case 'Black':
        defaultFontFamily = 'NotoSans-Black';
        break;
      case 'Bold':
        defaultFontFamily = 'NotoSans-Bold';
        break;
      case 'ExtraLight':
        defaultFontFamily = 'NotoSans-ExtraLight';
        break;
      case 'ExtraBold':
        defaultFontFamily = 'NotoSans-ExtraBold';
        break;
      case 'ExtraLight':
        defaultFontFamily = 'NotoSans-Light';
        break;
      case 'Medium':
        defaultFontFamily = 'NotoSans-Medium';
        break;
      case 'Regular':
        defaultFontFamily = 'NotoSans-Regular';
        break;
      case 'SemiBold':
        defaultFontFamily = 'NotoSans-SemiBold';
        break;
      case 'Thin':
        defaultFontFamily = 'NotoSans-Thin';
        break;
      default:
        defaultFontFamily = 'NotoSans-Regular';
    }
    return defaultFontFamily;
  }, []);

  return (
    <Text style={[{fontFamily: calculatorFontFamily, fontSize: size}, style]}>
      {text}
    </Text>
  );
};
export default AppText;
