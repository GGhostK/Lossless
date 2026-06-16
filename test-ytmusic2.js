const query = "Blinding Lights";
const payload = {
  context: {
    client: {
      clientName: "WEB_REMIX",
      clientVersion: "1.20231214.00.00"
    }
  },
  query: query
};

fetch('https://thingproxy.freeboard.io/fetch/https://music.youtube.com/youtubei/v1/search', {
  method: 'POST',
  headers: {
    'Content-Type': 'application/json'
  },
  body: JSON.stringify(payload)
}).then(res => res.json())
  .then(data => {
    console.log(Object.keys(data));
    console.log(data.contents ? 'Success' : 'Fail');
  })
  .catch(err => console.error(err));
