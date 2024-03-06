const Model = require("./Model.js")

class Join_Cookbook_Tag extends Model {
    static get tableName() {
        return 'join_cookbooks_tags'
    }

    static get relationMappings() {
        const { Cookbook, Tag  } = require("./index.js")

        return {
            cookbooks: {
                relation: Model.BelongsToOneRelation,
                modelClass: Cookbook ,
                join: {
                    from: 'join_cookbooks_tags.cookbookId',
                    to: 'cookbooks.id'
                }
            },
            tag: {
                relation: Model.BelongsToOneRelation,
                modelClass: Tag,
                join: {
                    from: 'join_cookbooks_tags.tagId',
                    to: 'tags.id'
                }
            }
        }
    }

    static get jsonSchema() {
        return {
            type: 'object',
            required: ['cookbookId', 'tagId'],
            properties: {
                cookbookId: { type: 'integer' },
                tagId: { type: 'integer' }
            }
        }
    }
}

module.exports = Join_Cookbook_Tag