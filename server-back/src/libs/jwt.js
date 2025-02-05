import {TOKEN_SECRET} from '../config.js' 
import jwt from 'jsonwebtoken'

export function createAccesToken(payload){
   return new Promise((resolve,reject) =>{
        jwt.sign(
            payload, 
        TOKEN_SECRET,// secretkey para leer el contenido
        {
            expiresIn: "1d"
        },// expiracion 
         (err,token) =>{ // esto es una callback
            if(err) reject(err);
            resolve(token)
         }
            );
    }
)}
    
