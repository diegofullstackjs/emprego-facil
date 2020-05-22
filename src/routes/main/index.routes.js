import {Router} from 'express';

const Routes = Router();

Routes.get('/',(req,res) => {
    return res.status(200).json({
        message: "ok"
    })
})

export default Routes;