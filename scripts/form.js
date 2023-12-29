var form = document.getElementsByTagName("form")[0];

for (var text of values) {
    var fieldset = document.createElement("fieldset");
    form.append(fieldset);
    
    // var legend = document.createElement("legend");
    // legend.innerText = text;
    // fieldset.append(legend);
    
    var label = document.createElement("label");
    label.setAttribute("for", names[text] | "text");
    label.innerText = text;
    fieldset.append(label);
    
    var input = document.createElement("input");
    // input.placeholder = text;
    input.name = names[text] | text.toLowerCase();
    input.id = ids[text] | text.toLowerCase();
    input.required = true;
    input.type = types[text] | "text";
    fieldset.append(input);

    input.addEventListener("focus", function () {
        input.removeAttribute("placeholder");
    });

    input.addEventListener("blur", function () {
        if (input.value === "") {
            input.setAttribute("placeholder", label.textContent);
        }
    });

    // var br = document.createElement("br");
    // form.append(br);
}

var submit = document.createElement("button");
submit.innerText = "Submit"
submit.type = "submit";
submit.parent = form;
form.append(submit);