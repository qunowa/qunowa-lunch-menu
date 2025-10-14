#!/bin/bash

MENU_JSON_FILE="./menu-data.json"
DATA_JS_FILE="./data.js"

if [ ! -f "$MENU_JSON_FILE" ]; then
    echo "エラー: メニューデータファイル '$MENU_JSON_FILE' が見つかりません。"
    exit 1
fi

# JSONファイルを読み込み、JavaScriptの形式に変換してdata.jsを生成
# jqコマンドに依存しない方法に変更
echo "const menuData = " > "$DATA_JS_FILE"
cat "$MENU_JSON_FILE" >> "$DATA_JS_FILE"
echo ";" >> "$DATA_JS_FILE"

echo "$DATA_JS_FILE が正常に生成されました。"