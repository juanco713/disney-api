const express = require('express');
const server = express();
require('dotenv').config();
const yaml = require('js-yaml');
const fs = require('fs');
const swaggerUi = require('swagger-ui-express');
const { connectDB } = require('./src/database/index')

async function main(){
    const {
        DB_HOST,
        DB_USERNAME,
        DB_PASSWORD,
        DB_DATABASE
    } = process.env;

    server.use(express.json());
    server.use(require('./src/routes/character'));
    server.use(require('./src/routes/movies'));
    server.use(require('./src/routes/register'));
    server.use(require('./src/routes/genre'));
    server.listen(process.env.PORT, () => console.log(`Conected to port ${process.env.PORT}`));
    await connectDB(DB_HOST,DB_USERNAME,DB_PASSWORD,DB_DATABASE);

    function loadSwagger(server) {
        try {
            const doc = yaml.load(fs.readFileSync('./src/doc/doc_api.yml', 'utf8'));
            server.use('/api-docs', swaggerUi.serve, swaggerUi.setup(doc));
        } catch (e) {
            console.log(e);
        }
    };

    loadSwagger(server);
}

main();

module.exports = {
    server
};

