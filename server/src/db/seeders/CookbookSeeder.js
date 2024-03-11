/* eslint-disable no-await-in-loop, no-restricted-syntax */
import {Cookbook} from "../../models/index.js"

class CookbookSeeder {
    static async seed() {
        const cookbookData = [
            { 
                title: "BraveTart: Iconic American Desserts",
                author: "Stella Parks",
                categoryId: 1,
                description: "BraveTart celebrates classic American desserts...",
                publicationDate: new Date("2017-08-17").toISOString()
            },
            {
                title: "Test Cookbook: Can You Smell What the Rock is Cooking",
                author: "Dewayne Johnson",
                categoryId: 2,
                description: "Where geology and the world of culinary arts meet.",
                publicationDate: new Date("2024-01-01").toISOString()
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