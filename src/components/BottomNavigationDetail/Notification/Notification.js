import React from 'react'
import { StyleSheet, Text, View,ScrollView } from 'react-native';
import NotificationDetails from './NotificationDetails';

const NotificationData=[
    {name:"aziz",type:"like",id:"01",},
    {name:"aziz",type:"comment",id:"02",},
    {name:"aziz",type:"comment",id:"03",},
    {name:"aziz",id:"04",type:"like",},
    {name:"aziz",type:"comment",id:"05",},
    {name:"aziz",id:"06",type:"like",},
    {name:"aziz",type:"comment",id:"07",},
    {name:"aziz",id:"08",type:"like",},
    {name:"aziz",type:"comment",id:"09",},
    {name:"aziz",id:"10",type:"like",},
];

const Notification = () => {
    return (
        <ScrollView>
          { NotificationData.map(notification=><NotificationDetails notification={notification} key={notification.id} ></NotificationDetails>)}
        </ScrollView>
    )
}

export default Notification;

const styles = StyleSheet.create({})
