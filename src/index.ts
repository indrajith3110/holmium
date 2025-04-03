import { serve } from '@hono/node-server'
import { Hono } from 'hono'

 
const app = new Hono();

app.get('/ping', (c) => {
    return c.json({ pong: 'Hello, World' });
});

app.get('/college', (c) => {
    return c.text(' Hello, College'); 
});
     

export default app;


serve({
  fetch: app.fetch,
  port: 3000
}, (info) => {
  console.log(`Server is running on http://localhost:${info.port}`)
})
