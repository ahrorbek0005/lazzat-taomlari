// ==========================================================
// 11-talaba: React - State va Events
// Mavzu: Oshxona va Retseptlar Portali (52 ta Taom & AI Oshpaz Tizimi)
// Talablar:
// 1. useState bilan "sevimli retseptlar" ro'yxati (Favorites)
// 2. onClick va onChange hodisalari (Event Handlers)
// 3. Qidiruv input holati (Search State)
// 4. AI Masalliq O'rnini Bosuvchi Yordamchi (Substitute Advisor)
// 5. AI Sehrli Oshxona (Menda bor masalliqlar orqali taom yaratish)
// ==========================================================

const { useState, useEffect, useMemo } = React;

function App() {
  // ---------------------------------------------------------
  // 1. ASOSIY STATE-LAR (useState Hooklari)
  // ---------------------------------------------------------
  
  // Asosiy bo'lim tanlovi: 'recipes' (52 ta taom) yoki 'ai-chef' (Menda bor masalliqlar)
  const [activeTab, setActiveTab] = useState("recipes");

  // Qidiruv so'zi holati (Talab: qidiruv input holati)
  const [searchQuery, setSearchQuery] = useState("");

  // Sevimli retseptlar ro'yxati (Talab: useState bilan sevimli retseptlar ro'yxati)
  const [favorites, setFavorites] = useState(() => {
    try {
      const saved = localStorage.getItem("lazzat_favorites_v2");
      return saved ? JSON.parse(saved) : [1, 3, 26, 46];
    } catch (e) {
      return [1, 3, 26, 46];
    }
  });

  // Barcha 52 ta retseptlar to'plami
  const [recipes, setRecipes] = useState(window.RECIPES_DATA || []);

  // Filtrlar va saralash
  const [selectedCategory, setSelectedCategory] = useState("all");
  const [sortBy, setSortBy] = useState("default");
  const [difficultyFilter, setDifficultyFilter] = useState("all");
  const [onlyFavorites, setOnlyFavorites] = useState(false);

  // Modal va panel holatlari
  const [activeRecipe, setActiveRecipe] = useState(null);
  const [servingsCount, setServingsCount] = useState(4);
  const [checkedIngredients, setCheckedIngredients] = useState({});
  const [isFavoritesDrawerOpen, setIsFavoritesDrawerOpen] = useState(false);
  const [isAddModalOpen, setIsAddModalOpen] = useState(false);
  const [isStudentModalOpen, setIsStudentModalOpen] = useState(false);

  // ---------------------------------------------------------
  // AI OSHPAZ: 1. MASALLIQ O'RNINI BOSISH (SUBSTITUTE) STATE-LARI
  // ---------------------------------------------------------
  const [isSubModalOpen, setIsSubModalOpen] = useState(false);
  const [subQuery, setSubQuery] = useState("");
  const [subResult, setSubResult] = useState(null);

  // ---------------------------------------------------------
  // AI OSHPAZ: 2. MENDA BOR MASALLIQLAR (SMART FRIDGE) STATE-LARI
  // ---------------------------------------------------------
  const [fridgeIngredients, setFridgeIngredients] = useState([
    "Kartoshka", "Tuxum", "Piyoz", "Pomidor"
  ]);
  const [customIngInput, setCustomIngInput] = useState("");
  const [uploadedPhoto, setUploadedPhoto] = useState(null);
  const [isScanningPhoto, setIsScanningPhoto] = useState(false);
  const [photoScanTag, setPhotoScanTag] = useState("");
  const [isGeneratingAi, setIsGeneratingAi] = useState(false);
  const [aiMatchedRecipes, setAiMatchedRecipes] = useState(null);
  const [aiCustomDish, setAiCustomDish] = useState(null);

  // Taymer va Toast
  const [timerSeconds, setTimerSeconds] = useState(0);
  const [isTimerActive, setIsTimerActive] = useState(false);
  const [toastMessage, setToastMessage] = useState(null);

  // Yangi retsept shakli
  const [newRecipeForm, setNewRecipeForm] = useState({
    title: "",
    category: "milliy",
    time: "",
    servings: 4,
    calories: "",
    difficulty: "Oson",
    description: "",
    image: "",
    ingredientsText: "",
    instructionsText: ""
  });

  // Sevimlilarni localStorage ga saqlash
  useEffect(() => {
    try {
      localStorage.setItem("lazzat_favorites_v2", JSON.stringify(favorites));
    } catch (e) {
      console.error(e);
    }
  }, [favorites]);

  // Oshxona taymeri sanog'i
  useEffect(() => {
    let interval = null;
    if (isTimerActive) {
      interval = setInterval(() => {
        setTimerSeconds(prev => prev + 1);
      }, 1000);
    } else {
      clearInterval(interval);
    }
    return () => clearInterval(interval);
  }, [isTimerActive]);

  const showToast = (msg) => {
    setToastMessage(msg);
    setTimeout(() => {
      setToastMessage(null);
    }, 3200);
  };

  // ---------------------------------------------------------
  // 2. EVENT HANDLERS (Hodisalar)
  // ---------------------------------------------------------

  // [onChange] Qidiruv inputi hodisasi
  const handleSearchChange = (e) => {
    setSearchQuery(e.target.value);
  };

  // [onClick] Qidiruvni tozalash
  const handleClearSearch = () => {
    setSearchQuery("");
  };

  // [onClick] Sevimlilarga qo'shish / o'chirish (yurakcha)
  const toggleFavorite = (recipeId, e) => {
    if (e) e.stopPropagation();

    if (favorites.includes(recipeId)) {
      setFavorites(favorites.filter(id => id !== recipeId));
      showToast("💔 Retsept sevimlilardan olib tashlandi");
    } else {
      setFavorites([...favorites, recipeId]);
      showToast("❤️ Retsept sevimlilar ro'yxatiga qo'shildi!");
    }
  };

  // [onClick] Kategoriya tanlash
  const handleCategorySelect = (categoryId) => {
    setSelectedCategory(categoryId);
  };

  // [onChange] Saralash selecti
  const handleSortChange = (e) => {
    setSortBy(e.target.value);
  };

  // [onChange] Qiyinlik darajasi filtri
  const handleDifficultyChange = (e) => {
    setDifficultyFilter(e.target.value);
  };

  // [onClick] Retsept modalini ochish
  const handleOpenRecipeModal = (recipe) => {
    setActiveRecipe(recipe);
    setServingsCount(recipe.servings || 4);
    setCheckedIngredients({});
    setTimerSeconds(0);
    setIsTimerActive(false);
  };

  // [onClick] Modalni yopish
  const handleCloseRecipeModal = () => {
    setActiveRecipe(null);
    setIsTimerActive(false);
  };

  // [onClick] Porsiya miqdorini oshirish/kamaytirish (+ / -)
  const handleServingChange = (delta) => {
    setServingsCount(prev => Math.max(1, Math.min(12, prev + delta)));
  };

  // [onClick] Masalliqni belgilash
  const handleToggleIngredient = (index) => {
    setCheckedIngredients(prev => ({
      ...prev,
      [index]: !prev[index]
    }));
  };

  // Taymer boshqaruvi
  const toggleTimer = () => setIsTimerActive(prev => !prev);
  const resetTimer = () => {
    setIsTimerActive(false);
    setTimerSeconds(0);
  };

  const formatTimer = (totalSeconds) => {
    const mins = Math.floor(totalSeconds / 60);
    const secs = totalSeconds % 60;
    return `${String(mins).padStart(2, '0')}:${String(secs).padStart(2, '0')}`;
  };

  // ---------------------------------------------------------
  // 3. AI OSHPAZ FUNKSIYALARI (SUBSTITUTES & GENERATOR)
  // ---------------------------------------------------------

  // [onClick] AI Masalliq O'rnini Bosish oynasini ochish
  const handleOpenSubstituteModal = (initialIngredient = "") => {
    setIsSubModalOpen(true);
    setSubQuery(initialIngredient);
    if (initialIngredient) {
      findSubstitute(initialIngredient);
    } else {
      setSubResult(null);
    }
  };

  // AI O'rnini bosuvchini topish mantiqi
  const findSubstitute = (query) => {
    const q = query.toLowerCase().trim();
    if (!q) {
      setSubResult(null);
      return;
    }

    const db = window.AI_SUBSTITUTES || {};
    let foundKey = Object.keys(db).find(key => q.includes(key) || key.includes(q));

    if (foundKey) {
      setSubResult(db[foundKey]);
    } else {
      // Aqlli umumiy oshpazlik tavsiyasi
      setSubResult({
        name: `"${query}" uchun oshpazlik tavsiyasi`,
        alternatives: [
          "O'xshash xususiyatga ega mahsulotdan foydalaning (masalan, sut mahsulotlari bir-birining o'rnini bosadi)",
          "Ziravor yetishmasa, qora murch va osh tuzi bilan ta'mni muvozanatlang",
          "Agar asosiy masalliq bo'lmasa, taomdan butunlay olib tashlab, kartoshka yoki piyoz miqdorini ozroq oshiring"
        ],
        advice: `Ushbu retseptda "${query}" masallig'i bo'lmasa ham, olov me'yori va boshqa ziravorlar yordamida mazali taom tayyorlash mumkin!`
      });
    }
  };

  // [onChange] AI Masalliq qidiruv inputi
  const handleSubQueryChange = (e) => {
    const val = e.target.value;
    setSubQuery(val);
    findSubstitute(val);
  };

  // ---------------------------------------------------------
  // AI SEHRLI OSHXONA (MENDA BOR MASALLIQLAR) HODISALARI
  // ---------------------------------------------------------

  // [onClick] Yangi masalliq qo'shish
  const handleAddFridgeIngredient = (ingName) => {
    const clean = (ingName || customIngInput).trim();
    if (!clean) return;
    if (!fridgeIngredients.some(i => i.toLowerCase() === clean.toLowerCase())) {
      setFridgeIngredients([...fridgeIngredients, clean]);
    }
    setCustomIngInput("");
  };

  // [onClick] Masalliqni ro'yxatdan olib tashlash
  const handleRemoveFridgeIngredient = (index) => {
    setFridgeIngredients(fridgeIngredients.filter((_, idx) => idx !== index));
  };

  // [onChange] Rasm yuklash va skanerlash
  const handlePhotoUpload = (e) => {
    const file = e.target.files && e.target.files[0];
    if (!file) return;

    const reader = new FileReader();
    reader.onload = (event) => {
      setUploadedPhoto(event.target.result);
      setIsScanningPhoto(true);
      setPhotoScanTag("AI Neyrotarmog'i masalliqlarni skanerlamoqda...");

      // Simulyatsiya qilingan aqlli skanerlash (1.5 soniyadan keyin)
      setTimeout(() => {
        setIsScanningPhoto(false);
        const detected = ["Tuxum", "Kartoshka", "Pishloq", "Pomidor", "Ko'katlar"];
        // Mavjud ro'yxatga yangi topilganlarni qo'shish
        const updated = [...new Set([...fridgeIngredients, ...detected])];
        setFridgeIngredients(updated);
        setPhotoScanTag("✅ 5 ta masalliq muvaffaqiyatli aniqlandi va qo'shildi!");
        showToast("📸 Rasm tahlil qilindi: 5 ta masalliq aniqlandi!");
      }, 1600);
    };
    reader.readAsDataURL(file);
  };

  // [onClick] AI bilan taom taklif qilish
  const handleGenerateAiRecipes = () => {
    if (fridgeIngredients.length === 0) {
      alert("Iltimos, avval kamida 2-3 ta masalliq qo'shing yoki rasm yuklang!");
      return;
    }

    setIsGeneratingAi(true);

    setTimeout(() => {
      setIsGeneratingAi(false);

      // 1. 52 ta retsept ichidan mos keluvchilarni hisoblash
      const scored = recipes.map(recipe => {
        const recipeIngNames = recipe.ingredients.map(i => i.name.toLowerCase());
        let matches = 0;
        let missing = [];

        recipeIngNames.forEach(rIng => {
          const hasIt = fridgeIngredients.some(fIng => 
            rIng.includes(fIng.toLowerCase()) || fIng.toLowerCase().includes(rIng.slice(0, 4))
          );
          if (hasIt) {
            matches++;
          } else {
            missing.push(rIng);
          }
        });

        const scorePercent = Math.min(100, Math.round((matches / Math.max(1, recipe.ingredients.length)) * 100));
        return {
          ...recipe,
          matchScore: scorePercent,
          missingIngredients: missing.slice(0, 3)
        };
      }).filter(r => r.matchScore > 20)
        .sort((a, b) => b.matchScore - a.matchScore)
        .slice(0, 6);

      setAiMatchedRecipes(scored);

      // 2. AI Maxsus Mualliflik Taomini yaratish
      const ingsStr = fridgeIngredients.slice(0, 4).join(", ");
      setAiCustomDish({
        title: `AI Mualliflik Taomi: Mazali Xonaki Qovurma (${fridgeIngredients[0]} va ${fridgeIngredients[1] || "sabzavotlar"})`,
        time: 25,
        servings: 3,
        calories: 380,
        description: `Sizdagi ${ingsStr} masalliqlari uyg'unligida maxsus tayyorlanadigan yengil va nihoyatda mazali issiq taom.`,
        steps: [
          `1-qadam: ${fridgeIngredients[0]} va boshqa sabzavotlarni bir xil kubik qilib to'g'rang.`,
          `2-qadam: Tovada ozroq yog'ni qizdirib, avval qattiqroq masalliqlarni 8 daqiqa qovuring.`,
          `3-qadam: Ustidan qolgan masalliqlarni va ta'bga ko'ra tuz, murch qo'shing.`,
          `4-qadam: Qopqog'ini yopib, past olovda 10 daqiqa dimlang va issiq holda dasturxonga torting.`
        ],
        tip: "Taom tayyor bo'lishidan 2 daqiqa oldin ustiga ozroq yangi ko'kat yoki sarimsoq sepsangiz xushbo'yligi yanada ortadi."
      });

      showToast("✨ AI Oshpaz siz uchun eng maqbul taomlarni topdi!");
    }, 1200);
  };

  // ---------------------------------------------------------
  // YANGI RETSEPT QO'SHISH VA SARALASH (useMemo)
  // ---------------------------------------------------------
  const filteredRecipes = useMemo(() => {
    return recipes.filter(recipe => {
      const matchesSearch = 
        recipe.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
        recipe.description.toLowerCase().includes(searchQuery.toLowerCase());

      const matchesCategory = 
        selectedCategory === "all" || recipe.category === selectedCategory;

      const matchesDifficulty = 
        difficultyFilter === "all" || recipe.difficulty === difficultyFilter;

      const matchesFavorites = 
        !onlyFavorites || favorites.includes(recipe.id);

      return matchesSearch && matchesCategory && matchesDifficulty && matchesFavorites;
    }).sort((a, b) => {
      if (sortBy === "rating") return b.rating - a.rating;
      if (sortBy === "time-asc") return a.time - b.time;
      if (sortBy === "calories-asc") return a.calories - b.calories;
      return 0;
    });
  }, [recipes, searchQuery, selectedCategory, difficultyFilter, onlyFavorites, favorites, sortBy]);

  const favoriteRecipesList = useMemo(() => {
    return recipes.filter(r => favorites.includes(r.id));
  }, [recipes, favorites]);

  // Yangi retsept qo'shish formasi
  const handleNewRecipeInputChange = (e) => {
    const { name, value } = e.target;
    setNewRecipeForm(prev => ({ ...prev, [name]: value }));
  };

  const handleAddRecipeSubmit = (e) => {
    e.preventDefault();
    if (!newRecipeForm.title.trim()) {
      alert("Retsept nomini kiriting!");
      return;
    }

    const newRecipe = {
      id: Date.now(),
      title: newRecipeForm.title,
      category: newRecipeForm.category,
      categoryLabel: newRecipeForm.category === "milliy" ? "Milliy taom" :
                     newRecipeForm.category === "shorva" ? "Sho'rva" :
                     newRecipeForm.category === "fastfood" ? "Fast Food" :
                     newRecipeForm.category === "salat" ? "Salat" : "Shirinlik",
      time: parseInt(newRecipeForm.time) || 30,
      servings: parseInt(newRecipeForm.servings) || 4,
      calories: parseInt(newRecipeForm.calories) || 350,
      difficulty: newRecipeForm.difficulty,
      rating: 5.0,
      reviewsCount: 1,
      image: newRecipeForm.image.trim() || "https://images.unsplash.com/photo-1495521821757-a1efb6729352?auto=format&fit=crop&w=800&q=80",
      description: newRecipeForm.description || "Xonadonimizning ajoyib taomi",
      ingredients: newRecipeForm.ingredientsText
        ? newRecipeForm.ingredientsText.split("\n").filter(t => t.trim()).map(t => ({ name: t.trim(), amount: 100, unit: "g" }))
        : [{ name: "Kerakli masalliqlar", amount: 1, unit: "to'plam" }],
      instructions: newRecipeForm.instructionsText
        ? newRecipeForm.instructionsText.split("\n").filter(t => t.trim())
        : ["Barcha masalliqlarni tayyorlang va xush ko'ngil bilan pishiring."],
      tips: "Mehr bilan tayyorlangan taom doimo eng shirin bo'ladi!"
    };

    setRecipes([newRecipe, ...recipes]);
    setIsAddModalOpen(false);
    showToast(`🎉 "${newRecipe.title}" qo'shildi! Jami: ${recipes.length + 1} ta`);
    setNewRecipeForm({
      title: "",
      category: "milliy",
      time: "",
      servings: 4,
      calories: "",
      difficulty: "Oson",
      description: "",
      image: "",
      ingredientsText: "",
      instructionsText: ""
    });
  };

  // ---------------------------------------------------------
  // 4. INTERFEYS RENDER (JSX)
  // ---------------------------------------------------------
  return (
    <div className="app-root">
      
      {/* ================= NAVBAR ================= */}
      <header className="navbar">
        <div className="container nav-container">
          <div className="logo-group" onClick={() => setActiveTab("recipes")}>
            <div className="logo-icon-box">👨‍🍳</div>
            <div className="logo-text">
              <h1>Lazzat</h1>
              <span>52 ta Taom & AI Oshpaz</span>
            </div>
          </div>

          {/* Asosiy Bo'limlar Switcheri (onClick & useState) */}
          <div className="nav-tab-switcher">
            <button 
              className={`nav-tab-btn ${activeTab === "recipes" ? "active" : ""}`}
              onClick={() => setActiveTab("recipes")}
            >
              <span>📖</span> Retseptlar ({recipes.length})
            </button>
            <button 
              className={`nav-tab-btn ai-btn ${activeTab === "ai-chef" ? "active" : ""}`}
              onClick={() => setActiveTab("ai-chef")}
            >
              <span className="ai-pulse-dot"></span>
              <span>🤖 AI Sehrli Oshxona</span>
            </button>
          </div>

          <div className="nav-actions">
            {/* AI Masalliq O'rnini Bosish tezkor tugmasi */}
            <button 
              className="student-badge-btn" 
              style={{ background: "rgba(139, 92, 246, 0.18)", borderColor: "rgba(139, 92, 246, 0.4)", color: "#c4b5fd" }}
              onClick={() => handleOpenSubstituteModal("")}
              title="Biror masalliq yetishmayotgan bo'lsa AI maslahati"
            >
              <span>💡</span> AI Maslahat
            </button>

            {/* Talaba topshirig'i axborot tugmasi */}
            <button 
              className="student-badge-btn" 
              onClick={() => setIsStudentModalOpen(true)}
              title="Topshiriq talablari va kod hisoboti"
            >
              <span>🎓</span> 11-talaba
            </button>

            {/* Sevimlilar tugmasi */}
            <button 
              className="fav-nav-btn"
              onClick={() => setIsFavoritesDrawerOpen(true)}
              title="Sevimli retseptlar ro'yxati"
            >
              <span>❤️</span>
              <span>Sevimlilar</span>
              <span className="fav-badge-count">{favorites.length}</span>
            </button>

            <button 
              className="btn-primary-compact"
              onClick={() => setIsAddModalOpen(true)}
            >
              <span>➕</span> Qo'shish
            </button>
          </div>
        </div>
      </header>

      {/* =========================================================
          1-BO'LIM: RETSEPTLAR MENYUSI (52 TA RETSEPT)
         ========================================================= */}
      {activeTab === "recipes" && (
        <main>
          {/* Hero Banner */}
          <section className="hero-section">
            <div className="container">
              <div className="hero-tag">
                <span>✨</span> 52 ta eng sara milliy, sho'rva, fast food, salat va shirinliklar
              </div>
              <h2 className="hero-title">
                Har qanday taomni <span className="highlight">eng aniq retsepti</span> bilan tayyorlang
              </h2>
              <p className="hero-subtitle">
                Samarqandcha osh, varaqi somsa, shourma, pizzalar, vitaminli salatlar va nozik desertlar — bir joyda!
              </p>

              {/* Qidiruv inputi (useState & onChange) */}
              <div className="search-wrapper">
                <div className="search-input-box">
                  <span className="search-icon">🔍</span>
                  <input 
                    type="text"
                    className="search-input"
                    placeholder="Taom nomi yoki masalliqlar bo'yicha qidiring (masalan: Palov, Somsa, Pizza, Mastava, Sezar)..."
                    value={searchQuery}
                    onChange={handleSearchChange}
                  />
                  {searchQuery && (
                    <button 
                      className="search-clear-btn" 
                      onClick={handleClearSearch}
                      title="Qidiruvni tozalash"
                    >
                      ✕
                    </button>
                  )}
                  <span className="search-counter-chip">
                    {filteredRecipes.length} / {recipes.length} ta taom
                  </span>
                </div>
              </div>

              {/* Tezkor qidiruv teglari */}
              <div className="quick-tags">
                <span className="quick-tag-label">Mashhur taomlar:</span>
                {["Osh", "Somsa", "Lag'mon", "Pizza", "Mastava", "Shashlik", "Fondan", "Sezar", "Tiramisu"].map(tag => (
                  <button 
                    key={tag}
                    className="quick-tag-pill"
                    onClick={() => setSearchQuery(tag)}
                  >
                    #{tag}
                  </button>
                ))}
                {searchQuery && (
                  <button 
                    className="quick-tag-pill" 
                    style={{ color: "#ef4444", borderColor: "rgba(239,68,68,0.4)" }}
                    onClick={handleClearSearch}
                  >
                    Tozalash ✕
                  </button>
                )}
              </div>
            </div>
          </section>

          {/* Filtrlar va boshqaruv */}
          <section className="container">
            <div className="controls-bar">
              {/* Kategoriya tablari (onClick) */}
              <div className="categories-track">
                {(window.CATEGORIES_DATA || []).map(cat => (
                  <button
                    key={cat.id}
                    className={`cat-tab-btn ${selectedCategory === cat.id ? "active" : ""}`}
                    onClick={() => handleCategorySelect(cat.id)}
                  >
                    <span>{cat.icon}</span>
                    <span>{cat.label}</span>
                  </button>
                ))}
              </div>

              {/* Saralash va qiyinlik filtrlari */}
              <div className="filter-row">
                <div className="filter-left-group">
                  <div className="select-control-box">
                    <span>🔄 Saralash:</span>
                    <select value={sortBy} onChange={handleSortChange}>
                      <option value="default">Standart tartib</option>
                      <option value="rating">Eng yuqori baho ⭐</option>
                      <option value="time-asc">Tez tayyorlanadigan ⏱️</option>
                      <option value="calories-asc">Kam kaloriyali 🥗</option>
                    </select>
                  </div>

                  <div className="select-control-box">
                    <span>📊 Qiyinlik:</span>
                    <select value={difficultyFilter} onChange={handleDifficultyChange}>
                      <option value="all">Barchasi</option>
                      <option value="Oson">Oson</option>
                      <option value="O'rtacha">O'rtacha</option>
                      <option value="Qiyin">Qiyin</option>
                    </select>
                  </div>

                  {/* Faqat sevimlilar (onClick) */}
                  <button 
                    className={`toggle-favs-btn ${onlyFavorites ? "active" : ""}`}
                    onClick={() => setOnlyFavorites(!onlyFavorites)}
                  >
                    <span>{onlyFavorites ? "❤️ Faqat sevimlilar faol" : "🤍 Faqat sevimlilar"}</span>
                  </button>
                </div>

                <div className="active-count-label">
                  Ko'rsatilmoqda: <strong>{filteredRecipes.length}</strong> ta retsept
                </div>
              </div>
            </div>

            {/* 52 TA RETSEPTLAR GRID */}
            {filteredRecipes.length > 0 ? (
              <div className="recipes-grid">
                {filteredRecipes.map(recipe => {
                  const isFav = favorites.includes(recipe.id);
                  return (
                    <div key={recipe.id} className="recipe-card">
                      <div className="card-img-wrapper" onClick={() => handleOpenRecipeModal(recipe)}>
                        <img src={recipe.image} alt={recipe.title} className="card-img" loading="lazy" />
                        
                        <div className="card-top-badges">
                          <span className="badge-tag badge-cat">{recipe.categoryLabel}</span>
                          <span className={`badge-tag badge-diff ${recipe.difficulty}`}>{recipe.difficulty}</span>
                        </div>

                        {/* Yurakcha sevimlilar tugmasi (onClick & useState) */}
                        <button 
                          className={`fav-heart-btn ${isFav ? "is-favorite" : ""}`}
                          onClick={(e) => toggleFavorite(recipe.id, e)}
                          title={isFav ? "Sevimlilardan o'chirish" : "Sevimlilarga qo'shish"}
                        >
                          {isFav ? "❤️" : "🤍"}
                        </button>
                      </div>

                      <div className="card-body">
                        <div className="card-meta-row">
                          <div className="card-time">
                            <span>⏱️</span> {recipe.time} daqiqa
                          </div>
                          <div className="card-rating">
                            <span>⭐</span> {recipe.rating} ({recipe.reviewsCount})
                          </div>
                        </div>

                        <h3 className="card-title">{recipe.title}</h3>
                        <p className="card-desc">{recipe.description}</p>

                        <div className="card-footer">
                          <button 
                            className="btn-card-ai-sub" 
                            onClick={() => handleOpenSubstituteModal(recipe.ingredients[0] ? recipe.ingredients[0].name : "")}
                            title="Masalliq yetishmasa AI maslahati"
                          >
                            🤖 Masalliq o'rniga
                          </button>
                          <button 
                            className="btn-view-recipe"
                            onClick={() => handleOpenRecipeModal(recipe)}
                          >
                            Batafsil <span>→</span>
                          </button>
                        </div>
                      </div>
                    </div>
                  );
                })}
              </div>
            ) : (
              <div className="empty-state">
                <div className="empty-icon">🍳</div>
                <h3>Mos keluvchi taom topilmadi</h3>
                <p>Qidiruv so'zini o'zgartiring yoki filtrlarni tozalang.</p>
                <button 
                  className="btn-primary-compact"
                  style={{ margin: "0 auto" }}
                  onClick={() => {
                    setSearchQuery("");
                    setSelectedCategory("all");
                    setDifficultyFilter("all");
                    setOnlyFavorites(false);
                  }}
                >
                  Barcha filtrlarni tozalash
                </button>
              </div>
            )}
          </section>
        </main>
      )}

      {/* =========================================================
          2-BO'LIM: AI SEHRLI OSHXONA (MENDA BOR MASALLIQLAR)
         ========================================================= */}
      {activeTab === "ai-chef" && (
        <section className="container ai-fridge-section">
          {/* AI Banner */}
          <div className="ai-hero-box">
            <div className="ai-hero-badge">
              <span>🤖</span> Aqlli Oshpaz & Neyrotarmoq Tahlili
            </div>
            <h2 className="ai-hero-title">
              Menda bor masalliqlardan taom tayyorlash
            </h2>
            <p className="ai-hero-desc">
              Muzlatgichingizdagi yoki oshxonangizdagi masalliqlarni <strong>ro'yxat qilib yozing</strong> yoki ularni <strong>rasmga tushirib yuboring</strong>! AI ulardan qanday taom tayyorlash mumkinligini va qadam-baqadam tayyorlanishini ko'rsatib beradi.
            </p>

            {/* Ikki usulli kiritish */}
            <div className="ai-input-grid">
              {/* 1. Rasm yuklash & Skanerlash */}
              <div className="ai-upload-card" onClick={() => document.getElementById("ai-photo-upload-input").click()}>
                <input 
                  type="file" 
                  id="ai-photo-upload-input"
                  className="file-input-hidden" 
                  accept="image/*"
                  onChange={handlePhotoUpload}
                />
                
                {uploadedPhoto ? (
                  <div className="upload-preview-box">
                    <img src={uploadedPhoto} alt="Yuklangan masalliqlar" />
                    {isScanningPhoto && <div className="scanner-laser-bar"></div>}
                    <div className="scanner-status-tag">
                      {isScanningPhoto ? "🔍 Skanerlanmoqda..." : (photoScanTag || "Rasm yuklandi")}
                    </div>
                  </div>
                ) : (
                  <div>
                    <div className="ai-upload-icon">📸</div>
                    <h4>Masalliqlarni rasmga oling yoki yuklang</h4>
                    <p>Muzlatgich yoki stoldagi mahsulotlar suratini yuklang. AI o'zi taniydi!</p>
                    <div style={{ marginTop: "12px" }}>
                      <span className="btn-add-ing" style={{ display: "inline-block" }}>
                        Surat tanlash 📁
                      </span>
                    </div>
                  </div>
                )}
              </div>

              {/* 2. Ro'yxat qilib kiritish */}
              <div className="ai-text-input-card">
                <h4>
                  <span>📝</span> Masalliqlarni yozing yoki tanlang:
                </h4>
                
                <div className="ai-input-field-group">
                  <input 
                    type="text"
                    className="ai-ingredient-input"
                    placeholder="Masalan: Kartoshka, Tuxum, Pishloq..."
                    value={customIngInput}
                    onChange={(e) => setCustomIngInput(e.target.value)}
                    onKeyDown={(e) => {
                      if (e.key === "Enter") {
                        e.preventDefault();
                        handleAddFridgeIngredient();
                      }
                    }}
                  />
                  <button className="btn-add-ing" onClick={() => handleAddFridgeIngredient()}>
                    + Qo'shish
                  </button>
                </div>

                {/* Tanlangan masalliqlar teglar (Chips) */}
                <div className="selected-ingredients-wrap">
                  {fridgeIngredients.length > 0 ? (
                    fridgeIngredients.map((ing, idx) => (
                      <span key={idx} className="ing-chip">
                        <span>🥬 {ing}</span>
                        <span 
                          className="ing-chip-remove" 
                          onClick={() => handleRemoveFridgeIngredient(idx)}
                          title="O'chirish"
                        >
                          ✕
                        </span>
                      </span>
                    ))
                  ) : (
                    <span style={{ fontSize: "12px", color: "var(--text-dim)" }}>
                      Hozircha masalliq qo'shilmagan. Quyidagi mashhurlardan birini bosing:
                    </span>
                  )}
                </div>

                {/* Tezkor tanlash masalliqlari */}
                <div className="quick-pills-label">Tezkor tanlash:</div>
                <div className="quick-pills-cloud">
                  {[
                    "Kartoshka", "Tuxum", "Piyoz", "Pomidor", "Guruch", 
                    "Pishloq", "Tovuq", "Go'sht", "Sabzi", "Qo'ziqorin", "Sut", "Un"
                  ].map(item => {
                    const isAdded = fridgeIngredients.some(i => i.toLowerCase() === item.toLowerCase());
                    return (
                      <button 
                        key={item}
                        className={`quick-ing-pill ${isAdded ? "added" : ""}`}
                        onClick={() => handleAddFridgeIngredient(item)}
                      >
                        {isAdded ? "✓" : "+"} {item}
                      </button>
                    );
                  })}
                </div>
              </div>
            </div>

            {/* AI Qidirish tugmasi */}
            <button 
              className="btn-generate-ai" 
              onClick={handleGenerateAiRecipes}
              disabled={isGeneratingAi}
            >
              <span>✨</span>
              <span>{isGeneratingAi ? "AI retseptlarni hisoblamoqda..." : "AI Bilan Taom Taklif Qilish"}</span>
            </button>
          </div>

          {/* AI Fikrlash holati */}
          {isGeneratingAi && (
            <div className="ai-thinking-box">
              <div className="ai-pulse-brain">🧠✨</div>
              <h3 style={{ fontSize: "20px", fontWeight: "800", marginTop: "12px" }}>
                AI Oshpaz masalliqlaringizni 52 ta taom bilan solishtirmoqda...
              </h3>
              <p style={{ color: "var(--text-muted)", fontSize: "14px", marginTop: "6px" }}>
                Oshpazlik qoidalari, kaloriyalar va pishirish vaqtlari hisoblanmoqda...
              </p>
            </div>
          )}

          {/* AI Natijalari */}
          {aiMatchedRecipes && !isGeneratingAi && (
            <div>
              {/* Maxsus AI Mualliflik Taomi */}
              {aiCustomDish && (
                <div style={{
                  background: "linear-gradient(135deg, rgba(16, 185, 129, 0.15), rgba(6, 78, 59, 0.3))",
                  border: "1px solid rgba(16, 185, 129, 0.4)",
                  borderRadius: "var(--radius-xl)",
                  padding: "26px",
                  marginBottom: "35px"
                }}>
                  <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", marginBottom: "12px" }}>
                    <span className="badge-tag" style={{ background: "var(--accent-green)", color: "#000" }}>
                      ⭐ AI Mualliflik Retsepti
                    </span>
                    <span style={{ fontSize: "13px", color: "#34d399", fontWeight: "700" }}>
                      ⏱️ {aiCustomDish.time} daqiqa • 🔥 {aiCustomDish.calories} kkal
                    </span>
                  </div>

                  <h3 style={{ fontSize: "22px", fontWeight: "900", marginBottom: "8px" }}>
                    {aiCustomDish.title}
                  </h3>
                  <p style={{ color: "#d1fae5", fontSize: "14px", marginBottom: "18px" }}>
                    {aiCustomDish.description}
                  </p>

                  <h4 style={{ fontSize: "15px", fontWeight: "800", marginBottom: "10px", color: "#6ee7b7" }}>
                    👨‍🍳 Qanday tayyorlanadi?
                  </h4>
                  <div style={{ display: "flex", flexDirection: "column", gap: "8px", marginBottom: "16px" }}>
                    {aiCustomDish.steps.map((st, i) => (
                      <div key={i} style={{ fontSize: "13px", color: "#e2e8f0", background: "rgba(0,0,0,0.2)", padding: "10px 14px", borderRadius: "8px" }}>
                        {st}
                      </div>
                    ))}
                  </div>

                  <div className="tip-box" style={{ background: "rgba(16,185,129,0.1)", borderColor: "#10b981", color: "#a7f3d0" }}>
                    <strong>💡 AI Maslahati:</strong> {aiCustomDish.tip}
                  </div>
                </div>
              )}

              {/* Bazadagi eng mos 52 ta taomdan saralanganlari */}
              <div className="ai-results-header">
                <h3>
                  <span>🎯</span> Ushbu masalliqlar bilan pishirish mumkin bo'lgan taomlar:
                </h3>
              </div>

              <div className="recipes-grid">
                {aiMatchedRecipes.map(recipe => (
                  <div key={recipe.id} className="recipe-card">
                    <div className="card-img-wrapper" onClick={() => handleOpenRecipeModal(recipe)}>
                      <img src={recipe.image} alt={recipe.title} className="card-img" />
                      
                      <div className="card-top-badges">
                        <span className={`match-score-badge ${recipe.matchScore >= 60 ? "match-high" : "match-mid"}`}>
                          ⚡ {recipe.matchScore}% mos keldi
                        </span>
                      </div>
                    </div>

                    <div className="card-body">
                      <h3 className="card-title">{recipe.title}</h3>
                      <p className="card-desc">{recipe.description}</p>

                      {recipe.missingIngredients && recipe.missingIngredients.length > 0 && (
                        <div className="missing-ing-notice">
                          <span>Yetishmayotgan: {recipe.missingIngredients.join(", ")}</span>
                          <button 
                            style={{ display: "block", color: "#38bdf8", fontSize: "11px", fontWeight: "700", marginTop: "4px" }}
                            onClick={() => handleOpenSubstituteModal(recipe.missingIngredients[0])}
                          >
                            AI: Ularning o'rniga nima ishlatish mumkin? →
                          </button>
                        </div>
                      )}

                      <div className="card-footer">
                        <div className="card-time">
                          <span>⏱️</span> {recipe.time} daqiqa
                        </div>
                        <button className="btn-view-recipe" onClick={() => handleOpenRecipeModal(recipe)}>
                          Retseptni ko'rish →
                        </button>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          )}
        </section>
      )}

      {/* =========================================================
          BATAFSIL RETSEPT MODALI
         ========================================================= */}
      {activeRecipe && (
        <div className="modal-overlay" onClick={handleCloseRecipeModal}>
          <div className="modal-content" onClick={(e) => e.stopPropagation()}>
            <button className="modal-close-btn" onClick={handleCloseRecipeModal}>✕</button>

            <div className="modal-header-banner">
              <img src={activeRecipe.image} alt={activeRecipe.title} />
              <div className="modal-banner-gradient"></div>
              <div className="modal-banner-info">
                <span className="badge-tag badge-cat">{activeRecipe.categoryLabel}</span>
                <h2 style={{ fontSize: "28px", fontWeight: "900", marginTop: "8px" }}>
                  {activeRecipe.title}
                </h2>
              </div>
            </div>

            <div className="modal-body">
              <div className="modal-quick-stats">
                <div className="quick-stat-item">
                  <span>Tayyorlash vaqti</span>
                  <strong>⏱️ {activeRecipe.time} daqiqa</strong>
                </div>
                <div className="quick-stat-item">
                  <span>Qiyinlik darajasi</span>
                  <strong>📊 {activeRecipe.difficulty}</strong>
                </div>
                <div className="quick-stat-item">
                  <span>Energetik quvvat</span>
                  <strong>🔥 {activeRecipe.calories} kkal</strong>
                </div>
                <div className="quick-stat-item">
                  <span>Baholash</span>
                  <strong>⭐ {activeRecipe.rating} / 5.0</strong>
                </div>
              </div>

              {/* AI Masalliq O'rnini Bosish Banneri */}
              <div className="modal-ai-helper-banner">
                <div className="modal-ai-helper-text">
                  <strong>🤖 Biror masalliq uyingizda yo'qmi?</strong>
                  <div>AI Oshpaz sizga darhol uy sharoitidagi eng yaxshi muqobillarini aytadi!</div>
                </div>
                <button 
                  className="btn-ask-ai-sub"
                  onClick={() => handleOpenSubstituteModal(activeRecipe.ingredients[0] ? activeRecipe.ingredients[0].name : "")}
                >
                  AI Maslahat Olish 💡
                </button>
              </div>

              {/* Porsiya hisoblagich (Dinamik useState) */}
              <div className="servings-controller">
                <div>
                  <strong>🍽️ Porsiya miqdori:</strong>
                  <div style={{ fontSize: "12px", color: "var(--text-muted)" }}>
                    Masalliqlar grammi porsiyaga qarab avtomatik ko'paytiriladi
                  </div>
                </div>
                <div className="servings-counter-group">
                  <button 
                    className="counter-btn" 
                    onClick={() => handleServingChange(-1)}
                    disabled={servingsCount <= 1}
                  >
                    -
                  </button>
                  <span className="servings-number">{servingsCount} kishi</span>
                  <button className="counter-btn" onClick={() => handleServingChange(1)}>
                    +
                  </button>
                </div>
              </div>

              {/* Oshxona Taymeri */}
              <div className="timer-widget">
                <div>
                  <div style={{ fontSize: "11px", color: "var(--text-dim)", textTransform: "uppercase" }}>
                    ⏱️ Oshxona Taymeri (Sekundomer)
                  </div>
                  <div className="timer-digits">{formatTimer(timerSeconds)}</div>
                </div>
                <div className="timer-controls">
                  <button 
                    className={`btn-timer ${isTimerActive ? "btn-timer-pause" : "btn-timer-start"}`}
                    onClick={toggleTimer}
                  >
                    {isTimerActive ? "Pauza ⏸️" : "Boshlash ▶️"}
                  </button>
                  <button className="btn-timer btn-timer-reset" onClick={resetTimer}>
                    Qayta o'rnatish 🔄
                  </button>
                </div>
              </div>

              {/* Masalliqlar */}
              <h4 className="section-heading">🛒 Kerakli Masalliqlar (Bosib belgilang):</h4>
              <div className="ingredients-list">
                {activeRecipe.ingredients.map((ing, idx) => {
                  const calculatedAmount = Math.round((ing.amount / (activeRecipe.servings || 4)) * servingsCount);
                  const isChecked = !!checkedIngredients[idx];
                  return (
                    <div 
                      key={idx} 
                      className={`ingredient-item ${isChecked ? "checked" : ""}`}
                      onClick={() => handleToggleIngredient(idx)}
                      title="Belgilash uchun bosing"
                    >
                      <div className="ing-name">
                        <span>{isChecked ? "✅" : "▫️"}</span>
                        <span>{ing.name}</span>
                      </div>
                      <div className="ing-amount">
                        {calculatedAmount > 0 ? calculatedAmount : ""} {ing.unit}
                      </div>
                    </div>
                  );
                })}
              </div>

              {/* Bosqichlar */}
              <h4 className="section-heading">👨‍🍳 Tayyorlash Bosqichlari:</h4>
              <div className="instructions-list">
                {activeRecipe.instructions.map((step, idx) => (
                  <div key={idx} className="instruction-step">
                    <div className="step-num">{idx + 1}</div>
                    <div className="step-text">{step}</div>
                  </div>
                ))}
              </div>

              {activeRecipe.tips && (
                <div className="tip-box">
                  <strong>💡 Oshpaz maslahati:</strong> {activeRecipe.tips}
                </div>
              )}

              <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", marginTop: "24px" }}>
                <button 
                  className={`fav-nav-btn ${favorites.includes(activeRecipe.id) ? "active" : ""}`}
                  onClick={() => toggleFavorite(activeRecipe.id)}
                  style={{ background: favorites.includes(activeRecipe.id) ? "var(--accent-red)" : "" }}
                >
                  {favorites.includes(activeRecipe.id) ? "❤️ Sevimlilarda saqlangan" : "🤍 Sevimlilarga qo'shish"}
                </button>
                <button className="btn-primary-compact" onClick={handleCloseRecipeModal}>
                  Yopish
                </button>
              </div>
            </div>
          </div>
        </div>
      )}

      {/* =========================================================
          AI MASALLIQ O'RNINI BOSISH MODALI (SUBSTITUTE MODAL)
         ========================================================= */}
      {isSubModalOpen && (
        <div className="modal-overlay" onClick={() => setIsSubModalOpen(false)}>
          <div className="modal-content" style={{ maxWidth: "650px" }} onClick={(e) => e.stopPropagation()}>
            <button className="modal-close-btn" onClick={() => setIsSubModalOpen(false)}>✕</button>

            <div className="modal-body">
              <div style={{ display: "flex", alignItems: "center", gap: "10px", marginBottom: "16px" }}>
                <span style={{ fontSize: "32px" }}>🤖</span>
                <div>
                  <h3 style={{ fontSize: "20px", fontWeight: "800" }}>
                    AI Maslahatchi: Masalliq Yetishmayaptimi?
                  </h3>
                  <span style={{ fontSize: "13px", color: "var(--accent-purple)" }}>
                    Uy sharoitida o'rnini bosuvchi eng to'g'ri yechimlar
                  </span>
                </div>
              </div>

              <div className="form-group">
                <label>Qaysi masalliq sizda yo'q? (yozing yoki tanlang):</label>
                <input 
                  type="text" 
                  className="form-control" 
                  placeholder="Masalan: Devzira guruch, Qaymoq, Dumba, Parmezan, Pomidor..."
                  value={subQuery}
                  onChange={handleSubQueryChange}
                />
              </div>

              <div className="quick-pills-cloud" style={{ marginBottom: "18px" }}>
                {["Guruch", "Qaymoq", "Dumba", "Pishloq", "Jusay", "Pomidor", "Tuxum", "Asal", "Maskarpone"].map(k => (
                  <button 
                    key={k} 
                    className="quick-ing-pill"
                    onClick={() => {
                      setSubQuery(k);
                      findSubstitute(k);
                    }}
                  >
                    #{k}
                  </button>
                ))}
              </div>

              {subResult && (
                <div className="ai-sub-answer-box">
                  <h4 style={{ fontSize: "16px", fontWeight: "800", color: "#c4b5fd", marginBottom: "12px" }}>
                    ✨ {subResult.name} uchun AI yechimlari:
                  </h4>

                  <div style={{ marginBottom: "14px" }}>
                    <div style={{ fontSize: "12px", color: "var(--text-dim)", textTransform: "uppercase", marginBottom: "6px" }}>
                      O'rniga nima ishlatish mumkin:
                    </div>
                    {subResult.alternatives.map((alt, i) => (
                      <div key={i} className="ai-sub-alt-item">
                        <span>🔹</span>
                        <span>{alt}</span>
                      </div>
                    ))}
                  </div>

                  <div className="tip-box" style={{ background: "rgba(139, 92, 246, 0.12)", borderColor: "#8b5cf6", color: "#ddd6fe" }}>
                    <strong>👨‍🍳 Oshpaz siri:</strong> {subResult.advice}
                  </div>
                </div>
              )}

              <div style={{ textAlign: "right", marginTop: "18px" }}>
                <button className="btn-primary-compact" onClick={() => setIsSubModalOpen(false)}>
                  Rahmat, Tushunarli! 👍
                </button>
              </div>
            </div>
          </div>
        </div>
      )}

      {/* =========================================================
          SEVIMLILAR YON PANELI (DRAWER)
         ========================================================= */}
      {isFavoritesDrawerOpen && (
        <div className="drawer-overlay" onClick={() => setIsFavoritesDrawerOpen(false)}>
          <div className="drawer-content" onClick={(e) => e.stopPropagation()}>
            <div className="drawer-header">
              <div>
                <h3 style={{ fontSize: "18px", fontWeight: "800" }}>❤️ Sevimli Retseptlar</h3>
                <span style={{ fontSize: "12px", color: "var(--text-muted)" }}>
                  Jami: {favoriteRecipesList.length} ta taom saqlangan
                </span>
              </div>
              <button className="search-clear-btn" onClick={() => setIsFavoritesDrawerOpen(false)}>✕</button>
            </div>

            <div className="drawer-list">
              {favoriteRecipesList.length > 0 ? (
                favoriteRecipesList.map(recipe => (
                  <div key={recipe.id} className="fav-item-card">
                    <img src={recipe.image} alt={recipe.title} className="fav-thumb" />
                    <div className="fav-info" onClick={() => { handleOpenRecipeModal(recipe); setIsFavoritesDrawerOpen(false); }}>
                      <h4 style={{ cursor: "pointer" }}>{recipe.title}</h4>
                      <div className="fav-meta">
                        ⏱️ {recipe.time} daqiqa • 🔥 {recipe.calories} kkal
                      </div>
                    </div>
                    <button className="fav-remove-btn" onClick={() => toggleFavorite(recipe.id)}>🗑️</button>
                  </div>
                ))
              ) : (
                <div style={{ textAlign: "center", padding: "40px 20px", color: "var(--text-muted)" }}>
                  <div style={{ fontSize: "40px", marginBottom: "12px" }}>💔</div>
                  <p>Hozircha hech qanday sevimli retsept qo'shilmagan.</p>
                </div>
              )}
            </div>

            {favoriteRecipesList.length > 0 && (
              <div style={{ padding: "16px", borderTop: "1px solid rgba(255,255,255,0.08)" }}>
                <button 
                  className="btn-primary-compact" 
                  style={{ width: "100%", justifyContent: "center" }}
                  onClick={() => {
                    setFavorites([]);
                    showToast("Barcha sevimlilar tozalandi");
                  }}
                >
                  Barchasini tozalash 🗑️
                </button>
              </div>
            )}
          </div>
        </div>
      )}

      {/* =========================================================
          YANGI RETSEPT QO'SHISH MODALI
         ========================================================= */}
      {isAddModalOpen && (
        <div className="modal-overlay" onClick={() => setIsAddModalOpen(false)}>
          <div className="modal-content" style={{ maxWidth: "600px" }} onClick={(e) => e.stopPropagation()}>
            <button className="modal-close-btn" onClick={() => setIsAddModalOpen(false)}>✕</button>
            
            <div className="modal-body">
              <h3 style={{ fontSize: "22px", fontWeight: "800", marginBottom: "12px" }}>
                🍳 Yangi Retsept Qo'shish
              </h3>

              <form onSubmit={handleAddRecipeSubmit}>
                <div className="form-group">
                  <label>Retsept Nomi *</label>
                  <input 
                    type="text" 
                    name="title" 
                    className="form-control" 
                    placeholder="Masalan: Jiz-biz yoki Qozon kabob" 
                    value={newRecipeForm.title} 
                    onChange={handleNewRecipeInputChange}
                    required
                  />
                </div>

                <div className="form-grid-2">
                  <div className="form-group">
                    <label>Kategoriya</label>
                    <select 
                      name="category" 
                      className="form-control" 
                      value={newRecipeForm.category} 
                      onChange={handleNewRecipeInputChange}
                    >
                      <option value="milliy">Milliy taom</option>
                      <option value="shorva">Sho'rva</option>
                      <option value="fastfood">Fast Food / Pasta</option>
                      <option value="salat">Salat</option>
                      <option value="shirinlik">Shirinlik</option>
                    </select>
                  </div>

                  <div className="form-group">
                    <label>Qiyinlik darajasi</label>
                    <select 
                      name="difficulty" 
                      className="form-control" 
                      value={newRecipeForm.difficulty} 
                      onChange={handleNewRecipeInputChange}
                    >
                      <option value="Oson">Oson</option>
                      <option value="O'rtacha">O'rtacha</option>
                      <option value="Qiyin">Qiyin</option>
                    </select>
                  </div>
                </div>

                <div className="form-grid-2">
                  <div className="form-group">
                    <label>Tayyorlash vaqti (daqiqa)</label>
                    <input 
                      type="number" 
                      name="time" 
                      className="form-control" 
                      placeholder="40" 
                      value={newRecipeForm.time} 
                      onChange={handleNewRecipeInputChange}
                    />
                  </div>

                  <div className="form-group">
                    <label>Kaloriyasi (kkal)</label>
                    <input 
                      type="number" 
                      name="calories" 
                      className="form-control" 
                      placeholder="450" 
                      value={newRecipeForm.calories} 
                      onChange={handleNewRecipeInputChange}
                    />
                  </div>
                </div>

                <div className="form-group">
                  <label>Masalliqlar (har birini yangi qatordan yozing)</label>
                  <textarea 
                    name="ingredientsText" 
                    className="form-control" 
                    rows="3" 
                    placeholder="Go'sht (400g)&#10;Piyoz (2 dona)"
                    value={newRecipeForm.ingredientsText}
                    onChange={handleNewRecipeInputChange}
                  />
                </div>

                <div className="form-group">
                  <label>Tayyorlash qadamlari</label>
                  <textarea 
                    name="instructionsText" 
                    className="form-control" 
                    rows="3" 
                    placeholder="1. Go'shtni qovuring&#10;2. Piyozni qo'shing"
                    value={newRecipeForm.instructionsText}
                    onChange={handleNewRecipeInputChange}
                  />
                </div>

                <div style={{ display: "flex", gap: "10px", justifyContent: "flex-end", marginTop: "20px" }}>
                  <button type="button" className="btn-timer btn-timer-reset" onClick={() => setIsAddModalOpen(false)}>
                    Bekor qilish
                  </button>
                  <button type="submit" className="btn-primary-compact">
                    Retseptni saqlash 💾
                  </button>
                </div>
              </form>
            </div>
          </div>
        </div>
      )}

      {/* =========================================================
          TALABA TOPSHIRIG'I HISOBOTI MODALI
         ========================================================= */}
      {isStudentModalOpen && (
        <div className="modal-overlay" onClick={() => setIsStudentModalOpen(false)}>
          <div className="modal-content" style={{ maxWidth: "750px" }} onClick={(e) => e.stopPropagation()}>
            <button className="modal-close-btn" onClick={() => setIsStudentModalOpen(false)}>✕</button>

            <div className="modal-body">
              <div style={{ display: "flex", alignItems: "center", gap: "12px", marginBottom: "16px" }}>
                <span style={{ fontSize: "36px" }}>🎓</span>
                <div>
                  <h3 style={{ fontSize: "20px", fontWeight: "800" }}>11-talaba Topshirig'i Bo'yicha Ma'lumot</h3>
                  <span style={{ fontSize: "13px", color: "var(--primary)" }}>Mavzu: React — State va Events</span>
                </div>
              </div>

              <div className="code-explain-card">
                <span className="code-badge-tag">TALAB 1: useState</span>
                <h4 style={{ fontSize: "15px", fontWeight: "700" }}>Sevimli retseptlar ro'yxati (Favorites State):</h4>
                <div className="code-snippet">
                  const [favorites, setFavorites] = useState([1, 3, 26, 46]);
                </div>
                <p style={{ fontSize: "13px", color: "var(--text-muted)" }}>
                  52 ta taomdan istalgan birini yurakcha bosish orqali sevimlilar ro'yxatiga qo'shish yoki o'chirish mumkin. Badge real vaqtda yangilanadi.
                </p>
              </div>

              <div className="code-explain-card">
                <span className="code-badge-tag">TALAB 2: onChange</span>
                <h4 style={{ fontSize: "15px", fontWeight: "700" }}>Qidiruv input holati (Search State):</h4>
                <div className="code-snippet">
                  const [searchQuery, setSearchQuery] = useState("");&#10;
                  &lt;input value={searchQuery} onChange={(e) => setSearchQuery(e.target.value)} /&gt;
                </div>
                <p style={{ fontSize: "13px", color: "var(--text-muted)" }}>
                  Qidiruv maydoniga kiritilgan har bir harf 52 ta taom ichidan nom va ta'rif bo'yicha darhol filtrlab ko'rsatadi.
                </p>
              </div>

              <div className="code-explain-card">
                <span className="code-badge-tag">TALAB 3: AI IMKONIYATLARI</span>
                <h4 style={{ fontSize: "15px", fontWeight: "700" }}>AI Oshpaz & Masalliqlar Tahlili:</h4>
                <p style={{ fontSize: "13px", color: "var(--text-muted)" }}>
                  1) <strong>Masalliq yetishmaganda o'rnini bosuvchi AI maslahatchi:</strong> uyda yo'q masalliqlar (guruch, dumba, qaymoq, pishloq...) o'rniga nima ishlatishni aytadi.<br/>
                  2) <strong>Menda bor masalliqlar (Sehrli Oshxona):</strong> surat yuklash yoki ro'yxat yozish orqali mos taomlarni tavsiya qiladi.
                </p>
              </div>

              <div style={{ textAlign: "right", marginTop: "20px" }}>
                <button className="btn-primary-compact" onClick={() => setIsStudentModalOpen(false)}>
                  Tushunarli, Rahmat! 👍
                </button>
              </div>
            </div>
          </div>
        </div>
      )}

      {/* Toast */}
      {toastMessage && (
        <div className="toast-notice">
          <span>🔔</span>
          <span>{toastMessage}</span>
        </div>
      )}

      {/* Footer */}
      <footer className="site-footer">
        <div className="container">
          <p style={{ fontWeight: "800", color: "var(--text-main)", marginBottom: "4px" }}>
            Lazzat — 52 ta Retsept & AI Oshpaz Portali
          </p>
          <p>
            React — State va Events mavzusi bo'yicha tayyorlangan to'liq interaktiv amaliy dastur.
          </p>
        </div>
      </footer>

    </div>
  );
}

// React 18 Root Render
const rootElement = document.getElementById("root");
if (rootElement) {
  const root = ReactDOM.createRoot(rootElement);
  root.render(<App />);
}
