export default defineEventHandler(async (event) => {
  const { req, res, context } = event;

  // request params
  let url = context.params._ || '';

  url = decodeURIComponent(url);
  console.log('url', url);

  // validate url
  if (!url || !url.startsWith('http')) {
    res.statusCode = 400;
    res.end('url is required');
  }

  // proxy route
  const urlSearchParams = new URLSearchParams(url?.split('?')[1]);
  const finalUrl = new URL(url);
  urlSearchParams.forEach((value, key) => {
    finalUrl.searchParams.append(key, value);
  });

  const proxyRes = await fetch(finalUrl, {
    method: req.method
    // headers
  });

  // set cors policy
  // setCORSPolicy(res);

  const body = await proxyRes.text();
  res.end(body);
});
