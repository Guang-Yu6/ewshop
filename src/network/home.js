import {request} from './request'

export function getHomeAllData(){
    return request({
        url:'/api/index',
        method:'get'
    })
}

export function getBanner() {

}