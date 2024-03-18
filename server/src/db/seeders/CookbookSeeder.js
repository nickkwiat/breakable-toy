import {Cookbook} from "../../models/index.js"

class CookbookSeeder {
    static async seed() {
        const cookbookData = [
            { 
                title: "BraveTart: Iconic American Desserts",
                author: "Stella Parks",
                description: "BraveTart celebrates classic American desserts...",
                publicationDate: "2017-08-17"
            },
            {
                title: "Can You Smell What the Rock is Cooking",
                author: "Dwayne Johnson",
                description: "Where geology and the world of culinary arts meet.",
                publicationDate: "2024-01-01"
            }
        ]

        for (const singleCookbookData of cookbookData) {
            const currentCookbook = await Cookbook.query().findOne({ title: singleCookbookData.title })
            if (!currentCookbook) {
                await Cookbook.query().insert(singleCookbookData)
            }
        }
    }
}
 export default CookbookSeeder