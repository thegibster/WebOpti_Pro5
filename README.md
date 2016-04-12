# Website Performance Optimization portfolio project

### Setup

To clone the repo or copy the url to proceed to the direct link:
```sh
$ git clone https://github.com/thegibster/WebOpti_Pro5.git
```
## Up and Running the Project
1. After cloning or downloading the zip(unzip) 
2. To run on local server download ngrok for your platform at https://ngrok.com/.
3. Place ngrok binary in directory and execute "python -m SimpleHTTPServer 8080" from the     -terminal followed "./ngrok http 8080" afterwards to have the ability to use https://developers.google.com/speed/pagespeed/insights/ for the speed rank. 
4. Using the link generated in the terminal paste that code into pagespeed to recieve the results
5. To simply test the site sans pagespeed , have the SimpleHTTPServer running and proceed to http://localhost:8080/views/pizza.html from your browser
6. Open up  Chromes developers tools and watch the console as you scroll to notice the triggering of render times.

### Optimizations on views/js/main.js for pizza.html

1.Reduced number of pizza elements being drawn from 200 to a variable number with negligible differnece in actual amount painted to screen. Lines 481-486 main.js created a constant from the window height to use for generating a loop number.
2.Reduce repetitive code using DRY methodologies to make efficient use of variable allocations
3.Placed style.css code inline of pizza.html and removed the orignal css link from the header. Moved all styles scripts to just before the body tag's close.
4.Line 562 in main.js, var movingPizzas = document.getElementById('movingPizzas1'); used to reduced calls to the DOM for the same object with Id ('movingPizzas1').
5.var elem on line 556 main.js is moved out of the following loop so that it is instanciated once outside .
6.Added use of strict in functions calls.
7.Production code is minified. To examine code use src folder as dist is the same just in compressed mode.





