const express = require("express");
const axios = require("axios");
const cors = require("cors");

const app = express();
app.use(express.json());
app.use(cors());

const users = {};

app.post("/api/users/scores", async (req, res) => {
  try {
    const { name, score } = req.body;

    let user = users[name];
    if (user) {
      user.score += score;
    } else {
      const genderResponse = await axios.get(
        `https://api.genderize.io?name=${name}`
      );
      const { gender, probability } = genderResponse.data;

      const determinedGender = probability > 0.95 ? gender : "undetermined";

      // Get random user data based on gender
      const randomUserResponse = await axios.get(
        `https://randomuser.me/api/?${
          determinedGender !== "undetermined"
            ? "gender=" + determinedGender
            : ""
        }`
      );
      const userDetails = randomUserResponse.data.results[0];
      user = {
        ...userDetails,
        id: crypto.randomUUID(),
        name,
        score,
        gender: determinedGender,
        createdAt: new Date(),
      };
    }

    // Save to in-memory array
    users[name] = user;
    res.json(user);
  } catch (error) {
    console.error("Error:", error);
    res.status(500).json({ error: error.message });
  }
});

app.get("/api/users/leaderboard", async (req, res) => {
  try {
    const usersArray = Object.values(users);
    const topUsers = usersArray.sort((a, b) => b.score - a.score).slice(0, 10);
    res.json(topUsers);
  } catch (error) {
    console.error("Error:", error);
    res.status(500).json({ error: error.message });
  }
});

const PORT = process.env.PORT || 4000;
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
