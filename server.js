require("dotenv").config();
const app = require("./src/app")

const port = 8080

app.listen(port, () => {
    console.log('servidor rodando na porta', port);
});