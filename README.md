# My-sarwer

A simple neon-style admin login page with an Express API.

## Run locally

```bash
npm install
ACCESS_KEY=your-secret-key npm start
```

Open `http://localhost:3000`.

## Deploy

Use a Node Web Service host such as Render. Set:
- Build Command: `npm install`
- Start Command: `npm start`
- Environment Variable: `ACCESS_KEY` = your private key

Do not put the real access key inside GitHub source code.
