import { Actions } from 'react-native-router-flux';
import {useState } from 'react';
var token="";
const onLoginBntPress = (username,pass) => {
    fetch('http://192.168.43.210/NotificationWebService/Token', {
        method: 'POST',
        body: 'grant_type=password&username=' + username + '&password=' + pass
    })
        .then((response) => response.json())
        .then((responseJson) => {
            // this.setState({ token: responseJson.access_token });
            // const { token } = this.state;
            // if (token === "") {
            //     console.log("Token boş:::", token)
            // }
            // else if (token === undefined) {
            //     console.log("Token undefined:::", token)
            //     {
            //         Alert.alert("Kullanıcı doğrulanamadı");
            //     }
            // }
            // else if (token === null) {
            //     console.log("Token null:::", token)
            //     {
            //         Alert.alert("Kullanıcı doğrulanamadı");
            //     }
            // }
            // else {
            //     console.log("Token dolu:::", token)
            //     this.setState({ isLoading: true })
            //     Actions.home({ token: token })
            // }
             token= responseJson.access_token;
            if(token != null || token!= "" || token!=undefined)
                Actions.home({ token: token })
            else
                alert("Kullanıcı doğrulanamadı");

        })
        .catch((error) => console.error(error));
}

const onLogoutBntPress = () => {
            Actions.login({ token: "" })
           
}
export const getToken = (username,pass) => {
    onLoginBntPress(username,pass);
}

export const logout = () => {
console.log("girdi")
    onLogoutBntPress();
}


