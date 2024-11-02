import React from 'react';
import {FlatList, Pressable, View, ViewStyle} from 'react-native';
import {SafeAreaProvider, SafeAreaView} from 'react-native-safe-area-context';
import appGlobalStyle from '../../style';
import {useNavigation} from '@react-navigation/native';
import {TCategory, TCharacter} from '../../types';

import {MockDataCategories} from '../../mock';

import useHomeScreen from './useHome';

import InfoUser from '../../components/InforUser';
import PostContent from '../../components/PostContent';

import HomeAppBar from './components/appbar';
import HomeBanner from './components/banner';
import HomeInfoGroup from './components/infoGroup';
import HomeActions from './components/actions';
import AppFlatList from '../../components/FlatList';
import AppColors from '../../constants/colors';
import AppText from '../../components/Text';

import Routes from '../../routers';
import {NativeStackNavigationProp} from '@react-navigation/native-stack';
import {RootStackParamList} from '../../routers/type';
import {lorem} from '../../tools';
import PostItemActions from '../../components/PostItemAction';
import AppTextInput from '../../components/TextInput';
import {AVatar, ImageIcon02, SmileEllipseIcon} from '../../assets/icons';
import style from './style';

type HomeScreenNavigationProp = NativeStackNavigationProp<
  RootStackParamList,
  'Home'
>;

const loremText = lorem.generateWords(20);

const customSectionItemStyle = (isActiveSection: boolean): ViewStyle => {
  return {
    backgroundColor: isActiveSection ? AppColors.blue : AppColors.gray2,
    borderWidth: isActiveSection ? 0 : 1,
    borderColor: isActiveSection ? AppColors.black2 : AppColors.gray2,
  };
};
const Home = () => {
  const navigation = useNavigation<HomeScreenNavigationProp>();
  const {currentIndexSection, response, handleTabSectionItem} = useHomeScreen();
  const RenderSectionItem = ({item}: {item: TCategory}) => {
    const isActiveSection = item.id === currentIndexSection;
    const styleForSectionItem = customSectionItemStyle(isActiveSection);
    return (
      <Pressable onPress={() => handleTabSectionItem(item.id)}>
        <View style={[styleForSectionItem, style.sectionView]}>
          <AppText
            size={10}
            fontFamily="Medium"
            style={{
              color: isActiveSection ? AppColors.white : AppColors.black1,
            }}
            text={item.title}
          />
        </View>
      </Pressable>
    );
  };

  const RenderPostItem = ({item}: {item: TCharacter}) => {
    const rightComponentOfInput = (
      <View style={appGlobalStyle.flexRow}>
        <View style={style.rightComponentOfInputWrapper}>
          <SmileEllipseIcon />
        </View>
        <View style={style.rightComponentOfInputWrapper}>
          <ImageIcon02 />
        </View>
      </View>
    );

    return (
      <Pressable
        onPress={() => {
          navigation.navigate(Routes.POSTDETAIL, {
            data: item,
          });
        }}>
        <View style={style.postItemWrapper}>
          <InfoUser
            time={item.created}
            name={item.name}
            specials={item.species}
            url={item.image}
          />
          <PostContent url={item.image} text={loremText} />
          <PostItemActions />
          <AppTextInput
            inputWrapper={style.inputCommentWrapper}
            inputStyle={style.inputCommentStyle}
            placeHolder="Nhập bình luận"
            leftComponent={<AVatar width={40} height={40} />}
            rightComponent={rightComponentOfInput}
          />
        </View>
      </Pressable>
    );
  };
  const keyExtractorFlatList = (item: TCharacter) => item.id.toString();
  const keyExtractorCategory = (item: TCategory) => item.id.toString();

  return (
    <SafeAreaProvider>
      <SafeAreaView style={appGlobalStyle.flex1}>
        <HomeAppBar />
        <AppFlatList
          windowSize={5}
          maxToRenderPerBatch={5}
          initialNumToRender={10}
          keyExtractor={keyExtractorFlatList}
          removeClippedSubviews={true}
          data={response?.results ?? []}
          style={style.flatList}
          renderItem={RenderPostItem}
          HeaderComponent={
            <>
              <HomeBanner />
              <HomeInfoGroup />
              <HomeActions />
            </>
          }
          StickyElementComponent={
            <View style={style.stickyElement}>
              <FlatList
                showsHorizontalScrollIndicator={false}
                horizontal
                data={MockDataCategories}
                renderItem={RenderSectionItem}
                keyExtractor={keyExtractorCategory}
              />
            </View>
          }
          TopListElementComponent={
            <View style={style.topFlatListStickyElement} />
          }
        />
      </SafeAreaView>
    </SafeAreaProvider>
  );
};
export default Home;
