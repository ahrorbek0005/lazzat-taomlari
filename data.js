// ==========================================================
// Lazzat Oshxona & Retseptlar - 52 ta Retseptlar Ma'lumotlar Bazasi
// ==========================================================

window.RECIPES_DATA = [
  // ---------------- MILLIY TAOMLAR (1-15) ----------------
  {
    id: 1,
    title: "To'y Oshi (Samarqandcha)",
    category: "milliy",
    categoryLabel: "Milliy taom",
    time: 90,
    servings: 4,
    calories: 650,
    difficulty: "O'rtacha",
    rating: 4.9,
    reviewsCount: 142,
    image: "https://images.unsplash.com/photo-1563379091339-03b21ab4a4f8?auto=format&fit=crop&w=800&q=80",
    description: "Samarqandcha an'anaviy to'y oshi — mayin qo'y go'shti, devzira guruch, sariq sabzi va xushbo'y zira bilan tayyorlanadigan milliy iftixorimiz.",
    ingredients: [
      { name: "Devzira yoki Lazer guruchi", amount: 200, unit: "g" },
      { name: "Qo'y yoki mol go'shti", amount: 200, unit: "g" },
      { name: "Sariq va qizil sabzi", amount: 250, unit: "g" },
      { name: "Piyoz", amount: 50, unit: "g" },
      { name: "O'simlik yog'i / dumba yog'i", amount: 60, unit: "ml" },
      { name: "Ivitilgan no'xat", amount: 30, unit: "g" },
      { name: "Mayiz (qora)", amount: 15, unit: "g" },
      { name: "Zira va sarimsoqpiyoz", amount: 1, unit: "ta'bga ko'ra" }
    ],
    instructions: [
      "Qozonda dumba yog'i va o'simlik yog'ini qizdiring.",
      "Katta bo'laklangan go'shtni solib qizarguncha baland olovda qovuring.",
      "Piyozni qo'shib tillarang bo'lguncha qovurishda davom eting.",
      "Sabzi, no'xat, zira va suv quyib 40 daqiqa past olovda zirvak qaynating.",
      "Yuvilgan guruchni solib, qaynoq suv quying va suvini tortguncha pishiring.",
      "Guruchni gumbaz qilib yig'ing, sarimsoq tiqib 25 daqiqa damlang."
    ],
    tips: "Guruchni damlashdan oldin zirani kaftda ezib sepsangiz, xushbo'y hidi oshning butun qatlamiga tarqaladi."
  },
  {
    id: 2,
    title: "Toshkentcha Choyxona Palovi",
    category: "milliy",
    categoryLabel: "Milliy taom",
    time: 80,
    servings: 4,
    calories: 680,
    difficulty: "O'rtacha",
    rating: 5.0,
    reviewsCount: 198,
    image: "https://images.unsplash.com/photo-1546069901-ba9599a7e63c?auto=format&fit=crop&w=800&q=80",
    description: "Qora zira va qo'y dumbasi bilan qoraytirilgan Toshkent uslubidagi to'yimli choyxona palovi.",
    ingredients: [
      { name: "Lazer guruchi", amount: 200, unit: "g" },
      { name: "Qo'y go'shti", amount: 220, unit: "g" },
      { name: "Sariq sabzi", amount: 200, unit: "g" },
      { name: "Piyoz", amount: 80, unit: "g" },
      { name: "Dumba yog'i", amount: 70, unit: "g" },
      { name: "Zira, murch va tuz", amount: 1, unit: "ta'bga ko'ra" }
    ],
    instructions: [
      "Dumba yog'ini eritib jizzasini oling.",
      "Piyozni qoramtir tillarang bo'lguncha qovuring.",
      "Go'shtni solib kuchli olovda qovurib, sabzini qo'shing.",
      "Suv quyib zirvakni 35 daqiqa qaynating.",
      "Guruchni solib suvini to'liq torttiring va 20 daqiqa dimlang."
    ],
    tips: "Piyozni yaxshi qovursangiz palovning rangi chiroyli qahrabo tus oladi."
  },
  {
    id: 3,
    title: "Qarsildoq Varaqi Somsa",
    category: "milliy",
    categoryLabel: "Milliy taom",
    time: 55,
    servings: 4,
    calories: 380,
    difficulty: "O'rtacha",
    rating: 4.8,
    reviewsCount: 112,
    image: "https://images.unsplash.com/photo-1601050690597-df0568f70950?auto=format&fit=crop&w=800&q=80",
    description: "Qat-qat qarsildoq xamir, shirali go'sht va ko'p piyoz bilan to'ldirilgan haqiqiy tandir uslubidagi somsa.",
    ingredients: [
      { name: "Oliy navli bug'doy uni", amount: 120, unit: "g" },
      { name: "Sariyog' yoki margarin", amount: 40, unit: "g" },
      { name: "Mol go'shti (mayda to'g'ralgan)", amount: 100, unit: "g" },
      { name: "Dumba yog'i", amount: 25, unit: "g" },
      { name: "Piyoz", amount: 100, unit: "g" },
      { name: "Zira, murch va tuz", amount: 1, unit: "ta'bga ko'ra" }
    ],
    instructions: [
      "Xamir qorib yupqa yoying, sariyog' surtib rulet qilib o'rang va tindiring.",
      "Go'sht, dumba va piyozni to'g'rab qiyma tayyorlang.",
      "Xamirni zuvalalarga bo'lib, o'rtasiga qiyma solib tuging.",
      "200°C da 30-35 daqiqa qizarguncha pishiring."
    ],
    tips: "Xamirni rulet qilib muzlatgichda 30 daqiqa sovutib olsangiz, qatlamlari ajralib turadi."
  },
  {
    id: 4,
    title: "Uyg'urcha Cho'zma Lag'mon",
    category: "milliy",
    categoryLabel: "Milliy taom",
    time: 60,
    servings: 4,
    calories: 520,
    difficulty: "Qiyin",
    rating: 4.9,
    reviewsCount: 167,
    image: "https://images.unsplash.com/photo-1569718212165-3a8278d5f624?auto=format&fit=crop&w=800&q=80",
    description: "Qo'lda cho'zilgan elastik xamir, xushbo'y go'sht va qarsildoq sabzavotlardan iborat sharqona durdona.",
    ingredients: [
      { name: "Lag'mon uchun oliy un", amount: 150, unit: "g" },
      { name: "Mol go'shti", amount: 100, unit: "g" },
      { name: "Bolgar qalampiri", amount: 60, unit: "g" },
      { name: "Pomidor va tomat", amount: 50, unit: "g" },
      { name: "Jusay yoki selderey", amount: 30, unit: "g" },
      { name: "Sarimsoq va soya sousi", amount: 15, unit: "ml" }
    ],
    instructions: [
      "Xamirni qoring, piltalar qilib cho'zing va sho'r suvda pishirib oling.",
      "Vok tovada go'shtni kuchli olovda qovuring.",
      "Sabzavotlarni tezlik bilan qovurib, sous va sho'rva qo'shing.",
      "Kosaga pishgan lapshani solib, ustidan qaynoq say quyib torting."
    ],
    tips: "Sabzavotlarni ezilib ketmasligi uchun baland olovda 3-4 daqiqadan oshirmaslik kerak."
  },
  {
    id: 5,
    title: "Bug'da Pishgan Mayin Manti",
    category: "milliy",
    categoryLabel: "Milliy taom",
    time: 50,
    servings: 4,
    calories: 430,
    difficulty: "O'rtacha",
    rating: 4.8,
    reviewsCount: 115,
    image: "https://images.unsplash.com/photo-1541696432-82c6da8ce7bf?auto=format&fit=crop&w=800&q=80",
    description: "Yupqa xamir ichida shirali qiyma va piyoz. Maxsus qasqonda bug'da pishiriladi.",
    ingredients: [
      { name: "Un", amount: 120, unit: "g" },
      { name: "Mol yoki qo'y go'shti", amount: 120, unit: "g" },
      { name: "Piyoz", amount: 120, unit: "g" },
      { name: "Dumba yog'i", amount: 25, unit: "g" },
      { name: "Zira, murch va tuz", amount: 1, unit: "ta'bga ko'ra" }
    ],
    instructions: [
      "Xamir qorib yupqa yoying, 10x10 sm to'rtburchaklar kesing.",
      "Go'sht, piyoz va ziravorlarni aralashtirib qiyma tayyorlang.",
      "Qiymani solib tuging va qasqon listlarini yog'lab tering.",
      "Qaynayotgan qasqonda 40 daqiqa pishiring."
    ],
    tips: "Piyozni go'sht miqdori bilan teng olish mantini nihoyatda shirali qiladi."
  },
  {
    id: 6,
    title: "Qovurilgan Qiyma Shashlik",
    category: "milliy",
    categoryLabel: "Milliy taom",
    time: 40,
    servings: 4,
    calories: 510,
    difficulty: "Oson",
    rating: 4.9,
    reviewsCount: 205,
    image: "https://images.unsplash.com/photo-1555939594-58d7cb561ad1?auto=format&fit=crop&w=800&q=80",
    description: "Dumbaning xushbo'y tutunida manqalda pishirilgan shirali lula qiyma shashlik.",
    ingredients: [
      { name: "Mol go'shti (laxta)", amount: 150, unit: "g" },
      { name: "Dumba yog'i", amount: 40, unit: "g" },
      { name: "Piyoz", amount: 40, unit: "g" },
      { name: "Kashnich urug'i va zira", amount: 1, unit: "ta'bga ko'ra" }
    ],
    instructions: [
      "Go'sht, dumba va piyozni go'sht qiymalagichdan o'tkazing.",
      "Qiymani 10 daqiqa qo'lda urib pishiting va sovuting.",
      "Sixlarga bir tekis yopishtiring.",
      "Cho'g'da 10-12 daqiqa har tomonini aylantirib pishiring."
    ],
    tips: "Qiymani yaxshilab urib pishitmasangiz sixdan olovga tushib ketishi mumkin."
  },
  {
    id: 7,
    title: "Qozon Kabob (Qarsildoq kartoshkali)",
    category: "milliy",
    categoryLabel: "Milliy taom",
    time: 65,
    servings: 4,
    calories: 620,
    difficulty: "Oson",
    rating: 4.9,
    reviewsCount: 130,
    image: "https://images.unsplash.com/photo-1544025162-d76694265947?auto=format&fit=crop&w=800&q=80",
    description: "Qizigan yog'da qizartirib olingan qo'y go'shti va qovurilgan butun kartoshka dimlamasi.",
    ingredients: [
      { name: "Qo'y qovurg'asi yoki mol go'shti", amount: 200, unit: "g" },
      { name: "Butun o'rtacha kartoshka", amount: 250, unit: "g" },
      { name: "O'simlik yog'i", amount: 80, unit: "ml" },
      { name: "Zira, kashnich va tuz", amount: 1, unit: "ta'bga ko'ra" }
    ],
    instructions: [
      "Avval tozalangan butun kartoshkalarni yog'da qizarguncha qovurib oling.",
      "Keyin go'shtni solib tilla rang bo'lguncha qovuring.",
      "Qozonga go'shtni, ustiga kartoshkalarni tering, ziravorlar sepib 45 daqiqa past olovda dimlang."
    ],
    tips: "Qozon qopqog'iga chuqur likopcha bostirilsa bug' tashqariga chiqmay go'sht og'izda eriydigan bo'ladi."
  },
  {
    id: 8,
    title: "Sabzavotli Dimlama",
    category: "milliy",
    categoryLabel: "Milliy taom",
    time: 75,
    servings: 5,
    calories: 450,
    difficulty: "Oson",
    rating: 4.8,
    reviewsCount: 92,
    image: "https://images.unsplash.com/photo-1574484284002-952d92456975?auto=format&fit=crop&w=800&q=80",
    description: "Qat-qat terilgan go'sht, karam, kartoshka va xushbo'y ko'katlarning o'z bug'ida pishishi.",
    ingredients: [
      { name: "Mol yoki qo'y go'shti", amount: 150, unit: "g" },
      { name: "Karam barglari", amount: 150, unit: "g" },
      { name: "Kartoshka va sabzi", amount: 150, unit: "g" },
      { name: "Pomidor va bolgar qalampiri", amount: 80, unit: "g" },
      { name: "Sarimsoq va rayhon", amount: 1, unit: "ta'bga ko'ra" }
    ],
    instructions: [
      "Qozon tubiga go'shtni tering, ustidan sabzavotlarni qavatma-qavat joylashtiring.",
      "Har bir qatlamga tuz va zira seping.",
      "Ustini katta butun karam barglari bilan zich yopib, qopqoqni yoping.",
      "Eng past olovda 1 soat 15 daqiqa dimlang."
    ],
    tips: "Suv umuman solinmaydi, sabzavotlar o'z sharbatida pishadi."
  },
  {
    id: 9,
    title: "Andijoncha Xonim",
    category: "milliy",
    categoryLabel: "Milliy taom",
    time: 45,
    servings: 4,
    calories: 390,
    difficulty: "Oson",
    rating: 4.7,
    reviewsCount: 88,
    image: "https://images.unsplash.com/photo-1589302168068-964664d93dc0?auto=format&fit=crop&w=800&q=80",
    description: "Yupqa xamir ichiga mayda to'g'ralgan kartoshka va piyoz o'ralgan, pomidorli qayla bilan tortiladigan taom.",
    ingredients: [
      { name: "Un", amount: 120, unit: "g" },
      { name: "Kartoshka", amount: 150, unit: "g" },
      { name: "Piyoz", amount: 100, unit: "g" },
      { name: "O'simlik yog'i", amount: 30, unit: "ml" },
      { name: "Tomatli qayla va zira", amount: 1, unit: "ta'bga ko'ra" }
    ],
    instructions: [
      "Xamirni yupqa qilib yoying.",
      "Mayda to'g'ralgan kartoshka, piyoz va ziravorlarni aralashtirib xamir ustiga yoying.",
      "Rulet qilib o'rab qasqonda 35 daqiqa pishiring.",
      "Kesib, ustidan qovurilgan pomidorli qayla quyib uzating."
    ],
    tips: "Kartoshkani juda yupqa somoncha qilib to'g'rasangiz xonim tez va bir tekis pishadi."
  },
  {
    id: 10,
    title: "Toshkentcha Go'shtli Norin",
    category: "milliy",
    categoryLabel: "Milliy taom",
    time: 90,
    servings: 5,
    calories: 490,
    difficulty: "Qiyin",
    rating: 5.0,
    reviewsCount: 175,
    image: "https://images.unsplash.com/photo-1540420773420-3366772f4999?auto=format&fit=crop&w=800&q=80",
    description: "Quritilgan ot go'shti (qazi) va mol go'shti bilan ingichka qilib to'g'ralgan an'anaviy xamirli taom.",
    ingredients: [
      { name: "Oliy un", amount: 150, unit: "g" },
      { name: "Qazi va quritilgan go'sht", amount: 120, unit: "g" },
      { name: "Paxta yoki o'simlik yog'i", amount: 30, unit: "ml" },
      { name: "Zira va qora murch", amount: 1, unit: "ta'bga ko'ra" }
    ],
    instructions: [
      "Go'sht va qazini sho'rvada 2 soat mildiratib pishiring.",
      "Xamirni yupqa yoyib, to'rtburchak kesib qaynoq sho'rvada pishirib oling.",
      "Xamirlarni sovitib, yog'lab, ingichka qil qilib to'g'rang.",
      "Go'shtni ham mayda to'g'rab, xamir va zira bilan aralashtiring."
    ],
    tips: "Pishgan xamir barglarini yog'lab yelpig'ich bilan tez sovitish lozim."
  },
  {
    id: 11,
    title: "Mayda Qovurma Chuchvara",
    category: "milliy",
    categoryLabel: "Milliy taom",
    time: 40,
    servings: 4,
    calories: 460,
    difficulty: "O'rtacha",
    rating: 4.8,
    reviewsCount: 120,
    image: "https://images.unsplash.com/photo-1534422298391-e4f8c172dddb?auto=format&fit=crop&w=800&q=80",
    description: "Qizdirilgan yog'da tilla rang bo'lguncha qovurilgan qarsildoq mittivoy chuchvaralar.",
    ingredients: [
      { name: "Un", amount: 120, unit: "g" },
      { name: "Mol go'shti qiymasi", amount: 100, unit: "g" },
      { name: "Piyoz", amount: 50, unit: "g" },
      { name: "O'simlik yog'i (qovurishga)", amount: 150, unit: "ml" },
      { name: "Suzma va rayhon", amount: 1, unit: "yoniga" }
    ],
    instructions: [
      "Yupqa xamirdan mitti chuchvaralar tuging.",
      "Chuqur qozonda yog'ni qizdiring.",
      "Chuchvaralarni solib 4-5 daqiqa tilla rang bo'lguncha qovurib oling.",
      "Qatiq yoki suzma bilan birga dasturxonga torting."
    ],
    tips: "Chuchvara qancha mitti bo'lsa shuncha qarsildoq va xushxo'r chiqadi."
  },
  {
    id: 12,
    title: "Jizzaxcha Shirali Jiz",
    category: "milliy",
    categoryLabel: "Milliy taom",
    time: 50,
    servings: 3,
    calories: 590,
    difficulty: "Oson",
    rating: 4.9,
    reviewsCount: 160,
    image: "https://images.unsplash.com/photo-1529692236671-f1f6cf9683ba?auto=format&fit=crop&w=800&q=80",
    description: "O'zining tabiiy yog'ida qizartirib qovurilgan laxta go'sht, zira va shirin piyoz uyg'unligi.",
    ingredients: [
      { name: "Mol yoki qo'y go'shti (laxta)", amount: 250, unit: "g" },
      { name: "Dumba yog'i", amount: 50, unit: "g" },
      { name: "Oq piyoz", amount: 100, unit: "g" },
      { name: "Zira va yirik tuz", amount: 1, unit: "ta'bga ko'ra" }
    ],
    instructions: [
      "Go'shtni katta bo'laklarga bo'ling.",
      "Qozonda dumba yog'ini eritib, go'shtni soling va o'z sharbati chiqquncha qovuring.",
      "Qopqog'ini yopib past olovda 30 daqiqa dimlang.",
      "Oxirida olovni ko'tarib qizartiring va sirkali piyoz bilan torting."
    ],
    tips: "Go'shtni oldindan tuzlamang, faqat qovurish yakunida tuz sepsangiz shirasini yo'qotmaydi."
  },
  {
    id: 13,
    title: "Kovurdoq (Mol go'shti va kartoshka)",
    category: "milliy",
    categoryLabel: "Milliy taom",
    time: 45,
    servings: 4,
    calories: 510,
    difficulty: "Oson",
    rating: 4.8,
    reviewsCount: 95,
    image: "https://images.unsplash.com/photo-1547592180-85f173990554?auto=format&fit=crop&w=800&q=80",
    description: "Mayda to'g'ralgan go'sht, piyoz va kartoshkali xushxo'r uy qovurmasi.",
    ingredients: [
      { name: "Mol go'shti", amount: 150, unit: "g" },
      { name: "Kartoshka", amount: 200, unit: "g" },
      { name: "Piyoz", amount: 70, unit: "g" },
      { name: "Pomidor", amount: 50, unit: "g" },
      { name: "Ko'katlar va ziravorlar", amount: 1, unit: "ta'bga ko'ra" }
    ],
    instructions: [
      "Go'shtni o'rtacha kubik qilib to'g'rab qovuring.",
      "Piyoz va pomidorni qo'shib 5 daqiqa qovurishda davom eting.",
      "Kartoshkani soling, ozgina suv quyib qopqog'ini yoping va 20 daqiqa pishiring."
    ],
    tips: "Kartoshkalar ezilmasligi uchun juda tez-tez aralashtirmang."
  },
  {
    id: 14,
    title: "Shirin Qovoqli Tandir Somsa",
    category: "milliy",
    categoryLabel: "Milliy taom",
    time: 50,
    servings: 4,
    calories: 280,
    difficulty: "Oson",
    rating: 4.7,
    reviewsCount: 78,
    image: "https://images.unsplash.com/photo-1509358271058-acd22cc93898?auto=format&fit=crop&w=800&q=80",
    description: "Shirador qovoq, dumba yog'i va qora murchli parhezbop milliy somsa.",
    ingredients: [
      { name: "Un", amount: 120, unit: "g" },
      { name: "Shirin sariq qovoq", amount: 200, unit: "g" },
      { name: "Piyoz", amount: 80, unit: "g" },
      { name: "Dumba yoki sariyog'", amount: 30, unit: "g" },
      { name: "Shakar va qora murch", amount: 1, unit: "ta'bga ko'ra" }
    ],
    instructions: [
      "Qovoq va piyozni mayda to'rtburchak to'g'rang.",
      "Dumba, murch va ozgina shakar qo'shib aralashtiring.",
      "Yupqa xamirga tugib, 200°C pechda 25-30 daqiqa pishiring."
    ],
    tips: "Qovoq juda suvli bo'lsa, to'g'ragach 10 daqiqa elakda qoldirib ortiqcha sharbatini oqizing."
  },
  {
    id: 15,
    title: "Pechda Pishirilgan Tandir Go'sht",
    category: "milliy",
    categoryLabel: "Milliy taom",
    time: 110,
    servings: 6,
    calories: 550,
    difficulty: "O'rtacha",
    rating: 5.0,
    reviewsCount: 145,
    image: "https://images.unsplash.com/photo-1544025162-d76694265947?auto=format&fit=crop&w=800&q=80",
    description: "Archa shoxi va tog' ziravorlari bilan marinadlangan yumshoq go'sht.",
    ingredients: [
      { name: "Qo'y yoki mol son go'shti", amount: 300, unit: "g" },
      { name: "Tog' zirasi va kashnich", amount: 15, unit: "g" },
      { name: "Sarimsoqpiyoz", amount: 20, unit: "g" },
      { name: "Yirik tuz va murch", amount: 1, unit: "ta'bga ko'ra" }
    ],
    instructions: [
      "Go'shtga sarimsoq va ezilgan zira surtib 2 soat marinadlang.",
      "Folgaga mahkam o'rab 180°C da 1.5 soat pishiring.",
      "Oxirgi 15 daqiqada folgani ochib qizartiring."
    ],
    tips: "Pishgach 10 daqiqa tindirilsa go'sht sharbati ichida saqlanadi."
  },

  // ---------------- SHO'RVALAR (16-25) ----------------
  {
    id: 16,
    title: "Qatiqli Xushxo'r Mastava",
    category: "shorva",
    categoryLabel: "Sho'rvalar",
    time: 45,
    servings: 4,
    calories: 360,
    difficulty: "Oson",
    rating: 4.7,
    reviewsCount: 84,
    image: "https://images.unsplash.com/photo-1547592166-23ac45744acd?auto=format&fit=crop&w=800&q=80",
    description: "Mayda to'g'ralgan go'sht, guruch va sabzavotlardan iborat to'yimli sho'rva. Qatiq va yangi rayhon bilan tortiladi.",
    ingredients: [
      { name: "Mol go'shti", amount: 100, unit: "g" },
      { name: "Guruch", amount: 40, unit: "g" },
      { name: "Kartoshka", amount: 70, unit: "g" },
      { name: "Sabzi va piyoz", amount: 50, unit: "g" },
      { name: "Qatiq va rayhon", amount: 30, unit: "g" }
    ],
    instructions: [
      "Go'sht va sabzavotlarni qovurib suv quying.",
      "Qaynaganida yuvilgan guruchni soling.",
      "Kartoshkani qo'shib 15 daqiqa pishiring va qatiq bilan suzing."
    ],
    tips: "Guruch ezilib ketmasligi uchun oldindan ivitib qo'ymang."
  },
  {
    id: 17,
    title: "No'xatli Ko'za Sho'rva (Piti)",
    category: "shorva",
    categoryLabel: "Sho'rvalar",
    time: 80,
    servings: 4,
    calories: 420,
    difficulty: "O'rtacha",
    rating: 4.9,
    reviewsCount: 110,
    image: "https://images.unsplash.com/photo-1541832676-9b763b0239ab?auto=format&fit=crop&w=800&q=80",
    description: "Sopol ko'zada mildirab pishgan no'xat, qo'y go'shti va za'faronli xushbo'y sho'rva.",
    ingredients: [
      { name: "Qo'y go'shti (suyakli)", amount: 150, unit: "g" },
      { name: "Ivitilgan no'xat", amount: 60, unit: "g" },
      { name: "Kartoshka va pomidor", amount: 80, unit: "g" },
      { name: "Quritilgan olxo'ri (olcha)", amount: 15, unit: "g" }
    ],
    instructions: [
      "Ko'zachalarga go'sht va no'xatni solib suv quying.",
      "Pechda 160°C da 1 soat mildirating.",
      "Kartoshka va olxo'ri solib yana 20 daqiqa pishiring."
    ],
    tips: "Sopol ko'zada pishgan taom ta'mi metall qozondagidan ancha mayin bo'ladi."
  },
  {
    id: 18,
    title: "Klassik Qaynatma Sho'rva",
    category: "shorva",
    categoryLabel: "Sho'rvalar",
    time: 75,
    servings: 5,
    calories: 390,
    difficulty: "Oson",
    rating: 4.9,
    reviewsCount: 135,
    image: "https://images.unsplash.com/photo-1582878826629-29b7ad1cdc43?auto=format&fit=crop&w=800&q=80",
    description: "Tiniq bulonda pishirilgan yirik go'sht, butun sabzi va shirin qalampirlar.",
    ingredients: [
      { name: "Suyakli mol yoki qo'y go'shti", amount: 200, unit: "g" },
      { name: "Butun sabzi", amount: 100, unit: "g" },
      { name: "Kartoshka", amount: 100, unit: "g" },
      { name: "Piyoz va ko'katlar", amount: 50, unit: "g" }
    ],
    instructions: [
      "Go'shtni sovuq suvga solib qaynating, ko'pigini puxta oling.",
      "Piyoz va sabzini butun solib 1 soat mildirating.",
      "Kartoshka solib 15 daqiqada tayyor holga keltiring."
    ],
    tips: "Ko'pigini vaqtida olib olovni pasaytirsangiz bulon ko'zdek tiniq chiqadi."
  },
  {
    id: 19,
    title: "Tovuqli Mayin Ugra Sho'rva",
    category: "shorva",
    categoryLabel: "Sho'rvalar",
    time: 35,
    servings: 4,
    calories: 290,
    difficulty: "Oson",
    rating: 4.8,
    reviewsCount: 89,
    image: "https://images.unsplash.com/photo-1569718212165-3a8278d5f624?auto=format&fit=crop&w=800&q=80",
    description: "Qo'lda kesilgan mayin tuxumli ugra va xonaki tovuq go'shti.",
    ingredients: [
      { name: "Tovuq go'shti", amount: 120, unit: "g" },
      { name: "Qo'lda kesilgan ugra", amount: 60, unit: "g" },
      { name: "Sabzi va piyoz", amount: 40, unit: "g" },
      { name: "Kashnich va shivit", amount: 10, unit: "g" }
    ],
    instructions: [
      "Tovuqdan yengil bulon tayyorlang.",
      "Yupqa to'g'ralgan sabzini solib 10 daqiqa qaynating.",
      "Ugrani solib 3 daqiqada olovdan oling va ko'kat seping."
    ],
    tips: "Ugrani ko'p qaynatmang, sho'rvaning issig'ida o'zi yetilib oladi."
  },
  {
    id: 20,
    title: "Klassik Ruscha Qizil Borsh",
    category: "shorva",
    categoryLabel: "Sho'rvalar",
    time: 60,
    servings: 5,
    calories: 320,
    difficulty: "O'rtacha",
    rating: 4.8,
    reviewsCount: 140,
    image: "https://images.unsplash.com/photo-1578020190125-f4f7c18bc9cb?auto=format&fit=crop&w=800&q=80",
    description: "Lavlagi, yangi karam va mol go'shtidan tayyorlangan to'q qizil xushbo'y sho'rva. Smetana bilan tortiladi.",
    ingredients: [
      { name: "Mol go'shti", amount: 120, unit: "g" },
      { name: "Qizil lavlagi", amount: 100, unit: "g" },
      { name: "Karam", amount: 80, unit: "g" },
      { name: "Kartoshka va sabzi", amount: 70, unit: "g" },
      { name: "Smetana va limon sharbati", amount: 20, unit: "g" }
    ],
    instructions: [
      "Lavlagini limon sharbati bilan alohida tovada dimlab oling.",
      "Go'shtli bulonga kartoshka va karamni soling.",
      "Lavlagili aralashmani qo'shib 5 daqiqa qaynating va smetana bilan uzating."
    ],
    tips: "Lavlagiga bir necha tomchi limon suvi qo'shilsa yorqin qizil rangi saqlanadi."
  },
  {
    id: 21,
    title: "Fransuzcha Qo'ziqorinli Krem-Sho'rva",
    category: "shorva",
    categoryLabel: "Sho'rvalar",
    time: 30,
    servings: 3,
    calories: 270,
    difficulty: "Oson",
    rating: 4.9,
    reviewsCount: 162,
    image: "https://images.unsplash.com/photo-1547592166-23ac45744acd?auto=format&fit=crop&w=800&q=80",
    description: "Shampinyon qo'ziqorinlari, qaymoq va sariyog'ning mayin blenderlangan baxmaldek sho'rvasi.",
    ingredients: [
      { name: "Yangi shampinyon", amount: 150, unit: "g" },
      { name: "Qaymoq (20%)", amount: 80, unit: "ml" },
      { name: "Piyoz va sariyog'", amount: 30, unit: "g" },
      { name: "Kruton (suxarik)", amount: 20, unit: "g" }
    ],
    instructions: [
      "Qo'ziqorin va piyozni sariyog'da qovuring.",
      "Ozgina bulon quyib 10 daqiqa qaynating.",
      "Blenderda pyure qilib, qaymoq qo'shing va isiting."
    ],
    tips: "Krem sho'rvaga bir chimdim muskat yong'og'i (muskatniy orex) qo'shilsa nafis tam bag'ishlaydi."
  },
  {
    id: 22,
    title: "Tailandcha Nordon Tom Yum",
    category: "shorva",
    categoryLabel: "Sho'rvalar",
    time: 30,
    servings: 3,
    calories: 340,
    difficulty: "Qiyin",
    rating: 4.9,
    reviewsCount: 180,
    image: "https://images.unsplash.com/photo-1548943487-a2e4e43b4853?auto=format&fit=crop&w=800&q=80",
    description: "Dengiz mahsulotlari, laym, kokos suti va xushbo'y zanjabil bilan nordon-achchiq osiyocha sho'rva.",
    ingredients: [
      { name: "Krevetka yoki dengiz mahsulotlari", amount: 120, unit: "g" },
      { name: "Tom Yum pastasi", amount: 20, unit: "g" },
      { name: "Kokos suti", amount: 60, unit: "ml" },
      { name: "Cherri pomidor va shampinyon", amount: 50, unit: "g" },
      { name: "Laym sharbati va kashnich", amount: 10, unit: "ml" }
    ],
    instructions: [
      "Bulonga pastani eritib qaynating.",
      "Qo'ziqorin va krevetkalarni solib 3-4 daqiqa pishiring.",
      "Kokos suti va laym sharbati qo'shib olovdan oling."
    ],
    tips: "Krevetkalarni 3 daqiqadan ortiq qaynatmang, aks holda qattiq bo'lib qoladi."
  },
  {
    id: 23,
    title: "Turkcha Qizil Yasmiq (Mercimek) Sho'rvasi",
    category: "shorva",
    categoryLabel: "Sho'rvalar",
    time: 30,
    servings: 4,
    calories: 220,
    difficulty: "Oson",
    rating: 4.8,
    reviewsCount: 155,
    image: "https://images.unsplash.com/photo-1547592180-85f173990554?auto=format&fit=crop&w=800&q=80",
    description: "Qizil yasmiq (chechevitsa), yalpiz va quritilgan qalampirli sariyog' bilan bezatilgan turkcha pyure sho'rva.",
    ingredients: [
      { name: "Qizil yasmiq", amount: 100, unit: "g" },
      { name: "Sabzi va piyoz", amount: 50, unit: "g" },
      { name: "Sariyog' va quruq yalpiz", amount: 20, unit: "g" },
      { name: "Limon bo'laklari", amount: 1, unit: "yoniga" }
    ],
    instructions: [
      "Yasmiq va sabzavotlarni yumshaguncha qaynating.",
      "Blenderda silliq krem holiga keltiring.",
      "Sariyog'da qizdirilgan yalpiz va qalampirni ustidan quyib, limon bilan uzating."
    ],
    tips: "Limon sharbati ushbu sho'rvaning ta'mini to'liq ochib beradi."
  },
  {
    id: 24,
    title: "Italyancha Minestrone Sabzavot Sho'rvasi",
    category: "shorva",
    categoryLabel: "Sho'rvalar",
    time: 40,
    servings: 4,
    calories: 190,
    difficulty: "Oson",
    rating: 4.7,
    reviewsCount: 76,
    image: "https://images.unsplash.com/photo-1547592166-23ac45744acd?auto=format&fit=crop&w=800&q=80",
    description: "Fasol, qovoqcha (tsukkini), pomidor va mayda pasta bilan boyitilgan parhezbop sho'rva.",
    ingredients: [
      { name: "Qizil fasol (konservalangan)", amount: 60, unit: "g" },
      { name: "Tsukkini yoki qovoqcha", amount: 50, unit: "g" },
      { name: "Pomidor va selderey", amount: 50, unit: "g" },
      { name: "Mayda pasta", amount: 30, unit: "g" }
    ],
    instructions: [
      "Sabzavotlarni zaytun moyida yengil qovuring.",
      "Sabzavot bulonini quyib pastani soling.",
      "Fasolni qo'shib 12 daqiqa qaynating va parmezan seping."
    ],
    tips: "Mavsumga qarab xohlagan yangi sabzavotlarni qo'shishingiz mumkin."
  },
  {
    id: 25,
    title: "Tiniq Baliqli Xushbo'y Uxa",
    category: "shorva",
    categoryLabel: "Sho'rvalar",
    time: 40,
    servings: 4,
    calories: 250,
    difficulty: "O'rtacha",
    rating: 4.8,
    reviewsCount: 82,
    image: "https://images.unsplash.com/photo-1541832676-9b763b0239ab?auto=format&fit=crop&w=800&q=80",
    description: "Yangi oq baliq, kartoshka, dafna bargi va shivit bilan pishirilgan xushxo'r daryo sho'rvasi.",
    ingredients: [
      { name: "Yangi baliq filesi (sazan yoki sudak)", amount: 180, unit: "g" },
      { name: "Kartoshka", amount: 80, unit: "g" },
      { name: "Piyoz va sabzi", amount: 40, unit: "g" },
      { name: "Dafna yaprog'i va yangi shivit", amount: 1, unit: "ta'bga ko'ra" }
    ],
    instructions: [
      "Kartoshka va sabzini suvda yarim pishguncha qaynating.",
      "Yirik bo'laklangan baliqni soling.",
      "Past olovda 10-12 daqiqa mildirating va ko'kat seping."
    ],
    tips: "Baliq bo'laklari parchalanib ketmasligi uchun qattiq qaynatmang."
  },

  // ---------------- FAST FOOD & PITSA & PASTA (26-35) ----------------
  {
    id: 26,
    title: "Italyancha Pizza Margherita",
    category: "fastfood",
    categoryLabel: "Fast Food",
    time: 30,
    servings: 3,
    calories: 490,
    difficulty: "Oson",
    rating: 4.8,
    reviewsCount: 210,
    image: "https://images.unsplash.com/photo-1513104890138-7c749659a591?auto=format&fit=crop&w=800&q=80",
    description: "Klassik Neapol pitsasi — pomidor sousi, yangi Mozzarella va bazilik barglari.",
    ingredients: [
      { name: "Pitsa xamiri", amount: 120, unit: "g" },
      { name: "Mozzarella pishlog'i", amount: 80, unit: "g" },
      { name: "Pomidor sousi", amount: 50, unit: "g" },
      { name: "Zaytun moyi va yangi bazilik", amount: 5, unit: "dona" }
    ],
    instructions: [
      "Xamirni kaft bilan yupqa doira qilib yoying.",
      "Pomidor sousini surtib pishloq bo'laklarini tering.",
      "250°C da 8-10 daqiqa pishirib yangi bazilik seping."
    ],
    tips: "Pech imkon qadar qizigan bo'lishi xamirning qarsildoq chiqishiga yordam beradi."
  },
  {
    id: 27,
    title: "Qarsildoq Pepperoni Pitsa",
    category: "fastfood",
    categoryLabel: "Fast Food",
    time: 25,
    servings: 3,
    calories: 560,
    difficulty: "Oson",
    rating: 4.9,
    reviewsCount: 240,
    image: "https://images.unsplash.com/photo-1628840042765-356cda07504e?auto=format&fit=crop&w=800&q=80",
    description: "Achchiq xushbo'y kolbasa (pepperoni), erigan cho'ziluvchan pishloq va pomidor qaylasi.",
    ingredients: [
      { name: "Pitsa xamiri", amount: 120, unit: "g" },
      { name: "Pepperoni yoki dudlangan kolbasa", amount: 60, unit: "g" },
      { name: "Mozzarella pishlog'i", amount: 90, unit: "g" },
      { name: "Oregano va pomidor sousi", amount: 40, unit: "g" }
    ],
    instructions: [
      "Xamirga sous surtib pishloq seping.",
      "Ustiga yupqa to'g'ralgan kolbasa tering.",
      "240°C pechda pishloq qizarguncha pishiring."
    ],
    tips: "Pepperoni qizarganda chetlari kosacha bo'lib qarsildoq bo'ladi."
  },
  {
    id: 28,
    title: "Tovuqli Fettuccine Alfredo",
    category: "fastfood",
    categoryLabel: "Fast Food",
    time: 25,
    servings: 2,
    calories: 580,
    difficulty: "Oson",
    rating: 4.9,
    reviewsCount: 178,
    image: "https://images.unsplash.com/photo-1645112411341-6c4fd023714a?auto=format&fit=crop&w=800&q=80",
    description: "Qaymoqli mayin sousda tayyorlangan tilla rang tovuq filesi va Parmezan pishloqli pasta.",
    ingredients: [
      { name: "Fettuccine pastasi", amount: 100, unit: "g" },
      { name: "Tovuq filesi", amount: 120, unit: "g" },
      { name: "Yog'li qaymoq (20%)", amount: 100, unit: "ml" },
      { name: "Parmezan pishlog'i", amount: 30, unit: "g" }
    ],
    instructions: [
      "Pastani al dente holatida qaynatib oling.",
      "Tovuqni sariyog'da qovurib qaymoq quying.",
      "Pastani sousga aralashtirib parmezan seping."
    ],
    tips: "Pasta suvining bir necha qoshig'ini sousga qo'shsangiz u bir xil ipakdek bo'ladi."
  },
  {
    id: 29,
    title: "Klassik Spagetti Bolonez",
    category: "fastfood",
    categoryLabel: "Fast Food",
    time: 35,
    servings: 3,
    calories: 530,
    difficulty: "Oson",
    rating: 4.8,
    reviewsCount: 165,
    image: "https://images.unsplash.com/photo-1551183053-bf91a1d81141?auto=format&fit=crop&w=800&q=80",
    description: "Mol go'shti qiymasi, sabzavotlar va quyuq pomidorli sousda pishirilgan mashhur spagetti.",
    ingredients: [
      { name: "Spagetti", amount: 100, unit: "g" },
      { name: "Mol go'shti qiymasi", amount: 120, unit: "g" },
      { name: "Pomidor sousi yoki tomat", amount: 60, unit: "g" },
      { name: "Piyoz va sarimsoq", amount: 30, unit: "g" }
    ],
    instructions: [
      "Piyoz va sarimsoq bilan qiymani qovuring.",
      "Pomidor sousini quyib 15 daqiqa past olovda dimlang.",
      "Qaynagan spagetti ustiga sousni suzib uzating."
    ],
    tips: "Sous qancha uzoq mildirasa go'sht shuncha yumshoq bo'ladi."
  },
  {
    id: 30,
    title: "Klassik Shirali Chizburger",
    category: "fastfood",
    categoryLabel: "Fast Food",
    time: 20,
    servings: 2,
    calories: 610,
    difficulty: "Oson",
    rating: 4.9,
    reviewsCount: 220,
    image: "https://images.unsplash.com/photo-1568901346375-23c9450c58cd?auto=format&fit=crop&w=800&q=80",
    description: "Maxsus qarsildoq bulochka, 100% mol go'shti kotleti, erigan Chedder pishlog'i va xushxo'r sous.",
    ingredients: [
      { name: "Burger bulochkasi", amount: 1, unit: "dona" },
      { name: "Mol go'shti kotleti", amount: 150, unit: "g" },
      { name: "Chedder pishlog'i", amount: 2, unit: "tilim" },
      { name: "Tuzlangan bodring va pomidor", amount: 30, unit: "g" },
      { name: "Maxsus sous va salat bargi", amount: 20, unit: "g" }
    ],
    instructions: [
      "Kotletni qizigan tovada har tomonini 3 daqiqadan qovuring va ustiga pishloq qo'ying.",
      "Bulochkalarni tovada qizartirib oling.",
      "Sous surtib salat bargi, kotlet, pomidor va bodringni terib yoping."
    ],
    tips: "Kotletni tovada qovurayotganda ustidan bosmang, shirasini yo'qotadi."
  },
  {
    id: 31,
    title: "Uy Sharoitida Tovuqli Lavash (Shourma)",
    category: "fastfood",
    categoryLabel: "Fast Food",
    time: 25,
    servings: 2,
    calories: 480,
    difficulty: "Oson",
    rating: 4.8,
    reviewsCount: 195,
    image: "https://images.unsplash.com/photo-1561651823-34feb02250e4?auto=format&fit=crop&w=800&q=80",
    description: "Yupqa lavash xamiri, ziravorli qovurilgan tovuq go'shti, kartoshka chipslari va sarimsoqli sous.",
    ingredients: [
      { name: "Yupqa lavash xamiri", amount: 1, unit: "dona" },
      { name: "Tovuq go'shti", amount: 120, unit: "g" },
      { name: "Bodring va pomidor", amount: 50, unit: "g" },
      { name: "Kartoshka fri", amount: 40, unit: "g" },
      { name: "Mayonez va ketchup sousi", amount: 30, unit: "g" }
    ],
    instructions: [
      "Tovuqni tovada qizartirib to'g'rang.",
      "Lavashga sous surtib go'sht va sabzavotlarni joylang.",
      "Mahkam o'rab quruq tovada har tomonini qarsildoq qilib qizartiring."
    ],
    tips: "Tovada ikki tomonini qizartirish lavashni qarsildoq va xushbo'y qiladi."
  },
  {
    id: 32,
    title: "Qisqichbaqali Pad Thai Lapshasi",
    category: "fastfood",
    categoryLabel: "Fast Food",
    time: 20,
    servings: 2,
    calories: 450,
    difficulty: "O'rtacha",
    rating: 4.9,
    reviewsCount: 110,
    image: "https://images.unsplash.com/photo-1559847844-5315695dadae?auto=format&fit=crop&w=800&q=80",
    description: "Guruch lapshasi, krevetkalar, tuxum, yeryong'oq va tamarind sousli mashhur taom.",
    ingredients: [
      { name: "Guruch lapshasi", amount: 100, unit: "g" },
      { name: "Krevetkalar", amount: 100, unit: "g" },
      { name: "Tuxum", amount: 1, unit: "dona" },
      { name: "Maydalangan yeryong'oq", amount: 20, unit: "g" },
      { name: "Soya sousi va laym", amount: 15, unit: "ml" }
    ],
    instructions: [
      "Lapshani iliq suvda iviting.",
      "Vokda krevetka va tuxumni tez qovuring.",
      "Lapsha va sousni qo'shib 2 daqiqa qovuring, ustiga yeryong'oq seping."
    ],
    tips: "Barcha masalliqlarni oldindan tayyorlab qo'yish kerak, chunki vokda 3 daqiqada pishadi."
  },
  {
    id: 33,
    title: "Qarsildoq Tovuq Naggetslari va Fri",
    category: "fastfood",
    categoryLabel: "Fast Food",
    time: 25,
    servings: 3,
    calories: 490,
    difficulty: "Oson",
    rating: 4.8,
    reviewsCount: 150,
    image: "https://images.unsplash.com/photo-1562967914-608f82629710?auto=format&fit=crop&w=800&q=80",
    description: "Suxarikda panirlangan mayin tovuq bo'laklari va tilla rang kartoshka fri.",
    ingredients: [
      { name: "Tovuq filesi", amount: 150, unit: "g" },
      { name: "Panir suxarigi", amount: 50, unit: "g" },
      { name: "Tuxum va un", amount: 30, unit: "g" },
      { name: "Kartoshka", amount: 150, unit: "g" }
    ],
    instructions: [
      "Tovuqni bo'laklab un, tuxum va suxarikka botiring.",
      "Qizigan yog'da 5-6 daqiqa qizartiring.",
      "Kartoshkani somoncha to'g'rab alohida qovuring."
    ],
    tips: "Suxarikka ozgina parmezan va sarimsoq kukuni qo'shilsa ta'mi yanada boy bo'ladi."
  },
  {
    id: 34,
    title: "Meksikancha Tovuqli Quesadilla",
    category: "fastfood",
    categoryLabel: "Fast Food",
    time: 15,
    servings: 2,
    calories: 420,
    difficulty: "Oson",
    rating: 4.8,
    reviewsCount: 95,
    image: "https://images.unsplash.com/photo-1565299585323-38d6b0865b47?auto=format&fit=crop&w=800&q=80",
    description: "Tortilya xamiri ichida erigan pishloq, shirali tovuq go'shti va makkajo'xori.",
    ingredients: [
      { name: "Tortilya yupqa noni", amount: 2, unit: "dona" },
      { name: "Pishgan tovuq go'shti", amount: 100, unit: "g" },
      { name: "Qattiq pishloq", amount: 80, unit: "g" },
      { name: "Konservalangan makkajo'xori", amount: 30, unit: "g" }
    ],
    instructions: [
      "Tortilyaning yarmiga tovuq, makkajo'xori va pishloq solib buking.",
      "Quruq tovada har tomonini 2 daqiqadan pishloq eriguncha qizartiring."
    ],
    tips: "Smetana yoki salsa sousi bilan ajoyib uyg'unlashadi."
  },
  {
    id: 35,
    title: "Klassik Club Sandwich (Klab Sendvich)",
    category: "fastfood",
    categoryLabel: "Fast Food",
    time: 15,
    servings: 2,
    calories: 410,
    difficulty: "Oson",
    rating: 4.7,
    reviewsCount: 88,
    image: "https://images.unsplash.com/photo-1528735602780-2552fd46c7af?auto=format&fit=crop&w=800&q=80",
    description: "Uch qavat tost noni, qovurilgan kurka/tovuq go'shti, tuxum, pomidor va salat bargi.",
    ingredients: [
      { name: "Tost noni", amount: 3, unit: "tilim" },
      { name: "Tovuq filesi yoki kurka", amount: 80, unit: "g" },
      { name: "Qovurilgan tuxum", amount: 1, unit: "dona" },
      { name: "Pishloq va pomidor", amount: 40, unit: "g" }
    ],
    instructions: [
      "Nonlarni tosterda yoki tovada qizartiring.",
      "Sous surtib masalliqlarni qatlam-qatlam qilib tering.",
      "Uchburchak shaklida kesib cho'pcha bilan mahkamlang."
    ],
    tips: "Nonlar orasiga ingichka mayonez surtilsa quruq bo'lib qolmaydi."
  },

  // ---------------- SALATLAR & GAZAKLAR (36-45) ----------------
  {
    id: 36,
    title: "O'zbekona Achichuk Salati",
    category: "salat",
    categoryLabel: "Salatlar",
    time: 10,
    servings: 4,
    calories: 75,
    difficulty: "Oson",
    rating: 4.9,
    reviewsCount: 156,
    image: "https://images.unsplash.com/photo-1540420773420-3366772f4999?auto=format&fit=crop&w=800&q=80",
    description: "Yupqa shaffof to'g'ralgan shirin pomidor, piyoz va xushbo'y rayhon.",
    ingredients: [
      { name: "Shirin pomidor (Yusupov)", amount: 120, unit: "g" },
      { name: "Oq piyoz", amount: 40, unit: "g" },
      { name: "Achchiq qalampir", amount: 5, unit: "g" },
      { name: "Yangi rayhon va tuz", amount: 1, unit: "ta'bga ko'ra" }
    ],
    instructions: [
      "Piyozni yupqa yarim halqa qilib to'g'rab sovuq suvda yuving.",
      "Pomidorni juda yupqa qilib parrak to'g'rang.",
      "Dasturxonga tortishdan oldin tuz va rayhon qo'shing."
    ],
    tips: "Oldindan tuz sepmang, aks holda suvi chiqib ketadi."
  },
  {
    id: 37,
    title: "Qarsildoq Tovuqli Sezar Salati",
    category: "salat",
    categoryLabel: "Salatlar",
    time: 20,
    servings: 2,
    calories: 340,
    difficulty: "Oson",
    rating: 4.8,
    reviewsCount: 189,
    image: "https://images.unsplash.com/photo-1550304943-4f24f54ddde9?auto=format&fit=crop&w=800&q=80",
    description: "Aysberg salat barglari, grilda pishgan tovuq filesi, cherri pomidor va sarimsoqli krutonlar.",
    ingredients: [
      { name: "Aysberg salati", amount: 100, unit: "g" },
      { name: "Gril tovuq go'shti", amount: 100, unit: "g" },
      { name: "Cherri pomidor", amount: 50, unit: "g" },
      { name: "Suxariklar va Sezar sousi", amount: 40, unit: "g" },
      { name: "Parmezan pishlog'i", amount: 15, unit: "g" }
    ],
    instructions: [
      "Salat barglarini qo'lda yiring.",
      "Tovuqni to'g'rab qo'shing.",
      "Sous bilan aralashtirib ustiga suxarik va pishloq seping."
    ],
    tips: "Suxariklarni eng oxirida qo'shing, shunda qarsildoq turadi."
  },
  {
    id: 38,
    title: "Yangi Grekcha Salat",
    category: "salat",
    categoryLabel: "Salatlar",
    time: 15,
    servings: 3,
    calories: 180,
    difficulty: "Oson",
    rating: 4.8,
    reviewsCount: 142,
    image: "https://images.unsplash.com/photo-1540189549336-e6e99c3679fe?auto=format&fit=crop&w=800&q=80",
    description: "Bodring, pomidor, qora zaytun (maslina), oregano va mayin Feta pishlog'i.",
    ingredients: [
      { name: "Bodring va pomidor", amount: 150, unit: "g" },
      { name: "Feta pishlog'i", amount: 60, unit: "g" },
      { name: "Qora zaytun donalari", amount: 30, unit: "g" },
      { name: "Zaytun moyi va oregano", amount: 15, unit: "ml" }
    ],
    instructions: [
      "Sabzavotlarni yirik kubik qilib to'g'rang.",
      "Zaytun donalari va zaytun moyini qo'shing.",
      "Ustiga Feta pishlog'i kubiklarini qo'yib oregano seping."
    ],
    tips: "Feta pishlog'ini ezilmasligi uchun salatni aralashtirmay tepasiga tering."
  },
  {
    id: 39,
    title: "Klassik Bayramona Olivye",
    category: "salat",
    categoryLabel: "Salatlar",
    time: 30,
    servings: 4,
    calories: 360,
    difficulty: "Oson",
    rating: 4.9,
    reviewsCount: 170,
    image: "https://images.unsplash.com/photo-1546069901-ba9599a7e63c?auto=format&fit=crop&w=800&q=80",
    description: "Pishgan kartoshka, sabzi, yashil no'xat, go'sht va tuzlangan bodringli an'anaviy salat.",
    ingredients: [
      { name: "Qaynatilgan go'sht yoki kolbasa", amount: 100, unit: "g" },
      { name: "Kartoshka va sabzi", amount: 120, unit: "g" },
      { name: "Pishgan tuxum", amount: 2, unit: "dona" },
      { name: "Konservalangan no'xat", amount: 50, unit: "g" },
      { name: "Mayonez", amount: 40, unit: "g" }
    ],
    instructions: [
      "Barcha masalliqlarni bir xil kichik kubik qilib to'g'rang.",
      "No'xat va mayonezni qo'shing.",
      "Ehtiyotkorlik bilan aralashtirib muzlatgichda tindiring."
    ],
    tips: "Barcha sabzavotlar to'liq soviganidan keyin to'g'ralsa salat loyqalanmaydi."
  },
  {
    id: 40,
    title: "Yong'oqli Foydali Vinegret",
    category: "salat",
    categoryLabel: "Salatlar",
    time: 25,
    servings: 4,
    calories: 190,
    difficulty: "Oson",
    rating: 4.7,
    reviewsCount: 80,
    image: "https://images.unsplash.com/photo-1512621776951-a57141f2eefd?auto=format&fit=crop&w=800&q=80",
    description: "Pishirilgan qizil lavlagi, kartoshka, tuzlangan bodring va xushbo'y pista moyi.",
    ingredients: [
      { name: "Lavlagi", amount: 120, unit: "g" },
      { name: "Kartoshka va sabzi", amount: 100, unit: "g" },
      { name: "Tuzlangan bodring", amount: 60, unit: "g" },
      { name: "O'simlik moyi", amount: 25, unit: "ml" }
    ],
    instructions: [
      "Lavlagini to'g'rab avval ozroq yog' bilan aralashtiring (boshqa sabzavotlarni bo'yab qo'ymasligi uchun).",
      "Qolgan sabzavotlarni qo'shing va tuzlang."
    ],
    tips: "Lavlagini avval yog'lab olish har bir sabzavotning o'z rangini saqlab qoladi."
  },
  {
    id: 41,
    title: "To'yimli Mujskoy Kapriz",
    category: "salat",
    categoryLabel: "Salatlar",
    time: 20,
    servings: 3,
    calories: 420,
    difficulty: "Oson",
    rating: 4.9,
    reviewsCount: 130,
    image: "https://images.unsplash.com/photo-1550547660-d9450f859349?auto=format&fit=crop&w=800&q=80",
    description: "Qaynatilgan mol tili yoki lahm go'shti, sirkalangan piyoz, tuxum va ko'p pishloq qatlamlari.",
    ingredients: [
      { name: "Pishgan mol go'shti yoki tili", amount: 150, unit: "g" },
      { name: "Pishloq (Gollandcha)", amount: 80, unit: "g" },
      { name: "Tuxum", amount: 2, unit: "dona" },
      { name: "Sirkalangan piyoz", amount: 40, unit: "g" },
      { name: "Mayonez", amount: 40, unit: "g" }
    ],
    instructions: [
      "Piyozni sirkada 15 daqiqa ivitib oling.",
      "Go'sht, tuxum va pishloqni somoncha qilib qatlam-qatlam tering.",
      "Har bir qatlam orasiga yupqa mayonez surting."
    ],
    tips: "Piyozning achchig'ini yaxshilab yuvib tashlash taomni mayin qiladi."
  },
  {
    id: 42,
    title: "Xushbo'y Baqlajonli Qarsildoq Salat",
    category: "salat",
    categoryLabel: "Salatlar",
    time: 20,
    servings: 3,
    calories: 230,
    difficulty: "Oson",
    rating: 4.9,
    reviewsCount: 145,
    image: "https://images.unsplash.com/photo-1540420773420-3366772f4999?auto=format&fit=crop&w=800&q=80",
    description: "Kraxmalda qovurilgan qarsildoq baqlajon bo'laklari, yangi pomidor va shirin-achchiq sous.",
    ingredients: [
      { name: "Baqlajon", amount: 150, unit: "g" },
      { name: "Kraxmal (makkajo'xori)", amount: 30, unit: "g" },
      { name: "Pomidor", amount: 100, unit: "g" },
      { name: "Shirin chili sousi va kashnich", amount: 25, unit: "g" }
    ],
    instructions: [
      "Baqlajonni yirik bo'laklab kraxmalga bulang.",
      "Qaynoq yog'da 4 daqiqa qarsildoq bo'lguncha qovuring.",
      "Pomidor bilan aralashtirib darhol shirin chili sousini quying."
    ],
    tips: "Salatni dasturxonga tortish zahoti iste'mol qilish kerak, aks holda baqlajon qarsillamay qoladi."
  },
  {
    id: 43,
    title: "Yozgi Bodring va Suzmali Bahor Salati",
    category: "salat",
    categoryLabel: "Salatlar",
    time: 10,
    servings: 4,
    calories: 90,
    difficulty: "Oson",
    rating: 4.8,
    reviewsCount: 65,
    image: "https://images.unsplash.com/photo-1540189549336-e6e99c3679fe?auto=format&fit=crop&w=800&q=80",
    description: "Qarsildoq bodring, turp (rediska), yangi yalpiz, shivit va o'zbekona suzma.",
    ingredients: [
      { name: "Yangi bodring", amount: 120, unit: "g" },
      { name: "Rediska", amount: 60, unit: "g" },
      { name: "Suzma (chakka)", amount: 80, unit: "g" },
      { name: "Yalpiz va ko'k piyoz", amount: 20, unit: "g" }
    ],
    instructions: [
      "Bodring va rediskani yupqa parrak to'g'rang.",
      "Ko'katlarni maydalab suzmaga aralashtiring.",
      "Barchasini birlashtirib tuzlang."
    ],
    tips: "Suzmaga bir qoshiq sovuq mineral suv qo'shilsa yanada mayin qaymoqsimon bo'ladi."
  },
  {
    id: 44,
    title: "Qisqichbaqa Tayoqchali Klassik Salat",
    category: "salat",
    categoryLabel: "Salatlar",
    time: 15,
    servings: 3,
    calories: 270,
    difficulty: "Oson",
    rating: 4.7,
    reviewsCount: 112,
    image: "https://images.unsplash.com/photo-1512621776951-a57141f2eefd?auto=format&fit=crop&w=800&q=80",
    description: "Shirin makkajo'xori, qisqichbaqa tayoqchalari, pishgan tuxum va mayonez.",
    ingredients: [
      { name: "Qisqichbaqa tayoqchalari", amount: 120, unit: "g" },
      { name: "Konservalangan makkajo'xori", amount: 80, unit: "g" },
      { name: "Pishgan tuxum", amount: 2, unit: "dona" },
      { name: "Yangi bodring va mayonez", amount: 50, unit: "g" }
    ],
    instructions: [
      "Tayoqchalar, tuxum va bodringni kubik to'g'rang.",
      "Makkajo'xori suvini to'kib qo'shing.",
      "Mayonez bilan aralashtiring."
    ],
    tips: "Yangi bodring qo'shilishi salatga ajoyib yozgi xushbo'ylik beradi."
  },
  {
    id: 45,
    title: "Avokado va Cherrili Parhez Salati",
    category: "salat",
    categoryLabel: "Salatlar",
    time: 10,
    servings: 2,
    calories: 210,
    difficulty: "Oson",
    rating: 4.9,
    reviewsCount: 98,
    image: "https://images.unsplash.com/photo-1540420773420-3366772f4999?auto=format&fit=crop&w=800&q=80",
    description: "Yetilgan mayin avokado, cherri pomidorlar, ismaloq barglari va limon sousi.",
    ingredients: [
      { name: "Avokado", amount: 1, unit: "dona" },
      { name: "Cherri pomidor", amount: 80, unit: "g" },
      { name: "Baby ismaloq yoki rukkola", amount: 50, unit: "g" },
      { name: "Limon sharbati va zaytun moyi", amount: 15, unit: "ml" }
    ],
    instructions: [
      "Avokadoni tozalab bo'laklang va qoraymasligi uchun darhol limon suvi seping.",
      "Cherrini ikkiga bo'ling.",
      "Ko'katlar bilan aralashtirib zaytun moyi quying."
    ],
    tips: "Avokadoga limon suvi sepish uning yashil rangini saqlab qoladi."
  },

  // ---------------- SHIRINLIKLAR & DESERTLAR (46-52) ----------------
  {
    id: 46,
    title: "Issiq Shokoladli Fondan (Lava Cake)",
    category: "shirinlik",
    categoryLabel: "Shirinlik",
    time: 20,
    servings: 2,
    calories: 440,
    difficulty: "O'rtacha",
    rating: 4.9,
    reviewsCount: 130,
    image: "https://images.unsplash.com/photo-1606313564200-e75d5e30476c?auto=format&fit=crop&w=800&q=80",
    description: "Usti pishgan shokoladli keks, o'rtasi esa vulqon kabi qaynoq erigan shokolad.",
    ingredients: [
      { name: "Qora shokolad (70%)", amount: 60, unit: "g" },
      { name: "Sariyog'", amount: 40, unit: "g" },
      { name: "Tuxum", amount: 1, unit: "dona" },
      { name: "Shakar upasi", amount: 25, unit: "g" },
      { name: "Un", amount: 20, unit: "g" }
    ],
    instructions: [
      "Shokolad va sariyog'ni eriting.",
      "Tuxum va shakarni ko'pirtirib shokoladga qo'shing.",
      "Unni qo'shib qoliplarga quying va 200°C da 8 daqiqa pishiring."
    ],
    tips: "Pechda 1 daqiqa ham ortiq qoldirmang, o'rtasi suyuq bo'lishi kerak."
  },
  {
    id: 47,
    title: "Asalli Mayin Medovik Torti",
    category: "shirinlik",
    categoryLabel: "Shirinlik",
    time: 65,
    servings: 6,
    calories: 460,
    difficulty: "Qiyin",
    rating: 5.0,
    reviewsCount: 110,
    image: "https://images.unsplash.com/photo-1578985545062-69928b1d9587?auto=format&fit=crop&w=800&q=80",
    description: "Tabiiy tog' asali bilan pishirilgan 8 qavat yupqa korjlar va smetanali mayin krem.",
    ingredients: [
      { name: "Tabiiy asal", amount: 30, unit: "g" },
      { name: "Sariyog' va shakar", amount: 50, unit: "g" },
      { name: "Un", amount: 80, unit: "g" },
      { name: "Smetana kremi (25%)", amount: 90, unit: "g" }
    ],
    instructions: [
      "Asal va shakarni eriting, soda qo'shib karamel rangga keltiring.",
      "Xamir qorib 8 ta yupqa korj pishiring.",
      "Krem surtib qavatma-qavat tering va 6 soat tindiring."
    ],
    tips: "Medovik qancha ko'p tursa shuncha yumshoq va mayin bo'ladi."
  },
  {
    id: 48,
    title: "Klassik Italyancha Tiramisu",
    category: "shirinlik",
    categoryLabel: "Shirinlik",
    time: 25,
    servings: 4,
    calories: 390,
    difficulty: "Oson",
    rating: 4.9,
    reviewsCount: 165,
    image: "https://images.unsplash.com/photo-1571877227200-a0d98ea607e9?auto=format&fit=crop&w=800&q=80",
    description: "Savoyardi pechenyelari, espresso qahvasi va nafis Maskarpone kremi.",
    ingredients: [
      { name: "Maskarpone pishlog'i", amount: 120, unit: "g" },
      { name: "Savoyardi pechenyesi", amount: 100, unit: "g" },
      { name: "Espresso qahvasi", amount: 80, unit: "ml" },
      { name: "Tuxum sarig'i va kakao", amount: 30, unit: "g" }
    ],
    instructions: [
      "Maskarponeni shakar va tuxum sarig'i bilan ko'pirtiring.",
      "Pechenyelarni sovuq qahvaga 1 soniya botirib oling.",
      "Qolipga qatlam qilib terib, ustiga kakao seping va sovitgichda tindiring."
    ],
    tips: "Pechenyelarni qahvada uzoq ushlab turmang, ezilib ketishi mumkin."
  },
  {
    id: 49,
    title: "San-Sebastian Kuygan Chizkeyk",
    category: "shirinlik",
    categoryLabel: "Shirinlik",
    time: 45,
    servings: 6,
    calories: 420,
    difficulty: "O'rtacha",
    rating: 5.0,
    reviewsCount: 180,
    image: "https://images.unsplash.com/photo-1533134242443-d4fd215305ad?auto=format&fit=crop&w=800&q=80",
    description: "Ispancha chizkeyk — qoraygan karamelli yuzasi va ichidagi ipakdek erigan pishloq kremi.",
    ingredients: [
      { name: "Krem-pishloq (Filadelfiya)", amount: 200, unit: "g" },
      { name: "Yog'li qaymoq (33%)", amount: 100, unit: "ml" },
      { name: "Shakar va tuxum", amount: 70, unit: "g" },
      { name: "Kraxmal yoki un", amount: 15, unit: "g" }
    ],
    instructions: [
      "Barcha masalliqlarni venchikda aralashtiring.",
      "Qolipga pergament qog'oz solib massani quying.",
      "220°C pechda 25-28 daqiqa yuzi to'q karamel bo'lguncha pishiring."
    ],
    tips: "Pechdan olganda o'rtasi liqillab turishi kerak, sovugach o'z holatiga keladi."
  },
  {
    id: 50,
    title: "Sharqona Asalli Paxlava",
    category: "shirinlik",
    categoryLabel: "Shirinlik",
    time: 55,
    servings: 8,
    calories: 480,
    difficulty: "Qiyin",
    rating: 4.9,
    reviewsCount: 140,
    image: "https://images.unsplash.com/photo-1519869325930-281384150729?auto=format&fit=crop&w=800&q=80",
    description: "Qirq qatlam yupqa xamir, maydalangan yong'oq va xushbo'y asal qiyomi.",
    ingredients: [
      { name: "Filo xamiri yoki maxsus xamir", amount: 150, unit: "g" },
      { name: "Yong'oq mag'zi", amount: 100, unit: "g" },
      { name: "Sariyog'", amount: 70, unit: "g" },
      { name: "Asal va shakar qiyomi", amount: 80, unit: "g" }
    ],
    instructions: [
      "Xamirlarni sariyog'lab qavatma-qavat tering, o'rtalariga yong'oq seping.",
      "Romb shaklida kesib 180°C da 35 daqiqa pishiring.",
      "Pechdan chiqqan qaynoq paxlavaga iliq asal qiyomini quying."
    ],
    tips: "Qiyom iliq, paxlava esa qaynoq bo'lishi qiyomning to'liq shimilishini ta'minlaydi."
  },
  {
    id: 51,
    title: "Qatlamli Mayin Napoleon Torti",
    category: "shirinlik",
    categoryLabel: "Shirinlik",
    time: 60,
    servings: 6,
    calories: 450,
    difficulty: "Qiyin",
    rating: 4.8,
    reviewsCount: 125,
    image: "https://images.unsplash.com/photo-1578985545062-69928b1d9587?auto=format&fit=crop&w=800&q=80",
    description: "Qarsildoq qatlama xamirlar va vanilli mayin qaynoq sut kremi (zavarnoy krem).",
    ingredients: [
      { name: "Qatlama xamir", amount: 150, unit: "g" },
      { name: "Sut", amount: 150, unit: "ml" },
      { name: "Sariyog' va shakar", amount: 60, unit: "g" },
      { name: "Vanilin va kraxmal", amount: 10, unit: "g" }
    ],
    instructions: [
      "Qatlamali korjlarni pishirib oling.",
      "Sut, shakar va kraxmaldan zavarnoy krem tayyorlang.",
      "Korjlarga krem surtib yig'ing va ushoq seping."
    ],
    tips: "Korjlarni pishirishdan oldin sanchqi bilan teshilsa shishib ketmaydi."
  },
  {
    id: 52,
    title: "Qarsildoq Asalli Chak-Chak",
    category: "shirinlik",
    categoryLabel: "Shirinlik",
    time: 40,
    servings: 6,
    calories: 390,
    difficulty: "Oson",
    rating: 4.9,
    reviewsCount: 110,
    image: "https://images.unsplash.com/photo-1509440159596-0249088772ff?auto=format&fit=crop&w=800&q=80",
    description: "Tuxumli xamirdan qovurilgan tillarang somonchalar, tabiiy asal va kunjut.",
    ingredients: [
      { name: "Un", amount: 100, unit: "g" },
      { name: "Tuxum", amount: 2, unit: "dona" },
      { name: "Tabiiy asal", amount: 70, unit: "g" },
      { name: "Yog' (qovurishga) va kunjut", amount: 50, unit: "ml" }
    ],
    instructions: [
      "Xamir qorib ingichka somoncha kesing.",
      "Qaynoq yog'da 2 daqiqa tilla rang bo'lguncha qovuring.",
      "Eritilgan asal qiyomiga aralashtirib gumbaz shaklida terib sovuting."
    ],
    tips: "Asalni ko'p qaynatib kuydirib qo'ymang, iliq erishi kifoya."
  },
  // ---------------- 53- VA 54-TAOMLAR (YANGI QO'SHILGAN) ----------------
  {
    id: 53,
    title: "Qadimiy Beshbarmoq (Go'shtli va yupqa xamirli)",
    category: "milliy",
    categoryLabel: "Milliy taom",
    time: 120,
    servings: 6,
    calories: 620,
    difficulty: "O'rtacha",
    rating: 4.9,
    reviewsCount: 168,
    image: "https://images.unsplash.com/photo-1544025162-d76694265947?auto=format&fit=crop&w=800&q=80",
    description: "Mayin qaynatilgan mol va qo'y go'shti, lazzatli qazi, sho'rvada pishirilgan yupqa to'rtburchak xamir va xushbo'y zira-piyozli tuzlik (tuzdiq).",
    ingredients: [
      { name: "Mol yoki qo'y go'shti (lahm va suyakli)", amount: 350, unit: "g" },
      { name: "Qazi (ot go'shti)", amount: 150, unit: "g" },
      { name: "Yupqa xamir (yoyilgan)", amount: 250, unit: "g" },
      { name: "Piyoz (tuzlik uchun)", amount: 150, unit: "g" },
      { name: "Go'sht sho'rvasi", amount: 300, unit: "ml" },
      { name: "Qora murch va osh tuzi", amount: 1, unit: "ta'bga ko'ra" },
      { name: "Shivit va ko'katlar", amount: 20, unit: "g" }
    ],
    instructions: [
      "Go'sht va qazini qozonga solib sovuq suv quying, ko'pigini olib past olovda 2 soat miltillatib qaynating.",
      "Tuxum, suv va tuz bilan qattiq xamir qorib, 1 mm yupqalikda yoying va 7x7 sm to'rtburchaklar qilib kesing.",
      "Go'sht pishgach sho'rvadan olib, mayda yaproq qilib to'g'rang, qazini parrak qiling.",
      "Sho'rvaning yog'li ustki qismini kichik qozonchaga olib, to'g'ralgan piyoz va qora murch solib 2 daqiqa qaynatib tuzlik (tuzdiq) tayyorlang.",
      "Qolgan qaynoq sho'rvada xamir yaproqlarini 3-4 daqiqa pishirib laganga suzing.",
      "Xamir ustiga to'g'ralgan go'sht va qazini terib, ustidan qaynoq piyozli tuzlik va ko'katlarni quying."
    ],
    tips: "Go'sht sho'rvasi tiniq bo'lishi uchun ko'pigini erinmay oling va olovni hech qachon baland qilmang."
  },
  {
    id: 54,
    title: "Sharqona Pomidorli Shakshuka",
    category: "fastfood",
    categoryLabel: "Fast Food & Nonushta",
    time: 25,
    servings: 4,
    calories: 340,
    difficulty: "Oson",
    rating: 4.8,
    reviewsCount: 132,
    image: "https://images.unsplash.com/photo-1590412200988-a436970781fa?auto=format&fit=crop&w=800&q=80",
    description: "Shira boy pomidor, qizil bolgar qalampiri, sarimsoqpiyoz va zira bilan qovurilgan quyuq sousda suyuq sarig'i bilan pishirilgan shohona sharqona tuxum taomi.",
    ingredients: [
      { name: "Tuxum", amount: 4, unit: "dona" },
      { name: "Shirin qizil pomidor", amount: 300, unit: "g" },
      { name: "Qizil bolgar qalampiri", amount: 150, unit: "g" },
      { name: "Piyoz", amount: 80, unit: "g" },
      { name: "Sarimsoqpiyoz", amount: 2, unit: "tish" },
      { name: "Zaytun moyi", amount: 30, unit: "ml" },
      { name: "Zira, paprika va tuz", amount: 1, unit: "ta'bga ko'ra" },
      { name: "Kashnich yoki petrushka", amount: 15, unit: "g" }
    ],
    instructions: [
      "Tovada zaytun moyini qizdirib, mayda to'g'ralgan piyoz va bolgar qalampirini 5 daqiqa qovuring.",
      "Sarimsoqpiyoz, zira va paprikani solib 1 daqiqa xushbo'y hid chiqquncha aralashtiring.",
      "Po'sti archilgan maydalangan pomidorlarni qo'shib, o'rtacha olovda 10 daqiqa quyuq sous bo'lguncha dimlang.",
      "Sousda qoshiq bilan 4 ta chuqurcha hosil qiling va har biriga bittadan tuxumni butunligicha chaqing.",
      "Tovaning qopqog'ini yopib, tuxum oqi oqarib, sarig'i suyuq holatda qolguncha 4-5 daqiqa past olovda pishiring.",
      "Olovdan olib, ustiga yangi to'g'ralgan kashnich va qora murch sepib, issiq non bilan torting."
    ],
    tips: "Tuxum sarig'ini ko'p pishirib qotirib qo'ymang, nonni botirib yeyish uchun u suyuq bo'lishi shart."
  }
];

window.CATEGORIES_DATA = [
  { id: "all", label: "Barchasi (54)", icon: "🍽️" },
  { id: "milliy", label: "Milliy taomlar (16)", icon: "🍲" },
  { id: "shorva", label: "Sho'rvalar (10)", icon: "🥣" },
  { id: "fastfood", label: "Fast Food & Nonushta (11)", icon: "🍕" },
  { id: "salat", label: "Salatlar (10)", icon: "🥗" },
  { id: "shirinlik", label: "Shirinliklar (7)", icon: "🍰" }
];

// ==========================================================
// KENGAYTIRILGAN MASALLIQLAR BAZASI (346+ TA SARA MASALLIQLAR)
// ==========================================================
window.INGREDIENT_CATEGORIES = [
  { id: "all", label: "Barchasi (346)", icon: "🛒" },
  { id: "meat", label: "Go'sht & Parranda", icon: "🥩" },
  { id: "veg", label: "Sabzavot & Ildizlar", icon: "🥔" },
  { id: "greens", label: "Ko'katlar & O'tlar", icon: "🌿" },
  { id: "grains", label: "Don, Dukkak & Makaron", icon: "🌾" },
  { id: "dairy", label: "Sut, Pishloq & Tuxum", icon: "🥛" },
  { id: "spices", label: "Ziravorlar & Tuz", icon: "🧂" },
  { id: "oils", label: "Yog'lar & Sirkalar", icon: "🫒" },
  { id: "sauces", label: "Souslar & Konservalar", icon: "🥫" },
  { id: "nuts", label: "Yong'oq & Quruq mevalar", icon: "🌰" },
  { id: "fruits", label: "Mevalar & Rezavorlar", icon: "🍎" },
  { id: "baking", label: "Un, Shakar & Qandolat", icon: "🧁" },
  { id: "seafood", label: "Baliq & Dengiz", icon: "🐟" }
];

window.ALL_INGREDIENTS_DB = [
  // --- 🥩 Go'sht va Parranda (32 ta) ---
  { id: "ing_1", name: "Mol go'shti", category: "meat", icon: "🥩" },
  { id: "ing_2", name: "Qo'y go'shti", category: "meat", icon: "🥩" },
  { id: "ing_3", name: "Tovuq filesi", category: "meat", icon: "🍗" },
  { id: "ing_4", name: "Tovuq go'shti (son/qanot)", category: "meat", icon: "🍗" },
  { id: "ing_5", name: "Kurka go'shti", category: "meat", icon: "🦃" },
  { id: "ing_6", name: "Qazi (ot go'shti)", category: "meat", icon: "🥩" },
  { id: "ing_7", name: "Qiyma go'sht (mol)", category: "meat", icon: "🥩" },
  { id: "ing_8", name: "Qiyma go'sht (qo'y)", category: "meat", icon: "🥩" },
  { id: "ing_9", name: "Qiyma go'sht (aralash)", category: "meat", icon: "🥩" },
  { id: "ing_10", name: "Dumba yog'i", category: "meat", icon: "🥓" },
  { id: "ing_11", name: "Mol jigari", category: "meat", icon: "🥩" },
  { id: "ing_12", name: "Qo'y jigari", category: "meat", icon: "🥩" },
  { id: "ing_13", name: "Mol tili", category: "meat", icon: "👅" },
  { id: "ing_14", name: "Mol yuragi", category: "meat", icon: "🥩" },
  { id: "ing_15", name: "O'rdak go'shti", category: "meat", icon: "🦆" },
  { id: "ing_16", name: "Qovurg'a go'shti (qo'y)", category: "meat", icon: "🍖" },
  { id: "ing_17", name: "Qovurg'a go'shti (mol)", category: "meat", icon: "🍖" },
  { id: "ing_18", name: "Dudlangan kolbasa", category: "meat", icon: "🌭" },
  { id: "ing_19", name: "Qaynatilgan kolbasa (Doktorskaya)", category: "meat", icon: "🌭" },
  { id: "ing_20", name: "Sosiska", category: "meat", icon: "🌭" },
  { id: "ing_21", name: "Sardelka", category: "meat", icon: "🌭" },
  { id: "ing_22", name: "Go'sht qiymasi (tovuq)", category: "meat", icon: "🍗" },
  { id: "ing_23", name: "Buzoq go'shti", category: "meat", icon: "🥩" },
  { id: "ing_24", name: "Yilqi go'shti", category: "meat", icon: "🥩" },
  { id: "ing_25", name: "Bekon (mol go'shtidan)", category: "meat", icon: "🥓" },
  { id: "ing_26", name: "Tovuq jigari", category: "meat", icon: "🍗" },
  { id: "ing_27", name: "Go'shtli suyak (sho'rva uchun)", category: "meat", icon: "🦴" },
  { id: "ing_28", name: "Qo'y iligi", category: "meat", icon: "🦴" },
  { id: "ing_29", name: "Dudlangan tovuq filesi", category: "meat", icon: "🍗" },
  { id: "ing_30", name: "Tovuq yuragi", category: "meat", icon: "🍗" },
  { id: "ing_31", name: "Gulyash uchun go'sht", category: "meat", icon: "🥩" },
  { id: "ing_32", name: "Bifshteks go'shti", category: "meat", icon: "🥩" },

  // --- 🥔 Sabzavotlar va Ildizmevalar (48 ta) ---
  { id: "ing_33", name: "Kartoshka", category: "veg", icon: "🥔" },
  { id: "ing_34", name: "Piyoz (oddiy sariq)", category: "veg", icon: "🧅" },
  { id: "ing_35", name: "Qizil piyoz", category: "veg", icon: "🧅" },
  { id: "ing_36", name: "Oq piyoz", category: "veg", icon: "🧅" },
  { id: "ing_37", name: "Sariq sabzi", category: "veg", icon: "🥕" },
  { id: "ing_38", name: "Qizil sabzi", category: "veg", icon: "🥕" },
  { id: "ing_39", name: "Pomidor", category: "veg", icon: "🍅" },
  { id: "ing_40", name: "Cherry pomidor", category: "veg", icon: "🍅" },
  { id: "ing_41", name: "Pushti pomidor (Yusupov)", category: "veg", icon: "🍅" },
  { id: "ing_42", name: "Bodring", category: "veg", icon: "🥒" },
  { id: "ing_43", name: "Tuzlangan bodring (kornishon)", category: "veg", icon: "🥒" },
  { id: "ing_44", name: "Sarimsoqpiyoz", category: "veg", icon: "🧄" },
  { id: "ing_45", name: "Qizil bolgar qalampiri", category: "veg", icon: "🫑" },
  { id: "ing_46", name: "Yashil bolgar qalampiri", category: "veg", icon: "🫑" },
  { id: "ing_47", name: "Sariq bolgar qalampiri", category: "veg", icon: "🫑" },
  { id: "ing_48", name: "Achchiq qalampir (qizil)", category: "veg", icon: "🌶️" },
  { id: "ing_49", name: "Achchiq yashil qalampir", category: "veg", icon: "🌶️" },
  { id: "ing_50", name: "Baqlajon", category: "veg", icon: "🍆" },
  { id: "ing_51", name: "Qovoqcha (Kabaçok)", category: "veg", icon: "🥒" },
  { id: "ing_52", name: "Sariq qovoq", category: "veg", icon: "🎃" },
  { id: "ing_53", name: "Butternut qovoq", category: "veg", icon: "🎃" },
  { id: "ing_54", name: "Oq karam", category: "veg", icon: "🥬" },
  { id: "ing_55", name: "Qizil karam", category: "veg", icon: "🥬" },
  { id: "ing_56", name: "Pekin karami", category: "veg", icon: "🥬" },
  { id: "ing_57", name: "Gulkaram (Tsvetnaya)", category: "veg", icon: "🥦" },
  { id: "ing_58", name: "Brokkoli", category: "veg", icon: "🥦" },
  { id: "ing_59", name: "Lavlagi (Qizilcha)", category: "veg", icon: "🥗" },
  { id: "ing_60", name: "Turp (oq/yashil)", category: "veg", icon: "🥗" },
  { id: "ing_61", name: "Sholg'om", category: "veg", icon: "🍲" },
  { id: "ing_62", name: "Rediska (turpcha)", category: "veg", icon: "🥗" },
  { id: "ing_63", name: "Zanjabil ildizi (Imbir)", category: "veg", icon: "🫚" },
  { id: "ing_64", name: "Selderiy ildizi", category: "veg", icon: "🥬" },
  { id: "ing_65", name: "Selderiy novdasi", category: "veg", icon: "🥬" },
  { id: "ing_66", name: "Daikon turpi", category: "veg", icon: "🥗" },
  { id: "ing_67", name: "Bryussel karami", category: "veg", icon: "🥬" },
  { id: "ing_68", name: "Kohlrabi (karam)", category: "veg", icon: "🥬" },
  { id: "ing_69", name: "Makkajo'xori so'tasi", category: "veg", icon: "🌽" },
  { id: "ing_70", name: "Yashil no'xat (yangisi)", category: "veg", icon: "🫛" },
  { id: "ing_71", name: "Loviya pods (sturkoviy)", category: "veg", icon: "🫛" },
  { id: "ing_72", name: "Batat (shirin kartoshka)", category: "veg", icon: "🍠" },
  { id: "ing_73", name: "Porey piyozi (Pırasa)", category: "veg", icon: "🧅" },
  { id: "ing_74", name: "Quritilgan pomidor (Vyaleniy)", category: "veg", icon: "🍅" },
  { id: "ing_75", name: "Yalpiz ildizi", category: "veg", icon: "🌱" },
  { id: "ing_76", name: "Qalampir lecho", category: "veg", icon: "🫑" },
  { id: "ing_77", name: "Tuzlangan pomidor", category: "veg", icon: "🍅" },
  { id: "ing_78", name: "Duxovkada pishgan baqlajon", category: "veg", icon: "🍆" },
  { id: "ing_79", name: "Marinadlangan qalampir", category: "veg", icon: "🌶️" },
  { id: "ing_80", name: "Koreyscha sabzi", category: "veg", icon: "🥕" },

  // --- 🌿 Ko'katlar va Yangi O'tlar (26 ta) ---
  { id: "ing_81", name: "Kashnich (Kinzya)", category: "greens", icon: "🌿" },
  { id: "ing_82", name: "Shivit (Ukrop)", category: "greens", icon: "🌿" },
  { id: "ing_83", name: "Petrushka", category: "greens", icon: "🌿" },
  { id: "ing_84", name: "Rayhon (binafsha)", category: "greens", icon: "🌿" },
  { id: "ing_85", name: "Yashil rayhon (Bazilik)", category: "greens", icon: "🌿" },
  { id: "ing_86", name: "Ko'k piyoz", category: "greens", icon: "🌱" },
  { id: "ing_87", name: "Jusay (lag'mon ko'kati)", category: "greens", icon: "🌿" },
  { id: "ing_88", name: "Yalpiz (Myata)", category: "greens", icon: "🍃" },
  { id: "ing_89", name: "Ismaloq (Shpinat)", category: "greens", icon: "🥬" },
  { id: "ing_90", name: "Rukkola", category: "greens", icon: "🥗" },
  { id: "ing_91", name: "Aysberg salat bargi", category: "greens", icon: "🥗" },
  { id: "ing_92", name: "Romano salat bargi", category: "greens", icon: "🥗" },
  { id: "ing_93", name: "Shovul (Otquloq)", category: "greens", icon: "🍃" },
  { id: "ing_94", name: "Dafna bargi (Lavr)", category: "greens", icon: "🍃" },
  { id: "ing_95", name: "Rozmarin novdasi", category: "greens", icon: "🌿" },
  { id: "ing_96", name: "Timyan (Kekik)", category: "greens", icon: "🌿" },
  { id: "ing_97", name: "Oregano (Tog'rayhon)", category: "greens", icon: "🌿" },
  { id: "ing_98", name: "Tarxun (Estragon)", category: "greens", icon: "🌿" },
  { id: "ing_99", name: "Lollo Rosso salat bargi", category: "greens", icon: "🥗" },
  { id: "ing_100", name: "Mikrozelen (unib chiqqan)", category: "greens", icon: "🌱" },
  { id: "ing_101", name: "Otquloq barglari", category: "greens", icon: "🍃" },
  { id: "ing_102", name: "Yovvoyi piyoz (Anzur)", category: "greens", icon: "🧅" },
  { id: "ing_103", name: "Salat miksi (aralash)", category: "greens", icon: "🥗" },
  { id: "ing_104", name: "Marjoram", category: "greens", icon: "🌿" },
  { id: "ing_105", name: "Chervil", category: "greens", icon: "🌿" },
  { id: "ing_106", name: "Kashnich urug'i bargi", category: "greens", icon: "🌿" },

  // --- 🌾 Don, Dukkakli va Makaronlar (36 ta) ---
  { id: "ing_107", name: "Lazer guruchi", category: "grains", icon: "🍚" },
  { id: "ing_108", name: "Devzira guruchi", category: "grains", icon: "🍚" },
  { id: "ing_109", name: "Alanga guruchi", category: "grains", icon: "🍚" },
  { id: "ing_110", name: "Avangard guruchi", category: "grains", icon: "🍚" },
  { id: "ing_111", name: "Krasnodar dumaloq guruch", category: "grains", icon: "🍚" },
  { id: "ing_112", name: "Basmati guruchi", category: "grains", icon: "🍚" },
  { id: "ing_113", name: "Yasmiq (qizil mercimek)", category: "grains", icon: "🥣" },
  { id: "ing_114", name: "Yasmiq (yashil)", category: "grains", icon: "🥣" },
  { id: "ing_115", name: "No'xat (Nuxat)", category: "grains", icon: "🧆" },
  { id: "ing_116", name: "Mosh (don)", category: "grains", icon: "🥣" },
  { id: "ing_117", name: "Oq loviya", category: "grains", icon: "🫘" },
  { id: "ing_118", name: "Qizil loviya", category: "grains", icon: "🫘" },
  { id: "ing_119", name: "Grechka (Marjumak)", category: "grains", icon: "🥣" },
  { id: "ing_120", name: "Bulg'ur", category: "grains", icon: "🌾" },
  { id: "ing_121", name: "Kuskus", category: "grains", icon: "🌾" },
  { id: "ing_122", name: "Suli yormasi (Ovsiyanka)", category: "grains", icon: "🥣" },
  { id: "ing_123", name: "Arpa yormasi (Perlovka)", category: "grains", icon: "🌾" },
  { id: "ing_124", name: "Manna yormasi (Manka)", category: "grains", icon: "🌾" },
  { id: "ing_125", name: "Bug'doy yormasi (Polba)", category: "grains", icon: "🌾" },
  { id: "ing_126", name: "Kinva (Quinoa)", category: "grains", icon: "🌾" },
  { id: "ing_127", name: "Spagetti makaron", category: "grains", icon: "🍝" },
  { id: "ing_128", name: "Fettuchine makaron", category: "grains", icon: "🍝" },
  { id: "ing_129", name: "Penne (trubochka)", category: "grains", icon: "🍝" },
  { id: "ing_130", name: "Fuzilli (spiral)", category: "grains", icon: "🍝" },
  { id: "ing_131", name: "Ugra (xonaki lapsha)", category: "grains", icon: "🍜" },
  { id: "ing_132", name: "Lag'mon cho'zma xamiri", category: "grains", icon: "🍜" },
  { id: "ing_133", name: "Chuchvara xamiri", category: "grains", icon: "🥟" },
  { id: "ing_134", name: "Manti xamiri", category: "grains", icon: "🥟" },
  { id: "ing_135", name: "Somsa xamiri (qatlama)", category: "grains", icon: "🥐" },
  { id: "ing_136", name: "Filo xamiri", category: "grains", icon: "🥐" },
  { id: "ing_137", name: "Lavash xamiri (yupqa)", category: "grains", icon: "🌯" },
  { id: "ing_138", name: "Tortilya xamiri", category: "grains", icon: "🌮" },
  { id: "ing_139", name: "Funchoza (kraxmal ugra)", category: "grains", icon: "🍜" },
  { id: "ing_140", name: "Pitsa xamiri", category: "grains", icon: "🍕" },
  { id: "ing_141", name: "Burger bulochkasi", category: "grains", icon: "🍔" },
  { id: "ing_142", name: "Sendvich noni (tost)", category: "grains", icon: "🍞" },

  // --- 🥛 Sut, Pishloq va Tuxum mahsulotlari (32 ta) ---
  { id: "ing_143", name: "Sigir suti (oddiy)", category: "dairy", icon: "🥛" },
  { id: "ing_144", name: "Qaynatilgan sut", category: "dairy", icon: "🥛" },
  { id: "ing_145", name: "Qatiq", category: "dairy", icon: "🥛" },
  { id: "ing_146", name: "Suzma", category: "dairy", icon: "🥣" },
  { id: "ing_147", name: "Qaymoq (tabiiy o'zbek)", category: "dairy", icon: "🍶" },
  { id: "ing_148", name: "Slivki 20% (suyuq qaymoq)", category: "dairy", icon: "🥛" },
  { id: "ing_149", name: "Slivki 33% (quyug'i)", category: "dairy", icon: "🧁" },
  { id: "ing_150", name: "Smetana 15%", category: "dairy", icon: "🍶" },
  { id: "ing_151", name: "Smetana 20%", category: "dairy", icon: "🍶" },
  { id: "ing_152", name: "Tvorog (yog'siz)", category: "dairy", icon: "🧀" },
  { id: "ing_153", name: "Tvorog 9%", category: "dairy", icon: "🧀" },
  { id: "ing_154", name: "Sariyog' (82.5%)", category: "dairy", icon: "🧈" },
  { id: "ing_155", name: "Eritilgan sariyog' (Chirva)", category: "dairy", icon: "🧈" },
  { id: "ing_156", name: "Mozzarella pishlog'i", category: "dairy", icon: "🧀" },
  { id: "ing_157", name: "Parmezan pishlog'i", category: "dairy", icon: "🧀" },
  { id: "ing_158", name: "Gollandcha pishloq", category: "dairy", icon: "🧀" },
  { id: "ing_159", name: "Suluguni pishlog'i", category: "dairy", icon: "🧀" },
  { id: "ing_160", name: "Chedder pishlog'i", category: "dairy", icon: "🧀" },
  { id: "ing_161", name: "Feta pishlog'i (brinza)", category: "dairy", icon: "🧀" },
  { id: "ing_162", name: "Maskarpone pishlog'i", category: "dairy", icon: "🧀" },
  { id: "ing_163", name: "Filadelfiya krem-pishloq", category: "dairy", icon: "🧀" },
  { id: "ing_164", name: "Plavleniy pishloq (eritilgan)", category: "dairy", icon: "🧀" },
  { id: "ing_165", name: "Rikotta pishlog'i", category: "dairy", icon: "🧀" },
  { id: "ing_166", name: "Qurt (sho'r)", category: "dairy", icon: "⚪" },
  { id: "ing_167", name: "Kefir", category: "dairy", icon: "🥛" },
  { id: "ing_168", name: "Ryajenka", category: "dairy", icon: "🥛" },
  { id: "ing_169", name: "Tuxum (tovuq)", category: "dairy", icon: "🥚" },
  { id: "ing_170", name: "Bedana tuxumi", category: "dairy", icon: "🥚" },
  { id: "ing_171", name: "Tuxum oqi", category: "dairy", icon: "🍳" },
  { id: "ing_172", name: "Tuxum sarig'i", category: "dairy", icon: "🍳" },
  { id: "ing_173", name: "Quyultirilgan sut (Sgushyonka)", category: "dairy", icon: "🥛" },
  { id: "ing_174", name: "Pishirilgan sgushyonka", category: "dairy", icon: "🍯" },

  // --- 🧂 Ziravorlar, Osh tuzi va Xushbo'yliklar (36 ta) ---
  { id: "ing_175", name: "Zira (O'zbek qora zirasi)", category: "spices", icon: "🧂" },
  { id: "ing_176", name: "Eron zirasi", category: "spices", icon: "🧂" },
  { id: "ing_177", name: "Qora murch (maydalangan)", category: "spices", icon: "🧂" },
  { id: "ing_178", name: "Qora murch (dona goroshek)", category: "spices", icon: "🧂" },
  { id: "ing_179", name: "Qizil achchiq murch (kukuni)", category: "spices", icon: "🌶️" },
  { id: "ing_180", name: "Shirin qizil paprika", category: "spices", icon: "🌶️" },
  { id: "ing_181", name: "Dudlangan paprika", category: "spices", icon: "🌶️" },
  { id: "ing_182", name: "Koriandr (Kashnich urug'i)", category: "spices", icon: "🧂" },
  { id: "ing_183", name: "Zarchava (Kurkuma)", category: "spices", icon: "🧂" },
  { id: "ing_184", name: "Zafaron (Shafran)", category: "spices", icon: "🌸" },
  { id: "ing_185", name: "Zanjabil kukuni", category: "spices", icon: "🫚" },
  { id: "ing_186", name: "Quritilgan sarimsoq kukuni", category: "spices", icon: "🧄" },
  { id: "ing_187", name: "Muskat yong'og'i", category: "spices", icon: "🌰" },
  { id: "ing_188", name: "Qalampirmunchoq (Gvozdika)", category: "spices", icon: "🍂" },
  { id: "ing_189", name: "Dolchin (Koritsa tayoqchasi)", category: "spices", icon: "🥢" },
  { id: "ing_190", name: "Dolchin kukuni", category: "spices", icon: "🧂" },
  { id: "ing_191", name: "Badon yulduzchasi (Anis)", category: "spices", icon: "⭐" },
  { id: "ing_192", name: "Kardamon (Hil)", category: "spices", icon: "🌿" },
  { id: "ing_193", name: "Xmeli-suneli ziravori", category: "spices", icon: "🧂" },
  { id: "ing_194", name: "Barbaris (Zirk donalari)", category: "spices", icon: "🫐" },
  { id: "ing_195", name: "Sumax (nordon ziravor)", category: "spices", icon: "🧂" },
  { id: "ing_196", name: "Osh tuzi (yodlangan)", category: "spices", icon: "🧂" },
  { id: "ing_197", name: "Dengiz tuzi (yirik)", category: "spices", icon: "🧂" },
  { id: "ing_198", name: "Pushti Himoloy tuzi", category: "spices", icon: "🧂" },
  { id: "ing_199", name: "Qora tuz (hindcha)", category: "spices", icon: "🧂" },
  { id: "ing_200", name: "Oq murch", category: "spices", icon: "🧂" },
  { id: "ing_201", name: "Provence o'tlari", category: "spices", icon: "🌿" },
  { id: "ing_202", name: "Italiya ziravorlari miksi", category: "spices", icon: "🌿" },
  { id: "ing_203", name: "Kari kukuni (Curry)", category: "spices", icon: "🍛" },
  { id: "ing_204", name: "Rozmarin quritilgani", category: "spices", icon: "🌿" },
  { id: "ing_205", name: "Shashlik maxsus ziravori", category: "spices", icon: "🍢" },
  { id: "ing_206", name: "Palov maxsus ziravori", category: "spices", icon: "🍲" },
  { id: "ing_207", name: "Lag'mon maxsus ziravori", category: "spices", icon: "🍜" },
  { id: "ing_208", name: "Murch xushbo'y (dushistiy)", category: "spices", icon: "🧂" },
  { id: "ing_209", name: "Vanilin kukuni", category: "spices", icon: "🧁" },
  { id: "ing_210", name: "Xantal urug'i (Gorchitsa)", category: "spices", icon: "🟡" },

  // --- 🫒 Yog'lar va Sirkalar (16 ta) ---
  { id: "ing_211", name: "Paxta yog'i (an'anaviy)", category: "oils", icon: "🫗" },
  { id: "ing_212", name: "Kungaboqar yog'i", category: "oils", icon: "🌻" },
  { id: "ing_213", name: "Zaytun moyi (Extra Virgin)", category: "oils", icon: "🫒" },
  { id: "ing_214", name: "Zaytun moyi (qovurishga)", category: "oils", icon: "🫒" },
  { id: "ing_215", name: "Zig'ir yog'i (Zag'ir)", category: "oils", icon: "🫗" },
  { id: "ing_216", name: "Kunjut moyi", category: "oils", icon: "🫗" },
  { id: "ing_217", name: "Kokos moyi", category: "oils", icon: "🥥" },
  { id: "ing_218", name: "Jo'xori yog'i", category: "oils", icon: "🌽" },
  { id: "ing_219", name: "Mol ich yog'i", category: "oils", icon: "🧈" },
  { id: "ing_220", name: "Olma sirkasi (6%)", category: "oils", icon: "🍏" },
  { id: "ing_221", name: "Uzum sirkasi", category: "oils", icon: "🍇" },
  { id: "ing_222", name: "Balzamik sirka", category: "oils", icon: "🫗" },
  { id: "ing_223", name: "Oq stol sirkasi (9%)", category: "oils", icon: "🧪" },
  { id: "ing_224", name: "Guruch sirkasi", category: "oils", icon: "🍶" },
  { id: "ing_225", name: "Limon sharbati", category: "oils", icon: "🍋" },
  { id: "ing_226", name: "Laym sharbati", category: "oils", icon: "🟢" },

  // --- 🥫 Souslar, Pastalar va Konservalar (26 ta) ---
  { id: "ing_227", name: "Tomat pastasi (quyuq)", category: "sauces", icon: "🍅" },
  { id: "ing_228", name: "Ketchup", category: "sauces", icon: "🥫" },
  { id: "ing_229", name: "Mayonez (Provansal 67%)", category: "sauces", icon: "🍶" },
  { id: "ing_230", name: "Klassik soya sousi", category: "sauces", icon: "🥢" },
  { id: "ing_231", name: "Teriyaki sousi", category: "sauces", icon: "🥢" },
  { id: "ing_232", name: "Achchiq Tabasko sousi", category: "sauces", icon: "🌶️" },
  { id: "ing_233", name: "Xantal (Gorchitsa)", category: "sauces", icon: "🌭" },
  { id: "ing_234", name: "Dijon xantali (donali)", category: "sauces", icon: "🌭" },
  { id: "ing_235", name: "Pesto sousi (bazilikli)", category: "sauces", icon: "🌿" },
  { id: "ing_236", name: "Laza sousi (o'zbek)", category: "sauces", icon: "🌶️" },
  { id: "ing_237", name: "Barbekyu sousi (BBQ)", category: "sauces", icon: "🍖" },
  { id: "ing_238", name: "Sezar salat sousi", category: "sauces", icon: "🥗" },
  { id: "ing_239", name: "Tkemali sousi", category: "sauces", icon: "🫗" },
  { id: "ing_240", name: "Shirin-nordon sous", category: "sauces", icon: "🥢" },
  { id: "ing_241", name: "Tartar sousi", category: "sauces", icon: "🐟" },
  { id: "ing_242", name: "Sriracha achchiq sousi", category: "sauces", icon: "🌶️" },
  { id: "ing_243", name: "Konservalangan shirin jo'xori", category: "sauces", icon: "🌽" },
  { id: "ing_244", name: "Konservalangan yashil no'xat", category: "sauces", icon: "🫛" },
  { id: "ing_245", name: "Konservalangan qizil loviya", category: "sauces", icon: "🫘" },
  { id: "ing_246", name: "Yashil zaytun (Oliva)", category: "sauces", icon: "🫒" },
  { id: "ing_247", name: "Qora zaytun (Maslina)", category: "sauces", icon: "🫒" },
  { id: "ing_248", name: "Konservalangan pomidor (Pelati)", category: "sauces", icon: "🥫" },
  { id: "ing_249", name: "Kapari (Kapersi)", category: "sauces", icon: "🫒" },
  { id: "ing_250", name: "Baliq sousi (Nam Pla)", category: "sauces", icon: "🐟" },
  { id: "ing_251", name: "Ustritsa sousi (Oyster)", category: "sauces", icon: "🦪" },
  { id: "ing_252", name: "Tom Yum pastasi", category: "sauces", icon: "🍲" },

  // --- 🌰 Yong'oqlar va Quruq Mevalar (20 ta) ---
  { id: "ing_253", name: "Yong'oq mag'zi", category: "nuts", icon: "🌰" },
  { id: "ing_254", name: "Bodom mag'zi", category: "nuts", icon: "🥜" },
  { id: "ing_255", name: "Pista mag'zi", category: "nuts", icon: "🥜" },
  { id: "ing_256", name: "Funduk (o'rmon yong'og'i)", category: "nuts", icon: "🌰" },
  { id: "ing_257", name: "Keshью yong'og'i", category: "nuts", icon: "🥜" },
  { id: "ing_258", name: "Yer yong'oq (Araxiz)", category: "nuts", icon: "🥜" },
  { id: "ing_259", name: "Oq kunjut", category: "nuts", icon: "⚪" },
  { id: "ing_260", name: "Qora kunjut", category: "nuts", icon: "⚫" },
  { id: "ing_261", name: "Kungaboqar mag'zi", category: "nuts", icon: "🌻" },
  { id: "ing_262", name: "Qovoq urug'i mag'zi", category: "nuts", icon: "🎃" },
  { id: "ing_263", name: "Qora mayiz (shig'oni)", category: "nuts", icon: "🍇" },
  { id: "ing_264", name: "Sariq mayiz (kishmish)", category: "nuts", icon: "🍇" },
  { id: "ing_265", name: "O'rik qoqisi (Turshak)", category: "nuts", icon: "🍑" },
  { id: "ing_266", name: "Qora olxo'ri qoqisi (Chernosliv)", category: "nuts", icon: "🫐" },
  { id: "ing_267", name: "Anjir qoqisi", category: "nuts", icon: "🫒" },
  { id: "ing_268", name: "Eron xurmosi (Finik)", category: "nuts", icon: "🌴" },
  { id: "ing_269", name: "Quritilgan klyukva", category: "nuts", icon: "🍒" },
  { id: "ing_270", name: "Kedr yong'og'i", category: "nuts", icon: "🌲" },
  { id: "ing_271", name: "Kokos qirindisi (strujka)", category: "nuts", icon: "🥥" },
  { id: "ing_272", name: "Mak urug'i (ko'knor)", category: "nuts", icon: "⚫" },

  // --- 🍎 Mevalar va Rezavorlar (25 ta) ---
  { id: "ing_273", name: "Olma (Semirenko)", category: "fruits", icon: "🍏" },
  { id: "ing_274", name: "Qizil olma", category: "fruits", icon: "🍎" },
  { id: "ing_275", name: "Nok", category: "fruits", icon: "🍐" },
  { id: "ing_276", name: "Banan", category: "fruits", icon: "🍌" },
  { id: "ing_277", name: "Limon", category: "fruits", icon: "🍋" },
  { id: "ing_278", name: "Laym", category: "fruits", icon: "🟢" },
  { id: "ing_279", name: "Apelsin", category: "fruits", icon: "🍊" },
  { id: "ing_280", name: "Mandarin", category: "fruits", icon: "🍊" },
  { id: "ing_281", name: "Anor donalari", category: "fruits", icon: "🍇" },
  { id: "ing_282", name: "Anor sharbati", category: "fruits", icon: "🍷" },
  { id: "ing_283", name: "Avokado", category: "fruits", icon: "🥑" },
  { id: "ing_284", name: "Qulupnay", category: "fruits", icon: "🍓" },
  { id: "ing_285", name: "Malina", category: "fruits", icon: "🫐" },
  { id: "ing_286", name: "Chernika / Golubika", category: "fruits", icon: "🫐" },
  { id: "ing_287", name: "Gilos", category: "fruits", icon: "🍒" },
  { id: "ing_288", name: "Olxo'ri", category: "fruits", icon: "🫐" },
  { id: "ing_289", name: "Shaftoli", category: "fruits", icon: "🍑" },
  { id: "ing_290", name: "Uzum (oq/qora)", category: "fruits", icon: "🍇" },
  { id: "ing_291", name: "Kivi", category: "fruits", icon: "🥝" },
  { id: "ing_292", name: "Ananas (yangi)", category: "fruits", icon: "🍍" },
  { id: "ing_293", name: "Konservalangan ananas", category: "fruits", icon: "🍍" },
  { id: "ing_294", name: "Behi (osh va dimlama uchun)", category: "fruits", icon: "🍐" },
  { id: "ing_295", name: "Qovun", category: "fruits", icon: "🍈" },
  { id: "ing_296", name: "Tarvuz", category: "fruits", icon: "🍉" },
  { id: "ing_297", name: "Mango", category: "fruits", icon: "🥭" },

  // --- 🧁 Un, Shakar va Qandolat mahsulotlari (24 ta) ---
  { id: "ing_298", name: "Bug'doy uni (oliy nav)", category: "baking", icon: "🌾" },
  { id: "ing_299", name: "1-nav bug'doy uni", category: "baking", icon: "🌾" },
  { id: "ing_300", name: "Javdar uni (Rjanaya)", category: "baking", icon: "🌾" },
  { id: "ing_301", name: "Makkajo'xori uni", category: "baking", icon: "🌽" },
  { id: "ing_302", name: "Oq shakar", category: "baking", icon: "🍬" },
  { id: "ing_303", name: "Shakar upasi", category: "baking", icon: "🧁" },
  { id: "ing_304", name: "Jigarrang qamish shakari", category: "baking", icon: "🟤" },
  { id: "ing_305", name: "Tabiiy tog' asali", category: "baking", icon: "🍯" },
  { id: "ing_306", name: "Kakao kukuni (to'q)", category: "baking", icon: "🍫" },
  { id: "ing_307", name: "Qora achchiq shokolad (70%)", category: "baking", icon: "🍫" },
  { id: "ing_308", name: "Sutli shokolad", category: "baking", icon: "🍫" },
  { id: "ing_309", name: "Oq shokolad", category: "baking", icon: "🍫" },
  { id: "ing_310", name: "Vanil shakari", category: "baking", icon: "🧁" },
  { id: "ing_311", name: "Xamirturush quruq (Droja)", category: "baking", icon: "🧫" },
  { id: "ing_312", name: "Xamirturush jonli (ho'l)", category: "baking", icon: "🧫" },
  { id: "ing_313", name: "Xamir qabartmasi (Razrixlitel)", category: "baking", icon: "🧁" },
  { id: "ing_314", name: "Osh sodasi (Pishiriq sodasi)", category: "baking", icon: "⚪" },
  { id: "ing_315", name: "Makkajo'xori kraxmali", category: "baking", icon: "🌽" },
  { id: "ing_316", name: "Kartoshka kraxmali", category: "baking", icon: "🥔" },
  { id: "ing_317", name: "Jelatin kukuni", category: "baking", icon: "🍮" },
  { id: "ing_318", name: "Agar-agar kukuni", category: "baking", icon: "🍮" },
  { id: "ing_319", name: "Savoyardi pechenyesi", category: "baking", icon: "🥖" },
  { id: "ing_320", name: "Pishiriq qiyomi (sirop)", category: "baking", icon: "🍯" },
  { id: "ing_321", name: "Eritilgan karamel", category: "baking", icon: "🍮" },

  // --- 🐟 Baliq va Dengiz mahsulotlari (15 ta) ---
  { id: "ing_322", name: "Sazan balig'i", category: "seafood", icon: "🐟" },
  { id: "ing_323", name: "Sudak balig'i", category: "seafood", icon: "🐟" },
  { id: "ing_324", name: "Losos filesi (Siyomga)", category: "seafood", icon: "🍣" },
  { id: "ing_325", name: "Forel balig'i", category: "seafood", icon: "🐟" },
  { id: "ing_326", name: "Skumbriya balig'i", category: "seafood", icon: "🐟" },
  { id: "ing_327", name: "Qisqichbaqa tayoqchalari", category: "seafood", icon: "🦀" },
  { id: "ing_328", name: "Tozalangan krevetkalar", category: "seafood", icon: "🦐" },
  { id: "ing_329", name: "Qirol krevetkalari", category: "seafood", icon: "🦐" },
  { id: "ing_330", name: "Kalmar halqalari", category: "seafood", icon: "🦑" },
  { id: "ing_331", name: "Konservalangan tuna balig'i", category: "seafood", icon: "🐟" },
  { id: "ing_332", name: "Midiya (Mussels)", category: "seafood", icon: "🦪" },
  { id: "ing_333", name: "Qizil ikra", category: "seafood", icon: "🔴" },
  { id: "ing_334", name: "Qora ikra", category: "seafood", icon: "⚫" },
  { id: "ing_335", name: "Seldy balig'i (tuzlangan)", category: "seafood", icon: "🐟" },
  { id: "ing_336", name: "Noriy suv o'ti (sushi)", category: "seafood", icon: "🍙" },

  // --- 🍄 Qo'ziqorinlar va Qo'shimchalar (10 ta) ---
  { id: "ing_337", name: "Shampinyon qo'ziqorini", category: "veg", icon: "🍄" },
  { id: "ing_338", name: "Veshenka qo'ziqorini", category: "veg", icon: "🍄" },
  { id: "ing_339", name: "Oq o'rmon qo'ziqorini", category: "veg", icon: "🍄" },
  { id: "ing_340", name: "Quritilgan qo'ziqorin", category: "veg", icon: "🍄" },
  { id: "ing_341", name: "Shiitake qo'ziqorini", category: "veg", icon: "🍄" },
  { id: "ing_342", name: "Zaytun moyida qo'ziqorin", category: "veg", icon: "🍄" },
  { id: "ing_343", name: "Kokos suti", category: "dairy", icon: "🥥" },
  { id: "ing_344", name: "Tofu pishlog'i (soya)", category: "dairy", icon: "🧈" },
  { id: "ing_345", name: "Gazlangan suv (xamirga)", category: "oils", icon: "🥤" },
  { id: "ing_346", name: "Muz bo'lakchalari", category: "oils", icon: "🧊" }
];

// ==========================================================
// KENGAYTIRILGAN AI MASALLIQ O'RNINI BOSISH BAZASI (OFFLINE / CACHE)
// ==========================================================
window.AI_SUBSTITUTES = {
  "guruch": {
    name: "Guruch (Devzira / Lazer / Alanga)",
    alternatives: [
      "Alanga yoki Avangard guruchi (suvini 10% kamroq quying)",
      "Dumaloq Krasnodar guruchi (Sho'rva va dimlamalar uchun a'lo)",
      "Bulg'ur yoki marjumak (Grechka) - parhezbop to'yimli muqobil sifatida",
      "Kuskus yoki kinoa - fast-palovlar va sabzavotli garnirlar uchun"
    ],
    advice: "Devzira bo'lmasa, oddiy Lazer yoki Alanga guruchini 30 daqiqa iliq sho'r suvda ivitib oling, ta'mi va shakli ajoyib chiqadi."
  },
  "go'sht": {
    name: "Go'sht (Mol / Qo'y)",
    alternatives: [
      "Mol lahm go'shti (qo'y go'shti o'rniga, ozroq sariyog' yoki dumba qo'shiladi)",
      "Tovuq yoki kurka filesi (tezroq pishadi, yengil parhezbop ta'm beradi)",
      "Qo'ziqorin (shampinyon) - go'shtsiz / vegeterian variantlar uchun",
      "Qizil loviya yoki no'xat - to'yimli oqsil manbai sifatida"
    ],
    advice: "Mol go'shtini yumshoq qilish uchun uni oldindan ozgina piyoz sharbati yoki qatiqda 30 daqiqa marinadlab oling."
  },
  "sabzi": {
    name: "Sabzi (Sariq / Qizil)",
    alternatives: [
      "Qizil sabzi (sariq sabzi o'rniga — palovni sal shirinroq qiladi, lekin juda mazali)",
      "Oshqovoq yoki butternut qovoq bo'laklari (dimlama va sho'rvalarda)",
      "Sholg'om yoki daikon turpi (sho'rvalarda yoqimli shirinlik va sershiralik beradi)"
    ],
    advice: "Agar sariq sabzi topilmasa, qizil sabzini somoncha qilib to'g'rab, qozonda piyozi bilan yaxshilab qovursangiz, oshning rangi chiroyli tillarang bo'ladi."
  },
  "piyoz": {
    name: "Piyoz",
    alternatives: [
      "Qizil yoki oq piyoz (sal shirinroq, salat va qovurmalarga a'lo)",
      "Porey piyozi (pırasa) yoki ko'k piyozning oq poyasi",
      "Quritilgan sarimsoq va sarimsoqpiyoz - xushbo'ylik berish uchun"
    ],
    advice: "Piyoz bo'lmasa ko'k piyozning pastki oq qismini foydalaning, qovurayotganda olovni pasaytiring."
  },
  "qaymoq": {
    name: "Qaymoq (Slivki 20-33%)",
    alternatives: [
      "1 stakan sut + 35g eritilgan sifatli sariyog' (blenderda aralashtiriladi)",
      "2-3 osh qoshiq smetana + 3 qoshiq iliq sut",
      "Krem-pishloq yoki suzma (pastalar uchun juda qalin va mazali sous beradi)",
      "Kokos suti - o'simlik asosidagi xushbo'y muqobil"
    ],
    advice: "Sousga smetana qo'shayotganda olovni pasaytiring, aks holda yuqori haroratda chirib ketishi mumkin."
  },
  "dumba": {
    name: "Dumba yog'i",
    alternatives: [
      "Sariyog' + o'simlik yog'i (1:1 nisbatda)",
      "Eritilgan mol yog'i (chirva)",
      "Zaytun moyi (parhezbop va xushbo'y muqobil)",
      "Zig'ir (zag'ir) yog'i - milliy osh uchun o'ziga xos ta'm beradi"
    ],
    advice: "Dumba hidi yoqmasa yoki bo'lmasa, sifatli sariyog'dan foydalansangiz taom mayin va xushxo'r chiqadi."
  },
  "pishloq": {
    name: "Pishloq (Mozzarella / Parmezan / Chedder)",
    alternatives: [
      "Suluguni yoki oq brinza (Mozzarella o'rniga, cho'ziluvchan)",
      "Gollandcha qattiq pishloq yoki Rossiya pishlog'i (Parmezan o'rniga)",
      "Eritilgan pishloq (plavleniy sir) - krem souslar uchun",
      "Tvorog + ozroq tuz va sarimsoq - pishiriqlar uchun"
    ],
    advice: "Oddiy Golland pishlog'ini mayda qirg'ichdan chiqarib ozroq quritib olsangiz, Parmezandek quruq va sho'rroq ta'm beradi."
  },
  "jusay": {
    name: "Jusay ko'kati",
    alternatives: [
      "Ko'k piyoz + 1 tish sarimsoqpiyoz bargi",
      "Selderey novdasi (ingichka to'g'ralgan)",
      "Pırasa (porey piyozi) va yangi shivit"
    ],
    advice: "Oddiy ko'k piyozga ozgina ezilgan sarimsoq aralashtirsangiz, lag'mon uchun xuddi jusaydek xushbo'ylik beradi."
  },
  "pomidor": {
    name: "Yangi Pomidor",
    alternatives: [
      "Tomat pastasi (1 osh qoshiq) + ozroq iliq suv va chimdim shakar",
      "Konservalangan pomidor o'z sharbatida (Pelati)",
      "Shirin qizil bolgar qalampiri pyuresi",
      "Ketchup yoki lecho - qovurma va souslar uchun"
    ],
    advice: "Tomat pastasining nordonligini yo'qotish uchun uni qovurayotganda yarim choy qoshiq shakar seping."
  },
  "tuxum": {
    name: "Tuxum",
    alternatives: [
      "Xamir uchun: 1 osh qoshiq makkajo'xori kraxmali + 2 osh qoshiq suv",
      "Keks/desert uchun: yarimta ezilgan banan yoki 2 osh qoshiq qatiq",
      "Kotlet uchun: ozgina sutda ivitilgan non mag'zi yoki kartoshka qirg'ichi",
      "Pishiriqlarda sirtiga surtish uchun: 1 qoshiq sut + chimdim shakar"
    ],
    advice: "Kotletga tuxum solmasdan mayda qirg'ichdan o'tkazilgan xom kartoshka qo'shsangiz kotlet shirali va yopishqoq bo'ladi."
  },
  "asal": {
    name: "Tabiiy Asal",
    alternatives: [
      "Quyuq shakar qiyomi (karamel)",
      "Zarchova (kukuruzniy sirop) yoki shinni (patoka)",
      "Eritilgan jigarrang shakar va vanilin",
      "O'rik yoki anjir murabbosi sharbati"
    ],
    advice: "Medovik uchun shakarni qizartirib kuydirib olsangiz, asalsiz ham xushbo'y karamel ta'mi hosil bo'ladi."
  },
  "maskarpone": {
    name: "Maskarpone pishlog'i",
    alternatives: [
      "Yog'li tvorogni (300g) smetana (100g) va sariyog' (50g) bilan blenderda ezib oling",
      "Filadelfiya yoki boshqa krem-chiz",
      "Quyultirilgan suzma va quyuq qaymoq aralashmasi"
    ],
    advice: "Tvorogni elakdan 2 marta o'tkazib ozroq shakar upasi qo'shilsa Tiramisu uchun ajoyib krem hosil bo'ladi."
  },
  "sarimsoq": {
    name: "Sarimsoqpiyoz",
    alternatives: [
      "Quritilgan sarimsoq kukuni (1/4 choy qoshiq = 1 tish sarimsoq)",
      "Yashil ko'k sarimsoq barglari yoki jusay",
      "Xantal (gorchitsa) yoki yangi zanjabil (imbir)"
    ],
    advice: "Quritilgan sarimsoq kuyib ketmaydi va qovurmalarga bir tekis xushbo'y ta'm beradi."
  },
  "kartoshka": {
    name: "Kartoshka",
    alternatives: [
      "Batat (shirin kartoshka) - qovurish va sho'rva uchun",
      "Gulkaram yoki brokkoli - parhezbop pyure uchun",
      "Qovoq yoki sholg'om - sho'rva va dimlamalarda quyuqlik berish uchun"
    ],
    advice: "Pyure tayyorlayotganda gulkaramni kartoshka bilan teng hajmda pishirsangiz, yengil va past kaloriyali nozik pyure bo'ladi."
  },
  "zira": {
    name: "Zira (O'zbek qora zirasi)",
    alternatives: [
      "Koriandr (kashnich urug'i) - ezilgan holda",
      "Oddiy oq zira (kumin) yoki tog'iy zira",
      "Timyan (kekik) yoki rozmarin - go'shtli taomlar uchun"
    ],
    advice: "Kashnich urug'i va qora murch aralashmasi palovda ziraning 70% xushbo'yligini bera oladi."
  },
  "sariyog'": {
    name: "Sariyog' (Slivochnoe maslo)",
    alternatives: [
      "O'simlik moyi (kungaboqar/zaytun) - xamir va qovurishda",
      "Margarina yoki pishiriq yog'i",
      "Eritilgan qaymoq yoki smetana"
    ],
    advice: "Xamirga o'simlik yog'i qo'shsangiz u yanada qarsildoq bo'ladi, ammo sariyog'dek mayinlik bo'lishi uchun ozroq sut quying."
  },
  "mayonez": {
    name: "Mayonez",
    alternatives: [
      "Qatiq yoki smetana + 1 choy qoshiq xantal (gorchitsa) + chimdim tuz",
      "Suzma + ozroq zaytun moyi va limon suvi",
      "Avokado pyuresi + limon sharbati - sog'lom salat sousi"
    ],
    advice: "Smetanaga bir tomchi limon suvi va yarim choy qoshiq gorchitsa solsangiz salatlarda mayonezdan ham mazali bo'ladi."
  },
  "soya": {
    name: "Soya sousi",
    alternatives: [
      "Go'sht bulyoni + bir chimdim tuz va 1 choy qoshiq balzamik sirka",
      "Teriyaki sousi (ozroq suv bilan suyultirilgan)",
      "Tuzlangan tomat sharbati + bir necha tomchi limon"
    ],
    advice: "Go'sht marinadida soya sousi bo'lmasa, tuz, murch va ozroq gazlangan mineral suv go'shtni yumshatib beradi."
  }
};

// ==========================================================
// GEMINI AI INTEGRATSIYASI (HAQIQIY GOOGLE GEMINI 2.5 / 1.5 FLASH)
// ==========================================================
window.callGeminiApi = async function({ apiKey, prompt, imageBase64, mimeType = "image/jpeg" }) {
  if (!apiKey || !apiKey.trim()) {
    throw new Error("Gemini API kaliti kiritilmagan. Sozlamalar bo'limidan kalitni kiriting.");
  }

  const cleanKey = apiKey.trim();
  // Modellar ustuvorligi: 2.5-flash -> 1.5-flash -> 1.5-pro
  const models = ["gemini-2.5-flash", "gemini-1.5-flash", "gemini-1.5-pro"];
  let lastError = null;

  for (const model of models) {
    try {
      const url = `https://generativelanguage.googleapis.com/v1beta/models/${model}:generateContent?key=${cleanKey}`;
      const parts = [];

      if (prompt) {
        parts.push({ text: prompt });
      }

      if (imageBase64) {
        const cleanBase64 = imageBase64.replace(/^data:[^;]+;base64,/, "");
        parts.push({
          inline_data: {
            mime_type: mimeType,
            data: cleanBase64
          }
        });
      }

      const response = await fetch(url, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          contents: [{ parts }]
        })
      });

      if (!response.ok) {
        const errJson = await response.json().catch(() => ({}));
        const errMsg = errJson.error?.message || `HTTP ${response.status}: ${response.statusText}`;
        throw new Error(`[${model}] xatosi: ${errMsg}`);
      }

      const data = await response.json();
      const text = data.candidates?.[0]?.content?.parts?.[0]?.text;
      if (!text) {
        throw new Error("Gemini javobi bo'sh bo'ldi.");
      }
      return text;
    } catch (err) {
      lastError = err;
      console.warn(`Model [${model}] bilan urinish:`, err.message);
      // Agar model topilmasa keyingisini sinab ko'ramiz
      if (err.message && (err.message.includes("not found") || err.message.includes("404"))) {
        continue;
      }
      break;
    }
  }

  throw lastError;
};
