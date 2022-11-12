import React, { Component } from 'react'
import { TouchableOpacity,Text, View } from 'react-native'
//import {TouchableOpacity, Text, View} from 'react-native'
import { connect } from 'react-redux'
import { widthPercentageToDP } from 'react-native-responsive-screen' 
import { StyleSheet} from 'react-native'


const CustomBtn = (props) =>{
    return( 
        <>
           <View style={StyleSheet.container}>
             <TouchableOpacity onPress={()=> props.onPress?.()}
             style={StyleSheet.button}>
               <Text style={styles.buttonText}>{"Demo 1-Bilster Idetifer"}</Text>            
             </TouchableOpacity>
            </View>
        </>
    )
}


const styles = StyleSheet.create({
    container:{
        padding:15
    },
    button:{
        borderRadius:10,
        padding:10,
        backgroundColor:'red',
        justifyContent:'center',
        alignItems:'center'
    },
    buttonText:{
        color:'#fff'
    }
})

export default connect(state => state)(CustomBtn)



