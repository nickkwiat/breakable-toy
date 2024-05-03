import {Cookbook} from "../../models/index.js"

class CookbookSeeder {
    static async seed() {
        const cookbookData = [
            { 
                title: "BraveTart: Iconic American Desserts",
                author: "Stella Parks",
                categoryId: 1,
                description: "BraveTart celebrates classic American desserts...",
                publicationDate: "2017-08-17"
            },
            {
                title: "Can You Smell What the Rock is Cooking",
                author: "Dwayne Johnson",
                categoryId: 2,
                description: "Where geology and the world of culinary arts collide.",
                publicationDate: "2024-01-01"
            },
            {
                title: 'Les Petits Macarons: Colorful French Confections to Make at Home',
                author: 'Kathryn Gordon & Anne E McBride',
                categoryId: 1,
                description: "The definitive guide to make french macarons in the comfort of your own home",
                publicationDate: "2011-10-4"
            },
            {
                title: "Donkey's House of Waffles",
                author: "Ed Murphy",
                categoryId: 2,
                description: 'In the morning, we make waffles',
                publicationDate: "2001-04-20"
            },
            {
                title: "Recette",
                author: "Ksenia Penkina",
                categoryId: 1,
                description: "In this new second edition, you will find more recipes, more techniques and the most popular cake & glaze recipes by Ksenia Penkina.",
                publicationDate: "2022-01-01"
            },
            {
                title: "The Perfect Scoop",
                author: "David Lebovitz",
                categoryId: 1,
                description: "New York Times best-selling cookbook author and blogger David Lebovitz emphasizes classic and sophisticated flavors alongside a bountiful helping of personality and proven technique.",
                publicationDate: "2018-03-27"
            },
            {
                title: "Milk Street: Cookish: Throw It Together: Big Flavors. Simple Techniques.",
                author: "Christina Kimball",
                categoryId: 2,
                description: "Throw together fast, flavorful meals in no time with just a handful of ingredients with 200 highly cookable, delicious, and incredibly simple recipes from the James Beard Award-winning team at Milk Street.",
                publicationDate: "2020-01-01"
            },
            {
                title: "Sustain",
                author: "Jo Barret",
                categoryId: 2,
                description: "Sustain: Groundbreaking Recipes And Skills That Could Save The Planet is an inspiring cookbook and beautifully designed manual of ideas to consider, practices to adopt and techniques to learn for a more sustainable kitchen.",
                publicationDate: "2023-8-30"
            },
            {
                title: "Steve the Bartender's Cocktail Guide: Tools - Techniques - Recipes",
                author: "Steve Roennfeldt",
                categoryId: 3,
                description: "Craft delightful drinks at home and impress your guests with your newfound bartending expertise!",
                publicationDate: "2022-11-15"
            },
            {
                title: "Let's Do Drinks: Inspirational tips, personal secrets and 75+ recipes for a fancy night out without leaving the house",
                author: "Elliot Clark",
                categoryId: 3,
                description: "Let's Do Drinks is a cocktail book that celebrates the art of crafting the perfect drink at home. The book features 75 recipes of classic and modern cocktails, as well as tips and tricks for creating the perfect drink.",
                publicationDate: "2024-4-16"
            },
            {
                title: "Cocktails: Modern Favorites to Make at Home",
                author: "Williams Sonoma Test Kitchen",
                categoryId: 3,
                description: "Sustain: Groundbreaking Recipes And Skills That Could Save The Planet is an inspiring cookbook and beautifully designed manual of ideas to consider, practices to adopt and techniques to learn for a more sustainable kitchen.",
                publicationDate: "2018-03-08"
            },
            {
                title: "Death & Co: Modern Classic Cocktails",
                author: "David Kaplan",
                categoryId: 2,
                description: "The definitive guide to the contemporary craft cocktail movement, from one of the highest-profile, most critically lauded, and influential bars in the world.",
                publicationDate: "2014-10-07"
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