# SmkyTheChef

React + Vite landing page voor SmkyTheChef.

## Wat zit erin?

- Vite + React
- Tailwind CSS
- React Router
- Lucide icons
- Sonner toaster wrapper
- GitHub Pages workflow
- Vite base ingesteld op `/Smkythechef/` voor deze repository

## Lokaal draaien

```bash
npm install
npm run dev
```

## Build testen

```bash
npm run build
npm run preview
```

## Pushen naar GitHub

Repository:

```bash
https://github.com/VoltexPerformance/Smkythechef.git
```

Commands vanaf de projectmap:

```bash
git init
git add .
git commit -m "Initial SmkyTheChef landing page"
git branch -M main
git remote add origin https://github.com/VoltexPerformance/Smkythechef.git
git push -u origin main
```

Als `origin` al bestaat:

```bash
git remote set-url origin https://github.com/VoltexPerformance/Smkythechef.git
git push -u origin main
```

## GitHub Pages aanzetten

1. Ga naar de repository op GitHub.
2. Open **Settings**.
3. Ga links naar **Pages**.
4. Zet **Source** op **GitHub Actions**.
5. Push naar `main`.
6. Open daarna de deploy onder **Actions** of onder **Settings > Pages**.

Preview URL wordt normaal:

```bash
https://voltexperformance.github.io/Smkythechef/
```

## Aanpassen

De hoofdpagina staat in:

```bash
src/pages/LandingPage.jsx
```

Kleuren en extra styling staan in:

```bash
src/App.css
```
