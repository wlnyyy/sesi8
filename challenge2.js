const number= Number(prompt("masukkan angka 1-100"));

    if(number >80 && number <=100){
      alert("your grade is A");
    } else if( number>60 && number <=80){
        alert("your grade is B");
    } else if(number>40 && number <=60){
        alert("your grade is C");
    } else if(number>0 && number<=40){
        alert("your grade is D");
    } else{
        alert("cannot calculate your grade");
    }

