import React, { Component } from 'react';
import Router from './src/routerScreen';
import signalr from 'react-native-signalr';
import PushNotification from 'react-native-push-notification';
import BackgroundTask from 'react-native-background-task';
import { signalrConn, backgroundTaskConn } from './src/service/loginFetch';

// const connection = signalr.hubConnection('http://192.168.43.210/NotificationWebService');
// connection.logging = true;
// const notificationHub = connection.createHubProxy('notificationHub');
// notificationHub.on("ReceiveNotification", function (notification) { 
//     console.log(notification);
//     PushNotification.localNotification({
//         title: notification.title,
//         message: notification.message,
//         vibrate: true
//     });
//     notificationHub.invoke('DeleteNotifications')
//         .fail(() => {
//             console.warn('error when calling DeleteNotifications')
//         })
// });
// BackgroundTask.define(() => {
//     console.log('Hello from a background task');
//     notificationHub.on("ReceiveNotification", function (notification) {
//         console.log(notification);
//         PushNotification.localNotification({
//             title: notification.title,
//             message: notification.message,
//             vibrate: true,
//             playSound:true
//         });
//         notificationHub.invoke('DeleteNotifications')
//             .fail(() => {
//                 console.warn('error when calling DeleteNotifications backgrountask')
//             })
//         BackgroundTask.finish();
//     });
//     connection.start().done(() => {
//         console.log('Now connected, connection ID=' + connection.id);
//     }).fail(() => {
//         console.log('Failed');
//     });
// })
//signalrConn();
export default class App extends Component {
    // constructor(props) {
    //     super(props);
    //     this.state = {
    //         token: ''
    //     };
    // }
    componentDidMount() {
        // BackgroundTask.schedule();
        // connection.start().done(() => {
        //     console.log('Now connected, connection ID=' + connection.id);
        // }).fail(() => {
        //     console.log('Failed');
        // });
        //backgroundTaskConn();
    }
    render() {
        return (
            <Router />
        )
    }
}