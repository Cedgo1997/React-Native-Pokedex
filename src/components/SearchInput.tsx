import React, { useEffect, useState } from 'react';
import { StyleProp, StyleSheet, Text, View, ViewStyle } from 'react-native';
import { TextInput } from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';
import { useDebouncedValue } from '../hooks/useDebouncedValue';

interface Props {
    style?: StyleProp<ViewStyle>
}

export const SearchInput = ({ style }: Props) => {


    const [textValue, setTextValue] = useState('');

    const debouncedValue = useDebouncedValue(textValue);

    useEffect(() => {
        console.log(debouncedValue);
    }, [debouncedValue])

    console.log(textValue);
    return (
        <View style={{
            ...styles.container,
            ...style as Object
        }}>
            <View style={styles.textBackground}>
                <TextInput
                    placeholder='Search Pokemon'
                    style={styles.textInput}
                    autoCapitalize='none'
                    autoCorrect={false}
                    value={textValue}
                    onChangeText={setTextValue}
                />
                <Icon
                    name="search-outline"
                    color="grey"
                    size={30}
                />
            </View>
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        marginTop: 15
    },
    textBackground: {
        backgroundColor: '#F3F1F3',
        borderRadius: 50,
        height: 40,
        paddingHorizontal: 20,
        justifyContent: 'center',
        alignItems: 'center',
        flexDirection: 'row',

        shadowColor: "#000",
        shadowOffset: {
            width: 0,
            height: 5,
        },
        shadowOpacity: 0.36,
        shadowRadius: 6.68,

        elevation: 11,
    },
    textInput: {
        flex: 1,
        fontSize: 18,
        top: 2
    }
});