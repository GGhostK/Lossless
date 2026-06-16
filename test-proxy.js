const payload = {
  context: { client: { clientName: "WEB_REMIX", clientVersion: "1.20231214.00.00" } },
  query: "test"
};
fetch('https://api.codetabs.com/v1/proxy?quest=https://music.youtube.com/youtubei/v1/search', {
  method: 'POST',
  headers: { 'Content-Type': 'application/json' },
  body: JSON.stringify(payload)
}).then(res => res.text()).then(console.log).catch(console.error);
