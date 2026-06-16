import LegalLayout from "../components/LegalLayout";

const SECTIONS = [
  {
    paragraphs: [
      `Esta Política de Reembolsos describe las condiciones aplicables a las compras de moneda
       virtual (Coins y Skeletons) y artículos digitales en Bones Social.`,
    ],
  },
  {
    heading: "1. Productos digitales no reembolsables",
    paragraphs: [
      `Los Coins, Skeletons y artículos digitales se entregan de forma inmediata tras la
       compra y se acreditan a tu cuenta. Por su naturaleza digital y de entrega instantánea,
       <strong>todas las ventas son finales y no reembolsables</strong> una vez acreditados.`,
    ],
  },
  {
    heading: "2. Excepciones",
    paragraphs: [
      `Consideraremos un reembolso en los siguientes casos:`,
      `• <strong>Cobro duplicado o erróneo:</strong> si se te cobró más de una vez o por un
        importe incorrecto.`,
      `• <strong>No entrega:</strong> si pagaste y los Coins o Skeletons no se acreditaron en
        tu cuenta y no podemos resolverlo.`,
      `• <strong>Cargo no autorizado:</strong> si detectas una compra que no realizaste.`,
    ],
  },
  {
    heading: "3. Cómo solicitar un reembolso",
    paragraphs: [
      `Escríbenos al correo de contacto dentro de los <strong>14 días</strong> posteriores a
       la compra, indicando tu nombre de usuario, la fecha de la compra y el comprobante o
       referencia de pago. Revisaremos cada caso y responderemos lo antes posible.`,
    ],
  },
  {
    heading: "4. Saldo ya utilizado",
    paragraphs: [
      `No se reembolsa la moneda virtual que ya haya sido gastada en artículos dentro de la
       app.`,
    ],
  },
  {
    heading: "5. Fraude y abuso",
    paragraphs: [
      `Nos reservamos el derecho de rechazar reembolsos en casos de fraude, abuso del sistema
       o incumplimiento de nuestros Términos de Servicio.`,
    ],
  },
];

export default function Reembolsos() {
  return <LegalLayout title="Política de Reembolsos" updated="16 de junio de 2026" sections={SECTIONS} />;
}
