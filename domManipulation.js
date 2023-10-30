// html button elements
let contentButton = document.querySelector('.content-button');
let image1Button = document.querySelector('.image-1-button');
let image2Button = document.querySelector('.image-2-button');

// html content elements
let para = document.querySelector('.paragraph');
let image = document.querySelector('.image');

let userName = document.querySelector(".name");
let hobby = document.querySelector(".hobby");
let home = document.querySelector(".location");

// CODE ALONG
// 1. An event listener in provided for the `contentButton`
contentButton.addEventListener('click', function() {
	userName.innerHTML = "My name is Vincent";
	hobby.innerHTML = "I like to play music";
	home.innerHTML = "I live in Chicago";
})
// 2. When clicked, it should change the content of:
//   - The `name` header.

// -- RETURN TO LESSON --

// CODE SOLO
//   - The `hobby` paragraph.
//   - The `location` paragraph.


// 3. Add an event listener to the `image1Button`
// 4. When clicked, it should change the source of `image` to another image URL.
image1Button.addEventListener('click', function() {
	image.src = "goya.jpg";
});




// 5. Add an event listener to the `image2Button`
image2Button.addEventListener('click', function(){
	image.src = "orange.jpg";
});
// 6. When clicked, it should change the source of `image` to another image URL.


// BONUS
// 7. Try using different event types for your buttons.