import React from 'react'
import { StyleSheet, Text, View,ScrollView } from 'react-native';
import NotificationDetails from './NotificationDetails';
import { AntDesign,FontAwesome  } from '@expo/vector-icons';

const NotificationData=[
    {name:"aziz",type:"like",id:"01",AntDesign:AntDesign},
    {name:"aziz",type:"comment",id:"02",FontAwesome :FontAwesome },
    {name:"aziz",type:"comment",id:"03",FontAwesome :FontAwesome },
    {name:"aziz",id:"04",type:"like",AntDesign:AntDesign},
    {name:"aziz",type:"comment",id:"05",FontAwesome :FontAwesome },
    {name:"aziz",id:"06",type:"like",AntDesign:AntDesign},
    {name:"aziz",type:"comment",id:"07",FontAwesome :FontAwesome },
    {name:"aziz",id:"08",type:"like",AntDesign:AntDesign},
    {name:"aziz",type:"comment",id:"09",FontAwesome :FontAwesome },
    {name:"aziz",id:"10",type:"like",AntDesign:AntDesign},
    {name:"aziz",id:"11",type:"like",AntDesign:AntDesign},
    {name:"aziz",type:"comment",id:"12",FontAwesome :FontAwesome },
    {name:"aziz",id:"13",type:"like",AntDesign:AntDesign},
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
