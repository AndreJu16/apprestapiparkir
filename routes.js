'use strict';

module.exports = function(app) {
    var jsonku = require('./controller');

    app.route('/')
        .get(jsonku.index);

    app.route('/tampil')
        .get(jsonku.showdataparkir);

    app.route('/tampil/:Id')
        .get(jsonku.tampilberdasarkanid);
    
    app.route('/tambah')
        .post(jsonku.tambahLahanparkir);
    
    app.route('/ubah')
        .put(jsonku.ubahdataLahan);

    app.route('/hapus')
        .delete(jsonku.hapusdataLahan);
}