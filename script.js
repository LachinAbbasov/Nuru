const compliments = [
    "Nurtəkin, sən dünyanın ən gözəl insanısan!",
    "Nurtəkin, gülüşün günümü işıqlandırır.",
    "Həyatıma rəng qatan yalnız sənsən, Nurtəkin!",
    "Sənə olan sevgim sonsuzdur, Nurtəkin.",
    "Hər anımda sənin sevginlə doluyam, Nurtəkin.",
    "Nurtəkin, sən ruhumun əbədi əksisən.",
    "Sənin gözlərin kainat qədər dərin və gözəldir, Nurtəkin.",
    "Nurtəkin, sevgin mənim üçün həyatın mənasıdır.",
    "Hər şeydən çox sənə heyranam, Nurtəkin.",
    "Səninlə olmaq həyatımın ən böyük şansıdır, Nurtəkin.",
    "Sənin varlığınla həyat daha gözəl və mənalıdır, Nurtəkin.",
    "Sən mənim günəşim, ayım və ulduzumsan, Nurtəkin.",
    "Nurtəkin, səninlə hər an mənim üçün əvəzolunmazdır.",
    "Sən məni tamamlayan parçasan, Nurtəkin.",
    "Hər düşüncəmdə sən varsan, Nurtəkin.",
    "Sənin məhəbbətin ruhuma sükunət verir, Nurtəkin.",
    "Sənin əllərin mənim əllərimdə dünyanın ən möhkəm sığınacağıdır, Nurtəkin.",
    "Nurtəkin, gözəlliyin məni hər gün heyrətləndirir.",
    "Sənin səsin ürəyimin musiqisidir, Nurtəkin.",
    "Sənin qoxun ən gözəl xatirələrimdə yaşayar, Nurtəkin.",
    "Səni sevmək həyatımın ən böyük hədiyyəsidir, Nurtəkin.",
    "Sənin gözlərində dünyanı görürəm, Nurtəkin.",
    "Sənin hər sözün mənə ilham verir, Nurtəkin.",
    "Nurtəkin, sən mənim üçün hər şeysən.",
    "Səninlə danışmaq ruhuma əbədi rahatlıq gətirir, Nurtəkin.",
    "Hər səhər gözlərimi açanda sənin üçün minnətdaram, Nurtəkin.",
    "Sən həyatımı mənalı edən yeganə insansan, Nurtəkin.",
    "Nurtəkin, sən mənim əbədiyyətimsən.",
    "Sənin gülüşün dünyamı rəngləyir, Nurtəkin.",
    "Sevgimiz hər gün daha da böyüyür, Nurtəkin.",
    "Səninlə hər şey mümkündür, Nurtəkin.",
    "Həyatımı səninlə bölüşmək ən böyük şansdır, Nurtəkin.",
    "Səninlə keçirdiyim hər an qiymətlidir, Nurtəkin.",
    "Sənlə yaşamaq, sənlə gülmək ən gözəl hissdir, Nurtəkin.",
    "Nurtəkin, mənim dünyam sənə görə parlayır.",
    "Sənə hər baxışımda sevgim daha da böyüyür, Nurtəkin.",
    "Sən mənim həyatımın ən gözəl nağılını yazırsan, Nurtəkin.",
    "Nurtəkin, səninlə hər şey daha asan və gözəldir.",
    "Sənin məhəbbətin mənim ən böyük xəzinəmdir, Nurtəkin.",
    "Nurtəkin, səninlə hər gün yeni bir macəra yaşamaq istəyirəm.",
    "Səninlə həyat çox daha maraqlıdır, Nurtəkin.",
    "Sən mənim ən yaxşı dostum və sevgilim, hər şeyimsən, Nurtəkin.",
    "Nurtəkin, sən mənim üçün ən gözəl möcüzəsən.",
    "Hər zaman yanında olmaq istəyirəm, Nurtəkin.",
    "Səninlə hər yerdə olmaq istəyirəm, Nurtəkin.",
    "Nurtəkin, gözlərin mənim dünyamın ən parlaq ulduzudur.",
    "Səninlə yaşamaq hər anı daha dəyərli edir, Nurtəkin.",
    "Nurtəkin, həyatımda olduğun üçün şanslıyam.",
    "Səninlə olmaq, həqiqətən, ən gözəl təcrübədir, Nurtəkin.",
    "Nurtəkin, sən hər zaman məni heyrətləndirirsən.",
    "Səninlə hər şey daha mənalıdır, Nurtəkin.",
    "Sən mənim ən qiymətli xəzinəmsən, Nurtəkin.",
    "Səninlə hər şey mümkün olur, Nurtəkin.",
    "Nurtəkin, sən mənim ən güclü dəstəyimsən.",
    "Səninlə zaman dayana bilər, çünki hər saniyə qiymətlidir, Nurtəkin.",
    "Səninlə keçirdiyim hər anın dəyəri sonsuzdur, Nurtəkin.",
    "Sən mənim ən gözəl xəyallarımsan, Nurtəkin.",
    "Nurtəkin, sənə hər zaman ehtiyacım var.",
    "Sən mənim dünyanın ən gözəl insanısan, Nurtəkin.",
    "Hər gün sənə daha çox aşiq oluram, Nurtəkin.",
    "Sənin varlığınla hər şey daha parlaq olur, Nurtəkin.",
    "Səninlə yaşamaq ən gözəl hədiyyədir, Nurtəkin.",
    "Sənin əllərin ən çox ehtiyac duyduğum yerdir, Nurtəkin.",
    "Sən mənim ən gözəl həyat yolumsan, Nurtəkin.",
    "Səninlə hər şey mümkündür, Nurtəkin.",
    "Sən mənim həyatımdakı ən gözəl nağılını yazan insansan, Nurtəkin.",
    "Sənin yanında olmaq hər zaman bir möcüzə kimidir, Nurtəkin.",
    "Nurtəkin, sən mənim həyatımın ən dəyərli parçasısan.",
    "Səninlə həyat çox daha gözəl və dəyərli olur, Nurtəkin.",
    "Nurtəkin, sən mənim dünyama sevgi və rəng qatırsan.",
    "Sən mənim ən dəyərli xəzinəmsən, Nurtəkin.",
    "Sənə olan sevgim hər şeydən daha böyükdür, Nurtəkin.",
    "Nurtəkin, mənim həyatım sənə görə parlayır.",
    "Səninlə olmaq mənim ən böyük arzularımdan biridir, Nurtəkin.",
    "Sənin gülüşün mənim hər səhərimi işıqlandırır, Nurtəkin.",
    "Səninlə yaşamaq ən böyük sevincimdir, Nurtəkin.",
    "Sən mənim üçün həmişə ən önəmli insansan, Nurtəkin.",
    "Nurtəkin, sən mənim həyatımın ən gözəl möcüzəsisən.",
    "Sən mənim həyatımda ən gözəl hekayəni yazırsan, Nurtəkin.",
    "Səninlə hər şey daha asan olur, Nurtəkin.",
    "Sən mənim həyatımın ən gözəl mübarizəsisən, Nurtəkin.",
    "Sənə olan sevgim zamanla daha da böyüyür, Nurtəkin.",
    "Nurtəkin, sən mənim ən böyük ehtiyacım və arzumsan.",
    "Sənin yanında hər şey mükəmməldir, Nurtəkin.",
    "Səninlə hər şey daha gözəl və unikal olur, Nurtəkin.",
    "Sən mənim dünyamı daha işıqlı edirsən, Nurtəkin.",
    "Sənin gülüşün həyatımı doldurur, Nurtəkin.",
    "Səninlə hər şey çox daha məna kəsb edir, Nurtəkin.",
    "Sən mənim həyatımın ən dəyərli anısısan, Nurtəkin.",
    "Səninlə bir an belə keçirmək çox qiymətlidir, Nurtəkin.",
    "Səninlə yaşamaq hər zaman daha gözəl olur, Nurtəkin.",
    "Sən mənim ən gözəl xəyalımsan, Nurtəkin.",
    "Nurtəkin, sən mənim hər şeyimsən.",
    "Səninlə yaşamaq həyatımın ən böyük hədiyyəsidir, Nurtəkin.",
    "Sənin yanında olmaq hər zaman sükunət verir, Nurtəkin.",
    "Səninlə həyat daha yaxşıdır, Nurtəkin.",
    "Nurtəkin, sən mənim həmişəki sevgim olacaqsan."
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
