$(document).ready(function() {
//   const devourBurger = () => {
//     console.log($(this).data('id'));
//   };
  const devourClick = $(document).on('click', '.devour-btn', devourBurger);
  const submitClick = $(document).on('click', '#submit', submitBurger);

  function devourBurger(event) {
      event.preventDefault();
      const id = $(this).data('id');
      $.ajax({
          method: 'PUT',
          data: { id: id, devoured: 1 },
          url: '/api/burgers'
      }).then(function(result) {
        if (result) {
            location.reload();
        }
      })
  }

  function submitBurger(event) {
    event.preventDefault();
    const burgerName = $('.input-burger').val();
    if (burgerName) {
        $.post('/api/burgers', { burger_name: burgerName }, function(result) {
            if (result) {
                location.reload();
            }
        })
    }
  }

});
