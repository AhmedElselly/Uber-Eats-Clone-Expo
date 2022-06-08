import React, {useState, useEffect} from 'react';
import {View, StyleSheet, Text, TouchableOpacity} from 'react-native';
import RestaurantImage from './RestaurantImage';
import RestaurantInfo from './RestaurantInfo';


const RestaurantItem = ({navigation, restaurant}) => {
    console.log(restaurant)
    return (
        <TouchableOpacity onPress={() => navigation.navigate('RestaurantDetails', {
            name: restaurant.name,
            image: restaurant.image_url,
            price: restaurant.price,
            rating: restaurant.rating,
            categories: restaurant.categories,
            reviews: restaurant.review_count
        })} activeOpacity={1} style={{}}>
            <View style={{
                backgroundColor: '#eee',
                marginTop: 10,
                padding: 15
            }}>
                <RestaurantImage imageUrl={restaurant.image_url}/>
                <RestaurantInfo name={restaurant.name} rating={restaurant.rating}/>
            </View>
        </TouchableOpacity>
    );
}

const styles = StyleSheet.create({})

export default RestaurantItem;
