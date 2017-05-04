import React from 'react';
import {shallow, mount} from 'enzyme';

import {GuessForm} from './guess-form';
import {makeGuess} from '../actions';

describe('<GuessForm />', () => {
    it('Renders without crashing', () => {
        shallow(<GuessForm />);
    });

    it('Dispatches submitGuess from submitGuess', () => {
        const dispatch = jest.fn();
        const wrapper = mount(<GuessForm dispatch={dispatch} />);
        const instance = wrapper.instance();
        wrapper.find('input').node.value = 5
        wrapper.simulate('submit');
        expect(dispatch).toHaveBeenCalledWith(makeGuess("5"));
    })
});