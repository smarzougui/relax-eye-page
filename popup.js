 'use strict';

 // Getting the URL of the page:
 /* var query = {
     active: true,
     currentWindow: true
 };
 function callback(tabs) {
     var currentTab = tabs[0]; // there will be only one in this array
     console.log(currentTab); // also has properties like currentTab.id

     var domain = currentTab.url.replace('http://', '').replace('https://', '').split(/[/?#]/)[0];
     alert('from popu' + domain);

 }
 chrome.tabs.query(query, callback);

 document.addEventListener("DOMContentLoaded", function () {
     //Fetch all contents
     chrome.storage.local.get(null, function (obj) {
         console.log('looooded DOM', JSON.stringify(obj));
     });
     //Set some content from browser action
     chrome.storage.local.set({
         "anotherIdentifier": "Another awesome Content"
     }, function () {
         console.log("Storage Succesful");
     });
 });
  */






 document.addEventListener("DOMContentLoaded", function () {

     let fontsArray = [document.getElementById("fontblack"),
         document.getElementById('fontgraymedium'),
         document.getElementById('fontgraylight')
     ];

     //Color
     fontsArray.forEach(function (item) {
         item.onclick = function (element) {
             let color = element.target.value;
             chrome.tabs.query({
                 active: true,
                 currentWindow: true
             }, function (tabs) {
                 chrome.tabs.executeScript(
                     tabs[0].id, {
                         code: 'document.body.style.color = "' + color + '";' + `for (let item of document.getElementsByTagName('p')) { item.style.color = "` + color + `"; }`
                     });
             });
         };
     });


     //Size
     let sizeArray = [document.getElementById("small"),
         document.getElementById('medium'),
         document.getElementById('large')
     ];
     sizeArray.forEach(function (item) {
         item.onclick = function (element) {
             let size = element.target.value;
             chrome.tabs.query({
                 active: true,
                 currentWindow: true
             }, function (tabs) {
                 chrome.tabs.executeScript(
                     tabs[0].id, {
                         code: 'document.body.style.fontSize = "' + size + '";' + `for (let item of document.getElementsByTagName('p')) { item.style.fontSize = "` + size + `"; }`
                     });
             });
         };
     });

     //weight
     let weightArray = [
         document.getElementById('normal'),
         document.getElementById('bold')
     ];
     weightArray.forEach(function (item) {
         item.onclick = function (element) {
             let weight = element.target.value;
             chrome.tabs.query({
                 active: true,
                 currentWindow: true
             }, function (tabs) {
                 chrome.tabs.executeScript(
                     tabs[0].id, {
                         code: 'document.body.style.fontWeight = "' + weight + '";' + `for (let item of document.getElementsByTagName('p')) { item.style.fontWeight = "` + weight + `"; }`
                     });
             });
         };
     });

     //Couleur background
     let bgcolorArray = [
         document.getElementById('bggraymedium'),
         document.getElementById('bggraylight'),
         document.getElementById('bggraylighter')

     ];

     bgcolorArray.forEach(function (item) {
         item.onclick = function (element) {
             let color = element.target.value;
             chrome.tabs.query({
                 active: true,
                 currentWindow: true
             }, function (tabs) {

                console.log('rrrrrr'); 
                 chrome.tabs.executeScript(
                     tabs[0].id, {
                         code: 'document.body.style.backgroundColor = "' + color + '";' 
                         +  'document.getElementsByClassName("lesson-content-container")[0].style.backgroundColor = "' + color + '";' 
                         //+  'document.getElementsByClassName("lcf-interactive-cards")[0].style.backgroundColor = "' + color + '";'
                         + `for (let item of document.getElementsByClassName('mask')) { item.style.backgroundColor = "` + color + `"; }`

                     });
             });
         };
     });





     /*
                     // change color in action:
                     chrome.tabs.query({
                         active: true,
                         currentWindow: true
                     }, function (tabs) {
                         chrome.tabs.executeScript(
                             tabs[0].id, {
                                 code: 'document.body.style.color = "' + item + '";'
                             });

                     });

                     */



 });