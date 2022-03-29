import "./styles.css";

const onClickAdd = () => {
  //テキストBoxの内容を入力し、そのあとクリアする
  //alert();
  const inputText = document.getElementById("add-text").value;
  document.getElementById("add-text").value = "";

  createIncompleteList(inputText);
};

//関数で指定の要素を削除
const deleteFromIncompleteList = (target) => {
  document.getElementById("incomplete-list").removeChild(target);
};

//未完了リストに追加する関数
const createIncompleteList = (text) => {
  //div生成
  const div = document.createElement("div");
  div.className = "list-row";
  //console.log(div);

  //li生成
  const li = document.createElement("li");
  li.innerText = text;
  //console.log(li);
  //alert(inputText);

  //console.log(div);

  //button(完了)タグ
  const completeButton = document.createElement("button");
  completeButton.innerText = "完了";
  completeButton.addEventListener("click", () => {
    //完了ボタンの親タグdiv削除
    deleteFromIncompleteList(completeButton.parentNode);

    //完了ボタンの親タグdivを完了エリアに追加
    const addTarget = completeButton.parentNode;
    //TODOテキストを取得
    const text = addTarget.firstElementChild.innerText;

    //div以下を初期化
    addTarget.textContent = null;
    //console.log(addTarget);

    //liタグ生成
    const li = document.createElement("li");
    li.innerText = text;
    //console.log(li);
    //戻すボタンの生成
    const backButton = document.createElement("button");
    backButton.innerText = "戻す";
    backButton.addEventListener("click", () => {
      //戻すボタンの親タグを削除
      const deleteTarget = backButton.parentNode;
      document.getElementById("complete-list").removeChild(deleteTarget);
      //テキスト取得
      const test = backButton.parentNode.firstElementChild.innerText;
      createIncompleteList(text);
    });

    //divタグの各要素を設定
    addTarget.appendChild(li);
    addTarget.appendChild(backButton);
    //console.log(addTarget);
    //完了リストに追加
    document.getElementById("complete-list").appendChild(addTarget);
  });

  //button(削除)タグ
  const deleteButton = document.createElement("button");
  deleteButton.innerText = "削除";
  deleteButton.addEventListener("click", () => {
    //削除ボタンの親タグdiv削除
    deleteFromIncompleteList(deleteButton.parentNode);
  });

  //divタグのしたにliを入れる
  div.appendChild(li);
  div.appendChild(completeButton);
  div.appendChild(deleteButton);

  //未完了のリストに追加
  document.getElementById("incomplete-list").appendChild(div);
};

document
  .getElementById("add-buttom")
  .addEventListener("click", () => onClickAdd());
