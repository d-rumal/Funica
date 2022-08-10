import React, { useState } from "react";
import { View, StyleSheet, Text, FlatList, Dimensions, Modal } from "react-native";
import Product from "../components/Product";
import SkeletonPlaceholder from "react-native-skeleton-placeholder";
import { useTheme } from "@react-navigation/native";

const { height, width } = Dimensions.get('window')
const ProductScreen = ({ data }) => {

    const [loading, setLoading] = useState(true);
    const { colors } = useTheme();

    setTimeout(() => {
        setLoading(false)
    }, 1000)


    return (
        loading ?
            <FlatList
                key={'shimmer'}
                scrollEnabled={false}
                data={Array.from(Array(4).keys())}
                renderItem={({ item }) => {
                    return (
                        <View style={{
                            flexDirection: 'row',
                            width: width,
                            justifyContent: 'space-evenly',
                            marginBottom: height * 0.023,
                        }}>
                            <SkeletonPlaceholder
                                highlightColor={colors.background}
                                backgroundColor={colors.componentBackground}
                                style={styles.container}>
                                <View style={{ ...styles.imageStyle }} />
                                <View style={styles.headingStyle} />
                                <View style={styles.price} />
                            </SkeletonPlaceholder>
                            <SkeletonPlaceholder
                                highlightColor={colors.background}
                                backgroundColor={colors.componentBackground}
                                style={styles.container}>
                                <View style={{ ...styles.imageStyle }} />
                                <View style={styles.headingStyle} />
                                <View style={styles.price} />
                            </SkeletonPlaceholder>
                        </View>
                    )
                }}
            />
            :
            <FlatList
                key={'products'}
                numColumns={2}
                keyExtractor={(item) => Math.random()}
                data={Array.from(Array(10).keys())}
                renderItem={({ item, index }) =>
                    <Product title={data[0].title}
                        price={data[0].price}
                        imagePath={data[0].imagePath}
                    />
                }
            />
    );
}

const styles = StyleSheet.create({
    container: {
        marginHorizontal: width * 0.051,
        marginBottom: height * 0.023,
    },
    imageStyle: {
        height: width * 0.41,
        width: width * 0.41,
        borderRadius: 20
    },
    headingStyle: {
        marginTop: 8,
        marginLeft: 5,
        height: height * 0.01,
        width: width * 0.35,
    },
    price: {
        marginTop: 8,
        height: height * 0.01,
        marginLeft: 5,
        width: width * 0.35,
    }
})

export default ProductScreen;



