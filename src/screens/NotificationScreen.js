import React from "react";
import { View, Text, StyleSheet, Dimensions, ScrollView } from "react-native";
import { Pressable } from "@react-native-material/core";
import AntDesign from 'react-native-vector-icons/AntDesign';
import Ionicons from 'react-native-vector-icons/Ionicons';
import NotificationComponent from '../components/NotificationComponent';
import { useTheme } from "@react-navigation/native";

Ionicons.loadFont()
AntDesign.loadFont()


const { height, width } = Dimensions.get('window');
const NotificationScreen = ({ navigation }) => {
    const { colors } = useTheme();
    return (
        <View style={{ ...styles.container, backgroundColor: colors.background }}>
            <View style={styles.backBtnWithHeadingContainerStyle}>
                <Pressable
                    pressEffect="none"
                    style={({ pressed }) =>
                        pressed
                            ? { ...styles.backIcon, opacity: 0.5 }
                            : styles.backIcon}
                    onPress={() => {
                        navigation.goBack()
                    }}
                >
                    <AntDesign name="arrowleft" size={25} color={colors.text} />
                </Pressable>
                <Text style={{ ...styles.backBtnWithHeadingTextStyle, color: colors.text }}>Notification</Text>
                <Ionicons name="ellipsis-horizontal-circle" size={25} style={{ alignSelf: 'flex-end', marginLeft: width * 0.45 }} color={colors.text} />
            </View>
            <View style={{ height: 20 }} />
            <ScrollView
                alwaysBounceVertical={false}
                showsVerticalScrollIndicator={false}
            >
                <Text style={{ ...styles.headingStyle, color: colors.text }}>Today</Text>
                <NotificationComponent title={'30% special discount'} iconName={'brightness-percent'} subtitle={'Special Promotion only valid today.'} />
                <NotificationComponent title={'30% special discount'} iconName={'brightness-percent'} subtitle={'Special Promotion only valid today.'} />
                <Text style={{ ...styles.headingStyle, color: colors.text }}>Yesterday</Text>
                <NotificationComponent title={'30% special discount'} iconName={'brightness-percent'} subtitle={'Special Promotion only valid today.'} />
                <NotificationComponent title={'30% special discount'} iconName={'brightness-percent'} subtitle={'Special Promotion only valid today.'} />
                <NotificationComponent title={'30% special discount'} iconName={'brightness-percent'} subtitle={'Special Promotion only valid today.'} />
                <NotificationComponent title={'30% special discount'} iconName={'brightness-percent'} subtitle={'Special Promotion only valid today.'} />
                <Text style={{ ...styles.headingStyle, color: colors.text }}>July 29, 2021</Text>
                <NotificationComponent title={'30% special discount'} iconName={'brightness-percent'} subtitle={'Special Promotion only valid today.'} />
                <NotificationComponent title={'30% special discount'} iconName={'brightness-percent'} subtitle={'Special Promotion only valid today.'} />
                <NotificationComponent title={'30% special discount'} iconName={'brightness-percent'} subtitle={'Special Promotion only valid today.'} />
            </ScrollView>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: 'white'
    },
    backBtnWithHeadingContainerStyle: {
        alignSelf: 'flex-start',
        flexDirection: 'row'
    },
    backBtnWithHeadingTextStyle: {
        alignSelf: 'flex-end',
        marginLeft: 15,
        marginBottom: 1,
        fontSize: 18,
        fontFamily: 'AlbertSans-SemiBold'
    },
    backIcon: {
        alignSelf: 'flex-start',
        marginTop: height * 0.06,
        marginLeft: width * 0.05
    },
    headingStyle: {
        marginLeft: 20,
        fontFamily: 'AlbertSans-ExtraBold',
        fontSize: 20,
        marginVertical: 20
    }

})

export default NotificationScreen;