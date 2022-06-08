import React, { Fragment, useState } from 'react';
import {View, StyleSheet, Text, TouchableOpacity, Modal} from 'react-native';
import { useSelector } from 'react-redux';
import OrderItem from './OrderItem';
import app from '../firebase';
import 'firebase/firestore';

const ViewCart = () => {
	const [modalVisible, setModalVisible] = useState(false);
	const {items, restaurantName} = useSelector(state => state.cartReducer.selectedItems);
	console.log(useSelector(state => state.cartReducer.selectedItems))
	let total = items.map(item => Number(item.price)).reduce((prev, curr) => prev + curr, 0);

	const totalUSD = total.toLocaleString('en', {
		style: 'currency',
		currency: 'USD'
	});
	
	const addOrderToFirebase = () => {
		const db = app.firestore();
		db.collection('orders').add({
			items,
			restaurantName,
			// createdAt: db.firestore.FieldValue.serverTimestamp()
		});
		setModalVisible(false);
	}


	const checkoutModalContent = () => {
		return (
			<Fragment>
				<View style={styles.modalContainer}>
					<View style={styles.modalCheckoutContainer}>
						<Text style={styles.restaurantName}>{restaurantName}</Text>
						{items.map((item, index) => (
							<OrderItem
								key={index}
								item={item}
							/>
						))}
						<View style={styles.subTotalContainer}>
							<Text style={styles.subTotalText}>Subtotal</Text>
							<Text style={styles.subTotalText}>${totalUSD}</Text>
						</View>
						<View style={{
								flexDirection: 'row',
								justifyContent: 'center'
							}}>
								<TouchableOpacity 
									style={{
										marginTop: 20,
										backgroundColor: 'black',
										alignItems: 'center',
										padding: 13,
										borderRadius: 30,
										width: 300,
										position: 'relative'
									}}
									onPress={() => addOrderToFirebase()}
								>
									<Text style={{
										color: 'white',
										fontSize: 20
									}}>Checkout</Text>
									<Text style={{
										position: 'absolute',
										right: 20,
										color: 'white',
										fontSize: 15,
										top: 17										
									}}>
										{total ? `$${totalUSD}` : ''}
									</Text>
								</TouchableOpacity>
							</View>
					</View>
				</View>
			</Fragment>
		)
	}

	return (
		<Fragment>
			<Modal animationType='slide' visible={modalVisible} transparent={true} onRequestClose={() => setModalVisible(false)}>
				{checkoutModalContent()}
			</Modal>
			{total ? (
				<Fragment>
					<View style={{
					flex: 1,
					alignItems: 'center',
					justifyContent: 'center',
					flexDirection: 'row',
					position: 'absolute',
					bottom: 80,
					zIndex: 1000
				}}>
					<View style={{
						flexDirection: 'row',
						justifyContent: 'center',
						width: '100%'
					}}>
						<TouchableOpacity style={{
							marginTop: 20,
							backgroundColor: 'black',
							alignItems: 'center',
							padding: 13,
							borderRadius: 30,
							width: 300,
							position: 'relative'
						}}
							onPress={() => setModalVisible(true)}
						>
							<Text style={{
									color: 'white',
									fontSize: 20
							}}>{`View Cart $${total}`}</Text>
						</TouchableOpacity>
					</View>
				</View>
			</Fragment>
			): <Fragment></Fragment>}			
		</Fragment>
	);
}

const styles = StyleSheet.create({
	modalContainer: {
		flex: 1,
		justifyContent: 'flex-end',
		backgroundColor: 'rgba(0,0,0,0.7)'
	},
	modalCheckoutContainer: {
		backgroundColor: 'white',
		padding: 16,
		height: 500,
		borderWidth: 1
	},
	restaurantName: {
		textAlign: 'center',
		fontWeight: '600',
		fontSize: 18,
		marginBottom: 10,
		
	},
	subTotalContainer: {
		flexDirection: 'row',
		justifyContent: 'space-between',
		marginTop: 15
	},
	subTotalText: {
		textAlign: 'left',
		fontWeight: '600',
		fontSize: 15,
		marginBottom: 10
	}
})

export default ViewCart;
