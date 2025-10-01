const xhr = new XMLHttpRequest();

xhr.addEventListener('load', () => {
  console.log(xhr.response);
});
//setup event listener then trigger event
//same as setting up event listener for a button
//set up event listener first, then click button
xhr.open('GET', 'https://supersimplebackend.dev');
xhr.send();

