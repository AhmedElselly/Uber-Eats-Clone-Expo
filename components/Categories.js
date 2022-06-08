import React from 'react';
import {View, StyleSheet, Text, Image, ScrollView} from 'react-native';

const items = [
    {
        image: require('../assets/images/shopping-bag.png'),
        text: 'Pick-up'
    },
    {
        image: require('../assets/images/soft-drink.png'),
        text: 'Soft Drinks'
    },
    {
        image: require('../assets/images/bread.png'),
        text: 'Bakery Items'
    },
    {
        image: require('../assets/images/fast-food.png'),
        text: 'Fast Food'
    },
    {
        image: require('../assets/images/deals.png'),
        text: 'Deals'
    },
    {
        image: require('../assets/images/coffee.png'),
        text: 'Coffee'
    },
    {
        image: require('../assets/images/desserts.png'),
        text: 'Desserts'
    },

]

const Categories = props => {
    const generateItems = () => {
        return items.map((item, i) => {
            return(
                <View key={i} style={{
                    alignItems: 'center',
                    marginRight: 30,
                    marginBottom: 15,
                    marginTop: 10
                }}>
                    <Image source={item.image} style={{
                        width: 50,
                        height: 40,
                        resizeMode: 'contain'
                    }} />
                    <Text style={{fontSize: 13, fontWeight: '900'}}>{item.text}</Text>
                </View>
            )
        })
    }
    return (
        <ScrollView horizontal>   
            {generateItems()}
        </ScrollView>
    );
}

const styles = StyleSheet.create({})

export default Categories;
