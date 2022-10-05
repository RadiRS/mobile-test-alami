import {
  View,
  Text,
  StyleSheet,
  Animated,
  Pressable,
  Easing,
} from 'react-native';
import React, {useCallback, useEffect, useRef, useState} from 'react';

const ProgressBar: React.FC = () => {
  const [progress, setProgress] = useState(0);
  const animation = useRef(new Animated.Value(0)).current;

  const startAnimation = useCallback(() => {
    return Animated.loop(
      Animated.timing(animation, {
        toValue: 1,
        duration: 5000,
        easing: Easing.linear,
        useNativeDriver: false,
      }),
    );
  }, [animation]);

  useEffect(() => {
    startAnimation().start();

    animation.addListener(({value}) => {
      const v = Math.floor(value * 100);
      setProgress(v);
    });

    return () => {
      animation.removeAllListeners();
    };
  }, [animation, startAnimation]);

  const progressInterpolate = animation.interpolate({
    inputRange: [0, 1],
    outputRange: ['0%', '100%'],
  });

  const progressStyle = {
    width: progressInterpolate,
  };

  const onPressIn = () => {
    animation.stopAnimation();
  };

  const onPressOut = () => {
    startAnimation().start();
  };

  return (
    <View>
      <Text style={styles.title}>Progress Bar</Text>
      <Pressable
        style={styles.progressBarContainer}
        onPressIn={onPressIn}
        onPressOut={onPressOut}>
        <Animated.View style={[styles.progressBar, progressStyle]} />
        <Text style={styles.progressText}>{`${progress} %`}</Text>
      </Pressable>
    </View>
  );
};

const styles = StyleSheet.create({
  title: {
    fontSize: 18,
    marginBottom: 8,
    fontWeight: 'bold',
  },
  progressBarContainer: {
    width: '100%',
    borderWidth: 1,
    height: 25,
    borderRadius: 8,
    justifyContent: 'center',
  },
  progressBar: {
    backgroundColor: 'lightblue',
    height: '100%',
    borderRadius: 8,
  },
  progressText: {
    position: 'absolute',
    alignSelf: 'center',
  },
});

export default ProgressBar;
