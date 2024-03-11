/* eslint-disable no-await-in-loop, no-restricted-syntax */
import {Category} from "../../models/index.js"

class CategorySeeder {
    static async seed() {
        const categoryData = [
            { name: "Sweet"},
            { name: "Savory" },
            { name: "Beverage" }
        ]

        for (const singleCategoryData of categoryData) {
            console.log( Category )
            console.log(singleCategoryData , categoryData )
            const currentCategory = await Category.query().findOne({ name: singleCategoryData.name })
            if (!currentCategory) {
                await Category.query().insert(singleCategoryData)
            }
        }
    }
}
 export default CategorySeeder