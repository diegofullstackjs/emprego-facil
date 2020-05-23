import {object,string} from 'yup';
import EmpresasModel from '../../models/empresas.model';
class EmpresasValidator {

    async create(req,res,next){
        const schema = object().shape(
            {
                name: string().required(),
                owner:string().required(),
                cnpj:string().required(),
                password: string().required(),
                email: string().required(),
                phone: string().required()
            });

            const email = await EmpresasModel.findOne({email:req.body.email});
            const cnpj = await EmpresasModel.findOne({cnpj: req.body.cnpj});
            const phone = await EmpresasModel.findOne({phone: req.body.phone});
            if(email){
                return res.status(200).json({
                    error: true,
                    message: "Email já cadastrado"
                })
            }
            if(cnpj){
                return res.status(200).json({
                    error: true,
                    message: "cnpj já cadastrado"
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
                console.log(err)
                return res.status(200).json(err) 
            }
    }
}

export default new EmpresasValidator