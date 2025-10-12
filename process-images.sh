#!/bin/bash

SOURCE_DIR="./sozai-images"
TARGET_BASE_DIR="./images"

if [ ! -d "$SOURCE_DIR" ]; then
    echo "エラー: ソースディレクトリ '$SOURCE_DIR' が見つかりません。"
    echo "画像を '$SOURCE_DIR' に入れてからスクリプトを実行してください。"
    exit 1
fi

# 処理する画像ファイルがあるか確認
if ! find "$SOURCE_DIR" -maxdepth 1 -type f \( -iname "*.jpg" -o -iname "*.jpeg" -o -iname "*.png" -o -iname "*.webp" \) -print -quit | grep -q .; then
    echo "$SOURCE_DIR に処理すべき画像ファイルがありません。"
    exit 0
fi

# 既存のカテゴリフォルダをリストアップ
CATEGORIES=()
for dir in "$TARGET_BASE_DIR"/*/; do
    if [ -d "$dir" ]; then
        CATEGORIES+=("$(basename "$dir")")
    fi
done

# カテゴリ選択のプロンプト
select_category() {
    echo "どのカテゴリに画像を移動しますか？"
    echo "既存のカテゴリ: ${CATEGORIES[*]}"
    echo "新しいカテゴリを作成する場合は、新しい名前を入力してください。"
    read -p "カテゴリ名を入力してください: " CATEGORY_NAME

    if [ -z "$CATEGORY_NAME" ]; then
        echo "カテゴリ名が入力されていません。再試行してください。"
        select_category # 再帰的に呼び出し
    fi
    echo "選択されたカテゴリ: $CATEGORY_NAME"
}

# カテゴリを選択
select_category

TARGET_CATEGORY_DIR="$TARGET_BASE_DIR/$CATEGORY_NAME"
mkdir -p "$TARGET_CATEGORY_DIR"

# ソースディレクトリ内のすべての画像をループ処理
find "$SOURCE_DIR" -maxdepth 1 -type f \( -iname "*.jpg" -o -iname "*.jpeg" -o -iname "*.png" -o -iname "*.webp" \) | while read -r img; do
    echo "処理中: $img"
    filename=$(basename "$img")
    base="${filename%.*}"
    output_path="${TARGET_CATEGORY_DIR}/${base}.jpg"

    # sipsコマンドで画像をリサイズ＆圧縮
    temp_output_path="${SOURCE_DIR}/temp_${base}.jpg"
    sips -Z 800 --setProperty format jpeg --setProperty formatOptions normal "$img" --out "$temp_output_path"

    # 圧縮されたファイルをターゲットディレクトリに移動
    mv "$temp_output_path" "$output_path"

    # 元の画像を削除
    rm "$img"
done

echo "画像処理が完了しました。"
