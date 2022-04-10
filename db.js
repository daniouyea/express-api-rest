import { readFile } from 'fs/promises'

const db = {
    file: './data.json',

    async DB() {
        const file = await readFile(this.file, 'utf-8')
        return JSON.parse(file)
    },
    async table(table) {
        const data = await this.DB()
        return data[table]
    },
    async addToDB({ table, data }) {
        let json = await this.table(table)
        data.id = this.getId(table)
        json.push(data)
        await writeFile(this.file, JSON.stringify(json))
    },
    async updateDB(data) {
        const json = this.DB()
        let row = json[data.table].find(row => row.id === data.data.id)
        Object.assign(row, data.data)
        await writeFile(this.file, JSON.stringify(json))
    },
    async removeDB(data) {
        const json = this.DB()
        json[data.table] = json[data.table].filter(row => row.id !== data.data.id)
        await writeFile(this.file, JSON.stringify(json))
    },
    async getId(table) {
        const json = await this.table(table)
        const lastId = json.reduce((last, row) => {
            return (row.id > last) ? row.id : last
        }, 0)
        return lastId + 1
    },

    async users() {
        return await this.table('users')
    },
    async user(id) {
        const users = await this.table('users')
        return users.find(user => user.id === parseInt(id))
    },
    addUser(data) {
        this.addToDB({
            table: 'users',
            data: data
        })
    },
    updateUser(data) {
        this.updateDB({
            table: 'users',
            data: data
        })
    },
    removeUser(id) {
        const users = this.table('users')
        const index = users.findIndex(user => user.id === id)
        users.splice(index, 1)
        return users
    },

}

export default db
