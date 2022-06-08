import React from 'react';
import {View, StyleSheet, Text} from 'react-native';

const RestaurantInfo = props => {
    return (
        <View style={{flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center', marginTop: 10}}>
            <View>
                <Text style={{
                    fontSize: 15,
                    fontWeight: 'bold'
                }}>{props.name}</Text>
                <Text>30-45 . min</Text>
            </View>
            <Text style={{
                    backgroundColor: '#eee',
                    height: 30,
                    width: 30,
                    display: 'flex',
                    justifyContent: 'center',
                    textAlign: 'center',
                    alignItems: 'center',
                    borderRadius: 15
                }}>{props.rating}</Text>
        </View>
    );
}

const styles = StyleSheet.create({})

export default RestaurantInfo;
