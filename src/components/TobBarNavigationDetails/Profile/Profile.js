import React from 'react'
import { StyleSheet,Image, Text, View ,ScrollView} from 'react-native';
import { Entypo } from '@expo/vector-icons';
import Home from '../../Home/Home';
import HomeCard from '../../HomeCard/HomeCard';

const Profile = () => {
    return (
        <ScrollView>
                <View style={{flexDirection:"row",justifyContent:"center"}}>
                <Image source={{uri: 'https://reactjs.org/logo-og.png'}}
                style={{width:150, height:150,borderRadius:150}} />
                </View>
               <Entypo name="camera" size={24} color="#A9AAAC" style={{marginTop:-30,marginLeft:185,}} />
                <View style={{paddingTop:10,color:"#A9AAAC",flexDirection:"row",justifyContent:"center"}}>
                    <Text style={{paddingTop:5}}>MD ABDUL AZIZ</Text>
                </View>
                <View style={styles.following}>
                    <View style={styles.followingBox}>
                        <Text>100 </Text>
                        <Text>Following</Text>
                    </View>
                    <View style={styles.followingBox}>
                        <Text>100 </Text>
                        <Text>Follower</Text>
                    </View>
                    <View style={styles.followingBox}>
                        <Text>100 </Text>
                        <Text>liked</Text>
                    </View>
                </View>
                <ScrollView>
                    <Text style={{fontSize:17, color:"#A9AAAC",  padding:10,}}>Your Previous Post</Text>
                    <HomeCard></HomeCard>
                </ScrollView>
        </ScrollView>
    )
}

export default Profile

const styles = StyleSheet.create({
    container:{
        justifyContent:"center",
        alignItems:"center",
        paddingTop:30
    },
    following:{
        justifyContent:"space-between",
        alignItems:"center",
        flexDirection:"row",
        paddingTop:30,
        width:"100%",
    },
    followingBox:{
        width:"30%",
        height:"100%",
        padding:5,
        paddingLeft:35,
        color:"#A9AAAC",
        borderWidth:0.4,
        borderColor:"#A9AAAC"
    }
})
