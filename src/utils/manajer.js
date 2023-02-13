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

export function decryptRol(){

    const rol = getRol();

    if(rol === null) return null;
    let bytes = CryptoJS.AES.decrypt(rol,'p@t&t02023');
    let decryptRol = bytes.toString(CryptoJS.enc.Utf8);
    return decryptRol;

    
}

export function logout(){
    localStorage.removeItem("token");
    localStorage.removeItem("rol");
}