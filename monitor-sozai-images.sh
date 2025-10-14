#!/bin/bash

SOURCE_DIR="./sozai-images"
COMPRESS_SCRIPT="./compress-image.sh"

echo "sozai-imagesフォルダの監視を開始しました。新しい画像が検出されると自動的に圧縮されます。"

while true; do
    # sozai-images に画像ファイルがあるかチェック
    # -maxdepth 1: 現在のディレクトリのみを検索
    # -type f: ファイルのみを検索
    # -iname: 大文字小文字を区別せずにファイル名を検索
    # -print -quit: 最初に見つかったファイルで検索を終了
    # grep -q .: 何か見つかったら真 (true) を返す
    if find "$SOURCE_DIR" -maxdepth 1 -type f \( -iname "*.jpg" -o -iname "*.jpeg" -o -iname "*.png" -o -iname "*.webp" \) -print -quit | grep -q .; then
        echo "$(date): 新しい画像ファイルが検出されました。圧縮スクリプトを実行します。"
        "$COMPRESS_SCRIPT"
        echo "$(date): 圧縮スクリプトの実行が完了しました。"
    fi
    sleep 10 # 10秒ごとにチェック
done
