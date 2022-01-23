import React from 'react'
import { StyleSheet, Text, View,ScrollView,TextInput } from 'react-native';
import {Ionicons} from '@expo/vector-icons';
import { useNavigation } from '@react-navigation/native';
import Constant from "expo-constants";
import SingleMessageDetail from './SingleMessageDetail';
import ChatDetail from './ChatDetail';

const chat=[
    {
        name:"abdul aziz", 
        id:"01",
       chat1:"hi "
    },
    {
        name:"abdul aziz", 
        id:"02",
       chat2:"hello "
    },
    {
        name:"abdul aziz", 
        id:"03",
       chat1:"how are you "
    },
    {
        name:"abdul aziz", 
        id:"04",
       chat2:"fine an you "
    },
    {
        name:"abdul aziz", 
        id:"05",
       chat1:"I also fine"
    },
    {
        name:"abdul aziz", 
        id:"06",
       chat2:"what are you doing"
    },
    {
        name:"abdul aziz", 
        id:"07",
       chat1:"nothing and you "
    },
    {
        name:"abdul aziz", 
        id:"08",
       chat2:"nothing "
    },
    {
        name:"abdul aziz", 
        id:"09",
       chat1:"thank "
    },
    {
        name:"abdul aziz", 
        id:"10",
        chat2:"thanks"
    },
    {
        name:"abdul aziz", 
        id:"11",
       chat1:"thank "
    },
    {
        name:"abdul aziz", 
        id:"12",
        chat2:"thanks"
    },
    {
        name:"abdul aziz", 
        id:"13",
       chat1:"thank "
    },
    {
        name:"abdul aziz", 
        id:"14",
        chat2:"thanks"
    },
    {
        name:"abdul aziz", 
        id:"15",
       chat1:"thank "
    },
    {
        name:"abdul aziz", 
        id:"16",
        chat2:"thanks"
    },
]


const message=[
    {
        name:"abdul aziz", 
        id:"01",
        img:"https://scontent.fdac24-1.fna.fbcdn.net/v/t39.30808-1/p160x160/233261994_1434458106933405_4025927229858331969_n.jpg?_nc_cat=108&ccb=1-5&_nc_sid=7206a8&_nc_eui2=AeGWgVbELLB_KEG8_fJryYboDFQLDWggWfMMVAsNaCBZ89xLC07FeQs7OURZDdCwXzHoYNplORVOco_b4badarIH&_nc_ohc=ByM94RRyLu0AX_H21tt&_nc_ht=scontent.fdac24-1.fna&oh=00_AT_P1wsl13IAv2Oi9pWj5ZdF1Dw2pzK81aMeO4JGQgZEgw&oe=61ED576C",
    },
]


const SingleMessage = () => {
    //const {name, id, img}=props.message;
   
   
    const color="#A9AAAC";
    const navigation = useNavigation();
    
    return (
       <View>
           <View style={{flexDirection:"row",elevation:4,alignItems:"center",borderBottomLeftRadius:1,borderBottomRightRadius:1, borderColor:"#A9AAAC", height:60,marginTop:Constant.statusBarHeight,backgroundColor:"#FFFFFF",}}>
                <Ionicons onPress={()=>navigation.goBack()} style={{width:"15%",height:40,marginLeft:5,paddingLeft:10,paddingTop:5,}} name="arrow-back-outline" size={28} color="#A9AAAC" />
                <View style={{width:"80%",flexDirection:"row",alignItems:"center",justifyContent:"flex-end",}}>
                {message.map(message=><SingleMessageDetail message={message} key={message.id}></SingleMessageDetail>)}
                </View>
            </View>
                <ScrollView style={{width:"100%",height:"80%",backgroundColor:"#FFFFFF"}}>
                    {chat.map(chat=><ChatDetail chat={chat} key={chat.id}></ChatDetail>)}
                </ScrollView>
                <View style={{width:"100%",height:"8%",backgroundColor:"#FFFFFF",flexDirection:"row",justifyContent:"space-between",alignItems:"center"}}>
                    <TextInput placeholder="Type Here..." style={{backgroundColor:"#D5DAE3",width:"80%",marginLeft:15,borderRadius:5,height:45,paddingLeft:10}}/>
                    <Ionicons style={{width:"15%",height:"100%",paddingTop:16, paddingLeft:10}} name="send-outline" size={24} color="#A9AAAC" />
                </View>
        </View>
    )
    }

export default SingleMessage;


const styles = StyleSheet.create({
    container:{
        backgroundColor:"#FFFFFF",
        justifyContent:"space-between",
        alignItems:"center",
        flexDirection:"row",
        width:"100%"
}
})