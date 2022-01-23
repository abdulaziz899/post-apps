import React from 'react'
import { StyleSheet, Text, View,ScrollView } from 'react-native';
import { Ionicons,FontAwesome } from '@expo/vector-icons';
import { useNavigation } from '@react-navigation/native';
import Constant from "expo-constants";
import FollowerDetail from './FollowerDetail';


const follower=[
    {
        name:"aziz",
        id:"1",
        img:"https://reactjs.org/logo-og.png",
        type:"follower"
    },
    {
        name:"aziz2",
        id:"2",
        img:"https://reactjs.org/logo-og.png",
        type:"Unfollower"
    },
        
        {
        name:"aziz3",
        id:"3",
        img:"https://reactjs.org/logo-og.png",
        type:"follower"
    },
    {
        name:"aziz4",
        id:"4",
        img:"https://reactjs.org/logo-og.png",
        type:"Unfollower"
      },
    {
        name:"aziz5",
        id:"5",
        img:"https://reactjs.org/logo-og.png",
        type:"Unfollower",
      },
      {
        name:"aziz",
        id:"6",
        img:"https://reactjs.org/logo-og.png",
        type:"follower"
    },
    {
        name:"aziz2",
        id:"7",
        img:"https://reactjs.org/logo-og.png",
        type:"Unfollower"
    },
        
        {
        name:"aziz3",
        id:"8",
        img:"https://reactjs.org/logo-og.png",
        type:"follower"
    },
    {
        name:"aziz4",
        id:"9",
        img:"https://reactjs.org/logo-og.png",
        type:"Unfollower"
      },
       
      {
        name:"aziz3",
        id:"10",
        img:"https://reactjs.org/logo-og.png",
        type:"follower"
    },
    {
        name:"aziz4",
        id:"11",
        img:"https://reactjs.org/logo-og.png",
        type:"Unfollower"
      },
       
      {
        name:"aziz3",
        id:"12",
        img:"https://reactjs.org/logo-og.png",
        type:"follower"
    },
    {
        name:"aziz4",
        id:"13",
        img:"https://reactjs.org/logo-og.png",
        type:"Unfollower"
      },
       
      {
        name:"aziz3",
        id:"14",
        img:"https://reactjs.org/logo-og.png",
        type:"follower"
    },
    {
        name:"aziz4",
        id:"15",
        img:"https://reactjs.org/logo-og.png",
        type:"Unfollower"
      },
       
      {
        name:"aziz3",
        id:"16",
        img:"https://reactjs.org/logo-og.png",
        type:"follower"
    },
    {
        name:"aziz4",
        id:"17",
        img:"https://reactjs.org/logo-og.png",
        type:"Unfollower"
      },
       
      {
        name:"aziz3",
        id:"18",
        img:"https://reactjs.org/logo-og.png",
        type:"follower"
    },
    {
        name:"aziz4",
        id:"19",
        img:"https://reactjs.org/logo-og.png",
        type:"Unfollower"
      },
    

]

const Follower = () => {
    const navigation=useNavigation(); 
    return (
        <>
        <View>
           <View style={{flexDirection:"row",elevation:4,alignItems:"center",borderBottomLeftRadius:1,borderBottomRightRadius:1, borderColor:"#A9AAAC", height:60,marginTop:Constant.statusBarHeight,backgroundColor:"#FFFFFF",}}>
                <Ionicons onPress={()=>navigation.goBack()} style={{width:"15%",height:40,marginLeft:5,paddingLeft:10,paddingTop:5,}} name="arrow-back-outline" size={28} color="#A9AAAC" />
                <View style={{width:"80%",flexDirection:"row",alignItems:"center",justifyContent:"flex-end"}}>
                    <Text style={{fontSize:17,color:"#A9AAAC",}}>Follower</Text>
                </View>
            </View>
            
        </View>
          <ScrollView>
             {follower.map(follower=><FollowerDetail follower={follower} key={follower.id}></FollowerDetail>)}
          </ScrollView>
        </>
    )
}

export default Follower;

const styles = StyleSheet.create({})
