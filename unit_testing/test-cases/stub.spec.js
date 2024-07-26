import Sinon from "sinon";
import  { expect } from "chai";
import {Student} from "../controllers/studentCtrl.js";
var studentObj = new Student();

describe('------------stub-------------' , function(){    
   it('function argument check  ' , function(){
    var stub = Sinon.stub(studentObj ,'getExtranal');

    stub.withArgs(40).returns(5);
    expect(studentObj.finalMarks(40)).to.be.equal(54);
       
     
     });


  


})