// const marquee = document.getElementById("marquee").firstElementChild;
// window.addEventListener('load', ()=>{
//     marquee.style.setProperty('--s', 0.5);
// })

// marquee.addEventListener('mouseenter', function() {
//     let x = 0.5
//     setInterval(() => {
//         x += 0.1;
//         if(x > 1) return;
//         console.log(x)
//         marquee.style.setProperty('--s', x);
//     }, 1);
// })
// console.log(marquee.style.getPropertyValue('--s'));

const list = document.getElementById("list");
fetch('./js/news.json')  // USE THE API URL HERE TO GET THE JSON
    .then((res)=>{
        return res.json();
    })
    .then((data) =>{
        // console.log(data);
        // Creating <li> for each entry of JSON
        data.forEach(element => {       
            const link = document.createElement('li');
            link.classList.add("list");
            link.innerHTML = `
                <a href="${element.link}">
                    <h4>${element.text}</h4>
                </a>
            `
            list.appendChild(link);
        });
    })