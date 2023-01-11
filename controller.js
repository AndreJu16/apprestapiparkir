'use strict';

var response = require('./res');
var connection = require('./koneksi');

exports.index = function(req, res){
    response.ok("That Rest API Application Work!",res)
};

//menampilkan semua data lahan parkir
exports.showdataparkir = function(req,res){
    connection.query('SELECT * FROM dbparkirprojectla', function(error, rows, fields){
        if (error){
            console.log(error);
        }else {
            response.ok(rows, res)
        }
    });
};

//menampilkan semua data berdasarkan id 
exports.tampilberdasarkanid = function(req,res){
     let id = req.params.id;
     connection.query('SELECT * FROM dbparkirprojectla Where id = ?', [id],
        function(error, rows, fields){
            if(error){
                console.log(error);
            }else {
                response.ok(rows, res);
            }
        });
};

//Menambahkan data lahan parkir 
exports.tambahLahanparkir = function(req, res){
    var Zonasi = req.body.Zonasi;
    var Lokasi = req.body.Lokasi;
    var Kodelahan = req.body.Kodelahan;

    connection.query('INSERT INTO dbparkirprojectla (Zonasi,Lokasi,Kodelahan) VALUES(?,?,?)', 
    [Zonasi, Lokasi, Kodelahan],
    function (error, rows, fields){
        if(error){
            console.log(error);
        }else {
            response.ok("Berhasil Menambahkan Data!",res)
        }
    });
};

//mengubah data berdasarkan id 
exports.ubahdataLahan = function(req, res){
    var Id = req.body.Id;
    var Zonasi = req.body.Zonasi;
    var Lokasi = req.body.Lokasi;
    var Kodelahan = req.body.Kodelahan;

    connection.query('UPDATE dbparkirprojectla SET Zonasi=?, Lokasi=?, Kodelahan=? WHERE Id=?', [Zonasi,Lokasi,Kodelahan, Id],
        function(error, rows, fields){
            if(error){
                console.log(error);
            }else {
                response.ok("Berhasil Ubah Data", res)
            }
        });
}

//menghapus data berdasarkan id 
exports.hapusdataLahan = function(req, res) {
    var Id = req.body.Id;
    connection.query('DELETE FROM dbparkirprojectla WHERE Id=?', [Id],
    function (error, rows, fields) {
        if(error) {
            console.log(error);
        }else {
            response.ok("Berhasil Ubah Data", res)
        }
    });
}