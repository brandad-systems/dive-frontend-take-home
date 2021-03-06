# Aufgabe:

Implementieren Sie eine Angular SPA zum Verwalten von Produkten. Produkte sollen auf einer Übersichtsseite angezeigt werden. Neue Produkte können auf einer eigenen Seite hinzugefügt werden. Nach erfolgreichem hinzufügen soll eine Weiterleitung zur Übersicht erfolgen.

Optional können Sie ihre Lösung mit Unittests absichern. Falls Sie keine Tests bereitstellen wollen würden wir gern über mögliche Teststrategien sprechen.

Um eine realitätsnähere Anwendung zu estellen können Sie den beigefügten ExpressJS Server verwenden. Falls Sie den Server nicht verwenden würden wir gern über RESTful Http und APIs sprechen. Zur Verwendung des Servers siehe [Server README](./server/README.md).

Zur Gestaltung der Applikation können sie ein beliebiges Framework verwenden oder Ihr eigenes Design einbringen. Die Anzeige der Produkte und das Erstellen von Produkten soll sich responsiv an verschiedene Auflösungen anpassen können.

## Detailanforderungen zum Produkt:

Ein Produkt besteht aus:
- (optional) Bild
- Titel
- Beschreibung (maximal 500 Zeichen)
- Kategorie
- Status
- Preis pro Tag

Mögliche Kategorien:

- Elektronik
  - Audio & HiFi
  - Foto & Kamera
  - Konsolen
  - PC/Notebook
  - Sonstiges
- Freizeit & Sport
  - Camping
  - Kinder-Spielzeug
  - Sport-Equipment
  - Sonstiges
- Haus & Garten
  - Event-Zubehör
  - Garten-Zubehör
  - Küchen-Zubehör
  - Werkzeug
  - Sonstiges
  
Mögliche Statuswerte:

- Wie neu
- Sehr gut
- Gut
- Akzeptabel

# Abgabe der Lösung

Zur Abgabe erstellen Sie bitte einen PullRequest aus ihrem Fork dieses Repositories. [Creating a pull request from a fork](https://docs.github.com/en/pull-requests/collaborating-with-pull-requests/proposing-changes-to-your-work-with-pull-requests/creating-a-pull-request-from-a-fork)
