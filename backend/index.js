const server = require('./src/app.js');
const { conn } = require('./src/db.js');

const PORT = 3001
// Syncing all the models at once.
// develop: force true - after turn into false- asi no cambia más las tablas
conn.sync({ force: true }).then(() => {
    server.listen(3001, () => {
        console.log(`Server listening on http://localhost:${PORT}`)
    });
});