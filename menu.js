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
      name: "フェアメニュー",
      items: [
        { id: "item-001", name: "デミグラスハンバーグ", price: 890, image: "images/IMG_0051.JPG", description: "定番のデミグラスソースで仕上げました。" },
        { id: "item-002", name: "和風ハンバーグ", price: 890, image: "images/IMG_0052.JPG", description: "さっぱりとした大根おろしとポン酢でどうぞ。" },
        { id: "item-101", name: "ミートソース", price: 790, image: "images/IMG_0053.JPG", description: "じっくり煮込んだ自家製ミートソースです。" }
      ]
    },
    {
      id: "grand-menu",
      name: "グランドメニュー",
      subcategories: [
        { id: "fish", name: "魚", items: [
            { id: "fish-001", name: "本日のお刺身三種盛り", price: 1280, image: "https://placehold.jp/350x200.png?text=お刺身", description: "新鮮な魚介を厳選した贅沢な盛り合わせです。" },
            { id: "fish-002", name: "真鯛の塩焼き", price: 980, image: "https://placehold.jp/350x200.png?text=真鯛の塩焼き", description: "ふっくらと焼き上げた真鯛は絶品。" },
            { id: "fish-003", name: "海老と野菜の天ぷら", price: 850, image: "https://placehold.jp/350x200.png?text=天ぷら", description: "揚げたてサクサクの天ぷらをご堪能ください。" },
            { id: "fish-004", name: "アジの南蛮漬け", price: 680, image: "https://placehold.jp/350x200.png?text=アジの南蛮漬け", description: "甘酸っぱい特製タレで仕上げました。" },
            { id: "fish-005", name: "カニクリームコロッケ", price: 720, image: "https://placehold.jp/350x200.png?text=カニクリームコロッケ", description: "とろーり濃厚なカニクリームが自慢。" }
        ]},
        { id: "meat", name: "肉", items: [
            { id: "meat-001", name: "国産牛のステーキ", price: 1800, image: "https://placehold.jp/350x200.png?text=国産牛ステーキ", description: "ジューシーな国産牛をシンプルに。" },
            { id: "meat-002", name: "鶏の唐揚げ", price: 750, image: "https://placehold.jp/350x200.png?text=鶏の唐揚げ", description: "特製ダレに漬け込んだ定番の一品。" },
            { id: "meat-003", name: "豚の角煮", price: 950, image: "https://placehold.jp/350x200.png?text=豚の角煮", description: "とろけるような柔らかさに煮込みました。" },
            { id: "meat-004", name: "ソーセージ盛り合わせ", price: 800, image: "https://placehold.jp/350x200.png?text=ソーセージ", description: "数種類のソーセージを食べ比べ。" },
            { id: "meat-005", name: "牛すじ煮込み", price: 700, image: "https://placehold.jp/350x200.png?text=牛すじ煮込み", description: "じっくり煮込んだ旨味が凝縮。" }
        ]},
        { id: "today-special", name: "本日の主役", items: [
            { id: "special-001", name: "特選海鮮丼", price: 1500, image: "https://placehold.jp/350x200.png?text=特選海鮮丼", description: "その日一番のネタを贅沢に盛り付けました。" },
            { id: "special-002", name: "和風ローストビーフ", price: 1300, image: "https://placehold.jp/350x200.png?text=ローストビーフ", description: "特製和風ソースでいただく柔らかなローストビーフ。" },
            { id: "special-003", name: "季節野菜のバーニャカウダ", price: 900, image: "https://placehold.jp/350x200.png?text=バーニャカウダ", description: "旬の野菜を特製ソースで。" },
            { id: "special-004", name: "フォアグラのソテー", price: 1600, image: "https://placehold.jp/350x200.png?text=フォアグラ", description: "濃厚な味わいが口の中に広がる逸品。" },
            { id: "special-005", name: "トリュフ香るポテトフライ", price: 800, image: "https://placehold.jp/350x200.png?text=トリュフポテト", description: "芳醇なトリュフの香りが食欲をそそります。" }
        ]},
        { id: "sake", name: "肴", items: [
            { id: "sake-001", name: "枝豆", price: 380, image: "https://placehold.jp/350x200.png?text=枝豆", description: "定番のおつまみ。" },
            { id: "sake-002", name: "たこわさび", price: 450, image: "https://placehold.jp/350x200.png?text=たこわさび", description: "ピリ辛で日本酒によく合います。" },
            { id: "sake-003", name: "冷奴", price: 350, image: "https://placehold.jp/350x200.png?text=冷奴", description: "薬味たっぷり。" },
            { id: "sake-004", name: "漬物盛り合わせ", price: 500, image: "https://placehold.jp/350x200.png?text=漬物", description: "季節の野菜を丁寧に漬け込みました。" },
            { id: "sake-005", name: "エイヒレの炙り", price: 600, image: "https://placehold.jp/350x200.png?text=エイヒレ", description: "香ばしく炙ったエイヒレは酒の肴に最高。" }
        ]},
        { id: "rice", name: "飯", items: [
            { id: "rice-001", name: "白ごはん", price: 200, image: "https://placehold.jp/350x200.png?text=白ごはん", description: "ふっくら炊き上げたご飯。" },
            { id: "rice-002", name: "お茶漬け（梅・鮭）", price: 550, image: "https://placehold.jp/350x200.png?text=お茶漬け", description: "〆にぴったり。" },
            { id: "rice-003", name: "焼きおにぎり", price: 400, image: "https://placehold.jp/350x200.png?text=焼きおにぎり", description: "香ばしい醤油の香りが食欲をそそります。" },
            { id: "rice-004", name: "TKG（卵かけご飯）", price: 480, image: "https://placehold.jp/350x200.png?text=TKG", description: "特製醤油でどうぞ。" },
            { id: "rice-005", name: "ミニいくら丼", price: 980, image: "https://placehold.jp/350x200.png?text=いくら丼", description: "プチプチ食感がたまらない。" }
        ]},
        { id: "soup", name: "汁", items: [
            { id: "soup-001", name: "あさりのお味噌汁", price: 300, image: "https://placehold.jp/350x200.png?text=あさり味噌汁", description: "あさりの出汁が効いたお味噌汁。" },
            { id: "soup-002", name: "豚汁", price: 450, image: "https://placehold.jp/350x200.png?text=豚汁", description: "具だくさんで栄養満点。" },
            { id: "soup-003", name: "玉子スープ", price: 350, image: "https://placehold.jp/350x200.png?text=玉子スープ", description: "ふんわり玉子の優しい味わい。" },
            { id: "soup-004", name: "わかめスープ", price: 280, image: "https://placehold.jp/350x200.png?text=わかめスープ", description: "シンプルながらも奥深い味わい。" },
            { id: "soup-005", name: "季節のポタージュ", price: 500, image: "https://placehold.jp/350x200.png?text=ポタージュ", description: "旬の野菜を使った濃厚なポタージュ。" }
        ]}
      ]
    },
    {
      id: "lunch-menu",
      name: "ランチメニュー",
      items: [
        { id: "lunch-001", name: "日替わり定食", price: 880, image: "https://placehold.jp/350x200.png?text=日替わり定食", description: "毎日変わるお得な定食です。" },
        { id: "lunch-002", name: "カツ丼セット", price: 950, image: "https://placehold.jp/350x200.png?text=カツ丼", description: "サクサクのカツを特製出汁で。" },
        { id: "lunch-003", name: "海老天丼", price: 1050, image: "https://placehold.jp/350x200.png?text=海老天丼", description: "プリプリの海老天が3本。" },
        { id: "lunch-004", name: "鶏の唐揚げ定食", price: 850, image: "https://placehold.jp/350x200.png?text=唐揚げ定食", description: "ボリューム満点の人気メニュー。" },
        { id: "lunch-005", name: "ミニ蕎麦とミニ丼セット", price: 900, image: "https://placehold.jp/350x200.png?text=蕎麦と丼", description: "お好きなミニ丼を選べます。" }
      ]
    }
  ]
};