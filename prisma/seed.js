import faker from '@faker-js/faker';
import Prisma from '@prisma/client'
const { PrismaClient } = Prisma;

const prisma = new PrismaClient()

const usersAmount = 10;
const categoriesAmount = 10;
const postsAmount = 50;

async function users() {
    for (let i = 0; i < usersAmount; i++) {
        let user = {
            name: faker.name.findName(),
            profile: {
                create: {
                    biograpy: faker.lorem.sentence(),
                }
            }
        }
        await prisma.user.create({
            data: user
        })
    }
}

async function categories() {
    for (let i = 0; i < categoriesAmount; i++) {
        let category = {
            name: faker.commerce.department(),
        }
        let exists = await prisma.category.findFirst({ where: category })
        if (!exists) {
            await prisma.category.create({
                data: category
            })
        }
    }
}
async function posts() {
    const categoriesId = await prisma.category.findMany({
        select: { id: true },
    });
    const usersId = await prisma.user.findMany({
        select: { id: true },
    });

    for (let i = 0; i < postsAmount; i++) {
        let categoriesConnected = categoriesId
            .filter(category => {
                return Math.random() > 0.6
            })
            .map(function (category) {
                return { id: category.id }
            })
        let post = {
            title: faker.lorem.sentence(),
            content: faker.lorem.paragraph(),
            published: faker.datatype.boolean(),
            categories: {
                connect: categoriesConnected
            },
            author: {
                connect: {
                    id: usersId[Math.floor(Math.random() * usersId.length)].id
                }
            }
        }
        await prisma.post.create({
            data: post
        })
    }
}

async function main() {
    await prisma.profile.deleteMany({})
    await prisma.post.deleteMany({})
    await prisma.user.deleteMany({})
    await prisma.category.deleteMany({})

    await users()
    await categories()
    await posts()
}

main()
    .catch((e) => {
        console.error(e)
        process.exit(1)
    })
    .finally(async () => {
        await prisma.$disconnect()
    })