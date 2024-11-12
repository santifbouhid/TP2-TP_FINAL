import { MongoClient } from 'mongodb'
import config from '../config.js'

class MongoConnection {
    static client = null
    static db = null

    static connect = async() => {
        this.client = new MongoClient(config.CONNSTR)
        await this.client.connect()
        this.db = this.client.db(config.BASE)
    }
}

export default MongoConnection