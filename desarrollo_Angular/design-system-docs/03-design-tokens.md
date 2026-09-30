# Design tokens

La captura de Figma observada es un wireframe gris. La paleta **Burnt sienna** se conserva porque forma parte de la especificación suministrada; no se presenta como color extraído de Figma. Los valores implementados viven en `src/styles.css`.

## Colores semánticos

| Token | Valor | Uso / estados |
|---|---|---|
| `color.primary.default` | `#E35336` | Acento de acción, gráfico y elementos de marca. |
| `color.primary.hover` | `#C6452D` | Hover de acción/ornamento coral. |
| `color.primary.active` | `#A83824` | Active del coral; **no** se usa para texto blanco normal sin validar. |
| `color.primary.dark` | `#713A25` | Acción principal con texto blanco (AA); hover usa `#5F2F1D`. |
| `color.primary.soft` | `#F4E3DC` | Fondo seleccionado o de llamada de atención con texto `#171E1B`. |
| `color.accent.default` | `#F4A460` | Acento, selección secundaria y highlights; texto `#171E1B`. |
| `color.surface.canvas` | `#F5F5DC` | Fondo general beige. |
| `color.surface.default` | `#FFFEFA` | Fondo cálido de superficies. |
| `color.surface.raised` | `#FFFFFF` | Tarjetas y paneles. |
| `color.surface.muted` | `#EFEEE6` | Campos neutros, filas y disabled surface. |
| `color.text.primary` | `#171E1B` | Texto principal; texto claro de los botones oscuros. |
| `color.text.secondary` | `#46514B` | Texto de lectura secundaria. |
| `color.text.muted` | `#555F59` | Labels, captions y contenido auxiliar (AA sobre blanco/beige). |
| `color.text.inverse` | `#FFFFFF` | Sobre `primary.dark`, error dark y success dark. |
| `color.border.default` | `#A5AAA5` | Contornos de controles y bordes con función visual. |
| `color.border.subtle` | `#DEDFD8` | Separadores decorativos; no se usa como indicador único de estado. |
| `color.focus.ring` | `#225B78` | Contorno visible de foco; anillo adicional translúcido. |
| `color.success.default / dark / soft` | `#38805B / #1E6B47 / #E2F1E8` | Confirmaciones, disponibilidad y completion. |
| `color.warning.default / dark / soft` | `#946312 / #674300 / #F8ECD0` | Pendiente, capacidad y stock en atención. |
| `color.error.default / dark / active / soft` | `#A84331 / #852F25 / #70251E / #F7E5DF` | Cancelación, errores y riesgo, diferenciado del coral. |
| `color.info.default / dark / soft` | `#347D9A / #225B78 / #E5F1F5` | Ayuda e información neutral. |
| `color.disabled.surface / text` | `#E6E7E4 / #535B56` | Control inactivo: se comunica además por `disabled`/`aria-disabled`; no solo por color. |

## Validación de contraste WCAG 2.1 AA

Razón de contraste calculada con la luminancia relativa sRGB. Texto normal requiere 4.5:1; texto grande y límites/iconos informativos requieren 3:1.

| Primer plano | Fondo | Razón | Resultado y uso |
|---|---|---:|---|
| `#171E1B` | `#F5F5DC` | 15.33:1 | Pasa AA/AAA; contenido sobre canvas. |
| `#46514B` | `#FFFFFF` | 8.27:1 | Pasa; texto secundario en tarjetas. |
| `#555F59` | `#FFFFFF` | 6.63:1 | Pasa; texto auxiliar. |
| `#555F59` | `#F5F5DC` | 5.99:1 | Pasa; captions sobre fondo de página. |
| `#FFFFFF` | `#713A25` | 9.00:1 | Pasa; CTA principal. |
| `#FFFFFF` | `#5F2F1D` | 10.99:1 | Pasa; hover/active CTA. |
| `#FFFFFF` | `#A0522D` | 5.62:1 | Pasa; encabezado o botón sienna. |
| `#171E1B` | `#F4A460` | 8.34:1 | Pasa; texto sobre acento arena. |
| `#1E6B47` | `#E2F1E8` | 5.53:1 | Pasa; texto success y badge. |
| `#674300` | `#F8ECD0` | 7.52:1 | Pasa; texto warning y badge. |
| `#852F25` | `#F7E5DF` | 7.09:1 | Pasa; texto error y badge. |
| `#225B78` | `#E5F1F5` | 6.43:1 | Pasa; texto informativo. |
| `#535B56` | `#E6E7E4` | 5.64:1 | Pasa para la lectura de texto disabled; el estado se mantiene explícito. |
| `#E35336` | `#FFFFFF` | 3.78:1 | **No pasa para texto normal**; sí supera 3:1 para límite/icono y texto grande. Evitar etiqueta blanca normal sobre coral. |
| `#171E1B` | `#E35336` | 4.49:1 | **No pasa por poco para texto normal**. Usar `#111815` o fondo `#A0522D`/`#713A25` con texto blanco. |
| `#DEDFD8` | `#FFFFFF` | 1.38:1 | **No pasa para componente funcional**; usar solo separador decorativo y no depender de él para el borde del input. |

Las razones clave de la paleta Burnt sienna se calculan explícitamente: blanco/coral falla para texto (3.78:1); la corrección del CTA es texto blanco sobre `#713A25` (9:1). Para el texto sobre coral, ajustar primer plano a `#111815`; cualquier otro par nuevo debe volver a medirse. No reducir opacidad de texto como sustituto del contraste.

## Tipografía y dimensiones

| Token | Especificación |
|---|---|
| Familias | `font.heading: Manrope, sans-serif`; `font.body: DM Sans, system-ui, sans-serif`; fallback completamente local. |
| Escala | 12 px caption, 14 px label, 16 px cuerpo, 20 px subtítulo, 28 px título de sección, 40 px título hero fluido. |
| Pesos | 400 lectura, 500 regular reforzado, 600 etiqueta, 700 acción/título, 800 display. |
| Altura de línea | 1.55 cuerpo; 1.2 encabezados; 1.0 badges. |
| Espaciado | Escala base 4 px: `space-1..10` = 4, 8, 12, 16, 20, 24, 28, 32, 40, 48 px. |
| Radios | 6 px `sm`, 10 px `md`, 14 px `lg`, 19 px `xl`, 999 px pill/círculo. |
| Sombras | `sm` 0 1px 3px/8%; `md` 0 8px 24px/10%; `lg` 0 18px 48px/17%. Solo para elevación, no como borde. |
| Breakpoints | Mobile ≤ 520 px; tablet ≤ 820 px; desktop ≥ 821 px; layout ancho de contenido máx. 1440 px. |
| Botones | S 36 px compacto; M 44 px base; L 48 px. En targets touch, mínimo 44 × 44 px. |
| Inputs | 46 px alto, área táctil ≥ 44 px; textarea crece según contenido. |
| Iconografía | Iconos SVG inline o set accesible que defina el producto (no fijado en Figma); 16/20/24 px. Acompañar icono solo con nombre accesible. |
| Elevación z | Drawer 30; topbar 20; toast 60; foco/enlace skip 100. |
| Transiciones | 140 ms hover/focus; 220 ms drawer; respetar `prefers-reduced-motion`. |

## Variantes y estados

- **Button primary:** texto blanco sobre sienna `#713A25`; hover `#5F2F1D`; active `#4E281A`; focus ring azul visible. **Coral** es un acento aparte, no el relleno del botón con texto blanco.
- **Secondary/outline:** superficie blanca, texto carbón, borde `#A5AAA5`; hover gris/beige con borde sienna; selected usa fondo sienna suave y texto oscuro.
- **Danger:** texto blanco sobre `#852F25`; hover/active `#70251E`; badge error usa texto `#852F25` sobre `#F7E5DF`.
- **Disabled:** fondo `#E6E7E4`, texto `#535B56`, sin interacción y con atributo disabled; mensaje/estado accesible.
- **Campos:** borde default `#A5AAA5`; focus `#225B78` + anillo; error `#852F25` y mensaje asociado; readonly distinto visualmente de disabled.
- **Selección:** fondo `#F4E3DC` o `#E5F1F5`; texto primario `#171E1B`; no comunicar selección únicamente por color.
- **Hover/active** no son sustitutos del foco por teclado. La tabla de tokens se implementa como propiedades CSS semánticas reutilizables en vez de copiar hex por pantalla.
