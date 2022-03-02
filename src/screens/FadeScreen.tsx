import React from 'react';
import { useFade } from '../hooks/useFade';
import { Animated, Button, View } from 'react-native'
export const FadeScreen = () => {
  
    const { opacity, fadeIn, fadeOut} = useFade()

    return (
        <View
        style={{
            flex:1,
            backgroundColor:'grey',
            justifyContent: 'center',
            alignItems: 'center'
        }}
        >
            <Animated.View
             style={{
                 backgroundColor:'#',
                 width: 150,
                 height: 150,
                 borderColor: 'white',
                 borderWidth:10,
                 marginBottom: 10,
                 opacity
             }}
            ></Animated.View>
            <Button
                title="FadeIn"
                onPress={  ()=> fadeIn()}
            />
             <Button
                title="FadeOut"
                onPress={ ()=> fadeOut()}
            />
        </View>
    )

};
