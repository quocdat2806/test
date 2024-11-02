import React, {forwardRef} from 'react';
import {Animated, FlatListProps, View} from 'react-native';
import {useFlatList} from '../../hooks/useFlatList';

type CustomFlatListProps<T> = Omit<FlatListProps<T>, 'ListHeaderComponent'> & {
  HeaderComponent: JSX.Element;
  StickyElementComponent: JSX.Element;
  TopListElementComponent: JSX.Element;
};

const CustomFlatList = forwardRef<
  Animated.FlatList<any>,
  CustomFlatListProps<any>
>(({style, ...props}, ref) => {
  const [
    scrollY,
    styles,
    onLayoutHeaderElement,
    onLayoutTopListElement,
    onLayoutStickyElement,
  ] = useFlatList();

  return (
    <View style={style}>
      <Animated.View
        style={styles.stickyElement}
        onLayout={onLayoutStickyElement}>
        {props.StickyElementComponent}
      </Animated.View>

      <Animated.View
        style={styles.topElement}
        onLayout={onLayoutTopListElement}>
        {props.TopListElementComponent}
      </Animated.View>

      <Animated.FlatList<any>
        ref={ref} // truyền ref cho FlatList
        {...props}
        ListHeaderComponent={
          <Animated.View onLayout={onLayoutHeaderElement}>
            {props.HeaderComponent}
          </Animated.View>
        }
        ListHeaderComponentStyle={[
          props.ListHeaderComponentStyle,
          styles.header,
        ]}
        onScroll={Animated.event(
          [{nativeEvent: {contentOffset: {y: scrollY}}}],
          {
            useNativeDriver: true,
          },
        )}
      />
    </View>
  );
});

export default CustomFlatList;
