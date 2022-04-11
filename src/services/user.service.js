import Prisma from '@prisma/client'
import authMiddleware from '../middlewares/auth.middleware.js'

const { PrismaClient } = Prisma;
const prisma = new PrismaClient()
prisma.$use(authMiddleware)

const userService = {
    /**
     * Query for users
     * @param {Object} filter - Mongo filter
     * @param {Object} options - Query options
     * @param {Object} [include] - Include models
     * @param {string} [options.orderBy] - Sort option in the format: sortField:(desc|asc)
     * @param {number} [options.limit] - Maximum number of results per page (default = 10)
     * @param {number} [options.page] - Current page (default = 1)
     * @param {boolean} [options.many] - findMany or findFirst
     * @returns {Promise<QueryResult>}
     */
    async queryUsers(filter, options, includes) {
        let where = {}
        let include = {posts: false, profile: false}
        let orderBy = {name: 'asc'}
        let skip = 0
        let take = 10
        let many = options.hasOwnProperty('many') ? options.many : true

        if (filter.id) {
            where.id = filter.id
        }
        if (filter.name) {
            where.name = { contains: filter.name }
        }
        if (includes.withPosts) {
            include.posts = { where: { published: true } }
        }
        if (includes.withProfile) {
            include.profile = true
        }
        if (options.orderBy) {
            const [sortField, sortOrder] = options.orderBy.split(':')
            orderBy = { [sortField]: sortOrder }
        }
        if (options.limit) {
            take = parseInt(options.limit)
        }
        if (options.page) {
            skip = (options.page - 1) * take
        }

        if (many) {
            return await prisma.user.findMany({
                where,
                include,
                orderBy,
                skip,
                take
            })
        }                
        return await prisma.user.findFirst({
            where,
            include,
            orderBy,
        })
    },

    /**
     * Get a user
     * @param {number} id - User id
     * @param {Object} [includes] - Include models
     * @param {boolean} [includes.withPosts] - Include posts
     * @param {boolean} [includes.withProfile] - Include profile
     * @returns {Promise<User>}
     */
    async getUser(id, includes) {
        const filter = { id };
        const options = {many: false};
        return this.queryUsers(filter, options, includes)
    },

    /**
     * Create a user
     * @param {String} name - User name
     * @returns {Promise<User>}
     */
    async createUser(name) {
        const userSelect = {
            name: true,
        }
        const user = await prisma.user.create({
            data: { name },
            select: userSelect
        })
        return user
    },


    /**
     * Update a user
     * @param {number} id - User id
     * @param {String} name - User name
     * @returns {Promise<User>}
     */
    async updateUser(id, name) {
        const userSelect = {
            name: true,
        }
        const user = await prisma.user.update({
            where: { id },
            data: { name },
            select: userSelect
        })
        return user
    },
}

export default userService