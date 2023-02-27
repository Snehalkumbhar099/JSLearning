function eligible(gradScore, hscScore, ssscore, candidateName) {
  if (gradScore >= 70 || hscScore >= 80 || ssscore >= 90) {
    console.log(
      `Congratulation ${candidateName} you are eligible for TCS interview`
    );
  } else {
    console.log(
      `unfortunately ${candidateName} you are not eligible for interview`
    );
  }
}
eligible(80, 86, 90, "snehal");
eligible(70, 65, 55, "shrikant");
eligible(60, 79, 88, "arvika");
