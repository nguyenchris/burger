$(document).ready(function () {
  $(document).on('click', '.devour-btn', devourBurger);
  $(document).on('click', '#submit', submitBurger);
  $(document).on('click', '.list-group-item', editBurger);
  $(document).on("blur", ".list-group-item", cancelEdit);
  $(document).on("keyup", ".list-group-item input", finishEdit);


  function devourBurger(event) {
    event.preventDefault();
    const id = $(this).data('id');
    $.ajax({
      method: 'PUT',
      data: { id: id, devoured: 1 },
      url: '/api/burgers'
    }).then(function (result) {
      if (result) {
        location.reload();
      }
    });
  }

  function submitBurger(event) {
    event.preventDefault();
    const burgerName = $('.input-burger input').val().trim();
    console.log(burgerName);
    if (burgerName) {
      $.post('/api/burgers', { burger_name: burgerName }, function (result) {
        if (result) {
          location.reload();
        }
      });
    } else {
      const div = $('<div class="alert alert-danger mx-auto" role="alert">You must enter a burger name!</div>');
      $('.input-row').append(div);

      setTimeout(function () {
        $('.alert').remove();
      }, 2200);
    }
  }

  function updateBurger(burger) {
    console.log(burger);
    $.ajax({
      method: "PUT",
      url: "/api/burgers",
      data: burger
    }).then(function() {
      console.log('changed name')
    });
  }

  function editBurger() {
    // const currentBurger = $(this).text().trim()
    const currentBurger = $(this).children('input.edit').data('burger')
    $(this).children().hide();
    $(this).children("input.edit").val(currentBurger)
    $(this).children("input.edit").show();
    $(this).children("input.edit").focus();
  }

  function cancelEdit() {
    const currentBurger = $(this).text().trim()
    if (currentBurger) {
      $(this).children().hide();
      $(this).children("input.edit").val(currentBurger);
      $(this).children("span").show();
      $(this).children("button").show();
    }
  }

  function finishEdit(event) {
    
    if (event.which === 13) {
      const newBurgerName = $(this).val();
      $(this).siblings('span').text(newBurgerName)
      const burgerId = $(this).data('id');
      const burgerObj = { burger_name: newBurgerName, id: burgerId }
      $(this).blur();
      updateBurger(burgerObj)
    }
  }
});
