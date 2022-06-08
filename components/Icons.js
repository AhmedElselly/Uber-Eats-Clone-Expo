import React from 'react';
import {View, StyleSheet, Text, TouchableOpacity} from 'react-native';
import FontAwesome5 from 'react-native-vector-icons/FontAwesome5';
const Icons = props => {
    return (
        <TouchableOpacity>
            <View style={{paddingTop: -20, backgroundColor: 'white', borderRadius: 50, width: 70, height: 70, alignItems: 'center'}}>
                <FontAwesome5 name={props.icon} size={25} style={{marginBottom: 3, alignSelf: 'center'}}/>
                <Text>{props.text}</Text>
            </View>
        </TouchableOpacity>
    );
}

const styles = StyleSheet.create({})

export default Icons;
