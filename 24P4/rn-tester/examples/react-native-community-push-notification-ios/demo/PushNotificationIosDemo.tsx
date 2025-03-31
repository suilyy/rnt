/*
 * Copyright (c) 2024 Huawei Device Co., Ltd. All rights reserved
 * Use of this source code is governed by a MIT license that can be
 * found in the LICENSE file.
 */


import React, { useState } from "react";
import { View, Text, Button } from "react-native";
import PushNotification from "@react-native-community/push-notification-ios";

 const App = (pros) => {

  const [data, setData] = useState({});

  const addNotificationRequest = () => {
    PushNotification.setNotificationCategories
    PushNotification.addNotificationRequest({
      id: "test",
      title: "title",
      subtitle: "subtitle",
      body: "body1",
      fireDate: new Date(new Date().valueOf() + 1000),
      repeats: true,
    });
  };

  const addSilentNotificationRequest = () => {
    PushNotification.addNotificationRequest({
      id: "test-4",
      title: "title1",
      subtitle: "subtitle",
      body: "body2",
      isSilent: true,
      fireDate: new Date(new Date().valueOf() + 2000),
      repeats: true,
      userInfo: {
        data: "123456",
      },
    });
  };

  const addMultipleRequests = () => {
    PushNotification.addNotificationRequest({
      id: "test-1",
      title: "First",
      subtitle: "subtitle",
      body: "First Notification out of 1",
      fireDate: new Date(new Date().valueOf() + 10000),
      repeats: true,
    });

    PushNotification.addNotificationRequest({
      id: "test-2",
      title: "Second",
      subtitle: "subtitle",
      body: "Second Notification out of 2",
      fireDate: new Date(new Date().valueOf() + 12000),
      repeats: true,
    });

    PushNotification.addNotificationRequest({
      id: "test-3",
      title: "Third",
      subtitle: "subtitle",
      body: "Third Notification out of 12",
      fireDate: new Date(new Date().valueOf() + 14000),
      repeats: true,
    });
  };

  const removeAllDeliveredNotifications = () => {
    PushNotification.removeAllDeliveredNotifications();
  };

  const removeDeliveredNotifications = () => {
    PushNotification.removeDeliveredNotifications(["test-1", "test-2"]);
  };

  const getDeliveredNotifications = () => {
    PushNotification.getDeliveredNotifications((data) => {
      if (data) {
        setData(data);
      } else {
        console.log("failed");
      }
    });
  };

  PushNotification.addEventListener("notification",(notification) => {
    if(notification.getData().userInteraction ===1){ // click
      pros.navigation.navigate("JumPage")
    }
  });

  return (
    <View style={{ margin:50, flexDirection: "column", justifyContent: "space-between" }}>
      <Button
        title="Add Notification Request"
        onPress={addNotificationRequest}
      />
      <Button
        title="Add Slient Notification Request"
        onPress={addSilentNotificationRequest}
      />
      <Button
        title="Add Multiple Notification Requests"
        onPress={addMultipleRequests}
      />
      <Button
        title="Set app's icon badge to 42"
        onPress={() => PushNotification.setApplicationIconBadgeNumber(42)}
      />
      <Button
        title="Clear app's icon badge"
        onPress={() => PushNotification.setApplicationIconBadgeNumber(0)}
      />
      <Button
        title="Remove All Delivered Notification Requests"
        onPress={removeAllDeliveredNotifications}
      />
      <Button
        title="Remove Delivered Notification Requests"
        onPress={removeDeliveredNotifications}
      />
      <View>
        <Button
          title="Get Delivered Notification"
          onPress={getDeliveredNotifications}
        />
        <Text>{JSON.stringify(data)}</Text>
      </View>
    </View>
  );
};
export default class PushPage extends React.Component{
  render() {
    return (
      <App{...this.props}/>
    );
}
}