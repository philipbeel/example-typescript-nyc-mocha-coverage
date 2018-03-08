import { expect } from 'chai';
import Subtract from '../src/Subtract';

const sut = new Subtract();

describe('calculator/subtract', function() {
    it('should return a number when parameters are passed to `subtract()`', () => {
        expect(sut.subtract(1,1)).to.be.a('number');
    });

    it('should return sum of `1` when 2 - 1 is passed to `subtract()`', () => {
        expect(sut.subtract(2,1)).to.equal(1);
    });
});