
import  { expect  , use} from "chai";
import {Student} from "../controllers/studentCtrl.js";
import {newData}  from '../controllers/userCtrl.js'
import nock from 'nock'
var stdClass = new Student();

describe('Nock test Suit ', function(){


    it('Api Test ' , function(done){
        var obj = {status : 'ok' , statusCode:200 , data:[]}

        const apihit = nock ('https://jsonplaceholder.typicode.com/users')
            // .reply(200, obj);

            stdClass.thridPartApi()
            .then(function(record){
                console.log(record);
                expect(record).to.be.eql(obj);
                done();
            })
            .catch(error =>{
                done (new Error ('error: -' +error))
            })
    })

});
