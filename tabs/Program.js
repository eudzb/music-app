import * as React from 'react';
import {SafeAreaView, StyleSheet, Text, View} from 'react-native';
import {LinearGradient} from "expo-linear-gradient";

const Program = () => {
    const today = new Date();
    const date = today.getDate();
    const month = today.toLocaleString('default', {month: 'short'});
    return (
        <LinearGradient colors={['rgb(13, 12, 34)', 'rgb(18, 16, 60)']} style={{flex: 1}}>
            <SafeAreaView style={styles.container}>
                <View style={styles.programLabelContainer}>
                    <Text style={styles.programLabel}>Programme</Text>

                    <View style={styles.todayContainer}>
                        <Text style={styles.monthLabel}>{month}</Text>
                        <Text style={styles.dateLabel}>{date}</Text>
                    </View>
                </View>
            </SafeAreaView>
        </LinearGradient>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
    },
    programLabelContainer: {
        padding: 16,
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'flex-start'
    },
    programLabel: {
        fontSize: 32,
        color: 'white',
        letterSpacing: 2.3,
        fontWeight: "700"
    },
    todayContainer: {
        borderRadius: 12,
        paddingHorizontal: 12,
        paddingVertical: 8,
        flexDirection: 'column',
        alignItems: 'center',
        backgroundColor: '#343351',
        rowGap: 4
    },
    monthLabel: {
        fontSize: 12,
        color: 'white',
        letterSpacing: 3,
        fontWeight: "400",
        textTransform: 'uppercase'
    },
    dateLabel: {
        fontSize: 18,
        color: 'white',
        letterSpacing: 1.3,
        fontWeight: "700"
    }
});

export default Program
