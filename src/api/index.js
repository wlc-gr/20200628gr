import ajax from './ajax'

const BASE_URL ='/api'
export const reqPosition = (geohash) => ajax(BASE_URL+'/position/${geohash}')

export const reqCategorys = () => ajax(BASE_URL+'/index_category')

export const reqShops = (latitude, longitude) => ajax(BASE_URL+'/shops', {latitude, longitude})

export const reqSearchshops = (keyword,geohash)=>ajax(BASE_URL+'/search_shops',{keyword,geohash})

