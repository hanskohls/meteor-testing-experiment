import { Fibonacci } from './fibonacci';
const should = require('should');

describe ('Fibonacci', function(){
  describe('basic Math', function(){
    const tests = [
      {n: 0, expected: 0},
      {n: 1, expected: 1},
      {n: 2, expected: 1},
      {n: 3, expected: 2},
      {n: 4, expected: 3},
      {n: 20, expected: 6765},
    ]
    tests.forEach((test) =>{
      const n = test.n;
      const expected = test.expected;
      it('Fibonacci of ' + n + ' is ' + expected, function(){
        const fib = new Fibonacci();
        fib.calculate(n).should.be.exactly(expected);
      });
    });
  });
})