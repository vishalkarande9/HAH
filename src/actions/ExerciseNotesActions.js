import { Actions } from 'react-native-router-flux';
import axios from 'axios';
import _ from 'lodash';

import {
    GET_EXERCISE_NOTES,
    SET_EXERCISE_NOTES 
       
       } from './types';


export const initializeexerciseNotes = (userId,date) => {
    return (dispatch) => {  

        axios({
            method: "get",
            url: "http://10.0.0.241:5000/exercisenotes",
            headers : {'Content-type': 'application/json'}, 
            params : {
                'userId':userId,
                'date':date
            }
        
        }).then(function(response) {
            
            if (response.data.code === 400) {
                console.log("Server responds with code 400 for exercise Notes get");

            } else {        
                dispatch({ type: GET_EXERCISE_NOTES, payload: response.data.data })
            }
            
        }).catch((e) => {
            console.log("inside catch of exercise notes get");
        })
};
};  

export const submitexerciseNotes = (userId,date,text) => {
    return (dispatch) => {  

        axios({
            method: "post",
            url: "http://10.0.0.241:5000/exercisenotes",
            headers : {'Content-type': 'application/json'}, 
            data : {
                'userId':userId,
                'date':date,
                'note': text
            }
        
        }).then(function(response) {
            
            if (response.data.code === 400) {
                console.log("Server responds with code 400 for exercise Notes post");

            } else {  
                dispatch({ type: SET_EXERCISE_NOTES, payload:text })
                Actions.home();      

            }
            
        }).catch((e) => {
            console.log("inside catch of exercise notes post");
        })
};
}; 


