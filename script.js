var windowHeight = $(window).height();
    var menuBarHeight = $("#menuBar").height();
    // alert(windowHeight);// to check height of window
    // alert(menuBarHeight);//to check height of menuBarHeight
    var codeContainerHeight = windowHeight - menuBarHeight;
    $(".codeContainer").height(codeContainerHeight + "px");
    $(".toggle").click(function() {
        $(this).toggleClass("selected");

        var activeDiv = $(this).html();

        $("#" + activeDiv + "Container").toggle();

        var showingDivs = $(".codeContainer").filter(function() {
            return ($(this).css("display") != "none");
        }).length;

        //alert(showingDivs);// to check no. of div shown on screen

        var width = 100 / showingDivs; //diviing spaces to divs

        $(".codeContainer").width(width + "%");

    });

    $("#runButton").click(function() {
        $("iframe").contents().find("html").html('<style>' + $("#cssCode").val() + '</style>' + $("#htmlCode").val());

        document.getElementById("resultFrame").contentWindow.eval($("#jsCode").val()); // js running security issues , contentwindow to solve in iframe
    });