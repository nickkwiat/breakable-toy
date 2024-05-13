const Model = require("./Model.js")

class Review extends Model {
    static get tableName () {
        return 'reviews'
    } 

    static get relationMappings() {
        const { User, Cookbook } = require("./index.js")
        return {
            user: {
                relation: Model.BelongsToOneRelation,
                modelClass: User,
                join: {
                    from: "reviews.userId",
                    to: "users.id"
                }
            },
            cookbook: {
                relation: Model.BelongsToOneRelation,
                modelClass: Cookbook,
                join: {
                    from: "reviews.cookbookId",
                    to: "cookbooks.id"
                }
            }
        } 
    }

    static get jsonSchema() {
        return {
            type: 'object',
            required: ['content', 'userId'],
            properties: {
                id: {type: 'integer'},
                content: { type: 'string', minLength: 1},
                userId: { type: 'integer'},
                cookbookId: { type: 'integer'}
            }
        }
    }
}    

module.exports = Review