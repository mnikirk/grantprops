$(document).ready(function () {
    $("#year").text((new Date()).getFullYear());

    $(".notactive").hover(function () {
            $(this).addClass("nav-bottom");
    },
    function () {
        $(this).removeClass("nav-bottom");
    });
    
    $('#drp1 :checkbox').change(function () {
        var id = $(this).val();
        var tag = '#'+id;
        if($(tag).hasClass('d-flex')) {
            $(tag).addClass('d-none');
            $(tag).removeClass('d-flex');
        }
        else {
            $(tag).addClass('d-flex');
            $(tag).removeClass('d-none');
        }
    });
    
    $('#listBtn').click(function () {
        $('#map').toggle();
        $('#list').toggle();
        $(this).text($(this).text() == 'Map View' ? 'List View' : 'Map View');
    }); 
    
});

