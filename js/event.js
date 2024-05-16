document.addEventListener("DOMContentLoaded", function() {
    fetch('./js/event-data.json')
    .then(response => response.json())
    .then(data => {
        const carousel = document.querySelector('.carousel');
        data.forEach(item => {
            const li = document.createElement('li');
            li.className = 'card';
            li.innerHTML = `
                <div class="img"><img src="${item.image}" alt="${item.title}" draggable="false"></div>
                <div class="event-container">
                    <div class="event-date">
                        <span class="event-month">${item.month}</span>
                        <span class="event-day">${item.day}</span>
                    </div>
                    <div class="event-info">
                        <span class="event-title">${item.title}</span>
                        <span class="event-time">
                            <i class="far fa-clock"></i>
                            ${item.time}
                        </span>
                        <p class="event-description">${item.description}</p>
                    </div>
                </div>
            `;
            carousel.appendChild(li);
        });
    })
    .catch(error => console.error('Error fetching data:', error));
});