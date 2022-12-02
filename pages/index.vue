<template>
  <h1>Proxy server</h1>
  <button @click="fetchData">Fetch data</button>
</template>

<script setup>
const fetchData = async () => {
  // https://www.city.shinjuku.lg.jp/top_rss.rdf
  const baseUrl = 'https://www.city.shinjuku.lg.jp/top_rss.rdf?xx==11'
  const response = await fetch('http://localhost:3000/api/proxy/' + encodeURIComponent(baseUrl));
  const data = await response.text();
  console.log(data);
};
</script>
