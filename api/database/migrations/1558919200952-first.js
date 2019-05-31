import User from "../../models/User";
import { DatabaseConnection } from "../database";

export async function up() {
    let db = new DatabaseConnection();
    let testUser = new User({
        username: "tester",
        fullname: "TFBAG"
    });
    let a = await testUser.save();
}

export async function down() {
    console.log("hi");
    let db = new DatabaseConnection();
    await this("User").remove();
    await this('Repository').remove();
}
