const options = document.getElementById("options");

function getIdValue(id) {
    return document.getElementById(id).value;
}

function generateOptions(dictionary) {
    const part = getIdValue("part")

    if (part in dictionary) {
        let values = dictionary[part];
        let html = ""
        for (value in values) {
            let child = `<label>${dictionary[part][value]}: 
                        <input type="radio" value="${dictionary[part][value]}" id="${part}" name="${part}" required>
                        </label>`;
            html += child;
        }
        options.innerHTML = html;
    }
    else {
        options.innerHTML = "No Options";
    }
}