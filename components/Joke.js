import React from 'react'
import {
    SafeAreaView,
    ScrollView,
    StatusBar,
    StyleSheet,
    Text,
    useColorScheme,
   
    Button,
    Image,
  } from 'react-native';
  import { Card,
    CardItem,
    Header,
    H1,
    Content,
} from 'native-base';

import moment from 'moment';
import avtar from '../assets/images/avatar-icon.png'

  const Joke = ({details}) => {
      return(
          <Card style={styles.card}>
             <CardItem cardBody style={styles.cardItem}>
                <Image 
                // source={{
                // uri:details.icon_url,
                // width:150,
                // height:250,
                // }}
                source={require('../assets//images/avatar-icon.png')}
                style={styles.image}
                />
            </CardItem>
            <CardItem cardBody style={styles.cardItem}>
                <H1 style={{color:'#fff',textAlign:'center',justifyContent:'center',margin:10}}>{details.value}</H1>
            </CardItem>
            </Card>
      )
  }

  export default Joke

  const styles = StyleSheet.create({
      card:{
          width:'90%',
          justifyContent:'flex-start',
          alignItems:'center',
          backgroundColor:'#4f8a8b',
          borderColor:'#4f8a8b',
          borderWidth:2,
          marginLeft:20

      },
      cardItem:{
          backgroundColor:'#4f8a8b',
      },
      image:{
          width:150,
          height:150,
          borderRadius:150/2,
          overflow:'hidden',
          borderWidth:3,
          borderColor:'#fbd46d',
          marginTop:-50,
      },
      text:{
          color:'#eeeeee',
          borderBottomColor:'#ffffff',
          borderBottomWidth:0.5
      },
  })