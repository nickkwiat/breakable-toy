/* eslint-disable no-console */
import { connection } from "../boot.js";
import CategorySeeder from "./seeders/CategorySeeder.js";
import CommentSeeder from "./seeders/CommentSeeder.js";
import CookbookSeeder from "./seeders/CookbookSeeder.js";
import ReviewSeeder from "./seeders/ReviewSeeder.js";

class Seeder {
  static async seed() {
    try{
      // await CategorySeeder.seed()
      await CookbookSeeder.seed()
      // await ReviewSeeder.seed()
      // await CommentSeeder.seed()
    
      console.log("Seeding was successful")
    } catch (error) {
      console.log("Seeding failed: ", error)
    } finally {
      console.log("Done!");
      await connection.destroy();
    }
  }
}

export default Seeder;
