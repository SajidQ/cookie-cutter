const Pool = require('pg').Pool
const pool = new Pool({
  user: 'rupxzqqpwigzck',
  host: 'ec2-174-129-227-80.compute-1.amazonaws.com',
  database: 'd2l9sndnefeuim',
  password: 'ab588742973de36e8601fba9e51ce6f81d82a103f39af422c41b446484d8c4c0',
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
