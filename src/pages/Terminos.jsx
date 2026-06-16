import LegalLayout from "../components/LegalLayout";

const SECTIONS = [
  {
    paragraphs: [
      `Estos Términos de Servicio ("Términos") regulan el uso de Bones Social ("la app",
       "nosotros"). Al crear una cuenta o usar la app aceptas estos Términos. Si no estás
       de acuerdo, no uses el servicio.`,
    ],
  },
  {
    heading: "1. Tu cuenta",
    paragraphs: [
      `Debes tener al menos 13 años para usar Bones Social. Eres responsable de la actividad
       de tu cuenta y de mantener la seguridad de tus credenciales. Podemos suspender o
       eliminar cuentas que incumplan estos Términos.`,
    ],
  },
  {
    heading: "2. Conducta del usuario",
    paragraphs: [
      `Te comprometes a no publicar contenido ilegal, violento, de odio, acoso, spam,
       contenido sexual de menores ni material que infrinja derechos de terceros. No puedes
       intentar vulnerar la seguridad de la app, automatizar accesos no autorizados ni abusar
       de los sistemas. El incumplimiento puede resultar en la suspensión de tu cuenta.`,
    ],
  },
  {
    heading: "3. Moneda virtual (Coins y Skeletons)",
    paragraphs: [
      `Bones Social ofrece moneda virtual llamada <strong>Coins</strong> y <strong>Skeletons</strong>,
       que puede adquirirse con dinero real y usarse dentro de la app para comprar artículos
       digitales (marcos, auras, letreros, mascotas y otros elementos).`,
      `La moneda virtual <strong>no tiene valor monetario en el mundo real</strong>, no es
       transferible fuera de la app salvo donde la app lo permita expresamente, y no puede
       canjearse por dinero. Te otorgamos una licencia limitada y revocable para usarla
       dentro del servicio; no constituye propiedad.`,
      `Los artículos digitales y la moneda virtual se consideran <strong>entregados de forma
       inmediata</strong> tras la compra. Consulta nuestra <a href="/reembolsos" class="legalLink">Política de Reembolsos</a>.`,
    ],
  },
  {
    heading: "4. Compras y pagos",
    paragraphs: [
      `Los pagos se procesan a través de un proveedor de pagos externo. Los precios se
       muestran en la tienda antes de confirmar la compra. Al completar una compra autorizas
       el cargo correspondiente.`,
    ],
  },
  {
    heading: "5. Contenido del usuario",
    paragraphs: [
      `Conservas la titularidad del contenido que creas. Al publicarlo, nos otorgas una
       licencia para mostrarlo y distribuirlo dentro de la app con el fin de operar el
       servicio. Eres responsable del contenido que compartes.`,
    ],
  },
  {
    heading: "6. Servicio en beta",
    paragraphs: [
      `Bones Social se ofrece actualmente en versión beta y "tal cual", sin garantías de
       disponibilidad ininterrumpida. Podemos modificar, suspender o discontinuar funciones
       en cualquier momento.`,
    ],
  },
  {
    heading: "7. Limitación de responsabilidad",
    paragraphs: [
      `En la medida permitida por la ley, Bones Social no será responsable de daños indirectos
       o incidentales derivados del uso o la imposibilidad de uso del servicio.`,
    ],
  },
  {
    heading: "8. Cambios a estos Términos",
    paragraphs: [
      `Podemos actualizar estos Términos ocasionalmente. La versión vigente se publicará en
       esta página con su fecha de actualización.`,
    ],
  },
];

export default function Terminos() {
  return <LegalLayout title="Términos de Servicio" updated="16 de junio de 2026" sections={SECTIONS} />;
}
