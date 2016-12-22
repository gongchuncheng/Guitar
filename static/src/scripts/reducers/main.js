/*
** reducer入口文件，将所有reducer组合到一起，统一管理
*/
import { combineReducers } from 'redux';
import reducer1 from './reducer1';
import reducer2 from './reducer2';

const rootReducer = combineReducers({
  reducer1,
  reducer2
});

export default rootReducer;
