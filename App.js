

import React, {useState, useEffect} from 'react';

import {
  SafeAreaView,
  ScrollView,
  StatusBar,
  StyleSheet,
  Text,
  useColorScheme,
  View,
 
} from 'react-native';
import { Button } from 'native-base';
import Joke from './components/Joke';

import axios from 'axios';


const App = () =>{

  const [details, setDetails] = useState(null)
  //const axios = require('axios')
  const fetchDetails = async () => {
    try {
      const {data} = await axios.get('https://api.chucknorris.io/jokes/random')

      const details = data
      setDetails(details)
      //console.log(details.icon_url)
    } catch (error) {
      console.log(error)
    }
  }
  useEffect(() =>{
    fetchDetails()
  },[])

  if(!details){
    return(
      <View style={styles.container}>
      <Text>Loading....</Text>
      </View>
    )
  }else{
    return(
     
      <View  style={styles.container}>
      <Joke details={details} />
      <Button  style={styles.dbutton} onPress={() => fetchDetails()}>
      <Text style={{color:'#fff', paddingLeft
    :30}}>Get a Joke</Text>
      </Button>
      </View>
    )
  }
 
}
export default App;
const styles= StyleSheet.create({
  container:{
    flex:1,
    justifyContent:'center',
    alignContent:'center',
    backgroundColor:'#222831'
  },
  dbutton:{
    marginTop:30,
    paddingHorizontal:30,
    borderRadius:30,
    width:200,
    alignItems:'center',
    marginLeft:80
    
  }
})