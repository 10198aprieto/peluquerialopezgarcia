import { createFileRoute, Link } from "@tanstack/react-router";
import { LegalLayout, P, H2, H3, UL } from "@/components/LegalLayout";

export const Route = createFileRoute("/politica-privacidad")({
  component: PoliticaPrivacidad,
  head: () => ({
    meta: [
      { title: "Política de privacidad | Peluquería López García" },
      {
        name: "description",
        content:
          "Política de privacidad y protección de datos de Peluquería López García (LOGARVA C.B.), conforme al RGPD y la LOPD-GDD.",
      },
      { property: "og:title", content: "Política de privacidad | Peluquería López García" },
      {
        property: "og:description",
        content:
          "Cómo tratamos tus datos personales en Peluquería López García, Las Delicias, Valladolid.",
      },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary" },
    ],
  }),
});

function PoliticaPrivacidad() {
  return (
    <LegalLayout
      title="Política de privacidad del sitio web"
      subtitle="www.peluquerialopezgarcia.es"
    >
      <H2>I. Política de privacidad y protección de datos</H2>
      <P>
        Respetando lo establecido en la legislación vigente, Peluquería López García (en adelante,
        también Sitio Web) se compromete a adoptar las medidas técnicas y organizativas necesarias,
        según el nivel de seguridad adecuado al riesgo de los datos recogidos.
      </P>

      <H3>Leyes que incorpora esta política de privacidad</H3>
      <P>
        Esta política de privacidad está adaptada a la normativa española y europea vigente en materia
        de protección de datos personales en internet. En concreto, la misma respeta las siguientes
        normas:
      </P>
      <UL
        items={[
          "El Reglamento (UE) 2016/679 del Parlamento Europeo y del Consejo, de 27 de abril de 2016, relativo a la protección de las personas físicas en lo que respecta al tratamiento de datos personales y a la libre circulación de estos datos (RGPD).",
          "La Ley Orgánica 3/2018, de 5 de diciembre, de Protección de Datos Personales y garantía de los derechos digitales (LOPD-GDD).",
          "El Real Decreto 1720/2007, de 21 de diciembre, por el que se aprueba el Reglamento de desarrollo de la Ley Orgánica 15/1999, de 13 de diciembre, de Protección de Datos de Carácter Personal (RDLOPD).",
          "La Ley 34/2002, de 11 de julio, de Servicios de la Sociedad de la Información y de Comercio Electrónico (LSSI-CE).",
        ]}
      />

      <H3>Identidad del responsable del tratamiento de los datos personales</H3>
      <P>
        El responsable del tratamiento de los datos personales recogidos en Peluquería López García
        es: LOGARVA C.B., provista de NIF/CIF: E-47706841 e inscrito en: No aplica / no inscrito con
        los siguientes datos registrales: Entidad constituida mediante contrato privado, dada de alta
        en el Censo de Obligados Tributarios de la Agencia Tributaria de España con el NIF/CIF
        E47706841., cuyo representante es: No consta (en adelante, Responsable del tratamiento). Sus
        datos de contacto son los siguientes:
      </P>
      <UL
        items={[
          "Dirección: C/ Delicias, nº 17, 47013, Las Delicias - (Valladolid)",
          "Teléfono de contacto: 983082785",
          "Email de contacto: pelulopezgarcia@gmail.com",
        ]}
      />

      <H3>Registro de datos de carácter personal</H3>
      <P>
        En cumplimiento de lo establecido en el RGPD y la LOPD-GDD, le informamos que los datos
        personales recabados por Peluquería López García, mediante los formularios extendidos en sus
        páginas quedarán incorporados y serán tratados en nuestro fichero con el fin de poder
        facilitar, agilizar y cumplir los compromisos establecidos entre Peluquería López García y el
        Usuario o el mantenimiento de la relación que se establezca en los formularios que este
        rellene, o para atender una solicitud o consulta del mismo. Asimismo, de conformidad con lo
        previsto en el RGPD y la LOPD-GDD, salvo que sea de aplicación la excepción prevista en el
        artículo 30.5 del RGPD, se mantiene un registro de actividades de tratamiento que especifica,
        según sus finalidades, las actividades de tratamiento llevadas a cabo y las demás
        circunstancias establecidas en el RGPD.
      </P>

      <H3>Principios aplicables al tratamiento de los datos personales</H3>
      <P>
        El tratamiento de los datos personales del Usuario se someterá a los siguientes principios
        recogidos en el artículo 5 del RGPD y en el artículo 4 y siguientes de la Ley Orgánica 3/2018,
        de 5 de diciembre:
      </P>
      <UL
        items={[
          "Principio de licitud, lealtad y transparencia: se requerirá en todo momento el consentimiento del Usuario previa información completamente transparente de los fines para los cuales se recogen los datos personales.",
          "Principio de limitación de la finalidad: los datos personales serán recogidos con fines determinados, explícitos y legítimos.",
          "Principio de minimización de datos: los datos personales recogidos serán únicamente los estrictamente necesarios en relación con los fines para los que son tratados.",
          "Principio de exactitud: los datos personales deben ser exactos y estar siempre actualizados.",
          "Principio de limitación del plazo de conservación: los datos personales solo serán mantenidos de forma que se permita la identificación del Usuario durante el tiempo necesario para los fines de su tratamiento.",
          "Principio de integridad y confidencialidad: los datos personales serán tratados de manera que se garantice su seguridad y confidencialidad.",
          "Principio de responsabilidad proactiva: el Responsable del tratamiento será responsable de asegurar que los principios anteriores se cumplen.",
        ]}
      />

      <H3>Categorías de datos personales</H3>
      <P>
        Las categorías de datos que se tratan en Peluquería López García son únicamente datos
        identificativos. En ningún caso, se tratan categorías especiales de datos personales en el
        sentido del artículo 9 del RGPD.
      </P>

      <H3>Base legal para el tratamiento de los datos personales</H3>
      <P>
        La base legal para el tratamiento de los datos personales es el consentimiento. Peluquería
        López García se compromete a recabar el consentimiento expreso y verificable del Usuario para
        el tratamiento de sus datos personales para uno o varios fines específicos.
      </P>
      <P>
        El Usuario tendrá derecho a retirar su consentimiento en cualquier momento. Será tan fácil
        retirar el consentimiento como darlo. Como regla general, la retirada del consentimiento no
        condicionará el uso del Sitio Web.
      </P>
      <P>
        En las ocasiones en las que el Usuario deba o pueda facilitar sus datos a través de
        formularios para realizar consultas, solicitar información o por motivos relacionados con el
        contenido del Sitio Web, se le informará en caso de que la cumplimentación de alguno de ellos
        sea obligatoria debido a que los mismos sean imprescindibles para el correcto desarrollo de la
        operación realizada.
      </P>

      <H3>Fines del tratamiento a que se destinan los datos personales</H3>
      <P>
        Los datos personales son recabados y gestionados por Peluquería López García con la finalidad
        de poder facilitar, agilizar y cumplir los compromisos establecidos entre el Sitio Web y el
        Usuario o el mantenimiento de la relación que se establezca en los formularios que este último
        rellene o para atender una solicitud o consulta.
      </P>
      <P>
        Igualmente, los datos podrán ser utilizados con una finalidad comercial de personalización,
        operativa y estadística, y actividades propias del objeto social de Peluquería López García,
        así como para la extracción, almacenamiento de datos y estudios de marketing para adecuar el
        Contenido ofertado al Usuario, así como mejorar la calidad, funcionamiento y navegación por el
        Sitio Web.
      </P>
      <P>
        En el momento en que se obtengan los datos personales, se informará al Usuario acerca del fin
        o fines específicos del tratamiento a que se destinarán los datos personales; es decir, del
        uso o usos que se dará a la información recopilada.
      </P>

      <H3>Períodos de retención de los datos personales</H3>
      <P>
        Los datos personales solo serán retenidos durante el tiempo mínimo necesario para los fines de
        su tratamiento y, en todo caso, únicamente durante el siguiente plazo: No consta, o hasta que
        el Usuario solicite su supresión. En el momento en que se obtengan los datos personales, se
        informará al Usuario acerca del plazo durante el cual se conservarán los datos personales o,
        cuando eso no sea posible, los criterios utilizados para determinar este plazo.
      </P>

      <H3>Destinatarios de los datos personales</H3>
      <P>
        Los datos personales del Usuario no serán compartidos con terceros. En cualquier caso, en el
        momento en que se obtengan los datos personales, se informará al Usuario acerca de los
        destinatarios o las categorías de destinatarios de los datos personales.
      </P>

      <H3>Datos personales de menores de edad</H3>
      <P>
        Respetando lo establecido en los artículos 8 del RGPD y 7 de la Ley Orgánica 3/2018, de 5 de
        diciembre, solo los mayores de 14 años podrán otorgar su consentimiento para el tratamiento de
        sus datos personales de forma lícita por Peluquería López García. Si se trata de un menor de
        14 años, será necesario el consentimiento de los padres o tutores para el tratamiento, y este
        solo se considerará lícito en la medida en la que los mismos lo hayan autorizado.
      </P>

      <H3>Secreto y seguridad de los datos personales</H3>
      <P>
        Peluquería López García se compromete a adoptar las medidas técnicas y organizativas
        necesarias, según el nivel de seguridad adecuado al riesgo de los datos recogidos, de forma
        que se garantice la seguridad de los datos de carácter personal y se evite la destrucción,
        pérdida o alteración accidental o ilícita de datos personales transmitidos, conservados o
        tratados de otra forma, o la comunicación o acceso no autorizados a dichos datos.
      </P>
      <P>
        El Sitio Web cuenta con un certificado SSL (Secure Socket Layer), que asegura que los datos
        personales se transmiten de forma segura y confidencial, al ser la transmisión de los datos
        entre el servidor y el Usuario, y en retroalimentación, totalmente cifrada o encriptada.
      </P>
      <P>
        Sin embargo, debido a que Peluquería López García no puede garantizar la inexpugnabilidad de
        internet ni la ausencia total de hackers u otros que accedan de modo fraudulento a los datos
        personales, el Responsable del tratamiento se compromete a comunicar al Usuario sin dilación
        indebida cuando ocurra una violación de la seguridad de los datos personales que sea probable
        que entrañe un alto riesgo para los derechos y libertades de las personas físicas.
      </P>
      <P>
        Los datos personales serán tratados como confidenciales por el Responsable del tratamiento,
        quien se compromete a informar de y a garantizar por medio de una obligación legal o
        contractual que dicha confidencialidad sea respetada por sus empleados, asociados, y toda
        persona a la cual le haga accesible la información.
      </P>

      <H3>Derechos derivados del tratamiento de los datos personales</H3>
      <P>
        El Usuario tiene sobre Peluquería López García y podrá, por tanto, ejercer frente al
        Responsable del tratamiento los siguientes derechos reconocidos en el RGPD y la Ley Orgánica
        3/2018, de 5 de diciembre:
      </P>
      <UL
        items={[
          "Derecho de acceso: obtener confirmación de si se están tratando o no sus datos personales y, en caso afirmativo, información sobre sus datos concretos y el tratamiento realizado.",
          "Derecho de rectificación: que se modifiquen sus datos personales que resulten ser inexactos o incompletos.",
          "Derecho de supresión (\"el derecho al olvido\"): obtener la supresión de sus datos personales cuando ya no sean necesarios para los fines para los que fueron recogidos o tratados, entre otros supuestos.",
          "Derecho a la limitación del tratamiento: limitar el tratamiento de sus datos personales en los supuestos previstos por la normativa.",
          "Derecho a la portabilidad de los datos: recibir sus datos personales en un formato estructurado, de uso común y lectura mecánica, y transmitirlos a otro responsable.",
          "Derecho de oposición: que no se lleve a cabo el tratamiento de sus datos de carácter personal o se cese el mismo.",
          "Derecho a no ser objeto de una decisión basada únicamente en el tratamiento automatizado, incluida la elaboración de perfiles.",
        ]}
      />
      <P>
        Así pues, el Usuario podrá ejercitar sus derechos mediante comunicación escrita dirigida al
        Responsable del tratamiento con la referencia "RGPD-www.peluquerialopezgarcia.es",
        especificando:
      </P>
      <UL
        items={[
          "Nombre, apellidos del Usuario y copia del DNI. En los casos en que se admita la representación, será también necesaria la identificación de la persona que representa al Usuario, así como el documento acreditativo de la representación.",
          "Petición con los motivos específicos de la solicitud o información a la que se quiere acceder.",
          "Domicilio a efecto de notificaciones.",
          "Fecha y firma del solicitante.",
          "Todo documento que acredite la petición que formula.",
        ]}
      />
      <P>
        Esta solicitud y todo otro documento adjunto podrá enviarse a la siguiente dirección postal:
        C/ Delicias, nº 17, 47013, Las Delicias - (Valladolid); o al correo electrónico:
        pelulopezgarcia@gmail.com.
      </P>

      <H3>Enlaces a sitios web de terceros</H3>
      <P>
        El Sitio Web puede incluir hipervínculos o enlaces que permiten acceder a páginas web de
        terceros distintos de Peluquería López García, y que por tanto no son operados por Peluquería
        López García. Los titulares de dichos sitios web dispondrán de sus propias políticas de
        protección de datos, siendo ellos mismos, en cada caso, responsables de sus propios ficheros y
        de sus propias prácticas de privacidad.
      </P>

      <H3>Reclamaciones ante la autoridad de control</H3>
      <P>
        En caso de que el Usuario considere que existe un problema o infracción de la normativa
        vigente en la forma en la que se están tratando sus datos personales, tendrá derecho a la
        tutela judicial efectiva y a presentar una reclamación ante una autoridad de control, en
        particular, en el Estado en el que tenga su residencia habitual, lugar de trabajo o lugar de
        la supuesta infracción. En el caso de España, la autoridad de control es la Agencia Española
        de Protección de Datos (https://www.aepd.es/).
      </P>

      <H2>II. Aceptación y cambios en esta política de privacidad</H2>
      <P>
        Es necesario que el Usuario haya leído y esté conforme con las condiciones sobre la protección
        de datos de carácter personal contenidas en esta Política de Privacidad, así como que acepte
        el tratamiento de sus datos personales para que el Responsable del tratamiento pueda proceder
        al mismo en la forma, durante los plazos y para las finalidades indicadas. El uso del Sitio
        Web implicará la aceptación de la Política de Privacidad del mismo.
      </P>
      <P>
        Peluquería López García se reserva el derecho a modificar su Política de Privacidad, de
        acuerdo a su propio criterio, o motivado por un cambio legislativo, jurisprudencial o
        doctrinal de la Agencia Española de Protección de Datos. Los cambios o actualizaciones de esta
        Política de Privacidad no serán notificados de forma explícita al Usuario. Se recomienda al
        Usuario consultar esta página de forma periódica para estar al tanto de los últimos cambios o
        actualizaciones.
      </P>
      <P className="text-sm">
        Este documento de Política de Privacidad de un sitio web ha sido creado mediante el generador
        de plantilla de política de privacidad web gratis online el día 12/08/2026.
      </P>
      <P>
        Consulta también nuestro{" "}
        <Link to="/aviso-legal" className="text-accent underline">
          Aviso legal
        </Link>
        .
      </P>
    </LegalLayout>
  );
}
