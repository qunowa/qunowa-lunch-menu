document.addEventListener('DOMContentLoaded', function() {
    const params = new URLSearchParams(window.location.search);
    const itemId = params.get('item');

    let itemData = null;

    // Find the item in menuData
    for (const category in menuData) {
        const foundItem = menuData[category].find(item => item.id === itemId);
        if (foundItem) {
            itemData = foundItem;
            break;
        }
    }

    if (itemData) {
        document.getElementById('detail-img').src = itemData.img;
        document.getElementById('detail-img').alt = itemData.name;
        document.getElementById('detail-name').textContent = itemData.name;
        document.getElementById('detail-price').textContent = `${itemData.price.toLocaleString()}円 (税込)`;
        document.getElementById('detail-desc').textContent = itemData.description;
        document.title = itemData.name; // Update the page title
    } else {
        // Handle case where item is not found
        document.querySelector('.detail-container').innerHTML = '<h1>お料理が見つかりませんでした。</h1><a href="index.html">メニューに戻る</a>';
    }
});