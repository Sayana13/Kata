import './App.css';

function App(n) {


  return (
    <div className="App">
      <h1>Happy Birthday, Darling</h1>
    <p>As you may know, once some people pass their teens, they jokingly only celebrate their 20th or 21st birthday, forever. With some maths skills, that's totally possible - you only need to select the correct number base!

      For example, if they turn 32, that's exactly 20 - in base 16... Already 39? That's just 21, in base 19!

      Your task is to translate the given age to the much desired 20 (or 21) years, and indicate the number base, in the format specified below.

      Note: input will be always > 21

      Examples:
      32  -->  "32? That's just 20, in base 16!"
      39  -->  "39? That's just 21, in base 19!"
      Hint: if you don't know (enough) about numeral systems and radix, just observe the pattern!

    </p>
      `${n}? That's just ${20+ n % 2}, in base ${Math.floor(n/2)}!`

      <div>
        <p>Two of the numbers are positive numbers</p>
      {/*  function exactlyTwoArePositive(a, b, c) {*/}
      {/*  if((a > 0) && (b > 0) && (c<=0) || (a<=0) && (b > 0) && (c > 0) || (a > 0) && (b <= 0) && (c > 0)) {*/}
      {/*    return true;*/}
      {/*} else {*/}
      {/*    return false*/}
      {/*}*/}
      {/*}*/}
      <h3>Chuck Norris VII - True or False? (Beginner)</h3>
        <p>It's a well known fact that anything Chuck Norris wants, he gets. As a result Chuck very rarely has to use the word false.

          It is a less well known fact that if something is true, and Chuck doesn't want it to be, Chuck can scare the truth with his massive biceps, and it automatically becomes false.

          Your task is to be more like Chuck (ha! good luck!). You must return false without ever actually using the word false...

          Go show some truth who's boss!</p>
      {/*  function ifChuckSaysSo(){*/}
      {/*  return !true;*/}
      {/*}*/}
      <h3>Basic data types--Boolean and conditional statements if..else</h3>
        <p>In javascript, Boolean object only has two value, true or false. Use ===, ==, >, <, >=, <= between two variables(or constant), the result of such an expression is a bool value. The operation between the two bool values can be used with logical operators:&&, || or some bitwise operators:&, |, !, ^
          Many of the data are likely to be implicitly converted to Boolean values in a given context, most common in conditional statements. In other words, the Boolean value is mainly used for conditional judgment. Look this example:
          var arr=[];
          ...
          ...
          ......
          if (arr.length) return "arr has elements";
          else            return "arr is empty";
          You can see, arr is defined as an array, arr.length should be a number value, but in this example, the number value should convert to bool value. it means, if arr.length value is 0, convert value to false, if arr.length value is not 0, convert value to true.
          These values are converted to false in the conditional statement:
          0, -0, "", null, undefined, NaN
          Task
          Coding in function trueOrFalse, function accept 1 parameters:val, try to use the conditional statement if...else, if val value is false (val==false or it can convert to false), should return a string "false", if not, return a string "true".
          When you have finished the work, click "Run Tests" to see if your code is working properly.
          In the end, click "Submit" to submit your code pass this kata.
          Solution:
        {/*  function trueOrFalse(val){*/}
        {/*  if(val)return 'true';*/}
        {/*  else return 'false';*/}
        {/*}*/}
        </p>

        <h3>Simple Comparison? JavaScript</h3>
        <p>Write a function that will compare two values, one will be a number and one will be a string. Return true if they are the same character (regardless of their different data types) and return false if they are not.

          To make this challange harder and to promp the challenger to read up about coercion I have disabled some of the built in methods including .toString(), .join(), .split(), parseInt and .Number().</p>
      {/*  function add(a, b){*/}
      {/*  if(a == b ) return true;*/}
      {/*  return false;*/}
      {/*}*/}

      <h3>Is he gonna survive? JavaScript</h3>
        <p>A hero is on his way to the castle to complete his mission. However, he's been told that the castle is surrounded with a couple of powerful dragons! each dragon takes 2 bullets to be defeated, our hero has no idea how many bullets he should carry.. Assuming he's gonna grab a specific given number of bullets and move forward to fight another specific given number of dragons, will he survive?

          Return True if yes, False otherwise :)

          function hero(bullets, dragons){
            if (bullets >= dragons * 2) return true;
            return false;
          }
        </p>
      </div>

    </div>
  );
}

export default App;
