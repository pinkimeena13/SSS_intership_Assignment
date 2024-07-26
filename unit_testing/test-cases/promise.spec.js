import Sinon from "sinon";
import  { expect  , use} from "chai";
import {Student} from "../controllers/studentCtrl.js";
import {newData}  from '../controllers/userCtrl.js'
var studentObj = new Student();

// const chaiaspromise = require('chai-as-promised')
 import chaiaspromise from 'chai-as-promised'
use(chaiaspromise)


describe('------------Promise-------------' , function(){    
   it(' Normal value  function' , function(){
    
    // expect(studentObj.dbData(()).to.be.equla(10))
    studentObj.dbData().then(function(result){
        // this.timeout(2000);
        this.timeout(0);
         expect(result).to.be.equal(10)
         done();
    })
     });


     it(' chai promise value  function' , function(){
        this.timeout(0);
             return expect(studentObj.dbData()).to.eventually.equal(10)
      });


      it('OTP' , function(){
        this.timeout(0);
             return expect(newData()).to.eventually.have.deep.property('otp')
      });


  


})