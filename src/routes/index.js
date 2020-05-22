import {Router} from 'express';
import MainRoutes from './main/index.routes'
import UserRoutes from './users/index.routes'
const Routes = Router();

Routes.use('/',MainRoutes)
Routes.use('/users',UserRoutes)
export default Routes;