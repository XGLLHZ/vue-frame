/**
 * web-首页 api 
 */

import request from '@/utils/request'

//列表
export function getList(params) {
    return request({
        method: 'post',
        url: '/api/web/admin/blog/getall',
        data: params
    });
}

//详情
export function getBlog(params) {
    return request({
        method: 'post',
        url: '/api/web/admin/blog/get',
        data: params
    });
}


