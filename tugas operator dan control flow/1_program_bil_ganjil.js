function ganjil(nilai) {
    //perulangan 1 sampai banyak nilai
    for (let i = 1; i <= nilai; i++) {
        //mencari bilangan ganjil
        if (i % 2 !== 0) {
            console.log(i)
        }
    }
}

//memasukan banyak nilai = 100
ganjil(100);