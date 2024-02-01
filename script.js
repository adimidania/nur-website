const testimonials = [
    {
        "id": 1,
        "name": "Amir",
        "text": "Allahumma barik so first of all the concept is amazing and I personally think It will be successful in sha Allah. I think it could also help people who have like adhd and cant focus properly so the individual design and the motivation through score and points/rewards will help them stay more consistent."
    },
    {
        "id": 2,
        "name": "Rania",
        "text": "I am a big fan of this application and in my opinion, kids really needs such an app in this day and age where TikTok, Snapchat and Instagram are fighting for his attention."
    },
    {
        "id": 3,
        "name": "Daisy",
        "text": "I am just in love with this app! I really can't wait to see it go live."
    }
]

const carousel = document.querySelector('.testimonials-carousel');
const buttons = document.querySelector('.carousel-buttons');
let current = 1;

testimonials.forEach(element => {
    const card = document.createElement('div');
    card.classList.add('testimonial-card');
    card.id = `testimonial-${element.id}`;
    card.innerHTML = `
        <p>${element.text}</p>
        <h6>${element.name}</h6>
    `;
    if (element.id === 1) {
        card.classList.add('active');
    }
    
    carousel.appendChild(card);
    const button = document.createElement('button');
    button.id = `button-${element.id}`;
    if (element.id === 1) {
        button.classList.add('active');
    }
    buttons.appendChild(button);
});

const buttonsCarousel = document.querySelectorAll('.carousel-buttons button');
buttonsCarousel.forEach(button => {
    button.addEventListener('click', () => {
        document.querySelector(`#button-${current}`).classList.remove('active');
        document.querySelector(`#testimonial-${current}`).classList.remove('active');
        current = button.id.split('-')[1];
        button.classList.add('active');
        document.querySelector(`#testimonial-${current}`).classList.add('active');
    });
});