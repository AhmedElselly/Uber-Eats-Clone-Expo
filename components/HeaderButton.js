import React, {useState} from "react";
import { Button, Text, StyleSheet, TouchableOpacity } from "react-native";

const HeaderButton = props => {
		// const [activeTab, setActiveTab] = useState(text);
    const {text, color, bckColor, activeTab, setActiveTab} = props;

    const onPress = () => {
			setActiveTab(text)
    }

    return(
        // <Button
        // style={{borderRadius: 15}}
        // onPress={onPressLearnMore}
        // title={text}
        // color={bckColor} />
				<TouchableOpacity style={{
					backgroundColor: activeTab === text ? 'black' : 'white',
					borderRadius: 15,
					marginRight: 5,
					paddingHorizontal: 16,
					paddingVertical: 6
					}}
					onPress={() => onPress()}>
					<Text style={{color: activeTab === text ? 'white' : 'black', fontSize: 16, fontWeight: '900'}}>{text}</Text>
				</TouchableOpacity>
    )
}

const styles = StyleSheet.create({
	button: {
		borderRadius: 15,
		backgroundColor: 'black',
		color: '#fff'  
	}
})

export default HeaderButton;