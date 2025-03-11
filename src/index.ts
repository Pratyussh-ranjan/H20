import { Hono } from "hono";
import { serve } from "@hono/node-server"

const app = new Hono();
app.get('/', (context) => {
  return context.json({ message: "Hello world" }, 200);
})

app.get('/generate', (context) => {
  const randnum = Math.random();
  return context.json({ "randomNumbers": randnum }, 200);
})
app.get('/currentTime', (context) => {
  const date = new Date();
  return context.json({ "currentTime": date }, 200);
})
app.get('/environment', (context) => {
  const NV = process.version;
  const PT = process.platform;
  return context.json({ "NodeVersion": NV, "Platform": PT })
})

app.get('/puppet', (context) => {
  const name = context.req.query('name');
  const residence = context.req.query('addr');
  const school= context.req.query('school');

  return context.json({ name: name, residence: residence, school: school }, 200);
})

serve(app);
console.log('server is running on http://localhost:3000');