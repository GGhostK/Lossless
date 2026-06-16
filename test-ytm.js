const query = "Blinding Lights";
const payload = {
  context: {
    client: {
      clientName: "WEB_REMIX",
      clientVersion: "1.20231214.00.00",
      gl: "US",
      hl: "en"
    }
  },
  query: query
};
fetch('https://music.youtube.com/youtubei/v1/search', {
  method: 'POST',
  headers: { 'Content-Type': 'application/json' },
  body: JSON.stringify(payload)
}).then(r => r.json()).then(data => {
  const fs = require('fs');
  fs.writeFileSync('ytm_resp.json', JSON.stringify(data, null, 2));
  console.log("Done");
});
