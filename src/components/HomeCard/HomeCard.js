import React from 'react'
import { StyleSheet, Text, View,Image } from 'react-native';
import { Entypo,AntDesign ,FontAwesome5,MaterialCommunityIcons} from '@expo/vector-icons';

const HomeCard = () => {
    return (
        <View style={styles.container}>
           <View style={styles.profile}>
                <View style={{flexDirection:"row",alignItems:"center",marginLeft:8}}>
                    <Image source={{uri: 'https://reactjs.org/logo-og.png'}}
                            style={{width: 50, height: 50,borderRadius: 50,borderWidth: 1,borderColor:'#fff'
                            }} />
                    <Text style={styles.profileText}>Abdul aziz</Text>
                </View>
                <View>
                    <Entypo style={{marginRight:10}} name="dots-three-vertical" size={20} color="#A9AAAC" />   
                </View>
            </View>
                    <Text style={styles.description}>
                        Remember if you want to give Text 
                    </Text>
                    <Image source={{uri: 'https://reactjs.org/logo-og.png'}}
                        style={{width:"100%", height:350,top:5}} />
                    <View style={{width:"100%",height:"10%",flex:1,top:7}} >
                        <View style={{flexDirection:"row",width:"100%",height:"50%",borderColor:"#A9AAAC",borderBottomWidth:.25, justifyContent:"space-between",marginHorizontal:10, alignItems:"center",}}>
                            <Text>
                                100 liked
                            </Text>
                            <Text style={{marginLeft:10}}>
                                100 comments
                            </Text>
                            <Text style={{marginRight:17,marginLeft:5}}>
                                100 Share
                            </Text>
                        </View>
                        <View style={{flexDirection:"row",width:"100%",height:"50%",flex:1,justifyContent:"space-between",marginHorizontal:15,alignItems:"center", paddingTop:15}}>
                            <View style={{flexDirection:"row",flex:1,}}>
                                <AntDesign name="hearto" size={24} color="#A9AAAC" />
                                <Text style={{marginLeft:5}}>Like</Text>
                            </View>
                            <View style={{flexDirection:"row",flex:1}}>
                            <FontAwesome5 name="comment-dots" size={24} color="#A9AAAC" />
                                <Text style={{marginLeft:5}}>comments</Text>
                            </View>
                            <View style={{flexDirection:"row",flex:1,alignItems:"center",marginRight:-15}}>
                            <MaterialCommunityIcons name="share-outline" size={25} color="#A9AAAC" />
                                <Text style={{marginLeft:3}}>Share</Text>
                            </View>
                        </View>
                </View>
        </View>
    )
}

export default HomeCard;

const styles = StyleSheet.create({
    container:{ 
        flex:1,
        marginBottom:10,
        width:"100%", 
        height:"100%",
        paddingBottom:"15%",
        elevation:4,
        backgroundColor:"#FFFFFF"
    },
    profile:{
        flexDirection:'row',
        width:"100%",
        height:"10%",
        alignItems:"center",
        justifyContent:"space-between"
    },
    profileText:{
        marginLeft:12,
        color:"#A9AAAC",
        fontWeight:"bold",
        fontSize:18,
    },
    description:{
        width:"100%",
        height:"100%",
        flex:1,
    }
})
