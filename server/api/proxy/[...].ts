export default defineEventHandler(async (event) => {
  const { req, res, context } = event;

  // request params
  const url = context.params._;

  // validate url
  if (!url || !url.startsWith('http')) {
    res.statusCode = 400;
    res.end('url is required');
  }

  // proxy route
  const proxyRes = await fetch(url, {
  });
  const body = await proxyRes.text();
  res.end(body);

  // res.writeHead(302, { Location: url });
  // res.end();
});
