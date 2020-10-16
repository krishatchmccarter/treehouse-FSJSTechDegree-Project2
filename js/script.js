/******************************************
Treehouse Techdegree:
FSJS project 2 - List Filter and Pagination
******************************************/
   
/*Global variable to store the student list item elements in the student list*/
const studentList = document.querySelectorAll('.student-item');
console.log(studentList);
/*Global variable to store the number of items to select at any given time */
const perPage = 10;

//Create a `showPage` function to hide all of the items in the list except for the ten we want to show.

function showPage(list, page){
   // Create index for page range
   const startIndex = (page * perPage) - perPage;
   const endIndex = (page * perPage);
  // Loop over the list parameter and set the style.display of each list item to 'none' to hide all items
  
   for (let i = 0; i < list.length; i++){
      console.log('poop'); 
      list[i].style.display = 'none';
   }
 //Loop over the list parameter again to set the style.display of each list item to 'block' to show the items only in the index range

 for (let i = 0; i < list.length; i++){
   if (i >= startIndex && i < endIndex) {
    console.log('pee');
    list[i].style.display = 'block';
      }
   }
 }
  //showPage(studentList, 6);

  /*** 
   Create the `appendPageLinks function` to generate, append, and add 
   functionality to the pagination buttons.
***/


function appendPageLinks(list){

   //Create a DIV element with and store it to a variable
   let div = document.createElement('div');
   //Set the DIV element's className to pagination
   div.className = "pagination";
   //Append to the div element with the class name of page.
   let pageDiv = document.querySelector('div');
   pageDiv.appendChild(div);

   //create a nested ul element 
   let ul = document.createElement('ul');
   ul.className = "Catnip";
   div.appendChild(ul);

   //create a variable to calculate the number of pages needed to display ten per page.  Divide the list length by the perPage variable and round up.
   let numberPages = Math.ceil(list.length / perPage);
   console.log(numberPages);

   //Loop the numberPages times to create the required number of LI elements so there is one for each page of 10 (or less if last page).
      for (let i = 0; i < numberPages; i++){ 
         let li = document.createElement('li');
         ul.appendChild(li);
         //each LI element contains an A element with href attribute of #
         let a = document.createElement('a');
         a.href = "#"
         //The text content shows the page number on which each link will show.
         a.textContent = i+1;
         li.appendChild(a);
          }
// Add the active class name to the first pagination link initially.
document.querySelector('a').className = "active";
//Add a “click” event listener to each A element. A loop can be helpful here.

function setAction(event){
   const buttons = document.getElementsByTagName('a');
   for (let i = 0; i < buttons.length; i++){
   //remove active class name from all links
   buttons[i].classList.remove('active')
   // add active class to the link that was just clicked (target property of the event object)
   let buttonClicked = event.target;
   let pageClicked = event.target.textContent
   buttonClicked.classList.add('active');
   }
}

for (let i = 0; i < numberPages; i++){
   const buttons = document.getElementsByTagName('a');
      buttons[i].addEventListener('click', (event) => {

         setAction(event);
         showPage(studentList, event.target.textContent);

  
        
      //The function to show a page should be called, passing in as arguments, the global variable for the list items, and the page number that should be shown. The text content of the A element that was just clicked can be helpful here. */



   })
}
}


 

appendPageLinks(studentList);
