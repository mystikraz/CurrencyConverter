import React, { Component } from 'react';
import { StatusBar, View } from 'react-native';
import Logo from '../components/Logo';
import Container from '../components/Container';
import InputWithButton from '../components/TextInput';

// export default () => (
//     <Container>
//         <StatusBar translucent={false} barStyle="light-content" />
//         <Logo />
//     </Container>


// );

const TEMP_BASE_CURRENCY = 'USD';
const TEMP_QUOTE_CURRENCY = 'GBP';
const TEMP_BASE_PRICE = '100';
const TEMP_qUOTE_PRICE = '79.5';

class Home extends Component {
    handlePressBaseCurrency = () => {
        console.log('press base');
    }
    handlePressQuoteCurrency = () => {
        console.log('press quote');
    }
    render() {
        return (
            <Container>
                <StatusBar translucent={false} barStyle="light-content" />
                <Logo />
                <InputWithButton
                    buttonText={TEMP_BASE_CURRENCY}
                    onPress={this.handlePressBaseCurrency}
                />
                <InputWithButton
                    buttonText={TEMP_QUOTE_CURRENCY}
                    onPress={this.handlePressQuoteCurrency}
                    editable={false}
                />


            </Container>
        );
    };

}

export default Home;
