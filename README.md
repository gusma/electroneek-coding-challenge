# ElectroNeek's coding challenge 🚀

### Done by [Gustavo Malamud](http://www.gustavomalamud.com).

# To run:

```npm run install``` and then ```npm run dev```. Thank you!

# Instructions

Below you fill find several test tasks of various difficulty. The common conditions for all of them are: 
* The test project should be done in Next.js
* You may use any CSS framework or method of writing styles, Tailwind is preferred but not mandatory
* All images should be added with Next.js’s Image component
* There are 4 tasks in total. Task #2 has 2 variants - pick only one. That will make for 1 static and 1 dynamic block (more details in tasks #1 and 2)
Take your time, but don’t waste too much time. Also, please add an amount of time it took to finish the tasks to your email. 
## Layout of a page section. 
You’ll need to create a Next.js page with a layout of a page section shown in a red border on a screenshot below. 
* H1 heading, subheading, paragraph of text and button are hard-coded string values or can be taken from the API as described in task #2 variant A
* 3 cards can be made static for this task or dynamic as described in task #2 variant B
* You can skip logos located next to the button


### Fetch data from the API
Pick one of the variants below: 
_Variant A_: heading and excerpt should be made dynamic. 
Take yoast_head_json.title and excerpt from https://wp.dev.electroneek.com/wp-json/wp/v2/pages?slug=new-mainpage 
Put title to H1 and excerpt to a paragraph below

_Variant B_: 3 blocks at the bottom of the section should be made dynamic - get 3 latest posts from the endpoint https://wp.dev.electroneek.com/wp-json/wp/v2/posts?&per_page=3
Take images from wp:featuredmedia.href field
If the media endpoint returns 40X code - show any other image as placeholder (you may use any of the images from the Figma layout for this purpose)
Text on 3 cards should be taken from posts title
All 3 cards should be clickable and point to the posts
The images returned from the API may vary in dimensions - that’s fine, make sure that the container for all 3 images maintains the same size. For this task it’s ok it the image itself is distorted or cut if the layout of the card is not broken. 


### Menu states
Add a menu to the page as shown in Figma (link below). Check the current behavior at electroneek.com - menu color changes on scroll. 
Add the same behavior to your project. 
No need to add internal menus, only top level. 
This task is all about the states of the menu, not it’s pixel perfect layout. You may skip the right part with locale switcher and buttons to speed things up here. 


### Use i18n 
Use Next.js’s i18n routing with subfolders (i.e. /es/). Main locale - English - doesn’t use a subfolder (an example of the uri structure can be seen on electroneek.com). 
* Make your page localized in 1 additional language.
* You may use lorem ipsum or any other placeholder texts for this second language to indicate the change of the content.
* If you’ve done task #2 variant A - use endpoint https://wp.dev.electroneek.com/wp-json/wp/v2/pages?slug=homepage-studio-ide-2&lang=es
* If you’ve done task #2 variant B - add query param &lang=es for dynamic block content in second language

