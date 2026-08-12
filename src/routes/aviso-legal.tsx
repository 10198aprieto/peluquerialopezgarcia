import { createFileRoute, Link } from "@tanstack/react-router";
import { LegalLayout, P, H2, H3, UL } from "@/components/LegalLayout";

export const Route = createFileRoute("/aviso-legal")({
  component: AvisoLegal,
  head: () => ({
    meta: [
      { title: "Aviso legal | Peluquería López García" },
      {
        name: "description",
        content:
          "Aviso legal y condiciones generales de uso del sitio web de Peluquería López García, LOGARVA C.B., Calle Delicias 17, Valladolid.",
      },
      { property: "og:title", content: "Aviso legal | Peluquería López García" },
      {
        property: "og:description",
        content:
          "Condiciones generales de uso del sitio web de Peluquería López García en Las Delicias, Valladolid.",
      },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary" },
    ],
  }),
});

function AvisoLegal() {
  return (
    <LegalLayout
      title="Aviso legal y condiciones generales de uso"
      subtitle="www.peluquerialopezgarcia.es"
    >
      <H2>I. Información general</H2>
      <P>
        En cumplimiento con el deber de información dispuesto en la Ley 34/2002 de Servicios de la
        Sociedad de la Información y el Comercio Electrónico (LSSI-CE) de 11 de julio, se facilitan a
        continuación los siguientes datos de información general de este sitio web:
      </P>
      <P>
        La titularidad de este sitio web, www.peluquerialopezgarcia.es, (en adelante, Sitio Web) la
        ostenta: LOGARVA C.B., provista de NIF: E-47706841 e inscrita en: No consta / no aplica con
        los siguientes datos registrales: Entidad constituida mediante contrato privado, dada de alta
        en el Censo de Obligados Tributarios de la Agencia Tributaria de España con el NIF/CIF
        E47706841., cuyo representante es: No consta, y cuyos datos de contacto son:
      </P>
      <UL
        items={[
          "Dirección: C/ Delicias, nº 17, 47013, Las Delicias - (Valladolid)",
          "Teléfono de contacto: 983082785",
          "Email de contacto: pelulopezgarcia@gmail.com",
        ]}
      />

      <H2>II. Términos y condiciones generales de uso</H2>
      <H3>El objeto de las condiciones: el Sitio Web</H3>
      <P>
        El objeto de las presentes Condiciones Generales de Uso (en adelante, Condiciones) es regular
        el acceso y la utilización del Sitio Web. A los efectos de las presentes Condiciones se
        entenderá como Sitio Web: la apariencia externa de los interfaces de pantalla, tanto de forma
        estática como de forma dinámica, es decir, el árbol de navegación; y todos los elementos
        integrados tanto en los interfaces de pantalla como en el árbol de navegación (en adelante,
        Contenidos) y todos aquellos servicios o recursos en línea que en su caso ofrezca a los
        Usuarios (en adelante, Servicios).
      </P>
      <P>
        Peluquería López García se reserva la facultad de modificar, en cualquier momento, y sin
        aviso previo, la presentación y configuración del Sitio Web y de los Contenidos y Servicios
        que en él pudieran estar incorporados. El Usuario reconoce y acepta que en cualquier momento
        Peluquería López García pueda interrumpir, desactivar y/o cancelar cualquiera de estos
        elementos que se integran en el Sitio Web o el acceso a los mismos.
      </P>
      <P>
        El acceso al Sitio Web por el Usuario tiene carácter libre y, por regla general, es gratuito
        sin que el Usuario tenga que proporcionar una contraprestación para poder disfrutar de ello,
        salvo en lo relativo al coste de conexión a través de la red de telecomunicaciones
        suministrada por el proveedor de acceso que hubiere contratado el Usuario. La utilización de
        alguno de los Contenidos o Servicios del Sitio Web podrá hacerse mediante la suscripción o
        registro previo del Usuario.
      </P>

      <H3>El Usuario</H3>
      <P>
        El acceso, la navegación y uso del Sitio Web, así como por los espacios habilitados para
        interactuar entre los Usuarios, y el Usuario y Peluquería López García, como los comentarios
        y/o espacios de blogging, confiere la condición de Usuario, por lo que se aceptan, desde que
        se inicia la navegación por el Sitio Web, todas las Condiciones aquí establecidas, así como
        sus ulteriores modificaciones, sin perjuicio de la aplicación de la correspondiente normativa
        legal de obligado cumplimiento según el caso. Dada la relevancia de lo anterior, se recomienda
        al Usuario leerlas cada vez que visite el Sitio Web.
      </P>
      <P>
        El Sitio Web de Peluquería López García proporciona gran diversidad de información, servicios
        y datos. El Usuario asume su responsabilidad para realizar un uso correcto del Sitio Web. Esta
        responsabilidad se extenderá a:
      </P>
      <UL
        items={[
          "Un uso de la información, Contenidos y/o Servicios y datos ofrecidos por Peluquería López García sin que sea contrario a lo dispuesto por las presentes Condiciones, la Ley, la moral o el orden público, o que de cualquier otro modo puedan suponer lesión de los derechos de terceros o del mismo funcionamiento del Sitio Web.",
          "La veracidad y licitud de las informaciones aportadas por el Usuario en los formularios extendidos por Peluquería López García para el acceso a ciertos Contenidos o Servicios ofrecidos por el Sitio Web. En todo caso, el Usuario notificará de forma inmediata a Peluquería López García acerca de cualquier hecho que permita el uso indebido de la información registrada en dichos formularios, tales como, pero no solo, el robo, extravío, o el acceso no autorizado a identificadores y/o contraseñas, con el fin de proceder a su inmediata cancelación.",
        ]}
      />
      <P>
        Peluquería López García se reserva el derecho de retirar todos aquellos comentarios y
        aportaciones que vulneren la ley, el respeto a la dignidad de la persona, que sean
        discriminatorios, xenófobos, racistas, pornográficos, spamming, que atenten contra la juventud
        o la infancia, el orden o la seguridad pública o que, a su juicio, no resultaran adecuados
        para su publicación. En cualquier caso, Peluquería López García no será responsable de las
        opiniones vertidas por los Usuarios a través de comentarios u otras herramientas de blogging o
        de participación que pueda haber.
      </P>
      <P>
        El mero acceso a este Sitio Web no supone entablar ningún tipo de relación de carácter
        comercial entre Peluquería López García y el Usuario. El Usuario declara ser mayor de edad y
        disponer de la capacidad jurídica suficiente para vincularse por las presentes Condiciones.
        Por lo tanto, este Sitio Web de Peluquería López García no se dirige a menores de edad.
        Peluquería López García declina cualquier responsabilidad por el incumplimiento de este
        requisito.
      </P>
      <P>
        El Sitio Web está dirigido principalmente a Usuarios residentes en España. Peluquería López
        García no asegura que el Sitio Web cumpla con legislaciones de otros países, ya sea total o
        parcialmente. Si el Usuario reside o tiene su domiciliado en otro lugar y decide acceder y/o
        navegar en el Sitio Web lo hará bajo su propia responsabilidad, deberá asegurarse de que tal
        acceso y navegación cumple con la legislación local que le es aplicable, no asumiendo
        Peluquería López García responsabilidad alguna que se pueda derivar de dicho acceso.
      </P>

      <H2>III. Acceso y navegación en el Sitio Web: exclusión de garantías y responsabilidad</H2>
      <P>
        Peluquería López García no garantiza la continuidad, disponibilidad y utilidad del Sitio Web,
        ni de los Contenidos o Servicios. Peluquería López García hará todo lo posible por el buen
        funcionamiento del Sitio Web, sin embargo, no se responsabiliza ni garantiza que el acceso a
        este Sitio Web no vaya a ser ininterrumpido o que esté libre de error.
      </P>
      <P>
        Tampoco se responsabiliza o garantiza que el contenido o software al que pueda accederse a
        través de este Sitio Web, esté libre de error o cause un daño al sistema informático (software
        y hardware) del Usuario. En ningún caso Peluquería López García será responsable por las
        pérdidas, daños o perjuicios de cualquier tipo que surjan por el acceso, navegación y el uso
        del Sitio Web, incluyéndose, pero no limitándose, a los ocasionados a los sistemas
        informáticos o los provocados por la introducción de virus.
      </P>
      <P>
        Peluquería López García tampoco se hace responsable de los daños que pudiesen ocasionarse a
        los usuarios por un uso inadecuado de este Sitio Web. En particular, no se hace responsable en
        modo alguno de las caídas, interrupciones, falta o defecto de las telecomunicaciones que
        pudieran ocurrir.
      </P>

      <H2>IV. Política de enlaces</H2>
      <P>
        Se informa que el Sitio Web de Peluquería López García pone o puede poner a disposición de los
        Usuarios medios de enlace (como, entre otros, links, banners, botones), directorios y motores
        de búsqueda que permiten a los Usuarios acceder a sitios web pertenecientes y/o gestionados
        por terceros.
      </P>
      <P>
        La instalación de estos enlaces, directorios y motores de búsqueda en el Sitio Web tiene por
        objeto facilitar a los Usuarios la búsqueda de y acceso a la información disponible en
        Internet, sin que pueda considerarse una sugerencia, recomendación o invitación para la visita
        de los mismos. Peluquería López García no ofrece ni comercializa por sí ni por medio de
        terceros los productos y/o servicios disponibles en dichos sitios enlazados.
      </P>
      <P>
        Asimismo, tampoco garantizará la disponibilidad técnica, exactitud, veracidad, validez o
        legalidad de sitios ajenos a su propiedad a los que se pueda acceder por medio de los enlaces.
        Peluquería López García en ningún caso revisará o controlará el contenido de otros sitios web,
        así como tampoco aprueba, examina ni hace propios los productos y servicios, contenidos,
        archivos y cualquier otro material existente en los referidos sitios enlazados.
      </P>
      <P>
        Peluquería López García no asume ninguna responsabilidad por los daños y perjuicios que
        pudieran producirse por el acceso, uso, calidad o licitud de los contenidos, comunicaciones,
        opiniones, productos y servicios de los sitios web no gestionados por Peluquería López García
        y que sean enlazados en este Sitio Web.
      </P>
      <P>
        El Usuario o tercero que realice un hipervínculo desde una página web de otro, distinto, sitio
        web al Sitio Web de Peluquería López García deberá saber que:
      </P>
      <UL
        items={[
          "No se permite la reproducción —total o parcialmente— de ninguno de los Contenidos y/o Servicios del Sitio Web sin autorización expresa de Peluquería López García.",
          "No se permite tampoco ninguna manifestación falsa, inexacta o incorrecta sobre el Sitio Web de Peluquería López García, ni sobre los Contenidos y/o Servicios del mismo.",
          "A excepción del hipervínculo, el sitio web en el que se establezca dicho hiperenlace no contendrá ningún elemento, de este Sitio Web, protegido como propiedad intelectual por el ordenamiento jurídico español, salvo autorización expresa de Peluquería López García.",
          "El establecimiento del hipervínculo no implicará la existencia de relaciones entre Peluquería López García y el titular del sitio web desde el cual se realice, ni el conocimiento y aceptación de Peluquería López García de los contenidos, servicios y/o actividades ofrecidas en dicho sitio web, y viceversa.",
        ]}
      />

      <H2>V. Propiedad intelectual e industrial</H2>
      <P>
        Peluquería López García por sí o como parte cesionaria, es titular de todos los derechos de
        propiedad intelectual e industrial del Sitio Web, así como de los elementos contenidos en el
        mismo (a título enunciativo y no exhaustivo, imágenes, sonido, audio, vídeo, software o
        textos, marcas o logotipos, combinaciones de colores, estructura y diseño, selección de
        materiales usados, programas de ordenador necesarios para su funcionamiento, acceso y uso,
        etc.). Serán, por consiguiente, obras protegidas como propiedad intelectual por el
        ordenamiento jurídico español, siéndoles aplicables tanto la normativa española y comunitaria
        en este campo, como los tratados internacionales relativos a la materia y suscritos por
        España.
      </P>
      <P>
        Todos los derechos reservados. En virtud de lo dispuesto en la Ley de Propiedad Intelectual,
        quedan expresamente prohibidas la reproducción, la distribución y la comunicación pública,
        incluida su modalidad de puesta a disposición, de la totalidad o parte de los contenidos de
        esta página web, con fines comerciales, en cualquier soporte y por cualquier medio técnico,
        sin la autorización de Peluquería López García.
      </P>
      <P>
        El Usuario se compromete a respetar los derechos de propiedad intelectual e industrial de
        Peluquería López García. Podrá visualizar los elementos del Sitio Web o incluso imprimirlos,
        copiarlos y almacenarlos en el disco duro de su ordenador o en cualquier otro soporte físico
        siempre y cuando sea, exclusivamente, para su uso personal. El Usuario, sin embargo, no podrá
        suprimir, alterar, o manipular cualquier dispositivo de protección o sistema de seguridad que
        estuviera instalado en el Sitio Web.
      </P>
      <P>
        En caso de que el Usuario o tercero considere que cualquiera de los Contenidos del Sitio Web
        suponga una violación de los derechos de protección de la propiedad intelectual, deberá
        comunicarlo inmediatamente a Peluquería López García a través de los datos de contacto del
        apartado de INFORMACIÓN GENERAL de este Aviso Legal y Condiciones Generales de Uso.
      </P>

      <H2>VI. Acciones legales, legislación aplicable y jurisdicción</H2>
      <P>
        Peluquería López García se reserva la facultad de presentar las acciones civiles o penales que
        considere necesarias por la utilización indebida del Sitio Web y Contenidos, o por el
        incumplimiento de las presentes Condiciones.
      </P>
      <P>
        La relación entre el Usuario y Peluquería López García se regirá por la normativa vigente y de
        aplicación en el territorio español. De surgir cualquier controversia en relación con la
        interpretación y/o a la aplicación de estas Condiciones las partes someterán sus conflictos a
        la jurisdicción ordinaria sometiéndose a los jueces y tribunales que correspondan conforme a
        derecho.
      </P>
      <P className="text-sm">
        Este documento de Aviso Legal y Condiciones Generales de uso del sitio web ha sido creado
        mediante el generador de plantilla de aviso legal y condiciones de uso online el día
        12/08/2026.
      </P>
      <P>
        Consulta también nuestra{" "}
        <Link to="/politica-privacidad" className="text-accent underline">
          Política de privacidad
        </Link>
        .
      </P>
    </LegalLayout>
  );
}
