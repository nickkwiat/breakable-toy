import {Cookbook} from "../../models/index.js"

class CookbookSeeder {
    static async seed() {
        const cookbookData = [
            { 
                title: "BraveTart: Iconic American Desserts",
                author: "Stella Parks",
                categoryId: 1,
                description: "BraveTart celebrates classic American desserts, yet is much more than a cookbook, as Stella Parks delves into the surprising stories of how our favorite desserts came to be, from chocolate chip cookies that predate the Tollhouse Inn to the prohibition-era origins of ice cream sodas and floats.",
            },
            {
                title: "Can You Smell What the Rock is Cooking",
                author: "Dwayne Johnson",
                categoryId: 2,
                description: "Where geology and the world of culinary arts collide. Dwayne Johnson takes you on a journey through the world of cooking with rocks.",
            },
            {
                title: 'Les Petits Macarons: Colorful French Confections to Make at Home',
                author: 'Kathryn Gordon & Anne E McBride',
                categoryId: 1,
                description: "Les Petits Macarons is a book by Kathryn Gordon and Anne E. McBride that provides easy-to-follow instructions for making bakery-quality macarons at home. The book is about colorful French confections that are delicate and refined, with a light and airy texture and subtle flavors. Macarons can also have savory flavors like saffron, parsley, and ancho chile, and fillings like hummus, foie gras with black currant, or duck confit with port. "
            },
            {
                title: "Donkey's House of Waffles",
                author: "Ed Murphy",
                categoryId: 2,
                description: "In the morning, we're make waffles and in the evening, we're making waffles. We eat waffles for breakfast, lunch, and dinner" ,
            },
            {
                title: "Recette",
                author: "Ksenia Penkina",
                categoryId: 1,
                description: "In this new second edition, you will find more recipes, more techniques and the most popular cake & glaze recipes A total of 25 desserts covering 110.",
            },
            {
                title: "The Perfect Scoop",
                author: "David Lebovitz",
                categoryId: 1,
                description: "Ripe seasonal fruits. Fragrant vanilla, toasted nuts, and spices. Heavy cream and bright liqueurs. Chocolate, chocolate, and more chocolate. Every luscious flavor imaginable is grist for the chill in The Perfect Scoop, pastry chef David Lebovitz’s gorgeous guide to the pleasures of homemade ice creams, sorbets, granitas, and more.With an emphasis on intense and sophisticated flavors and a bountiful helping of the author’s expert techniques, this collection of frozen treats ranges from classic (Chocolate Sorbet) to comforting (Tin Roof Ice Cream), contemporary (Mojito Granita) to cutting edge (Pear-Pecorino Ice Cream), and features an arsenal of sauces, toppings, mix-ins, and accompaniments (such as Lemon Caramel Sauce, Peanut Brittle, and Profiteroles) capable of turning simple ice cream into perfect scoops of pure delight. ",
            },
            {
                title: "Milk Street: Cookish: Throw It Together: Big Flavors. Simple Techniques.",
                author: "Christina Kimball",
                categoryId: 2,
                description: "In Cookish, Christopher Kimball and his team of cooks and editors harness the most powerful cooking principles from around the world to create 200 of the simplest, most delicious recipes ever created. These recipes, most with six or fewer ingredients (other than oil, salt, and pepper), make it easy to be a great cook -- the kind who can walk into a kitchen and throw together dinner in no time.",
            },
            {
                title: "Sustain",
                author: "Jo Barret",
                categoryId: 2,
                description: "Sustain: Groundbreaking Recipes And Skills That Could Save The Planet is an inspiring cookbook and beautifully designed manual of ideas to consider, practices to adopt and techniques to learn for a more sustainable kitchen."
            },
            {
                title: "Steve the Bartender's Cocktail Guide: Tools - Techniques - Recipes",
                author: "Steve Roennfeldt",
                categoryId: 3,
                description: "Craft delightful drinks at home and impress your guests with your newfound bartending expertise!",
            },
            {
                title: "Let's Do Drinks: Inspirational tips, personal secrets and 75+ recipes for a fancy night out without leaving the house",
                author: "Elliot Clark",
                categoryId: 3,
                description: "Let's Do Drinks is a cocktail book that celebrates the art of crafting the perfect drink at home. The book features 75 recipes of classic and modern cocktails, as well as tips and tricks for creating the perfect drink."
            },
            {
                title: "Cocktails: Modern Favorites to Make at Home",
                author: "Williams Sonoma Test Kitchen",
                categoryId: 3,
                description: "Sustain: Groundbreaking Recipes And Skills That Could Save The Planet is an inspiring cookbook and beautifully designed manual of ideas to consider, practices to adopt and techniques to learn for a more sustainable kitchen.",
            },
            {
                title: "Death & Co: Modern Classic Cocktails",
                author: "David Kaplan",
                categoryId: 2,
                description: "The definitive guide to the contemporary craft cocktail movement, from one of the highest-profile, most critically lauded, and influential bars in the world.",
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