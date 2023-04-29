var editor = new MediumEditor('.editable', {
    toolbar: {
        /* These are the default options for the toolbar,
           if nothing is passed this is what is used */
        allowMultiParagraphSelection: true,
        buttons: ['bold', 'italic', 'underline', 'anchor', 'h2', 'h3', 'quote'],
        diffLeft: 0,
        diffTop: -10,
        firstButtonClass: 'medium-editor-button-first',
        lastButtonClass: 'medium-editor-button-last',
        relativeContainer: null,
        standardizeSelectionStart: false,
        static: false,
        /* options which only apply when static is true */
        align: 'center',
        sticky: false,
        updateOnEmptySelection: false
    },
    anchor: {
        /* These are the default options for anchor form,
           if nothing is passed this is what it used */
        customClassOption: null,
        customClassOptionText: 'Button',
        linkValidation: false,
        placeholderText: 'Paste or type a link',
        targetCheckbox: false,
        targetCheckboxText: 'Open in new window'
    },
    keyboardCommands: {
        /* This example includes the default options for keyboardCommands,
           if nothing is passed this is what it used */
        commands: [{
                command: 'bold',
                key: 'B',
                meta: true,
                shift: false,
                alt: false
            },
            {
                command: 'italic',
                key: 'I',
                meta: true,
                shift: false,
                alt: false
            },
            {
                command: 'underline',
                key: 'U',
                meta: true,
                shift: false,
                alt: false
            }
        ],
    },
    autoLink: true,
    placeholder: {
        text: 'Text Will be added here after conversion of the blog',
    },

});

$(".Convert").click(function() {
    // get data form youtubeLink
    var youtubeLink = $(".youtubeLink").val();
    $.ajax({
        type: "POST",
        url: "http://127.0.0.1:8000",
        data: JSON.stringify({ url: youtubeLink }),
        contentType: "application/json; charset=utf-8",
        dataType: "json"
    }).done(function(data) {
        console.log(data.text);
        editor.setContent(data.text);
        // set it in local storage
        localStorage.setItem("text", data.text);
    });
});

// on load of the page
$(document).ready(function() {
    // delete searchedKeywords from local storage
    localStorage.removeItem("searchedKeywords");
    var text = localStorage.getItem("text");
    if (text) {
        editor.setContent(text);
    }
    // get all the text inside h3 tag as an array and pass it to findImages function 
    var titles = [];
    $("h3").each(function() {
        titles.push($(this).text());
    });
    // remove the first element as it is the title of the blog
    titles.shift();
    titles.forEach(element => {
        findImages(element);
    });
});

function findImages(title) {
    fetch('https://pixabay.com/api/?key=35871702-48a42c8285cb9f940a8c6f663&q=' + title + '&image_type=photo')
  .then(response => response.json())
  .then(data => {
    var imageData = data.hits;
    var imageURLs = [];
    for (var i = 0; i < imageData.length; i++) {
        imageURLs.push(imageData[i].webformatURL);
    }
    console.log(imageURLs);
    // add a heading only if there are images
    if(imageURLs.length > 0)
    {
        $(".exampleImages").append('<h3>' + title + '</h3>');
        // extract keywords from title and search for images
    } else {
        var searchedKeywords = localStorage.getItem("searchedKeywords");
        searchedKeywords = JSON.parse(searchedKeywords);
        var keywords = title.split(" ");
        // console.log(keywords);
        // remove all the 5 letter words
        keywords = keywords.filter(function(word) {
            return word.length > 5;
        }
        );
        console.log(keywords);
        keywords.forEach(element => {
            console.log(element);
            if(searchedKeywords == null)
            {
                searchedKeywords = [];
            }
            if(searchedKeywords.includes(element))
            {
                console.log("Already searched for this keyword");
                return;
            } else {
                findImages(element);
                console.log(element, "------------");
            }
            searchedKeywords.push(element);
            localStorage.setItem("searchedKeywords", JSON.stringify(searchedKeywords));
        });
    }
    
    imageURLs.forEach(element => {
        $(".exampleImages").append('<a href="' + element + '" download><img src="' + element + '" class="img-fluid col-md-4" style="padding: 5px 5px 5px 5px; height: 200px; width: 200px; object-fit: cover;"/></a>');
    });
  })
  .catch(error => console.log(error));
}