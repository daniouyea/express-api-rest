import Prisma from '@prisma/client'
const { PrismaClient } = Prisma;
const prisma = new PrismaClient()

const usersMock = [
    {
        "name": "Molly Heyworth",
        profile: {
            create: {
                "biograpy":"Marketing",
            }
        },
    },
    {
        "name": "Anderson Oxford",
        profile: {
            create: {
                "biograpy":"Services",
            }
        },
    },
    {
        "name": "Cthrine Wallett",
        profile: {
            create: {
                "biograpy":"Services",
            }
        },
    },
    {
        "name": "Clair Kilbourn",
        profile: {
            create: {
                "biograpy":"Business Development",
            }
        },
    },
    {
        "name": "Homere Dyball",
        profile: {
            create: {
                "biograpy":"Engineering",
            }
        },
    },
    {
        "name": "Meryl Dewing",
        profile: {
            create: {
                "biograpy":"Research and Development",
            }
        },
    },
    {
        "name": "Annis Blabber",
        profile: {
            create: {
                "biograpy":"Training",
            }
        },
    },
    {
        "name": "Elisha Slavin",
        profile: {
            create: {
                "biograpy":"Legal",
            }
        },
    },
    {
        "name": "Faun Sattin",
        profile: {
            create: {
                "biograpy":"Services",
            }
        },
    },
    {
        "name": "Maddy Limpricht",
        profile: {
            create: {
                "biograpy":"Support",
            }
        },
    }
];
const postsMock = [
    { "title": "Hulk Vs.", "published": false, "content": "In sagittis dui vel nisl. Duis ac nibh. Fusce lacus purus, aliquet at, feugiat non, pretium quis, lectus.\n\nSuspendisse potenti. In eleifend quam a odio. In hac habitasse platea dictumst." },
    { "title": "The Swedish Moment", "published": true, "content": "Duis bibendum, felis sed interdum venenatis, turpis enim blandit mi, in porttitor pede justo eu massa. Donec dapibus. Duis at velit eu est congue elementum.\n\nIn hac habitasse platea dictumst. Morbi vestibulum, velit id pretium iaculis, diam erat fermentum justo, nec condimentum neque sapien placerat ante. Nulla justo.\n\nAliquam quis turpis eget elit sodales scelerisque. Mauris sit amet eros. Suspendisse accumsan tortor quis turpis." },
    { "title": "DiG!", "published": true, "content": "Morbi porttitor lorem id ligula. Suspendisse ornare consequat lectus. In est risus, auctor sed, tristique in, tempus sit amet, sem.\n\nFusce consequat. Nulla nisl. Nunc nisl.\n\nDuis bibendum, felis sed interdum venenatis, turpis enim blandit mi, in porttitor pede justo eu massa. Donec dapibus. Duis at velit eu est congue elementum." },
    { "title": "Mechanic, The", "published": false, "content": "Nam ultrices, libero non mattis pulvinar, nulla pede ullamcorper augue, a suscipit nulla elit ac nulla. Sed vel enim sit amet nunc viverra dapibus. Nulla suscipit ligula in lacus." },
    { "title": "Death Race 3: Inferno", "published": false, "content": "In hac habitasse platea dictumst. Morbi vestibulum, velit id pretium iaculis, diam erat fermentum justo, nec condimentum neque sapien placerat ante. Nulla justo.\n\nAliquam quis turpis eget elit sodales scelerisque. Mauris sit amet eros. Suspendisse accumsan tortor quis turpis.\n\nSed ante. Vivamus tortor. Duis mattis egestas metus." },
    { "title": "Trail Beyond, The", "published": false, "content": "Sed ante. Vivamus tortor. Duis mattis egestas metus." },
    { "title": "Late Phases", "published": true, "content": "Maecenas tristique, est et tempus semper, est quam pharetra magna, ac consequat metus sapien ut nunc. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae; Mauris viverra diam vitae quam. Suspendisse potenti.\n\nNullam porttitor lacus at turpis. Donec posuere metus vitae ipsum. Aliquam non mauris." },
    { "title": "Austin Powers in Goldmember", "published": false, "content": "In hac habitasse platea dictumst. Etiam faucibus cursus urna. Ut tellus.\n\nNulla ut erat id mauris vulputate elementum. Nullam varius. Nulla facilisi." },
    { "title": "Arizona Raiders", "published": true, "content": "Donec diam neque, vestibulum eget, vulputate ut, ultrices vel, augue. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae; Donec pharetra, magna vestibulum aliquet ultrices, erat tortor sollicitudin mi, sit amet lobortis sapien sapien non mi. Integer ac neque.\n\nDuis bibendum. Morbi non quam nec dui luctus rutrum. Nulla tellus." },
    { "title": "Remorques (Stormy Waters)", "published": false, "content": "Duis bibendum, felis sed interdum venenatis, turpis enim blandit mi, in porttitor pede justo eu massa. Donec dapibus. Duis at velit eu est congue elementum.\n\nIn hac habitasse platea dictumst. Morbi vestibulum, velit id pretium iaculis, diam erat fermentum justo, nec condimentum neque sapien placerat ante. Nulla justo." },
    { "title": "Yu-Gi-Oh!", "published": false, "content": "Duis bibendum, felis sed interdum venenatis, turpis enim blandit mi, in porttitor pede justo eu massa. Donec dapibus. Duis at velit eu est congue elementum.\n\nIn hac habitasse platea dictumst. Morbi vestibulum, velit id pretium iaculis, diam erat fermentum justo, nec condimentum neque sapien placerat ante. Nulla justo." },
    { "title": "Admiral Yamamoto", "published": true, "content": "Nam ultrices, libero non mattis pulvinar, nulla pede ullamcorper augue, a suscipit nulla elit ac nulla. Sed vel enim sit amet nunc viverra dapibus. Nulla suscipit ligula in lacus.\n\nCurabitur at ipsum ac tellus semper interdum. Mauris ullamcorper purus sit amet nulla. Quisque arcu libero, rutrum ac, lobortis vel, dapibus at, diam." },
    { "title": "Twelve Tasks of Asterix, The (Les douze travaux d'Astérix)", "published": true, "content": "Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Proin risus. Praesent lectus.\n\nVestibulum quam sapien, varius ut, blandit non, interdum in, ante. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae; Duis faucibus accumsan odio. Curabitur convallis.\n\nDuis consequat dui nec nisi volutpat eleifend. Donec ut dolor. Morbi vel lectus in quam fringilla rhoncus." },
    { "title": "Antibodies (Antikörper)", "published": true, "content": "Maecenas ut massa quis augue luctus tincidunt. Nulla mollis molestie lorem. Quisque ut erat." },
    { "title": "Polar Bear King, The (Kvitebjørn Kong Valemon)", "published": true, "content": "Proin leo odio, porttitor id, consequat in, consequat ut, nulla. Sed accumsan felis. Ut at dolor quis odio consequat varius.\n\nInteger ac leo. Pellentesque ultrices mattis odio. Donec vitae nisi.\n\nNam ultrices, libero non mattis pulvinar, nulla pede ullamcorper augue, a suscipit nulla elit ac nulla. Sed vel enim sit amet nunc viverra dapibus. Nulla suscipit ligula in lacus." },
    { "title": "Tanguy", "published": false, "content": "Curabitur at ipsum ac tellus semper interdum. Mauris ullamcorper purus sit amet nulla. Quisque arcu libero, rutrum ac, lobortis vel, dapibus at, diam." },
    { "title": "Spider-Man: The Ultimate Villain Showdown", "published": true, "content": "In hac habitasse platea dictumst. Etiam faucibus cursus urna. Ut tellus." },
    { "title": "Manhunt", "published": true, "content": "Nullam sit amet turpis elementum ligula vehicula consequat. Morbi a ipsum. Integer a nibh.\n\nIn quis justo. Maecenas rhoncus aliquam lacus. Morbi quis tortor id nulla ultrices aliquet.\n\nMaecenas leo odio, condimentum id, luctus nec, molestie sed, justo. Pellentesque viverra pede ac diam. Cras pellentesque volutpat dui." },
    { "title": "Big Day, The (We Met on the Vineyard)", "published": true, "content": "Proin interdum mauris non ligula pellentesque ultrices. Phasellus id sapien in sapien iaculis congue. Vivamus metus arcu, adipiscing molestie, hendrerit at, vulputate vitae, nisl.\n\nAenean lectus. Pellentesque eget nunc. Donec quis orci eget orci vehicula condimentum." },
    { "title": "In the Name of the King: A Dungeon Siege Tale", "published": true, "content": "Cras mi pede, malesuada in, imperdiet et, commodo vulputate, justo. In blandit ultrices enim. Lorem ipsum dolor sit amet, consectetuer adipiscing elit.\n\nProin interdum mauris non ligula pellentesque ultrices. Phasellus id sapien in sapien iaculis congue. Vivamus metus arcu, adipiscing molestie, hendrerit at, vulputate vitae, nisl.\n\nAenean lectus. Pellentesque eget nunc. Donec quis orci eget orci vehicula condimentum." },
    { "title": "Kiss the Girls", "published": true, "content": "In congue. Etiam justo. Etiam pretium iaculis justo." },
    { "title": "Sound of Noise", "published": false, "content": "In quis justo. Maecenas rhoncus aliquam lacus. Morbi quis tortor id nulla ultrices aliquet.\n\nMaecenas leo odio, condimentum id, luctus nec, molestie sed, justo. Pellentesque viverra pede ac diam. Cras pellentesque volutpat dui." },
    { "title": "I Do", "published": true, "content": "Duis bibendum. Morbi non quam nec dui luctus rutrum. Nulla tellus.\n\nIn sagittis dui vel nisl. Duis ac nibh. Fusce lacus purus, aliquet at, feugiat non, pretium quis, lectus.\n\nSuspendisse potenti. In eleifend quam a odio. In hac habitasse platea dictumst." },
    { "title": "Nightmare on Elm Street 2: Freddy's Revenge, A", "published": true, "content": "Duis aliquam convallis nunc. Proin at turpis a pede posuere nonummy. Integer non velit." },
    { "title": "Travelling Players, The (O thiasos)", "published": true, "content": "Maecenas tristique, est et tempus semper, est quam pharetra magna, ac consequat metus sapien ut nunc. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae; Mauris viverra diam vitae quam. Suspendisse potenti.\n\nNullam porttitor lacus at turpis. Donec posuere metus vitae ipsum. Aliquam non mauris." },
    { "title": "Family Jewels, The (Eierdiebe)", "published": false, "content": "Vestibulum quam sapien, varius ut, blandit non, interdum in, ante. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae; Duis faucibus accumsan odio. Curabitur convallis.\n\nDuis consequat dui nec nisi volutpat eleifend. Donec ut dolor. Morbi vel lectus in quam fringilla rhoncus." },
    { "title": "Thy Womb (Sinapupunan)", "published": false, "content": "Integer ac leo. Pellentesque ultrices mattis odio. Donec vitae nisi." },
    { "title": "External Affairs", "published": true, "content": "Nullam porttitor lacus at turpis. Donec posuere metus vitae ipsum. Aliquam non mauris." },
    { "title": "Cinemania", "published": false, "content": "Duis bibendum, felis sed interdum venenatis, turpis enim blandit mi, in porttitor pede justo eu massa. Donec dapibus. Duis at velit eu est congue elementum." },
    { "title": "Patience Stone, The", "published": false, "content": "Morbi non lectus. Aliquam sit amet diam in magna bibendum imperdiet. Nullam orci pede, venenatis non, sodales sed, tincidunt eu, felis." },
    { "title": "Opera", "published": false, "content": "Morbi porttitor lorem id ligula. Suspendisse ornare consequat lectus. In est risus, auctor sed, tristique in, tempus sit amet, sem.\n\nFusce consequat. Nulla nisl. Nunc nisl.\n\nDuis bibendum, felis sed interdum venenatis, turpis enim blandit mi, in porttitor pede justo eu massa. Donec dapibus. Duis at velit eu est congue elementum." },
    { "title": "Confidential Agent", "published": false, "content": "Vestibulum ac est lacinia nisi venenatis tristique. Fusce congue, diam id ornare imperdiet, sapien urna pretium nisl, ut volutpat sapien arcu sed augue. Aliquam erat volutpat.\n\nIn congue. Etiam justo. Etiam pretium iaculis justo.\n\nIn hac habitasse platea dictumst. Etiam faucibus cursus urna. Ut tellus." },
    { "title": "Wyoming Renegades", "published": true, "content": "Morbi non lectus. Aliquam sit amet diam in magna bibendum imperdiet. Nullam orci pede, venenatis non, sodales sed, tincidunt eu, felis." },
    { "title": "Mission to Moscow", "published": false, "content": "Praesent blandit. Nam nulla. Integer pede justo, lacinia eget, tincidunt eget, tempus vel, pede.\n\nMorbi porttitor lorem id ligula. Suspendisse ornare consequat lectus. In est risus, auctor sed, tristique in, tempus sit amet, sem." },
    { "title": "Strike Up the Band", "published": false, "content": "Duis bibendum, felis sed interdum venenatis, turpis enim blandit mi, in porttitor pede justo eu massa. Donec dapibus. Duis at velit eu est congue elementum.\n\nIn hac habitasse platea dictumst. Morbi vestibulum, velit id pretium iaculis, diam erat fermentum justo, nec condimentum neque sapien placerat ante. Nulla justo.\n\nAliquam quis turpis eget elit sodales scelerisque. Mauris sit amet eros. Suspendisse accumsan tortor quis turpis." },
    { "title": "Young Tom Edison", "published": false, "content": "Sed sagittis. Nam congue, risus semper porta volutpat, quam pede lobortis ligula, sit amet eleifend pede libero quis orci. Nullam molestie nibh in lectus." },
    { "title": "Last Lovecraft: Relic of Cthulhu, The", "published": false, "content": "Aenean lectus. Pellentesque eget nunc. Donec quis orci eget orci vehicula condimentum.\n\nCurabitur in libero ut massa volutpat convallis. Morbi odio odio, elementum eu, interdum eu, tincidunt in, leo. Maecenas pulvinar lobortis est.\n\nPhasellus sit amet erat. Nulla tempus. Vivamus in felis eu sapien cursus vestibulum." },
    { "title": "The Black Devil", "published": false, "content": "Sed ante. Vivamus tortor. Duis mattis egestas metus.\n\nAenean fermentum. Donec ut mauris eget massa tempor convallis. Nulla neque libero, convallis eget, eleifend luctus, ultricies eu, nibh." },
    { "title": "Battle of Los Angeles", "published": false, "content": "Morbi non lectus. Aliquam sit amet diam in magna bibendum imperdiet. Nullam orci pede, venenatis non, sodales sed, tincidunt eu, felis.\n\nFusce posuere felis sed lacus. Morbi sem mauris, laoreet ut, rhoncus aliquet, pulvinar sed, nisl. Nunc rhoncus dui vel sem." },
    { "title": "Beautician and the Beast, The", "published": true, "content": "Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Proin risus. Praesent lectus." },
    { "title": "Good Thief, The", "published": false, "content": "Cras mi pede, malesuada in, imperdiet et, commodo vulputate, justo. In blandit ultrices enim. Lorem ipsum dolor sit amet, consectetuer adipiscing elit.\n\nProin interdum mauris non ligula pellentesque ultrices. Phasellus id sapien in sapien iaculis congue. Vivamus metus arcu, adipiscing molestie, hendrerit at, vulputate vitae, nisl." },
    { "title": "Strawberry Statement, The", "published": true, "content": "Sed ante. Vivamus tortor. Duis mattis egestas metus.\n\nAenean fermentum. Donec ut mauris eget massa tempor convallis. Nulla neque libero, convallis eget, eleifend luctus, ultricies eu, nibh.\n\nQuisque id justo sit amet sapien dignissim vestibulum. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae; Nulla dapibus dolor vel est. Donec odio justo, sollicitudin ut, suscipit a, feugiat et, eros." },
    { "title": "Heart of Midnight", "published": false, "content": "In hac habitasse platea dictumst. Morbi vestibulum, velit id pretium iaculis, diam erat fermentum justo, nec condimentum neque sapien placerat ante. Nulla justo.\n\nAliquam quis turpis eget elit sodales scelerisque. Mauris sit amet eros. Suspendisse accumsan tortor quis turpis." },
    { "title": "Rich, Young and Pretty", "published": true, "content": "Aliquam quis turpis eget elit sodales scelerisque. Mauris sit amet eros. Suspendisse accumsan tortor quis turpis." },
    { "title": "Gilles' Wife (La femme de Gilles)", "published": false, "content": "Fusce posuere felis sed lacus. Morbi sem mauris, laoreet ut, rhoncus aliquet, pulvinar sed, nisl. Nunc rhoncus dui vel sem.\n\nSed sagittis. Nam congue, risus semper porta volutpat, quam pede lobortis ligula, sit amet eleifend pede libero quis orci. Nullam molestie nibh in lectus." },
    { "title": "Calle 54", "published": false, "content": "Maecenas ut massa quis augue luctus tincidunt. Nulla mollis molestie lorem. Quisque ut erat.\n\nCurabitur gravida nisi at nibh. In hac habitasse platea dictumst. Aliquam augue quam, sollicitudin vitae, consectetuer eget, rutrum at, lorem.\n\nInteger tincidunt ante vel ipsum. Praesent blandit lacinia erat. Vestibulum sed magna at nunc commodo placerat." },
    { "title": "Winnie the Pooh and Tigger Too", "published": true, "content": "Aliquam quis turpis eget elit sodales scelerisque. Mauris sit amet eros. Suspendisse accumsan tortor quis turpis." },
    { "title": "Godzilla vs. Megaguirus (Gojira tai Megagirasu: Jî shômetsu sakusen)", "published": false, "content": "In sagittis dui vel nisl. Duis ac nibh. Fusce lacus purus, aliquet at, feugiat non, pretium quis, lectus.\n\nSuspendisse potenti. In eleifend quam a odio. In hac habitasse platea dictumst.\n\nMaecenas ut massa quis augue luctus tincidunt. Nulla mollis molestie lorem. Quisque ut erat." },
    { "title": "Newton Boys, The", "published": true, "content": "Nulla ut erat id mauris vulputate elementum. Nullam varius. Nulla facilisi.\n\nCras non velit nec nisi vulputate nonummy. Maecenas tincidunt lacus at velit. Vivamus vel nulla eget eros elementum pellentesque." },
    { "title": "Slim Carter", "published": true, "content": "Sed ante. Vivamus tortor. Duis mattis egestas metus.\n\nAenean fermentum. Donec ut mauris eget massa tempor convallis. Nulla neque libero, convallis eget, eleifend luctus, ultricies eu, nibh." }
]

const categoriesMock = [
    { "name": "Turquoise" },
    { "name": "Indigo" },
    { "name": "Maroon" },
    { "name": "Green" },
    { "name": "Aquamarine" },
    { "name": "Orange" },
    { "name": "Pink" },
    { "name": "Fuscia" },
    { "name": "Violet" },
]

async function users() {
    usersMock.forEach(async user => {
        await prisma.user.create({
            data: user
        })
    })
}

async function categories() {
    categoriesMock.forEach(async category => {
        await prisma.category.create({
            data: category
        })
    })
}
async function posts() {
    const categoriesId = await prisma.category.findMany({
        select: { id: true },
    });
    const usersId = await prisma.user.findMany({
        select: { id: true },
    });

    postsMock.forEach(async (post) => {
        const categoriesConnected = categoriesId
            .filter(category => {
                return Math.random() > 0.6
            })
            .map(function (category) {
                return { id: category.id }
            })

        post.categories = {
            connect: categoriesConnected
        }
        post.author = {
            connect: {
                id: usersId[Math.floor(Math.random() * usersId.length)].id
            }
        }
        await prisma.post.create({
            data: post
        })
    })
}

async function main() {
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