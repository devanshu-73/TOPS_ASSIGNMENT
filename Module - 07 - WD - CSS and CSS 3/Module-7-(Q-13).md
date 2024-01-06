# (Q - 13) : What are the ways to integrate CSS as a web page?

    - There are several ways to integrate CSS (Cascading Style Sheets) into a web page.

### Here are some common methods:

## Inline CSS: 
    - Inline CSS involves adding CSS directly within an HTML element's style attribute.
    - This method is useful for applying specific styles to individual elements.

### For example:
    <p style="color: red; font-size: 16px;">This is a paragraph with inline CSS.</p>

## Internal CSS:
    - Internal CSS allows you to define CSS rules within the <style> tags in the <head> section of an HTML document.
    - This method is suitable for applying styles to multiple elements within a single page.

### For example:

    <head>
    <style>
        p {
            color: red;
            font-size: 16px;
          }
    </style>
    </head>
    <body>
        <p>This is a paragraph with internal CSS.</p>
    </body>

## External CSS:
    - External CSS involves creating a separate CSS file with the .css extension and linking it to your HTML document using the <link> tag.
    - This method is ideal for applying styles across multiple pages of a website.
### For example, assume you have a file named style.css:

    <head>
        <link rel="stylesheet" type="text/css" href="style.css">
    </head>
    <body>
        <p>This is a paragraph with external CSS.</p>
    </body>
#### In the style.css file:
    p {
        color: red;
        font-size: 16px;
      }