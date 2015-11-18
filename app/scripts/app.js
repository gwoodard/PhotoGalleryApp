(function () {
    document.addEventListener("deviceready", function () {
        //Adds the image 08.jpg to the list view when the Add button is clicked.
        window.listview = kendo.observable({
            addImage: function () {
                $("#images")
                    .data("kendoMobileListView")
                    .prepend(["images/08.jpg"]);
            }
        });
        var app = new kendo.mobile.Application(document.body, {
            skin: "nova"
        });
        //Each image that is stored in the images folder, are called in the dataSource array.
        //Then the images are called and displayed on the ListView of the applicaiton.
        $("#images").kendoMobileListView({
            dataSource: ["images/01.jpg", "images/02.jpg", "images/03.jpg", "images/04.jpg", "images/05.jpg", "images/06.jpg", "images/07.jpg"],
            template: "<img src = '#: data #'>"
        })
        navigator.splashscreen.hide();
    });
}());
