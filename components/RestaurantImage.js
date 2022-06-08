import React from 'react';
import {View, StyleSheet, Image, TouchableOpacity} from 'react-native';
import {Ionicons} from 'react-native-vector-icons';
const RestaurantImage = props => {
    return (
        <>
            <Image source={{
                uri: props.imageUrl
            }}
            style={{width: '100%', height: 180}}
            />
            <TouchableOpacity style={{position: 'absolute', right: 15, top: 15}}>
                <Ionicons name='heart-outline' size={25} color='#fff' />
            </TouchableOpacity>
        </>
    );
}

const styles = StyleSheet.create({})

export default RestaurantImage;
