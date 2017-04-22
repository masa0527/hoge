
$(() => {
    $('.closeAction').on('click', function () {
        $('#fixedContent').addClass('panelClosed');
    });

    let map = new ol.Map({
        target: "map",
        renderer: ['canvas', 'dom'],
        layers: [
            new ol.layer.Tile({
                source: new ol.source.XYZ({
                    attributions: [
                        new ol.Attribution({
                            html: "<a href='http://maps.gsi.go.jp/development/ichiran.html' target='_blank'>地理院タイル</a>"
                        })
                    ],
                    url: "http://cyberjapandata.gsi.go.jp/xyz/std/{z}/{x}/{y}.png",
                    projection: "EPSG:3857"
                })
            })
        ],
        controls: ol.control.defaults({
            attributionOptions: ({
                collapsible: false
            })
        }),
        view: new ol.View({
            projection: "EPSG:3857",
            center: ol.proj.transform([138.7313889, 35.3622222], "EPSG:4326", "EPSG:3857"),
            maxZoom: 18,
            zoom: 5
        })
    });
});