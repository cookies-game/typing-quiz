const startbtn = document.querySelector(".startbtn");
startbtn.onclick = function() {
    startbtn.style.display = "none";
    const typingscreen = document.querySelector(".typing-screen");
    typingscreen.style.display = "flex";
    const typeword = document.querySelector(".type-word");
    const typeroma = document.querySelector(".type-roma");
    const displayscore = document.querySelector(".score");
    const displaytimer = document.querySelector(".timer");
    let timer = 30;
    const countdown = setInterval(() => {
        timer--;
        displaytimer.textContent = "残り時間： " + timer + "秒";
        if (timer <= 0) {
            clearInterval(countdown);
            alert("スコア" + score + "!!");
            location.reload();
        }
    }, 1000);
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
        { kana: "洗濯科学のアリエーヌ", roma: "senntakukagakunoarie-nu" }
    ];
    let currentword = {};
    let score = 0;
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
            score += 100;
            displayscore.textContent = "スコア： " + score;
            if (currentindex === currentword.roma.length) {
                currentindex = 0;
                setNewWord();
            }
        }
    })
};
const params = new URLSearchParams(window.location.search);
const username = params.get("user");
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
mgmtbtn.onclick = function() {
    const adminbtn = prompt("Please enter the Admin code：");
    if (adminbtn === null) return
    // 入力された値が隠しコードと一致するかチェック
    if (adminbtn === "undefined") {
        alert("Access Granted");
        const mgmtscreen = document.querySelector(".mgmt-screen");
        if (mgmtscreen) {
            mgmtscreen.style.setProperty("display", "flex", "important");
        }
    } else {
        alert("Access Denied");
    }
};
const closebtn = document.querySelector(".close-btn");
closebtn.onclick = function() {
    const mgmtscreen = document.querySelector(".mgmt-screen");
    if (mgmtscreen) {
        mgmtscreen.style.setProperty("display", "none", "important");
    }
};