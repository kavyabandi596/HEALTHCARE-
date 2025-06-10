document.addEventListener('DOMContentLoaded', function() {
    
    const selectedSymptom = getSelectedSymptom();
    
    
    if (!selectedSymptom || !recommendations[selectedSymptom]) {
        alert('Please select a symptom on the home page first');
        window.location.href = 'index.html';
        return;
    }
    
   
    document.getElementById('symptomName').textContent = selectedSymptom;
    

    const recommendation = recommendations[selectedSymptom];
    
    if (recommendation && recommendation.yoga) {
       
        document.getElementById('asanaName').textContent = recommendation.yoga.asana;
        
      
        document.getElementById('videoLink').href = recommendation.yoga.video;
        
       
        const videoId = extractYoutubeId(recommendation.yoga.video);
        if (videoId) {
            document.getElementById('videoEmbed').innerHTML = `
                <iframe width="100%" height="315" src="https://www.youtube.com/embed/${videoId}" 
                title="YouTube video player" frameborder="0" 
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" 
                allowfullscreen></iframe>
            `;
        }
        
        
        const yogaPoses = [
            'https://images.unsplash.com/photo-1599447292325-2cffaa79bcbb',
            'https://images.unsplash.com/photo-1603988363607-e1e4a66962c6',
            'https://images.unsplash.com/photo-1599447332412-6bc6830c815a',
            'https://images.unsplash.com/photo-1599447332376-31836ce2aaaa',
            'https://images.unsplash.com/photo-1579566538101-636bbaed1b05',
            'https://images.unsplash.com/photo-1531714680149-1bde6d4d4c5c'
        ];
        
    
        const randomIndex = Math.floor(Math.random() * yogaPoses.length);
        document.getElementById('yogaImage').src = yogaPoses[randomIndex];
    }
    
  
    document.querySelector('.yoga-card').classList.add('fadeIn');
    document.querySelector('.caution-box').classList.add('slideInUp');
});