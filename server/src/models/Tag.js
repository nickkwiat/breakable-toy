const Model = require("./Model.js")

class Tag extends Model {
    static get tableName() {
        return 'tags'
    }

    static get relationMappings() {
        const { Cookbook  } = require("./index.js")

        return {
            cookbooks: {
                relation: Model.ManyToManyRelation,
                modelClass: Cookbook,
                join: {
                    from: 'tags.id',
                    through: {
                        from: 'join_cookbooks_tags.tagId',
                        to: 'join_cookbooks_tags.cookbookId'
                    },
                    to:  'cookbooks.id'
                }
            }
        }
    }

    static get jsonSchema() {
        return {
            type: 'object',
            required: ['name'],
            properties: {
                id: { type: 'integer' },
                name: { type: 'string', minLength: 1, maxLength: 100 }
            }
        }
    }

}

module.exports = Tag