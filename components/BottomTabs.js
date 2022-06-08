import React from 'react';
import {View, StyleSheet, Text} from 'react-native';
import Icons from './Icons';

const BottomTabs = props => {
    return (
        <View style={styles.container}>
            <Icons icon='home' text='Home' />
            <Icons icon='search' text='Browse' />
            <Icons icon='shopping-bag' text='Grocery' />
            <Icons icon='receipt' text='Orders' />
            <Icons icon='user' text='Account' />
            
        </View>
    );
}

const styles = StyleSheet.create({
	container: {
		backgroundColor: '#fff', 
		marginLeft: 5, 
		paddingTop: 10, 
		marginRight: 9, 
		display: 'flex', 
		flexDirection: 'row', 
		justifyContent: 'space-between'
	},
	tabs: {
		display: 'flex',
		flexDirection: 'row'
	},
	tabButton: {
		backgroundColor: 'white',
		borderRadius: 500,
	}
})

export default BottomTabs;
