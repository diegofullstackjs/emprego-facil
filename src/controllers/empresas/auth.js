import {sign} from 'jsonwebtoken';
import EmpresasModel from '../../models/empresas.model'
class Authentication {
    constructor(){
        
    }
    async create(req,res){
      const create = await EmpresasModel.create(req.body);

      return res.status(200).json(create)
    }
}

export default new Authentication