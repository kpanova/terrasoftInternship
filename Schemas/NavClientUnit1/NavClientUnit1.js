define("NavClientUnit1", [],
    function () {
        return {
            init: function () {
            	
            	$('body').html('<div class="result"></div><div class="cinemaHall zal1"></div>');
                var cinemaHall1 = {
				    row: [10, 20, 30, 30, 30, 30, 30, 30, 30, 30, 30]
				  },
				  cinemaHallMap = '';
				$.each(cinemaHall1.row, function(row, numberOfSeats) {
				  cinemaHallRow = '';
				  for (i = 1; i <= numberOfSeats; i++) {
				    cinemaHallRow += '<div class="seat" data-row="' +
				      i + '" data-seat="' +
				      i + '"> </div>';
				  }
				  cinemaHallMap += cinemaHallRow + '<div class="passageBetween"> </div>';
				});
				
				$('.zal1').html(cinemaHallMap);
				$('.seat').on('click', function(e) {
				  $(e.currentTarget).toggleClass('bay');
				  this.showBaySeat();
				});
            },

            render: function () {
            },
            showBaySeat: function() {
			  result = '';
			  $.each($('.seat.bay'), function(key, item) {
			    result += '<div class="ticket">Ряд: ' +
			      $(item).data().row + ' Место:' +
			      $(item).data().seat + '</div>';
			  });
			
			  $('.result').html(result);
			}
        };
    });
function showBaySeat() {
  result = '';
  //ищем все места купленные и показываем список выкупленных мест
  $.each($('.seat.bay'), function(key, item) {
    result += '<div class="ticket">Ряд: ' +
      $(item).data().row + ' Место:' +
      $(item).data().seat + '</div>';
  });

  $('.result').html(result);
}