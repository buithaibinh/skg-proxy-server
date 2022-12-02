export default defineEventHandler(async (event) => {
  const { req, res, context } = event;

  // request params
  const url = context.params._;

  // validate url
  if (!url || !url.startsWith('http')) {
    res.statusCode = 400;
    res.end('url is required');
  }

  console.log('headers', req.method);

  // proxy route
  const urlSearchParams = new URLSearchParams(req.url?.split('?')[1]);
  const finalUrl = new URL(url);
  urlSearchParams.forEach((value, key) => {
    finalUrl.searchParams.append(key, value);
  });

  const headers: any = { ...req.headers };

  const proxyRes = await fetch(finalUrl, {
    method: req.method,
    // headers
  });
  const body = await proxyRes.text();
  res.end(body);
});
