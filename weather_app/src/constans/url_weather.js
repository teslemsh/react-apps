const location = "Madrid,es";
const api_key = "ebbcdcb3cff5fe8aba19af4789f39a4f";
const url_base_weather = "http://api.openweathermap.org/data/2.5/weather";
const api_weather = `${url_base_weather}?q=${location}&appid=${api_key}`;

export default api_weather