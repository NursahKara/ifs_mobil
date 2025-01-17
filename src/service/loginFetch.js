import { Actions } from 'react-native-router-flux';

import signalr from 'react-native-signalr';
import PushNotification from 'react-native-push-notification';
import BackgroundTask from 'react-native-background-task';
var token = "";


const onLoginBntPress = (username, pass) => {
    fetch('http://192.168.41.182/NotificationWebService/Token', {
        method: 'POST',
        body: 'grant_type=password&username=' + username + '&password=' + pass
    })
        .then((response) => response.json())
        .then((responseJson) => {
            token = responseJson.access_token;
            // storeToken();
            if (token != null && token != "" && token != undefined) {
                Actions.home({ token: token })
                signalrConnection();
            }
        })
        .catch((error) => console.error(error));
}

const onLogoutBntPress = () => {
    Actions.login({ token: "" })

}

// const storeToken = async () => {
//     try {
//         await AsyncStorage.setItem('token', JSON.stringify(token));
//     } catch (e) {
//         // saving error
//     }
// }
const signalrConnection = () => {

    const connection = signalr.hubConnection('http://192.168.41.182/NotificationWebService');
    console.log("::::::::::::::::::...", token)
    connection.qs = { "bearer": token };
    connection.logging = false;
    const notificationHub = connection.createHubProxy(`notificationHub`);
    //connection.QueryString = { "bearer": `${token}` }
    notificationHub.on("ReceiveNotifications", function (response) {
        console.log(response.notifications);
        response.notifications.forEach(notification => {
            PushNotification.localNotification({
                title: notification.Title,
                message: notification.Message,
                vibrate: true,
                
            });
            PushNotification.configure({
                onAction: function (notification) {
                    console.log("ACTION:", notification.action);
                    console.log("NOTIFICATION:", notification);
                    PushNotification.localNotificationSchedule(Actions.purchaseOrderList({ token: token }));
                  
                  },
            });
        });

        notificationHub.invoke('MarkNotificationsAsRead')
            .fail(() => {
                console.warn('error when calling DeleteNotifications')
            })
        // PushNotification.localNotificationSchedule(Actions.purchaseOrderList({ token: token }));
    });
    connection.start().done(() => {
        console.log('Now connected, connection ID=' + connection.id);
    }).fail(() => {
        console.log('Failed');
    });
   
    // PushNotification.configure({
    //     onAction: function (notification) {
    //         console.log("ACTION:", notification.action);
    //         console.log("NOTIFICATION:", notification);
    //         PushNotification.localNotificationSchedule(Actions.purchaseOrderList({ token: token }));
          
    //       },
    // });

    BackgroundTask.define(() => {
        console.log('Hello from a background task');
        notificationHub.on("ReceiveNotifications", function (notification) {
            console.log(notification);
            PushNotification.localNotification({
                title: notification.title,
                message: notification.message,
                vibrate: true,
                playSound: true
            });

            notificationHub.invoke('MarkNotificationsAsRead')
                .fail(() => {
                    console.warn('error when calling DeleteNotifications backgrountask')
                })
            BackgroundTask.finish();
        });
        connection.start().done(() => {
            console.log('Now connected, connection ID=' + connection.id);
        }).fail(() => {
            console.log('Failed');
        });
        BackgroundTask.schedule();
        connection.start().done(() => {
            console.log('Now connected, connection ID=' + connection.id);
        }).fail(() => {
            console.log('Failed');
        });
    })
}

// const backgroundTask = () => {
//     BackgroundTask.schedule();
//     connection.start().done(() => {
//         console.log('Now connected, connection ID=' + connection.id);
//     }).fail(() => {
//         console.log('Failed');
//     });
// }

export const getToken = (username, pass) => {
    onLoginBntPress(username, pass);
}

export const logout = () => {
    console.log("girdi")
    onLogoutBntPress();
}

export const signalrConn = () => {
    signalrConnection();
}

export const backgroundTaskConn = () => {
    backgroundTask();
}


