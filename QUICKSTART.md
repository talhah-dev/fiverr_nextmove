# 🚀 Hostinger Git Auto-Deployment - Quick Start

## Was du bekommst:

✅ **Automatisches Deployment**: Push auf `main` → GitHub baut → Hostinger deployt
✅ **Kein manueller Upload**: Keine FTP, kein File Manager
✅ **Immer aktuell**: Jeder Push wird automatisch live

---

## 3-Schritte-Setup:

### 1️⃣ Deployment-Files committen

```bash
# Option A: Automatisch (empfohlen)
./deploy-setup.sh

# Option B: Manuell
git add .
git commit -m "Setup Hostinger auto-deployment"
git push origin main
```

### 2️⃣ GitHub Actions Permissions setzen

1. Gehe zu: `https://github.com/SiarCoding/haconcepts/settings/actions`
2. **Workflow permissions** → **Read and write permissions** ✅
3. **Save**

### 3️⃣ Hostinger konfigurieren

**Hostinger hPanel → Advanced → Git:**

- **Repository**: `https://github.com/SiarCoding/haconcepts.git`
- **Branch**: `build` ⚠️ **WICHTIG: Nicht `main`!**
- **Target**: `/public_html`
- **Auth**: SSH Key oder Personal Access Token

**Fertig!** 🎉

---

## Workflow:

```bash
# Änderungen machen
# ... Code bearbeiten ...

# Committen & pushen
git add .
git commit -m "Update XYZ"
git push origin main

# ✅ GitHub Actions baut automatisch
# ✅ Hostinger zieht automatisch
# ✅ Website ist live!
```

---

## Prüfen:

### GitHub Actions Status:
```
https://github.com/SiarCoding/haconcepts/actions
```

### Build Branch prüfen:
```bash
git fetch origin
git branch -r
# → origin/build sollte existieren
```

### Website testen:
```
https://yourdomain.com
```

---

## Troubleshooting:

### GitHub Actions schlägt fehl?
→ Prüfe Permissions (Schritt 2)

### Hostinger findet `build` Branch nicht?
→ Warte 3-5 Minuten nach erstem Push
→ Prüfe GitHub Actions Status

### 404 bei Seiten-Refresh?
→ Prüfe, ob `.htaccess` in `public_html/` liegt

---

## Detaillierte Anleitung:

Siehe: `HOSTINGER_GIT_DEPLOYMENT.md`

---

**Support**: Bei Problemen → Hostinger Live Chat (24/7)
