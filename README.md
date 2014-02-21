# hitarea.js
jQuery plugin to apply a 'Hit Area' to any element.

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
    shape: "circle",
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

### Options
**radius** *number* (default: 20) - Radius of hit area

**shape** *string* (default: "square") - Shape of the hit area. Options: "square" and "circle"

**repeat** *boolean* (default: true) - Set to false to trigger event only once

**endOn** *string* (default: "enter") - If *repeat* is false, trigger last event on mouse enter or leave. Options: "enter" and "leave"
