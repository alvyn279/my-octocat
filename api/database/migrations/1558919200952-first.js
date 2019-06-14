import User from "../../models/User";
import { DatabaseConnection } from "../database";

export async function up() {
    let db = new DatabaseConnection();
    let testUser = new User({
        username: "tester",
        fullname: "TFBAG"
    });
    await testUser.save();
}

export async function down() {
    let db = new DatabaseConnection();
    await User.remove();
}
