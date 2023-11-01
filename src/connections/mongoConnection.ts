import mongoose from "mongoose";

const DB_URL = process.env.DB_URL || "";

class MongoConnection {
  private static instance: MongoConnection;
  private _dbConn!: mongoose.Connection;

  private constructor() {
    this.connect();
  }

  private async connect() {
    await mongoose.connect(DB_URL);
    this._dbConn = mongoose.connection;
  }

  public static getInstance() {
    if (!MongoConnection.instance) {
      MongoConnection.instance = new MongoConnection();
    }
    return MongoConnection.instance;
  }

  public getConnection() {
    return this._dbConn;
  }
}

export default MongoConnection;
