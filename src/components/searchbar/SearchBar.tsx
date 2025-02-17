import { StyleSheet, View } from 'react-native'
import React from 'react'
import { TextInput } from 'react-native-paper'
import { color } from '../../style/colors'

const SearchBar = ({ onIconClick, onChangeText }: any) => {
    return (
        <View style={styles.searchBarContainer}>
            <TextInput
                placeholder='Search'
                placeholderTextColor="#1F2029"
                textContentType='password'
                underlineColor='transparent'
                activeUnderlineColor='transparent'
                left={
                    <TextInput.Icon
                        icon="magnify"
                        onPress={onIconClick}
                    />
                }
                style={styles.searchBarInput}
                onChangeText={onChangeText}
            />

        </View>
    )
}

export default SearchBar

const styles = StyleSheet.create({
    searchBarContainer: {
        paddingBottom: 20,
        borderColor: color.textColor,
    },
    searchBarInput: {
        borderRadius: 40,
        borderTopRightRadius: 40,
        borderTopLeftRadius: 40,
        borderColor: "black",
        backgroundColor: color.inputBackgroundColor,
        // backgroundColor: "#F7F7F9",
        color: color.textColor,
    },
})