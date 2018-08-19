import React, { Component } from 'react';
import { StatusBar, View } from 'react-native';
import Logo from '../components/Logo';
import Container from '../components/Container';
import InputWithButton from '../components/TextInput';
import ClearButton from '../components/Buttons';
import LastConverted from '../components/Text';
import Header from '../components/Header'
// export default () => (
//     <Container>
//         <StatusBar translucent={false} barStyle="light-content" />
//         <Logo />
//     </Container>


// );

const TEMP_BASE_CURRENCY = 'USD';
const TEMP_QUOTE_CURRENCY = 'GBP';
const TEMP_BASE_PRICE = '100';
const TEMP_QUOTE_PRICE = '79.5';
const TEMP_CONVERSION_RATE = 0.7974;
const TEMP_CONVERSION_DATE = new Date();

class Home extends Component {
    handlePressBaseCurrency = () => {
        console.log('press base');
    };
    handlePressQuoteCurrency = () => {
        console.log('press quote');
    };
    handleTextChange = (text) => {
        console.log('change text', text);
    }
    handleSwapCurrency = () => {
        console.log('handle swap currency');
    };
    handleOptionsPress = () => {
        console.log('options pressed');
    }
    render() {
        return (
            <Container>
                <StatusBar translucent={false} barStyle="light-content" />
                <Header onPress={this.handleOptionsPress} />
                <Logo />
                <InputWithButton
                    buttonText={TEMP_BASE_CURRENCY}
                    onPress={this.handlePressBaseCurrency}
                    defaultValue={TEMP_BASE_PRICE}
                    keyboardType="numeric"
                    onChangeText={this.handleChangeText}
                />
                <InputWithButton
                    buttonText={TEMP_QUOTE_CURRENCY}
                    onPress={this.handlePressQuoteCurrency}
                    editable={false}
                    value={TEMP_QUOTE_PRICE}
                />
                <LastConverted
                    base={TEMP_BASE_CURRENCY}
                    quote={TEMP_QUOTE_CURRENCY}
                    conversionRate={TEMP_CONVERSION_RATE}
                />
                <ClearButton onPress={this.handleSwapCurrency} text="Reverse Currencies" />
            </Container>
        );
    };

}

export default Home;
