/**
 * web-首页 api 
 */

import request from '@/utils/request'

//文章列表
export function getArticleList(params) {
    return request({
        method: 'post',
        url: '/web/article/weblist',
        data: params
    });
}


