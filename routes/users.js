import { getUsers,getUserById,createUser, authUser } from "../controllers/user.js";
import { Router } from "express";

const routes = Router();


routes.get('/',getUsers);
routes.get('/:_id',getUserById);
routes.post('/register',createUser);
routes.post('/login',authUser);

export default routes;

// we have to create protected routes
// JWT - json web token