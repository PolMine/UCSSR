HTMLWidgets.widget({
  
  name: "fulltext",
  
  type: "output",
  
  factory: function(el, width, height) {
    
    el.style.overflow = "scroll";
    el.style.padding = "5px";
    var container = el;
    var selected_subcorpus;
    var previously_selected_subcorpus;
    var tokens;
    
    var ct_sel = new crosstalk.SelectionHandle();
    ct_sel.on("change", function(e) {
      tokens = document.getElementsByName(previously_selected_subcorpus);
      tokens.forEach((token) => {
        token.style.display = "none";
      })
      previously_selected_subcorpus = e.value;
      
      tokens = document.getElementsByName(e.value);
      tokens.forEach((token) => {
        token.style.display = "block";
      })

    });
    
    var ct_filter = new crosstalk.FilterHandle();
    ct_filter.on("change", function(e) {
      tokens = document.getElementsByName(previously_selected_subcorpus);
      tokens.forEach((token) => {
        token.style.display = "none";
      })
      previously_selected_subcorpus = ct_filter.filteredKeys;
      
      tokens = document.getElementsByName(ct_filter.filteredKeys);
      tokens.forEach((token) => {
        token.style.display = "block";
      })
      
    
    });

    return {
      renderValue: function(x) {
        
        if (x.settings.crosstalk_key){
          console.log("This is renderValue")
        };
        ct_filter.setGroup(x.settings.crosstalk_group);
        ct_sel.setGroup(x.settings.crosstalk_group);
        
        // document.annotations = x.data.annotations;
        if (x.settings.box){ container.style.border = "1px solid #ddd"; };
        

        var txt = "";
        for (var i = 0; i < x.data.token.length; i++){
            txt += x.data.tag_before[i];
            txt += x.data.token[i];
            txt += x.data.tag_after[i];
        };
        
        container.innerHTML = container.innerHTML + txt;
      },
      
      resize: function(width, height) {
      }
    };
  }
});