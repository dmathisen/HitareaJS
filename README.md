# hitarea.js
jQuery plugin to apply a 'Hit Area' to any element.

----
----

### Example
Basic examples up at [hitarea.danmathisen.com](https://hitarea.danmathisen.com/).

Or grab the code and check out `example.html`.

----
----

### Installation
Just add hitarea to your page: `<script src="/path/to/jquery.hitarea.js"></script>`. That's it.

Call `.hitarea()` on any element and you're good to go.

----
----

### Usage
##### Basic
```javascript
var enter = function (e) {
    e.style.border = '1px solid red';
}
var leave = function (e) {
    e.style.border = '1px solid green';
}

$('.el').hitarea(enter, leave);
```

##### Advanced
```javascript
var options = {
    radius: 50,
    rounded: true,
    repeat: false,
    endOn: "leave"
};
var enter = function (e) {
    e.style.border = '1px solid red'; // use javascript
}
var leave = function (e) {
    $(e).css('border', '1px solid green'); // or use jquery
}

$('.el').hitarea(enter, leave, options);
```

----
----

### Options
**radius** *number* (default: 20) - Radius of hit area

**rounded** *bool* (default: false) - Set to true to make the hit area shape rounded

**repeat** *boolean* (default: true) - Set to false to trigger event only once

**endOn** *string* (default: "enter") - If *repeat* is false, trigger last event on mouse enter or leave. Options: "enter" and "leave"
