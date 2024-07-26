import { expect,assert, should  , use} from 'chai';
import { it } from 'mocha';
import chaiHttp from 'chai-http';
import server from '../app.js'
import { response } from 'express';
should();
use(chaiHttp)
describe ("Task Api " , function(){

    it ('Get APi ' , function(){
        chai.request(server)
        .get('https://jsonplaceholder.typicode.com/posts/1')
        .end((err , response)=>{
            expect(response.status).to.be.equal(200);
            expect(response.body).to.have.all.keys('data' , 'statusText')
            done();
        })
    } )
})