import {Router} from 'express';
import AuthEmpresas from '../../controllers/empresas/auth';
import EmpresasValidation from '../../middlewares/validators/empresas'
const Routes = Router();

Routes.get('/',(req,res) => {
    return res.status(200).json({
        message: "ok"
    })
})
Routes.post('/create',
[
    EmpresasValidation.create
],
AuthEmpresas.create)
export default Routes;