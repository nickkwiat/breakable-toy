const Model = require("./Model")

class Category extends Model {
    static get tableName () {
        return 'categories'
    }

    static get relationMappings() {
        const { Cookbook } = require("./index.js")

        return {
            cookbooks: {
                relation: Model.HasManyRelation,
                modelClass: Cookbook,
                join: {
                    from: 'categories.id',
                    to: 'cookbooks.categoryId'
                }
            }
        }
    }
    
    static get jsonSchema() {
        return {
            type: 'object',
            required: ['name'],
            properties: {
                id: { type: 'integer'},
                name: { type: 'string', minLength: 1, maxLength: 100},
            }
        }
    } 
}

module.exports = Category