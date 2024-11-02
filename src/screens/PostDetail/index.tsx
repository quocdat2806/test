import React from 'react';
import {ScrollView, View} from 'react-native';
import {SafeAreaProvider, SafeAreaView} from 'react-native-safe-area-context';
import InfoUser from '../../components/InforUser';
import {RootStackParamList} from '../../routers/type';
import {RouteProp, useRoute} from '@react-navigation/native';
import PostContent from '../../components/PostContent';
import {lorem} from '../../tools';
import PostDetailInfo from './components/postDetailInfo';
import {AVatar, ImageIcon02, SmileEllipseIcon, XIcon} from '../../assets/icons';
import AppTextInput from '../../components/TextInput';
import AppText from '../../components/Text';
import style from './style';
import appGlobalStyle from '../../style';
type PostDetailRouteProp = RouteProp<RootStackParamList, 'PostDetail'>;

const PostDetail = () => {
  const route = useRoute<PostDetailRouteProp>();
  const {data} = route.params;

  return (
    <SafeAreaProvider>
      <SafeAreaView>
        <View style={style.wrapper}>
          <InfoUser
            hasIconBack
            name={data.name}
            time={data.created}
            specials={data.species}
            url={data.image}
          />
        </View>
        <ScrollView style={style.scrollView}>
          <PostContent text={lorem.generateWords(29)} url={data.image} />
          <PostDetailInfo />
          <View style={style.inputCommentWrapper}>
            <AppTextInput
              inputWrapper={style.inputWrapper}
              inputStyle={style.inputCommentStyle}
              placeHolder="Nhập bình luận"
              leftComponent={<AVatar width={40} height={40} />}
              rightComponent={
                <View style={appGlobalStyle.flexRow}>
                  <View style={style.rightComponentOfInputWrapper}>
                    <SmileEllipseIcon />
                  </View>
                  <View style={style.rightComponentOfInputWrapper}>
                    <ImageIcon02 />
                  </View>
                </View>
              }
            />
            <View style={style.replayInfoWrapper}>
              <AppText
                size={10}
                text="Đang trả lời Nguyễn Công Minh...."
                style={style.textReply}
              />
              <XIcon />
            </View>
          </View>
        </ScrollView>
      </SafeAreaView>
    </SafeAreaProvider>
  );
};
export default PostDetail;
