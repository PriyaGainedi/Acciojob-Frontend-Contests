// 1. Get all the input fields to script.js
var body = document.getElementsByTagName('body')[0];
var section = document.getElementById('current-image-container')[0];
var h1 = document.getElementById('heading');
var img = document.getElementById('img');
var title = document.getElementById('title');
var desc = document.getElementById('description');
var searchDate = document.getElementById('search-input');
var submit = document.getElementById('submit');
var ul = document.getElementById('search-history');


// 2. Initialize an empty array to store the dates that are searched
var searches = [];


// Function1 - It will fetch the image of current date
function getCurrentImageOfTheDay(){
    const date = new Date().toISOString().split("T")[0];
    var url = `https://api.nasa.gov/planetary/apod?api_key=ZfrCC7mAlz5NTi4A1fjxXcYRgmZaPb5QPjRjP7XJ&date=${date}`;
    h1.textContent = 'NASA Picture of the Day';
    //passing url and date to another method and that method displays it on screen.
    displayData(url,date);
}


// Function2 - It will fetch the image of particular date after clicking submit button
function getImageOfTheDay(e){
    e.preventDefault();
    const date = searchDate.value;
    //To check the date is valid date or not i'm using a method and returns true if it is a valid date or else it will return false. 
    var validdate = validateDate(date);
    if(validdate){
        //If the date is valid then only the below lines will execute and saves the history in local storage
        var url = `https://api.nasa.gov/planetary/apod?api_key=ZfrCC7mAlz5NTi4A1fjxXcYRgmZaPb5QPjRjP7XJ&date=${date}`;
        h1.textContent = `NASA Picture on ${date}`;
        //passing url of the particular date to display 
        displayData(url,date);  
        //save the date in local storage 
        saveSearch(date);    
    }
    //If the date is invalid it gives an alert message to user to enter valid date.
    else alert(`Please Enter a Valid Date.\n NOTE: The date should be below of ${date}`);
}


//Function3 - It checks the date is valid or not. If the date is valid then it returns true or else it will return false.
function validateDate(date){
    var UserDate = date;
    var ToDate = new Date();

    if (new Date(UserDate).getTime() >= ToDate.getTime()) {
          return false;
     }
    return true;
}


//Function4 - It saves the searched dates on local storage
function saveSearch(date){
    var dateobj = {date:`${date}`};
    searches.push(dateobj);
    localStorage.setItem('Searches',JSON.stringify(searches));
    //After adding in local storage we need to display the history on screen. This method will display the search history in UI.
    addSearchToHistory();
}


//Function5 - It displays the image of dates on the screen
function displayData(url,date){
    fetch(url)
        .then(response => {
            if(!response.ok){
                throw new Error('Request failed with status code '+ response.status);
            }
            return response.json();
        })
        .then(res => {
            img.src = `${res.url}`;
            img.alt = `picture of ${date}`;
            img.classList.add('image');
            title.textContent = `${res.title}`;
            desc.textContent = `${res.explanation}`;
        })
        .catch(error =>{
            alert('Error: Cannot Fetch Image because of some error');
        });
}


//Function6 - It updates the search history in UI
function addSearchToHistory(){
    var getsearches = JSON.parse(localStorage.getItem('Searches'));
    ul.innerHTML = '';
    for(var i=0;i<getsearches.length;i++){
        var date = getsearches[i].date;
        var li = document.createElement('li');
        li.textContent = date;
        li.classList.add('list');
        li.addEventListener('click',function(e){
            fetchData(e.target.textContent);
        })
        ul.appendChild(li);
    }
}


//Function7 - It is used to fetch the date of the particular link clicked.
function fetchData(date){
    var url = `https://api.nasa.gov/planetary/apod?api_key=ZfrCC7mAlz5NTi4A1fjxXcYRgmZaPb5QPjRjP7XJ&date=${date}`;
    h1.textContent = `NASA Picture on ${date}`;
    displayData(url,date);
}


//Event Listeners for loading the document and clicking submit button
body.addEventListener('load',getCurrentImageOfTheDay());
submit.addEventListener('click',getImageOfTheDay);