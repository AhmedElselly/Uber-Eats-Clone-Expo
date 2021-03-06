import React from 'react';
import { StyleSheet } from 'react-native';
import {createStackNavigator} from '@react-navigation/stack';
import { NavigationContainer } from '@react-navigation/native';

import Home from './screens/Home';
import RestaurantDetails from './screens/RestaurantDetails';

import {Provider as ReduxProvider} from 'react-redux';
import configureStore from './redux/store';

const RootNavigation = () => {
	const Stack = createStackNavigator();
	const screenOptions = {
		headerShown: false
	}
	const store = configureStore();
	return (
		<ReduxProvider store={store}>
			<NavigationContainer>
				<Stack.Navigator initialRouteName='Home' screenOptions={screenOptions}>
					<Stack.Screen name='Home' component={Home} />
					<Stack.Screen name='RestaurantDetails' component={RestaurantDetails} />
				</Stack.Navigator>
			</NavigationContainer>
		</ReduxProvider>
	);
}

const styles = StyleSheet.create({})

export default RootNavigation;
