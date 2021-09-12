
// pakai while
let count = 0;
let ulang = false;
let urutan = false;

while (ulang === false) {
  count++;
  console.log("Halo, saya orang urutan ke-" + count);

  if (count === 20) {
    urutan = true;
  }

  if (urutan === true) {
    ulang = true;
  }
}

// pakai for
const nomor = 20;

for (let i = 0; i <= nomor; i++) {
  console.log("Halo, saya orang urutan ke-" + i);
}


// ganjil pakai for
var ourArray=[];
for (var i=1; i<21; i=i+2){
    console.log("Halo, saya orang urutan ke-" + i);
}

//perulangan ke samping
const chorus = '0000 ';

console.log(`perulangan: ${chorus.repeat(100)}`);

