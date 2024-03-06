const Model = require("./Model.js")

class Review extends Model {
    static get tableName() {
        return 'reviews'
    }

    static get relationMappings() {
        const { Cookbook, Comment } = require("./index.js")

        return {
            cookbooks: {
                relation: Model.HasManyRelation,
                modelClass: Cookbook,
                join: {
                    from: 'reviews.cookbooksId',
                    to: 'cookbooks.id'
                }
            },
            comments: {
                relation: Model.HasOneRelation,
                modelClass: Comment,
                join: {
                    from: 'reviews.id',
                    to: 'comments.reviewId'
                }
            }
        }
    }

    static get jsonSchema() {
        return {
            type: 'object',
            required: ['content', 'rating', 'cookbookId', 'userId'],
            properties: {
                id: {type: 'integer'},
                content: { type: 'string', minLength: 1, maxLength: 750},
                rating: { type: 'integer' },
                cookbookId: { type: 'integer' },
                userId: { type: 'integer' },
                postTime: { type: 'string', format: 'date-time' },
            }
        }
    }

}

module.exports = Review