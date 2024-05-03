/* eslint-disable no-console */
import { connection } from "../boot.js";
import CookbookSeeder from "./seeders/CookbookSeeder.js";
import CategorySeeder from "./seeders/CategorySeeder.js";

class Seeder {
  static async seed() {
    try{
      await CategorySeeder.seed()
      await CookbookSeeder.seed()
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
