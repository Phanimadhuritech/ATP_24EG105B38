HTML:-
Html never focus on the browser.every brower contains default stylesheet which is called user agent style sheet, it depends on browser to browser.Html give the semantics only.
CSS:-Selectors
are defines as selectors{}
float property is used for moving image left or right 

(16-03-2026)
# box model 
    margin(space outsite of the element) and padding(space inside the element) 
   1 values is for  all sides 
   2nd value is for  tb(top and bottom) lr(left right) 
    3rd value is for top lr(left right) b(bottom)
    4th values all-t r b l

    border:1px  solid red;  border is the width of the border,solid represents the text and red is color of the border.
   width and height
   max height(its width can grow to the wodth we kept) and max width-

   # text styles
   color is for text and background is of backgroud 
   rgb(the range is from 1 to 250 changes the colors and generate a new color ) 
    hexadecimal-hsl color: hsl(285°, 49%, 27%);

websafe fonts
google fonts

# pseudo classes
   focus
   visited
   hover
   active
   first-child
   last-child
   nth-child
     even 
     odd
h1{
    width:auto;
    height: auto;
}
h1:hover{
    color: blueviolet;
    background-color: wheat;
}

li:first-child{
    color: blue;
}
li:nth-child{
    color: aquamarine;
}

# user card

# styling tables and forms

# forms
form tag used 
labels 
input
   text 
   password
   number 
   date 
# Positions
      relative-means its in it current postion 
      absolute
      fixed
      sticky
top
bottom
left
right

(17-03-2026)

# Font size units
they are relatuve units.
em - it is equalent to font size of parent element
rem - font size of root element
Using rem and em is more flexible for font sizes 
# View port units
the visible area or space always depens on width and height not on the img.

# layouts
using flex we can create layoiuts. we can adjust horizontall and vertcicllay.
# Flex & Grid
using grid we can do 2d layouts

# Media queries
@media screen and (max-width:600px)

### css ----> defines styles + apply  
bootstrap and tailwind css are the famous css framework(which contains the predefined variables or styles)

### TailWind
