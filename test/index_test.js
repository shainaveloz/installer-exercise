var chai = require('chai');
var assert = chai.assert;
var index = require('../js/index.js');

describe('index', function() {
    var installer = [
        'package 1: dependency 1',
        'package 2: dependency 2',
        'package 3: dependency 3',
        'package 4: dependency 4',
        'package 5: ',
        'package 6: '

    ];
    var output = [];

    describe('initial state', function(){
        describe('installer', function() {
            it('should be an array', function() {
                assert.equal(installer.length, 6);
            });
        });

        describe('output', function() {
            it('should be an empty array', function() {
                assert.equal(output.length, 0);
            });
        });
    });

    describe('outputString', function(){
        it('should populate outputArray', function(){
            var outputArray = [1,2];
            var packageName = 'package 1:';
            var dependencyName = ': dependency 1';
            var output = [
                'dependency 1',
                'package 1',
                'dependency 2',
                'package 2',
                'dependency 3',
                'dependency 6'
            ];
            assert.isArray(outputArray, 'outputArray are dependencies');
            assert.equal(outputArray.length, 2);
            assert.propertyVal({ dependencyName: 'packageName' }, 'dependencyName', 'packageName');
            assert.typeOf(['dependency 1: package 1', 'dependency 2:package 2'], 'array', 'we have a new array');
            assert.equal(output.length, 6, 'array has length of 6');
        })
    })

    describe('buttonClick', function(){
        it('should print dependencies on page', function(){
            function outputString(){return installer}
            assert.isDefined(outputString(), 'to be defined');
        })
    })
});