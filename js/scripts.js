//BACK END LOGIC
function Contact(first, last) {
    this.firstName = first;
    this.lastName = last;
};
Contact.prototype.fullName = function() {
  return this.firstName + " " + this.lastName;
}


//FRONT END LOGIC
$(document).ready(function () {
    $("form#new-contact").submit(function (event) {
        event.preventDefault();

        var inputtedFirstName = $("input#new-first-name").val();
        var inputtedLastName = $("input#new-last-name").val();

        var newContact = new Contact(inputtedFirstName, inputtedLastName);

        $("ul#contacts").append("<li><span class='contact'>" + newContact.firstName + " " + newContact.lastName + "</span></li>");

        $("input#new-first-name").val("");
        $("input#new-last-name").val("");

        $(".contact").last().click(function () {
            $("#show-contact").show();
            $("#show-contact h2").text(newContact.fullName());
            $(".first-name").text(newContact.firstName);
            $(".last-name").text(newContact.lastName);
        });
    });
});
