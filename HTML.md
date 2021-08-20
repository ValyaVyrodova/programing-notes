## INTRODUCTION TO HTML

#### The Body

Only content inside the opening and closing body tags can be displayed to the screen.

```html
<body>
  <p> What's up, doc?</p>
</body>
```

#### HTML Structure

HTML is organized as a collection of family tree relationships.

When an element is contained inside another element, it is considered the child of that element. The child element is said to be nested inside of the parent element.

```html
<body>
  <p>This paragraph is a child of the body</p>
</body>
```

Understanding HTML hierarchy is important because child elements can inherit behavior and styling from their parent element. 

#### Headings

In HTML, there are six different headings, or heading elements. 
They are ordered from largest to smallest in size.

```html
<h1> // — used for main headings. All other smaller headings are used for subheadings.
<h2>
<h3>
<h4>
<h5>
<h6>

```

#### Divs

`<div>` is short for “division” or a container that divides the page into sections. These sections are very useful for grouping elements in your HTML together.

`<div>`s allow us to group HTML elements to apply the same styles for all HTML elements inside. 

#### Attributes

Attributes are content added to the opening tag of an element and can be used in several different ways, from providing information to changing styling.

Attributes are made up of the following two parts:
- The name of the attribute
- The value of the attribute

We can use the id attribute to specify different content (such as `<div>`s) and is really helpful when you use an element more than once.

When we add an id to a `<div>`, we place it in the opening tag:

```html
<div id="intro">
  <h1>Introduction</h1>
</div>]
```

#### Displaying Text

- Paragraphs `<p>` contain a block of plain text.
- `<span>` contains short pieces of text or other HTML. 

They are used to separate small pieces of content that are on the same line as other content.

```js
<div>
  <h1>Technology</h1>
</div>
<div>
  <p><span>Self-driving cars</span> are anticipated to replace up to 2 million jobs over the next two decades.</p>
</div>
```

#### Styling Text

- `<em>` tag will generally render as italic emphasis.
- `<strong>` will generally render as bold emphasis.
- `<br>` line break element
- `<ul>` unordered list tag, to create a list of items in no particular order, list items with a bullet point.
Individual list items must be added to the unordered list using the `<li>` tag. 
- `<ol>` Ordered lists; ordered list with the `<ol>` tag and then add individual list items to the list using `<li>` tags.

- `<img>` tag allows you to add an image to a web page. Note that the end of the `<img>` tag has a forward slash `/`.
```html 
<img src="image-location.jpg" />
``` 

- The `src` attribute must be set to the image’s source

```html
html <img src="URL" />
// 
<div id="media">
    <h2>Media</h2>
    <img src="https://content.codecademy.com/courses/web-101/web101-image_brownbear.jpg" />
  </div>
```

  - `alt` means alternative text, brings meaning to the images on our sites.
```html
  <img src="#" alt="A field of yellow sunflowers" />
```
The `alt` attribute also plays a role in Search Engine Optimization (SEO), because search engines cannot “see” the images on websites as they crawl the internet

- `<video>` tag requires a src attribute with a link to the video source
```html
<video src="myVideo.mp4" width="320" height="240" controls>
  Video not supported
</video>
```
- `width` and `height` attributes are used to set the size of the video displayed in the browser. The `controls`  attribute instructs the browser to include basic video controls: pause, play and skip


#### Review

- HTML stands for HyperText Markup Language and is used to create the structure and content of a webpage.

- Most HTML elements contain opening and closing tags with raw text or other HTML tags between them.

- HTML elements can be nested inside other elements. The enclosed element is the child of the enclosing parent element.


### HTML DOCUMENT STANDARDS
 
HTML files require certain elements to set up the document properly. We can let web browsers know that we are using HTML by starting our document with a document type declaration.

`<!DOCTYPE html>` - it must be the first line of code in your HTML document. It tells the browser what type of document to expect, along with what version of HTML is being used in the document.

```html
<!DOCTYPE html>
<html>
 
</html>
```

Anything between the opening <html> and closing </html> tags will be interpreted as HTML code. Without these tags, it’s possible that browsers could incorrectly interpret your HTML code.

#### Head
The <head> element contains the metadata for a web page. 

<strong>Metadata</strong> -  is information about the page that isn’t displayed directly on the web page. 

- A browser’s tab displays the title specified in the `<title>` tag.

```html
<!DOCTYPE html>
<html>
  <head>
    <title>My Coding Journal</title>
  </head>
</html>
```

- <a> You can add links to a web page by adding an anchor element <a> and including the text of the link in between the opening and closing tags.
```html
<a href="https://www.wikipedia.org/">This Is A Link To Wikipedia</a>
```

- The `target` attribute specifies how a link should open.
For a link to open in a new window, the target attribute requires a value of `_blank`

```html
<a href="https://en.wikipedia.org/wiki/Brown_bear" target="_blank">The Brown Bear</a>
```
- The `target="_blank"` attribute, when used in modern browsers, will open new websites in a new tab.

- Because the files are stored in the same folder, we can link web pages together using a relative path.
The `./` in `./index.html` tells the browser to look for the file in the current folder.
```html
<a href="./contact.html">Contact</a>
```

HTML allows you to turn nearly any element into a link by wrapping that element with an anchor element. With this technique, it’s possible to turn images into links by simply wrapping the `<img>` element with an `<a>` element.

Your image element should be a nested tag inside your anchor element.

```html
<a href="https://en.wikipedia.org/wiki/Opuntia" target="_blank"><img src="https://www.Prickly_Pear_Closeup.jpg" alt="A red prickly pear fruit"/></a>
```

- In order to link to a target on the same page, we must give the target an id, like this:

```html
<p id="top">This is the top of the page!</p>
<h1 id="bottom">This is the bottom! </h1>
```
the `<p>` element is assigned an `id` of “top” and the `<h1>` element is assigned “bottom.” 
An `id` can be added to most elements on a webpage.

An `id` should be descriptive to make it easier to remember the purpose of a link. The target link is a string containing the `#` character and the target element’s `id`.
```html
<ol>
  <li><a href="#top">Top</a></li>
  <li><a href="#bottom">Bottom</a></li>
</ol>
```

#### Whitespace

Programmers use two tools to visualize the relationship between elements: whitespace and indentation.

The browser ignores whitespace in HTML files when it renders a web page, so it can be used as a tool to make code easier to read and follow.

```html
<body>
  <p>Paragraph 1</p>
  <div>
    <p>Paragraph 2</p>
  </div>
</body>
```

#### Comments

Comments begin with `<!-- and end with -->`. Any characters in between will be ignored by your browser.