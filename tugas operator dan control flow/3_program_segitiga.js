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
    console.log(segitiga)
}

//memasukan tinggi segitiga
funSegitiga(7);