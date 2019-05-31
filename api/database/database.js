import mongoose from "mongoose";
import _ from "../config/env";

export class DatabaseConnection {
    constructor() {
        this.hostname = process.env.HOSTNAME;
        this.port = process.env.MONGO_PORT;
        this.database = process.env.MONGO_DATABASE;
        this._connect();
    }

    async _connect() {
        try {
            await mongoose.connect(`mongodb://${this.hostname}:${this.port}/${this.database}`);
            console.log('Connected to Mongo!');
        } catch(err) {
            console.error('Failed connection to Mongo', err);
        }
    }
}
