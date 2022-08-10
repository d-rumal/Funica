import React from 'react';
import { View, StyleSheet, Text, Dimensions, FlatList, ScrollView } from 'react-native';
import AntDesign from 'react-native-vector-icons/AntDesign';
import SearchInput from '../components/SearchInput';
import { Avatar, Pressable } from "@react-native-material/core";
import SlideWidget from '../components/SlideWidget';
import Furniture from '../components/Furniture';
import { useTheme } from '@react-navigation/native';

AntDesign.loadFont()
const { height, width } = Dimensions.get('window');
const HomeScreen = ({ navigation }) => {
    const { colors } = useTheme();
    return (
        <View style={{ ...styles.container, backgroundColor: colors.background }}>
            <View style={styles.headerContainer}>
                <Avatar size={45} image={{ uri: "https://mui.com/static/images/avatar/1.jpg" }} />
                <View style={styles.greetingContainer}>
                    <Text style={{ color: colors.text }}>Good Morning ☀️</Text>
                    <Text style={{ ...styles.nameTextStyle, color: colors.text }}>Andrew Ansley</Text>
                </View>
                <Pressable
                    pressEffect='none'
                    style={{ alignSelf: 'center', marginLeft: 15 }}
                    onPress={() => {
                        navigation.push('Notification')
                    }}
                >
                    <AntDesign style={{ alignSelf: 'center', marginLeft: 85 }} size={25} name="bells" color={colors.text} />
                </Pressable>
                <Pressable
                    pressEffect='none'
                    style={{ alignSelf: 'center', marginLeft: 15 }}
                    onPress={() => {
                        navigation.push('WishList')
                    }}
                >
                    <AntDesign size={25} name="hearto" color={colors.text} />
                </Pressable>
            </View>
            <View style={{ height: height * 0.02369668246 }} />
            <SearchInput title={'Search'} />
            <View style={styles.subHeadingStyle}>
                <Text style={{ ...styles.nameTextStyle, color: colors.text }}>Special Offers</Text>
                <Text style={{ ...styles.nameTextStyle, color: colors.text }}>See All</Text>
            </View>
            <SlideWidget />
            <View style={{ flexDirection: 'row', alignSelf: 'stretch', justifyContent: 'space-evenly' }}>
                <Furniture name={'sofa'} title={'Sofa'} />
                <Furniture name={'chair-rolling'} title={'Chair'} />
                <Furniture name={'table-furniture'} title={'Table'} />
                <Furniture name={'fridge'} title={'Kitchen'} />
            </View>
            <View style={{ flexDirection: 'row', alignSelf: 'stretch', justifyContent: 'space-evenly' }}>
                <Furniture name={'lamp'} title={'Lamp'} />
                <Furniture name={'cupboard'} title={'Cupboard'} />
                <Furniture name={'flower'} title={'Vase'} />
                <Furniture name={'apps'} title={'Others'} />
            </View>
            <View style={styles.subHeadingStyle}>
                <Text style={{ ...styles.nameTextStyle, color: colors.text }}>Most Popular</Text>
                <Text style={{ ...styles.nameTextStyle, color: colors.text }}>See All</Text>
            </View>
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
    },
    headerContainer: {
        alignSelf: 'flex-start',
        flexDirection: 'row',
        marginLeft: width * 0.05128205128,
        marginTop: height * 0.077014218,
    },
    greetingContainer: {
        marginLeft: width * 0.05128205128,
        justifyContent: 'center'
    },
    greetingTextStyle: {
        fontSize: 18,
        fontFamily: 'AlbertSans-Light',
        color: '#595959'
    },
    nameTextStyle: {
        alignSelf: 'flex-end',
        fontSize: 18,
        fontFamily: 'AlbertSans-SemiBold'
    },
    subHeadingStyle: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        width: width,
        paddingHorizontal: 20,
        marginTop: 15
    }
});

export default HomeScreen;