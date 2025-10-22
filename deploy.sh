#!/bin/bash

# エラーが発生したらスクリプトを終了
set -e

# 1. 画像処理スクリプトを実行
echo "--- 画像処理を開始します ---"
./process-images.sh
echo "--- 画像処理が完了しました ---"

# 2. data.js生成スクリプトを実行
echo "--- data.jsの生成を開始します ---"
./generate-data-js.sh
echo "--- data.jsの生成が完了しました ---"

# 3. Git操作
echo "--- Git操作を開始します ---"

git add .

# コミットメッセージをユーザーに尋ねる
read -p "コミットメッセージを入力してください: " COMMIT_MESSAGE

if [ -z "$COMMIT_MESSAGE" ]; then
    echo "コミットメッセージが入力されませんでした。処理を中断します。"
    exit 1
fi

git commit -m "$COMMIT_MESSAGE"
git push origin main

echo "--- Git操作が完了し、変更がGitHubにプッシュされました ---"

echo "デプロイプロセスが完了しました。Netlifyで自動デプロイが開始されます。"
