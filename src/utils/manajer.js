import CryptoJS from "crypto-js";

export function getToken(){

    return localStorage.getItem('token')

}

export function getRol(){
    return localStorage.getItem('rol');
}

export function setTokenLocalStorage(token){
    return localStorage.setItem('token',token);
}

export function setRolLocalStorage(rol){
    let rolAux = CryptoJS.AES.encrypt(rol.toString(), 'p@t&t02023').toString();
    localStorage.setItem('rol',rolAux);
}