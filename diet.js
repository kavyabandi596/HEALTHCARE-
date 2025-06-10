document.addEventListener('DOMContentLoaded', function() {
    const selectedSymptom = getSelectedSymptom();
    
    if (!selectedSymptom || !recommendations[selectedSymptom]) {
        alert('Please select a symptom on the home page first');
        window.location.href = 'index.html';
        return;
    }
    
    document.getElementById('symptomName').textContent = selectedSymptom;
    

    const recommendation = recommendations[selectedSymptom];
    
    document.getElementById('generalDietText').textContent = recommendation.diet;
    
 
    const dietItems = recommendation.diet.split(';');
    const dietFoods = recommendation.diet.split(',');
    
    const morningList = document.getElementById('morningMeals');
    morningList.innerHTML = '';
    
    const afternoonList = document.getElementById('afternoonMeals');
    afternoonList.innerHTML = '';
  
    const eveningList = document.getElementById('eveningMeals');
    eveningList.innerHTML = '';
    
    
    if (dietFoods.length >= 3) {
       
        const third = Math.ceil(dietFoods.length / 3);
        
        for (let i = 0; i < third && i < dietFoods.length; i++) {
            const li = document.createElement('li');
            li.textContent = dietFoods[i].trim();
            morningList.appendChild(li);
        }
        
        for (let i = third; i < 2*third && i < dietFoods.length; i++) {
            const li = document.createElement('li');
            li.textContent = dietFoods[i].trim();
            afternoonList.appendChild(li);
        }
        
        for (let i = 2*third; i < dietFoods.length; i++) {
            const li = document.createElement('li');
            li.textContent = dietFoods[i].trim();
            eveningList.appendChild(li);
        }
    } else {
        
        morningList.innerHTML = '<li>Fruit-based breakfast with whole grains</li>';
        afternoonList.innerHTML = '<li>' + recommendation.diet + '</li>';
        eveningList.innerHTML = '<li>Light dinner with vegetables and lean protein</li>';
    }
    
   
    document.querySelector('.diet-plan-card').classList.add('fadeIn');
    document.querySelector('.tips-box').classList.add('slideInUp');
});