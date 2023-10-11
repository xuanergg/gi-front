import request from '@/util/request';

const { post, get } = request;

export const getList = post('/queryGraphResult');
export const getMoreRelationNode = get('/getMoreRelationNode');
export const getDetail = get('/getDetail');
