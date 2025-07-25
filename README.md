# 🪑 Chair Configurator - R3F A **3D Chair Configurator** built with [React Three Fiber (R3F)]

Built with [React Three Fiber (R3F)](https://docs.pmnd.rs/react-three-fiber), allowing users to interactively customize a chair in real-time.

## 🌐 Live Preview

> _Coming Soon_ — Deploy via GitHub Pages or Vercel.

## ✨ Features

- 🧳 Change **Chair Material**: Leather / Fabric
- 🪑 Customize **Chair Color** and **Cushion Color**
- 🔄 Swap between **Design** and **Classical** leg styles
- ⚡ Real-time rendering with **React Three Fiber**
- 🖼️ Texture support using useTexture + GLTF

## 🛠️ Technologies Used

- React
- Three.js
- React Three Fiber
- @react-three/drei
- Vite
- GLTFLoader (3D Models)

## 📁 Project Structure

```
chair-configurator/
├── public/
├── models/
├── chair.gltf
├── textures/
├── leather/
├── fabric/
├── src/
│   ├── Components/
│   │   ├── Chair.jsx
│   │   ├── Configurator.jsx
│   │   ├── contexts/
│   │   │   ├── Customization.jsx
│   │   │   └── App.jsx
│   │   └── main.jsx
├── .gitignore
├── package.json
└── README.md
```

## 🚀 Setup Instructions

### 1. Clone the repository
```bash
git clone https://github.com/Askulo/chair-configurator.git
cd chair-configurator
```

### 2. Install dependencies
```bash
npm install
```

### 3. Start the development server
```bash
npm run dev
```

The app should now be running at **[http://localhost:5173](http://localhost:5173)**

## 🏗️ Build for Production

```bash
npm run build
```

## 👨‍💻 Author

**Askulo** 🔗 GitHub: [@Askulo](https://github.com/Askulo)

## 📄 License

This project is licensed under the **MIT License**. Let me know if you want a `.gitignore`, `LICENSE`, or deployment instructions for GitHub Pages or Vercel.
