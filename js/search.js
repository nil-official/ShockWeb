// -----------------------------------------
//              Form Validation
// -----------------------------------------
function validateForm() {
    // Get the value of the search input
    var searchInput1 = document.getElementById("searchInput1").value;
    var searchInput2 = document.getElementById("searchInput2").value;
    
    // Check if the search input is empty
    if (searchInput1.trim() === "" && searchInput2.trim() === "") {
        alert("Please enter keywords to search");
        return false; // Prevent form submission
    } else {
        // Check if the input contains at least one letter or number
        var letterNumber = /^[0-9a-zA-Z]+$/;
        if (!letterNumber.test(searchInput1) && !letterNumber.test(searchInput2)) {
            alert("Keywords can only contain letters and numbers");
            return false; // Prevent form submission
        }
    }
    return true; // Allow form submission
}




const myKV = window.location.search;
const urlParams = new URLSearchParams(myKV);

// ------------------------------------------
//           FETCH AND SEARCH DATA
// ------------------------------------------

// URL or path to json files
const noticeURL = "./resources/data/notices.json";
const eventsURL = "./resources/data/events.json";
const announcementsURL = "./resources/data/announce-data.json";

// Function calls for each json
fetchData(noticeURL, "Notices");
fetchData(eventsURL, "Events");
fetchData(announcementsURL, "Announcements");



// container for all search results
const container = document.getElementById("search-results");

function fetchData(url, type){
    // Fetch the data from JSON
    fetch(url)
    // Check response status
    .then(response => {
        if (!response.ok) {
            throw new Error('Network response was not ok');
        }
        return response.json();
    })
    // Perform search
    .then(data => {
        // console.log(data);
        // Get the value to search from the URL
        const word = urlParams.get('search');
        // Use a regex for searching (case insensitive)
        // const regex = new RegExp(`\\b${word}\\b`, 'i');
        const regex = new RegExp(word, "i");

        // Max length of description visible (number of characters)
        const maxLen = 100;

        // for each record found, check if criteria satisfied
        for (const record of data) {
            // render the record and add it to container
            if (regex.test(record["desc"])) {
                const strip = document.createElement('div');
                strip.classList.add('strip');
                strip.innerHTML = `
                    <a href = ${record.link}>
                        <p>${formatHeading(record.desc.substring(0, maxLen), maxLen)}...</p>
                    </a>
                    <div class="subtext">
                        <span class="date">${formatDate(record.date)}</span>
                        <span class="type ${type}">${type}</span>
                    </div>`;
                container.appendChild(strip);
            }
        }
    })
    .catch(error => {
        console.error('Error:', error);
    });
}



// ------------------------------------------
//           FORMAT DATE
// ------------------------------------------

const formatDate = (date_str) => {

    const months = [
        "January",
        "February",
        "March",
        "April",
        "May",
        "June",
        "July",
        "August",
        "September", 
        "October",
        "November", 
        "December"
    ];
    // DDMMYYYY
    const day = parseInt(date_str.slice(0, 2));
    const month = months[parseInt(date_str.slice(2, 4)) - 1];
    const year = parseInt(date_str.slice(4));

    return `${day} ${month}, ${year}`;
}

// ------------------------------------------
//           FORMAT HEADING
// ------------------------------------------

const formatHeading = (heading, maxLen) => {
    
    // Max number of characters
    // const maxLen = 80;

    // If the number of characters > Max length, trim it to maxlen
    if(heading.length > maxLen){
        heading = heading.slice(0, maxLen);
    }

    // Split the words
    const words = heading.split(" ");
    
    // Omit the last word 
    return words.slice(0, words.length - 1).join(" ");
}


/**
 * TODOS:
 * 1. change the formatting of the date to 'date month-name, year' (DONE)
 * 2. limit the string to number of words than characters (DONE)
 * 3. Modify regex to characters instead of words
 * 4. Add notice/events tag to each notice (add a parameter to fetchData)
 */