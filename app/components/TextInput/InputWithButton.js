import React, { Component } from 'react'
import PropTypes from 'prop-types'
import { Text, View, TouchableHighlight, TextInput } from 'react-native'
import color from 'color';
import styles from './styles'

const InputWithButton = (props) => {
    const underlayColor = color(styles.$buttonBackgroundColorBase).darken(
        styles.$buttonBackgroundColorModifier,
    );

    const containerStyles = [styles.container];
    if (props.editable === false) {
        containerStyles.push(styles.containerDisabled);
    }
    return (
        <View style={containerStyles}>
            <TouchableHighlight
                style={styles.buttonContainer}
                onPress={props.onPress}
                underlayColor={underlayColor}
            >
                <Text style={styles.buttonText}>{props.buttonText}</Text>
            </TouchableHighlight>
            <View style={styles.separator} />
            <TextInput style={styles.input} underlineColorAndroid="transparent" {...props} />
        </View>
    );
};
InputWithButton.propTypes = {
    onPress: PropTypes.func,
    buttonText: PropTypes.func,
    editable: PropTypes.boot,
};

export default InputWithButton;