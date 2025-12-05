# Hostinger VPS Deployment Guide für Next.js App

## Voraussetzungen
- Hostinger VPS (empfohlen: mindestens VPS 1 mit 2GB RAM)
- SSH-Zugang zum VPS
- Domain bei Hostinger registriert

## 1. VPS vorbereiten

### 1.1 Via SSH verbinden
```bash
ssh root@your-vps-ip
```

### 1.2 System aktualisieren
```bash
apt update && apt upgrade -y
```

### 1.3 Node.js 18.x installieren
```bash
# NodeSource Repository hinzufügen
curl -fsSL https://deb.nodesource.com/setup_18.x | sudo -E bash -

# Node.js installieren
apt install -y nodejs

# Version prüfen
node -v  # sollte v18.x.x zeigen
npm -v
```

### 1.4 PM2 global installieren (Process Manager)
```bash
npm install -g pm2
```

### 1.5 NGINX installieren
```bash
apt install -y nginx
```

### 1.6 Git installieren (falls nicht vorhanden)
```bash
apt install -y git
```

---

## 2. App auf VPS deployen

### 2.1 Repository klonen
```bash
# App-Verzeichnis erstellen
mkdir -p /var/www
cd /var/www

# Dein Repository klonen
git clone https://github.com/SiarCoding/haconcepts.git
cd haconcepts
```

### 2.2 Dependencies installieren
```bash
npm install --legacy-peer-deps
```

### 2.3 Production Build erstellen
```bash
npm run build
```

Dies erstellt:
- `.next/standalone/` - optimierter Server
- `.next/static/` - statische Assets
- `public/` - öffentliche Dateien

---

## 3. PM2 Konfiguration

### 3.1 PM2 Ecosystem File erstellen
Die Datei `ecosystem.config.js` ist bereits vorbereitet (siehe unten).

### 3.2 App mit PM2 starten
```bash
pm2 start ecosystem.config.js
pm2 save
pm2 startup
```

### 3.3 PM2 Befehle
```bash
pm2 status          # Status prüfen
pm2 logs nextjs     # Logs anzeigen
pm2 restart nextjs  # App neu starten
pm2 stop nextjs     # App stoppen
pm2 delete nextjs   # App entfernen
```

---

## 4. NGINX Reverse Proxy einrichten

### 4.1 NGINX Konfiguration erstellen
```bash
nano /etc/nginx/sites-available/haconcepts
```

Die fertige Konfiguration findest du in `nginx.conf` (siehe unten).

### 4.2 Symlink erstellen
```bash
ln -s /etc/nginx/sites-available/haconcepts /etc/nginx/sites-enabled/
```

### 4.3 Default-Site deaktivieren (optional)
```bash
rm /etc/nginx/sites-enabled/default
```

### 4.4 NGINX testen und neu starten
```bash
nginx -t
systemctl restart nginx
```

---

## 5. Domain konfigurieren

### 5.1 DNS-Einstellungen bei Hostinger
1. Gehe zu Hostinger Dashboard → Domains
2. Wähle deine Domain → DNS/Name Servers
3. Füge A-Record hinzu:
   - Type: `A`
   - Name: `@` (für root domain) oder `www`
   - Points to: `DEINE-VPS-IP`
   - TTL: `14400`

### 5.2 Warten auf DNS-Propagierung
DNS-Änderungen können 1-24 Stunden dauern.

Prüfen mit:
```bash
dig yourdomain.com
nslookup yourdomain.com
```

---

## 6. SSL-Zertifikat (Let's Encrypt) - Optional aber empfohlen

### 6.1 Certbot installieren
```bash
apt install -y certbot python3-certbot-nginx
```

### 6.2 SSL-Zertifikat erstellen
```bash
certbot --nginx -d yourdomain.com -d www.yourdomain.com
```

Folge den Anweisungen und wähle "Redirect HTTP to HTTPS".

### 6.3 Auto-Renewal testen
```bash
certbot renew --dry-run
```

---

## 7. Deployment-Workflow (Updates)

### Manuelles Update via SSH:
```bash
cd /var/www/haconcepts
git pull origin main
npm install --legacy-peer-deps
npm run build
pm2 restart nextjs
```

### Oder: Automatisches Deployment mit GitHub Webhook
1. Erstelle `deploy.sh` Script (siehe unten)
2. Richte GitHub Webhook ein → Settings → Webhooks
3. Payload URL: `http://yourdomain.com:3001/deploy`
4. Content type: `application/json`
5. Secret: (dein Webhook-Secret)

---

## 8. Monitoring & Logs

### PM2 Monitoring
```bash
pm2 monit            # Echtzeit-Monitoring
pm2 logs nextjs      # App-Logs
pm2 logs nextjs --err # Nur Fehler
```

### NGINX Logs
```bash
tail -f /var/log/nginx/access.log
tail -f /var/log/nginx/error.log
```

### System-Ressourcen
```bash
htop              # CPU/RAM Übersicht
df -h             # Disk Space
free -h           # RAM
```

---

## 9. Firewall konfigurieren (UFW)

```bash
# UFW installieren (falls nicht vorhanden)
apt install -y ufw

# Ports öffnen
ufw allow 22/tcp      # SSH
ufw allow 80/tcp      # HTTP
ufw allow 443/tcp     # HTTPS

# Firewall aktivieren
ufw enable

# Status prüfen
ufw status
```

---

## 10. Troubleshooting

### App startet nicht?
```bash
pm2 logs nextjs --lines 100
```

### Port 3000 bereits belegt?
```bash
lsof -i :3000
kill -9 <PID>
```

### NGINX Fehler?
```bash
nginx -t
systemctl status nginx
tail -f /var/log/nginx/error.log
```

### 502 Bad Gateway?
- Prüfe ob Next.js läuft: `pm2 status`
- Prüfe Port in NGINX config (sollte 3000 sein)
- Restart: `pm2 restart nextjs && systemctl restart nginx`

---

## 11. Performance-Optimierungen

### PM2 Cluster Mode (Multi-Core)
In `ecosystem.config.js`:
```javascript
instances: 'max',  // oder Anzahl der CPU-Cores
exec_mode: 'cluster'
```

### NGINX Caching
Bereits in `nginx.conf` konfiguriert:
- Static Assets: 1 Jahr Cache
- Images: 7 Tage Cache
- HTML: kein Cache

### Kompression
Bereits aktiviert: gzip für Text/JS/CSS

---

## Zusammenfassung der Befehle

```bash
# 1. VPS Setup
ssh root@your-vps-ip
apt update && apt upgrade -y
curl -fsSL https://deb.nodesource.com/setup_18.x | sudo -E bash -
apt install -y nodejs nginx git
npm install -g pm2

# 2. App deployen
cd /var/www
git clone https://github.com/SiarCoding/haconcepts.git
cd haconcepts
npm install --legacy-peer-deps
npm run build

# 3. PM2 starten
pm2 start ecosystem.config.js
pm2 save
pm2 startup

# 4. NGINX konfigurieren
nano /etc/nginx/sites-available/haconcepts
ln -s /etc/nginx/sites-available/haconcepts /etc/nginx/sites-enabled/
nginx -t
systemctl restart nginx

# 5. SSL (optional)
apt install -y certbot python3-certbot-nginx
certbot --nginx -d yourdomain.com -d www.yourdomain.com

# 6. Firewall
ufw allow 22/tcp && ufw allow 80/tcp && ufw allow 443/tcp
ufw enable
```

---

## Support

Bei Problemen:
1. Logs prüfen: `pm2 logs nextjs`
2. NGINX Status: `systemctl status nginx`
3. System-Ressourcen: `htop` oder `free -h`

Viel Erfolg mit dem Deployment! 🚀
