document.addEventListener("DOMContentLoaded", function() {
    fetch('./js/announce-data.json')
    .then(response => response.json())
    .then(data => {
        const stripeContainer = document.querySelector('.stripe-container');
        data.forEach(item => {
            const div = document.createElement('div');
            div.className = 'stripe';
            div.innerHTML = `
                <div class="left">
                    <div class="date">
                        <p>${item.date}</p>
                    </div>
                    <div class="bar">.</div>
                    <div class="text">
                        <p>${item.text}</p>
                    </div>
                </div>
                <div class="download">
                    <a href="${item.link}">Download</a>
                </div>
            `;
            stripeContainer.appendChild(div);
        });
    })
    .catch(error => console.error('Error fetching data:', error));
});