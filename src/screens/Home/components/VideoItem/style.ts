import {Platform, StyleSheet} from 'react-native';
import FontScale from '../../../../constants/dimensions';

const style = StyleSheet.create({
  videoItemContainer: {
    position: 'relative',
  },
  actionsContainer: {
    flexDirection: 'column',
    position: 'absolute',
    right: FontScale.scale(28),
    bottom: FontScale.scale(56),
  },
  videoStyle: {
    position: 'absolute',
    top: 0,
    left: 0,
    bottom: 0,
    right: 0,
  },
  itemActionContainer: {},
});

export default style;
