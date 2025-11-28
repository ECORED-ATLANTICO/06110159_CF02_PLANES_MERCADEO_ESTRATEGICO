<template lang="pug">
.curso-main-container.pb-3
  BannerInterno
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5.mb-5
    .titulo-principal.color-acento-contenido
      .titulo-principal__numero
        span 5
      h1 Mejora continua

    .row.justify-content-center.align-items-center.mb-5
      .col-8.col-lg-2.mb-lg-0.mb-3(data-aos="zoom-in-right")
        figure
          img(src="@/assets/curso/temas/tema_5/img_1.png", class="img-fluid")
      .col-12.col-lg-10(data-aos="zoom-in-right")
        p.mb-3 La mejora continua es un principio esencial en la gestión estratégica de marketing, implica revisar, ajustar y perfeccionar las acciones ejecutadas para garantizar su pertinencia, efectividad y sostenibilidad.
        p.mb-0 La mejora continua se define como un proceso sistemático de revisión y perfeccionamiento de actividades, con el fin de incrementar su calidad, eficiencia y alineación con los objetivos estratégicos. Según Deming (1986), este enfoque se basa en el ciclo PHVA (Planear-Hacer-Verificar-Actuar), que promueve la reflexión constante y la acción informada.
    
    .row.justify-content-center.align-items-center.mb-5
      .col-8.col-lg-10.mb-lg-0.mb-3(data-aos="zoom-in-right")
        .cita-decorada
          blockquote.cita-decorada__caja.cita-decorada__caja--fondo-4.p-4
            .row.justify-content-center.align-items-center
              .col-9.col-lg-8
                p.cita-decorada__texto.mb-2.p-3 En el contexto del marketing, la mejora continua permite ajustar campañas, redefinir públicos objetivos, optimizar canales de comunicación y adaptar mensajes según el comportamiento del consumidor. Enfoques como Kaizen, Lean Marketing y Agile Marketing refuerzan esta práctica, promoviendo pequeños cambios sostenidos, eliminación de desperdicios y trabajo colaborativo en sprints (ciclo de trabajo):
              .col-3.col-lg-4.d-none.d-lg-block
                figure
                  img(src='@/assets/curso/temas/tema_5/img_3.png', class="cita-decorada__imagen-flotante-4")
    
    .row.justify-content-center.align-items-center.mb-5
      .col-8.col-lg-3.mb-lg-0.mb-3(data-aos="zoom-in-right")
        figure
          img(src="@/assets/curso/temas/tema_5/img_5.png", class="img-fluid")
      .col-12.col-lg-7(data-aos="zoom-in-right")
        AcordionA(tipo="b" clase-tarjeta="tarjeta tarjeta--gris")
          .row.justify-content-center.align-items-center.mb-0(titulo="PHVA (Planificar, Hacer, Verificar, Actuar)")
            .col-12.col-lg-12
              p.mb-0 Método iterativo de mejora continua que permite ajustar campañas según resultados. Incluye: Planificar (definir objetivos y KPIs, como diseñar una campaña), Hacer (ejecutar en los canales seleccionados), Verificar (medir indicadores como CTR, ROI o engagement), y Actuar (optimizar contenidos, segmentación o presupuesto). Su beneficio principal es cerrar el ciclo de aprendizaje para evitar errores recurrentes.

          .row.justify-content-center.align-items-center.mb-0(titulo="Kaizen")
            .col-12.col-lg-12
              p.mb-0 Filosofía japonesa basada en pequeños cambios sostenidos, involucrando a todos los niveles y eliminando desperdicios (tiempo, recursos ó pasos innecesarios). Utiliza herramientas como 5S y Gemba Walk. En marketing se traduce en mejoras constantes como ajustar el copy de un anuncio, reorganizar el flujo del cliente o simplificar el proceso para aumentar conversiones.

          .row.justify-content-center.align-items-center.mb-0(titulo="Lean marketing")
            .col-12.col-lg-12
              p.mb-0 Busca “hacer más con menos”, concentrándose solo en lo que aporta valor. Se basa en crear Productos Mínimos Viables (PMV), medir rápido y aprender en ciclos cortos. Emplea microcampañas económicas, segmentación precisa y acciones en tiempo real. Un ejemplo es lanzar una campaña piloto con bajo presupuesto, medir su impacto y escalar solo si genera buenos resultados.

          .row.justify-content-center.align-items-center.mb-0(titulo="Agile marketing")
            .col-12.col-lg-12
              p.mb-0 Enfoque flexible inspirado en Scrum y Kanban, con equipos multidisciplinarios que trabajan en sprints cortos, reciben feedback constante y toman decisiones basadas en datos. Usa herramientas como tableros Kanban, backlogs y war rooms digitales. Por ejemplo, un equipo que lanza una campaña en dos semanas, analiza métricas y ajusta mensajes según el comportamiento del consumidor.
    
    .bg_img_8.mb-5  

      .row.justify-content-center.align-items-center.mb-0
        .col-12.col-lg-10 
      
          Separador  
        
          #t_5_1.titulo-segundo.color-acento-contenido
            .h2(data-aos="fade-right") 5.1 Indicadores
          .mb-0
      
      .row.justify-content-center.align-items-center.mb-5
        .col-12.col-lg-7.order-2.order-lg-1.mb-0(data-aos="zoom-in-right")
          p.mb-0 En los procesos de gestión, la medición del desempeño cumple dos funciones conceptualmente distintas según el enfoque aplicado. En los criterios de optimización, la medición se orienta a valorar la eficiencia y la eficacia de las acciones ejecutadas, permitiendo determinar en qué medida los recursos fueron utilizados de manera adecuada para alcanzar los resultados previstos. En el enfoque de mejora continua, en cambio, la medición adquiere un carácter evolutivo: su propósito es observar el comportamiento del sistema a lo largo del tiempo, identificar patrones, variaciones y áreas susceptibles de refinamiento progresivo.
        .col-8.col-lg-3.order-1.order-lg-2.mb-lg-0.mb-3(data-aos="zoom-in-right")
          figure
            img(src="@/assets/curso/temas/tema_5/img_6.png", class="img-fluid")
      
      .row.justify-content-center.align-items-center.mb-5
        .col-12.col-lg-8
          .tarjeta.color-adicional-4.p-4.rounded-3
            .row.justify-content-center.align-items-center
              .col-8.col-lg-2.mb-lg-0.mb-3
                figure
                  img(src='@/assets/curso/temas/tema_5/img_7.png', class="img-fluid")
              .col-12.col-lg-10
                p.mb-0 Ambos enfoques comparten la necesidad de datos confiables, pero difieren en su intención: la optimización busca maximizar el rendimiento en escenarios específicos, mientras que la mejora continua procura asegurar la sostenibilidad y la adaptación permanente del desempeño. En este sentido, pueden considerarse complementarios: la optimización aporta eficiencia inmediata y la mejora continua garantiza la evolución sistemática, integrando aprendizajes para fortalecer la gestión en el largo plazo.

      .row.justify-content-center.align-items-center.mb-0
        .col-12.col-lg-10
        
          Separador 
          
          #t_5_2.titulo-segundo.color-acento-contenido
            .h2(data-aos="fade-right") 5.2 Evaluación
          .mb-0

          p.mb-5 La mejora continua se apoya en instrumentos que facilitan la observación, el análisis y la toma de decisiones, estos instrumentos permiten recoger información cualitativa y cuantitativa sobre el desempeño de las acciones de marketing.

    .row.justify-content-center.align-items-center.mb-5
      .col-12.col-lg-8.order-2.order-lg-1.mb-0(data-aos="zoom-in-right")
        .custom-slider.p-3.p-sm-3(data-aos="zoom-in-right")
          SlyderF(columnas="col-12 col-sm-12 col-md-12 col-lg-6")
            .tarjeta--blanca-1.h-95
              .row.justify-content-center.align-items-center.mb-0
                .col-12.mb-3
                  .tarjeta--10
                .tarjeta--slider__title.mb-3.text-center.fw-bold.texto-resaltado.texto-resaltado--color-acento-contenido-20 Lista  de chequeo
                .tarjeta--slider__content.text-center Verifica el cumplimiento de criterios establecidos, por ejemplo, al revisar elementos clave de una campaña antes del lanzamiento.
            .tarjeta--blanca-1.h-95
              .row.justify-content-center.align-items-center.mb-0
                .col-12.mb-3
                  .tarjeta--11
                .tarjeta--slider__title.mb-3.text-center.fw-bold.texto-resaltado.texto-resaltado--color-acento-contenido-20 Encuesta de satisfacción
                .tarjeta--slider__content.text-center Recoge retroalimentación directa del cliente, por ejemplo, al evaluar la experiencia de un usuario después de una compra.
            .tarjeta--blanca-1.h-95
              .row.justify-content-center.align-items-center.mb-0
                .col-12.mb-3
                  .tarjeta--12
                .tarjeta--slider__title.mb-3.text-center.fw-bold.texto-resaltado.texto-resaltado--color-acento-contenido-20 Matriz de valoración
                .tarjeta--slider__content.text-center Compara alternativas con base en criterios definidos, por ejemplo, para seleccionar los canales de comunicación más efectivos.
            .tarjeta--blanca-1.h-95
              .row.justify-content-center.align-items-center.mb-0
                .col-12.mb-3
                  .tarjeta--13
                .tarjeta--slider__title.mb-3.text-center.fw-bold.texto-resaltado.texto-resaltado--color-acento-contenido-20 Reunión retrospectiva
                .tarjeta--slider__content.text-center Espacio de reflexión y mejora en equipo, por ejemplo, para analizar resultados y proponer ajustes en un equipo creativo.
      .col-8.col-lg-3.order-1.order-lg-2.mb-lg-0.mb-3(data-aos="zoom-in-right")
        figure
          img(src="@/assets/curso/temas/tema_5/img_12.png", class="img-fluid")
    
    .row.justify-content-center.align-items-center.mb-0
      .col-12.col-lg-10(data-aos="zoom-in-right")
        p.mb-5 Estos instrumentos permiten que la mejora continua sea tangible, colaborativa y orientada a resultados.
</template>

<script>
export default {
  name: 'Tema5',
  data: () => ({
    // variables de vue
  }),
  mounted() {
    this.$nextTick(() => {
      this.$aosRefresh()
    })
  },
  updated() {
    this.$aosRefresh()
  },
}
</script>

<style lang="sass"></style>
