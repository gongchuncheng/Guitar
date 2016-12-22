import { ADD_NUM } from '../constants/constants';
const initState = {
    num: 0,
    sex: 'maile',
    age: 18,
    name: true
};
export default (state = initState, action) => {
	switch (action.type){
		case ADD_NUM:
		return Object.assign({}, state, { num: state.num + 1});

		default:
	        return state;
	}
}