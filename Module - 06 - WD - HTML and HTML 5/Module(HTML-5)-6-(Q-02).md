# (Q - 2) : How to embed Audio and Video file in web page?

## How to embed audio in HTML?
    - To embed audio in HTML, we use the <audio> tag.
    - Before HTML5, audio cannot be added to web pages in the Internet Explorer era.
    - To play audio, we used web plugins like Flash.
    - After the release of HTML5, it is possible. 
    - This tag supports Chrome, Firefox, Safari, Opera, and Edge in three audio formats – MP3, WAV, OGG. Only Safari browser doesn’t support OGG audio format.

### Syntax:
    <audio>
        <source src="file_name" type="audio_file_type">
    </audio>


## How to embed video in HTML?
    - To embed video in HTML, we use the <video> tag.
    - It contains one or more video sources at a time using <source> tag.
    - It supports MP4, WebM, and Ogg in all modern browsers.
    - Only Ogg video format doesn’t support in Safari browser. 

### Syntax
    <video>
    <source src="file_name" type="video_file_type">
    </video>