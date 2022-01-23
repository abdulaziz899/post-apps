import { useNavigation } from '@react-navigation/native';
import React from 'react'
import { StyleSheet, Text, View,ScrollView } from 'react-native';

const ChatDetail = (props) => {
    const{name,chat1,chat2}=props.chat;
    const navigation=useNavigation(); 
    return (
        <View style={{ height:30,width:"90%",marginTop:10,marginLeft:20,marginBottom:10}}>
           {chat1&& <View style={{flexDirection:"row",height:"100%",marginLeft:10,alignItems:"center", justifyContent:"flex-start",}}>
               <Text style={{color:"#FFFFFF",borderRadius:50,backgroundColor:"#88C6FC",padding:10,fontSize:15,}}>{chat1}</Text>
               </View>}
           {chat2&& <View style={{flexDirection:"row",height:"100%",alignItems:"center",  justifyContent:"flex-end"}}>
               <Text style={{color:"#FFFFFF",borderRadius:50,fontSize:15,padding:10,backgroundColor:"#017AF6"}} >{chat2}</Text>
               </View>}
        </View>
    )
}

export default ChatDetail;