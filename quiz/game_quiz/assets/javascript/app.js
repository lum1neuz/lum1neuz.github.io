/* First step here is to create the ready master function that loads once DOM is ready */
$(document).ready(function () {
    //Global Variables Here
    //~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~

    //Object that holds questions, answers, and correct answer:

    var allQuestions = [
        {
          "№": 1,
          "question": "Тогтмол өгөөжтэй үнэт цаас авахдаа юуг харгалзаж үзэх хэрэгтэй вэ?",
          "correctAnswer": "Үнэт цаасны үнийн хэлбэлзэл",
          "answers": {
            "a": "Хугацааны эцэс дэх өгөөжийн хувь",
            "b": "Дампуурлын буюу мөнгөө алдах эрсдэл",
            "c": " Үнэт цаасны хөрвөх чадвар",
            "d": "Үнэт цаасны үнийн хэлбэлзэл"
          }
        },
        {
          "№": 2,
          "question": "Хөрөнгийн зах зээлд ямар эдийн засгийн үзүүлэлт нөлөөлөхгүй вэ?",
          "correctAnswer": "Валютын ханш",
          "answers": {
            "a": " ДНБ өсөлт",
            "b": " Мөнгөний болон төсвийн бодлого",
            "c": "Инфляцын түвшин",
            "d": "Валютын ханш"
          }
        },
        {
          "№": 1,
          "question": "Хувьцааны суурь шинжилгээнд аль нь орохгүй вэ?",
          "correctAnswer": "Хөрвөх чадварын судалгаа",
          "answers": {
            "a": "Эдийн засгийн судалгаа",
            "b": " Салбарын судалгаа",
            "c": " Компанийн судалгаа",
            "d": "Хөрвөх чадварын судалгаа"
          }
        },
        {
          "№": 1,
          "question": " Дауны онол буюу Dow’s theory-ийг хэн зохиосон бэ?",
          "correctAnswer": "Charles H. Dow",
          "answers": {
            "a": " James B. Dow",
            "b": " Samuel L. Dow",
            "c": " William H. Dow",
            "d": "Charles H. Dow"
          }
        },
        {
          "№": 1,
          "question": "Дауны онолд хэдэн үндсэн зарчимтай вэ?",
          "correctAnswer": "6",
          "answers": {
            "a": "5",
            "b": "8",
            "c": "9",
            "d": "6"
          }
        },
        {
          "№": 1,
          "question": "Дауны онолын гол хөдөлгөөнд аль нь орохгүй вэ?",
          "correctAnswer": "Том хөдөлгөөн (major movement)",
          "answers": {
            "a": "Анхдагч хөдөлгөөн (primary movement)",
            "b": "Хоёрдогч хөдөлгөөн (secondary movement)",
            "c": "Жижиг хөдөлгөөн (minor movement)",
            "d": "Том хөдөлгөөн (major movement)"
          }
        },
        {
          "№": 1,
          "question": "Алтернатив хөрөнгө оруулалтад аль нь ордоггүй вэ?",
          "correctAnswer": "Бонд",
          "answers": {
            "a": " Venture capital",
            "b": " Үл хөдлөх хөрөнгө",
            "c": " Таваар, түүхий эдийн зах зээл",
            "d": "Бонд"
          }
        },
        {
          "№": 1,
          "question": "Монголын хөрөнгийн бирж хэдэн онд байгуулагдсан бэ?",
          "correctAnswer": "1991",
          "answers": {
            "a": "1990",
            "b": "1995",
            "c": "1992",
            "d": "1991"
          }
        },
        {
          "№": 1,
          "question": "Дэлхийд хамгийн анхны хөрөнгө оруулалтын сан хэдэн онд байгуулагдаж байсан бэ?",
          "correctAnswer": "1774",
          "answers": {
            "a": "1882",
            "b": "1634",
            "c": "1923",
            "d": "1774"
          }
        },
        {
          "№": 1,
          "question": "Монголд хамгийн анхны хамтын хаалттай хөрөнгө оруулалтын сан хэдэн онд байгуулагдаж байсан бэ?",
          "correctAnswer": "2020",
          "answers": {
            "a": "2017",
            "b": "2021",
            "c": "2016",
            "d": "2020"
          }
        },
        {
          "№": 1,
          "question": "Дэлхийд хамгийн анхны хөрөнгө оруулалтын сан аль улсад байгуулагдаж байсан бэ?",
          "correctAnswer": "Нидерланд",
          "answers": {
            "a": "Америк",
            "b": "Англи",
            "c": "Франц",
            "d": "Нидерланд"
          }
        },
        {
          "№": 1,
          "question": "Системийн нөлөө бүхий 5 банканд аль нь орох вэ?",
          "correctAnswer": "Худалдаа хөгжлийн банк",
          "answers": {
            "a": "Ариг",
            "b": "Улаанбаатар",
            "c": "Богд",
            "d": "Худалдаа хөгжлийн банк"
          }
        },
        {
          "№": 1,
          "question": "IPO нь ямар 3 үгний товчлол вэ?",
          "correctAnswer": "Initial public offering",
          "answers": {
            "a": "Initial public order",
            "b": "Inclusive public offer",
            "c": "Inclusive public order",
            "d": "Initial public offering"
          }
        },
        {
          "№": 1,
          "question": " Хөрөнгийн зах зээл дээрх хувьцааны ханшийн өсөлтийг юуны зах зээл гэдэг вэ?",
          "correctAnswer": "Бухын",
          "answers": {
            "a": " Бугын",
            "b": "Баавгайн",
            "c": "Могойн",
            "d": "Бухын"
          }
        },
        {
          "№": 1,
          "question": "Nasdaq бирж хаана байдаг вэ?",
          "correctAnswer": "Нью-Йорк",
          "answers": {
            "a": "Москва",
            "b": " Лондон",
            "c": "Токио",
            "d": "Нью-Йорк"
          }
        },
        {
          "№": 1,
          "question": "Монголын анхны Хамтын хөрөнгө оруулалтын сан (ХХОС)-ийн нэр?",
          "correctAnswer": "“Үндэсний хувьчлалын сан” ХХОС",
          "answers": {
            "a": "Мандал Ирээдүйн Өсөлт' ХХОС",
            "b": "“Ардын хөрөнгө оруулалтын сан” ХХОС",
            "c": "“Үндэсний хувьчлалын сан” ХХОС",
            "d": ""
          }
        },
        {
          "№": 1,
          "question": "Этэриумын анхны Hard fork нь ямар нэртэй вэ?",
          "correctAnswer": "Homestead",
          "answers": {
            "a": "Byzantium",
            "b": "London",
            "c": "Bill Gates",
            "d": "Homestead"
          }
        },
        {
          "№": 1,
          "question": "Биткойныг үүсгэн байгуулсан хүнийг хэн гэж үздэг бэ?",
          "correctAnswer": "Сатоши Накамото",
          "answers": {
            "a": "Франк Вилтнер",
            "b": "Билл Гэйтс",
            "c": "Виталик Бутерин",
            "d": "Сатоши Накамото"
          }
        },
        {
          "№": 1,
          "question": "Bitcoin.org домайн анх хэдэн онд бүртгэгдсэн бэ?",
          "correctAnswer": "2008",
          "answers": {
            "a": "2009",
            "b": "2010",
            "c": "2013",
            "d": "2008"
          }
        },
        {
          "№": 1,
          "question": "USDT буюу Tether нь ямар төрлийн крипто хөрөнгөд ордог бэ?",
          "correctAnswer": "Stablecoin",
          "answers": {
            "a": "USDCoin",
            "b": "Blockchain Coin",
            "c": "Bill Gates Coin",
            "d": "Stablecoin"
          }
        },
        {
          "№": 1,
          "question": "Ардкойн анх зах зээлд хэдэн төгрөгөөр гарч байсан бэ?",
          "correctAnswer": "Үнэгүй",
          "answers": {
            "a": "1 төгрөг",
            "b": "10 төгрөг",
            "c": "5 төгрөг",
            "d": "Үнэгүй"
          }
        },
        {
          "№": 1,
          "question": "Ардкойн зах зээлд хэдэн ширхэг гарсан бэ?",
          "correctAnswer": "5.1 тэрбум",
          "answers": {
            "a": "100 тэрбум",
            "b": "10 тэрбум",
            "c": "15 тэрбум",
            "d": "5.1 тэрбум"
          }
        },
        {
          "№": 1,
          "question": "Их хэмжээний Койн эзэмшдэг хүнийг юу гэж нэрлэдэг вэ?",
          "correctAnswer": "Whale",
          "answers": {
            "a": "Shark",
            "b": "Squid",
            "c": "Tail",
            "d": "Whale"
          }
        },
        {
          "№": 1,
          "question": "Хамгийн анхны криптовалют?",
          "correctAnswer": "Bitcoin",
          "answers": {
            "a": "Luna",
            "b": "Dogecoin",
            "c": "Ether",
            "d": "Bitcoin"
          }
        },
        {
          "№": 1,
          "question": "Эдгээр орнуудын аль нь Bitcoin -ийн хамгийн том олборлогчдын нэг вэ?",
          "correctAnswer": "Хятад",
          "answers": {
            "a": "Франц",
            "b": "Балба",
            "c": "Алжир",
            "d": "Хятад"
          }
        },
        {
          "№": 1,
          "question": "Биткойны 0.00000001-тэй тэнцэх хамгийн бага нэгжийн нэр?",
          "correctAnswer": "Satoshi",
          "answers": {
            "a": "Minibit",
            "b": "Smalbit",
            "c": "Ethereum",
            "d": "Satoshi"
          }
        },
        {
          "№": 1,
          "question": "Биткойноос бусад койнуудыг ерөнхийлөн нэрлэдэг нэр?",
          "correctAnswer": "Altcoin",
          "answers": {
            "a": "Acoin",
            "b": "Money",
            "c": "Othercoin",
            "d": "Altcoin"
          }
        },
        {
          "№": 1,
          "question": "Санхүүгийн бүтээгдэхүүнийг төвлөрсөн бус блокчэйн сүлжээнд ашиглах боломжтой системийг нэрлэдэг?",
          "correctAnswer": "DeFi",
          "answers": {
            "a": "FinChain",
            "b": "Bona FiDe",
            "c": "DCFP (decentralized Financial Products)",
            "d": "DeFi"
          }
        },
        {
          "№": 1,
          "question": "2018 онд аль байгууллага блокчэйнд суурилсан Бонд-I нэртэй бонд гаргасан бэ?",
          "correctAnswer": "Дэлхийн Банк",
          "answers": {
            "a": "Олон Улсын Валютын Сан",
            "b": "Европын Холбоо",
            "c": "Дэлхийн худалдааны байгууллага",
            "d": "Дэлхийн Банк"
          }
        },
        {
          "№": 1,
          "question": "Хэрэв 1 BTC нь 100 сая Сатоши -тай тэнцүү бол 1 ETH нь 1 тэрбум _____ -тай тэнцүү вэ?",
          "correctAnswer": "Gwei",
          "answers": {
            "a": "Matic",
            "b": "Ethbits",
            "c": "Sols",
            "d": "Gwei"
          }
        },
        {
          "№": 1,
          "question": "Хөл бөмбөгийн ямар тоглогч цалингаа хэсэгчлэн токеноор авдаг вэ?",
          "correctAnswer": "Lionel Messi",
          "answers": {
            "a": "Jack Grealish",
            "b": "Danny Ings",
            "c": "Jadon Sancho",
            "d": "Lionel Messi"
          }
        },
        {
          "№": 1,
          "question": "Хэрэглэгчид виртуал ертөнцөд газар авах, барих, зарах боломж олгодог Этэриумын блокчэйн дээр суурилсан төвлөрсөн бус 3D виртуал платформын нэр?",
          "correctAnswer": "Decentraland",
          "answers": {
            "a": "Minecraft",
            "b": "Runescape",
            "c": "Sims",
            "d": "Decentraland"
          }
        },
        {
          "№": 1,
          "question": "АрдКойны төрөлх бирж аль вэ?",
          "correctAnswer": "idax",
          "answers": {
            "a": "Trade",
            "b": "Coinhub",
            "c": "Complex",
            "d": "idax"
          }
        },
        {
          "№": 1,
          "question": "Дэлхийн хамгийн идэвхтэй арилжаалагддаг криптовалют юу вэ?",
          "correctAnswer": "Tether",
          "answers": {
            "a": "Bitcoin",
            "b": "Ether",
            "c": "Dogecoin",
            "d": "Tether"
          }
        },
        {
          "№": 1,
          "question": "Хамгийн анх аль блокчэйн дээр ухаалаг гэрээг байгуулах боломжтой болсон бэ?",
          "correctAnswer": "Ethereum",
          "answers": {
            "a": "Cardano",
            "b": "Bitcoin",
            "c": "Matic",
            "d": "Ethereum"
          }
        },
        {
          "№": 1,
          "question": "Блокчэйн технологи анх ямар зорилготойгоор санаачлагдаж байсан бэ?",
          "correctAnswer": "Spam имэйл шалгах",
          "answers": {
            "a": "Хэрэглэгч бүртгэл",
            "b": "Цахим тооцоолол",
            "c": "Цасны хайлах хурдыг тодорхойлох",
            "d": "Spam имэйл шалгах"
          }
        },
        {
          "№": 1,
          "question": "NFT гэж юу гэсэн үгний товчлол вэ?",
          "correctAnswer": "Non-fungible token",
          "answers": {
            "a": "Non-functional token",
            "b": "No Further Text",
            "c": "Non-forgettable token",
            "d": "Non-fungible token"
          }
        },
        {
          "№": 1,
          "question": "Юуг NFT болгох боломжтой вэ",
          "correctAnswer": "Бүгд",
          "answers": {
            "a": "Биет хөрөнгө",
            "b": "Уран бүтээл",
            "c": "Оюуны өмч",
            "d": "Бүгд"
          }
        },
        {
          "№": 1,
          "question": "WEB 3.0 -д юу хамаарахгүй вэ",
          "correctAnswer": "Банкны систем",
          "answers": {
            "a": "Блокчэйн",
            "b": "Метаверс",
            "c": "NFT",
            "d": "Банкны систем"
          }
        },
        {
          "№": 1,
          "question": "Дэлхийн хамгийн том NFT маркет аль нь вэ",
          "correctAnswer": "Opensea",
          "answers": {
            "a": "Rarible",
            "b": "Mintable",
            "c": "Foundation",
            "d": "Opensea"
          }
        },
        {
          "№": 1,
          "question": "Аль музей NFT гаргаж байсан бэ",
          "correctAnswer": "Эрмитаж",
          "answers": {
            "a": "Монголын түүхийн музей",
            "b": "Луврын музей",
            "c": "Хятадын үндэсний төв музей",
            "d": "Эрмитаж"
          }
        },
        {
          "№": 1,
          "question": "NFT хэдэн онд хамгийн их арилжаалагдсан бэ",
          "correctAnswer": "2021",
          "answers": {
            "a": "2020",
            "b": "2014",
            "c": "2022",
            "d": "2021"
          }
        },
        {
          "№": 1,
          "question": "Метамаск гэж юу вэ",
          "correctAnswer": "Крипто хэтэвч",
          "answers": {
            "a": "NFT маркет",
            "b": "Хөрөнгө оруулалтын компани",
            "c": "Хакерын бүлэг",
            "d": "Крипто хэтэвч"
          }
        },
        {
          "№": 1,
          "question": "Монгол койнуудын нэгдсэн мэдээллийг хаанаас авч болох вэ ",
          "correctAnswer": "Krypto.mn",
          "answers": {
            "a": "Монгол биржүүдээс",
            "b": "Ikon",
            "c": "FB",
            "d": "Krypto.mn"
          }
        },
        {
          "№": 1,
          "question": "NFT хэзээ анх үүссэн бэ",
          "correctAnswer": "2014",
          "answers": {
            "a": "2021",
            "b": "2020",
            "c": "2019",
            "d": "2014"
          }
        },
        {
          "№": 1,
          "question": "Сатоши накамото гэж хэн бэ",
          "correctAnswer": "Биткойныг анх зохиосон хүн",
          "answers": {
            "a": "NFT артист ",
            "b": "Хөрөнгө оруулагч",
            "c": "Хамгийн баян арилжаачин",
            "d": "Биткойныг анх зохиосон хүн"
          }
        },
        {
          "№": 1,
          "question": "NFT орших боломжгүй блокчэйн аль нь бэ?",
          "correctAnswer": "Bitcoin",
          "answers": {
            "a": "Ethereum",
            "b": "Stellar",
            "c": "Polygon",
            "d": "Bitcoin"
          }
        },
        {
          "№": 1,
          "question": "Аль нь метаверс биш вэ",
          "correctAnswer": "Facebook (META)",
          "answers": {
            "a": "PUBG",
            "b": "Minecraft",
            "c": "Sandbox",
            "d": "Facebook (META)"
          }
        },
        {
          "№": 1,
          "question": "Хадгаламж зээлийн хоршоо ямар хүмүүст үйлчилдэг вэ?",
          "correctAnswer": "Зөвхөн гишүүддээ",
          "answers": {
            "a": "Иргэн",
            "b": "Хуулийн этгээд",
            "c": "Зөвхөн гишүүддээ",
            "d": "Насанд хүрэгчдэд"
          }
        },
        {
          "№": 1,
          "question": "Хадгаламж зээлийн хоршоо ямар үйл ажиллагаа эрхэлдэг вэ?",
          "correctAnswer": "Хадгаламж, Зээл",
          "answers": {
            "a": "Хадгаламж, Зээл",
            "b": "Зээл",
            "c": "Үнэт цасны арилжаа",
            "d": "Бүгд зөв"
          }
        },
        {
          "№": 1,
          "question": "Хадгаламж зээлийн хоршооны тусгай зөвшөөрөлийг ямар байгууллага өгдөг вэ?",
          "correctAnswer": "Санхүүгийн зохицуулах хороо",
          "answers": {
            "a": "Монголбанк",
            "b": "Санхүүгийн зохицуулах хороо",
            "c": "Банкууд",
            "d": "Бүгд зөв"
          }
        },
        {
          "№": 1,
          "question": "Хэвийн бус зээлийн багцаас хэдэн хувиар зээлийн эрсдэлийн сан байгуулдаг вэ?",
          "correctAnswer": "25%",
          "answers": {
            "a": "25%",
            "b": "10%",
            "c": "15%",
            "d": "20%"
          }
        },
        {
          "№": 1,
          "question": "Бүх гишүүдийн хурлын зарыг нийтэд хэд хоногийн өмнө зарлах шаардлагатай вэ?",
          "correctAnswer": "30 хоногийн өмнө",
          "answers": {
            "a": "2 сарын өмнө",
            "b": "14 хоногийн өмнө",
            "c": "30 хоногийн өмнө",
            "d": "Хурлын өмнө"
          }
        },
        {
          "№": 1,
          "question": "Дэлхийн хуримтлалын өдөр хэдний өдөр тохиодог вэ?",
          "correctAnswer": "10 сарын 31",
          "answers": {
            "a": "10 сарын 29",
            "b": "10 сарын 30",
            "c": "10 сарын 28",
            "d": "10 сарын 27"
          }
        },
        {
          "№": 1,
          "question": "Хэдэн төгрөг хүртэлх хадгаламж хадгаламжийн даатгалаар даатгагдсан байдаг вэ?",
          "correctAnswer": "20 сая",
          "answers": {
            "a": "100 сая",
            "b": "50 сая",
            "c": "20 сая",
            "d": "30 сая"
          }
        },
        {
          "№": 1,
          "question": "Хадгаламжийн хүүг тооцох нийлмэл хүүгийн арга гэдэг нь?",
          "correctAnswer": "Сар бүр өмнөх сарын үлдэгдлээс хүү тооцдог",
          "answers": {
            "a": "Сар бүр өмнөх сарын хадгаламжинд хийсэн орлогоос хүү тооцдог",
            "b": "Жилийн эцэст нэг удаа хадгаламжийн үлдэгдлээс хүү тооцдог",
            "c": "Жилийн эцэст нэг удаа хадгаламж нээсэн дүнгээс хүү тооцдог",
            "d": "Сар бүр өмнөх сарын үлдэгдлээс хүү тооцдог"
          }
        },
        {
          "№": 1,
          "question": "Хоршоонд нээсэн хадгаламжинд хамгийн дээд талдаа хэдэн төгрөгөөр орлого хийх боломжтой вэ?",
          "correctAnswer": "Дээд дүн байхгүй",
          "answers": {
            "a": "20 сая",
            "b": "Дээд дүн байхгүй",
            "c": "100 сая",
            "d": "Орлого хийх боломжгүй"
          }
        },
        {
          "№": 1,
          "question": "Хоршооны эрх барих дээд байгууллага?",
          "correctAnswer": "Бүх гишүүдийн хурал",
          "answers": {
            "a": "Тэргүүлэгчдийн зөвлөл",
            "b": "Зээлийн хороо",
            "c": "Бүх гишүүдийн хурал",
            "d": "Санхүүгийн зохицуулах хороо"
          }
        },
        {
          "№": 1,
          "question": "Монгол улс хэдэн шатлалт банкны тогтолцоотой вэ?",
          "correctAnswer": "2",
          "answers": {
            "a": "5",
            "b": "2",
            "c": "1",
            "d": "10"
          }
        },
        {
          "№": 1,
          "question": "Банкуудын зохицуулалтыг хариуцсан төрийн захиргааны төв байгууллага аль нь вэ?",
          "correctAnswer": "Монголбанк",
          "answers": {
            "a": "Улсын Их Хурал",
            "b": "Засгийн газар",
            "c": "Ерөнхийлөгч",
            "d": "Монголбанк"
          }
        },
        {
          "№": 1,
          "question": "Мөнгөн гуйвууллагын үйлчилгээ эрхлэгч аль нь биш вэ?",
          "correctAnswer": "Mastercard",
          "answers": {
            "a": "Mastercard",
            "b": "MoneyGram",
            "c": "Ria",
            "d": "Eurogiro"
          }
        },
        {
          "№": 1,
          "question": "ББСБ Итгэлцэл татахад ямар нэгэн хязгаарлалт байдаг уу?",
          "correctAnswer": "ББСБ-ийн өөрийн хөрөнгийн 80%-аас хэтрэхгүй",
          "answers": {
            "a": "Үгүй",
            "b": "ББСБ-ийн өөрийн хөрөнгийн хэмжээнээс хэтрэхгүй",
            "c": "ББСБ-ийн өөрийн хөрөнгийн 80%-аас хэтрэхгүй",
            "d": "ББСБ-ийн нийт хөрөнгийн 80%-аас хэтрэхгүй"
          }
        },
        {
          "№": 1,
          "question": "ББСБ цахим мөнгө гаргах тусгай зөвшөөрлийг хаанаас олгодог вэ?",
          "correctAnswer": "Монголбанк",
          "answers": {
            "a": "Санхүүгийн Зохицуулах Хороо",
            "b": "Мэргэжлийн Хяналтын Газар",
            "c": "Сангийн Яам",
            "d": "Монголбанк"
          }
        },
        {
          "№": 1,
          "question": "Монголын анхны ББСБ хэдэн онд үүсгэн байгуулагдсан бэ?",
          "correctAnswer": "1998",
          "answers": {
            "a": "1999",
            "b": "2000",
            "c": "2001",
            "d": "1998"
          }
        },
        {
          "№": 1,
          "question": "Даатгал гэж юу вэ?",
          "correctAnswer": "Ирээдүйд учирч болох эрсдэлээс хамгаалах санхүүгийн арга хэрэгсэл ",
          "answers": {
            "a": "Ашиг олох арга хэрэгсэл ",
            "b": "Даатгагч, даатгуулагчийн хооронд үүсэх даатгалын харилцааг зохицуулсан эрх зүйн баримт бичиг",
            "c": "Гэрээний дагуу даатгалын тохиолдол үүссэн нөхцөлд даатгагчаас даатгуулагчид олгох мөнгөн хөрөнгө",
            "d": "Ирээдүйд учирч болох эрсдэлээс хамгаалах санхүүгийн арга хэрэгсэл"
          }
        },
        {
          "№": 1,
          "question": "Даатгал ямар зорилготой вэ? ",
          "correctAnswer": "Эрсдэлээс сэргийлэх",
          "answers": {
            "a": "Мөнгөө өсгөх ",
            "b": "Орлого олох ",
            "c": "Эрсдэлээс сэргийлэх",
            "d": "Төлбөр авах"
          }
        },
        {
          "№": 1,
          "question": "Хуулиараа заавал даатгуулах ёстой албан журмын даатгал аль нь вэ?",
          "correctAnswer": "Жолоочийн хариуцлагын албан журмын даатгал",
          "answers": {
            "a": "Тээврийн хэрэгслийн даатгал ",
            "b": "Эрүүл мэндийн даатгал ",
            "c": "Хөрөнгийн даатгал ",
            "d": "Жолоочийн хариуцлагын албан журмын даатгал"
          }
        },
        {
          "№": 1,
          "question": "Гэрээний дагуу даатгалын тохиолдол үүссэн нөхцөлд даатгагчаас даатгуулагчид олгох мөнгөн хөрөнгийг юу гэж нэрлэдэг вэ?",
          "correctAnswer": "Нөхөн төлбөр",
          "answers": {
            "a": "Эрсдэлийн төлбөр ",
            "b": "Нөхөн төлбөр",
            "c": "Даатгалын хураамж ",
            "d": "Буцаалт "
          }
        },
        {
          "№": 1,
          "question": "Ард Даатгал компани хэдэн онд байгуулагдсан бэ? ",
          "correctAnswer": "1994",
          "answers": {
            "a": "1992",
            "b": "1994",
            "c": "2004",
            "d": "2018"
          }
        },
        {
          "№": 1,
          "question": "Даатгалын ангилал ",
          "correctAnswer": "Ердийн болон урт хугацааны ",
          "answers": {
            "a": "Энгийн болон давхар ",
            "b": "Ердийн болон урт хугацааны ",
            "c": "Албан журмын болон сайн дурын ",
            "d": "Дан болон давхар "
          }
        },
        {
          "№": 1,
          "question": "3 автомашинтай хүн нэг л жолоочийн хариуцлагын албан журмын даатгал хийлгэж болох уу?",
          "correctAnswer": "Автомашин тус бүр дээр хийлгэнэ",
          "answers": {
            "a": "Дунд нь нэг л даатгал хийлгэнэ ",
            "b": "Хоёр автомашин дээрээ даатгал хийлгэнэ ",
            "c": "Жолоочийн үнэмлэхтэй байхад л болно ",
            "d": "Автомашин тус бүр дээр хийлгэнэ"
          }
        },
        {
          "№": 1,
          "question": "Даатгалын компани өөрийнхөө эрсдэлийг хаана даатгуулдаг вэ? ",
          "correctAnswer": "Давхар даатгалын компанид ",
          "answers": {
            "a": "Бусад даатгалын компанидаа ",
            "b": "Давхар даатгалын компанид ",
            "c": "Сангийн яаманд ",
            "d": "Даатгалын Холбоонд "
          }
        },
        {
          "№": 1,
          "question": "Эмэгтэй хөдөлмөр эрхлэгч хэдэн насандаа тэтгэвэрт гардаг вэ?",
          "correctAnswer": "55",
          "answers": {
            "a": "50",
            "b": "60",
            "c": "55",
            "d": "53"
          }
        },
        {
          "№": 1,
          "question": "Эрэгтэй хөдөлмөр эрхлэгч хэдэн насандаа тэтгэвэрт гардаг вэ? ",
          "correctAnswer": "60",
          "answers": {
            "a": "50",
            "b": "55",
            "c": "60",
            "d": "65"
          }
        },
        {
          "№": 1,
          "question": "Тэтггэвэр өвлөгддөгүү?",
          "correctAnswer": "Өвлөгдөггүй",
          "answers": {
            "a": "Өвлөгддөг",
            "b": "Өвлөгдөггүй",
            "c": "",
            "d": ""
          }
        },
        {
          "№": 1,
          "question": "Шилдэг тэтгэвтрийн тогтолцоотой улс аль улс вэ?",
          "correctAnswer": "Нидерланд ",
          "answers": {
            "a": "Дани ",
            "b": "Финланд",
            "c": "Швед",
            "d": "Нидерланд "
          }
        },
        {
          "№": 1,
          "question": "1 иргэний тэтгэврийг хэдэн иргэний татварын орлого бүрдүүлдэг вэ?",
          "correctAnswer": "3",
          "answers": {
            "a": "1",
            "b": "2",
            "c": "3",
            "d": "5"
          }
        },
        {
          "№": 1,
          "question": "Ардкойн хэдэн онд үүссэн вэ?",
          "correctAnswer": "2018",
          "answers": {
            "a": "2019",
            "b": "2018",
            "c": "2020",
            "d": "2021"
          }
        },
        {
          "№": 1,
          "question": "Анх хэдэн Ардкойн зах зээл дээр бий болсон вэ?",
          "correctAnswer": "5.1 тэрбум",
          "answers": {
            "a": "5.2 тэрбум",
            "b": "6.1 тэрбум",
            "c": "101 тэрбум",
            "d": "5.1 тэрбум"
          }
        },
        {
          "№": 1,
          "question": "Ардкойны хамгийн анхны аль бирж дээр явагдсан бэ",
          "correctAnswer": "Trade.mn",
          "answers": {
            "a": "Trade.mn",
            "b": "IDAX.mn",
            "c": "Coinhub.mn",
            "d": "complex.mn"
          }
        },
        {
          "№": 1,
          "question": "2019 оны 3сар",
          "correctAnswer": "2019 оны 3сар",
          "answers": {
            "a": "2019 оны 2сар",
            "b": "2019 оны 4сар",
            "c": "2019 оны 5сар",
            "d": "2019 оны 6сар"
          }
        },
        {
          "№": 1,
          "question": "Ардкойныг анх хэдэн төгрөгөөр гарсан вэ?",
          "correctAnswer": "Үнэгүй",
          "answers": {
            "a": "1 төгрөг",
            "b": "0.3 төгрөг",
            "c": "Үнэгүй",
            "d": "3 төгрөг"
          }
        },
        {
          "№": 1,
          "question": "Ардкойн гэж юу вэ?",
          "correctAnswer": "Blockchain дээр суурилсан урамшууллын оноо",
          "answers": {
            "a": "Арилжааны хэрэгсэл",
            "b": "Stablecoin",
            "c": "Blockchain дээр суурилсан урамшууллын оноо",
            "d": "Security token"
          }
        },
        {
          "№": 1,
          "question": "Ардкойны үндсэн бирж юу вэ?",
          "correctAnswer": "IDAX.exchange",
          "answers": {
            "a": "Trade.mn",
            "b": "IDAX.mn",
            "c": "Coinhub.mn",
            "d": "complex.mn"
          }
        },
        {
          "№": 1,
          "question": "Ард Апп хамгийн сүүлд хэддэх хувилбараа нэвтрүүлсэн бэ?",
          "correctAnswer": "5",
          "answers": {
            "a": "4",
            "b": "3",
            "c": "2",
            "d": "5"
          }
        },
        {
          "№": 1,
          "question": "Ард Аппад хэдэн үндсэн цэс байдаг вэ?",
          "correctAnswer": "4",
          "answers": {
            "a": "5",
            "b": "3",
            "c": "6",
            "d": "4"
          }
        },
        {
          "№": 1,
          "question": "Ард Апп гүйлгээ бүрдээ хэдэн төрлийн урамшуулал олгодог вэ?",
          "correctAnswer": "2",
          "answers": {
            "a": "1",
            "b": "3",
            "c": "0",
            "d": "2"
          }
        }
      ]

    //This will hold the new shuffled questions
    var shuffledQuestions = [];
    //This will hold the number of seconds on timer
    var timeRemaining;
    //This will hold the timer interval in milliseconds
    var intervalId = setInterval(countdown, 1000);
    //This will hold the number of correct questions answered by user
    var qCorrect = 0;
    //This will hold the number of wrong questions answered by user
    var qWrong = 0;
    //This will hold the number of questions not answered by user
    var qUnanswered = 0;
    //This will hold the index number user is on
    var indexNumber;



    //Functions Here
    //~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~

    //This function will start the game by displaying the timer, 1st shuffled question, answer buttons, and hide the start button
    function startGame() {
        //This on click event is for the user to click start button
        $("#startButton").click(function () {
            //When user hits start indexNumber will be set to 0, pull the first question out of shuffledQuestions
            indexNumber = 0;
            //When user hits start, timer will be set to 30 seconds
            timeRemaining = 20;
            //This function call will display timer and start counting down
            countdown();
            //This line makes the form show on the DOM
            $("#questionForm").show();
            //This line hides the start button
            $("#startButton").hide();
            //This calls the shuffle function to shuffle allQuestions object
            shuffle(allQuestions);
            //This puts the shuffled allQuestions into a new variable
            shuffledQuestions.push(allQuestions);
            //This updates the HTML with the first shuffled Question
            $("#question").text(shuffledQuestions[0][indexNumber].question);
            //This will update the HTML with the answer choices of first shuffled question
            $("#answerA").text(shuffledQuestions[0][indexNumber].answers.a);
            $("#answerB").text(shuffledQuestions[0][indexNumber].answers.b);
            $("#answerC").text(shuffledQuestions[0][indexNumber].answers.c);
            $("#answerD").text(shuffledQuestions[0][indexNumber].answers.d);
        });
    }

    //This function shuffles an array whenever it is called and given the parameter array
    function shuffle(array) {
        //Local variable created here
        var counter = array.length, temp, index;
        // While there are elements in the array
        while (counter > 0) {
            // Pick a random index
            index = Math.floor(Math.random() * counter);
            // Decrease counter by 1
            counter--;
            // And swap the last element with it
            temp = array[counter];
            array[counter] = array[index];
            array[index] = temp;
        }
        return array;
    }

    //This function is for making the timer run down from 30 seconds
    function countdown() {
        if (timeRemaining === 0) {
            //This line stops the counter
            clearTimeout(intervalId);
            //This line will execute something else whenever time runs out
            console.log("Time is UP!");
            //This line adds 1 to the qUnanswered variable
            qUnanswered++;
            //This line will add 1 to the indexNumber variable if timer hits 0
            indexNumber++;
            //This line will call the nextInLine function
            nextInLine();
        } else {
            //This line updates HTML with the ticking counter
            $("#timer").html("Хугацаа: " + timeRemaining);
            //This line decreases the counter by one second
            timeRemaining--;
        }
    }


    //This function will hold the user's input to the question, check's wether wrong or right, adds to counter
    function userAnswer() {
        //This on click event recognizes user input A
        $("#answerA").click(function () {
            if (shuffledQuestions[0][indexNumber].answers.a === shuffledQuestions[0][indexNumber].correctAnswer) {
                //This adds 1 to the qCorrect variable
                qCorrect++;
                //This line will add 1 to the indexNumber if correct
                indexNumber++;
                //This line stops the counter
                clearTimeout(intervalId);
                //This calls next in line function
                nextInLine();
            } else {
                qWrong++;
                indexNumber++;
                //This line stops the counter
                clearTimeout(intervalId);
                //This calls next in line function
                nextInLine();
            }
        });
        //This on click event recognizes user input B
        $("#answerB").click(function () {
            if (shuffledQuestions[0][indexNumber].answers.b === shuffledQuestions[0][indexNumber].correctAnswer) {
                //This adds 1 to the qCorrect variable
                qCorrect++;
                //This line will add 1 to the indexNumber if correct
                indexNumber++;
                //This line stops the counter
                clearTimeout(intervalId);
                //This calls next in line function
                nextInLine();
            } else {
                //This adds 1 to the qWrong variable
                qWrong++;
                indexNumber++;
                //This line stops the counter
                clearTimeout(intervalId);
                //This calls next in line function
                nextInLine();
            }
        });
        //This on click event recognizes user input C
        $("#answerC").click(function () {
            if (shuffledQuestions[0][indexNumber].answers.c === shuffledQuestions[0][indexNumber].correctAnswer) {
                //This adds 1 to the qCorrect variable
                qCorrect++;
                //This line will add 1 to the indexNumber if correct
                indexNumber++;
                //This line stops the counter
                clearTimeout(intervalId);
                //This calls next in line function
                nextInLine();
            } else {
                //This adds 1 to the qWrong variable
                qWrong++;
                indexNumber++;
                //This line stops the counter
                clearTimeout(intervalId);
                //This calls next in line function
                nextInLine();
            }
        });
        //This on click event recognizes user input D
        $("#answerD").click(function () {
            if (shuffledQuestions[0][indexNumber].answers.d === shuffledQuestions[0][indexNumber].correctAnswer) {
                //This adds 1 to the qCorrect variable
                qCorrect++;
                //This line will add 1 to the indexNumber if correct
                indexNumber++;
                //This line stops the counter
                clearTimeout(intervalId);
                //This calls next in line function
                nextInLine();
            } else {
                //This adds 1 to the qWrong variable
                qWrong++;
                indexNumber++;
                //This line stops the counter
                clearTimeout(intervalId);
                //This calls next in line function
                nextInLine();
            }
        });

    }

    //This function will run after time expires or user selects right or wrong answer and pull the next question
    function nextInLine() {
        if (indexNumber === 8) {
            //This line will clear the interval timer
            clearTimeout(intervalId);
            //This line will hide the questions container
            $("#questionForm").hide();
            //This line will show the counters container
            $("#counterForm").show();
            //This line will display users correct questions number
            $("#qCorrect").html("Зөв хариулсан: " + qCorrect);
            //This line will display users wrong questions number
            $("#qWrong").html("Буруу: " + qWrong);
            //This line will display users unasnwered questions number
            $("#qUnanswered").html("Хариулаагүй: " + qUnanswered);
            //This line will show the reset button
            $("#resetButton").show();
        } else {

            //Will need to set a new interval for the timer
            intervalId = setInterval(countdown, 1000);
            //Time remaining will need to be reset again
            timeRemaining = 20;
            //This function call will redisplay counter and start counting down
            countdown();
            //This updates the HTML with the next indexNumber shuffled Question
            $("#question").text(shuffledQuestions[0][indexNumber].question);
            //This will update the HTML with the answer choices of the indexNumber shuffled question
            $("#answerA").text(shuffledQuestions[0][indexNumber].answers.a);
            $("#answerB").text(shuffledQuestions[0][indexNumber].answers.b);
            $("#answerC").text(shuffledQuestions[0][indexNumber].answers.c);
            $("#answerD").text(shuffledQuestions[0][indexNumber].answers.d);
        }
    }

    //This function will run if the user clicks the reset button at the end
    function resetGame() {
        $("#resetButton").click(function () {
            //When user hits reset button indexNumber will be set to 0, pull the first question out of shuffledQuestions
            indexNumber = 0;
            //When user hits reset, timer will be set to 30 seconds again
            timeRemaining = 20;
            //This will reset correct back to zero
            qCorrect = 0;
            //This will reset wrong back to zero
            qWrong = 0;
            //This will reset unasnwered back to zero
            qUnanswered = 0;
            //This function call will display timer and start counting down
            countdown();
            //This line makes the form show on the DOM
            $("#questionForm").show();
            //This will reset the timer interval in milliseconds
            intervalId = setInterval(countdown, 1000);
            //This line will hide the reset button
            $("#resetButton").hide();
            //This line will hide the counter form again
            $("#counterForm").hide();
            //This calls the shuffle function to shuffle allQuestions object
            shuffle(allQuestions);
            //This puts the shuffled allQuestions into the shuffledQuestions variable
            shuffledQuestions.push(allQuestions);
            //This updates the HTML with the first shuffled Question
            $("#question").text(shuffledQuestions[0][indexNumber].question);
            //This will update the HTML with the answer choices of first shuffled question
            $("#answerA").text(shuffledQuestions[0][indexNumber].answers.a);
            $("#answerB").text(shuffledQuestions[0][indexNumber].answers.b);
            $("#answerC").text(shuffledQuestions[0][indexNumber].answers.c);
            $("#answerD").text(shuffledQuestions[0][indexNumber].answers.d);
        });
    }

    //Main Process Executes Here
    //~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~

    // Call start game function to make it active, this will only run once unless user refreshes page
    startGame();

    //Call user answer function to make it active
    userAnswer();

    //Call reset game function to make it active, this will run multiple times (depending on how many times user re plays)
    resetGame();


});
