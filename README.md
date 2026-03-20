# HTML & CSS 虎の巻

CSS と HTML の学習用リポジトリです。このページで使ったタグやプロパティを振り返り用にまとめています。  
**この README を読むだけで HTML と CSS の基本が書けるようになること**を目標にしています。

---

## 目次

1. [HTMLの基本構造](#htmlの基本構造)
2. [HTMLタグ一覧](#htmlタグ一覧)
3. [フォーム関連タグ](#フォーム関連タグ)
4. [CSSの基本](#cssの基本)
5. [CSSプロパティ一覧](#cssプロパティ一覧)
6. [CSSセレクター](#cssセレクター)
7. [VS Code 設定メモ](#vs-code-設定メモ)

---

## HTMLの基本構造

HTML ファイルは必ず以下の骨格から始まる。

```html
<!DOCTYPE html>
<html lang="ja">

<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>ページのタイトル</title>
  <link rel="stylesheet" href="./assets/css/style.css">
</head>

<body>
  <!-- ここに表示したい内容を書く -->
</body>

</html>
```

### 各部分の説明

| 行 | 意味 |
|----|------|
| `<!DOCTYPE html>` | 「これは HTML5 で書いたファイルです」とブラウザに宣言する。必ず1行目に書く。 |
| `<html lang="ja">` | HTML 全体を囲むタグ。`lang="ja"` で日本語ページであることを示す。 |
| `<head>` | ブラウザへの設定情報を書く場所。**画面には表示されない**。 |
| `<meta charset="UTF-8">` | 文字コードを UTF-8 に設定。日本語が文字化けしないように必須。 |
| `<meta name="viewport" ...>` | スマホでも正しく表示されるよう設定。レスポンシブデザインに必要。 |
| `<title>` | ブラウザのタブに表示されるページタイトル。 |
| `<link rel="stylesheet" href="...">` | 外部 CSS ファイルを読み込む。 |
| `<body>` | 画面に表示したい内容を書く場所。 |

### タグの書き方の基本

HTML は「開始タグ」と「終了タグ」でコンテンツを挟む。

```html
<タグ名>内容</タグ名>
```

**属性**を使うことでタグに追加情報を渡せる。

```html
<タグ名 属性名="値">内容</タグ名>

<!-- 例 -->
<a href="https://example.com">リンク</a>
<img src="photo.png" alt="写真">
```

**自己閉じタグ**（終了タグが不要なタグ）もある。

```html
<img src="photo.png" alt="写真">
<input type="text">
<br>
```

### コメントの書き方

```html
<!-- これはコメントです。ブラウザには表示されません -->
```

ショートカット: `Cmd + /`（選択範囲もコメント化できる）

---

## HTMLタグ一覧

### 見出し `<h1>` 〜 `<h6>`

数字が小さいほど大きい見出し。ページの構造を示す重要なタグ。  
**`<h1>` はページ内で1つが基本**（SEO・アクセシビリティの観点から）。

```html
<h1>一番大きい見出し（ページタイトル相当）</h1>
<h2>二番目に大きい見出し（セクションタイトル）</h2>
<h3>三番目に大きい見出し</h3>
```

> ⚠️ 見た目のために `<h1>` を使うのは NG。見出しは**文書の構造**を表すために使う。文字を大きくしたいだけなら CSS の `font-size` を使う。

---

### 段落 `<p>`

文章のまとまり（段落）を表す。ブロック要素なので、前後に改行が入る。

```html
<p>一つ目の段落。テキストテキストテキスト。</p>
<p>二つ目の段落。前の段落の後に自動で改行される。</p>
```

**段落内で改行したい場合**は `<br>` を使う（ただし多用しすぎると構造が崩れるので注意）。

```html
<p>
  一行目のテキスト<br>
  二行目のテキスト（brで改行）
</p>
```

---

### 画像 `<img>`

`src` に画像のパス、`alt` に画像の説明を入れる。終了タグは不要。  
`alt` は画像の読み込みに失敗した時や、スクリーンリーダー向けに表示される。**必ず書く**こと。

```html
<!-- 相対パス（同じプロジェクト内のファイル） -->
<img src="./assets/images/photo.png" alt="写真の説明">

<!-- 絶対パス（外部のURL） -->
<img src="https://example.com/photo.png" alt="写真の説明">
```

**パスの書き方：**

| パス | 意味 |
|------|------|
| `./` | 現在のファイルと同じフォルダ |
| `../` | 一つ上のフォルダ |
| `/` | サイトのルート（一番上）から |

---

### 画像とキャプション `<figure>` `<figcaption>`

`<figure>` で画像とその説明を一つのグループとして囲む。  
`<figcaption>` が画像の説明テキストに使うタグ。`<figure>` の中に書く。

```html
<figure>
  <img src="./assets/images/photo.png" alt="写真">
  <figcaption>図1: これは〇〇の写真です</figcaption>
</figure>
```

---

### リンク `<a>`

`href` にリンク先のURL を書く。  
`#` はダミーのリンク（どこにもジャンプしない）。開発中のプレースホルダーとして使う。

```html
<!-- 外部サイトへのリンク -->
<a href="https://example.com">外部サイトへ</a>

<!-- 別のページへのリンク -->
<a href="./about.html">Aboutページへ</a>

<!-- ダミーリンク（開発中などに使う） -->
<a href="#">ダミーリンク</a>

<!-- 新しいタブで開く -->
<a href="https://example.com" target="_blank">新しいタブで開く</a>
```

**画像をリンクにする場合**（`<a>` の中に `<img>` を入れる）：

```html
<a href="./detail.html">
  <img src="./assets/images/photo.png" alt="詳細ページへ">
</a>
```

---

### 順序なしリスト `<ul>` `<li>`

`<ul>` がリスト全体を囲み、`<li>` が各リストアイテム。  
ナビゲーション、カードの並び、箇条書きなど、**順序に意味がない**リストに使う。

```html
<ul>
  <li>リストアイテム1</li>
  <li>リストアイテム2</li>
  <li>リストアイテム3</li>
</ul>
```

デフォルトで `・`（黒丸）がつく。CSSで消すには `list-style: none;`。

**順序あり**リストは `<ol>` を使う（1, 2, 3... と数字がつく）。

```html
<ol>
  <li>手順1</li>
  <li>手順2</li>
  <li>手順3</li>
</ol>
```

---

### 定義リスト `<dl>` `<dt>` `<dd>`

データの「見出し」と「説明」のセットを作る。  
`<dt>` (definition term) が見出し、`<dd>` (definition description) が説明。  
アバターの名前と画像、機能のタイトルと説明など、ラベルと値のペアに使う。

```html
<dl>
  <dt>名前</dt>
  <dd>田中 太郎</dd>

  <dt>職業</dt>
  <dd>エンジニア</dd>
</dl>
```

---

### 記事 `<article>`

ブログ記事、ニュース、カードなど「それ単体で意味が完結するコンテンツ」に使う。  
ページから切り取っても意味が通じる内容であれば `<article>` が適切。

```html
<article>
  <h2>記事タイトル</h2>
  <time datetime="2026-01-01">2026.01.01</time>
  <p>記事の内容...</p>
</article>
```

---

### セクション `<section>`

ページの意味ある区切りに使う。「About」「Feature」「Blog」などのセクション。  
`<h1>`〜`<h6>` の見出しをセットで持つことが多い。

```html
<section class="section">
  <h1>About</h1>
  <p>説明テキスト...</p>
</section>

<section class="section">
  <h1>Feature</h1>
  <!-- コンテンツ -->
</section>
```

> `<section>` vs `<div>`: 意味的な区切りがある場合は `<section>`、単なるレイアウト用のグループは `<div>` を使う。

---

### `<div>` と `<span>`

どちらも**意味を持たない**グループ化タグ。CSS を当てるための入れ物として使う。

| タグ | 種類 | 改行 | 主な用途 |
|------|------|------|---------|
| `<div>` | ブロック要素 | 前後に改行が入る | 複数要素をまとめる箱（レイアウト用） |
| `<span>` | インライン要素 | 改行しない | テキストの一部を装飾する |

```html
<!-- div: 複数要素を囲む箱 -->
<div class="card">
  <h2>タイトル</h2>
  <p>説明テキスト</p>
</div>

<!-- span: テキストの一部だけスタイルを変える -->
<p>通常のテキスト<span class="highlight">ここだけ色を変える</span>通常のテキスト</p>
```

---

### 日時 `<time>`

日付や時間を表すタグ。  
- `datetime` 属性: 機械（ブラウザ・検索エンジン）向けの正確な ISO 形式
- タグの中身: 人間向けの表示テキスト（自由に書いてよい）

```html
<time datetime="2026-01-01">2026.01.01</time>
<time datetime="2026-01-01T10:00">2026年1月1日 10:00</time>
```

---

### テーブル `<table>` `<tr>` `<th>` `<td>`

表を作るタグ。フォームのラベルと入力欄を整列させる用途にも使われる。

| タグ | 英語の意味 | 用途 |
|------|-----------|------|
| `<table>` | table | テーブル全体を囲む |
| `<tr>` | table row | 1行を作る（行の要素は `<tr>` の中に書く） |
| `<th>` | table header | 見出しセル。デフォルトで**太字・中央揃え** |
| `<td>` | table data | データセル。通常のセル |

```html
<table>
  <tr>
    <!-- 1行目: 見出し行 -->
    <th>名前</th>
    <th>年齢</th>
    <th>職業</th>
  </tr>
  <tr>
    <!-- 2行目: データ行 -->
    <td>田中</td>
    <td>25</td>
    <td>エンジニア</td>
  </tr>
  <tr>
    <!-- 3行目: データ行 -->
    <td>鈴木</td>
    <td>30</td>
    <td>デザイナー</td>
  </tr>
</table>
```

**フォームでの使用例**（ラベルと入力欄を整列させる）：

```html
<table>
  <tr>
    <th><label for="name">お名前</label></th>
    <td><input type="text" id="name" name="name"></td>
  </tr>
  <tr>
    <th><label for="email">メール</label></th>
    <td><input type="email" id="email" name="email"></td>
  </tr>
</table>
```

> ⚠️ テーブルセル（`<td>`, `<th>`）には **`margin` が効かない**。  
> セル内の余白は `padding`（内側）を使う。行間隔は `<table>` に `border-spacing` を設定する。
>
> ```css
> table { border-spacing: 0 10px; } /* 水平0px、垂直10px の間隔 */
> ```

---

## フォーム関連タグ

### フォーム全体 `<form>`

ユーザーが入力したデータをサーバーに送信するためのタグ。  
フォームの要素（input, select, textarea, button）はすべて `<form>` の中に書く。

```html
<form action="/submit" method="post">
  <!-- フォームの中身 -->
  <input type="text" name="name">
  <button type="submit">送信</button>
</form>
```

**主な属性：**

| 属性 | 説明 |
|------|------|
| `action` | 送信先の URL を指定。空 `""` の場合は現在のページに送る |
| `method` | `get`（URLにデータが付く）か `post`（見えない形で送る）を指定 |

---

### テキスト入力 `<input>`

`type` 属性によって見た目と動作が変わる。終了タグは不要。

| type | 見た目 | 用途 |
|------|--------|------|
| `text` | テキストボックス | 通常の1行テキスト入力 |
| `email` | テキストボックス | メールアドレス（`@` がないと送信できない） |
| `password` | ●●●● と表示 | パスワード入力 |
| `radio` | ○ ラジオボタン | 複数の選択肢から**1つだけ**選ぶ |
| `checkbox` | □ チェックボックス | 複数の選択肢から**複数**選べる |
| `number` | 数値入力ボックス | 数字のみ入力 |

```html
<input type="text" name="name" id="name" placeholder="例：田中 太郎">
<input type="email" name="email" id="email" placeholder="例：sample@example.com">
<input type="password" name="password" id="password">
```

**`name` と `id` の違い（重要！）：**

| 属性 | 目的 | どこで使う | ないとどうなる |
|------|------|-----------|--------------|
| `name` | フォーム送信時のデータのキー名 | サーバー（バックエンド）側 | データが送信されない |
| `id` | HTML内でのユニークな識別子 | JavaScript / CSS / `<label>` の `for` | label との紐付けができない |

```html
<!-- name="email" でサーバーに「email: 入力値」として送られる -->
<!-- id="email" で <label for="email"> と紐付けられる -->
<input type="email" name="email" id="email">
```

---

### ラジオボタン `<input type="radio">`

複数の選択肢から**1つだけ**選ばせたい時に使う。  
**`name` を同じ値にすることで**、同じグループとして扱われ、1つしか選べなくなる。  
**`value`** がサーバーに送られる実際のデータ（ユーザーには見えない）。

```html
<!-- すべて name="gender" で同じグループ → 1つしか選べない -->
<label for="male">
  <input type="radio" name="gender" id="male" value="male">Male
</label>
<label for="female">
  <input type="radio" name="gender" id="female" value="female">Female
</label>
<label for="other">
  <input type="radio" name="gender" id="other" value="other">Other
</label>
```

> ⚠️ `<label>` に `class` を当てる（ラジオボタン全体にスタイルをかける）のが正しい。  
> `<input>` に `class` を当てると、ボタン本体とテキストの間にも余白ができてしまうので注意。

```css
/* 正しい: label に margin を設定 → ラジオボタン同士の間隔が空く */
.form-radio {
  margin: 0 10px;
}
```

---

### ラベル `<label>`

入力欄に説明テキストをつけるタグ。  
`for` 属性に対応する `<input>` の `id` を指定すると、**ラベルのテキストをクリックしても入力欄にフォーカスが当たる**ようになる（ユーザビリティ向上）。

```html
<!-- for="name" と id="name" が一致していることが重要 -->
<label for="name">お名前</label>
<input type="text" id="name" name="name">

<!-- inputを label で囲む書き方もできる（for/id 不要） -->
<label>
  お名前
  <input type="text" name="name">
</label>
```

---

### プルダウン `<select>` `<option>`

ドロップダウンの選択メニュー。  
- `<select>` に `name` と `id` を設定する
- `<option>` の `value` がサーバーに送られる値（バックエンドが識別するためのもの）
- `<option>` のタグの中のテキストがユーザーに見える表示

```html
<select name="menu" id="menu">
  <option value="">-- 選択してください --</option>
  <option value="menu-1">メニュー1</option>
  <option value="menu-2">メニュー2</option>
  <option value="menu-3">メニュー3</option>
</select>
```

送信されるデータ: `menu=menu-1`（ユーザーがメニュー1を選んだ場合）

---

### 複数行テキスト `<textarea>`

複数行のテキスト入力欄。問い合わせ内容、コメントなどに使う。  
- `cols`: 横幅の文字数（目安）
- `rows`: 表示する行数

```html
<textarea name="message" id="message" cols="30" rows="10"></textarea>
```

> ⚠️ デフォルトではユーザーがドラッグして大きさを変えられる。  
> 固定したい場合は CSS で `resize: none;` を指定する。

```css
textarea {
  resize: none;      /* リサイズ禁止 */
  resize: vertical;  /* 縦方向のみ許可 */
}
```

---

### 送信ボタン `<button>`

`type="submit"` でフォームを送信するボタンになる。  
`<a>` タグと違い、フォーム送信・JavaScript の実行など動作を持つボタンに使う。

```html
<!-- フォーム送信ボタン -->
<button type="submit">送信する</button>

<!-- 通常のボタン（JavaScriptで動作を追加する） -->
<button type="button">クリック</button>
```

---

## CSSの基本

### CSS ファイルの読み込み

HTML の `<head>` 内で CSS ファイルを読み込む。

```html
<head>
  <link rel="stylesheet" href="./assets/css/style.css">
</head>
```

### CSS の書き方

```css
/* セレクター { プロパティ: 値; } という形で書く */
.button {
  background-color: #333;  /* 背景色を黒に */
  color: #fff;             /* 文字色を白に */
  padding: 10px 20px;      /* 内側の余白 */
}
```

### クラスの付け方（HTML と CSS の紐付け）

HTML 側でタグに `class="クラス名"` を書き、CSS 側で `.クラス名 { }` と書くと適用される。

```html
<!-- HTML: タグに class を付ける -->
<button class="button">クリック</button>
<button class="button button-secondary">サブボタン</button>
```

```css
/* CSS: .クラス名 でスタイルを書く */
.button {
  background-color: #333;
  color: #fff;
}

/* 複数クラスを持つ要素だけに適用 (スペースなし) */
.button.button-secondary {
  background-color: #92d3ca;
}
```

---

### テキスト系

```css
font-family: "Noto Sans JP", sans-serif;
/* フォントの種類。複数書くと左から優先される。最後は汎用フォント（sans-serif）を書いておく */

font-size: 16px;     /* 文字の大きさ。px（固定）や rem（相対）を使う */
font-weight: bold;   /* 太字。bold または 400（通常）/ 700（太字）などの数値で指定 */
line-height: 1.5;    /* 行間。単位なしで書くと font-size の倍率になる（1.5 = 1.5倍） */
color: #333;         /* 文字色。#333 は濃いグレー（黒に近い） */
text-align: center;  /* 文字の揃え: left（左）/ center（中央）/ right（右） */
text-decoration: none; /* 下線などの装飾。none でリンクの下線を消せる */
```

**色の書き方：**

| 書き方 | 例 | 説明 |
|--------|-----|------|
| 16進数 | `#333` or `#333333` | 3桁は6桁の省略形 |
| RGB | `rgb(51, 51, 51)` | 赤・緑・青の値（0〜255） |
| 色名 | `red`, `white`, `black` | 英語の色名 |

---

### ボックスモデル（余白）

```
┌──────────────────────────────┐
│           margin             │  ← 要素の外側の余白
│  ┌────────────────────────┐  │
│  │        border          │  │  ← 枠線
│  │  ┌──────────────────┐  │  │
│  │  │     padding      │  │  │  ← 要素の内側の余白
│  │  │  ┌────────────┐  │  │  │
│  │  │  │  content   │  │  │  │  ← コンテンツ本体
│  │  │  └────────────┘  │  │  │
│  │  └──────────────────┘  │  │
│  └────────────────────────┘  │
└──────────────────────────────┘
```

**margin（外側の余白）**

値の個数によって適用される方向が変わる（時計回りの法則）：

```css
margin: 20px;                    /* 上下左右すべて 20px */
margin: 10px 20px;               /* 上下 10px、左右 20px */
margin: 10px 20px 5px;           /* 上 10px、左右 20px、下 5px */
margin: 10px 20px 5px 15px;      /* 上・右・下・左（時計回り） */
margin: 0 auto;                  /* 上下 0px、左右 auto → ブロック要素を中央揃え */

/* 個別に指定することもできる */
margin-top: 10px;
margin-right: 20px;
margin-bottom: 10px;
margin-left: 20px;
```

**padding（内側の余白）**

margin と同じ書き方で指定できる。要素の内側に余白を作る。

```css
padding: 40px 20px;  /* 上下 40px、左右 20px */
padding: 10px;       /* 上下左右すべて 10px */

/* 個別指定 */
padding-top: 10px;
padding-right: 20px;
```

**margin と padding の使い分け：**

| | margin | padding |
|-|--------|---------|
| 余白の場所 | 要素の**外側** | 要素の**内側** |
| 背景色 | 背景色は適用されない | 背景色が適用される |
| テーブルセルへの効果 | ❌ 効かない | ✅ 効く |

> ⚠️ テーブルセルには `margin` が効かない。余白は `padding` か テーブルに `border-spacing` を使う。

---

### 幅・高さ

```css
width: 100%;         /* 親要素の幅いっぱいに広がる */
width: 50%;          /* 親要素の幅の50% */
width: 200px;        /* 固定幅 200px */

max-width: 200px;    /* 最大幅。これより大きくならない（レスポンシブに便利）*/
min-width: 500px;    /* 最小幅。これより小さくならない */

height: auto;        /* 高さをコンテンツに合わせて自動調整 */
height: 100px;       /* 固定の高さ */
```

**`width` と `max-width` の組み合わせ例：**

```css
.image {
  width: 100%;        /* 画面幅に合わせて縮む（レスポンシブ） */
  max-width: 400px;   /* でも400px以上には大きくならない */
}
```

---

### 背景・枠線

```css
background-color: #efefef; /* 背景色を薄いグレーに */
background-color: transparent; /* 背景を透明に */

/* border: [太さ] [スタイル] [色] の順で書く（順序は自由だが慣習的にこの順） */
border: 1px solid #ccc;    /* 1px の薄いグレーの実線 */
border: none;              /* 枠線をなくす */
border-top: 1px solid #ccc; /* 上だけに枠線 */

border-radius: 5px;        /* 角を丸くする */
border-radius: 50%;        /* 正円にする（画像をアイコン化する時に使う） */
```

**border-style の種類：**

| 値 | 見た目 |
|----|-------|
| `solid` | ─── 実線 |
| `dashed` | - - - 破線 |
| `dotted` | ··· 点線 |
| `none` | 枠線なし |

---

### 影

```css
/* box-shadow: [右方向のずれ] [下方向のずれ] [ぼかし半径] [色] */
box-shadow: 5px 5px 0px #bbb;   /* 右下に影。ぼかしなし */
box-shadow: 0px 2px 8px #aaa;   /* 下方向に少しぼかした影 */
box-shadow: 0px 0px 0px #bbb;   /* 影をなくす（ホバー時に影を消す時に使う） */
```

---

### display（表示方法）

HTML要素の「並び方」を変えるプロパティ。

```css
display: block;        /* ブロック要素：幅いっぱいに広がり、前後に改行が入る（div, p, h1 など） */
display: inline;       /* インライン要素：テキストと同じように並ぶ（span, a など） */
display: inline-block; /* インライン上に並びつつ、width や height が使える */
display: flex;         /* 子要素を横並びにする（Flexbox） */
display: none;         /* 非表示にする（スペースも消える） */
```

**block と inline-block の違い：**

```css
/* <a> はデフォルトで inline。padding を上下に効かせたい場合は inline-block や block にする */
.button {
  display: inline-block; /* テキストのように並びつつ、padding が上下にも効く */
  padding: 10px 20px;
}
```

---

### Flexbox（横並び）

`display: flex` を**親要素**に設定すると子要素が横並びになる。

```css
.container {
  display: flex;

  /* 子要素の並び方向 */
  flex-direction: row;          /* 横並び（デフォルト） */
  flex-direction: column;       /* 縦並び */
  flex-direction: row-reverse;  /* 横並びを逆順に */

  /* 子要素間のスペース */
  gap: 20px;          /* 全方向に20pxの間隔 */
  gap: 10px 20px;     /* 上下10px 左右20px */

  /* 水平方向の揃え（flex-direction: row の時） */
  justify-content: flex-start;    /* 左揃え（デフォルト） */
  justify-content: center;        /* 中央揃え */
  justify-content: flex-end;      /* 右揃え */
  justify-content: space-between; /* 両端揃えで均等に配置 */

  /* 垂直方向の揃え */
  align-items: stretch;     /* 高さを揃える（デフォルト） */
  align-items: center;      /* 垂直方向に中央揃え */
  align-items: flex-start;  /* 上揃え */
  align-items: flex-end;    /* 下揃え */
}
```

**子要素の幅指定：**

```css
/* 親が display:flex の時、子要素に width を指定して列幅を決める */
.grid-cols-4 > .grid-item {
  width: 25%;  /* 4列: 100% ÷ 4 = 25% */
}

.grid-cols-3 .grid-item {
  width: 33.3333%;  /* 3列: 100% ÷ 3 ≈ 33.3% */
}
```

---

### position（配置）

要素を通常のレイアウトから外して自由な位置に配置する。  
`absolute` と `relative` はセットで使うことが多い。

```css
/* 親要素に relative を設定 */
.card {
  position: relative;  /* この要素を基準点にする */
}

/* 子要素に absolute を設定 */
.card-label {
  position: absolute;  /* relative の親を基準に、自由な場所に配置 */
  top: 0px;    /* 親の上辺から 0px */
  left: 0px;   /* 親の左辺から 0px */
  /* → カードの左上に配置される */
}
```

**position の種類：**

| 値 | 説明 |
|----|------|
| `static` | デフォルト。通常の配置 |
| `relative` | 通常の位置を基準にずらす。子要素の `absolute` 基準点にもなる |
| `absolute` | 祖先の `relative` 要素を基準に絶対位置に配置。通常のレイアウトから外れる |
| `fixed` | 画面（ビューポート）を基準に固定。スクロールしても動かない |
| `sticky` | スクロールに追従して固定される（ナビバーなどに使う） |

---

### transition（アニメーション）

プロパティが変化する時（ホバーなど）に、スムーズにアニメーションされるようにする。  
**変化が始まる側（通常状態）** に書くのがポイント。

```css
/* transition: [変化させるプロパティ] [アニメーション時間] */
.button {
  box-shadow: 5px 5px 0px #bbb;
  transition: box-shadow 0.2s;  /* box-shadow の変化を 0.2秒かけて行う */
}

.button:hover {
  box-shadow: 0px 0px 0px #bbb;  /* ここへの変化がスムーズになる */
}
```

```css
/* 複数のプロパティをまとめて指定 */
transition: background-color 0.2s, color 0.3s;

/* すべてのプロパティ変化をアニメーションさせる */
transition: all 0.2s;
```

---

### その他

```css
cursor: pointer;   /* マウスカーソルを指マーク（手の形）にする。クリックできると伝える */
cursor: default;   /* デフォルトの矢印カーソルに戻す */

resize: none;      /* textarea のリサイズを禁止 */
resize: vertical;  /* textarea の縦方向リサイズのみ許可 */

list-style: none;  /* ul/ol のデフォルトの「・」や「1.」を消す */

overflow: hidden;  /* コンテンツがはみ出した時に隠す */
overflow: scroll;  /* はみ出した時にスクロールバーを表示 */
```

---

## CSSセレクター

セレクターとは「**どの HTML 要素にスタイルを当てるか**」を指定するもの。

### 基本のセレクター

```css
/* タグセレクター: そのタグすべてに適用（乱用注意） */
p { color: red; }
h1 { font-size: 40px; }

/* クラスセレクター: .クラス名 で指定（最もよく使う） */
.button { background-color: #333; }
.card-headline { font-size: 16px; }

/* IDセレクター: #ID名（ページ内で一意の要素に対して使う） */
#header { font-size: 40px; }
```

> ⚠️ **よくある間違い**: クラスセレクターの `.`（ドット）を忘れると、CSS が当たらない！
>
> ```css
> button { }   /* ❌ これは <button> タグすべてに適用されるタグセレクター */
> .button { }  /* ✅ これが class="button" を持つ要素へのクラスセレクター */
> ```

---

### 複数クラスセレクター

**スペースなし**で繋げると「両方のクラスを持つ要素」にのみ適用する。  
クラスを組み合わせてバリエーションを作る時に使う。

```css
/* class="section secondary" のように両方ついている要素にのみ適用 */
/* .section だけ、.secondary だけ、には適用されない */
.section.secondary {
  background-color: #efefef;
}

/* class="button button-secondary" の要素だけボタン色を変える */
.button.button-secondary {
  background-color: #92d3ca;
}
```

```html
<!-- .section だけ（背景色なし） -->
<section class="section">...</section>

<!-- .section と .secondary 両方（背景色あり） -->
<section class="section secondary">...</section>
```

---

### 子孫セレクター

**スペース**で繋げると「その子孫要素」に適用する。  
**`>`** で繋げると「直接の子要素のみ」に限定できる。

```css
/* .form の中にある td 要素すべてに適用（何段階深くてもOK） */
.form td {
  padding: 10px;
}

/* .grid-cols-4 の直接の子の .grid-item だけに適用*/
/* 孫要素の .grid-item には適用されない */
.grid-cols-4 > .grid-item {
  width: 25%;
}
```

```html
<!-- .form td {} が適用される -->
<form class="form">
  <table>
    <tr>
      <td>ここに適用される</td>
    </tr>
  </table>
</form>
```

---

### 複数セレクター（カンマ区切り）

**カンマ**で繋げると、複数のセレクターに**同じスタイル**をまとめて適用できる。  
同じ CSS を何度も書かなくて済む。

```css
/* 3つのクラスすべてに cursor: pointer を適用 */
.form-select, .form-input, .form-radio, .form-textarea {
  cursor: pointer;
}

/* 上記は以下と同じ意味 */
.form-select { cursor: pointer; }
.form-input  { cursor: pointer; }
.form-radio  { cursor: pointer; }
.form-textarea { cursor: pointer; }
```

---

### 属性セレクター

HTML 要素の属性の値でスタイルを当てることができる。

```css
/* class 属性に "form-" を含む要素すべてに適用 */
[class*="form-"] {
  cursor: pointer;
}

/* type="text" の input 要素に適用 */
input[type="text"] {
  border: 1px solid #ccc;
}
```

---

### 擬似クラス（ホバー・フォーカスなど）

ユーザーの操作に応じてスタイルを変えたい時に使う。  
`セレクター:疑似クラス` の形で書く。

```css
/* マウスを乗せた時 */
.button:hover {
  box-shadow: 0px 0px 0px #bbb;
}

/* リンクをクリックした時 */
.card-link:active {
  opacity: 0.8;
}

/* input にフォーカスが当たった時（タブキーやクリック） */
.form-input:focus {
  outline: 2px solid #333;
}

/* リストの最初の子要素だけ */
li:first-child {
  font-weight: bold;
}

/* リストの最後の子要素だけ */
li:last-child {
  border-bottom: none;
}
```

---

### コメントのショートカット

| 操作 | ショートカット |
|------|-------------|
| 行コメントのトグル | `Cmd + /` |
| 選択範囲をコメント化 | 選択して `Cmd + /` |
| コメント解除 | コメント行で `Cmd + /` |
