import React, { Component } from 'react';
import { StatusBar } from 'react-native';
import Logo from '../components/Logo';
import Container from '../components/Container';
import InputWithButton from '../components/Logo/TextInput';

// export default () => (
//     <Container>
//         <StatusBar translucent={false} barStyle="light-content" />
//         <Logo />
//     </Container>


// );
const Home = () => {
    <View>
        <Logo />
        <InputWithButton
            buttonText={}
            onPress={}
        />
        <InputWithButton
            buttonText={}
            onPress={}
            editable={false}
        />
    </View>
}

export default Home;
