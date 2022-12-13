//Sets the testPath variable in local storage to the current folder
const currentFolder = window.location.pathname;
const dir = currentFolder.substring(0, currentFolder.lastIndexOf('/'));
localStorage.setItem("testPath", dir);

//Redirects to the main page
setTimeout(function() {
    window.location = "/";
}, 1500);