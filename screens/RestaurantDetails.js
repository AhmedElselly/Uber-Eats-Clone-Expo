import React from 'react';
import {View, StyleSheet, Text, Image, ScrollView, SafeAreaView} from 'react-native';
import { Divider } from 'react-native-elements/dist/divider/Divider';
import About from '../components/About';
import MenuItem from '../components/MenuItem';
import ViewCart from '../components/ViewCart';


const RestaurantDetails = ({route, navigation}) => {
    
    return (
        <View style={{height: '100%'}}>
            <About route={route}/>
            <Divider width={1.8} />
            <MenuItem restaurantName={route.params.name}/>
            <ViewCart
             navigation={navigation} 
             restaurantName={route.params.name}
            />         
        </View>
    );
}



const styles = StyleSheet.create({})

export default RestaurantDetails;
