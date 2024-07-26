import Sinon from "sinon";
import  { expect } from "chai";
import {Student} from "../controllers/studentCtrl.js";

var studentObj = new Student();

describe('------------spay-------------' , function(){
   it('test  user function' , function(){
    expect(studentObj.userId()).to.be.equal(12)
   });

   // it('function count ' , function(){
   //    var spyObj =Sinon.spy(studentObj , 'getInfo');
   //    studentObj.home(5);

   //    // functions run only one time 
   //    expect(spyObj.calledOnce).to.be.true;  
   //    // expect(spyObj.calledTwice).to.be.true;
   //   });

     
   it('function argument check  ' , function(){
      var spyObj = Sinon.spy(studentObj , 'getInfo');
      studentObj.home(5); 
      expect(spyObj.calledWith(5, 1)).to.be.true;  
     
     });


  


})