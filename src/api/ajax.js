import axios from 'axios'

export default function ajax(url, data = {}, type = 'get') {
    return new Promise(function (resolve, reject) {
        let promise;
        if (type.trim().toLowerCase() == 'get') {
            let params = ''
            Object.keys(data).forEach(key => {
                params += key + '=' + data[key] + '&'
            })
            if (params) {
                params = params.substring(0, params.lastIndexOf('&'))
                url += '?' + params;
            }
            promise = axios.get(url)
        } else {
            promise = axios.post(url, data);
        }
        promise.then(onfulfilled => {
            resolve(onfulfilled.data)
        }).catch(error => {
            reject(error)
        })
    })
}
