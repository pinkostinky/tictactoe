# 🎮 Tic Tac Toe Game

Een moderne, responsive Tic Tac Toe game gebouwd met Next.js, TypeScript, en Tailwind CSS.

![CI/CD Pipeline](https://github.com/pinkostinky/tictactoe/workflows/CI/CD%20Pipeline/badge.svg)

## ✨ Features

- 🎯 Klassiek Tic Tac Toe spel voor 2 spelers
- 🎨 Moderne UI met Tailwind CSS
- 📱 Volledig responsive design
- 🧪 Uitgebreide test coverage met Jest en Testing Library
- 🚀 Automatische deployment naar Vercel
- ⚡ CI/CD pipeline met GitHub Actions
- 🎮 Real-time game status updates
- 🔄 Reset functionaliteit

## 🚀 Live Demo

[Speel het spel hier!](https://tictactoe-pinkostinky.vercel.app)

## 🛠️ Tech Stack

- **Framework:** Next.js 15
- **Language:** TypeScript
- **Styling:** Tailwind CSS
- **Testing:** Jest + React Testing Library
- **Deployment:** Vercel
- **CI/CD:** GitHub Actions

## 🏃‍♂️ Getting Started

### Prerequisites

- Node.js 18.x of hoger
- npm, yarn, pnpm of bun

### Installatie

1. Clone de repository:
```bash
git clone https://github.com/pinkostinky/tictactoe.git
cd tictactoe
```

2. Installeer dependencies:
```bash
npm install
```

3. Start de development server:
```bash
npm run dev
```

4. Open [http://localhost:3000](http://localhost:3000) in je browser.

## 🧪 Testing

### Run tests
```bash
npm test
```

### Run tests in watch mode
```bash
npm run test:watch
```

### Run tests with coverage
```bash
npm run test:ci
```

### Lint code
```bash
npm run lint
```

## 📝 Available Scripts

- `npm run dev` - Start development server
- `npm run build` - Build production version
- `npm run start` - Start production server
- `npm run lint` - Run ESLint
- `npm test` - Run tests
- `npm run test:watch` - Run tests in watch mode
- `npm run test:ci` - Run tests with coverage for CI

## 🎮 How to Play

1. Het spel wordt gespeeld op een 3x3 grid
2. Speler X begint altijd
3. Spelers nemen beurten om X's en O's te plaatsen
4. De eerste speler die 3 van zijn/haar tekens op een rij krijgt (horizontaal, verticaal, of diagonaal) wint
5. Als alle vakjes gevuld zijn zonder winnaar, is het gelijkspel
6. Gebruik de "Nieuw Spel" knop om opnieuw te beginnen

## 🚀 Deployment

Deze applicatie wordt automatisch gedeployed naar Vercel wanneer er wijzigingen worden gepusht naar de main branch.

### Manual Deployment

1. Installeer Vercel CLI:
```bash
npm i -g vercel
```

2. Deploy:
```bash
vercel --prod
```

## 🤝 Contributing

1. Fork het project
2. Maak een feature branch (`git checkout -b feature/AmazingFeature`)
3. Commit je wijzigingen (`git commit -m 'Add some AmazingFeature'`)
4. Push naar de branch (`git push origin feature/AmazingFeature`)
5. Open een Pull Request

## 📄 License

Dit project is gelicenseerd onder de MIT License.

## 👨‍💻 Author

**pinkostinky**
- GitHub: [@pinkostinky](https://github.com/pinkostinky)

---

⭐ Geef een ster als je dit project leuk vindt!
