exports.handler = async function(event) {
  const { phone, text, apikey } = JSON.parse(event.body);
  const encoded = encodeURIComponent(text);
  const url = `https://api.callmebot.com/whatsapp.php?phone=${phone}&text=${encoded}&apikey=${apikey}`;
  try {
    const r = await fetch(url);
    const body = await r.text();
    return { statusCode: 200, body };
  } catch(e) {
    return { statusCode: 500, body: e.message };
  }
};
