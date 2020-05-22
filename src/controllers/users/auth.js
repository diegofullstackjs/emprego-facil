import UserModel from '../../models/usuarios.model'
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
}

export default new Authentication;