const menuData = {
  siteConfig: {
    mainLogo: "images/kyu.svg",
    mainTitleLines: [
      { text: "qunowa", class: "line-1" },
      { text: "食堂", class: "line-2" },
      { text: "くのわ", class: "line-3" },
      { text: "qutte.nonde.waratte.", class: "line-4" }
    ]
  },
  categories: [
    {
      id: "fair-menu",
      name: "秋の感謝祭フェア",
      image: "images/IMG_0062.JPG",
      textOverlay: "秋の感謝祭フェア",
      description: "旬の食材をふんだんに使った、この秋だけの特別なメニューをご用意しました。心ゆくまでご堪能ください。",
      items: [
        { id: "fair-001", name: "秋刀魚塩焼き", price: 880, image: "images/秋刀魚塩焼き.jpg", description: "旬の秋刀魚を香ばしく焼き上げました。" },
        { id: "fair-002", name: "きのこと豆腐のサラダ", price: 780, image: "images/きのこサラダ.webp", description: "ヘルシーで彩り豊かな秋の味覚サラダ。" },
        { id: "fair-003", name: "里芋まんじゅうと茄子の揚げ出し", price: 680, image: "images/里芋揚げ出し.jpg", description: "優しい出汁が染み込んだ、ほっこりする一品。" },
        { id: "fair-004", name: "銀杏塩煎り", price: 580, image: "images/銀杏塩煎り.jpg", description: "秋の風物詩、ほろ苦さがたまらない。" },
        { id: "fair-005", name: "鮭ハラス焼き", price: 680, image: "images/鮭はらす焼.jpg", description: "脂の乗った鮭ハラスをじっくり焼き上げました。" }
      ]
    },
    {
      id: "grand-menu",
      name: "グランドメニュー",
      image: "images/86.jpg", // 実際の画像に変更
      textOverlay: "グランドメニュー",
      description: "定番から旬の味まで、当店自慢の料理を幅広くご用意しました。 お好みの一品がきっと見つかるグランドメニューを、どうぞごゆっくりお楽しみください。",
      subcategories: [
        { id: "fish", name: "魚", image: "images/魚.jpg", items: [
            { id: "fish-001", name: "本日の刺身３点盛り", price: 1380, image: "images/刺身/3点盛り.jpeg", description: "その日仕入れた新鮮な魚介を厳選。" },
            { id: "fish-002", name: "さわらの炙り刺し", price: 780, image: "images/刺身/さわら炙り刺身.jpg", description: "香ばしく炙ったさわらの旨味。" },
            { id: "fish-003", name: "真いわし刺身", price: 680, image: "images/刺身/真鰯刺身.jpg", description: "新鮮ないわしをシンプルに。" },
            { id: "fish-004", name: "太刀魚炙り刺身", price: 780, image: "images/刺身/太刀魚.jpg", description: "皮目を香ばしく炙った太刀魚の刺身。" },
            { id: "fish-005", name: "なめろう 韓国海苔", price: 580, image: "images/刺身/なめろう.jpg", description: "新鮮な魚をたたき、特製味噌で仕上げました。韓国海苔とご一緒に。" }
        ]},
        { id: "meat", name: "肉", image: "images/肉.jpg", items: [
            { id: "meat-001", name: "豚ばら軟骨柔らか煮", price: 780, image: "images/肉/豚ばら軟骨.jpg", description: "じっくり煮込んだとろけるような豚ばら軟骨。" },
            { id: "meat-002", name: "肉焼売", price: 680, image: "images/肉/肉焼売.jpg", description: "ジューシーな肉汁あふれる自家製焼売。" },
            { id: "meat-003", name: "チキン南蛮", price: 780, image: "images/肉/チキン南蛮.jpg", description: "甘酢とタルタルソースが絶妙な人気の一品。" },
            { id: "meat-004", name: "モツ煮", price: 680, image: "images/肉/もつ煮込み.jpeg", description: "じっくり煮込んだ特製モツ煮込み。" }
        ]},
        { id: "vegetables", name: "菜", image: "images/菜１.png", items: [
            { id: "veg-001", name: "くのわサラダ", price: 980, image: "images/菜/サラダ.jpg", description: "新鮮野菜と特製ドレッシングのオリジナルサラダ。" },
            { id: "veg-002", name: "茄子ときゅうりの浅漬け", price: 480, image: "images/菜/浅漬け.avif", description: "さっぱりとした味わいで箸休めに最適。" },
            { id: "veg-003", name: "塩だれきゅうり", price: 380, image: "images/菜/塩だれきゅうり.jpg", description: "特製塩だれで和えた、やみつきになるきゅうり。" }
        ]},
        { id: "today-special", name: "本日の主役", image: "images/主役.jpg", titleImage: "images/さつまいも/さつまいも.jpg", items: [
            { id: "special-001", name: "本日の主役は『さつまいも』", image: "images/さつまいも/さつまいも.jpg", description: "秋の豊かな恵み、ホクホクとした食感と自然な甘みが特徴のさつまいもを、様々な調理法でご提供いたします。この季節ならではの旬の味覚を存分にお楽しみください。" },
            { id: "special-002", name: "さつまいもとクリームチーズの春巻き", price: 480, image: "images/さつまいも/さつまいも春巻き.jpg", description: "甘じょっぱい組み合わせがクセになる一品。" },
            { id: "special-003", name: "さつまいもヨーグルトサラダ", price: 480, image: "images/さつまいも/さつまいもヨーグルトサラダ.jpg", description: "さつまいもの甘みとヨーグルトの酸味が絶妙。" },
            { id: "special-004", name: "さつまいもとしめじの煮浸し", price: 580, image: "images/さつまいも/さつまいもしめじ.jpg", description: "出汁が染み込んだ優しい味わい。" }
        ]},
        { id: "sake", name: "肴", image: "images/肴.jpg", items: [
            { id: "sake-001", name: "だし巻き卵", price: 680, image: "images/肴/だし巻き玉子.png", description: "丁寧に焼き上げた、出汁の効いたふっくら卵。" },
            { id: "sake-002", name: "自家製豆腐", price: 580, image: "images/肴/自家製豆腐.png", description: "大豆の旨みが凝縮された、なめらかな口当たり。" },
            { id: "sake-003", name: "和風ポテトサラダ", price: 580, image: "images/肴/和風ポテトサラダ.jpg", description: "和の食材を取り入れた、風味豊かなポテトサラダ。" },
            { id: "sake-004", name: "昆布〆明太子の千枚漬けはさみ", price: 680, image: "images/肴/明太子千枚漬け.jpg", description: "上品な昆布の旨みと明太子の辛味が絶妙。" },
            { id: "sake-005", name: "あおさ豆腐", price: 680, image: "images/肴/あおさ豆腐.jpg", description: "磯の香りが広がる、優しい味わいの豆腐。" },
            { id: "sake-006", name: "砂肝ねぎ柚子胡椒和え", price: 580, image: "images/肴/砂肝ネギ.png", description: "コリコリ食感が楽しい、お酒が進む一品。" },
            { id: "sake-007", name: "里芋と太刀魚の揚げ出し", price: 780, image: "images/肴/里芋太刀魚.jpg", description: "旬の里芋と太刀魚を揚げ出しで。" },
            { id: "sake-008", name: "クリームコロッケ『エビとブロッコリー』", price: 480, image: "images/肴/クリームコロッケブロッコリー海老.jpg", description: "とろーりクリームとエビの旨みがたまらない。" }
        ]},
        { id: "rice", name: "飯", image: "images/飯.jpeg", items: [
            { id: "rice-001", name: "鮭とイクラの土鍋ご飯", price: 2400, image: "images/飯/鮭といくらの土鍋ご飯.jpeg", description: "贅沢な海の幸を土鍋で炊き上げました。" },
            { id: "rice-002", name: "地魚ぶりご飯", price: 780, image: "images/飯/地魚炙り.jpeg", description: "新鮮な地魚の旨みがご飯に染み渡ります。" },
            { id: "rice-003", name: "セロリ味噌の焼きおにぎり", price: 380, image: "images/飯/味噌焼きおにぎり.png", description: "香ばしい味噌とセロリの風味が食欲をそそります。" },
            { id: "rice-004", name: "豆乳坦々雑炊", price: 680, image: "https://placehold.jp/350x200.png?text=豆乳坦々雑炊", description: "豆乳ベースの優しい味わい、〆にも最適。" }
        ]},
        { id: "soup", name: "汁", image: "images/汁.jpeg", items: [
            { id: "soup-001", name: "貝汁", price: 580, image: "images/汁/貝汁.png", description: "磯の香りが広がる、旨みたっぷりの貝汁。" },
            { id: "soup-002", name: "あら汁", price: 480, image: "images/汁/あら汁.jpg", description: "魚の旨みが凝縮された、風味豊かなあら汁。" }
        ]}
      ]
    },
    {
      id: "lunch-menu",
      name: "ランチメニュー",
      image: "images/ランチメニュー/刺身定食.png", // 実際の画像に変更
      textOverlay: "ランチメニュー",
      description: "お昼限定のお得なメニュー！ 新鮮な食材を活かした日替わり定食や、こだわりの定番メニューが勢揃い。",
      items: [
        { id: "lunch-001", name: "刺身定食", price: 1600, image: "images/ランチメニュー/刺身定食.png", description: "新鮮な刺身を贅沢に盛り合わせました。" },
        { id: "lunch-002", name: "西京焼定食", price: 1400, image: "images/ランチメニュー/西京焼定食.png", description: "香ばしく焼き上げた西京焼はご飯が進みます。" },
        { id: "lunch-003", name: "さば味噌煮定食", price: 1200, image: "images/ランチメニュー/さばの味噌煮定食.png", description: "じっくり煮込んださばはとろける美味しさ。" },
        { id: "lunch-004", name: "鮭といくらの定食", price: 1800, image: "images/ランチメニュー/鮭といくら.jpg", description: "親子丼ならぬ親子定食。" },
        { id: "lunch-005", name: "豚角煮定食", price: 1400, image: "images/ランチメニュー/豚角煮定食.webp", description: "とろとろに煮込んだ豚の角煮は絶品。" }
      ]
    }
  ]
};