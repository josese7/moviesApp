import React, { useContext, useEffect } from 'react';
import { Animated, StyleSheet, View } from 'react-native';
import LinearGradient from 'react-native-linear-gradient';
import { GradientContext } from '../context/GradientContext';

import { useFade } from '../hooks/useFade';
interface Props {
    children: JSX.Element | JSX.Element[]
}
export const Background = ({children}: Props) => {

  const { colors, prevColors, setMainPrevColors } = useContext(GradientContext);

  const {opacity, fadeIn, fadeOut } = useFade();

  useEffect(() => {
    fadeIn(()=>{
      setMainPrevColors( colors);
      fadeOut();
    })
  }, [colors])
  
 // console.log(colors.primary, colors.secondary)
  return (
      <View style={{ flex:1, backgroundColor: '#084F6A'}}>

        <LinearGradient
            colors={[prevColors.primary, prevColors.secondary, 'white']}
            style={{...StyleSheet.absoluteFillObject}}
            start= {{x:0.1, y: 0.1}}
            end={{x:0.5, y:0.75}}
        />

        <Animated.View
          style={{...StyleSheet.absoluteFillObject, opacity}}
        >
          <LinearGradient
            colors={[colors.primary, colors.secondary, 'white']}
            style={{...StyleSheet.absoluteFillObject}}
            start= {{x:0.1, y: 0.1}}
            end={{x:0.5, y:0.75}}
        />

        </Animated.View>
        
        { children }
      </View>
  )
};
