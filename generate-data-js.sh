#!/bin/bash

MENU_JSON_FILE="./menu-data.json"
DATA_JS_FILE="./data.js"

if [ ! -f "$MENU_JSON_FILE" ]; then
    echo "エラー: メニューデータファイル '$MENU_JSON_FILE' が見つかりません。"
    exit 1
fi

# JSONファイルを読み込み、JavaScriptの形式に変換してdata.jsを生成
# jqコマンドを使用
if ! command -v jq &> /dev/null
then
    echo "エラー: jqコマンドが見つかりません。jqをインストールしてください (例: brew install jq)"
    exit 1
fi

JSON_CONTENT=$(cat "$MENU_JSON_FILE")

cat <<EOF > "$DATA_JS_FILE"
const menuData = 
$(echo "$JSON_CONTENT" | jq .);
EOF

echo "$DATA_JS_FILE が正常に生成されました。"
