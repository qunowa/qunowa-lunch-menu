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
            logoImg.src = menuData.siteConfig.mainLogo;
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
                imageElement.src = category.titleImage;
                imageElement.alt = category.name;
                imageElement.classList.add('title-image');
                menuTitle.appendChild(imageElement);

                if (category.description) {
                    const descP = document.createElement('p');
                    descP.textContent = category.description;
                    descP.classList.add('title-description'); // 新しいクラスを追加
                    menuTitle.appendChild(descP);
                }
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
        link.classList.add('category-link-content'); // 新しいクラスを追加
        
        if (category.image) {
            const imgContainer = document.createElement('div');
            imgContainer.className = 'category-image-container';

            const img = document.createElement('img');
            img.src = category.image;
            img.alt = category.name;
            img.className = 'category-image';
            imgContainer.appendChild(img);

            if (category.textOverlay) {
                const overlayText = document.createElement('div');
                overlayText.className = 'category-image-overlay-text';
                overlayText.textContent = category.textOverlay;
                imgContainer.appendChild(overlayText);
            }
            link.appendChild(imgContainer);
        }

        const nameSpan = document.createElement('span');
        nameSpan.textContent = category.name;
        nameSpan.className = 'category-name-text';
        link.appendChild(nameSpan);

        if (category.description) {
            const descP = document.createElement('p');
            descP.textContent = category.description;
            descP.className = 'category-description-text';
            link.appendChild(descP);
        }
        
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

        const imgContainer = document.createElement('div');
        imgContainer.className = 'item-image-container';

        const img = document.createElement('img');
        img.src = item.image.split('/').map(part => encodeURIComponent(part)).join('/');
        img.alt = item.name;
        img.className = 'item-image';
        if (item.opacity50) { // opacity50プロパティがあれば透過率を適用
            img.classList.add('item-image-opacity-50');
        }
        imgContainer.appendChild(img);

        if (item.textOverlay) {
            const overlayText = document.createElement('div');
            overlayText.className = 'item-image-overlay-text';
            overlayText.textContent = item.textOverlay;
            imgContainer.appendChild(overlayText);
        }
        itemElement.appendChild(imgContainer);

        const itemDetails = document.createElement('div');
        itemDetails.className = 'item-details';

        const itemName = document.createElement('h3');
        itemName.className = 'item-name';
        itemName.textContent = item.name;
        itemDetails.appendChild(itemName);

        const itemDescription = document.createElement('p');
        itemDescription.className = 'item-description';
        itemDescription.textContent = item.description;
        if (item.id === 'special-001') {
            itemDescription.classList.add('item-description-pale-yellow');
        }
        itemDetails.appendChild(itemDescription);

        if (item.price !== undefined) {
            const itemPrice = document.createElement('p');
            itemPrice.className = 'item-price';
            itemPrice.textContent = `¥${item.price.toLocaleString()}`;
            itemDetails.appendChild(itemPrice);
        }

        itemElement.appendChild(itemDetails);
        container.appendChild(itemElement);
    }
    app.appendChild(container);
}


// URLのハッシュが変わった時、またはページが読み込まれた時にルーターを実行
window.addEventListener('hashchange', router);
window.addEventListener('DOMContentLoaded', router);