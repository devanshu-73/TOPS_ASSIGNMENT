# (Q - 14) : What is embedded style sheets?

## Embedded style sheets:
    - it is also known as embedded CSS (Cascading Style Sheets), refer to a method of including CSS code directly within an HTML document.
    - CSS is a styling language used to define the appearance and layout of web pages.
    - With embedded style sheets, CSS rules are placed within the <style> tags in the <head> section of an HTML document.
    - This allows the style definitions to be specific to that particular document, as opposed to applying styles globally across multiple pages.
    - The embedded CSS rules take precedence over external style sheets, but they can be overridden by inline styles.
### Example :
     <!-- Embedded stylesheet -->
        <style>
            h1 {
              font-size: 1rem;
              color: red;
              text-align: center;
           }
  
            p {
              font-variant: italic;
             }
        </style>
