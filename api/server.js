const express = require('express');
const redis = require('redis');
const cors = require('cors');

const app = express();
// Allow our React app to make requests to this API
app.use(cors());

// Connect to Redis using the environment variable from docker-compose
const client = redis.createClient({
  url: `redis://${process.env.REDIS_HOST || 'localhost'}:6379`
});

client.on('error', (err) => console.log('Redis Client Error', err));
client.connect();

// The endpoint React will call
app.get('/api/count', async (req, res) => {
  const count = await client.incr('react_hits');
  res.json({ count });
});

app.listen(5000, () => console.log('API listening on port 5000'));


// Endpoint to reset the counter
app.delete('/api/reset', async (req, res) => {
  await client.del('react_hits');
  res.json({ success: true, count: 0 });
});