/* window.onload(readjson());

 */
 function readjson() {
    var container = document.getElementsByClassName("linkinfo")[0];
    var input;
    /* var file = new XMLHttpRequest();
    file.open("GET", "Link.json", false);
    file.send(); */

    /* input = (function () {
        var input = null;
        $.ajax({
            'async': false,
            'global': false,
            'url': "Link.json",
            'dataType': "json",
            'success': function (data) {
                input = data;
            }
        });
        return input;
    })();  */

    input = $.getJSON("Link.json");

    /* input.reverse(); */
    for (var i = 0; i < input.length; i++) {
      createEntry(input[i], container);
    }
  }
  
  function createEntry(data, container) {
    var insertContainer = document.createElement("div");
    insertContainer.setAttribute("class", "contentInsert");
  
    var name = document.createElement("div");
    name.setAttribute("class", "contentName");
    name.innerHTML = data.name;
  
    var link = document.createElement("div");
    link.setAttribute("class", "contentLink");
    link.setAttribute("href", data.link);
    link.innerHTML = data.link;
  
    var img = document.createElement("img");
    img.setAttribute("src", "contentImage");
    img.innerHTML = data.date;

    insertContainer.appendChild(name);
    insertContainer.appendChild(link);
    insertContainer.appendChild(img);
    container.appendChild(insertContainer);
  }