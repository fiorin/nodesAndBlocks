import * as ActionTypes from '../constants/actionTypes';
import reducer from './blocks';
import initialState from './initialState';


describe('Reducers::Blocks', () => {
    const getInitialState = () => {
        return initialState().blocks;
    };

    const blockA = {
        id: 1,
        attribute: {
            data: 'description1'
        }
    }

    it('should set initial state by default', () => {
        const action = { type: 'unknown' };
        const expected = getInitialState();

        expect(reducer(undefined, action)).toEqual(expected);
    });

    it('should UPDATE_BLOCKS return a valida state', () => {
        const expected = {
            list: [blockA, blockA]
        }
        const action = { type: ActionTypes.UPDATE_BLOCKS, res: { data: [blockA, blockA] } }
        expect(reducer(undefined, action)).toEqual(expected);
    })
});
