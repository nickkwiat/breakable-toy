import {Category} from "../../models/index.js"

class CategorySeeder {
    static async seed() {
        const categoryData = [
            { 
                name: "Sweet"
            },
            { 
                name: "Savory"
            },
            { 
                name: "Drinks"
            },
            { 
                name: "Miscellaneous"
            }
        ]

        for (const singleCategoryData of categoryData) {
            const currentCategory = await Category.query().findOne({ name: singleCategoryData.name })
            if (!currentCategory) {
                await Category.query().insert(singleCategoryData)
            }
        }
    }
}
 export default CategorySeeder