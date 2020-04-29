import React, { Component } from "react";
import { View, StyleSheet,Text,Image,Button,hairlineWidth,Dimensions ,TouchableOpacity} from "react-native";
import { createAppContainer, createSwitchNavigator } from 'react-navigation';
import { createBottomTabNavigator } from 'react-navigation-tabs';
import { createStackNavigator } from 'react-navigation-stack';
import config from './config'
export default  class InstaClone extends React.Component{
    constructor(){
        super()
        this.state={
            screenWidth:null,
            liked:false
        }
    }
    componentDidMount(){
       this.setState({
         screenWidth:Dimensions.get('window').width
       })

    }
    likedToggled(){
        this.setState({
            liked:!this.state.liked
        })
    }
    render(){
        const heartColor =this.state.liked ? 'rgb(252,61,57)':null;
        return(
            <View style={{flex:1,width:100+'%',height:100+'%'}}>
             <View style={styles.tempNav}>
                <Text>Instagram</Text>
              </View>
             <View style={styles.userBar}>
              <View style={{flexDirection:"row",alignItems:"center"}}>
               <Image style={styles.userPic} source={require('../src/icon/image_17.jpg')} />
                 <Text style={{marginLeft:10}}>Marwa Rjili</Text>
              </View>
               <View>
                  <Text style={{fontSize:36,paddingHorizontal:190}}>...</Text>
               </View>
              </View>
              <TouchableOpacity onPress={()=>{this.likedToggled()}} activeOpacity={0.8}>
              <Image style={{width:this.state.screenWidth,height:400}} source={require('../src/icon/image_2.jpg')} />
               </TouchableOpacity>
              <View style={styles.iconBar}>
               <Image style={[styles.icon,{height:40,width:40,tintColor:heartColor}]} source={config.images.heartIcon} />
               <Image style={[styles.icon,{height:36,width:36}]} source={config.images.chatIcon} />
               <Image style={[styles.icon,{height:40,width:30}]} source={config.images.arrowIcon} />
              </View>
               <View style={styles.iconBar}>
                 <Image style={[styles.icon,{height:30,width:30,tintColor:heartColor}]} source={config.images.heartIcon} />
                  <Text>128 likes</Text>
                </View>
               </View>
        );
    }
}

const styles= StyleSheet.create({
    tempNav:{
     width:100+'%',
     height:56,
     marginTop:20,
     backgroundColor:"rgb(255,255,255)",
     borderBottomWidth:StyleSheet.hairlineWidth,
     borderBottomColor:"rgb(233,33,233)",
     justifyContent:"center",
     alignItems:"center"

    },
    userBar:{
     width:100+ '%',
     height:config.styleConstants.rowHeight,
     backgroundColor:"rgb(255,255,255)",
     flexDirection:'row',
     borderBottomWidth:StyleSheet.hairlineWidth,
     borderBottomColor:"rgb(255,255,255)",
     justifyContent:"space-betwwen",
     paddingHorizontal:10,
    },
    userPic:{
        width:40,
        height:40,
        borderRadius:20
    },
    iconBar:{
        height:config.styleConstants.rowHeight,
        width:100+'%',
        borderTopWidth:StyleSheet.hairlineWidth,
        borderBottomWidth:StyleSheet.hairlineWidth,
        borderTopColor:"rgb(233,33,233)",
        flexDirection:'row'
    },
    icon:{
        paddingHorizontal:10,
        marginLeft:5
    },
    commentBar:{
        width:100+'%',
        height:config.styleConstants.rowHeight,
        borderTopWidth:StyleSheet.hairlineWidth,
        borderBottomWidth:StyleSheet.hairlineWidth,
        borderColor:"rgb(233,33,233)"
    }
});