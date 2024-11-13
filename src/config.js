const PORT = process.env.PORT || 8081
const CONNSTR = process.env.CONNSTR
const BASE = process.env.BASE
const PERSISTENCE = process.env.PERSISTENCE || "MEM"

export default {
    PORT,
    CONNSTR,
    BASE,
    PERSISTENCE
}