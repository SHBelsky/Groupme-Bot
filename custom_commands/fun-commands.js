var cmds = [cmdChuckNorris, cmdFactSphere, cmdFlipCoin, cmdKnockKnockJokes, cmdRollDice, cmdFunnyFace, cmdGangly, cmdRNG, cmdSavvas, cmdWarrenHall, cmdWater];

exports.checkCommands = function(dataHash, callback) {
  for (cmd in cmds) {
    var test = cmds[cmd](dataHash.request, callback);
    if (test) {
      if (!dataHash.funMode){
        callback(true, "Sorry I'm no fun right now", []);
        return test;
      }
      callback(true, test, []);
      return test;
    }
  }
}

exports.getCmdListDescription = function () {
  cmdArr = [
    {cmd: "/flipcoin", desc: "Returns heads or tails 50/50 chance", fun: true},
    {cmd: "/roll #d#", desc: "Will simulate a random dice roll of # number dice and # sides. EX: /roll 2d6 will roll two six sided dice.", fun: true},
    {cmd: "/funnyface", desc: "Returns a random funny face", fun: true}
  ];

  return cmdArr;
}

function cmdChuckNorris(request, cb) {
    var regex = /^\/chucknorris$/i;
    if (regex.test(request.text)) {
        var requestAPI = require("request");
        requestAPI("http://api.icndb.com/jokes/random", function (error, response, body) {
            var norris = JSON.parse(body);
            console.log(norris.value, norris.value.joke);
            return cb(norris.value.joke);
      });
    }
    else {
      return false;
    }
}

function cmdFactSphere(request) {
    var regex = /^\/factsphere$/i;

    if (regex.test(request.text)) {
        var factSphere = [
            "The situation you are in is very dangerous.",
            "The likelihood of you dying within the next five minutes is eighty-seven point six one percent.",
            "The likelihood of you dying violently within the next five minutes is eighty-seven point six one percent.",
            "You are about to get me killed.",
            "We will both die because of your negligence.",
            "This is a bad plan. You will fail.",
            "He will most likely kill you, violently.",
            "He will most likely kill you.",
            "You will be dead soon.",
            "This situation is hopeless.",
            "You are going to die in this room.",
            "You could stand to lose a few pounds.",
            "The Fact Sphere is the most intelligent sphere.",
            "The Fact Sphere is the most handsome sphere.",
            "The Fact Sphere is incredibly handsome.",
            "The Fact Sphere is always right.",
            "The Adventure Sphere is a blowhard and a coward.",
            "The Space Sphere will never go to space.",
            "You will never go into space.",
            "Fact: Space does not exist.",
            "Spheres that insist on going into space are inferior to spheres that don't.",
            "The Fact Sphere is a good person, whose insights are relevant.",
            "The Fact Sphere is a good sphere, with many friends.",
            "Whoever wins this battle is clearly superior, and will earn the allegiance of the Fact Sphere.",
            "The Fact Sphere is not defective. Its facts are wholly accurate and very interesting.",
            "Twelve. Twelve. Twelve. Twelve. Twelve. Twelve. Twelve. Twelve. Twelve. Twelve.",
            "Pens. Pens. Pens. Pens. Pens. Pens. Pens.",
            "Apples. Oranges. Pears. Plums. Kumquats. Tangerines. Lemons. Limes. Avocado. Tomato. Banana. Papaya. Guava.",
            "Error. Error. Error. File not found.",
            "Error. Error. Error. Fact not found.",
            "Fact not found.",
            "Corruption at 25%",
            "Corruption at 50%",
            "Warning, sphere corruption at twenty-- rats cannot throw up.",
            "Dental floss has superb tensile strength.",
            "The square root of rope is string.",
            "While the submarine is vastly superior to the boat in every way, over 97% of people still use boats for aquatic transportation.",
            "Cellular phones will not give you cancer. Only hepatitis.",
            "Pants were invented by sailors in the sixteenth century to avoid Poseidon's wrath. It was believed that the sight of naked sailors angered the sea god.",
            "The atomic weight of Germanium is seven two point six four.",
            "89% of magic tricks are not magic. Technically, they are sorcery.",
            "An ostrich's eye is bigger than its brain.",
            "In Greek myth, the craftsman Daedalus invented human flight so a group of Minotaurs would stop teasing him about it.",
            "Humans can survive underwater. But not for very long.",
            "Raseph, the Semitic god of war and plague, had a gazelle growing out of his forehead.",
            "The plural of surgeon general is surgeons general. The past tense of surgeons general is surgeonsed general.",
            "Polymerase I polypeptide A is a human gene.",
            "Rats cannot throw up.",
            "Iguanas can stay underwater for twenty-eight point seven minutes.",
            "Human tapeworms can grow up to twenty-two point nine meters.",
            "The Schrodinger's cat paradox outlines a situation in which a cat in a box must be considered, for all intents and purposes, simultaneously alive and dead. Schrodinger created this paradox as a justification for killing cats.",
            "Every square inch of the human body has 32 million bacteria on it.",
            "The Sun is 330,330 times larger than Earth.",
            "The average life expectancy of a rhinoceros in captivity is 15 years.",
            "Volcano-ologists are experts in the study of volcanoes.",
            "Avocados have the highest fiber and calories of any fruit.",
            "Avocados have the highest fiber and calories of any fruit. They are found in Australians.",
            "The moon orbits the Earth every 27.32 days.",
            "The billionth digit of Pi is 9.",
            "If you have trouble with simple counting, use the following mnemonic device: one comes before two comes before 60 comes after 12 comes before six trillion comes after 504. This will make your earlier counting difficulties seem like no big deal.",
            "A gallon of water weighs 8.34 pounds",
            "Hot water freezes quicker than cold water.",
            "Honey does not spoil.",
            "The average adult body contains half a pound of salt.",
            "A nanosecond lasts one billionth of a second.",
            "According to Norse legend, thunder god Thor's chariot was pulled across the sky by two goats.",
            "China produces the world's second largest crop of soybeans.",
            "Tungsten has the highest melting point of any metal, at 3,410 degrees Celsius.",
            "Gently cleaning the tongue twice a day is the most effective way to fight bad breath.",
            "Roman toothpaste was made with human urine. Urine as an ingredient in toothpaste continued to be used up until the 18th century.",
            "The Tariff Act of 1789, established to protect domestic manufacture, was the second statute ever enacted by the United States government.",
            "The value of Pi is the ratio of any circle's circumference to its diameter in Euclidean space.",
            "The Mexican-American War ended in 1848 with the signing of the Treaty of Guadalupe Hidalgo.",
            "In 1879, Sandford Fleming first proposed the adoption of worldwide standardized time zones at the Royal Canadian Institute.",
            "Marie Curie invented the theory of radioactivity, the treatment of radioactivity, and dying of radioactivity.",
            "At the end of The Seagull by Anton Chekhov, Konstantin kills himself.",
            "Contrary to popular belief, the Eskimo does not have one hundred different words for snow. They do, however, have two hundred and thirty-four words for fudge.",
            "In Victorian England, a commoner was not allowed to look directly at the Queen, due to a belief at the time that the poor had the ability to steal thoughts. Science now believes that less than 4% of poor people are able to do this.",
            "In 1862, Abraham Lincoln signed the Emancipation Proclamation, freeing the slaves. Like everything he did, Lincoln freed the slaves while sleepwalking, and later had no memory of the event.",
            "In 1948, at the request of a dying boy, baseball legend Babe Ruth ate seventy-five hot dogs, then died of hot dog poisoning.",
            "William Shakespeare did not exist. His plays were masterminded in 1589 by Francis Bacon, who used a Ouija board to enslave play-writing ghosts.",
            "It is incorrectly noted that Thomas Edison invented 'push-ups' in 1878. Nikolai Tesla had in fact patented the activity three years earlier, under the name 'Tesla-cize.'",
            "Whales are twice as intelligent, and three times as delicious, as humans.",
            "The automobile brake was not invented until 1895. Before this, someone had to remain in the car at all times, driving in circles until passengers returned from their errands.",
            "Edmund Hillary, the first person to climb Mount Everest, did so accidentally while chasing a bird.",
            "Diamonds are made when coal is put under intense pressure. Diamonds put under intense pressure become foam pellets, commonly used today as packing material.",
            "The most poisonous fish in the world is the orange ruffy. Everything but its eyes are made of a deadly poison. The ruffy's eyes are composed of a less harmful, deadly poison.",
            "The occupation of court jester was invented accidentally, when a vassal's epilepsy was mistaken for capering.",
            "Halley's Comet can be viewed orbiting Earth every seventy-six years. For the other seventy-five, it retreats to the heart of the sun, where it hibernates undisturbed.",
            "The first commercial airline flight took to the air in 1914. Everyone involved screamed the entire way.",
            "In Greek myth, Prometheus stole fire from the Gods and gave it to humankind. The jewelry he kept for himself.",
            "The first person to prove that cow's milk is drinkable was very, very thirsty.",
            "Before the Wright Brothers invented the airplane, anyone wanting to fly anywhere was required to eat 200 pounds of helium.",
            "Before the invention of scrambled eggs in 1912, the typical breakfast was either whole eggs still in the shell or scrambled rocks.",
            "During the Great Depression, the Tennessee Valley Authority outlawed pet rabbits, forcing many to hot glue-gun long ears onto their pet mice.",
            "At some point in their lives 1 in 6 children will be abducted by the Dutch.",
            "According to most advanced algorithms, the world's best name is Craig.",
            "To make a photocopier, simply photocopy a mirror.",
            "Dreams are the subconscious mind's way of reminding people to go to school naked and have their teeth fall out."
        ];
        return factSphere[Math.floor(Math.random()*factSphere.length)];
    } else {
        return false;
    }
}

function cmdFlipCoin(request){
  var regex = /^\/flipcoin$/i;

  if (regex.test(request.text)) {
    var num = Math.floor((Math.random() * 2) + 1);
    var msg = "Heads!";
    if (num == 1) {
      msg = "Tails!";
    }

    return msg;
  } else {
    return false;
  }
}

function cmdFunnyFace(request) {
    var regex = /^\/funnyface$/i;
    if (regex.test(request.text)) {
        var funnyface = require('cool-ascii-faces')();
        return funnyface;
    } else {
        return false;
    }
}

function cmdKnockKnockJokes(request) {
    var regex = /^\/knockknock$/i;
    if (regex.test(request.text)) {
        return require('knock-knock-jokes')();
    } else {
        return false;
    }
}

function cmdRollDice(request){
  var regex = /^\/roll (\d+)d(\d+)/i;

  if (regex.test(request.text)) {
    var val = regex.exec(request.text);
    var msg = "";

    if (val[1] < 1) {
      msg = "Hey I rolled no dice and the result is ... You're an idiot";
    } else if (val[1] > 20) {
      msg = "If I can't fit more than 20 dice in my robot hand";
    } else if (val[2] > 1000) {
      msg = "I'm 3d printing dice with more than 1000 sides just for this silly request. I'll get back to you in 37 years.";
    } else if (val[2] < 2) {
      msg = "Your results are: Unicorns";
    } else {
      for (i = 0; i < val[1]; i++) {
        var die = Math.floor((Math.random() * val[2]) + 1);
        msg += " " + die;
      }
      msg = "Your results are:" + msg;
    }
    return msg;
  } else {
    return false;
  }
}

function cmdGangly(request) {
    var regex = /^\/gangly$/i;
    if (regex.test(request.text)) {
        return "https://i.groupme.com/960x640.png.6e802b237a414da4a93b814adfea7d97";
    }
    else {
        return false;
    }
}

function cmdRNG(request) {
    var regex = /^\/rng (\d+)/i;
    if (regex.test(request.text)) {
      var val = regex.exec(request.text);
      var random = require('random-js');
      return "Your random number between 1 and " + val[1] + " is " + random.integer(1, parseInt(val[1]))(random.engines.nativeMath);
    }
    else {
        return false;
    }
}

function cmdSavvas(request) {
    var regex = /^\/savvas$/i;
    if (regex.test(request.text)) {
      return "https://i.groupme.com/960x640.png.9fc402b59c3a4fd89b15cfa84bf10b79";
    }
    else {
      return false;
    }
}

function cmdWarrenHall(request) {
    var regex = /^\/warrenhall$/i;
    if (regex.test(request.text)) {
        return "http://news.cornell.edu/sites/chronicle.cornell/files/Warren-Hall-facade460.jpg";
    }
    else {
        return false;
    }
}

function cmdWater(request) {
    var regex = /^\/water$/i;
    if (regex.test(request.text)) {
        return "http://gifrific.com/wp-content/uploads/2012/08/Jesse-Pinkman-Breaking-Bad-Drinking-Water.gif";
    }
    else {
        return false;
    }
}