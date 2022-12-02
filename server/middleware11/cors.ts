export default defineEventHandler((event) => {
  const { req, res, context } = event;

  res.setHeader('Access-Control-Allow-Origin', '*');
  // another common pattern
  // res.setHeader('Access-Control-Allow-Origin', req.headers.origin);
  res.setHeader(
    'Access-Control-Allow-Methods',
    'GET,HEAD,PUT,PATCH,POST,DELETE'
  );
  res.setHeader('Access-Control-Allow-Headers', '*');
  res.setHeader('Access-Control-Allow-Credentials', 'true');
  res.setHeader('Access-Control-Expose-Headers', '*');

  console.log('cors', req.method);
  if (req.method === 'OPTIONS') {
    console.log('cors', 'options');
    res.statusCode = 204;
    res.statusMessage = 'No Content.';
    return 'OK';
  }

  // Middleware handlers should not return anything
});
