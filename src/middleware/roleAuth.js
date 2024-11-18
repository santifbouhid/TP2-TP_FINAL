import config from '../config.js'

export const roleAuth = (req, res, next) => {
    const { role } = req.headers
    if(role === config.ROLE){
        next()
    } else {
        res.status(403).send("Usuario no autorizado")
    }
}