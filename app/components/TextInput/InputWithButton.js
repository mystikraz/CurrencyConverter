import React, { Component } from 'react'
import PropTypes from 'prop-types'
import { Text, View, TouchableHighlight, TextInput } from 'react-native'
import styles from './styles'

const InputWithButton = (props) => {
    const { onprogress, buttonText, editable = true } = props;
    return (
        <View>
            <TouchableHighlight style={styles.buttonContainer} onPress={props.onPress}>
                <Text style={styles.button}>{props.buttonText}</Text>
            </TouchableHighlight>
            <View style={styles.border} />
            <TextInput style={styles.input} {...props} />
        </View>
    );
};
InputWithButton.propTypes = {
    onPress: PropTypes.func,
    buttonText: PropTypes.func,
    editable: PropTypes.boot,
};

export default InputWithButton;