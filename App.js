import {
  StyleSheet,
  Text,
  View,
  Pressable,
  StatusBar,
  ScrollView,
  SafeAreaView,
  Image,
  TextInput,
  Animated,
} from 'react-native';
import React, {useRef, useState} from 'react';
const AnimatedTextInput = Animated.createAnimatedComponent(TextInput);

const App = () => {
  const animatedValue = useRef(new Animated.Value(0)).current;

  const searchInputAnimation = {
    transform: [
      {
        scaleX: animatedValue.interpolate({
          inputRange: [0, 50],
          outputRange: [1, 0],
          extrapolate: 'clamp',
        }),
      },
      {
        translateX: animatedValue.interpolate({
          inputRange: [0, 25],
          outputRange: [0, -100],
          extrapolate: 'clamp',
        }),
      },
    ],
    opacity: animatedValue.interpolate({
      inputRange: [0, 35],
      outputRange: [1, 0],
      extrapolate: 'clamp',
    }),
  };
  const headerHeight = {
    height: animatedValue.interpolate({
      inputRange: [0, 115],
      outputRange: [115, 60],
      extrapolate: 'clamp',
    }),
  };

  const playButton = {
    transform: [
      {
        translateX: animatedValue.interpolate({
          inputRange: [0, 88],
          outputRange: [0, 55],
          extrapolate: 'clamp',
        }),
      },
      {
        translateY: animatedValue.interpolate({
          inputRange: [0, 100],
          outputRange: [0, -55],
          extrapolate: 'clamp',
        }),
      },
    ],
  };
  const play = {
    transform: [
      {
        translateX: animatedValue.interpolate({
          inputRange: [0, 88],
          outputRange: [0, 10],
          extrapolate: 'clamp',
        }),
      },
      {
        translateY: animatedValue.interpolate({
          inputRange: [0, 100],
          outputRange: [0, -55],
          extrapolate: 'clamp',
        }),
      },
    ],
  };
  const play3 = {
    transform: [
      {
        translateX: animatedValue.interpolate({
          inputRange: [0, 88],
          outputRange: [0, -42],
          extrapolate: 'clamp',
        }),
      },
      {
        translateY: animatedValue.interpolate({
          inputRange: [0, 100],
          outputRange: [0, -55],
          extrapolate: 'clamp',
        }),
      },
    ],
  };
  const play4 = {
    transform: [
      {
        translateX: animatedValue.interpolate({
          inputRange: [0, 88],
          outputRange: [0, -95],
          extrapolate: 'clamp',
        }),
      },
      {
        translateY: animatedValue.interpolate({
          inputRange: [0, 100],
          outputRange: [0, -55],
          extrapolate: 'clamp',
        }),
      },
    ],
  };
  return (
    <View style={{flex: 1, backgroundColor: '#fff'}}>
      <StatusBar barStyle={'light-content'} />

      <Animated.View
        style={[
          {
            height: 136,
            backgroundColor: '#CCCCCC',
            borderBottomRightRadius: 10,
            borderBottomLeftRadius: 10,
          },
          headerHeight,
        ]}>
        <View
          style={{
            flexDirection: 'row',
            justifyContent: 'flex-start',
            alignItems: 'center',
          }}>
          <Image
            source={require('./src/assets/search.png')}
            style={{height: 25, width: 25, margin: 15}}
          />
          <AnimatedTextInput
            placeholder="Search Here"
            style={[
              {height: 35, borderWidth: 1, width: '52%', borderRadius: 15},
              searchInputAnimation,
            ]}
          />
          <Image
            source={require('./src/assets/camera.png')}
            style={{height: 25, width: 25, margin: 15, marginLeft: 35}}
          />
          <Image
            source={require('./src/assets/menu.png')}
            style={{height: 25, width: 25}}
          />
        </View>

        <Animated.View
          style={[
            {
              flexDirection: 'row',
              justifyContent: 'space-between',
              alignItems: 'center',
            },
          ]}>
          <Animated.Image
            source={require('./src/assets/home.png')}
            style={[{height: 25, width: 25, margin: 15}, playButton]}
          />
          <Animated.Image
            source={require('./src/assets/pigy.png')}
            style={[{height: 25, width: 25, margin: 15}, play]}
          />
          <Animated.Image
            source={require('./src/assets/settings.png')}
            style={[{height: 25, width: 25, margin: 15}, play3]}
          />
          <Animated.Image
            source={require('./src/assets/youtube.png')}
            style={[{height: 25, width: 25, margin: 15}, play4]}
          />
          
        </Animated.View>
      </Animated.View>

      <ScrollView
        contentContainerStyle={{flexGrow: 1}}
        onScroll={e => {
          const offset = e.nativeEvent.contentOffset.y;
          animatedValue.setValue(offset);
        }}
        scrollEventThrottle={16}>
        <View style={{height: 150, backgroundColor: 'white', margin: 10}} />
        <View style={{height: 150, backgroundColor: 'white', margin: 10}} />

        <View style={{height: 150, backgroundColor: 'white', margin: 10}} />

        <View style={{height: 150, backgroundColor: 'white', margin: 10}} />

        <View style={{height: 150, backgroundColor: 'white', margin: 10}} />
      </ScrollView>
    </View>
  );
};

export default App;

const styles = StyleSheet.create({
  header: {
    position: 'absolute',
    width: '100%',
    height: 136,
    backgroundColor: 'red',
  },
  scrollView: {
    height: 20,
    backgroundColor: 'white',
  },
});
