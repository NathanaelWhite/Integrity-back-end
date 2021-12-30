const express = require("express");
const mongoose = require("mongoose");
const userRoutes = require("./routes/user-routes");
const membershipRoutes = require("./routes/membership-routes")

const PORT = process.env.PORT || 3001;
const app = express();

app.use(express.urlencoded({ extended: true }));
app.use(express.json());

mongoose.connect(
  process.env.MONGODB_URI || "mongodb://localhost/integritysandc"
);

const connection = mongoose.connection;
connection.once('open', () => {
  console.log("MongoDB database connection established");
});

app.use('/memberships', membershipRoutes);
app.use('/users', userRoutes);

app.listen(PORT, () => {
  console.log(`API server now on port ${PORT}`);
});
