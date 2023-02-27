function funSegitiga(tinggi) {
    let segitiga = "";
    //perulangan untuk tinggi segitiga
    for (let i = 1; i <= tinggi; i++) {
        //perulangan untuk lebar segitiga
        for (let x = 1; x <= i; x++) {
            segitiga += "* "
        }
        segitiga += "\n"
    }
    return segitiga
}

//memasukan tinggi segitiga
console.log(funSegitiga(7));