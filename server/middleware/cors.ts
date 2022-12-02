export default defineEventHandler((event) => {
  const { req, res, context } = event;

  res.setHeader('Access-Control-Allow-Credentials', 'true');
  res.setHeader('Access-Control-Allow-Origin', '*');
  // another common pattern
  // res.setHeader('Access-Control-Allow-Origin', req.headers.origin);
  res.setHeader(
    'Access-Control-Allow-Methods',
    'GET,OPTIONS,PATCH,DELETE,POST,PUT'
  );
  res.setHeader(
    'Access-Control-Allow-Headers',
    'X-CSRF-Token, X-Requested-With, Accept, Accept-Version, Content-Length, Content-MD5, Content-Type, Date, X-Api-Version'
  );
  console.log('cors', req.method);
  if (req.method === 'OPTIONS') {
    res.statusCode = 204;
    res.statusMessage = 'No Content.';
    return 'OK';
  }

  // Middleware handlers should not return anything
});
