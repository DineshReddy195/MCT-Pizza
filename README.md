# Pizza Delivery Website

  Hi,  I'm Dinesh Kumar Reddy. I have completed my B.Tech in President's University,  Bangalore in the stream of Electronics and Communication Engineering.  Currently, I'm working as a assistant system engineering data conferencing services with an experience of about 1.9 years.  And I have good knowledge on HTML,  JSON,  JavaScript and ReactJS.  And I have done a project called Pizza Delivery website using ReactJS which will be helpful for us to order pizzas.

  Now I'm going to share you about that. I'm going to walk you through about that project.  This is my project and here this is the homepage which I have created after that.  So if we scroll this down,  we can see what all pizzas are available here.
 

Or else we can directly go to pages,  page.  And here I have added a hover effect to show like add to cart and quick view options.  If we click on quick view,  we'll get the details of this product.  And if we click on add to cart,  we'll get the, we'll go to the cart.  And here menu,  in this menu, it will just show what all items are present.  And this is even, this is a static, this event,  blog and landing,  all these three are static components.  And now we come to pages.  And here suppose if I click on this cart and if I type,  if I give you mail ID here and add,  here I give mail ID and here I give number of slices needed.  Here I'm giving the pizza size and here I am giving the toppings and if I click on agree terms and conditions and if I give order now,  it will show that order is on.  It will show that order is confirmed.
 

  Or else we can,  if we want to show,  if we want to see the details of this particular product,  then we have,  then I will click on quick view.  Then it will show the product  name,  product price and about the product and some text about the product.  And of that,  if we click on add to cart and if we fill all these details,  something like this.  And if we fill on these details, something like this, then it will,  yeah.  Then if we click on order now,  then it will directly confirm the order. 
 

And if I click on that return home, it will directly come to home.  So now let's walk through the code,  code of that.  Here this is home.jsx page, means this page.  So in the page I have usually this H1,  this P  and one icon and one button. Here I want to mention you that here you should not use image tag here.  We have to make a background image URL and we have to use that. 

 I have done that.  I have tried using image here and I have tried using sending text on top of the image, but it caused me a huge problem.  And even this now,  even this navbar, which is present here,  this was correct in this page.  But when we scroll down,  this navbar is coming here.  This navbar is coming somewhere in this area.  So that's why I, I searched a lot and I then  I tried all the features.
 

  Then I came,  then I have tried this background URL,  background URL,  background image.  So there I have given this URL.  In that URL I have given image and then it worked perfectly.  So that is the main, that is the main problem which I have faced during this homepage.  And after giving this homepage,  I came to items page.
In this project I have used a tech stack called react router dump and rapid API.  Using this rapid API,  I have taken all this,  all the URL.  I have taken the URL from rapid API.  After that I have taken a state.  I have given its name as products and set products.  We know use state.  I have given a products and set products.  So after that I have given a list and I have given some, here I have given it is an async, await.  So try and I have given this const a variable name and I have fetched this URL,  const URL.  So here this is the URL and this is the options.  So all these details will be in the form of binary.  So we need to convert them to JSON.  So here I have declared another variable and I have declared this variable as .JSON().

  After that I have given state.  So set products is a result.  This result.products which is this products which is in the, which is in API and I have console.log that API.  After  that I have given,  if this try didn't work then our app will crash if we don't do catch method.

  So I have given catch method here and I have console that.  So this list I have given it in use effect.  So I have called that list in use effect.  After that we will come to these steps later.  I have taken a due and I have given now,  now bar here.  After that I have taken another due in that I have declared a condition like if products length is greater than zero, then it should have all the products like I have done mapping of the products. 
 So it should map the products and then I image all the H3 and that title description price and buttons all those should be there.  If not,  if not it should print if the products item is not greater than zero,  it should print no items to display.  

So here if we see this new page, we can see that it is given like items.id().By this item this is called as path parameter.  So here this ID we can do anything which is unique in the API.  So I have checked the API.  It is ID is unique to every object.  So that's why I have given ID as the path parameter here.  And if we see here,

I have given on click to this details and cart.  So here I have used another hook called use navigate hook.  Here we see here I have used another hook called use navigate.  This use navigate will return a function called navigate.  We have this one we have to do only name called navigate.  We should not do any other name. If we give any other name it will not work.  So here I have given const cart.

  So as I have declared it in the below like I have given on click as cart here for cart.  So I have given its name as cart and navigate.  I want to navigate to order page.  
So I have given order here also details on details.  I have given on click here.  Here I have given on click detail.  So if we click on that button,  we need to go to quick view page.

So I have created menu page.  In that also I have taken one use state with empty array.  And here also I have done the same thing like I have used this URL and I have given try catch to that.  After that I have given map.  I have done mapping of that.  And after doing mapping I have given order by otherwise like I have given image H2 tag H3 drag by price like that.

  So after after doing that I went I have went to now let's see quick view page.  So if we go to here in this app component I have used routes and route.

  So here if we see this quick view page I have given ID here.  So whatever is after this colon.  So that is called as path parameters.  How many colons are there that mean what parameters are present in that. So here if we see this quick view page here I have I have already told like in items.js I have taken ID here as path parameter.

  So that so that idea I have used I have used use parameters here and that will return an object. So the object I have destructed and I have given it as ID.  And here also I have used hook and use navigate.  And here also  I have taken the URL use effect hook and try catch I have done as earlier same thing.

  After that here this one what I have done here is first I have taken I have declared a variable.  After that pizza means our state name is pizza and said pizza use state().  So pizza. find().  It will take a callback function in that callback function I have declared a parameter called element.  For that element I have given this path parameter which is our ID.

So our ID will be taken after that if that ID is equal to percent y I have given is that ID is in string format but here we need that ID in number format. So I have given percent  this percent will convert the string into number.  So percent which which one I need to convert I need to convert ID to string.  So that's why I ID to number so that's why I have given percent ID.  After that I have taken this do class and left panel and if we click on if we do that click item and if we do that image image I have given image the link here then that image will be printed.

  I'll show you.  See here this for that image this here this image will be printed and here again I have given and clicked item and H2  tag like a title name rupees about and low revenue content and one button to add to cut.

  So then all those will be printed here. So after that I have for this button I have given cart of on click after giving on click I have given I have used navigate here and I went to have given order like order page and if we see this order page here I have given all the forms.

  Here I have used the input rev and use user of all these all these features and here I have given all the input tag input tags.  So like input tag email input a phone number and number of slices and radio types I have given and checkboxes I have given a button to click on order now for this I have given on click as ordered once here it is ordered we have used navigate here and once it is ordered it will go to order success page.
 

  So after after that form right if you go to order success one here we here we have this image I have given one image here.  So once if they click on this order button it will go to this page and it will give a it will give them this image.

  So and if we go to nav bar here this nav bar will have links to all things this nav bar will have all these links all these links are present in nav bar.  This is the nav bar with all the links so I have given that nav bar there and that is it about the project.

So here I have I have faced another difficulty in this quick view like converting this into converting this ID into number there also I have faced some issue after that I searched a I searched after that I came to know that we I tried many of the predefined function after that I used parsing then I got success in that.

  So in a way I have faced I have faced problem and I have solved this problem.  So this is all about the project.  Thank you for this opportunity.


Live Link: https://cerulean-fairy-dc088f.netlify.app/

Refer below word document for reference and screenshots.
Pizza Delivery Website.docx  
https://github.com/DineshReddy195/MCT-Pizza/files/12275085/Pizza.Delivery.Website.docx
