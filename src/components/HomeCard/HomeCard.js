import React from 'react'
import { StyleSheet, Text, View,Image } from 'react-native';
import { Entypo,AntDesign ,FontAwesome5,MaterialCommunityIcons} from '@expo/vector-icons';
import HomeCardDetails from './HomeCardDetails';


const data=[
    {
        name:"aziz",
        id:"1",
        descriptions:"Remember if you want to give Text Remember if you want to give Text  Remember if you want to give Text"
    },
    {
        name:"aziz2",
        id:"2",
        descriptions:"Remember if you want to give Text Remember if you want to give Text  Remember if you want to give Text"
    }, {
        name:"aziz3",
        id:"3",
        descriptions:"Remember if you want to give Text Remember if you want to give Text  Remember if you want to give Text"
    },
    {
        name:"aziz4",
        id:"4",
        descriptions:"Remember if you want to give Text Remember if you want to give Text  Remember if you want to give Text"
    },
    {
        name:"aziz5",
        id:"5",
        descriptions:"Remember if you want to give Text Remember if you want Remember if you want to give Text Remember if you want to Remember if you want to give Text Remember if you want to Remember if you want to give Text Remember if you want to to give Text  Remember if you want to give Text"
    },

]

const HomeCard = () => {
   
    return (
        <>
            {
                data.map(data=><HomeCardDetails data={data} key={data.id} />)
            }
        </>
    )
}

export default HomeCard;

const styles = StyleSheet.create({
    container:{ 
        width:"100%", 
        height:400,
        elevation:4,
        padding:10,
        backgroundColor:"#FFFFFF",
        marginBottom:10,
        paddingBottom:"12%",
        borderRadius:10,
        marginTop:10
     
    },
})
