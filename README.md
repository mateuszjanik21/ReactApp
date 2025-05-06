# ReactApp

Prosty projekt frontendowy zbudowany w React, wykorzystujący hooki `useState` i `useEffect`.  
Aplikacja skupia się wyłącznie na warstwie wizualnej — bez implementacji logiki biznesowej czy połączenia z backendem.

## Technologie

- React (hooki: `useState`, `useEffect`)
- JavaScript
- CSS
- HTML

## Wymagania wstępne

Aby uruchomić aplikację, potrzebujesz:

- [Node.js (LTS)](https://nodejs.org/) — wraz z npm
- Visual Studio (do otwarcia pliku `.sln` i ewentualnej integracji backendu)
- Połączenia z internetem (do pobrania zależności)

## Struktura projektu

ReactApp/

├── reactapp.client/ # Frontend React

├── ReactApp.Server/ # (opcjonalny folder backendowy — obecnie nieużywany)

├── ReactApp.sln # Plik rozwiązania (dla Visual Studio)

├── .gitignore

└── .gitattributes



## Jak uruchomić

1. Otwórz plik `ReactApp.sln` w programie **Visual Studio**.

2. Uruchom aplikację, klikając **Start (F5)** lub wybierając **Debuguj > Uruchom bez debugowania (Ctrl+F5)**.

Po uruchomieniu przeglądarka powinna automatycznie otworzyć aplikację pod odpowiednim adresem lokalnym (np. `http://localhost:5099`.


## Informacje dodatkowe
Projekt nie zawiera logiki backendowej ani połączeń z API.

Służy jako szablon lub punkt wyjścia do dalszego rozwoju aplikacji React.

Folder ReactApp.Server jest obecnie pusty i może zostać wykorzystany w przyszłości do dodania backendu.
