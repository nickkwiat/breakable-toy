const Model = require("./Model")

class Cookbook extends Model {
    static get tableName () {
        return 'cookbooks'
    } 

    static get relationMappings() {
        const { Category } = require("./index.js")

        return {
            category: {
                relations: Model.BelongsToOneRelation,
                modelsClass: Category,
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
                title: { type: 'string', minLength: 1, maxLength: 100},
                author: { type: 'string', minLength: 1, maxLength: 100},
                categoryId: { type: 'integer'},
                description: { type: 'string', minLength: 1, maxLength: 200},
                publicationDate: { type: 'string'}
            }
        }
    } 
}

module.exports = Cookbook