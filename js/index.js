$(
    function () {
        var width = 100;//100 / 6;
        var colModel = [
            {
                name: 'serviceName',
                width: width
            },
            {
                name: 'businessAreaName',
                width: width
            },
            {
                name: 'workType',
                width: width
            },
            {
                name: 'statusName',
                width: width
            },
            {
                name: 'step',
                width: width
            },
            {
                name: 'errorMessage',
                width: width
            }
        ];
        $('#myTable').jakeTable({ model: colModel });
    }
);


/*(function ($) {
    var colModel = [
        { name: 'serviceName' },
        { name: 'businessAreaName' },
        { name: 'workType' },
        { name: 'statusName' },
        { name: 'step' },
        { name: 'errorMessage' }
    ];
    $('#myTable').jakeTable({ model: colModel });
})(jQuery);*/