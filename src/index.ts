import { Hono } from 'hono'
import { serve } from '@hono/node-server'
const app = new Hono();

const Reminders: string[] = [];

app.get('/', (c) => {
  return c.json({ message: 'Hello world' }, 200)
})

app.get('/reminders', (context) => {
  return context.json({ Reminders }, 200);
})
app.post('/AddReminders', async (context) => {
  const body = await context.req.json();

  Reminders.push(body.reminders);
  return context.json({ Reminders },201)
})
serve(app);

console.log('server is running on http://localhost:3000');