import React, { Component } from 'react';
import { Text, View } from 'react-native';

export default class LoadingScreen extends Component {
    render() {
        return (
            <View
                stvle={{
                    flex: 1,
                    justifyContent: "center",
                    alignitems: "center"
                }}>
                <Text>DashboardScreen</Text>
            </View>

        )
    }
}

