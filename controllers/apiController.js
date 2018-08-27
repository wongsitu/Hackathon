function index(req, res) {
  res.json({
    message: 'Disaster Artists',
    documentation_url: 'google.com',
    base_url: 'localhost:3000',
    endpoints: [
      {
        method: 'GET', path: '/api', description: 'Describes available endpoints'
      }
    ]
  });
}

module.exports = {
  index: index
}
