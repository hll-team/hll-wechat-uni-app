import ajax from '../util/ajax'
let service = {}
import qs from 'qs'
// 获取广告位
service.getBannerList = function(params) {
  return ajax.post('/v1/app/adv/lists',params)
}
// 获取banner
service.getBanner = function(params) {
  return ajax.post('/app/my/banner',params)
}
//获取天气
service.getWeather = function(params) {
  return ajax.get('/v1/app/main/weather',params)
}
// 获取热门矿场列表
service.getHotFacList = function(params) {
  return ajax.get('/v1/factory/hot/list',params)
}
//退出
service.getMessage = function(params){
  return ajax.post('/v1/app/push/message',params)
}


export default service