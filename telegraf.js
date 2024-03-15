require("dotenv").config();

const baseUrl = `https://api.telegram.org/bot${process.env.BOT_TOKEN}/`;

const sendMessage = async (message) => {
  const url = `${baseUrl}sendMessage?chat_id=${process.env.CHAT_ID}&text=${message}`;
  const response = await fetch(url);
  return response.ok;
};

module.exports = {
  sendMessage,
};
