
//changes colour of the buttons with class "btn1" to pink
const listbtn1 = document.getElementsByClassName("btn1");

function modifyColour(){
	for (let i =0; i<listbtn1.length; i++){
  listbtn1[i].style.backgroundColor="#C33C54";
  }

}


        //changes between lightmode and dark mode
        function darkMode() {
        var element = document.body;
        element.className = "darkmode";
        }

        function lightMode() {
        var element = document.body;
        element.className = "lightmode";
        }

        //changes background to red, also changes text colour 
        function redMode() {
                var element = document.body;
                element.className = "redmode";
        }

// creates array called "items"
const items  = ["popular", "history", "animal"];

// Function to display items in array "items" on the webpage
function displayItems() {
        const ItemList = document.getElementById('items-list');
      
        items.forEach(quizitem => {
          // Create a new list item element
          const listItem = document.createElement('li');
          
          // Set the text content of the list item
          listItem.textContent = quizitem;
      
          // Append the list item to the unordered list
          ItemList.appendChild(listItem);
        });
      }

//calls function to display items
displayItems()


// Example object representing the spirit animal personality quiz
const spiritaniquiz = {
        type: 'personality',
        date: '30/11/23',
      };
      
      // Function to display information on the webpage
      function displayspiritaniquiz() {
      //Select the div with id spirit animal quiz info
        const quizInfoContainer = document.getElementById('spirit animal quiz info');
        // Display the object properties on the webpage
        quizInfoContainer.innerHTML = `
          <p>type: ${spiritaniquiz.type}</p>
          <p>date: ${spiritaniquiz.date}</p>
        `;
      }
      //calls function to display spirit animal information
      displayspiritaniquiz();

      
// Example object representing the zoology quiz
const zooquiz = {
        type: 'educational',
        date: '30/11/23',
      };
      
      // Function to display information on the webpage
      function displayzooquiz() {
      //Select the div with id zoology quiz info
        const quizInfoContainer = document.getElementById('zoology quiz info');
        // Display the object properties on the webpage
        quizInfoContainer.innerHTML = `
          <p>type: ${zooquiz.type}</p>
          <p>date: ${zooquiz.date}</p>
        `;
      }
      //calls function to display zoo quiz information
      displayzooquiz();

// Example object representing the mythological creature quiz
const mythcreaturequiz = {
        type: 'educational and mythological',
        date: '30/11/23',
      };
      
     // Function to display information on the webpage
      function displaymythcreaturequiz() {
      //Select the div with id myth creature quiz info
        const quizInfoContainer = document.getElementById('myth creature quiz info');
        // Display the object properties on the webpage
        quizInfoContainer.innerHTML = `
          <p>type: ${mythcreaturequiz.type}</p>
          <p>date: ${mythcreaturequiz.date}</p>
        `;
      }
      //calls function to display quiz information
      displaymythcreaturequiz();




// Define the ww2datequiz object with sample data
const ww2datequiz = {
  type: 'Historical Event',
  date: 'September 1, 1939',
};


// Function to display WW2 date quiz information
function displayww2datequiz() {
  // Select the div with id 'wwquiz'
  const quizInfoContainer = document.getElementById('wwquiz');
  
  // Display the object properties on the webpage
  quizInfoContainer.innerHTML = `
    <p>Type: ${ww2datequiz.type}</p>
    <p>Date: ${ww2datequiz.date}</p>
  `;
}

displayww2datequiz();



//contactus.html form function that corrects user if form filled in incorrectly
function validateForm() {
  // retrieving form values
  let name = document.getElementById('fname').value;
  let email = document.getElementById('email').value;
  let message = document.getElementById('message').value;

  // avoiding blank input
  if (name === '' || email === '' || message === '') {
    alert('Name, email, and message are required');
    return false;
        
  }
  
  // validating email format using a simple regular expression
  let emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  if (!emailRegex.test(email)) {
    alert('Please enter a valid email address');
    return false;
  }
  // if all validations pass
        return true;
    }


function MythCreaSub() {
  alert('answers:\nQ1: dragon\nQ2: griffin\nQ3: manticore');
}


function modifyColourAndOpenPage() {
  // Your existing code to modify color goes here
  modifyColour();

  // Open the HTML page in a new tab/window
  window.open('MythCreatureQuiz.html',);
}











                
        
              

        