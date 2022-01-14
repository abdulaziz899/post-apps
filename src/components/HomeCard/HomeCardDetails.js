import React from 'react'
import { View, StyleSheet,Text,Image

} from 'react-native'
import { Entypo,AntDesign ,FontAwesome5,MaterialCommunityIcons} from '@expo/vector-icons';

const HomeCardDetails = (props) => {
const {name, descriptions}=props.data;
    return (
        <View style={styles.container}>
           <View style={styles.profile}>
                <View style={{flexDirection:"row",alignItems:"center",marginTop:10}}>
                    <Image source={{uri: 'https://reactjs.org/logo-og.png'}}
                            style={{width: 50, height: 50,borderRadius: 50,borderWidth: 1,borderColor:'#fff'
                            }} />
                    <Text style={styles.profileText}> {name}</Text>
                </View>
                <View>
                    <Entypo style={{marginRight:10}} name="dots-three-vertical" size={20} color="#A9AAAC" />   
                </View>
            </View>
            <View style={styles.description}>
                 <Text  style={{width:"100%",height:"100%",justifyContent:"center",alignItems:"center",padding:10}}>
                {descriptions}
                </Text>
            </View>
            <View style={{flexDirection:"row",width:"100%",height:"20%",borderColor:"#A9AAAC",borderBottomWidth:.25, justifyContent:"space-between",alignItems:"center"}}>
                            <Text style={{marginLeft:10,color:"#0D8AF0"}}>
                                100 liked
                            </Text>
                            <Text style={{marginRight:10,}}>
                                100 comments
                            </Text>
                        </View>
                        <View style={{flexDirection:"row",width:"100%",height:"20%",justifyContent:"space-between",alignItems:"center",}}>
                            <View style={{flexDirection:"row",marginLeft:10}}>
                                <AntDesign name="hearto" size={24} color="#0D8AF0"/>
                                <Text style={{marginLeft:5,color:"#0D8AF0"}}>Like</Text>
                            </View>
                            <View style={{flexDirection:"row",marginRight:10}}>
                            <FontAwesome5 name="comment-dots" size={24} color="#A9AAAC" />
                                <Text style={{marginLeft:5 ,}}>comments</Text>
                            </View>
                        </View>
        </View>
    )
}

export default HomeCardDetails;

const styles = StyleSheet.create({

    container:{ 
        width:"100%", 
        height:300,
        elevation:4,
        padding:10,
        backgroundColor:"#FFFFFF",
        marginBottom:5,
        paddingBottom:"9%",
        borderRadius:10,
        marginTop:5
     
    },
  
    profile:{
        flexDirection:'row',
        width:"100%",
        height:"15%",
        alignItems:"center",
        justifyContent:"space-between",
    },
    profileText:{
        marginLeft:12,
        color:"#A9AAAC",
        fontWeight:"bold",
        fontSize:16,
    },
    description:{
        height:"55%",
        width:"100%", 
        marginTop:3,
       
    }
})
