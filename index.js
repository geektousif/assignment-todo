const app = require("./app");
const config = require("./config");

app.listen(config.PORT, () => {
  console.log("Server running http://localhost:" + config.PORT);
});
