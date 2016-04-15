import { Fibonacci } from './fibonacci';

describe ('Fibonacci', function(){
  describe('basic Math', function(){
    it('should calculate the correct values', function(){
      console.log(Fibonacci);
      const fib = new Fibonacci();
      console.log(fib);
      fib.calculate(1).should.equal(1);
      fib.calculate(2).should.equal(1);
    });
  });
})