import { add, greet } from '../src';

describe('react-ab-testing module', () => {
    it('should add', () => {
        expect(add(2, 3)).toEqual(5);
    });
    it('should greet', () => {
        expect(greet('world')).toEqual('react-ab-testing says: hello to world');
    });
});
