import React from 'react';
import {View, StyleSheet, Image} from 'react-native';

const FoodImage = props => (
    <View>
        <Image source={{uri: props.image}}
            style={{
                width: 100,
                height: 100,
                borderRadius: 8
            }}
        />
    </View>
)

const styles = StyleSheet.create({})

export default FoodImage;
