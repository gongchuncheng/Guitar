/*
** 在action中只定义用户行为
** pramas 需要改变的数据
** 所有请求API需放在constants中统一管理，方便维护
*/
import request from 'superagent';

import { ADD_NUM } from '../constants/constants';

export const addnum = (pramas) => {
  return {
    type: ADD_NUM
  };
}

export const fetchJson = () => {
  return dispatch => {
        dispatch(addnum());
        request
        .get('http://localhost:8080/user/api/user')
        .then((res) => {
            console.log(JSON.parse(res.text));
        })
        .then((res) => {
        })
        .catch((err) => {
            console.log(err);
        });
    };
}