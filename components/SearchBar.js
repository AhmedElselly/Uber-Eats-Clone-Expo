import React from 'react';
import {View, StyleSheet, Text} from 'react-native';
import {
    Ionicons,
    AntDesign
} from 'react-native-vector-icons';
import { GooglePlacesAutocomplete } from 'react-native-google-places-autocomplete';
const googleApiKey = 'AIzaSyAeFqJVW2hMckodaw1RNCq8o4uUr86scXg'
// AIzaSyA508IIW3FjMQFcA23STm9SoeGNczuA9PU
const SearchBar = ({cityHandler}) => {
    return (
        <View style={{marginTop: 15, flexDirection: 'row'}}>
            <GooglePlacesAutocomplete 
            query={{key: googleApiKey}}
            onPress={(data, details = null) => {
                console.log(data.description);
                const city = data.description.split(', ')[0];
                const destrict = data.description.split(', ')[1];

                console.log(city, destrict)
                cityHandler(city)
            }}
            placeholder='Search'
            styles={{
                textInput: {
                    backgroundColor: '#eee',
                    borderRadius: 20,
                    fontWeight: '700',
                    marginTop: 7
                },
                textInputContainer: {
                    backgroundColor: '#eee',
                    borderRadius: 50,
                    flexDirection: 'row',
                    alignItems: 'center',
                    marginRight: 10
                }
            }}
            renderLeftButton={() => (
                <View style={{marginLeft: 10}}>
                    <Ionicons name='location-sharp' size={24} />
                </View>
            )}
            renderRightButton={() => (
                <View style={{
                    flexDirection: 'row',
                    marginRight: 8,
                    backgroundColor: 'white',
                    padding: 9,
                    borderRadius: 30,
                    alignItems: 'center'
                }}>
                    <AntDesign name='clockcircle' size={11} style={{marginRight: 6}} />
                    <Text>Search</Text>
                </View>
            )}
            />
        </View>
    );
}

const styles = StyleSheet.create({})

export default SearchBar;
