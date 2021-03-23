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


      </div>

    </div>
  );
}

export default App;
