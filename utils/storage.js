/**
 * Storage二次封装
 */

import config from '../public/config';
export default {
    setItem(key, val) {
    let storage = this.getStorage()
        storage[key] = val
        this.writeItem(storage)
    },
    getItem(key) {
        return this.getStorage()[key]
    },
  writeItem(storage) {
        window.localStorage.setItem(config.namespace, JSON.stringify(storage))
    },
  getStorage() {
        return JSON.parse(window.localStorage.getItem(config.namespace) || "{}")
    },
    clearItem(key) {
        let storage = this.getStorage()
        delete storage[key]
        this.writeItem(storage)
     },
    clearAll() {
        window.localStorage.clear()
    }
}
