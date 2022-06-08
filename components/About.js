import React from 'react';
import {View, StyleSheet, Text, Image} from 'react-native';

const About = props => {
    const {
        name,
        image, 
        price,
        reviews,
        rating,
        categories
    } = props.route.params;


    const description = `${categories[0].title} * $${price} * rating ${rating} * reviews ${reviews}` ;

    return (
        <View>
            <RestaurantImage image={image} />
            <RestaurantTitle title={name} />
            <RestaurantDescription description={description} />
        </View>
    );
}

const styles = StyleSheet.create({})

const RestaurantImage = props => (
    <Image source={{uri: props.image}} style={{width: '100%', height: 180}} />
)
const RestaurantTitle = props => (
    <Text style={{
        fontSize: 29,
        fontWeight: '600',
        marginTop: 10,
        marginHorizontal: 15
    }}>{props.title}</Text>
)
const RestaurantDescription = props => (
    <Text style={{
        margin: 10,        
        marginHorizontal: 15,
        fontWeight: '400',
        fontSize: 15.5
    }}>{props.description}</Text>
)

export default About;
