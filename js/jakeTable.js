(function ($) {

    $.widget("jake.jakeTable", {

        options: {
            model: [],
            rowSelect: false
        },

        $headerTable: null,
        $bodyTable: null,

        _create: function () {
            var $tablePlaceholder = this.element;
            $tablePlaceholder.hide();

            var headerTable = this._createHeaderTable();
            this.$headerTable = $(headerTable);
            $tablePlaceholder.after(this.$headerTable);
            var bodyTable = '<table><tbody></tbody></table>';
            this.$bodyTable = $(bodyTable);
            this.$headerTable.after(this.$bodyTable);

            this._getData();

            $(window).resize(this.resizeColumns.bind(this));
            this.resizeColumns.apply(this);
        },

        setTotalWidth: function ($element, width) {
            var border = $element.outerWidth() - $element.innerWidth();
            var padding = $element.innerWidth() - $element.width();
            var margin = $element.outerWidth(true) - $element.outerWidth();
            var newWidth = width - padding - margin - border;
            $element.width(newWidth);
        },

        resizeColumns: function () {
            var $headers = this.$headerTable.find('th');
            var $dataCells = this.$bodyTable.find('td');
            for (var i = 0; i < $headers.length; i++) {
                this.setTotalWidth($headers.eq(i), this.options.model[i].width);
            }
            for (var i = 0; i < $dataCells.length; i++) {
                var colIndex = i % $headers.length;
                this.setTotalWidth($dataCells.eq(i), this.options.model[colIndex].width);
            }
        },

        getDataSuccess: function (data, textStatus, jqXHR) {
            var rows = '';
            if (data.someData) {
                for (var i = 0; i < data.someData.length; i++) {
                    var row = '<tr>';
                    for (var key in data.someData[i]) {
                        row += '<td>' + data.someData[i][key] + '</td>'
                    }
                    rows += row;
                }
                rows += '</tr>';
                this.$bodyTable.find('tbody').append(rows);
            }
        },

        getDataError: function (data, textStatus, jqXHR) {
            alert('error');
        },

        _getData: function () {
            $.ajax(
                {
                    url: './data.json',
                    type: 'GET',
                    success: this.getDataSuccess.bind(this),
                    error: this.getDataError.bind(this)
                }
            );
        },

        _destroy: function () {
            this.$table.remove();
            this.element.show();
        },

        _createHeaderTable: function () {
            var table = ''
                + '<table>'
                + '<thead>';

            for (var i = 0; i < this.options.model.length; i++) {
                table += '<th>' + this.options.model[i].name + '</th>'
            }

            table += '</thead></table>';
            return table;
        }
    });
})(jQuery);