import Sinon from "sinon";
import  { expect } from "chai";
import {Student} from "../controllers/studentCtrl.js";
var studentObj = new Student();

describe('------------Mock-------------' , function(){    
   it(' count function' , function(){
     var mock = Sinon.mock(studentObj);
     var expt = mock.expects('getExtranal');
     expt.exactly(1);
     expt.withArgs(40);
     studentObj.finalMarks(40);

     mock.verify();
     
     });


  


})