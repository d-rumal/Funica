import React, { useEffect, useReducer } from "react";
import { View, Text, StyleSheet, ScrollView } from "react-native";
import HeadingBtn from "./HeadingBtn";
import { Pressable } from "@react-native-material/core";



const headingBtnContainer = (props) => {

    useEffect(() => {
        dispatch({ type: 1 })
    }, [])

    const reducer = (state, action) => {
        switch (action.type) {
            case 1:
                return { ...initialState, 1: true }
            case 2:
                return { ...initialState, 2: true };
            case 3:
                return { ...initialState, 3: true };
            case 4:
                return { ...initialState, 4: true };
            case 5:
                return { ...initialState, 5: true };
            case 6:
                return { ...initialState, 6: true };
            case 7:
                return { ...initialState, 7: true };
            case 8:
                return { ...initialState, 8: true };
            case 9:
                return { ...initialState, 9: true };
            default:
                return { ...initialState, 1: true };
        }
    }

    const initialState = {
        1: false,
        2: false,
        3: false,
        4: false,
        5: false,
        6: false,
        7: false,
        8: false,
        9: false,
    };
    const [state, dispatch] = useReducer(reducer, initialState)
    return (
        <View style={styles.headingBtnContainer}>
            <ScrollView horizontal alwaysBounceHorizontal={false}>
                <HeadingBtn title={'All'} focused={state['1']} onPress={() => {
                    dispatch({ type: 1 })
                }} />
                <HeadingBtn title={'Sofa'} focused={state['2']} onPress={() => {
                    dispatch({ type: 2 })
                }} />
                <HeadingBtn title={'Chair'} focused={state['2']} onPress={() => {
                    dispatch({ type: 2 })
                }} />
            </ScrollView>

        </View>
    )
}

const styles = StyleSheet.create({
    headingBtnContainer: {
        flexDirection: 'row',
        margin: 20
    }
})

export default headingBtnContainer;