const app = document.getElementById('app');
const menuTitle = document.getElementById('menu-title');

// URLのハッシュに基づいて表示を更新する
function router() {
    // 現在のハッシュを取得してパスを分割
    const hash = location.hash.slice(1);
    const path = hash.split('/'); //例: 'grand-menu/hamburg' -> ['grand-menu', 'hamburg']
    
    app.innerHTML = ''; // 表示を一旦クリア

    // パスの階層に応じて表示を切り替え
    if (path[0] === '') {
        // トップページ: ロゴとテキストを表示
        menuTitle.innerHTML = ''; // タイトルをクリア

        const logoContainer = document.createElement('div');
        logoContainer.className = 'main-title-logo-container';

        if (menuData.siteConfig && menuData.siteConfig.mainLogo) {
            const logoImg = document.createElement('img');
            // パスの各部分をエンコードして特殊文字に対応
            logoImg.src = menuData.siteConfig.mainLogo.split('/').map(part => encodeURIComponent(part)).join('/');
            logoImg.alt = 'ロゴ';
            logoImg.className = 'main-title-logo';
            logoContainer.appendChild(logoImg);
        }

        const textContainer = document.createElement('div');
        textContainer.className = 'main-title-text-container';
        if (menuData.siteConfig && menuData.siteConfig.mainTitleLines) {
            menuData.siteConfig.mainTitleLines.forEach(line => {
                const span = document.createElement('span');
                span.textContent = line.text;
                if (line.class) {
                    span.classList.add(line.class);
                }
                textContainer.appendChild(span);
            });
        }
        
        menuTitle.appendChild(logoContainer);
        menuTitle.appendChild(textContainer);

        renderCategories(menuData.categories);
    } else if (path.length === 1) {
        // 中カテゴリーページ
        const categoryId = path[0];
        const category = menuData.categories.find(c => c.id === categoryId);
        if (category) {
            // タイトル部分をリセット
            menuTitle.innerHTML = '';

            if (category.titleImage) {
                const imageElement = document.createElement('img');
                // パスの各部分をエンコードして特殊文字に対応
                imageElement.src = category.titleImage.split('/').map(part => encodeURIComponent(part)).join('/');
                imageElement.alt = category.name;
                imageElement.classList.add('title-image');
                menuTitle.appendChild(imageElement);
            } else {
                menuTitle.textContent = category.name;
                menuTitle.classList.add('text-category-title'); // クラスを追加
            }

            if (category.subcategories && category.subcategories.length > 0) {
                renderCategories(category.subcategories, categoryId);
            } else if (category.items && category.items.length > 0) {
                renderItems(category.items);
            } else {
                app.innerHTML = '<p>このカテゴリーにはまだ何もありません。</p>';
            }
        }
    } else if (path.length === 2) {
        // 商品一覧ページ
        const [categoryId, subcategoryId] = path;
        const category = menuData.categories.find(c => c.id === categoryId);
        const subcategory = category?.subcategories.find(sc => sc.id === subcategoryId);
        if (subcategory) {
            menuTitle.textContent = subcategory.name;
            renderItems(subcategory.items);
        }
    }

    // ホームに戻るボタンの表示/非表示を制御
    const fixedButtonContainer = document.getElementById('fixed-button-container');
    if (path[0] !== '') {
        renderBackButton(fixedButtonContainer);
    } else {
        fixedButtonContainer.innerHTML = ''; // ホーム画面ではボタンをクリア
    }
}

// ホームに戻るボタンをレンダリングする関数
function renderBackButton(container) {
    container.innerHTML = ''; // 既存のボタンをクリア

    const backButton = document.createElement('a');
    backButton.href = '#'; // ホームへのリンク
    backButton.className = 'back-to-home-button';
    backButton.textContent = 'トップ画面に戻る';
    container.appendChild(backButton);
}

// カテゴリーのリストを描画する関数
function renderCategories(categories, parentPath = '') {
    const list = document.createElement('ul');
    list.className = 'category-list';

    for (const category of categories) {
        const listItem = document.createElement('li');
        listItem.className = 'category-item';
        
        const link = document.createElement('a');
        // 親パスがあれば連結して新しいパスを作成
        const newPath = parentPath ? `${parentPath}/${category.id}` : category.id;
        link.href = `#${newPath}`;
        link.textContent = category.name;
        
        listItem.appendChild(link);
        list.appendChild(listItem);
    }
    app.appendChild(list);
}

// 商品のリストを描画する関数
function renderItems(items) {
    const container = document.createElement('div');
    container.className = 'item-list';

    if (!items || items.length === 0) {
        container.innerHTML = '<p>このカテゴリーに商品はありません。</p>';
        app.appendChild(container);
        return;
    }

    for (const item of items) {
        const itemElement = document.createElement('article');
        itemElement.className = 'item';

        itemElement.innerHTML = `
            <img src="${item.image}" alt="${item.name}" class="item-image">
            <div class="item-details">
                <h3 class="item-name">${item.name}</h3>
                <p class="item-description">${item.description}</p>
                <p class="item-price">¥${item.price.toLocaleString()}</p>
            </div>
        `;
        container.appendChild(itemElement);
    }
    app.appendChild(container);
}


// URLのハッシュが変わった時、またはページが読み込まれた時にルーターを実行
window.addEventListener('hashchange', router);
window.addEventListener('DOMContentLoaded', router);