import React, {useState} from "react";
import { View, Text, StyleSheet, Button, TouchableOpacity } from "react-native"
import HeaderButton from "./HeaderButton";

const HeaderTabs = () => {
    const [activeTab, setActiveTab] = useState('Delivery');

    const onPress = () => {

    }

    return(
        <View style={styles.header}>
            <HeaderButton 
            onPress={onPress}
            text="Delivery"
            color='white'
            activeTab={activeTab}
            setActiveTab={setActiveTab}
             />
            <HeaderButton 
            onPress={onPress}
            text="Pick ups"
            color='black'
            activeTab={activeTab}
            setActiveTab={setActiveTab}
             />
        </View>
    )
}

const styles = StyleSheet.create({
    header: {
        flexDirection: 'row',
        alignSelf: 'center',
        marginTop: 35
    }
  });
  

export default HeaderTabs;