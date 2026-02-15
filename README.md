# 🐠 AquaGuide

**Your Ultimate Aquarium Care Companion**

AquaGuide is a comprehensive web application providing detailed care information for aquarium species, diseases, plants, and tank building guidance. Built for hobbyists, breeders, and aquarium enthusiasts.

[![Built with React](https://img.shields.io/badge/React-18-61DAFB?logo=react)](https://react.dev/)
[![TypeScript](https://img.shields.io/badge/TypeScript-5-3178C6?logo=typescript)](https://www.typescriptlang.org/)
[![Tailwind CSS](https://img.shields.io/badge/Tailwind-3-38BDF8?logo=tailwind-css)](https://tailwindcss.com/)
[![Vite](https://img.shields.io/badge/Vite-6-646CFF?logo=vite)](https://vitejs.dev/)

---

## ✨ Features

### 🐟 **Species Database**
- **30+ Freshwater Species** with detailed care guides
- Advanced filtering by difficulty, tank size, water parameters
- Interactive tank simulator with visual stocking calculator
- Compatibility checker for tank mates
- Behavior tags with glossary explanations
- Breeding information & scientific context

### 🏥 **Disease Encyclopedia**
- **15 Common Fish Diseases** + **7 Shrimp Diseases**
- Symptom-based search & identification
- Detailed treatment protocols with medications
- Prevention strategies & pro tips
- Severity ratings & contagion warnings
- Environmental diseases (Ammonia/Nitrite poisoning)

### 🌱 **Plant Library** _(Coming Soon)_
- Aquatic plant care requirements
- Light, CO2, and nutrient needs
- Growth rates & difficulty levels
- Compatible with fish species

### 🎨 **Tank Builder** _(Beta)_
- Visual aquarium planner
- Live compatibility checks
- Parameter conflict detection
- Stocking level calculator

### 🔍 **Global Search**
- Unified search across species, diseases, and plants
- Real-time filtering
- Category-based results

---

## 🚀 Tech Stack

- **Frontend:** React 18 + TypeScript
- **Styling:** Tailwind CSS 3 + Framer Motion
- **Build Tool:** Vite 6
- **Routing:** React Router v7
- **Icons:** Lucide React
- **Type Safety:** Full TypeScript coverage
- **PWA:** Service Worker ready

---

## 📦 Installation

### Prerequisites
- Node.js 18+ 
- npm or yarn

### Setup

```bash
# Clone the repository
git clone https://github.com/zy0x1337/aquaguide.git
cd aquaguide

# Install dependencies
npm install

# Start development server
npm run dev

# Build for production
npm run build

# Preview production build
npm run preview
```

App runs on `http://localhost:5173`

---

## 📂 Project Structure

```
src/
├── components/
│   ├── layout/          # Layout components (Header, Footer, Layout)
│   ├── species/         # Species-specific components
│   ├── ui/              # Reusable UI components
│   ├── seo/             # SEO metadata components
│   └── error/           # Error boundaries
├── data/
│   ├── species/         # Species data files
│   ├── diseases/        # Disease database
│   ├── plants/          # Plant data
│   └── glossary.ts      # Ethology tag definitions
├── pages/               # Route pages
├── types/               # TypeScript type definitions
├── hooks/               # Custom React hooks
└── utils/               # Utility functions
```

---

## 🎯 Key Features Explained

### **Species Detail Pages**
- **Parameter Scales:** Visual range indicators for pH, temperature
- **Tank Setup Recommendations:** Curated equipment & decor suggestions
- **Compatible Species Grid:** Click-through to similar fish
- **Feeding Advice:** Diet-specific recommendations based on species traits
- **Pro Tips & Common Mistakes:** Expert guidance

### **Disease Identification**
- **Categorized by Type:** Parasitic, Bacterial, Fungal, Viral, Environmental
- **Severity Ratings:** Low → Critical
- **Treatment Protocols:** Step-by-step medication guides
- **Human Health Warnings:** Zoonotic disease alerts (e.g., Fish TB)

### **Tank Simulator**
- **Visual Fish Rendering:** Scales fish icons based on actual size
- **Group Size Validation:** Enforces minimum shoaling requirements
- **Space Calculation:** Recommends tank dimensions

---

## 🛠️ Development

### Adding a New Species

1. Create a new file in `src/data/species/`
2. Follow the `Species` interface in `src/types/species.ts`
3. Add to the `allSpecies` array in `src/data/species/index.ts`
4. Place image in `/public/images/species/` (optional)

Example:
```typescript
export const goldenSeverum: Species = {
  id: 'golden-severum',
  slug: 'golden-severum',
  taxonomy: {
    scientificName: 'Heros severus',
    commonName: 'Golden Severum',
    family: 'Cichlidae',
    origin: 'Amazon Basin',
    region: 'South America'
  },
  // ... rest of data
};
```

### Adding a New Disease

1. Edit `src/data/diseases/fish-diseases.ts` or `shrimp-diseases.ts`
2. Follow the `Disease` interface
3. Repository auto-indexes new entries

---

## 🌐 Deployment

### Vercel (Recommended)
```bash
npm install -g vercel
vercel --prod
```

### Netlify
```bash
npm run build
# Deploy the 'dist' folder
```

### Docker
```dockerfile
FROM node:18-alpine
WORKDIR /app
COPY package*.json ./
RUN npm ci --only=production
COPY . .
RUN npm run build
EXPOSE 5173
CMD ["npm", "run", "preview"]
```

---

## 🧪 Testing

```bash
# Type checking
npm run type-check

# Linting
npm run lint

# Unit tests (coming soon)
npm run test
```

---

## 🤝 Contributing

Contributions are welcome! Please follow these guidelines:

1. Fork the repository
2. Create a feature branch: `git checkout -b feature/amazing-feature`
3. Commit changes: `git commit -m 'Add amazing feature'`
4. Push to branch: `git push origin feature/amazing-feature`
5. Open a Pull Request

### Contribution Ideas
- [ ] Add more species (target: 100+)
- [ ] Expand plant database
- [ ] Add water parameter calculator
- [ ] Implement user accounts & tank journals
- [ ] Multi-language support
- [ ] Mobile app (React Native)

---

## 📝 Data Sources

All species data is curated from:
- Scientific literature
- Reputable aquarium forums (FishLore, SeriouslyFish)
- Personal breeding experience
- Veterinary databases for disease info

---

## 📄 License

MIT License - see [LICENSE](LICENSE) file for details

---

## 🙏 Acknowledgments

- **Lucide** for beautiful icons
- **Tailwind Labs** for the CSS framework
- **Framer Motion** for animations
- Aquarium community for species knowledge

---

## 📬 Contact

**Author:** zy0x1337  
**Email:** zy0x@web.de  
**GitHub:** [@zy0x1337](https://github.com/zy0x1337)

---

## 🗺️ Roadmap

### Q1 2026
- [x] Species Database (30+ species)
- [x] Disease Encyclopedia (15+ diseases)
- [x] Tank Simulator
- [ ] Complete Plant Library

### Q2 2026
- [ ] User Accounts & Saved Tanks
- [ ] Water Parameter Calculator
- [ ] Equipment Recommendations Database
- [ ] Community Forum

### Q3 2026
- [ ] Mobile App (iOS/Android)
- [ ] API for third-party integrations
- [ ] Multi-language support (DE, ES, FR)

---

**⭐ Star this repo if you find it helpful!**

**🐠 Happy Fishkeeping! 🐠**
