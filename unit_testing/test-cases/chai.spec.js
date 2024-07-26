
import { expect,assert, should } from 'chai';
import { it } from 'mocha';
should();

describe('----------Assert Check function type-------------- ' , function(){
        let userName = 'Pinki';
         let myList = {
           item:[
            { id :1 , name:'Pinki'},
            {id : 2 , name :' john'}
           ]
         }

        it('check String type case', function(){
            assert.typeOf(userName, 'string');
    
        });

        it('equal match', function(){
             assert.equal(userName ,'Pinki')
        })

        it('check length' , function(){
            assert.lengthOf(myList.item , 2) 
        })
    })


    ////==========should ========================
    describe('-------Should check-----------' , function(){
        let foo = 'Pinki';
         let myList = {
           item:[
            { id :1 , name:'Pinki'},
            {id : 2 , name :' john'}
           ],
           title:[
            {id :1 , name :'title1'},
            {id:2 , name : 'title2'}
           ]
         }

         it('Check String', function(){
            foo.should.be.a('string')
         });
         it("equal check " , function(){
            foo.should.equal('Pinki')
         });

         it(" foo length check" , function(){
            foo.should.lengthOf(5)
         })

        //  it('object length check ' , function(){
        //     foo.should.have.property('item').with.lengthOf(1)
        //  })
    });


    //// excpect =============//

    describe('Check excpect ' , function(){

    let name = 'Pinki';
   
    let myList = {
      item:[  { id :1 , name:'Pinki'},  ],
      title :'user list' ,
      address:{
        country:'India',
        phone : ['9090909090' , '1234567890']
      }

    }
    it('String check' , function(){
        expect(name).to.be.a('string');

    })

    it('equal match' , function(){
        expect(name).to.be.equal('Pinki');
    })

    it('legth check ' , function(){
        expect(name).to.be.lengthOf(5)
    });

    it('object Length', function(){
        expect(myList).to.have.property('item').with.lengthOf(1);
    });

    it('api object match' , function(){
        expect(myList).to.have.all.keys('item' ,'title','address')
    });


    it('phone number  object match' , function(){
        expect(myList).to.have.all.nested.property('address.phone[1]')
    });

    it('country  name check  object match' , function(){
        // expect(myList).to.have.nested.include({'address.country':'India'})
            expect(myList).to.have.nested.include({'address.phone[1]':'1234567890'})
    });

})