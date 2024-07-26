import { response } from "express";

 export class Student {

    constructor(){

    }

    home(type){
        let data = this.getInfo(type, 1)
        // this.getInfo(type, 2)
        return  data+5;
    }

    userId(){
        return 12
    }
    getInfo( type,status){
        return 10 ; 
    }


    finalMarks(total){
        let external = this.getExtranal(total)
        let internal = this.getInternal(total)
        let finalSum = external+ internal +10 ;

        return finalSum ;
    }

    getExtranal(total){
        return total +1 ;
    }

    getInternal(total){
        return total -1 ;
    }

    dbData(){
        return new Promise((resolve, reject)=>{
            setTimeout(()=> resolve(10),1000);

        })
    }

    thridPartApi(){
        return new Promise ((resolve , reject)=>{
            axios.get('https://jsonplaceholder.typicode.com/users')
            .then(resolve=>{
                resolve(response.data)
            })
            .catch(error =>{
                reject(error)
            })
        })
    }
}

