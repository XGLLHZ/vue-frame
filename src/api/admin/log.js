/**
 * 日志管理 api
 */

import request from '@/utils/request'

//列表
export function getList(params) {
    return request({
        method: 'post',
        url: '/api/admin/log/list',
        data: params
    });
}

//详情
export function getLog(params) {
    return request({
        method: 'post',
        url: '/api/admin/log/get',
        data: params
    });
}



