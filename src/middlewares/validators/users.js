import {object,string} from 'yup';
import UserSchema from '../../models/usuarios.model'
class UserValidator {

   async  create(req,res,next) {
        const schema = object().shape(
            {
                name: string().required(),
                password: string().required(),
                email: string().required(),
                phone: string().required()
            });
            const email = await UserSchema.findOne({email:req.body.email});
            const phone = await UserSchema.findOne({phone:req.body.phone});
            if(email){
                return res.status(200).json({
                    error: true,
                    message: "email já cadastrado"
                })
            }
            if(phone){
                return res.status(200).json({
                    error: true,
                    message: "Telefone já cadastrado"
                })
            }
            try{
                await  schema.validate(req.body);
                next();
            }catch(err){
                return res.status(200).json(err)         
            }
           
    }
async login(req,res,next){
        const schema = object().shape({
            email: string().email().required(),
            password: string().required()
        })
        try{
            await schema.validate(req.body);
            next();
        }catch(err){
            return res.status(200).json(err); 
        }
    }
}

export default new UserValidator;