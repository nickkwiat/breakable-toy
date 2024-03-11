const Model = require("./Model")

class Cookbook extends Model {
    static get tableName () {
        return 'cookbooks'
    } 

    static get jsonSchema() {
        return {
            type: 'object',
            required: ['title', 'author'],
            properties: {
                id: {type: 'integer'},
                title: { type: 'string', minLength: 1, maxLength: 100},
                author: { type: 'string', minLength: 1, maxLength: 100},
                categoryId: { type: 'integer'},
                description: { type: 'string', minLength: 1, maxLength: 200},
                publicationDate: { type: 'date'}
            }
        }
    } 
}

module.exports = Cookbook