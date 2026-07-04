# Roadmapa projektu Pozytywka

## Przyszly modul: potwierdzenia e-mail dla formularzy

Status: planowane, nieimplementowane teraz.

Zakres modulu obejmuje formularze kontaktowe, booking i zapytania wysylane przez strone. Modul nie dotyczy zwyklych zgloszen karaoke do kolejki.

Po poprawnym wyslaniu formularza uzytkownik powinien otrzymac automatyczna wiadomosc e-mail z:

- potwierdzeniem otrzymania wiadomosci,
- informacja, ze Pozytywka odpowie mozliwie szybko.

Planowana konfiguracja nadawcy:

- `from`: `no-reply@pozytywka.pl`,
- `replyTo`: `kontakt@pozytywka.pl` albo inny adres kontaktowy ustalony pozniej z klientem.

Wymagania do doprecyzowania przed implementacja:

- wybor providera maili,
- weryfikacja domeny nadawczej,
- konfiguracja SPF, DKIM i DMARC,
- wysylka wylacznie server-side,
- brak wysylki z client-side,
- rate limit dla endpointow formularzy,
- mechanizmy antyspamowe,
- logowanie statusow delivery/error,
- brak blokowania UX, jesli mail potwierdzajacy chwilowo sie nie wysle.

Uwagi produktowe:

- Potwierdzenie e-mail jest dodatkiem do glownego przeplywu kontaktowego, a nie warunkiem przyjecia formularza.
- Awaria wysylki potwierdzenia nie powinna cofac ani ukrywac informacji, ze zapytanie uzytkownika zostalo przyjete przez system.
