document.addEventListener('DOMContentLoaded', function() {
    // menuData is now in data.js

    const menuContainer = document.getElementById('menu');

    for (const category in menuData) {
        const categorySection = document.createElement('section');
        categorySection.classList.add('category');

        const categoryTitle = document.createElement('h2');
        categoryTitle.classList.add('category-title');
        categoryTitle.textContent = category;
        categorySection.appendChild(categoryTitle);

        const itemsGrid = document.createElement('div');
        itemsGrid.classList.add('menu-items-grid');

        menuData[category].forEach(item => {
            // Create a link for each item
            const menuLink = document.createElement('a');
            menuLink.href = `detail.html?item=${item.id}`;
            menuLink.classList.add('menu-item-link'); // Add a class for styling

            const menuItem = document.createElement('div');
            menuItem.classList.add('menu-item');

            const itemImage = document.createElement('img');
            itemImage.src = item.img;
            itemImage.alt = item.name;
            menuItem.appendChild(itemImage);

            const itemDetails = document.createElement('div');
            itemDetails.classList.add('menu-item-details');
            
            const itemName = document.createElement('h3');
            itemName.classList.add('menu-item-name');
            itemName.textContent = item.name;
            itemDetails.appendChild(itemName);

            const itemPrice = document.createElement('p');
            itemPrice.classList.add('menu-item-price'); // 新しいクラス名
            itemPrice.textContent = `¥${item.price.toLocaleString()}`;
            itemDetails.appendChild(itemPrice);

            menuItem.appendChild(itemDetails);
            
            // Append the item to the link, and the link to the grid
            menuLink.appendChild(menuItem);
            itemsGrid.appendChild(menuLink);
        });

        categorySection.appendChild(itemsGrid);
        menuContainer.appendChild(categorySection);
    }
});