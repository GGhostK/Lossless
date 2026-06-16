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
  headers: {
    'Content-Type': 'application/json',
    'User-Agent': 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) Chrome/120.0.0.0 Safari/537.36'
  },
  body: JSON.stringify(payload)
}).then(res => res.json())
  .then(data => {
    let songs = [];
    const sections = data.contents?.tabbedSearchResultsRenderer?.tabs[0]?.tabRenderer?.content?.sectionListRenderer?.contents || [];
    for (const section of sections) {
        const shelfContents = section.musicShelfRenderer?.contents || [];
        for (const item of shelfContents) {
            const flexColumns = item.musicResponsiveListItemRenderer?.flexColumns;
            if (!flexColumns) continue;
            
            const titleObj = flexColumns[0]?.musicResponsiveListItemFlexColumnRenderer?.text?.runs[0];
            const title = titleObj?.text;
            
            const detailsRuns = flexColumns[1]?.musicResponsiveListItemFlexColumnRenderer?.text?.runs || [];
            let artist = '';
            for(let run of detailsRuns) {
               if(run.text === ' • ') break;
               if(run.text === 'Song') continue;
               artist += run.text;
            }
            
            const thumbnails = item.musicResponsiveListItemRenderer?.thumbnail?.musicThumbnailRenderer?.thumbnail?.thumbnails || [];
            const thumbnail = thumbnails.length > 0 ? thumbnails[thumbnails.length - 1].url : '';

            if (title && artist) {
                songs.push({ title, artist, thumbnail });
            }
        }
    }
    console.log(songs.slice(0, 5));
  })
  .catch(err => console.error(err));
