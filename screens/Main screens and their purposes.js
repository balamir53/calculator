import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import CalculatorDisplay from './CalculatorDisplay';
import NumberButton from './NumberButton';
import OperationButton from './OperationButton';

const HomeScreen = () => {
    return (
        <View style={styles.container}>
            <CalculatorDisplay />
            <View style={styles.buttonContainer}>
                <NumberButton number={1} />
                <NumberButton number={2} />
                <NumberButton number={3} />
                <OperationButton operation="+" />
            </View>
            <View style={styles.buttonContainer}>
                <NumberButton number={4} />
                <NumberButton number={5} />
                <NumberButton number={6} />
                <OperationButton operation="-" />
            </View>
            <View style={styles.buttonContainer}>
                <NumberButton number={7} />
                <NumberButton number={8} />
                <NumberButton number={9} />
                <OperationButton operation="x" />
            </View>
            <View style={styles.buttonContainer}>
                <NumberButton number={0} />
                <OperationButton operation="/" />
                <OperationButton operation="=" />
            </View>
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
    },
    buttonContainer: {
        flexDirection: 'row',
        marginTop: 10,
    },
});

export default HomeScreen;