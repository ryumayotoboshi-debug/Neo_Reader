// 仮の本データ（あとでdata.jsに分離可能）
const books = [
  {
    id: 1,
    title: "記録：都市ノイズ",
    content: `都市の音は、消えない。

ネオンの明滅と、
誰かの足音が重なる。

それでも、
ここには確かに生活がある。`
  },
  {
    id: 2,
    title: "断片ログ：第3層",
    content: `アクセス記録：不明

ノイズが混ざっている。
これは通信か、それとも記憶か。

判別不能。`
  }
];

// 要素取得
const homeScreen = document.getElementById("homeScreen");
const readerScreen = document.getElementById("readerScreen");
const bookList = document.getElementById("bookList");
const bookContent = document.getElementById("bookContent");
const bookTitle = document.getElementById("bookTitle");
const backBtn = document.getElementById("backBtn");

// 本一覧表示
function renderBooks() {
  books.forEach(book => {
    const div = document.createElement("div");
    div.className = "book-item";
    div.textContent = book.title;

    div.onclick = () => openBook(book);

    bookList.appendChild(div);
  });
}

// 本を開く
function openBook(book) {
  homeScreen.classList.remove("active");
  readerScreen.classList.add("active");

  bookTitle.textContent = book.title;
  bookContent.textContent = book.content;
}

// 戻る
backBtn.onclick = () => {
  readerScreen.classList.remove("active");
  homeScreen.classList.add("active");
};

// 初期化
renderBooks();
