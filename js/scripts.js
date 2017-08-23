//BACK END LOGIC
//Contact Constructor
function Contact(first, last) {
    this.firstName = first;
    this.lastName = last;
    this.addresses = []; //leave it as an empty array since we will push the the address object created into it.
};
//Address Constructor
function Address(street, city, county) {
    this.street = street;
    this.city = city;
    this.county = county;
};

//full name prototype method
Contact.prototype.fullName = function () {
    return this.firstName + " " + this.lastName;
}
//full address prototype method
Address.prototype.fullAddress = function(){
    return this.street + ', ' + this.city + ', ' + this.county;
}


//FRONT END LOGIC
$(document).ready(function () {
    //action when add address button is clicked
    $("#add-address").click(function () {
        //append more address input fields once the add address button is clicked.
        $('#new-addresses').append(
            '<div class="new-address">' +
            '<div class="form-group">' +
            '<label for="new-street">Street</label>' +
            ' <input type="text" class="form-control" id="new-street">' +
            '</div>' +
            '<div class="form-group">' +
            '<label for="new-city">City</label>' +
            '<input type="text" class="form-control" id="new-city">' +
            '</div>' +
            '<div class="form-group">' +
            '<label for="new-county">County</label>' +
            '<input type="text" class="form-control" id="new-county">' +
            '</div>' +
            '</div>');
    })
    //action when the form is submitted.
    $("form#new-contact").submit(function (event) {
        event.preventDefault();
        //store the user's first and last names as variables
        var inputtedFirstName = $("input#new-first-name").val();
        var inputtedLastName = $("input#new-last-name").val();
        //create new contact object with those variables
        var newContact = new Contact(inputtedFirstName, inputtedLastName);
        // looping through the address form fields to collect the information inserted, create a newAddress object with it and pushing the newAddress object to the addresses property array in the newContact object.
        $('.new-address').each(function () {
            var inputtedStreet = $(this).find("input.new-street").val();
            var inputtedCity = $(this).find("input.new-city").val();
            var inputtedCounty = $(this).find("input.new-county").val();
            var newAddress = new Address(inputtedStreet, inputtedCity, inputtedCounty);
            newContact.addresses.push(newAddress);
        });

        //display the contact's fullnames
        $("ul#contacts").append("<li><span class='contact'>" + newContact.firstName + " " + newContact.lastName + "</span></li>");






        $(".contact").last().click(function () {
            $("#show-contact").show();
            $("#show-contact h2").text(newContact.fullName());
            $(".first-name").text(newContact.firstName);
            $(".last-name").text(newContact.lastName);
            //display the contact's addresses
            $('ul#addresses').text('');
            newContact.addresses.forEach(function (address) {
                $("ul#addresses").append("<li>" + address.fullAddress() + "</li>");
            });
        });
        // Clear the input fields after submission
        $("input#new-first-name").val("");
        $("input#new-last-name").val("");
        $("input.new-street").val("");
        $("input.new-city").val("");
        $("input.new-county").val("");
    });
});
