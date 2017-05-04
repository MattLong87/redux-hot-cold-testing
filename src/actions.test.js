import{
	NEW_GAME,
	newGame,
	MAKE_GUESS,
	makeGuess,
	TOGGLE_INFO_MODAL,
	toggleInfoModal
} from './actions';

describe('newGame', () => {
	it('should return the action', () => {
		const action = newGame();
		expect(action.type).toEqual(NEW_GAME);
		expect(action.correctAnswer.constructor.name).toBe("Number");
	})
})

describe('makeGuess', () => {
	it('should return the action', () => {
		const guess = 55;
		const action = makeGuess(guess);
		expect(action.type).toEqual(MAKE_GUESS);
		expect(action.guess).toEqual(guess);
	})
})

describe('toggleInfoModal', () => {
	it('should return the action', () => {
		const action = toggleInfoModal();
		expect(action.type).toEqual(TOGGLE_INFO_MODAL);
	})
})