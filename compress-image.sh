#!/bin/bash

# スクリプトの使い方: ./compress-image.sh
#
# このスクリプトは、sozai-images/ ディレクトリ内の画像をウェブ用に圧縮し、
# images/ ディレクトリのルートに移動します。元の画像は sozai-images/ から削除されます。

SOURCE_DIR="./sozai-images"
TARGET_DIR="./images"

if [ ! -d "$SOURCE_DIR" ]; then
    echo "エラー: ソースディレクトリ '$SOURCE_DIR' が見つかりません。"
    echo "画像を '$SOURCE_DIR' に入れてからスクリプトを実行してください。"
    exit 1
fi

mkdir -p "$TARGET_DIR"

find "$SOURCE_DIR" -maxdepth 1 -type f \( -iname "*.jpg" -o -iname "*.jpeg" -o -iname "*.png" -o -iname "*.webp" \) | while read -r img; do
    echo "処理中: $img"
    filename=$(basename "$img")
    base="${filename%.*}"
    output_path="${TARGET_DIR}/${base}.jpg"

    temp_output_path="${SOURCE_DIR}/temp_${base}.jpg"
    sips -Z 800 --setProperty format jpeg --setProperty formatOptions normal "$img" --out "$temp_output_path"

    mv "$temp_output_path" "$output_path"

    rm "$img"
done

echo "圧縮と移動が完了しました。"