import React, {useMemo, useRef} from 'react';
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

const PostItem = ({
  item,
  onClick,
}: {
  item: TCharacter;
  onClick: (item: TCharacter) => void;
}) => {
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
    <View style={style.postItemWrapper}>
      <Pressable onPress={() => onClick(item)}>
        <InfoUser
          time={item.created}
          name={item.name}
          specials={item.species}
          url={item.image}
        />
        <PostContent url={item.image} text={loremText} />
      </Pressable>
      <PostItemActions />
      <AppTextInput
        inputWrapper={style.inputCommentWrapper}
        inputStyle={style.inputCommentStyle}
        placeHolder="Nhập bình luận"
        leftComponent={<AVatar width={40} height={40} />}
        rightComponent={rightComponentOfInput}
      />
    </View>
  );
};

const SectionItem = ({
  item,
  currentIndexSection,
  onClick,
}: {
  item: TCategory;
  currentIndexSection: number;
  onClick: (id: number) => void;
}) => {
  const isActiveSection = item.id === currentIndexSection;
  const styleForSectionItem = customSectionItemStyle(isActiveSection);

  return (
    <Pressable onPress={() => onClick(item.id)}>
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
const Home = () => {
  const navigation = useNavigation<HomeScreenNavigationProp>();
  const flatListRef = useRef(true);

  const {currentIndexSection, data, handleTabSectionItem, onEndReach} =
    useHomeScreen();

  const renderHeaderSticky = useMemo(() => {
    return (
      <>
        <HomeBanner />
        <HomeInfoGroup />
        <HomeActions />
      </>
    );
  }, []);
  const renderFlatList = useMemo(() => {
    return (
      <View style={style.stickyElement}>
        <FlatList
          showsHorizontalScrollIndicator={false}
          horizontal
          data={MockDataCategories}
          renderItem={({item}) => (
            <SectionItem
              currentIndexSection={currentIndexSection}
              item={item}
              onClick={handleTabSectionItem}
            />
          )}
          keyExtractor={keyExtractorCategory}
        />
      </View>
    );
  }, []);
  const keyExtractorFlatList = (item: TCharacter) => item.id.toString();
  const keyExtractorCategory = (item: TCategory) => item.id.toString();

  const onPostItemClick = (item: TCharacter) => {
    navigation.navigate(Routes.POSTDETAIL, {
      data: item,
    });
  };
  return (
    <SafeAreaProvider>
      <SafeAreaView style={appGlobalStyle.flex1}>
        <HomeAppBar />
        <AppFlatList
          ref={flatListRef}
          onEndReached={({distanceFromEnd}) => {
            if (!flatListRef.current) {
              onEndReach();
              flatListRef.current = true;
            }
          }}
          onMomentumScrollBegin={() => {
            flatListRef.current = false;
          }}
          windowSize={5}
          maxToRenderPerBatch={5}
          initialNumToRender={10}
          keyExtractor={keyExtractorFlatList}
          removeClippedSubviews={true}
          data={data}
          style={style.flatList}
          renderItem={({item}) => (
            <PostItem onClick={onPostItemClick} item={item} />
          )}
          HeaderComponent={renderHeaderSticky}
          StickyElementComponent={renderFlatList}
          TopListElementComponent={
            <View style={style.topFlatListStickyElement} />
          }
        />
      </SafeAreaView>
    </SafeAreaProvider>
  );
};
export default Home;
