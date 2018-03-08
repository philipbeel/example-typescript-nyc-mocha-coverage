import { expect } from 'chai';
import Add from '../src/Add';

const sut = new Add();

describe('calculator/add', () => {

    it('should return a number when parameters are passed to `add()`', () => {
        expect(sut.add(1,1)).to.be.a('number');
    });

    it('should return sum of `2` when 1 + 1 is passed to `add()`', () => {
        expect(sut.add(1,1)).to.equal(2);
    });
});