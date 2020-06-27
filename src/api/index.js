import ajax from './ajax'

export const reqPosition = (geohash) => ajax('/position/${geohash}')

export const reqFoods = () => ajax('/index_category')

export const reqShops = (latitude, longitude) => ajax('/shops', {latitude, longitude})

export const reqSearchshops = (keyword,geohash)=>ajax('/search_shops',{keyword,geohash})

