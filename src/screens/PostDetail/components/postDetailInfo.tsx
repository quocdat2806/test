import React from 'react';
import {View} from 'react-native';
import AppText from '../../../components/Text';
import PostItemActions from '../../../components/PostItemAction';

const PostDetailInfo = () => {
  return (
    <View style={{paddingHorizontal: 12}}>
      <AppText style={{paddingVertical: 12}} text="55k lượt xem" />
      <AppText text="11k thích • 6 bình luận • 2 chia sẻ" />
      <PostItemActions
        distanceMarginItem={8}
        justifyContentStyle="flex-start"
      />
    </View>
  );
};

export default PostDetailInfo;
