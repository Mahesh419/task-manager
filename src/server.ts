import "dotenv/config";

import app from "./app";
import DbConnection from "./connections/mongoConnection";

const PORT = process.env.PORT || 8080;

app.listen(PORT, () => console.log("Server listening on port " + PORT));

export const dbConn = DbConnection.getInstance();
