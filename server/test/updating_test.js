/* eslint-disable no-undef */
//requiring dependencies
const assert = require('chai').assert

//request model
const request = require('../models/estimateRequest_model')

//describing tests
describe('Updating records', function(){
    //declaring global variable
    var start;
    
    beforeEach(function(done){
            start = new request ({
            title: 'Dashboard',
            taskDescription: 'Make a navigation bar',
            projectID: [
                {
                    name: 'Xente'
                },
            ],
            developerID: [
                {
                    name: 'Benjamin'
                },
            ],
            projectManagerID: {name: 'David'},
            dueDate: 14-11-2019,
            status: 'Created',
        });

        //checking whether save to database is successfull
        start.save().then(function(){ 
        });
        done();
    });
    
    //tests
    it('Update one record in the database', function(done){
       request.findOneAndUpdate({title: 'Dashboard'}, {title: 'Navigation'}).then(function(){
            request.findOne({_id: start._id}).then(function(result){
                assert(result.name === 'Navigation')
            });
       });
       done();
    });

});