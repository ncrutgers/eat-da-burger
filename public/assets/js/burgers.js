// Wait to attach handlers until the DOM is loaded.
$(function() {
  // When class change-devour button is clicked, store it's data-id value and data-newdevour value to send to server as a PUT request
  $(".update-devour-state").on("click", function(event) {
    var id = $(this).data("id");
    // Changes devoured to a new state from false "0" to true "1"
    var newDevour = $(this).data("newdevour");

    var newDevourState = {
      devoured: newDevour
    };

    // Send the PUT request to client with id req.params.id & newDevourState req.body.devoured "1"
    $.ajax("/api/burgers/" + id, {
      type: "PUT",
      // object sent to server - body
      data: newDevourState
    }).then(
      function() {
        console.log("Devoured state changed to", newDevour);
        // Reload the page to get the updated list
        location.reload();
      }
    );
  });

  // When class create-form is submitted with submit button, store form's input value (id=#new-burger) entered by user to burger_name and set devoured to false "0"
  $(".insert-form").on("submit", function(event) {
    // preventDefault on a this submit event.
    event.preventDefault();

    var newBurger = {
      burger_name: $("#new-burger").val().trim(),
      devoured: 0
    };
    if (newBurger.burger_name == "") {
      console.log("No burger was added");
      return;
    }

    // Send the POST request.
    $.ajax("/api/burgers", {
      type: "POST",
      data: newBurger
    }).then(
      function(result) {
        // Reloads the page and new updated list is displayed
        location.reload();
      }
    );
  });
});
