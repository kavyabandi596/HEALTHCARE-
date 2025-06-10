const recommendations = {
    "Fever": {
        medicine: "Paracetamol 650mg, take 1 tablet every 6 hours as needed.",
        diet: "Plenty of fluids, light and easy-to-digest foods like soup, fruits, and toast.",
        yoga: {
            asana: "Balasana (Child's Pose)",
            image: "",
            video: "https://youtu.be/2MJGg-dUKh0?si=IZiotXIuEofpHRDV"
        }
    },
    "Leg Pain": {
        medicine: "Ibuprofen 400mg, take 1 tablet every 8 hours with food.",
        diet: "Foods rich in omega-3 fatty acids like salmon, chia seeds; magnesium-rich foods like spinach and almonds.",
        yoga: {
            asana: "Viparita Karani (Legs-Up-The-Wall Pose)",
            image: "images/viparita_karani.jpg",
            video: "https://www.youtube.com/watch?v=FwvQraHSyE4"
        }
    },
    "Diabetes": {
        medicine: "Metformin 500mg, take 1 tablet twice daily with meals.",
        diet: "Low-carb diet, whole grains, green leafy vegetables, and lean proteins.",
        yoga: {
            asana: "Dhanurasana (Bow Pose)",
            image: "images/dhanurasana.jpg",
            video: "https://www.youtube.com/watch?v=c6CgFt4onGk"
        }
    },
    "Obesity": {
        medicine: "Orlistat 120mg, take 1 capsule with each main meal containing fat.",
        diet: "High-protein, low-carb diet; avoid fried and sugary foods.",
        yoga: {
            asana: "Surya Namaskar (Sun Salutation)",
            image: "images/surya_namaskar.jpg",
            video: "https://www.youtube.com/watch?v=6IUyY9Dyr5w"
        }
    },
    "Back Pain": {
        medicine: "Diclofenac 50mg, take 1 tablet twice a day after meals.",
        diet: "Calcium and vitamin D-rich foods like dairy, leafy greens, and fish.",
        yoga: {
            asana: "Bhujangasana (Cobra Pose)",
            image: "images/bhujangasana.jpg",
            video: "https://www.youtube.com/watch?v=UYDTHxVh2EE"
        }
    },
    "Cold": {
        medicine: "Cetirizine 10mg, take 1 tablet at night.",
        diet: "Warm fluids, honey, ginger tea, vitamin C-rich foods.",
        yoga: {
            asana: "Anulom Vilom (Alternate Nostril Breathing)",
            image: "images/anulom_vilom.jpg",
            video: "https://www.youtube.com/watch?v=8VwufJrUhic"
        }
    },
    "Cough": {
        medicine: "Dextromethorphan syrup, 2 teaspoons every 6 hours.",
        diet: "Warm soups, turmeric milk, avoid cold drinks.",
        yoga: {
            asana: "Setu Bandhasana (Bridge Pose)",
            image: "images/setu_bandhasana.jpg",
            video: "https://www.youtube.com/watch?v=hgtfNp8KywM"
        }
    },
    "Migraine": {
        medicine: "Sumatriptan 50mg, take 1 tablet at the onset of migraine.",
        diet: "Magnesium-rich foods, avoid caffeine and processed foods.",
        yoga: {
            asana: "Shashankasana (Hare Pose)",
            image: "images/shashankasana.jpg",
            video: "https://www.youtube.com/shorts/cKieyZ4Bfwk"
        }
    },
    "Acidity": {
        medicine: "Pantoprazole 40mg, take 1 tablet before breakfast.",
        diet: "Avoid spicy and fried food, include bananas and oatmeal.",
        yoga: {
            asana: "Vajrasana (Thunderbolt Pose)",
            image: "images/vajrasana.jpg",
            video: "https://www.youtube.com/watch?v=qLsZLHCWPlE"
        }
    },
    "Constipation": {
        medicine: "Lactulose syrup, 15 ml at bedtime.",
        diet: "High-fiber foods, plenty of water, prunes and apples.",
        yoga: {
            asana: "Pawanmuktasana (Wind-Relieving Pose)",
            image: "images/pawanmuktasana.jpg",
            video: "https://www.youtube.com/watch?v=MxT0esXh3Eo"
        }
    },
    "Depression": {
        medicine: "Sertraline 50mg, take 1 tablet in the morning.",
        diet: "Omega-3 rich foods, whole grains, berries, and leafy greens.",
        yoga: {
            asana: "Sukhasana (Easy Pose with deep breathing)",
            image: "images/sukhasana.jpg",
            video: "https://www.youtube.com/watch?v=ri9B8IzLXIY"
        }
    },
    "Anxiety": {
        medicine: "Clonazepam 0.5mg, take 1 tablet at bedtime.",
        diet: "Avoid caffeine, include chamomile tea, almonds, and yogurt.",
        yoga: {
            asana: "Bhramari Pranayama (Bee Breathing)",
            image: "images/bhramari.jpg",
            video: "https://www.youtube.com/watch?v=hR2ewXJIZSo"
        }
    },
    "PCOS": {
        medicine: "Metformin 500mg, take 1 tablet twice daily.",
        diet: "Low-glycemic foods, lean proteins, and high-fiber vegetables.",
        yoga: {
            asana: "Supta Baddha Konasana (Reclining Butterfly Pose)",
            image: "images/supta_baddha_konasana.jpg",
            video: "https://www.youtube.com/watch?v=RB-9HJNj0eE"
        }
    },
    "Asthma": {
        medicine: "Salbutamol inhaler, 2 puffs during wheezing.",
        diet: "Avoid cold foods; include garlic, ginger, and vitamin C-rich fruits.",
        yoga: {
            asana: "Ardha Matsyendrasana (Half Lord of the Fishes Pose)",
            image: "images/ardha_matsyendrasana.jpg",
            video: "https://www.youtube.com/watch?v=kxgKSFI5cvg"
        }
    },
    "Insomnia": {
        medicine: "Melatonin 3mg, take 1 tablet 30 minutes before bed.",
        diet: "Warm milk, nuts, chamomile tea, avoid caffeine and alcohol.",
        yoga: {
            asana: "Yoga Nidra",
            image: "images/yoga_nidra.jpg",
            video: "https://www.youtube.com/watch?v=M0u9GST_j3s"
        }
    },
    "tmj": {
        medicine: "naproxen 500",
        diet: "a liquid diet of smoothies, purees, and juices",
        yoga: {
            asana: "strech your neck",
            image: "",
            video: "https://www.youtube.com/watch?v=EM18snVgV_c"
        }
    },
    "Wrist Pain": {
        medicine: "acetaminophen",
        diet: "Deeply colored vegetables and fruit, like strawberries, blackberries, broccoli, and Brussels sprouts",
        yoga: {
            asana: "cat-cow pose",
            image: "",
            video: "https://www.youtube.com/watch?v=tSD35Q15rm8"
        }
    },
    "HairFall": {
        medicine: "minoxidil 5ml every day twice",
        diet: "eggs, spinach, sweet potatoes, avocado, nuts, seeds, and fish ",
        yoga: {
            asana: "downward dog pose",
            image: "",
            video: "https://www.youtube.com/watch?v=ayQoxw8sRTk"
        }
    }
};

function saveSelectedSymptom(symptom) {
    localStorage.setItem('selectedSymptom', symptom);
}

function getSelectedSymptom() {
    return localStorage.getItem('selectedSymptom');
}

function extractYoutubeId(url) {
    if (!url) return null;
    
    const regExp = /^.*(youtu.be\/|v\/|e\/|u\/\w+\/|embed\/|watch\?v=|&v=)([^#&?]*).*/;
    const match = url.match(regExp);
    
    return (match && match[2].length === 11) ? match[2] : null;
}