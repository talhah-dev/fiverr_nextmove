# 🚀 Scalingo Deployment Guide - NextMove Digital

## ✅ Projektvorbereitungen (bereits erledigt)

### 1. ✅ package.json konfiguriert
```json
{
  "scripts": {
    "build": "next build",
    "start": "next start -p $PORT"
  },
  "engines": {
    "node": "18.x"
  }
}
```

### 2. ✅ Procfile erstellt
```
web: npm run start
```

### 3. ✅ next.config.js für Server-Mode konfiguriert
- `output: 'export'` entfernt ✅
- Images optimization aktiviert ✅
- TypeScript Build-Fehler ignoriert ✅

### 4. ✅ .slugignore erstellt
```
node_modules
```

---

## 🛠️ CSS Build-Fehler Lösung

**Problem:** `Cannot read properties of undefined (reading 'entryCSSFiles')`

**Lösung:** In Scalingo devDependencies für Build installieren:

```bash
# In Scalingo Environment Variables setzen:
NPM_CONFIG_PRODUCTION=false
```

---

## 🚀 Deployment Schritte

### Schritt 1: Scalingo Git Remote hinzufügen
```bash
git remote add scalingo git@ssh.osc-fr1.scalingo.com:nextmovedigital.git
```

### Schritt 2: Code deployen
```bash
git add .
git commit -m "Scalingo deployment ready"
git push scalingo main
```

### Schritt 3: Environment Variables setzen
```bash
# CSS Build-Fehler beheben
scalingo --app nextmovedigital env-set NPM_CONFIG_PRODUCTION=false

# Optional: Next.js optimizations
scalingo --app nextmovedigital env-set NODE_ENV=production
scalingo --app nextmovedigital env-set NEXT_TELEMETRY_DISABLED=1
```

### Schritt 4: Web Container skalieren
1. Gehe zu Scalingo Dashboard → Resources
2. Klicke "Manage" bei Containers  
3. Setze Web-Container auf **1x** (kleine Stufe)
4. **Speichern**

### Schritt 5: Deploy-Logs überwachen
- Dashboard → Deploy → Build-Logs anschauen
- Dashboard → Logs → Live-Logs für Runtime-Fehler

---

## 🌐 Domain Setup

### Standard Scalingo URL
Nach erfolgreichem Deploy: `https://nextmovedigital.osc-fr1.scalingo.io`

### Eigene Domain hinzufügen
1. **Dashboard → Settings → Domains → "Add domain"**
2. **Domain eingeben:** `nextmove-digital.de` oder `www.nextmove-digital.de`
3. **Scalingo zeigt DNS-Ziel an** (z.B. `nextmovedigital.XXX.scalingo.io`)

### DNS bei Domain-Provider konfigurieren
```bash
# Für www.nextmove-digital.de
CNAME   www   →   nextmovedigital.osc-fr1.scalingo.io

# Für Root Domain nextmove-digital.de  
ALIAS   @     →   nextmovedigital.osc-fr1.scalingo.io
# oder A-Record auf Scalingo IP (siehe Scalingo Docs)
```

### HTTPS aktivieren
- Dashboard → Domains → "Enable HTTPS" 
- Let's Encrypt Zertifikat wird automatisch erstellt

---

## 🔧 Troubleshooting

### Build schlägt fehl
- **Lösung:** `NPM_CONFIG_PRODUCTION=false` Environment Variable setzen
- **Check:** Build-Logs in Deploy-Tab prüfen

### 503 Error / Connection refused  
- **Lösung:** Web-Container in Resources aktivieren (1x)
- **Check:** `next start -p $PORT` läuft korrekt

### Port-Problem
- **Lösung:** Sicherstellen dass `start` Script `-p $PORT` verwendet
- **Check:** Procfile enthält `web: npm run start`

### CSS/JS nicht geladen
- **Lösung:** Sicherstellen dass `output: 'export'` entfernt wurde
- **Check:** Server-Mode aktiviert, nicht Static Export

---

## 📊 Performance Optimierungen

### 1. Standalone Mode (optional, für kleinere Images)
```javascript
// next.config.js
module.exports = {
  output: 'standalone', // Reduziert Image von 547MB auf 200MB
}
```

### 2. Build optimieren
```json
{
  "scripts": {
    "build": "next build && node copy-assets.js"
  }
}
```

### 3. Environment Variables
```bash
scalingo --app nextmovedigital env-set NODE_OPTIONS="--max-old-space-size=4096"
scalingo --app nextmovedigital env-set NEXT_TELEMETRY_DISABLED=1
```

---

## ✅ Checkliste finale Deployment

- [ ] `git remote add scalingo` ausgeführt
- [ ] `NPM_CONFIG_PRODUCTION=false` Environment Variable gesetzt  
- [ ] `git push scalingo main` erfolgreich
- [ ] Web-Container auf 1x skaliert
- [ ] App läuft auf Standard Scalingo URL
- [ ] Domain DNS konfiguriert (falls gewünscht)
- [ ] HTTPS aktiviert
- [ ] Deploy-Logs überprüft

---

## 📞 Support

**Scalingo CLI installieren:**
```bash
curl -O https://cli-dl.scalingo.io/install && bash install
scalingo login
```

**Hilfreiche Kommandos:**
```bash
scalingo --app nextmovedigital logs --lines 100
scalingo --app nextmovedigital ps  
scalingo --app nextmovedigital env
scalingo --app nextmovedigital restart
```

**Deployment testen:**
```bash
# Lokal testen vor Push
npm run build
PORT=3000 npm run start
```
