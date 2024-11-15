const compliments = [
    "Nurtəkin, sən ruhumun ən incə melodiyasısan, həyatımın harmoniyası.",
    "Sənin varlığın, mənim əzəmətli səhramda tapılmış bir su qaynağı kimidir.",
    "Sənin gülüşün, həyatın mənasız olduğu anlarda belə mənə ümid verir, Nurtəkin.",
    "Nurtəkin, sən zamanın ömrümdə yaratdığı ən qiymətli sətirsən.",
    "Sənə olan sevgim, sonsuz bir okeanın dərinliklərində üzən bir gəmidir, sükutla irəliləyən.",
    "Nurtəkin, mənim dünyamda işıqla dolu olan tək məna sensən.",
    "Sənin gözlərin, qalaktikaların təsadüfi bir dövrü deyil, bu aləmin ən əsas hüzurudur.",
    "Sənin sevgin mənim həyatıma əsaslı bir məna qatır, hər anı sənlə daha qiymətli edir.",
    "Hər tərəfdən dörd bir tərəfdən sənə heyranlıq duyuram, Nurtəkin, çünki sən həqiqətən bütün varlıqları əhatə edən bir qüvvəsən.",
    "Səninlə olmaq, dünyanın ən sirli və möhtəşəm xəzinəsini kəşf etmək kimidir.",
    "Nurtəkin, sən mənim dünyamın gizli mavi ulduzusan, heç vaxt əbədi yuxusuz qalmazsan.",
    "Hər sözün, ruhumda çiçəklənən bir bağ kimidir, hər anında sevdanın ən incə çalarları hiss olunur.",
    "Sənin varlığın, məni həqiqi mənada özünü tapmağa çağıran ən gözəl təklifdir.",
    "Sən mənim həyatımda yaranmış ən böyük incəsənət əsərisən, rənglərə formalar qatan.",
    "Nurtəkin, hər anın mənim üçün dəyərli olması, sənin içindəki əbədiyyətin əlamətidir.",
    "Sən, içimdəki boşluqları dolduran tək mənalı və ruhumun arzususan.",
    "Nurtəkin, mənim qəlbim, sənə həsr edilmiş bir şeir kimidir, hər sətirində sevginin əsintisi var.",
    "Sənin əllərin, zamanın özünü sığortalayan sığınacaqdır, sonsuz bir təbəssüm yeri.",
    "Sənin hər bir varlığın, məni zamanın kəsilməz axışında əbədiliklə həyata bağlayır.",
    "Səninlə hər an keçirmək, bir ömrün bütün qeyri-mümkün anlarını mümkünsüzləşdirən bir təcrübədir.",
    "Sən mənim düşüncələrimdəki sonsuz ulduz, ürəyimdəki yalnız gerçək arzusan, Nurtəkin.",
    "Hər gün, sənə olan sevgim hər an daha da böyüyür, bir göy üzünün hər təkrarı kimi.",
    "Sənin gülüşün, mənim qəlbimi bir musiqinin ən təmiz notası kimi oxuyur, sanki heç vaxt dayanmayacaq bir simfoniya.",
    "Səninlə olmaq, həyatın sükunətini tapmaq kimi, bir anlıq dayanan zamanın sonsuzluğuna bənzəyir.",
    "Səninlə həyat, ən gözəl rəssamın əsəri kimi, təfərrüatları ilə doludur, hər bir xətti və rəngi məni mənəvi olaraq daha da yaxınlaşdırır.",
    "Nurtəkin, sən mənim həyatımın ən gözəl ilham pərisisan, hər düşüncəm sənə görə forma alır.",
    "Səninlə hər an, yeni bir yuxu kimi yaşanır, sanki ruhumun ən böyük arzusuna toxunmuşam.",
    "Sənin yanında olmaq, kainatın ən gözəl nöqtəsinə səfər etmək kimidir – sonsuz bir səhrada ən soyuq səhər günəşinin doğuşu.",
    "Nurtəkin, sən həyatımın əbədi təkrarı və mənim arzusuz yoxluğumdan çıxış yolumsan.",
    "Sənin gözlərin, mənim qəlbimi oxuyan və içindəki sirlərimi üzə çıxaran tək əbədilikdəki əsərdir.",
    "Sən mənim dünyamın ən dəyərli əsərisin, hər bir rəng, hər bir səs sənə həsr olunub.",
    "Səninlə olmaq, hər anı daha gözəl və möhtəşəm etmək kimidir, çünki sənin varlığın bir güc kimidir, həyatımı canlandırır.",
    "Sənin varlığın, içimdəki boşluğu dolduran və hər anımı əbədiliklə zənginləşdirən bir işıq kimidir.",
    "Nurtəkin, sən mənim həyatımın yalnız bir çiçəyi deyil, sonsuz bir bağın ən qiymətli çiçəyisən.",
    "Həyatımı səninlə bölüşmək, zamanın bədii bir möcüzəsinə çevrilməsidir.",
    "Səninlə keçirdiyim hər an, həyatımın ən dəyərli anıdır, zamanın gerçək mənası kimi.",
    "Nurtəkin, sən mənim həyatımdakı ən böyük gözəlliyin mənası və bütün arzularımın gerçəyi olmaqdan bir addım daha yaxınsan."
];

  
 

function showCompliment() {
    const message = document.getElementById("message");
    const randomIndex = Math.floor(Math.random() * compliments.length);
    message.textContent = compliments[randomIndex];

    // Animasyonu sıfırlayıp tekrar başlatmak için
    message.classList.remove('fadeInFromLeft');
    void message.offsetWidth;  // Bu satır, animasyonu tetiklemek için kullanılır
    message.classList.add('fadeInFromLeft');

    createHeartExplosion();
}

function createHeartExplosion() {
    const heartsContainer = document.getElementById("hearts-container");
    for (let i = 0; i < 10; i++) {
        const heart = document.createElement("div");
        heart.classList.add("heart");

        const size = Math.random() * 20 + 10;
        heart.style.width = `${size}px`;
        heart.style.height = `${size}px`;
        heart.style.left = `${Math.random() * 100}vw`;
        heart.style.top = `${Math.random() * 100}vh`;

        heart.style.backgroundColor = `hsl(${Math.random() * 360}, 70%, 80%)`;
        heart.style.animationDelay = `${Math.random() * 0.5}s`;

        heartsContainer.appendChild(heart);

        // Animasiya bitdikdən sonra ürəyi silir
        heart.addEventListener("animationend", () => {
            heart.remove();
        });
    }
}


// Elektron saat
function updateClock() {
    const now = new Date();
    const hours = String(now.getHours()).padStart(2, '0');
    const minutes = String(now.getMinutes()).padStart(2, '0');
    const seconds = String(now.getSeconds()).padStart(2, '0');
    const clock = document.getElementById('clock');
    clock.textContent = `${hours}:${minutes}:${seconds}`;
}



// Hazırki ayın tarixi
function updateDate() {
    const now = new Date();
    const months = [
        'Yanvar', 'Fevral', 'Mart', 'Aprel', 'May', 'İyun', 'İyul', 'Avqust', 'Sentyabr', 'Oktyabr', 'Noyabr', 'Dekabr'
    ];
    const currentDate = document.getElementById('current-date');
    currentDate.textContent = `Tarix: ${now.getDate()} ${months[now.getMonth()]} ${now.getFullYear()}`;
}

// Yeniləmələri hər 1000 millisekundda bir edirik
setInterval(updateClock, 1000);

setInterval(updateDate, 1000);




function updateSaat() {
    let hour = document.getElementById('hour');
    let minute = document.getElementById('minute');
    let second = document.getElementById('second');

    let now = new Date();
    let h = now.getHours() % 12;
    let m = now.getMinutes();
    let s = now.getSeconds();

    let hourDeg = (h * 30) + (m / 60) * 30; // Hər saat 30 dərəcə
    let minuteDeg = m * 6; // Hər dəqiqə 6 dərəcə
    let secondDeg = s * 6; // Hər saniyə 6 dərəcə

    hour.style.transform = `rotate(${hourDeg}deg)`;
    minute.style.transform = `rotate(${minuteDeg}deg)`;
    second.style.transform = `rotate(${secondDeg}deg)`;
}

setInterval(updateSaat, 1000);
updateSaat(); // İlk dəfə çağırılır
