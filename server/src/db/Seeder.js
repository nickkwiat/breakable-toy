/* eslint-disable no-console */
import { connection } from "../boot.js";
import CookbookSeeder from "./seeders/CookbookSeeder.js";

class Seeder {
  static async seed() {
    try{
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
