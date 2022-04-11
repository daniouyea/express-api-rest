import userService from '../services/user.service.js'
import pick from '../utils/pick.js'

const userController = {
    async getUsers(req, res) {
        const filter = pick(req.query, ['name']);
        const options = pick(req.query, ['orderBy', 'limit', 'page']);
        const include = pick(req.query, ['withPosts', 'withProfile']);
        const users = await userService.queryUsers(filter, options, include);

        res.status(200).json(users)
    },

    async getUser(req, res) {
        const id = parseInt(req.params.id);
        const include = pick(req.query, ['withPosts', 'withProfile']);
        const user = await userService.getUser(id, include);
        
        res.status(200).json(user)
    },

    async createUser(req, res) {
        const user = await userService.createUser(req.body);

        if (user) {
            res.status(201).json(user)
        } else {
            res.status(400).json({
                message: 'Error creating user'
            })
        }
    },
    async updateUser(req, res) {
        const id = parseInt(req.params.id);
        const user = await userService.updateUser(id, req.body.name);

        if (user) {
            res.status(200).json(user)
        }else {
            res.status(400).json({
                message: 'Error updating user'
            })
        }
    },
}



export default userController
