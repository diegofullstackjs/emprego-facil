import UserModel from '../../models/usuarios.model'
import {sign} from 'jsonwebtoken';
class Authentication {

    async create(req,res){
        const {email,phone,password,name} = req.body;

        const data = await UserModel.create({
            email: email,
            name: name,
            password: password,
            phone: phone
        });
        return res.status(200).json(data)
    }
    async login(req,res) {
        const {email,password} = req.body;

        const user = await UserModel.findOne({email:email});

        if(user){
            if(password !== user.password){
                return res.status(200).json({
                    error: true,
                    message: "Sua senha está errado!"
                })
            }
            user.password = undefined;
            const token = await sign({user},process.env.KEY,{expiresIn: '7d'});
            return res.status(200).json({
                token: token,
                user: user
            });
        }
    }
}

export default new Authentication;