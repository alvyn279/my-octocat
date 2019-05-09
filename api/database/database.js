import mongoose from "mongoose";

export class DatabaseConnection {
    constructor() {
        this.hostname = process.env.HOSTNAME;
        this.port = process.env.MONGO_PORT;
        this.database = process.env.MONGO_DATABASE;
        this._connect();
    }

    _connect() {
        mongoose
            .connect(`mongodb://${this.hostname}:${this.port}/${this.database}`)
            .then(() => {
                console.log("Connected to MongoDB");
            })
            .catch(err => {
                console.error("Error connecting to database");
            });
    }
}
