
const env = process.env.NODE_ENV || 'production'
const EnvConfig = {
    development: {
        baseApi: '/api',
        mockApi: 'https://www.fastmock.site/mock/7ea61bf9aaadb56d4a3bf48c47c91e76/api',
        dbURL: 'mongodb://127.0.0.1:27017/nuxt'
    },
    test: {
        baseApi: '//test.vite.app/api',
        mockApi: 'https://www.fastmock.site/mock/7ea61bf9aaadb56d4a3bf48c47c91e76/api',
        dbURL: 'mongodb://127.0.0.1:27017/nuxt'
    },
    production: {
        baseApi: '//prod.vite.app/api',
        mockApi: '',
        dbURL: 'mongodb://127.0.0.1:27017/nuxt'
    }
}
export default {
    env,
    mock: false,
    namespace: 'vite',
    ...EnvConfig[env]

}
