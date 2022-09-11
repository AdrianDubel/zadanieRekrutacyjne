# Zadanie rekrutacyjne

Rozwiązanie zadania zawiera trzy pliki testowe:

1. **"basic_tests"** gdzie zostały zawarte testy dla flow:
- dodawania diety do koszyka w Dietly
- usunięcia diety w koszyku
- edycji diety w koszyku
- dodanie różnych diet  

2. **"visual_test"** w którym zostały zawarte skrypty przeprowadzający testy w ramach wizulanej regresji.
3. **"form_test"** w którym został zawarty skrypt sprawdzający jak zachwouję się formularz podczas cofania się do poprzednich kroków. 

Wszystkie testy zostały również napisane z użyciem Page Object Pattern oraz Cypress Commands. W folderze *"Support"* stworzyłem dwa foldery: *"locators"* gdzie przechowywane są wszystkie lokatory używane w testach z podziałem na poszczególne podstrony, oraz folder *"methods"* gdzie za pomocą Cypress Commands zostały stworzone skrypty, które wykonują akcje na stronie podczas testów. 

## Środowisko:

```bash
- Node v16.13.1
- npm v8.1.2
- Cypress v10.7.0 
```

## Uruchomienie projektu:
Aby uruchomić projekt należy sklonować repozytorium, następnie przejść do folderu "ZadanieRekrutacyjne" i w terminalu uruchomić komendę ```npm install```

## Uruchomienie testów:
- Uruchomienie testów w trybie headless: ```npm run test:headless```
- Uruchomienie testów w trybie wizualnym: ```npm run test```

## Opis pluginu

W projekcie do przeprowadzenia testów regresji wizualnej użyłem pluginu "cypress-plugin-snapshots"

Pełna dokumentacja pluginu: [https://www.npmjs.com/package/cypress-plugin-snapshots](https://www.npmjs.com/package/cypress-plugin-snapshots)

Plugin działa w ten sposób, że gdy uruchomimy testy regresji wizualnej po raz pierwszy wykonywane są screenshoty wskazanego przez nas elementu oraz zapisane do pliku *.png w folderze *"image_snapshots"*, który również zostaje automatycznie stworzony w folderze *"e2e"* po pierwszym uruchomieniu testów, które używają pluginu. 

Każde kolejne uruchomienie testów porównuję wygląd strony z zapisanymi wcześniej plikami. 
