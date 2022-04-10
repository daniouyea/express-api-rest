import Prisma from '@prisma/client'
const { PrismaClient } = Prisma;
const prisma = new PrismaClient()


const userController = {
    async getUsers(req, res) {
        let where = {}
        let include = {}
        if (req.query.name) {
            where.name = { contains: req.query.name }
        }
        if (req.query.withPosts) {
            include.posts = { where: { published: true } }
        }
        const users = await prisma.user.findMany({
            where,
            include,
            orderBy: {
                name: 'asc'
            }
        })
        res.status(200).json(users)
    },

    async getUser(req, res) {
        let where = {}
        let include = {}
        if (req.params.id) {
            where.id = req.params.id
        }
        if (req.query.name) {
            where.name = {contains: req.query.name}
        }
        if (req.query.withPosts) {
            include.posts = { where: { published: true } }
        }
        const user = await prisma.user.findFirst({
            where,
            include
        })
        res.status(200).json(user)
    },
    async createUser(req, res) {
        const userSelect = {
            name: true,
        }
        const user = await prisma.user.create({
            data: {
                name: req.body.name,
            },
            select: userSelect
        })
        if (user) {
            return res.status(201).json(user)
        } else {
            res.status(400).json({
                message: 'Error al crear el usuario'
            })
        }
    },
    async updateUser(req, res) {
        const userSelect = {
            name: true,
        }
        const user = await prisma.user.update({
            where: {
                id: parseInt(req.params.id)
            },
            data: {
                name: req.body.name,
            },
            select: userSelect
        })
        if (user) {
            res.status(200).json(user)
        }else {
            res.status(400).json({
                message: 'Error al actualizar el usuario'
            })
        }
    },
}



export default userController
