// This is a function that takes a page path as an argument

//routes
var routes = {
    '':          'signin.html',     
    '/':         'signin.html',
    '#/home':    'signin.html',                
    '#/signin':  'signin.html',        
    '#/mission': 'mission.html',
    '#/about': 'about.html',
    '#mit': 'https://www.mit.edu/',
};

//router
async function router(){
    console.log(location.hash);

    // get requested page
    var link = window.location.hash;

    // get path (route) for page
    var route = routes[link];

    // if route exists, load page
    if (route) loadPage(route);
};
router();


// You need to make the function load the content of that page into the "content" div on the index file
async function loadPage(page) {
  // fetch the page, use await
  const res = await fetch(page);
  // get text from res, use await
  const content = await res.text();
  // get the element with id 'content'
  const element = document.getElementById('content');
  // set innerHTML of the element
  element.innerHTML = content;
  // your code goes here
}


window.addEventListener('hashchange', router);    
