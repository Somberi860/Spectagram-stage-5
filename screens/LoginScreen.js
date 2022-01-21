import React, { Component } from 'react';
import { Text, View } from 'react-native';

signInWithGoogleAsync = async () => {
    try {
        const result = await Google.logInAsync({
            behaviour: "web",
            androidClientId:
                "435433081551-aj5ikq0huhtgndks2c6scr2baffguh4u.apps.googleusercontent.com",
            iosClientId:
                "435433081551-bs44hinm9u6m5t76cc9i9gc3am85vid4.apps.googleusercontent.com",
            scopes: ["profile", "email"]
        });

        if (result.type === "success") {
            this.onSignIn(result);
            return result.accessToken;
        } else {
            return { cancelled: true };
        }
    } catch (e) {
        console.log(e.message);
        return { error: true };
    }
};

export default class LoadingScreen extends Component {
    render() {
        return (
            <View
                stvle={{
                    flex: 1,
                    justifyContent: "center",
                    alignitems: "center"
                }}>
                <Text>LoginScreen</Text>
            </View>

        )
    }
}