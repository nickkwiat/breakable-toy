const Model = require("./Model.js")

class Cookbook extends Model {
    static get tableName () {
        return 'cookbooks'
    } 

    static get relationMappings() {
        const { Category, User, Review } = require("./index.js")
        return {
            category: {
                relation: Model.BelongsToOneRelation,
                modelClass: Category,
                join: {
                    from: "cookbooks.categoryId",
                    to: "categories.id"
                }
            },
            user: {
                relation: Model.BelongsToOneRelation,
                modelClass: User,
                join: {
                    from: "cookbooks.userId",
                    to: "users.id"
                }
            },
            reviews: {
                relation: Model.HasManyRelation,
                modelClass: Review,
                join: {
                    from: "cookbooks.id",
                    to: "reviews.cookbookId"
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
                userId: { type: 'integer'},
            }
        }
    } 
}

module.exports = Cookbook