const airlines = ["ANA", "ADO", "IBX", "ORC", "SFJ", "SNA", "JAL", "HAC", "JAC", "SKY", "JST", "APJ", "FDA", "SJO", "VNL", "AHX", "WAJ"];



function checkAnswer(airline, answer) {
    if (!airlines.includes(airline)) {
        return "そのような３レターはありません。"
    }
    let words = airline.split("");

    words.forEach((word) => {
        // 一致している

        //含まれている

        // 一致していない
    });
}

// 解答となる文字列の作成
function selectAnswer() {
    return airlines[Math.floor(Math.random() * (airlines.length - 1))];
}