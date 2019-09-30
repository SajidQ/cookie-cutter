const Pool = require('pg').Pool
const pool = new Pool({
  user: 'qandeelsajid',
  host: 'localhost',
  database: 'qandeel',
  password: 'Smile123@#',
  port: 5432,
})


const getUsers = (request, response) => {
  pool.query('SELECT * FROM users ORDER BY id ASC', (error, results) => {
    if (error) {
      throw error
    }
    response.status(200).json(results.rows)
  })
}

module.exports = {
  getUsers,
}
