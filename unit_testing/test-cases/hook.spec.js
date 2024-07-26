import { expect } from "chai";
import Sinon from "sinon" ;
import { describe, it, before, after, beforeEach, afterEach } from 'mocha'
describe ('Heading' , function(){
   //   after(function(){
   //       console.log("=========first=======");
   //   })

   //   before(function(){
   //      console.log("====== Last ===========");
        
   //   })

   //   afterEach(function(){
   //      console.log("======= after every test case");
        
   //   })

   //   beforeEach(function(){
   //    Sinon.restore();
   //      console.log("========before erver test case ");
        
   //   })

     let data = 'code'
     it('check string ' , function(){
        expect(data).to.be.a('string')
     })

     it.skip('value' , function(){
      expect(data).to.be.equal('code')
   })

   it('value 2 ' , function(){
      expect(data).to.be.equal('code')
   })
     
})



describe.skip ('Heading 2 ' , function(){
   let data = 'code'
   it('check string  2' , function(){
      expect(data).to.be.equal('code')
   })
   
})