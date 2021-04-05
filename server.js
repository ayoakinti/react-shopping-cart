const express = require("express");
const cors = require("cors");

const app = express();

// Bodyparser middleware
app.use(express.json());
app.use(express.urlencoded({ extended: false }));

// Cors middleware
app.use(cors());

app.use("/login", (req, res) => {
  req.body.email === "reactecommerce@gmail.com" &&
  req.body.password === "ecommerce"
    ? res.status(200).json({
        token: "test123",
        user: {
          firstName: "React",
          lastName: "Tester",
          email: "reactecommerce@gmail.com",
        },
      })
    : res.status(403).json({
        message: "Invalid email/password",
      });
});
app.use((req, res, next) => {
  res.setHeader("Access-Control-Allow-Origin", "*");
  res.setHeader("Access-Control-Allow-Credentials", true);
  res.setHeader(
    "Access-Control-Allow-Methods",
    "PUT, GET, POST, DELETE, OPTIONS"
  );
  res.setHeader(
    "Access-Control-Allow-Headers",
    "Origin, X-Requested-With, Content-Type, Accept, Authorization"
  );
  // for preflight
  if (req.method === "OPTIONS") {
    return res.status(200).end();
  }
  next();
});

const PORT = process.env.PORT || "8080";

app.listen(PORT, () => console.log(`app listening on port ${PORT}`));
