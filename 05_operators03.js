function eligible(gradScore,hscScore,ssscore,candidateName) {

 var result =   (gradScore>=70 || hscScore>=80 || ssscore>=90 ) ?`Congratulation ${candidateName} you are eligible for TCS interview` :`unfortunately ${candidateName} you are not eligible for interview`;
    return result;
}
 var result = eligible(80,86,90,"snehal");
 console.log(result);
 var result = eligible(70,65,55,"shrikant");
 console.log(result);
 var result = eligible(60,79,88,"arvika");
 console.log(result);