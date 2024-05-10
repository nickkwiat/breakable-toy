const Model = require("./Model.js")

class Cookbook extends Model {
    static get tableName () {
        return 'cookbooks'
    } 

    static get relationMappings() {
        const { Category } = require("./index.js")
        return {
            category: {
                relation: Model.BelongsToOneRelation,
                modelClass: Category,
                join: {
                    from: "cookbooks.categoryId",
                    to: "categories.id"
                }
            }

        }
    }

    static get jsonSchema() {
        return {
            type: 'object',
            required: ['title', 'author'],
            properties: {
                id: {type: 'integer'},
                title: { type: 'string', minLength: 1, maxLength: 500},
                author: { type: 'string', minLength: 1, maxLength: 500},
                categoryId: { type: 'integer'},
                description: { type: 'string', minLength: 1},
                publicationDate: { type: 'string'}
            }
        }
    } 
}

module.exports = Cookbook