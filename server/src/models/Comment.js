const Model = require("./Model.js")

class Comment extends Model {
    static get tableName() {
        return 'comments'
    }

    static get relationMappings() {
        const { Review } = require("./index.js")

        return {
            reviews: {
                relation: Model.HasOneRelation,
                modelClass: Review,
                join: {
                    from: 'comments.reviewId',
                    to: 'reviews.id'
                }
            }
        }
    }

    static get jsonSchema() {
        return {
            type: 'object',
            required: ['content'],
            properties: {
                id: {type: 'integer'},
                content: { type: 'string', minLength: 1, maxLength: 750},
                reviewId: { type: 'integer' },
                userId: { type: 'integer' }
            }
        }
    }
}

module.exports = Comment
