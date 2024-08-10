function addPlayer() {
  let players = [];
  let checkbox = document.querySelectorAll('input[type="checkbox"]:checked');
  checkbox.forEach((item) => {
    let player = document.querySelector(
      'label[for="' + item.id + '"] .playerName'
    ).innerHTML;
    let playerImg = document.querySelector(
      'label[for="' + item.id + '"] img'
    ).src;
    players.push(player + " " + playerImg);
  });
  colorSelected();
  console.log(players);
}
function colorSelected() {
  let checkbox = document.querySelectorAll('input[type="checkbox"]:checked');
  checkbox.forEach((item) => {
    item.parentElement.style.backgroundColor = "#ffe191";
  });
  //if unchecked
  let checkboxUnchecked = document.querySelectorAll(
    'input[type="checkbox"]:not(:checked)'
  );
  checkboxUnchecked.forEach((item) => {
    item.parentElement.style.backgroundColor = "#ffebbb";
  });
}
function askQuestion() {
  let questions = [
    "Кой от групата харесваш най-малко?",
    "Кой от групата е най-много харесваш?",
    "Кой от групата би ти помогнал в най-трудния момент?",
    "Кой от групата би ти казал най-тежката истина?",
    "Кой от групата би ти издал най-голямата тайна?",
    "Кой от групата би ти помогнал да скриеш труп тайна?",
    "Кой от групата си харесвал?",
    "Кой от групата си е харесвал теб?",
    "С кого от групата би спал?",
    "Кой от групата те дразни много?",
    "Кой от групата те е разочаровал?",
    "Кой от групата е най-голям клюкар?",
    "Кой от групата е най-голям пияница?",
    "Кой от групата е най-голям лъжец?",
    "Кой от групата е най-грозен?",
    "Кой от групата е най-красив?",
    "Кой от групата е най-умен?",
    "Кой от групата е най-добър приятел?",
    "Кой от групата е най-голям готвач?",
    "Кой от групата би умрял по нелеп начин",
    "Кой от групата би убил някого?",
    "Кой от групата би се оженил за пари?",
    "Кой от групата искаш да видиш гол?",
    "На кого от групата му е най-голям според теб?",
    "Кой от групата е тайно гей според теб?",
    "Кой от групата е най-много се фука?",
    "Кой от групата яде най-много?",
    "Кой от проси постоянно?",
    "Кой от групата е най-голям кифлар?",
    "Кой от групата има най-голяма бройка?",
    "Кой от групата си върви на ръчка всекидневно?",
    "На кого от групата му е най-малък?",
    "Кой от групата е най-голям критик?",
    "Кой от групата е най-голям плейбой?",
    "Кой от групата е най-голям мамин син?",
    "Кой от ти дължи пари?",
    "Кой от групата би се смял на погребение?",
    "Кой от групата би пикал в басейн?",
    "Кой от групата би набил още намига?",
    "Кой от групата би лапал за пари?",
    "На кого от групата би лапал за пари?",
    "Кой от групата те вдъхновява най-много и защо?",
    "Кой от групата те е научил най-много?",
    "Кой от групата ти е казвал най-голямата лъжа?",
    "Кой от групата си виждал гол?"
    ];
    let randomQuestion = Math.floor(Math.random() * questions.length);
    document.querySelector("#question").innerHTML = questions[randomQuestion];
}
    function drinkAmount() {
        let paragraph = document.getElementById("drinkamount");
        let random = Math.floor(Math.random() * 3);
        paragraph.innerHTML = random;
    }
