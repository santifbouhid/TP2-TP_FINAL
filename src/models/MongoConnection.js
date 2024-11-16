import { MongoClient } from 'mongodb'
import config from '../config.js'

class MongoConnection {

    static client = new MongoClient(config.CONNSTR)
    static db = this.client.db(config.BASE)

    static connect = async() => {
        await this.client.connect()
    }
}

export default MongoConnection