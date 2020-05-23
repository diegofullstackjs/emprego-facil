import {Router} from 'express';
import MainRoutes from './main/index.routes'
import UserRoutes from './users/index.routes'
import EmpresasRoutes from './empresas/index.routes'
const Routes = Router();

Routes.use('/',MainRoutes)
Routes.use('/users',UserRoutes)
Routes.use('/empresas',EmpresasRoutes)
export default Routes;