import React from 'react'
import { StyleSheet,Image, Text, View } from 'react-native';

import { Entypo,AntDesign,MaterialIcons ,FontAwesome5,MaterialCommunityIcons} from '@expo/vector-icons';


const NotificationDetails = (props) => {
   
    const {name,type}=props.notification;
    return (
        <View style={styles.container}>
            <View style={styles.profile}>
                <View style={{flexDirection:"row",alignItems:"center",justifyContent:"center"}}>
                  <View>
                    <Image source={{uri: 'https://reactjs.org/logo-og.png'}}
                        style={{width: 50, height: 50,borderRadius: 50,borderWidth: 1,borderColor:'#fff'
                        }} />
                  </View>
                    <View>
                         <Text style={styles.profileText}> {name}</Text>
                         <View style={{width:"100%", marginLeft:16,height:"auto",fontSize:13, justifyContent:"center",}}>
                            <Text style={{ color:"#A9AAAC",}}>{type} Your Post</Text>
                         </View>
                    </View>
                </View>
                <View>
                   <MaterialIcons  style={{marginRight:10}} name="message" size={24} color="#A9AAAC" /> 
                </View>
            </View>
            
        </View>
    )
}

export default NotificationDetails;

const styles = StyleSheet.create({
    container:{
        alignItems:"center",
        height:80,
        justifyContent:"center",
        borderWidth:1,
        borderColor:"#F0F0F1",
    },
    profile:{
        flexDirection:'row',
        width:"90%",
        height:"100%",
        alignItems:"center",
        justifyContent:"space-between",
        borderColor:"#A9AAAC",
        borderBottomWidth:.25,
    },
    profileText:{
        marginLeft:12,
        fontWeight:"400",
        fontSize:15,
        marginRight:10,
        color:"black"
    },
})
