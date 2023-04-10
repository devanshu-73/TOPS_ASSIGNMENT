# (Q - 10) : How can we club two or more rows or columns into a single row or column in an HTML table? 

    - You can merge two or more table cells in a column using the colspan attribute in a <td> HTML tag (table data). 
    - To merge two or more row cells, use the rowspan attribute. 

## How to use Colspan attribute
    - In the code below is a table with three rows and three columns. 
    - If we wanted to combine the first two cells in the first column, we could use the colspan="2" attribute in the first <td> tag.
    - The number represents how many cells to use (merge) for the <td> tag.
### Example of Colspan Attribute
    <table>
        <tr>
             <td colspan="2">D1</td>
             <td>D2</td>
         </tr>
        <tr>
             <td>D3</td>
             <td>D4</td>
             <td>D5</td>
         </tr>
         <tr>
             <td>D6</td>
             <td>D7</td>
             <td>D8</td>
         </tr>
    </table>
<table>
<tr>
           <td colspan="2">D1</td>
                <td>D2</td>
            </tr>
            <tr>
                <td>D3</td>
                <td>D4</td>
                <td>D5</td>
            </tr>
            <tr>
                <td>D6</td>
                <td>D7</td>
                <td>D8</td>
            </tr>
</table>

## How to use Rowspan Attribute
    - In the code below is a table with three rows and three columns. 
    - If we wanted to combine the first two cells in the first column into one cell, we could use the rowspan="2" attribute in the first <td> tag.
    - The number represents how many cells to use for the <td> tag.
### Example of Rowspan
    <table>
        <tr>
            <td rowspan="2">D1</td>
            <td>D2</td>
            <td>D3</td>
        </tr>
        <tr>
            <td>D4</td>
            <td>D5</td>
        </tr>
        <tr>
            <td>D6</td>
            <td>D7</td>
            <td>D8</td>
        </tr>
    </table>
<table>
        <tr>
            <td rowspan="2">D1</td>
            <td>D2</td>
            <td>D3</td>
        </tr>
        <tr>
            <td>D4</td>
            <td>D5</td>
        </tr>
        <tr>
            <td>D6</td>
            <td>D7</td>
            <td>D8</td>
        </tr>
    </table>