HTMLWidgets.widget({
  
  name: "fulltext",
  
  type: "output",
  
  factory: function(el, width, height) {
    
    document.annotations = {};
    document.annotationsCreated = 0;
    var getSelectionText; // needs to be defined globally
    
    // document.getElementsByTagName("body")[0].style.overflow = "scroll";

    // var div = document.getElementsByClassName("fulltext")[0];
    el.style.overflow = "scroll";
    el.style.padding = "5px";
    var container = el;
    

    return {
      renderValue: function(x) {
        
        document.annotations = x.data.annotations;
        if (x.settings.box){ container.style.border = "1px solid #ddd"; };


        for (var i = 0; i < x.data.paragraphs.length; i++){
            p = x.data.paragraphs[i].tokenstream;
            newPara = "<" + x.data.paragraphs[i].element + ">";
            for (var j = 0; j < p.token.length; j++){
              newPara = newPara + '<span id="' + p.id[j] + '">' + p.token[j] + '</span> ';
            }
            newPara = newPara + "</" + x.data.paragraphs[i].element + ">";
            container.innerHTML = container.innerHTML + newPara;
        };
        
        for (var i = 0; i < x.data.annotations.id_left.length; i++){
          for (var id = x.data.annotations.id_left[i]; id <= x.data.annotations.id_right[i]; id ++){
            el = document.getElementById(id.toString())
            el.style.backgroundColor = x.data.annotations.code[i];
            el.addEventListener('contextmenu', function(ev) {
              ev.preventDefault();
              alert('success!');
              return false;
            }, true);
          };
        };
        
        function getSelectionText() {
          var text = "";
          if (window.getSelection) {
            
            document.annotations.text.push(window.getSelection().toString());

            var id_left = parseInt(window.getSelection().anchorNode.parentNode.getAttribute("id"));
            var id_right = parseInt(window.getSelection().focusNode.parentNode.getAttribute("id"));

            document.annotations.id_left.push(id_left);
            document.annotations.id_right.push(id_right);

            var code_color = bootbox.prompt({
              title: x.settings.codeSelection,
              inputType: 'textarea',
              callback: x.settings.callbackFunction
            });
            
          } else if (document.selection && document.selection.type != "Control") {
            text = document.selection.createRange().text;
            
          }
          
        }
        
        if (x.settings.dialog){
          container.onmouseup = function(el) { getSelectionText() };
        };

      },
      
      resize: function(width, height) {
      }
    };
  }
});