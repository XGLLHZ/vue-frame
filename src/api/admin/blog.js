/**
 * 博客管理 api
 */

import request from '@/utils/request'

//列表
export function getList(params) {
    return request({
        method: 'post',
        url: '/api/web/admin/blog/list',
        data: params
    });
}

