const app = require("./app");
const chalk = require('chalk');
const config = require("./config/config");
const PORT = config.app.port;


app.listen(PORT, () => {
    console.log(chalk.black.bold.bgWhite.underline(`server is running at http://localhost:${PORT}`));
});