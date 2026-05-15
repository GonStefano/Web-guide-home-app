---
sidebar_position: 3
---

# Inicio y Smart Home

HomeApp integra datos del precio de la electricidad y del clima para ayudarte a decidir el mejor momento para realizar tus tareas del hogar.

## Pantalla de Inicio

La pantalla principal te muestra de un vistazo todo lo que necesitas saber sobre tu día:

- **Clima actual**: temperatura y descripción del tiempo en tu ciudad (detectada automáticamente por GPS).
- **Precio de la luz ahora**: te indica si la electricidad está barata o cara en este momento y el precio en €/kWh.
- **Tareas pendientes hoy**: cuántas tareas tienes para hoy.
- **Sugerencia inteligente**: una recomendación automática que combina el clima y el precio de la luz. Por ejemplo:
  - ⚡🌤️ *"¡El combo perfecto! Luz barata y buen clima. Ideal para poner lavadoras y tender fuera."*
  - ☁️⚡ *"Energía económica. Aprovecha para planchar o usar el horno."*
  - 🌤️💸 *"Luz en hora pico. Abre ventanas y aprovecha la luz natural."*
  - 🌧️💸 *"Modo ahorro activo. Mejor relájate o haz tareas que no gasten electricidad."*

## Pantalla Smart Home

Esta pantalla te permite calcular **si es buen momento para hacer una tarea concreta** en una hora específica del día.

### ¿Cómo funciona?

1. **Selecciona una tarea del hogar** de la lista horizontal:
   - 🧺 Lavadora
   - 💨 Planchar
   - 🌱 Regar plantas
   - 🐱 Mascota
   - 🍽️ Lavavajillas
   - 🪟 Limpiar cristales
   - 🐕 Pasear

2. **Elige la hora** del día (de 0 a 23h) tocando el selector circular.

3. La app calcula automáticamente una **puntuación del 0 al 100** basada en:
   - Si la tarea consume mucha energía → penalización si la luz está cara en esa hora.
   - Si la tarea es sensible a la lluvia → penalización si hay alta probabilidad de lluvia.
   - Si la tarea es sensible al calor → penalización si la temperatura supera 30°C.

   | Puntuación | Significado |
   |:---|:---|
   | 80 - 100 | ✅ ¡Momento ideal! |
   | 50 - 79 | ⚠️ Condiciones aceptables (con algún inconveniente) |
   | 0 - 49 | ❌ Mejor espera |

4. También puedes ver en tiempo real el **precio de la energía**, la **temperatura** y la **probabilidad de lluvia** para esa hora.

5. Activa **"¿Tarea recurrente?"** si quieres que se repita cada día a la misma hora.

6. Pulsa **"Añadir a mi Agenda"** para programarla directamente en tu calendario.
