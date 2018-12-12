# JavaScriptのプログラミング

## HTMLとJavaScript

- JavaScriptは基本的にHTMLとにこいちです。
- HTMLはJavaScriptがなくても生きていけますが、JavaScriptはHTMLなしでは動くことすらままなりません。- JavaScriptは、HTMLへのアクションをきっかけに実行される処理を定義したファイルなので（基本的には）JavaScriptはHTMLに紐づいて存在します。
- JavaScriptとHTMLを紐づける方法には、HTMLとは別に単体で「○○.js」というファイルで作成したものを紐づける方法、またはHTMLのなかに直接処理となるJavaScriptを記述する方法の二つの方法があります。

- 例えば、後述の`oshininaru.html`では、6行目の` <script type="text/javascript">`から27行目の`</script>`の間に処理となるJavaScriptを記述しています。
- 加えて、34行目`<input type="button" id="ok" value="ok" onclick="clickEvent()">`をご覧ください！
    - この要素がボタンに化けるわけですが、`onclick="clickEvent()"`で「このボタンがクリックされたときに`<script …>`から`</script>`の間に記述された`clickEvent()`っていう名前の関数を実行するぜ！」というのを定義しています。
    - HTMLのほうはひとまずおいておいて、JavaScriptのほうを見ていきましょう！

## 条件分岐の処理（if文）

まずはこちらでお遊び頂こう！

- [3の倍数で推しになる.html](oshininaru.html)
- 3の倍数を入力して「OK」を押すと推しのセリフのアラートが出るよ！

というわけで、具体的な処理の中身をねちっこくみていきましょう！
今回は分岐処理の`if文`を使った処理です！

```
1   <script type="text/javascript">
2   function clickEvent(){
3     // "好きな推しのセリフ"に入力された文字列を取得して変数「oshi」に代入する
4     var oshi = document.getElementById("oshi").value;
5     // "半角数字"に入力されている文字列を取得して変数「arg」に代入する
6     var arg = document.getElementById("arg").value;
7    
8     // 「arg」が数値であった場合の処理
9     if (!isNaN(arg)) {
10      // 「arg」が3の倍数の場合の処理
11      if (Number.isInteger(arg/3)){
12        alert(oshi);
13      } else {
14      // 3の倍数以外の時の処理
15        alert("入力値は「" + arg + "」です。");
16      }
17    } else {
18      // 「arg」が数値以外の場合の処理
19      alert("半角数字を入力してください。");
20    }
21  }
22  </script>
```

- まず早速2行目の`function clickEvent(){`にご注目頂きたい！この`{`の閉じかっこは21行目の`}`です。
- つまり3行目～20行目からはこの`function clickEvent()`の中身ということになります！
    - そも、この`function clickEvenet(){…}`とはなんぞや、というところ。
        - この`function clickEvent(){…}`はユーザー定義関数とか、メソッドとか呼ばれるものです。
        - **`function`**は「これから関数の定義をするからねーーー！！」という意思表示、
        - スペースをあけて**`clickEvent`**は関数の名前です！
            - ユーザー定義関数というだけあって、関数の名前は自由につけられます！例えば、
                - `function shinkan_kudasai(){…}`でもいいし、
                - `function oshiga_toutoi(){…}`でも
            - なんでもかまいません！
                - ですが、複雑なプログラミングになると、一つのソースコードのなかにいくつも関数が乱立することも珍しくないので、何の処理をするのか、一目瞭然の名前を付けることが好ましいです。
        - そして関数名の後ろに意味深についている**`()`**！
            - 今回は使っていませんが、使う場合はこのカッコのなかに**引数**が入ります。
            - **引数**は関数で行う処理で使う為に外部から引き込んでくる値のことです。
            - 今後、使う場面が来たら詳しくご説明いたします！
        - そして`{`から`}`の間にその関数で行う処理を記述していきます。
    - つまり日本語に翻訳するとこんなかんじ。

    ```
    function 関数名(){
        処理
    }
    ```

では続いて関数`clickEvent()`の処理の中身を見ていきましょう！

