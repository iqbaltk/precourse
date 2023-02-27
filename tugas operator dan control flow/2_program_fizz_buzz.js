function fizz_buzz(nilai) {
    //perulangan 1 sampai banyak nilai
    for (let i = 1; i <= nilai; i++) {
        //mencari fizz buzz
        if (i % 3 == 0 && i % 5 == 0) {
            console.log("Fizz Buzz")
        }else if(i % 3 == 0){
            console.log("Buzz")
        }else if(i % 5 == 0){
                console.log("Fizz")
        }else{
            console.log(i);
        }
    }
}

//memasukan jumlah nilai = 50
fizz_buzz(50);