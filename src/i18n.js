import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';

// The translations based on the original data.js
const resources = {
    en: {
        translation: {
            "nav_home": "Home",
            "nav_wiki": "Wiki",
            "nav_software": "Software",
            "nav_market": "Market",
            "nav_contact": "Contact",
            "hero_title": "Meet NeuroFly",
            "hero_desc": "An Educational Micro Drone Platform for Learning Robotics, Artificial Intelligence, and Flight Control.",
            "hero_btn_wiki": "Explore Wiki",
            "hero_btn_start": "Get Started",
            "about_title": "What is NeuroFly?",
            "about_desc": "NeuroFly is an ESP32-based educational micro drone platform designed specifically for students, makers, and robotics learners. It peels back the layers of abstraction, allowing you to understand and program real flight control systems from the ground up.",
            "feat_title": "Key Features",
            "feat_desc": "Designed for control, customization, and clarity.",
            "feat_core_title": "Programmable Core",
            "feat_core_desc": "Powered by ESP32, fully programmable via Arduino IDE or Python. Write your own flight controller.",
            "feat_stab_title": "Advanced Stabilization",
            "feat_stab_desc": "Equipped with 6-axis IMU, Time-of-Flight (ToF) distance sensors, and Optical Flow for position hold.",
            "feat_open_title": "Open Source",
            "feat_open_desc": "Hardware schematics, firmware, and educational materials are completely open source.",
            "feat_mob_title": "Mobile Control",
            "feat_mob_desc": "Fly directly from your smartphone with our dedicated app or build your own custom controller.",
            "feat_mod_title": "Modular Design",
            "feat_mod_desc": "Repair-friendly frame and solder-free motor connectors make it perfect for classrooms.",
            "feat_class_title": "Classroom Ready",
            "feat_class_desc": "Comprehensive curriculum support for STEM education, from physics to programming.",
            "media_title": "See It In Action",
            "learn_title": "A Complete Learning Ecosystem",
            "learn_desc": "We provide more than just hardware. NeuroFly is a gateway to mastering robotics.",
            "learn_li1": "Step-by-step assembly guides",
            "learn_li2": "PID control theory tutorials",
            "learn_li3": "Sensor fusion explanation",
            "learn_li4": "Python & C++ coding examples",
            "learn_btn": "Explore Curriculum",
            "mission_title": "Our Mission",
            "mission_desc": "To make advanced robotics and flight control education accessible to students everywhere, enabling a new generation capable of building autonomous systems.",
            "cta_title": "Ready to Take Flight?",
            "cta_desc": "Start your journey into robotics today.",
            "cta_btn": "Get Your NeuroFly",
            "footer_desc": "Empowering the next generation of robotics engineers through open-source innovation.",
            "footer_res": "Resources",
            "footer_doc": "Documentation",
            "footer_github": "Github Repository",
            "footer_conn": "Connect",
            "footer_copy": "© 2026 NeuroFly. All rights reserved.",

            // Market Content
            "market_hero_title": "Official Store",
            "market_hero_desc": "Get authentic NeuroFly kits and spare parts.",
            "prod_edu_title": "NeuroFly Education Kit (Standard)",
            "prod_edu_desc": "The complete starter kit. Includes ESP32 drone frame, motors, 2 batteries, and USB charger. Ideal for beginners.",
            "prod_pro_title": "NeuroFly Pro Kit (AI Edition)",
            "prod_pro_desc": "Includes upgraded Optical Flow sensor and ToF module for precision hovering and autonomous missions.",
            "prod_motor_title": "Coreless DC Motor Set (4x)",
            "prod_motor_desc": "High-performance 8520 coreless motors. 2x CW and 2x CCW. Compatible with all NeuroFly frames.",
            "prod_batt_title": "500mAh LiPo Battery Pack",
            "prod_batt_desc": "Extended flight time. 1S 3.7V 25C LiPo battery with standard JST connector.",
            "buy_btn": "Buy on Trendyol",

            // Software Content
            "soft_hero_title": "Developer Resources",
            "soft_hero_desc": "Everything you need to program, control, and extend your NeuroFly drone.",
            "soft_firmware": "Firmware",
            "soft_firmware_desc": "The core flight control software running on the ESP32. Pre-flashed on all NeuroFly units.",
            "soft_download": "Download .bin",
            "soft_app": "Control App",
            "soft_app_desc": "Official mobile application for iOS and Android. Features real-time telemetry and FPV streaming.",
            "soft_sdk": "Python SDK",
            "soft_sdk_desc": "Control multiple drones swarm-style using our simple Python library.",
            "soft_view_doc": "View Documentation →",
            "soft_source": "Source Code",
            "soft_source_desc": "Access hardware schematics (PCB), 3D printable frame files (STL), and the full firmware source.",
            "soft_visit_git": "Visit GitHub Repository",

            // Contact Content
            "contact_title": "Connect with NeuroFly",
            "contact_desc": "We'd love to hear from you.",
            "contact_email_title": "Get in Touch",
            "contact_email_desc": "For inquiries, support, or collaboration, please email us directly.",
            "contact_btn": "Send Email",

            // Wiki Content
            "wiki_header": "NeuroFly Documentation",
            "wiki_search": "Search articles...",
            "wiki_categories": {
                "Getting Started": "Getting Started",
                "Assembly": "Assembly",
                "Firmware": "Firmware",
                "Mobile Flight": "Mobile Flight",
                "Altitude Sensor": "Altitude Sensor",
                "PC Control": "PC Control",
                "Python Control": "Python Control",
                "Autonomous Flight": "Autonomous Flight",
                "Betaflight": "Betaflight"
            },
            "wiki_articles": {
                "getting-started-1": {
                    title: "Welcome to NeuroFly",
                    content: `<h2>Welcome to the NeuroFly Ecosystem</h2>
          <p>NeuroFly is an advanced educational micro-drone platform designed to teach the fundamentals of flight dynamics, control theory, and embedded systems.</p>
          <p>This wiki serves as your central hub for all documentation, tutorials, and troubleshooting guides.</p>
          <h3>What's in the box?</h3>
          <ul>
              <li>1x NeuroFly ESP32 Drone Frame</li>
              <li>4x Coreless DC Motors</li>
              <li>2x 3.7V 500mAh LiPo Batteries</li>
              <li>1x USB Charger</li>
              <li>Propeller Set (CW/CCW)</li>
          </ul>`
                },
                "cfclient-intro": {
                    title: "1) Introduction to cfClient",
                    content: `<p>cfClient (Crazyflie Client) is the official ground control software that enables communication between the NeuroFly drone and your computer.</p>
<p>Through this application you can:</p>
<ul>
    <li>Connect to the drone</li>
    <li>Monitor sensor data live</li>
    <li>Test the motors</li>
    <li>Change parameters</li>
    <li>Execute flights using a joystick</li>
</ul>
<p>Since NeuroFly uses the Crazyflie communication protocol (CRTP), the connection is established via this program.</p>`
                },
                "cfclient-python": {
                    title: "2) Python 3.11 Installation",
                    content: `<ol>
    <li>Open this address in your browser: <a href="https://www.python.org/downloads/release/python-3119/" target="_blank" style="color: #4da6ff; text-decoration: underline;">Python 3.11.9</a></li>
    <li>Download the Windows x64 installer.</li>
    <li>Run the downloaded installer.</li>
    <li>When the setup screen appears: <strong>MOST IMPORTANT STEP: Make sure to check the box for: <br>☑ Add Python to PATH</strong></li>
    <li>Then click <em>Install Now</em> and wait for the installation to complete.</li>
    <li>After the installation is done, restart your computer.</li>
</ol>`
                },
                "cfclient-verify": {
                    title: "3) Verifying Python Installation",
                    content: `<ol>
    <li>Open the Start menu</li>
    <li>Type <code>CMD</code> and open the Command Prompt</li>
    <li>Enter the following command:</li>
</ol>
<pre><code>python --version</code></pre>
<p>If you see an output similar to the following, it is installed correctly:</p>
<pre><code>Python 3.11.x</code></pre>`
                },
                // ... omitting the rest to keep it concise, adding Python Intro as example
                "python-intro": {
                    title: "1) Introduction",
                    content: `<p>NeuroFly is a flexible and modular educational micro drone platform. The drone supports the Crazyflie communication protocol (CRTP) out of the box thanks to its default firmware.</p>
<p>Through this:</p>
<ul>
    <li>It can connect via the mobile app</li>
    <li>It can be controlled from a computer using cfClient</li>
    <li>It can be programmed via Python using the <code>cflib</code> library</li>
</ul>
<p>In this document, we will learn how to control the NeuroFly drone using the Python programming language. Developed by Crazyflie, <code>cflib</code> is the official Python SDK that allows us to communicate with the drone. Thanks to this library, you can write your own flight algorithms, read sensor data, and develop autonomous behaviors.</p>`
                }
            }
        }
    },
    tr: {
        translation: {
            "nav_home": "Ana Sayfa",
            "nav_wiki": "Wiki",
            "nav_software": "Yazılım",
            "nav_market": "Market",
            "nav_contact": "İletişim",
            "hero_title": "NeuroFly ile Tanışın",
            "hero_desc": "Robotik, Yapay Zeka ve Uçuş Kontrolü Öğrenmek İçin Eğitici Mikro Dron Platformu.",
            "hero_btn_wiki": "Wiki'yi Keşfet",
            "hero_btn_start": "Başla",
            "about_title": "NeuroFly Nedir?",
            "about_desc": "NeuroFly, öğrenciler, maker'lar ve robotik öğrenenler için özel olarak tasarlanmış, ESP32 tabanlı eğitici bir mikro dron platformudur. Soyutlamaları ortadan kaldırarak gerçek uçuş kontrol sistemlerini sıfırdan anlamanızı ve programlamanızı sağlar.",
            "feat_title": "Temel Özellikler",
            "feat_desc": "Kontrol, özelleştirme ve netlik için tasarlandı.",
            "feat_core_title": "Programlanabilir Çekirdek",
            "feat_core_desc": "ESP32 ile güçlendirilmiştir, Arduino IDE veya Python ile tamamen programlanabilir. Kendi uçuş kontrolcünüzü yazın.",
            "feat_stab_title": "Gelişmiş Stabilizasyon",
            "feat_stab_desc": "Yükseklik sabitleme için Time-of-Flight (ToF) mesafe sensörü, Optical Flow ve 6 eksenli IMU ile donatılmıştır.",
            "feat_open_title": "Açık Kaynak",
            "feat_open_desc": "Donanım şemaları, yazılım ve eğitim materyalleri tamamen açık kaynaktır.",
            "feat_mob_title": "Mobil Kontrol",
            "feat_mob_desc": "Özel uygulamamızla doğrudan akıllı telefonunuzdan uçurun veya kendi özel kumandanızı yapın.",
            "feat_mod_title": "Modüler Tasarım",
            "feat_mod_desc": "Tamiri kolay gövde ve lehimsiz motor konektörleri, onu sınıflar için mükemmel kılar.",
            "feat_class_title": "Sınıf İçin Hazır",
            "feat_class_desc": "Fizikten programlamaya kadar STEM eğitimi için kapsamlı müfredat desteği.",
            "media_title": "İş Başında Görün",
            "learn_title": "Eksiksiz Bir Öğrenme Ekosistemi",
            "learn_desc": "Sadece donanım sağlamıyoruz. NeuroFly, robotiği ustalıkla öğrenmeye açılan bir kapıdır.",
            "learn_li1": "Adım adım montaj rehberleri",
            "learn_li2": "PID kontrol teorisi eğitimleri",
            "learn_li3": "Sensör füzyonu açıklaması",
            "learn_li4": "Python ve C++ kod örnekleri",
            "learn_btn": "Müfredatı Keşfet",
            "mission_title": "Misyonumuz",
            "mission_desc": "Gelişmiş robotik ve uçuş kontrol eğitimini her yerdeki öğrenciler için erişilebilir kılmak, otonom sistemler inşa edebilecek yeni bir nesil yetiştirmek.",
            "cta_title": "Uçuşa Hazır mısın?",
            "cta_desc": "Robotik yolculuğuna bugün başla.",
            "cta_btn": "NeuroFly'ı Satın Al",
            "footer_desc": "Açık kaynak yenilikçiliğiyle yeni nesil robotik mühendislerini güçlendiriyoruz.",
            "footer_res": "Kaynaklar",
            "footer_doc": "Dokümantasyon",
            "footer_github": "Github Deposu",
            "footer_conn": "Bağlantı",
            "footer_copy": "© 2026 NeuroFly. Tüm hakları saklıdır.",

            // Market Content
            "market_hero_title": "Resmi Mağaza",
            "market_hero_desc": "Orijinal NeuroFly kitleri ve yedek parçalarını edinin.",
            "prod_edu_title": "NeuroFly Eğitim Kiti (Standart)",
            "prod_edu_desc": "Eksiksiz başlangıç kiti. ESP32 drone gövdesi, motorlar, 2 batarya ve USB şarj cihazı içerir. Yeni başlayanlar için idealdir.",
            "prod_pro_title": "NeuroFly Pro Kiti (Yapay Zeka Sürümü)",
            "prod_pro_desc": "Hassas havada asılı kalma ve otonom görevler için yükseltilmiş Optik Akış sensörü ve ToF modülü içerir.",
            "prod_motor_title": "Çekirdeksiz DC Motor Seti (4x)",
            "prod_motor_desc": "Yüksek performanslı 8520 çekirdeksiz motorlar. 2x CW ve 2x CCW. Tüm NeuroFly gövdeleriyle uyumludur.",
            "prod_batt_title": "500mAh LiPo Batarya Paketi",
            "prod_batt_desc": "Uzatılmış uçuş süresi. Standart JST konnektörlü 1S 3.7V 25C LiPo batarya.",
            "buy_btn": "Trendyol'dan Satın Al",

            // Software Content
            "soft_hero_title": "Geliştirici Kaynakları",
            "soft_hero_desc": "NeuroFly dronenuzu programlamak, kontrol etmek ve genişletmek için ihtiyacınız olan her şey.",
            "soft_firmware": "Firmware (Yazılım İşletim Sistemi)",
            "soft_firmware_desc": "ESP32 üzerinde çalışan çekirdek uçuş kontrol yazılımı. Tüm NeuroFly ünitelerinde önceden yüklenmiştir.",
            "soft_download": ".bin İndir",
            "soft_app": "Kontrol Uygulaması",
            "soft_app_desc": "iOS ve Android için resmi mobil uygulama. Gerçek zamanlı telemetri ve FPV yayını sunar.",
            "soft_sdk": "Python SDK",
            "soft_sdk_desc": "Basit Python kütüphanemizi kullanarak birden fazla drone'u sürü halinde uçurun.",
            "soft_view_doc": "Dokümantasyonu Görüntüle →",
            "soft_source": "Açık Kaynak Kodu",
            "soft_source_desc": "Donanım şemalarına (PCB), 3D yazdırılabilir gövde dosyalarına (STL) ve tam firmware kaynağına erişin.",
            "soft_visit_git": "GitHub Deposunu Ziyaret Et",

            // Contact Content
            "contact_title": "NeuroFly ile İletişime Geçin",
            "contact_desc": "Sizden haber almaktan memnuniyet duyarız.",
            "contact_email_title": "Bize Ulaşın",
            "contact_email_desc": "Soru, destek veya işbirliği talepleriniz için bize doğrudan e-posta gönderebilirsiniz.",
            "contact_btn": "E-posta Gönder",

            // Wiki Content
            "wiki_header": "NeuroFly Dokümantasyonu",
            "wiki_search": "Makalelerde ara...",
            "wiki_categories": {
                "Getting Started": "Başlangıç",
                "Assembly": "Montaj",
                "Firmware": "Yazılım (Firmware)",
                "Mobile Flight": "Mobil Uçuş",
                "Altitude Sensor": "Yükseklik Sensörü",
                "PC Control": "Bilgisayar Kontrolü (cfClient)",
                "Python Control": "Python Kontrolü",
                "Autonomous Flight": "Otonom Uçuş",
                "Betaflight": "Betaflight"
            },
            "wiki_articles": {
                "getting-started-1": {
                    title: "NeuroFly'a Hoş Geldiniz",
                    content: `<h2>NeuroFly Ekosistemine Hoş Geldiniz</h2>
          <p>NeuroFly, uçuş dinamikleri, kontrol teorisi ve gömülü sistemlerin temellerini öğretmek için tasarlanmış gelişmiş bir eğitim mikro-drone platformudur.</p>
          <p>Bu wiki, tüm dokümantasyon, eğitimler ve sorun giderme kılavuzları için merkezi merkezinizdir.</p>
          <h3>Kutuda ne var?</h3>
          <ul>
              <li>1x NeuroFly ESP32 Drone Gövdesi</li>
              <li>4x Çekirdeksiz DC Motor</li>
              <li>2x 3.7V 500mAh LiPo Batarya</li>
              <li>1x USB Şarj Cihazı</li>
              <li>Pervane Seti (CW/CCW)</li>
          </ul>`
                },
                "cfclient-intro": {
                    title: "1) cfClient Nedir?",
                    content: `<p>cfClient (Crazyflie Client), NeuroFly drone ile bilgisayar arasında haberleşme kurmayı sağlayan resmi yer kontrol yazılımıdır.</p>
<p>Bu uygulama sayesinde:</p>
<ul>
    <li>Drone’a bağlanabilir</li>
    <li>Sensör verilerini canlı izleyebilir</li>
    <li>Motorları test edebilir</li>
    <li>Parametreleri değiştirebilir</li>
    <li>Joystick ile uçuş gerçekleştirebilirsiniz</li>
</ul>
<p>NeuroFly, Crazyflie haberleşme protokolünü (CRTP) kullandığı için bağlantı bu program üzerinden yapılır.</p>`
                },
                "cfclient-python": {
                    title: "2) Python 3.11 Kurulumu",
                    content: `<ol>
    <li>Tarayıcıdan şu adresi açın: <a href="https://www.python.org/downloads/release/python-3119/" target="_blank" style="color: #4da6ff; text-decoration: underline;">Python 3.11.9</a></li>
    <li>Windows x64 installer dosyasını indirin.</li>
    <li>İndirilen kurulum dosyasını çalıştırın.</li>
    <li>Kurulum ekranı açıldığında: <strong>EN ÖNEMLİ ADIM: Aşağıdaki seçeneği mutlaka işaretleyin: <br>☑ Add Python to PATH</strong></li>
    <li>Ardından <em>Install Now</em> butonuna tıklayın ve kurulumun tamamlanmasını bekleyin.</li>
    <li>Kurulum bittikten sonra bilgisayarı yeniden başlatın.</li>
</ol>`
                },
                "cfclient-verify": {
                    title: "3) Python Kurulumunu Doğrulama",
                    content: `<ol>
    <li>Başlat menüsünü açın</li>
    <li><code>CMD</code> yazın ve Komut İstemi’ni açın</li>
    <li>Aşağıdaki komutu girin:</li>
</ol>
<pre><code>python --version</code></pre>
<p>Eğer aşağıdakine benzer bir çıktı görüyorsanız doğru kurulmuştur:</p>
<pre><code>Python 3.11.x</code></pre>`
                },
                "python-intro": {
                    title: "1) Giriş",
                    content: `<p>NeuroFly, esnek ve modüler bir eğitim amaçlı mikro drone platformudur. Drone, üzerinde yüklü gelen varsayılan yazılım (firmware) sayesinde Crazyflie haberleşme protokolünü (CRTP) destekler.</p>
<p>Bu sayede:</p>
<ul>
    <li>Mobil uygulama ile bağlanabilir</li>
    <li>Bilgisayardan cfClient ile kontrol edilebilir</li>
    <li>Python üzerinden <code>cflib</code> kütüphanesi kullanılarak programlanabilir</li>
</ul>
<p>Bu dokümanda, NeuroFly drone’u Python dili kullanarak kontrol etmeyi öğreneceğiz. Crazyflie tarafından geliştirilen <code>cflib</code>, drone ile haberleşmemizi sağlayan resmi Python SDK’sıdır. Bu kütüphane sayesinde kendi uçuş algoritmalarınızı yazabilir, sensör verilerini okuyabilir ve otonom davranışlar geliştirebilirsiniz.</p>`
                }
            }
        }
    }
};

const portfolioCopy = {
  "en": {
    "nav_software": "Learning path",
    "nav_market": "Catalog",
    "nav_contact": "About",
    "hero_title": "Build your robotics intuition.",
    "hero_desc": "A bilingual learning portal for exploring micro drones, connections, and Python control concepts.",
    "hero_btn_start": "Start learning",
    "about_desc": "NeuroFly brings educational robotics notes into a searchable, bilingual interface. Follow the guides, track your progress, and explore the platform concept.",
    "feat_title": "A clearer path to learning",
    "feat_desc": "Working features in this web prototype.",
    "feat_core_title": "Searchable guides",
    "feat_core_desc": "Find relevant topics across the wiki articles.",
    "feat_stab_title": "Two languages",
    "feat_stab_desc": "Switch between English and Turkish throughout the learning experience.",
    "feat_open_title": "Visible progress",
    "feat_open_desc": "Mark completed modules and continue later in the same browser.",
    "feat_mob_title": "Responsive navigation",
    "feat_mob_desc": "Use the portal on desktop and mobile with keyboard-accessible controls.",
    "feat_mod_title": "Modular interface",
    "feat_mod_desc": "Separate pages for documentation, learning, and the module catalog.",
    "feat_class_title": "Local first",
    "feat_class_desc": "Core pages and graphics work without external font or image services.",
    "cta_title": "Choose your next module.",
    "cta_desc": "Start with the guides and build your own learning path.",
    "cta_btn": "Explore the catalog",
    "footer_desc": "A portfolio prototype for accessible robotics learning."
  },
  "tr": {
    "nav_software": "Öğrenme yolu",
    "nav_market": "Katalog",
    "nav_contact": "Hakkında",
    "hero_title": "Robotik anlayışını geliştir.",
    "hero_desc": "Mikro droneları, bağlantıları ve Python kontrol kavramlarını keşfetmek için iki dilli bir öğrenme portalı.",
    "hero_btn_start": "Öğrenmeye başla",
    "about_desc": "NeuroFly, eğitsel robotik notlarını aranabilir ve iki dilli bir arayüzde bir araya getirir. Rehberleri takip et, ilerlemeni kaydet ve platform fikrini keşfet.",
    "feat_title": "Öğrenmeye daha açık bir yol",
    "feat_desc": "Bu web prototipinde çalışan özellikler.",
    "feat_core_title": "Aranabilir rehberler",
    "feat_core_desc": "Wiki yazıları içinde ilgili konuları bul.",
    "feat_stab_title": "İki dil",
    "feat_stab_desc": "Öğrenme deneyiminde Türkçe ve İngilizce arasında geçiş yap.",
    "feat_open_title": "Görünür ilerleme",
    "feat_open_desc": "Tamamlanan modülleri işaretle ve aynı tarayıcıda kaldığın yerden devam et.",
    "feat_mob_title": "Duyarlı gezinme",
    "feat_mob_desc": "Portalı masaüstü ve mobilde klavyeyle erişilebilir kontrollerle kullan.",
    "feat_mod_title": "Modüler arayüz",
    "feat_mod_desc": "Dokümantasyon, öğrenme ve modül kataloğu için ayrı sayfalar.",
    "feat_class_title": "Yerel çalışma",
    "feat_class_desc": "Temel sayfalar ve grafikler harici yazı tipi veya görsel servisleri olmadan çalışır.",
    "cta_title": "Sıradaki modülünü seç.",
    "cta_desc": "Rehberlerle başla ve kendi öğrenme yolunu oluştur.",
    "cta_btn": "Kataloğu keşfet",
    "footer_desc": "Erişilebilir robotik öğrenimi için bir portfolyo prototipi."
  }
};
for (const lang of Object.keys(portfolioCopy)) Object.assign(resources[lang].translation, portfolioCopy[lang]);

i18n
    .use(initReactI18next)
    .init({
        resources,
        lng: 'en', // default language
        fallbackLng: 'en',
        interpolation: {
            escapeValue: false
        }
    });

export default i18n;
