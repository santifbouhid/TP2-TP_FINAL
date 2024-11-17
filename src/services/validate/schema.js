import Joi from "joi"

export const validateUser = (user) => {
    const userSchema = Joi.object({
        username: Joi.string().min(3).max(25).required(),
        pass: Joi.string().min(3).max(25).required(),
        nombre: Joi.string().min(0).max(100),
        apellido: Joi.string().min(0).max(100),
        informacion: Joi.string().min(0).max(100),
        pronombre: Joi.string().min(0).max(10),
        favoritos: Joi.array().min(0),
        restricciones: Joi.array().min(0),
        rol: Joi.string().min(1).max(10).required()
    })
    const { error } = userSchema.validate(user)
    const result = error ? true : false
    return result
}