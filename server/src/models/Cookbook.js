const Model = require("./Model")

class Cookbook extends Model {
    static get tableName () {
        return 'cookbooks'
    }

    static get relationMappings() {
        const { Category, Review, Tag} = require("./index.js")

        return {
            categories: {
                relation: Model.HasOneRelation,
                modelClass: Category,
                join: {
                    from: 'cookbooks.categoryId',
                    to: 'categories.id'
                }
            },

            reviews: {
                relation: Model.HasOneRelation,
                modelClass: Review,
                join: {
                    from: 'cookbooks.id',
                    to: 'reviews.cookbookId'
                }
            },
            tags: {
                relation: Model.ManyToManyRelation,
                modelClass: Tag,
                join: {
                    from: 'cookbooks.id',
                    through: {
                        from: 'join_cookbooks_tags.cookbookId',
                        to: 'join_cookbooks_tags.tagId'
                    },
                    to: 'tags.id'
                }
            }
        }
    }

    static get jsonSchema() {
        return {
            type: 'object',
            required: [ 'title', 'author', 'categoryId'],
            properties: {
                id: {type: 'integer'},
                title: { type: 'string', minLength: 1, maxLength: 500},
                author: { type: 'string', minLength: 1, maxLength: 250},
                categoryId: { type: 'integer'},
                description: { type: 'string', minLength: 1, maxLength: 750},
                publicationDate: { type: 'string', format: 'date-time'}
            }
        }
    } 
}

module.exports = Cookbook