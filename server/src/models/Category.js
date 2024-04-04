const Model = require("./Model")

class Category extends Model {
    static get tableName () {
        return 'categories'
    } 

    static get relationMappings() {
        const { Cookbook } = require("./index.js")

        return {
            cookbooks: {
                relations: Model.HasManyRelation,
                modelsClass: Cookbook,
                join: {
                    from: "categories.id",
                    to: "cookbooks.categoryId"
                }
            }

        }
    }
}

module.exports = Category