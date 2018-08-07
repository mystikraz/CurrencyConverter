import React, { Component } from 'react';
import { StatusBar } from 'react-native';
import Logo from '../components/Logo/index';
import { Container } from '../components/Container';

export default () => (
    <Container>
        <StatusBar translucent={false} barStyle="light-content" />
        <Logo />
    </Container>
);