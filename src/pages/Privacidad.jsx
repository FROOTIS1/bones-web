import LegalLayout from "../components/LegalLayout";

const SECTIONS = [
  {
    paragraphs: [
      `En Bones Social ("la app", "nosotros") respetamos tu privacidad. Esta Política de
       Privacidad explica qué datos recopilamos, cómo los usamos y qué derechos tienes.
       Al crear una cuenta y usar Bones Social aceptas las prácticas descritas aquí.`,
    ],
  },
  {
    heading: "1. Información que recopilamos",
    paragraphs: [
      `<strong>Datos de cuenta:</strong> nombre de usuario, correo electrónico y foto de
       perfil que proporcionas al registrarte (incluido el inicio de sesión con Google).`,
      `<strong>Contenido que creas:</strong> publicaciones, mensajes, comentarios, fotos,
       audios, historias y demás contenido que compartes dentro de la app.`,
      `<strong>Datos de uso y técnicos:</strong> información del dispositivo, identificadores
       y dirección IP, que usamos para el funcionamiento del servicio y para prevenir abusos
       (por ejemplo, el sistema de baneo por IP).`,
      `<strong>Datos de compras:</strong> cuando adquieres Coins o Skeletons, el procesamiento
       del pago lo realiza un proveedor externo. No almacenamos los datos de tu tarjeta.`,
    ],
  },
  {
    heading: "2. Cómo usamos tus datos",
    paragraphs: [
      `Usamos tu información para crear y mantener tu cuenta, mostrar tu perfil y contenido,
       habilitar funciones sociales (chats, comunidades, match, etc.), procesar compras de
       moneda virtual, moderar contenido, prevenir fraudes y abusos, y mejorar la app.`,
    ],
  },
  {
    heading: "3. Proveedores y terceros",
    paragraphs: [
      `Utilizamos <strong>Google Firebase</strong> (autenticación, base de datos y
       almacenamiento) para operar la app, y un <strong>procesador de pagos externo</strong>
       para gestionar las transacciones de Coins y Skeletons. Estos proveedores procesan
       datos en nuestro nombre bajo sus propias políticas de privacidad y seguridad.`,
      `No vendemos tus datos personales a terceros.`,
    ],
  },
  {
    heading: "4. Conservación de datos",
    paragraphs: [
      `Conservamos tu información mientras tu cuenta esté activa. Si solicitas la eliminación
       de tu cuenta, borraremos o anonimizaremos tus datos personales, salvo aquellos que
       debamos conservar por motivos legales o de seguridad.`,
    ],
  },
  {
    heading: "5. Tus derechos",
    paragraphs: [
      `Puedes acceder, corregir o solicitar la eliminación de tus datos personales, así como
       solicitar la eliminación de tu cuenta, escribiéndonos al correo de contacto.`,
    ],
  },
  {
    heading: "6. Menores de edad",
    paragraphs: [
      `Bones Social no está dirigida a menores de 13 años. Si crees que un menor nos ha
       proporcionado datos personales, contáctanos para eliminarlos.`,
    ],
  },
  {
    heading: "7. Cambios a esta política",
    paragraphs: [
      `Podemos actualizar esta Política de Privacidad ocasionalmente. Publicaremos la versión
       vigente en esta página con su fecha de actualización.`,
    ],
  },
];

export default function Privacidad() {
  return <LegalLayout title="Política de Privacidad" updated="16 de junio de 2026" sections={SECTIONS} />;
}
