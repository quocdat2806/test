import {TextInput, TextStyle, View, ViewStyle} from 'react-native';
import React from 'react';

type TProps = {
  leftComponent?: React.JSX.Element;
  rightComponent?: React.JSX.Element;
  inputWrapper?: ViewStyle;
  inputStyle?: TextStyle;
  placeHolder: string;
};
const AppTextInput = (value: TProps) => {
  return (
    <View style={{flexDirection: 'row', marginTop: 12, alignItems: 'center'}}>
      {value.leftComponent}
      <View style={value.inputWrapper}>
        <TextInput style={value.inputStyle} placeholder={value.placeHolder} />
      </View>
      {value.rightComponent}
    </View>
  );
};

export default AppTextInput;
