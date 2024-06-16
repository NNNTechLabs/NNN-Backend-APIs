const mongoose = require("mongoose");
const Double = require("@mongoosejs/double");
const schema = mongoose.Schema(
  {
    UserID: { type: mongoose.Schema.Types.ObjectId, ref: "User" },
    QuestID: { type: mongoose.Schema.Types.ObjectId, ref: "DiscordQuest" },
    IsDone: { type: Number, default: 0 },
  },
  { timestamps: true }
);

module.exports = mongoose.model("UserDiscordQuest", schema);
