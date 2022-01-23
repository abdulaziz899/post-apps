import React from 'react';
import { View,Text, TouchableOpacity } from 'react-native';
import { MaterialIcons,Feather,Ionicons,EvilIcons } from '@expo/vector-icons';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { useNavigation } from '@react-navigation/native';


import Home from './src/components/Home/Home';
import Search from "./src/components/TobBarNavigationDetails/Search/Search"
import Message from './src/components/BottomNavigationDetail/Message/Message';
import CreatePost from './src/components/BottomNavigationDetail/CreatePost/CreatePost';
import Notification from './src/components/BottomNavigationDetail/Notification/Notification';
import Menu from './src/components/BottomNavigationDetail/Menu/Menu';
import Money from './src/components/TobBarNavigationDetails/Money/Money';
import Profile from './src/components/TobBarNavigationDetails/Profile/Profile';
import Header from './src/components/Header/Header';
import Follower from './src/components/MenuBarDetail/Follower/Follower';
import AddPayment from './src/components/MenuBarDetail/AddPayment/AddPayment';
import Setting from './src/components/MenuBarDetail/Setting/Setting';
import Faq from './src/components/MenuBarDetail/Faq/Faq';
import WithDraw from './src/components/MenuBarDetail/WithDraw/WithDraw';
import SingleMessage from './src/components/BottomNavigationDetail/Message/SingleMessage';


const Stack = createNativeStackNavigator();
const Tab = createBottomTabNavigator();

const RootHome=()=>{
  return(
    <Tab.Navigator
    screenOptions={({ route }) => ({
      tabBarIcon: ({ focused, color, size,tintColor }) => {
        let iconName;

        if (route.name === 'home') {
          iconName="home" 
        } else if (route.name === 'Message') {
          iconName="message" 
        }
        else if (route.name === 'Post') {
          iconName="Post" 
        }
        else if (route.name === 'Notification') {
          iconName="notifications-none" 
        }
        else if (route.name === 'menu') {
          iconName="menu" 
        }
        
        return route.name === 'Post'?<Feather name="plus-circle" size={30} color={color} /> : <MaterialIcons name={iconName} size={29} color={color} />;
      },
      tabBarActiveTintColor: '#1877F2',
      tabBarInactiveTintColor: 'gray',
      tabBarShowLabel:false,
      
    })}
    >
        <Tab.Screen options={{
          title: 'home',
          headerLeft:()=>{
            return<Header></Header>
          }
          }} name="home" component={Home} />
        <Tab.Screen options={{
          title: 'Message',
           headerTitleStyle: {
            width:140,
            marginLeft:60,
            alignItems:"center"
          },
          headerLeft:()=>{
          const navigation = useNavigation();
            return<TouchableOpacity onPress={()=>navigation.goBack()} style={{
                                width:60,
                                height:50,
                                marginLeft:5,
                                alignItems:"center",
                                paddingTop:15, 
                              }}
                                
                                >
                             <Ionicons name="arrow-back-sharp" size={24} color="#A9AAAC" />   
                  </TouchableOpacity>},
       
        }} name="Message" component={Message} />
        <Tab.Screen options={{
          title: 'Create Post',
           headerTitleStyle: {
            width:140,
            marginLeft:60,
            alignItems:"center"
          },
          headerLeft:()=>{
          const navigation = useNavigation();
            return<TouchableOpacity onPress={()=>navigation.goBack()} style={{
                                width:60,
                                height:50,
                                marginLeft:5,
                                alignItems:"center",
                                paddingTop:15}}
                                
                                >
                             <Ionicons name="arrow-back-sharp" size={24} color="#A9AAAC" />   
                  </TouchableOpacity>},
       
        }} name="Post" component={CreatePost} />
        <Tab.Screen options={{
          title: 'Notification',
           headerTitleStyle: {
            width:140,
            marginLeft:60,
            alignItems:"center"
          },
          headerLeft:()=>{
          const navigation = useNavigation();
            return<TouchableOpacity onPress={()=>navigation.goBack()} style={{
                                width:60,
                                height:50,
                                marginLeft:5,
                                alignItems:"center",
                                paddingTop:15}}
                                
                                >
                             <Ionicons name="arrow-back-sharp" size={24} color="#A9AAAC" />   
                  </TouchableOpacity>},
       
        }} name="Notification" component={Notification} />
        <Tab.Screen options={{
          title: ' ',
           headerTitleStyle: {
            width:140,
            marginLeft:60,
            alignItems:"center"
          },
          headerLeft:()=>{
          const navigation = useNavigation();
            return<TouchableOpacity onPress={()=>navigation.goBack()} style={{
                                width:60,
                                height:50,
                                marginLeft:5,
                                alignItems:"center",
                                paddingTop:15}}
                                
                                >
                             <Ionicons name="arrow-back-sharp" size={24} color="#A9AAAC" />   
                  </TouchableOpacity>},
                  headerRight:()=>{
                    const navigation = useNavigation();
                      return<TouchableOpacity onPress={()=>navigation.navigate("ProfilesStack")} style={{
                                          width:60,
                                          height:50,
                                          marginLeft:5,
                                          alignItems:"center",
                                          paddingTop:10}}
                                          >
                                       <EvilIcons name="user" size={40} color="#A9AAAC" />   
                            </TouchableOpacity>},
       
        }} name="menu" component={Menu} />
    </Tab.Navigator>
  )
}

const ProfilesStack=()=>{
  return (
          <Stack.Navigator >
            <Stack.Screen name="Profile" component={Profile} />
          </Stack.Navigator>
          )
};

export default function App() {
  return (
    <NavigationContainer>
         <Stack.Navigator  screenOptions={{
           headerShown: false,
           }}>
          <Stack.Screen name="Home" component={RootHome} />
          <Stack.Screen name="Search" component={Search} />
          <Stack.Screen name="Money" component={Money} />
          <Stack.Screen name="Follower" component={Follower} />
          <Stack.Screen name="AddPayment" component={AddPayment} />
          <Stack.Screen name="WithDraw" component={WithDraw} />
          <Stack.Screen name="Setting" component={Setting} />
          <Stack.Screen name="Faq" component={Faq} />
          <Stack.Screen name="SingleMessage" component={SingleMessage} />
          <Stack.Screen name="ProfilesStack" component={ProfilesStack} />
       </Stack.Navigator>
    </NavigationContainer>
  );
}

