# Peluquería López García

Crea una landing page moderna para "Peluquería López García", un salón de peluquería de barrio en Valladolid (España), en la calle Delicias, 17, en el barrio de Las Delicias.

ESENCIA Y TONO
Es un negocio de proximidad, cercano y de toda la vida, pero quiero que la web transmita una imagen actual y cuidada, no anticuada. Diseño limpio, cálido y elegante — piensa en un salón de peluquería moderno de barrio: cercanía + buen gusto, no un salón de lujo impersonal. Colores neutros y elegantes (tonos crema, beige, negro/carbón, con un acento en un color cálido tipo terracota, rosa empolvado o dorado apagado — elige el que mejor combine). Tipografía con carácter: una serif elegante para los títulos y una sans-serif limpia para el texto.

ESTRUCTURA DE LA PÁGINA (una sola landing, scroll vertical)

1. Header fijo
- Logo a la izquierda (subiré el logo yo)
- Menú: Inicio / Servicios / Nuestro trabajo / Cómo llegar / Contacto
- Botón destacado "Pedir cita" que enlaza a WhatsApp

2. Hero
- Imagen de fondo grande (subiré foto del local)
- Titular con el nombre del salón y una frase corta que transmita cercanía y buen trabajo (genera 2-3 alternativas de este estilo, ej. "Peluquería de barrio, resultados de verdad")
- Botón principal "Pedir cita por WhatsApp" y botón secundario "Ver servicios"

3. Sobre nosotros
- Breve texto sobre el salón: trato cercano, experiencia, barrio de Las Delicias
- Espacio para foto del local o del equipo

4. Servicios
- Grid de tarjetas: por determinar
- Cada tarjeta con icono o foto pequeña, nombre y descripción corta (precio como "Consultar")

5. Nuestro trabajo
- En vez de una galería tradicional, usa un carrusel horizontal deslizable (scroll-snap) con fotos de trabajos realizados que subiré
- Si es posible, incluye un widget de feed de Instagram embebido con el usuario @peluquerialopezgarcia

6. Horario y ubicación
- Horario en formato tabla clara:
  Lunes: Cerrado
  Martes a jueves: 9:30–13:30 y 16:00–19:00
  Viernes: 9:00–19:00
  Sábado: 9:00–14:00
  Domingo: Cerrado
- Mapa embebido de Google Maps con la dirección: Calle Delicias, 17, 47013 Valladolid
- Botón "Cómo llegar"

7. Contacto / Footer
- Teléfono: 983 08 27 85 (clicable para llamar)
- Botón de WhatsApp (todavía no hay whatsapp) con mensaje precargado: "Hola, quiero pedir cita en Peluquería López García"
- Enlaces a Facebook e Instagram
- Dirección y horario resumido
- Copyright

REQUISITOS TÉCNICOS
- Totalmente responsive, mobile-first (la mayoría de clientes entrarán desde el móvil)
- Botón flotante de WhatsApp visible en todo momento en móvil
- Animaciones sutiles al hacer scroll (fade-in, nada exagerado)
- Velocidad de carga rápida, imágenes optimizadas
- SEO básico: título "Peluquería López García - Las Delicias, Valladolid", meta descripción con servicios y ubicación

This project was built with [Lovable](https://lovable.dev).

**Live app**: https://peluquerialopezgarcia.lovable.app

## Build with Lovable

Continue developing this project in the [Lovable editor](https://lovable.dev/projects/8f95e973-7ea7-4c0b-bfa9-ccae2512c6ba).

- **Ship faster**: describe what you want to build and Lovable handles the code.
- **Stay in sync**: every change made in Lovable is committed straight to this repository.
- **Full ownership**: this code is yours. Push to `main` on GitHub and your changes sync back into Lovable, ready for your next prompt.

## Development

Prefer working locally? You need Node.js and npm — [install with nvm](https://github.com/nvm-sh/nvm#installing-and-updating).

```sh
git clone <this-repository-url>
cd <repository-name>
npm i
npm run dev
```
