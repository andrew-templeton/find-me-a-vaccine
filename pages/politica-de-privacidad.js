
import ListOfLinks from '../components/ListOfLinks'
import GridPage from '../components/GridPage'

const content = {
  title: 'Find Me a Vaccine Política de Privacidad',
  description: <p style={{ textAlign: 'left' }}>Find Me a Vaccine reconoce la importancia de salvaguardar datos personales que se pueden utilizar para identificarlo personalmente o contactarlo como persona individual (en adelante “Datos Personales”). Nuestra organización quiere que se sienta seguro acerca de la privacidad de los Datos Personales que proporciona a Texas Vaccine Update y a nuestros voluntarios al solicitar ayuda con apuntarse para una cita de vacuna contra el COVID-19 (en adelante los “Servicios de Voluntarios”).
    Esta política de privacidad aplica solamente a la información recopilada por Find Me a Vaccine en el formulario de “Solicitud de Ayuda” ubicada en: https://findmeavaccine.com/ayuda
    (en adelante “Formulario de Solicitud de Ayuda”). Usted es el único responsable de la exactitud de la información que proporciona a Find Me a Vaccine. Esta Política de Privacidad no se aplica a ninguna información, incluyendo Datos Personales que comparta en el Grupo Slack de Find Me a Vaccine. No debe compartir Datos Personales ni otra información confidencial en el Grupo Slack.
  </p>,
  items: [
    {
      title: 'Datos Personales Que Recopilamos',
      copy: 'Find Me a Vaccine recopila, procesa, y retiene la información que proporciona al rellenar el Formulario de Solicitud de Ayuda, que puede incluir: nombre y apellido, correo electrónico, número de teléfono, domicilio, y fecha de nacimiento. Los Datos Personales solicitados por Find Me a Vaccine se limitan a los tipos de datos que suelen requerir los proveedores de la vacuna contra el COVID-19. Find Me a Vaccine no necesita, ni se debe proporcionar, algún Dato Personal fuera de los tipos de datos que aparecen en el Formulario de Solicitud de Ayuda.'
    },
    {
      title: 'Como Usamos Datos Personales',
      copy: 'El uso de Find Me a Vaccine de información recopilada a través del Formulario de Solicitud de Ayuda se limita al propósito de proveer los Servicios de Voluntarios. Esta Política de Privacidad se le aplica a usted y a cualquier persona cuya información proporcione a Find Me a Vaccine. Find Me a Vaccine usará Datos Personales solamente en formas requeridas para desempeñar los Servicios de Voluntarios. Nuestros voluntarios también pueden usar Datos Personales para contactarlo por teléfono o correo electrónico para programar o confirmar una cita.'
    },
    {
      title: 'Razones Por Las Que Compartimos Datos Personales',
      copy: 'Find Me a Vaccine divulga Datos Personales solamente a: (i)voluntarios dentro de nuestra organización; y (ii)proveedores de servicios externos que utilizamos para almacenar y procesar su información durante la prestación de Servicios de Voluntarios; (iii) proveedores de atención médica verificados que administran vacunas COVID-19; y (iv) entidades verificadas (tanto públicas como privadas) que programan citas directas para la vacuna COVID 19. Se les instruye a los voluntarios que mantengan la confidencialidad de Datos Personales en todo momento. Find Me a Vaccine solamente utiliza proveedores de servicios externos con suficientes políticas de privacidad y seguridad relacionadas con Datos Personales. Find Me a Vaccine y sus proveedores de servicios externos no venden sus Datos Personales obtenidos durante la prestación de Servicios de Voluntarios a terceros.'
    },
    {
      title: 'Política de Retención',
      copy: 'Dentro de 30 días tras el envío de su Formulario de Solicitud de Ayuda, o según lo requiera la ley aplicable, ya sea que podamos encontrarle una cita o no, Find Me a Vaccine eliminará Datos Personales y los removerá de todo sistema y registros de Find Me a Vaccine. Sin embargo, Find Me a Vaccine puede retener y utilizar su información siempre y cuando sea necesario para cumplir con obligaciones legales y resolver disputas.'
    },
    {
      title: 'Divulgación Requerida Por Ley',
      copy: 'Find Me a Vaccine puede cooperar con agencias de aplicación de la ley para identificar a personas que utilizan los Servicios de Voluntarios para actividades ilegales. A su discreción, Find Me a Vaccine divulgará información incluyendo Datos Personales si Find Me a Vaccine cree razonablemente que: (i) la ley lo requiere;  (ii) y que dicha divulgación es necesaria para proteger a Find Me a Vaccine o sus voluntarios de responsabilidad legal; (iii) o porque Texas Vaccine Update debe hacerlo para proteger la integridad de los Servicios de Voluntarios.'
    },
    {
      title: 'Privacidad De Los Niños',
      copy: 'Find Me a Vaccine reconoce los intereses de privacidad de los niños y Find Me a Vaccine alienta a los padres y tutores a participar activamente en las actividades e intereses en línea de sus hijos. Los Servicios de Voluntarios no están destinados a niños menores de 18 años. Find Me a Vaccine no recopila a sabiendas Datos Personales de niños menores de 18 años.'
    },
    {
      title: 'Renuncia de Garantías y Extensión de Responsabilidad',
      copy: 'LOS SERVICIOS DE VOLUNTARIOS Y CUALQUIER INFORMACIÓN PROPORCIONADA POR Y A TRAVÉS DEL SITIO WEB DE Find Me a Vaccine, GRUPO SLACK, O CUALQUIER VOLUNTARIO INDIVIDUAL (COLECTIVAMENTE, LOS “RECURSOS”) NO CONSTITUYEN CONSEJO MÉDICO PROFESIONAL, DIAGNÓSTICO, O TRATAMIENTO Y NUNCA DEBE SER TRATADO COMO TAL. LOS RECURSOS NO DEBEN SER UTILIZADOS COMO REEMPLAZO O SUSTITUTO DE CONSEJO MÉDICO DE UN DOCTOR O PROFESIONAL DE SALUD CAPACITADO. LOS RECURSOS SE LE PROPORCIONAN “TAL COMO ESTÁN”. Find Me a Vaccine NO OFRECE REPRESENTACIONES NI GARANTÍAS DE NINGÚN TIPO, YA SEAN EXPRESAS O IMPLÍCITAS. Find Me a Vaccine NO OFRECE GARANTÍA CON RESPECTO A LOS RESULTADOS QUE SE PUEDAN OBTENER DEL USO A LOS RECURSOS. Find Me a Vaccine RENUNCIA A CUALQUIER Y TODA RESPONSABILIDAD CON RESPECTO A CUALQUIER ACCION U OMISION POR SU PARTE, INCLUYENDO PERO NO LIMITADO A FALTA DE PROPORCIONARLE A Find Me a Vaccine INFORMACIÓN COMPLETA Y EXACTA O CONFIANZA EN LOS RECURSOS COMO CONSEJO MÉDICO, DIAGNÓSTICO, TRATAMIENTO, O CUALQUIER CONSECUENCIA RESULTANTE DE DICHA CONFIANZA. Find Me a Vaccine, SUS VOLUNTARIOS Y PROVEEDORES DE SERVICIOS EXTERNOS, no serán responsables ante usted ya sea por agravio (incluyendo por negligencia), contrato, tergiversación, restitución o de otro modo, por cualquier pérdida o daño (ya sea directo, indirecto, consecuente, etc.) derivado de su uso de los RECURSOS.'
    },
    {
      title: 'Contáctenos',
      copy: <p><a href="mailto:hello@findmeavaccine.com">hello@findmeavaccine.com</a></p>
    }
  ]
}


const PrivacyPolicySpanish = () => GridPage(content)

export default PrivacyPolicySpanish
