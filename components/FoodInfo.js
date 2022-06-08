import React from 'react';
import {View, StyleSheet, Text} from 'react-native';

const FoodInfo = props => {
    return(
        <View style={{width: 240, justifyContent: 'space-evenly'}}>
            <Text style={styles.title}>{props.food.title}</Text>
            <Text>{props.food.description}</Text>
            <Text>${props.food.price}</Text>
        </View>
    )
}
const styles = StyleSheet.create({
    title: {
        fontSize: 19,
        fontWeight: '600'
    }
})

export default FoodInfo;
