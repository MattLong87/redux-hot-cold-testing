import {newGame, makeGuess, toggleInfoModal} from './actions';

import reducer from './reducer';

describe('reducer', () => {
	it('should set initial state when nothing is passed in', () => {
		const state = reducer(undefined, {type: '__UNKNOWN'});
		expect(state.showInfoModal).toEqual(false);
		expect(state.feedback).toEqual('Make your guess!');
		expect(state.guesses).toEqual([]);
		expect(state.correctAnswer).toBeDefined();
	})

	it('should return current state on unknown action', () => {
		let currentState = {};
		const state = reducer(currentState, {type: '__UNKNOWN'});
		expect(state).toBe(currentState);
	})

	describe('newGame', () => {
		it('should reset the game', () => {
			let state;
			state = reducer(state, newGame());
			expect(state.showInfoModal).toEqual(false);
			expect(state.feedback).toEqual('Make your guess!');
			expect(state.guesses).toEqual([]);
			expect(state.correctAnswer).toBeDefined();
		})
	})

	describe('makeGuess', () => {
		it('should give appropriate feedback for invalid guess', () => {
			let state;
			const invalidGuess = "abc";
			state = reducer(state, makeGuess(invalidGuess));
			expect(state.feedback).toEqual('Please enter a valid number');
		})

		it('should give appropriate feedback for correct answer', () => {
			let state = {
				correctAnswer: 44,
				guesses: []
			};
			state = reducer(state, makeGuess(44));
			expect(state.feedback).toEqual('You got it!');	
		})
	})

	describe('toggleInfoModal', () => {
		it('should toggle info modal', () => {
			let state = {showInfoModal: true};
			state = reducer(state, toggleInfoModal());
			expect(state.showInfoModal).toBe(false);
		})
	})
})