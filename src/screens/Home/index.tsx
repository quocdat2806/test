import React from 'react';
import {SafeAreaProvider, SafeAreaView} from 'react-native-safe-area-context';
import appGlobalStyle from '../../style';
import {useNavigation} from '@react-navigation/native';

import {NativeStackNavigationProp} from '@react-navigation/native-stack';
import {RootStackParamList} from '../../routers/type';
import {useWindowDimensions} from 'react-native';
import {TabView, SceneMap} from 'react-native-tab-view';
import {Friend} from './tabs/Friend';
import {ForYouScreen} from './tabs/ForYou';

type HomeScreenNavigationProp = NativeStackNavigationProp<
  RootStackParamList,
  'Home'
>;

const renderScene = SceneMap({
  first: Friend,
  second: ForYouScreen,
});

const routes = [
  {key: 'first', title: 'First'},
  {key: 'second', title: 'Second'},
];

const HomeScreen = () => {
  const navigation = useNavigation<HomeScreenNavigationProp>();
  const layout = useWindowDimensions();
  const [index, setIndex] = React.useState(0);
  return (
    <SafeAreaProvider>
      <SafeAreaView style={appGlobalStyle.flex1}>
        <TabView
          navigationState={{index, routes}}
          renderScene={renderScene}
          onIndexChange={setIndex}
          initialLayout={{width: layout.width}}
        />
      </SafeAreaView>
    </SafeAreaProvider>
  );
};
export default HomeScreen;
