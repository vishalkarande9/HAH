import React from 'react';
import {View} from 'react-native';



// create a new component
const Card = (props) => {
  return(
    <View style={styles.containerStyle}>
         {props.children}
    </View>    
  )     
}; 

const styles={ 
    containerStyle:{
        borderWidth:1,
        borderRadius: 5,
        borderColor:'#ddd',
        borderBottomWidth:0,
        shadowColor:'#000',
        shadowOffset:{width:0,height:0},
        shadowOpacity:0.1,
        shadowRadius:2,
        elevation:10,
        marginLeft:5,
        marginRight:5,
        marginTop:10
    }
};

//render that component to our device
export { Card };