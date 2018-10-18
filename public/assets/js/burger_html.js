$(function() {
    $(".devoured").on("click", function(event) {
     let id = $(this).data("id");
      console.log("this is id:", id)
  
      let newDevouredState = {
        devoured: 1
      };
  
      $.ajax("/api/burger/" + id, {
        type: "PUT",
        data: newDevouredState
      }).then(function() {
        location.reload();
      });
    });
  
    $(".create-form").on("submit", function(event) {
      event.preventDefault();
  
      let newBurger = {
        burger_name: $("#ca")
          .val()
          .trim(),
      devoured: 0
      };
      console.log("this is new burger", newBurger);
      $.ajax("/api/burger", {
        type: "POST",
        data: newBurger
      }).then(function() {
        console.log("created new burger. Get ready to devour it!");
        location.reload();
      });
    });
  });