import React from 'react'
import { StyleSheet, Text, View, ScrollView } from 'react-native';
import MessageDetails from './MessageDetails';

const message=[
    {
        name:"abdul aziz", 
        id:"01",
        img:"https://scontent.fdac24-1.fna.fbcdn.net/v/t39.30808-1/p160x160/233261994_1434458106933405_4025927229858331969_n.jpg?_nc_cat=108&ccb=1-5&_nc_sid=7206a8&_nc_eui2=AeGWgVbELLB_KEG8_fJryYboDFQLDWggWfMMVAsNaCBZ89xLC07FeQs7OURZDdCwXzHoYNplORVOco_b4badarIH&_nc_ohc=ByM94RRyLu0AX_H21tt&_nc_ht=scontent.fdac24-1.fna&oh=00_AT_P1wsl13IAv2Oi9pWj5ZdF1Dw2pzK81aMeO4JGQgZEgw&oe=61ED576C",
    },
    {
        name:"abdul aziz", 
        id:"02",
        img:"https://scontent.fdac24-1.fna.fbcdn.net/v/t39.30808-1/p160x160/233261994_1434458106933405_4025927229858331969_n.jpg?_nc_cat=108&ccb=1-5&_nc_sid=7206a8&_nc_eui2=AeGWgVbELLB_KEG8_fJryYboDFQLDWggWfMMVAsNaCBZ89xLC07FeQs7OURZDdCwXzHoYNplORVOco_b4badarIH&_nc_ohc=ByM94RRyLu0AX_H21tt&_nc_ht=scontent.fdac24-1.fna&oh=00_AT_P1wsl13IAv2Oi9pWj5ZdF1Dw2pzK81aMeO4JGQgZEgw&oe=61ED576C",
    },
    {
        name:"abdul aziz", 
        id:"03",
        img:"https://scontent.fdac24-1.fna.fbcdn.net/v/t39.30808-1/p160x160/233261994_1434458106933405_4025927229858331969_n.jpg?_nc_cat=108&ccb=1-5&_nc_sid=7206a8&_nc_eui2=AeGWgVbELLB_KEG8_fJryYboDFQLDWggWfMMVAsNaCBZ89xLC07FeQs7OURZDdCwXzHoYNplORVOco_b4badarIH&_nc_ohc=ByM94RRyLu0AX_H21tt&_nc_ht=scontent.fdac24-1.fna&oh=00_AT_P1wsl13IAv2Oi9pWj5ZdF1Dw2pzK81aMeO4JGQgZEgw&oe=61ED576C",
    },
    {
        name:"abdul aziz", 
        id:"04",
        img:"https://scontent.fdac24-1.fna.fbcdn.net/v/t39.30808-1/p160x160/233261994_1434458106933405_4025927229858331969_n.jpg?_nc_cat=108&ccb=1-5&_nc_sid=7206a8&_nc_eui2=AeGWgVbELLB_KEG8_fJryYboDFQLDWggWfMMVAsNaCBZ89xLC07FeQs7OURZDdCwXzHoYNplORVOco_b4badarIH&_nc_ohc=ByM94RRyLu0AX_H21tt&_nc_ht=scontent.fdac24-1.fna&oh=00_AT_P1wsl13IAv2Oi9pWj5ZdF1Dw2pzK81aMeO4JGQgZEgw&oe=61ED576C",
    },
    {
        name:"abdul aziz", 
        id:"05",
        img:"https://scontent.fdac24-1.fna.fbcdn.net/v/t39.30808-1/p160x160/233261994_1434458106933405_4025927229858331969_n.jpg?_nc_cat=108&ccb=1-5&_nc_sid=7206a8&_nc_eui2=AeGWgVbELLB_KEG8_fJryYboDFQLDWggWfMMVAsNaCBZ89xLC07FeQs7OURZDdCwXzHoYNplORVOco_b4badarIH&_nc_ohc=ByM94RRyLu0AX_H21tt&_nc_ht=scontent.fdac24-1.fna&oh=00_AT_P1wsl13IAv2Oi9pWj5ZdF1Dw2pzK81aMeO4JGQgZEgw&oe=61ED576C",
    },
    {
        name:"abdul aziz", 
        id:"06",
        img:"https://scontent.fdac24-1.fna.fbcdn.net/v/t39.30808-1/p160x160/233261994_1434458106933405_4025927229858331969_n.jpg?_nc_cat=108&ccb=1-5&_nc_sid=7206a8&_nc_eui2=AeGWgVbELLB_KEG8_fJryYboDFQLDWggWfMMVAsNaCBZ89xLC07FeQs7OURZDdCwXzHoYNplORVOco_b4badarIH&_nc_ohc=ByM94RRyLu0AX_H21tt&_nc_ht=scontent.fdac24-1.fna&oh=00_AT_P1wsl13IAv2Oi9pWj5ZdF1Dw2pzK81aMeO4JGQgZEgw&oe=61ED576C",
    },
    {
        name:"abdul aziz", 
        id:"07",
        img:"https://scontent.fdac24-1.fna.fbcdn.net/v/t39.30808-1/p160x160/233261994_1434458106933405_4025927229858331969_n.jpg?_nc_cat=108&ccb=1-5&_nc_sid=7206a8&_nc_eui2=AeGWgVbELLB_KEG8_fJryYboDFQLDWggWfMMVAsNaCBZ89xLC07FeQs7OURZDdCwXzHoYNplORVOco_b4badarIH&_nc_ohc=ByM94RRyLu0AX_H21tt&_nc_ht=scontent.fdac24-1.fna&oh=00_AT_P1wsl13IAv2Oi9pWj5ZdF1Dw2pzK81aMeO4JGQgZEgw&oe=61ED576C",
    },
    {
        name:"abdul aziz", 
        id:"08",
        img:"https://scontent.fdac24-1.fna.fbcdn.net/v/t39.30808-1/p160x160/233261994_1434458106933405_4025927229858331969_n.jpg?_nc_cat=108&ccb=1-5&_nc_sid=7206a8&_nc_eui2=AeGWgVbELLB_KEG8_fJryYboDFQLDWggWfMMVAsNaCBZ89xLC07FeQs7OURZDdCwXzHoYNplORVOco_b4badarIH&_nc_ohc=ByM94RRyLu0AX_H21tt&_nc_ht=scontent.fdac24-1.fna&oh=00_AT_P1wsl13IAv2Oi9pWj5ZdF1Dw2pzK81aMeO4JGQgZEgw&oe=61ED576C",
    },
    {
        name:"abdul aziz", 
        id:"09",
        img:"https://scontent.fdac24-1.fna.fbcdn.net/v/t39.30808-1/p160x160/233261994_1434458106933405_4025927229858331969_n.jpg?_nc_cat=108&ccb=1-5&_nc_sid=7206a8&_nc_eui2=AeGWgVbELLB_KEG8_fJryYboDFQLDWggWfMMVAsNaCBZ89xLC07FeQs7OURZDdCwXzHoYNplORVOco_b4badarIH&_nc_ohc=ByM94RRyLu0AX_H21tt&_nc_ht=scontent.fdac24-1.fna&oh=00_AT_P1wsl13IAv2Oi9pWj5ZdF1Dw2pzK81aMeO4JGQgZEgw&oe=61ED576C",
    },
    {
        name:"abdul aziz", 
        id:"10",
        img:"https://scontent.fdac24-1.fna.fbcdn.net/v/t39.30808-1/p160x160/233261994_1434458106933405_4025927229858331969_n.jpg?_nc_cat=108&ccb=1-5&_nc_sid=7206a8&_nc_eui2=AeGWgVbELLB_KEG8_fJryYboDFQLDWggWfMMVAsNaCBZ89xLC07FeQs7OURZDdCwXzHoYNplORVOco_b4badarIH&_nc_ohc=ByM94RRyLu0AX_H21tt&_nc_ht=scontent.fdac24-1.fna&oh=00_AT_P1wsl13IAv2Oi9pWj5ZdF1Dw2pzK81aMeO4JGQgZEgw&oe=61ED576C",
    },
]

const Message = () => {
    return (
        <ScrollView>
            {message.map(message=><MessageDetails message={message} key={message.id}></MessageDetails>)}
        </ScrollView>
    )
}

export default Message;

const styles = StyleSheet.create({})
