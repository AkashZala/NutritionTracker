const pg = require('pg');
const client = new pg.Client('postgres://localhost/nutrition_db');
const { v4 } = require('uuid');

const fetchFood = async()=> {
    const SQL = `
    SELECT *
    FROM food
    `;
    const response = await client.query(SQL);
    return response.rows;
}

const seed = async() => {
    const SQL = `
        DROP TABLE IF EXISTS food;

        CREATE TABLE food(
        id SERIAL PRIMARY KEY,
        name VARCHAR(255) UNIQUE NOT NULL,
        calories INTEGER NOT NULL,
        carbohydrate INTEGER NOT NULL,
        protein INTEGER NOT NULL,
        fat INTEGER NOT NULL
        );

        INSERT INTO food(name, calories, protein, carbohydrate, fat)
            VALUES (
                'Protein Shake',
                250,
                48,
                3,
                1

            );
    `;
  await client.query(SQL);
}

module.exports = {
    client,
    fetchFood,
    seed
}