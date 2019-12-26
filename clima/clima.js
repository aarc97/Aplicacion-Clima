const axios = require("axios");

const getClima = async (lat, lng) => {
  const res = await axios.get(
    `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lng}&APPID=2b1e0672f21efe27a4f83f4ede18fb43`
  );

  return res.data.main.temp;
};

module.exports = { getClima };
