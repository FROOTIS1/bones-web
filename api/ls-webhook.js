const DISCORD_WEBHOOK = 'https://discord.com/api/webhooks/1514672901331091667/NCesCJS48sKP7s8X1Z5p8qw2RlTL8JpS8nFr_FvTzTatZTFLQXzRO8ieE73zZs_CLaZx';

const PRODUCT_NAMES = {
  'coins_300':  '300 Coins — Starter',
  'coins_500':  '500 Coins — Popular',
  'coins_1000': '1000 Coins — Pro',
  'coins_2500': '2500 Coins — Elite',
  'skl_150':    '150 Skeletons — Puñado',
  'skl_500':    '500 Skeletons — Bolsa',
  'skl_1200':   '1200 Skeletons — Cofre',
  'skl_2500':   '2500 Skeletons — Tesoro',
};

export default async function handler(req, res) {
  if (req.method !== 'POST') return res.status(405).end();

  try {
    const body = req.body;
    const event = body?.meta?.event_name;

    if (event !== 'order_created') return res.status(200).json({ ok: true });

    const order = body?.data?.attributes;
    const meta  = body?.meta?.custom_data || {};

    const customerName  = order?.user_name  || 'Desconocido';
    const customerEmail = order?.user_email || 'N/A';
    const productName   = order?.first_order_item?.product_name || 'Producto';
    const total         = order?.total_formatted || '—';
    const orderId       = body?.data?.id || '—';
    const uid           = meta?.uid || 'No proporcionado';

    const isCoins     = productName.toLowerCase().includes('coin');
    const color       = isCoins ? 0x4F8EF7 : 0xA78BFA;
    const emoji       = isCoins ? '🪙' : '💀';

    await fetch(DISCORD_WEBHOOK, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({
        embeds: [{
          title: `${emoji} Nueva compra — ${productName}`,
          color,
          fields: [
            { name: 'Cliente',   value: customerName,  inline: true },
            { name: 'Email',     value: customerEmail, inline: true },
            { name: 'UID App',   value: uid,           inline: false },
            { name: 'Producto',  value: productName,   inline: true },
            { name: 'Total',     value: total,         inline: true },
            { name: 'Order ID',  value: orderId,       inline: false },
          ],
          timestamp: new Date().toISOString(),
          footer: { text: 'Bones Social — Lemon Squeezy' },
        }],
      }),
    });

    res.status(200).json({ ok: true });
  } catch (err) {
    console.error('Webhook error:', err);
    res.status(500).json({ error: 'Internal error' });
  }
}
