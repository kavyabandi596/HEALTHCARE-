document.addEventListener('DOMContentLoaded', function() {
   
    const selectedSymptom = getSelectedSymptom();
    
    
    if (!selectedSymptom || !recommendations[selectedSymptom]) {
        alert('Please select a symptom on the home page first');
        window.location.href = 'index.html';
        return;
    }
    

    document.getElementById('symptomName').textContent = selectedSymptom;
    
    
    const recommendation = recommendations[selectedSymptom];
    
  
    document.getElementById('medicineText').textContent = recommendation.medicine;
    
   
    let medicineName = recommendation.medicine.split(',')[0];
    medicineName = medicineName.split(' ').slice(0, 2).join(' '); 
    

    document.getElementById('pharmacy1').href = `https://www.1mg.com/search/all?name=${encodeURIComponent(medicineName)}`;
    document.getElementById('pharmacy2').href = `https://www.apollopharmacy.in/search-medicines/${encodeURIComponent(medicineName)}`;
    document.getElementById('pharmacy3').href = `https://pharmeasy.in/search/all?name=${encodeURIComponent(medicineName)}`;
    
    
    const dosageInfo = recommendation.medicine.split(',').slice(1).join(',').trim();
    if (dosageInfo) {
        document.getElementById('dosageInfo').textContent = dosageInfo;
    }
    
    
    document.querySelector('.medicine-card').classList.add('fadeIn');
    document.querySelector('.warning-box').classList.add('slideInUp');
});