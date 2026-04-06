const startbtn = document.querySelector(".startbtn");
const params = new URLSearchParams(window.location.search);
const username = params.get("user");
startbtn.onclick = function() {
    startbtn.style.display = "none";
    startbtn2.style.display = "none";
    const typingscreen = document.querySelector(".typing-screen");
    typingscreen.style.display = "flex";
    const typeword = document.querySelector(".type-word");
    const typeroma = document.querySelector(".type-roma");
    const displayscore = document.querySelector(".score");
    const displaytimer = document.querySelector(".timer");
    const resultscreen = document.querySelector(".result-screen");
    const finalscore = document.querySelector(".finalscore");
    const homebtn = document.querySelector(".home-btn");
    let timer = 40;
    const countdown = setInterval(() => {
        timer--;
        displaytimer.textContent = "残り時間： " + timer + "秒";
        if (timer <= 0) {
            clearInterval(countdown);
            showResult(score);
        }
    }, 1000);
    function showResult(score) {
        typingscreen.style.display = "none";
        finalscore.textContent = score;
        resultscreen.style.display = "flex";
    }
    homebtn.onclick = function() {
        location.reload();
    }
    const wordlist = [
        { kana: "こんにちは", roma: "konnnitiha" },
        { kana: "グレープフルーツ", roma: "gure-puhuru-tu" },
        { kana: "チョコレート", roma: "tyokore-to" },
        { kana: "ファミマ", roma: "famima" },
        { kana: "スカイダイビング", roma: "sukaidaibinngu" },
        { kana: "入学式", roma: "nyuugakusiki" },
        { kana: "インターネット", roma: "innta-netto" },
        { kana: "雪だるま", roma: "yukidaruma" },
        { kana: "教科書", roma: "kyoukasyo" },
        { kana: "郵便局", roma: "yuubinnkyoku" },
        { kana: "コンビニ", roma: "konnbini" },
        { kana: "東京スカイツリー", roma: "toukyousukaituri-" },
        { kana: "鬼にケツバット", roma: "oniniketubatto" },
        { kana: "洗濯科学のアリエーヌ", roma: "senntakukagakunoarie-nu" },
        { kana: "アソパソマソ", roma: "asopasomaso" }
    ];
    let currentword = {};
    let score = 0;
    let combo = 0;
    let currentindex = 0;
    function setNewWord() {
        currentword = wordlist[Math.floor(Math.random() * wordlist.length)];
        typeword.textContent = currentword.kana;
        typeroma.innerHTML = currentword.roma
            .split("")
            .map(char => `<span>${char}</span>`)
            .join("");
        currentindex = 0;
    }
    const displaycombo = document.querySelector(".combo");
    setNewWord();
    document.addEventListener("keydown", (e) => {
        const key = e.key.toLowerCase();
        if (key.length !== 1) return;
        if (key === currentword.roma[currentindex]) {
            const spans = typeroma.querySelectorAll("span");
            if (spans[currentindex]) {
                spans[currentindex].classList.add("typed");
            }
            currentindex++;
            combo++;
            const basescore = 100;
            let multiplier;
            if (username !== "noob") {
                multiplier = 1 + (combo * 0.15);
            } else {
                multiplier = 1 + (combo * 0.5);
            }
            const thisscore = Math.floor(basescore * multiplier);
            score += thisscore;
            displayscore.textContent = `スコア： ${score}`;
            displaycombo.textContent = `コンボ： ${combo}`;
            if (currentindex === currentword.roma.length) {
                currentindex = 0;
                setNewWord();
            }
        } else {
            combo = 0;
            displaycombo.textContent = `コンボ： ${combo}`;
            displayscore.textContent = `スコア： ${score}`;
        }
    })
};
const startbtn2 = document.querySelector(".startbtn2");
startbtn2.onclick = function() {
    startbtn.style.display = "none";
    startbtn2.style.display = "none";
    const typingscreen = document.querySelector(".typing-screen");
    typingscreen.style.display = "flex";
    const typeword = document.querySelector(".type-word");
    const typeroma = document.querySelector(".type-roma");
    const displayscore = document.querySelector(".score");
    const displaytimer = document.querySelector(".timer");
    const resultscreen = document.querySelector(".result-screen");
    const finalscore = document.querySelector(".finalscore");
    const homebtn = document.querySelector(".home-btn");
    let timer = 40;
    const countdown = setInterval(() => {
        timer--;
        displaytimer.textContent = "残り時間： " + timer + "秒";
        if (timer <= 0) {
            clearInterval(countdown);
            showResult(score);
        }
    }, 1000);
    function showResult(score) {
        typingscreen.style.display = "none";
        finalscore.textContent = score;
        resultscreen.style.display = "flex";
    }
    homebtn.onclick = function() {
        location.reload();
    }
    const wordlist = [
        { kana: "太陽の表面温度は？", roma: "rokusenndo" },
        { kana: "地球の公転周期は？", roma: "itinenn" },
        { kana: "太陽に一番近い惑星は？", roma: "suisei" },
        { kana: "日本の首都は？", roma: "toukyou" },
        { kana: "日本で２番目に面積が大きい都道府県は？", roma: "iwatekenn" },
        { kana: "世界一面積がでかい国は？", roma: "rosia" },
        { kana: "コンビニの正式名称は？", roma: "konnbiniennsusutoa" },
        { kana: "織田信長がホトトギスに言った言葉は？", roma: "nakanunarakorositesimaehototogisu" },
        { kana: "豊臣秀吉がホトトギスに言った言葉は？", roma: "nakanunaranakasetemiseyouhototogisu" },
        { kana: "徳川家康がホトトギスに言った言葉は？", roma: "nakanunaranakumadematouhototogisu" },
        { kana: "今の総理大臣は？", roma: "takaitisanae" },
        { kana: "「奇想天外」この読み方は？", roma: "kisoutenngai" },
        { kana: "氷点下５℃は何℃？", roma: "mainasugodo" },
        { kana: "朝起きられないのは何のせい？", roma: "youkainosei" },
        { kana: "キリンの鳴き声は？", roma: "mo-" },
        { kana: "初代ポケモンの舞台は？", roma: "kannto-tihou" },
        { kana: "「魑魅魍魎」この読み方は？", roma: "timimouryou" },
        { kana: "大好きだった犬はもう居ぬ", roma: "daisukidattainuhamouinu" },
        { kana: "鹿を叱る", roma: "sikawosikaru" },
        { kana: "猫が寝込む", roma: "nekoganekomu" },
        { kana: "サイの最期", roma: "sainosaigo" },
        { kana: "ダジャレかよ！！", roma: "dajarekayo" },
        { kana: "目の下にクマがある熊", roma: "menositanikumagaarukuma"},
        { kana: "オヤジギャグかよ！！！", roma: "oyazigyagukayo"}
    ];
    let currentword = {};
    let score = 0;
    let combo = 0;
    let currentindex = 0;
    function setNewWord() {
        currentword = wordlist[Math.floor(Math.random() * wordlist.length)];
        typeword.textContent = currentword.kana;
        typeroma.innerHTML = currentword.roma
            .split("")
            .map(char => `<span>${char}</span>`)
            .join("");
        currentindex = 0;
    }
    const displaycombo = document.querySelector(".combo");
    setNewWord();
    document.addEventListener("keydown", (e) => {
        const key = e.key.toLowerCase();
        if (key.length !== 1) return;
        if (key === currentword.roma[currentindex]) {
            const spans = typeroma.querySelectorAll("span");
            if (spans[currentindex]) {
                spans[currentindex].classList.add("typed");
            }
            currentindex++;
            combo++;
            const basescore = 100;
            let multiplier;
            if (username !== "noob") {
                multiplier = 1 + (combo * 0.35);
            } else {
                multiplier = 1 + (combo * 0.6);
            }
            const thisscore = Math.floor(basescore * multiplier);
            score += thisscore;
            displayscore.textContent = `スコア： ${score}`;
            displaycombo.textContent = `コンボ： ${combo}`;
            if (currentindex === currentword.roma.length) {
                currentindex = 0;
                setNewWord();
            }
        } else {
            combo = 0;
            displayscore.textContent = `スコア： ${score}`;
            displaycombo.textContent = `コンボ： ${combo}`;
        }
    })
};
const mgmtbtn = document.querySelector(".mgmtbtn");
const FBbtn = document.querySelector(".FBbtn");
const expbtn = document.querySelector(".expbtn");
// ?user=yuseiじゃない場合
if (username !== "Admin") {
    mgmtbtn.style.display = "none";
} else {
    if (FBbtn) {
        FBbtn.style.top = "20px";
        FBbtn.style.right = "160px";
    }
    if (expbtn) {
        expbtn.style.top = "20px";
        expbtn.style.right = "300px";
    }
};
const closebtn = document.querySelector(".close-btn");
mgmtbtn.onclick = function() {
    const adminbtn = prompt("Please enter the Admin code：");
    if (adminbtn === null) return
    // 入力された値が隠しコードと一致するかチェック
    if (adminbtn === "undefined") {
        alert("Access Granted");
        const mgmtscreen = document.querySelector(".mgmt-screen");
        const mgmtbackscreen = document.querySelector(".mgmt-back-screen");
        if (mgmtscreen) {
            mgmtscreen.style.display = "flex";
        }
        if (mgmtbackscreen) {
            mgmtbackscreen.style.display = "block";
        }
    } else {
        alert("Access Denied");
    }
};
const mgmtbackscreen = document.querySelector(".mgmt-back-screen");
closebtn.onclick = function() {
    const mgmtscreen = document.querySelector(".mgmt-screen");
    if (mgmtscreen) {
        mgmtscreen.style.display = "none";
    }
    if (mgmtbackscreen) {
        mgmtbackscreen.style.display = "none";
    }
};