import sql from "better-sqlite3";

const db = sql("meals.db");

export async function getMeals() {
  await new Promise((resolve) =>
    setTimeout(resolve, 5000)
  ); /*This is just for testing to delay the server calling this getMeals*/
  //   throw new Error("Loading meals failed");
  return db.prepare("SELECT * FROM meals").all();
}
