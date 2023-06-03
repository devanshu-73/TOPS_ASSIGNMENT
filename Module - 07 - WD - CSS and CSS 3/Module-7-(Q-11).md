# (Q - 11) : How to center block elements using CSS1?

### Step 1: Define the external width 
    - We need to define the external width.
    - Block-level elements have the default width of 100% of the webpage, so for centering the block element, we need space around it.
    - So for generating the space, we are giving it a width.

### Step 2: Set the left-margin and the right-margin of the element to auto 
    - Since we produced a remaining space by providing external width so now we need to align that space properly that’s why we should use margin property.
    - Margin is a property that tells how to align a remaining space.
    - So for centering the element you must set left-margin to auto and right-margin to auto.

## Example
    element {
        width:200px;
        margin: auto;
    }