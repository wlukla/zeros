module.exports = function zeros(expression) {

  let arr = expression.split('*');
  let countFive = 0;
  let countTwo = 0;

  arr.forEach(element => {

    let match = element.match(/!/g).length;
    element = parseInt(element);

    for (element; element > 0; element -= match) {

      // counting 5s
      let t = element;
      while (t % 5 == 0) {
        countFive++;
        t /= 5;
      }

      //counting 2s
      t = element;
      while (t % 2 == 0) {
        countTwo++;
        t /= 2;
      }
    }
  });
  // is 2s enough?
  return countFive > countTwo ? countTwo : countFive;
}
