# 🖼️ Random Image API

A simple API built with Node.js and Express that returns a random image URL using [Picsum](https://picsum.photos/).

---

## 🚀 How to Run

1. Clone the repo:

```bash
git clone https://github.com/your-username/random-image-api.git
cd random-image-api
```

2. Install dependencies:

```bash
npm install
```

3. Start the server:

```bash
node index.js
```

Server runs at:  
`http://localhost:3000`

---

## 📡 API Endpoints

### GET `/`

Returns a welcome message.

---

### GET `/api/image/random`

Returns a JSON object with a random image URL.

Example response:

```json
{
  "message": "Here is your random image!",
  "image": "https://picsum.photos/500"
}
```

---

## 🧪 Test It

- In browser or Postman:  
  `http://localhost:3000/api/image/random`

---

## 📦 Dependencies

- [Express](https://www.npmjs.com/package/express)

Install with:

```bash
npm install express
```

---

## 📁 Files

- `index.js` – Main server file  
- `package.json` – Project setup and dependencies

---

## 📝 License

Free to use for learning and fun!
