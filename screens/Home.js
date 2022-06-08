import React, {useState, useEffect} from "react";
import { View, Text, SafeAreaView, StyleSheet, ScrollView } from "react-native";
import {Divider} from 'react-native-elements';
import Categories from "../components/Categories";
import HeaderTabs from '../components/HeaderTabs';
import RestaurantItem from "../components/RestaurantItem";
import SearchBar from "../components/SearchBar";
import { getRestaurants } from '../apis';
import BottomTabs from "../components/BottomTabs";
// import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';

const yelpApi = 'rjCJo-3WWjYfzrZqZra6dyUrakgHwk_v3HUzOT6hMU8v5bHp_gaecThX21MRg4O0fCsh0-DyFeOiZwO0IWwA7wJYaP-GwcODQGmS-ZL3oZt2yPEh3okfKUZxhalMYXYx';
const yelpClientId = '3k6V-naUxWQh7uFm-3vslg';
const url = `https://api.yelp.com/v3/businesses/search?term=restaurants&location`;


const Home = ({navigation}) => {
	const [city, setCity] = useState('SanDiego');
	const [restaurantsData, setRestaurantsData] = useState([]);

	useEffect(() => {
		const options = {
			headers: {
					Authorization: `Bearer ${yelpApi}`
			}
    }
    fetch(`${url}=${city}`, options).then(res => res.json()).then(res => {
        console.log(res)
        setRestaurantsData(res.businesses);
    });    
	}, [city]);

	const handleCity = (name) => {
		setCity(name)
	}

	const generateRestaurants = () => {

		return restaurantsData.map((restaurant, i) => {
			return(
				<View key={i}>
					<RestaurantItem cityHandler={handleCity} restaurant={restaurant} navigation={navigation}/>
				</View>
			)
		})
	}

	return(
		<SafeAreaView  style={{backgroundColor: 'white', marginBottom: 250}}>
			<View style={{backgroundColor: 'white', padding: 15}}>
				<HeaderTabs/>
				<SearchBar cityHandler={handleCity}/>				
			</View>
			<ScrollView >
				<Categories/>				
				{generateRestaurants()}
			</ScrollView>
			
			<BottomTabs/>			
		</SafeAreaView>
	)
}


const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});

export default Home;