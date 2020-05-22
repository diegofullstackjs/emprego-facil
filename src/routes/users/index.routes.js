import {Router} from 'express';
import auth from '../../controllers/users/auth';
import UserValidator from '../../middlewares/validators/users'
const Routes = Router();

Routes.get('/',(req,res) => {
    return res.status(200).json({
        message: "users ok"
    })
})

Routes.post('/create',
[
    UserValidator.create
],
auth.create)

export default Routes;