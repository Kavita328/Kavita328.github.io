const apiKey = 'AIzaSyAoL7CMZUjEmK1v9-ektp858y_JcUIJxxQ'

const channelId = 'UCSsJYY9pjQgi1rbIlaLcxIg'; 

const apiUrl = `https://www.googleapis.com/youtube/v3/search?key=${apiKey}&channelId=${channelId}&part=snippet&type=video&order=date`;

async function fetchVideos() {
    try {
      const response = await fetch(apiUrl);
      const data = await response.json();
     
      
  
      if (data.items) {
        const videoList = document.getElementById('video-list');
        videoList.innerHTML = '';
  
        data.items.forEach(video => {
          const videoId = video.id.videoId;
          const title = video.snippet.title;
          const thumbnail = video.snippet.thumbnails.high.url;
  
         
          videoList.innerHTML += `
            <div class="video">
              <a href="https://www.youtube.com/watch?v=${videoId}" target="_blank">
                <img src="${thumbnail}" alt="${title}" />
                <h3>${title}</h3>
              </a>
            </div>
          `;

    

        });
      } else {
        console.error('Aucune vidéo trouvée');
      }
    } catch (error) {
      console.error('Erreur lors du fetch des vidéos :', error);
    }
  }
  
  fetchVideos();
