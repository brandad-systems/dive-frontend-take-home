# ExpressJs Minimal Backend

Minimaler Server um eine Liste von Produkten anlegen und verwalten zu können.

Unterstützt derzeit:
- GET /products
- GET /products/:id
- POST /products
- DELETE /product/:id
- PUT /product/:id

Daten werden zur Laufzeit im Speicher gehalten und nicht persistiert.

# Verwendung

Starten des Servers über `npm run start`

Server startet auf Port 8080

# Tests

Aktuell können einfache Tests über die beigelegte test-requests.http Datei ausgeführt werden.

Es gibt derzeit noch keine automatisierten Tests
