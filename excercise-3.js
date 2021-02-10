/*
3. Buat sebuah program yang menyediakan kalimat berikut sehingga user mendapatkan pencarian yang persis sama.
Bagaimana cara memulai usaha bisnis
Bootcamp impact byte
Status covid hari ini

*/

function search(item){
    let pattern = /^Bagaimana cara memulai usaha bisnis$|^Bootcamp impact byte$|^Status covid hari ini$/g;

    if(pattern.test(item)){
        console.log("Character found");
    }
    else{
        console.log("Character not found");
    }
}

search("Bootcamp impact byte");