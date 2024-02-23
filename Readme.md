# <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg" width="30" height="30" /> `REACT`

Merhaba! Bu depo, React öğrenme serüvenimde oluşturduğum projeleri ve edindiğim bilgileri içeriyor. Şu anki çalışmalarım ve birikimlerim burada bulunuyor, ancak bu serüveni daha da zenginleştirmek ve geliştirmek istiyorum. Projelerimi Visual Studio Code (VS Code) geliştirme ortamında hazırlıyorum. İlerleyen günlerde, yeni projeler ekleyecek, öğrendikçe notlar alacak ve bu serüveni daha da güçlendireceğim.

# React ın kurulumu ile başlayalım:
Öncelikle React projesi oluşturmak veya geliştirmek için Node.js'in yüklü olması gerekmektedir. 
"Vite" ve "Create React App" (CRA) arasında tercih yaparken, projenizin ihtiyaçlarına bağlı olarak karar vermelisiniz.
Projelerinizin ihtiyaçlarına ve öğrenme hedefinize bağlı olarak tercih yapabilirsiniz. Ben öğrenmek amaçlı olarak "Creat React App" ı tercih ederken, gerçek hayat projelerinde "Vite" ı kullanacağım.

## <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg" width="20" height="20" /><a href="https://create-react-app.dev/">`Create-react-app`</a>

"Create React App" olgun ve geniş bir topluluğa ve daha geleneksel bir yapıya sahiptir.<br>
* **"create-react-app@latest project_name"** komutu ile projemizi oluşturabiliriz.
* Projeyi başlatır: npm start 

## <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/f/f1/Vitejs-logo.svg/410px-Vitejs-logo.svg.png" width="20" height="20"><a href="https://vitejs.dev/">`Vite`</a>
"Vite" hızlı geliştirme ve performans avantajları sunar, yeni bir projedir.
* Projeyi başlatır: npm run dev

| create-react-app | vite |
|----------|----------|
| index.js | main.jsx |
| App.js   | App.jsx  |

## JSX Nedir ve Nasıl Kullanılır:
* Ekranda göstermek istenilenler için kullanırız. HTML benzeri bir yapıdır. Javascript ve XML in birleşimidir. 
* Jsx i kullanışlı olduğu için ve bileşen oluşturmayı kolaylaştırdığı için kullanıyoruz. Tarayıcı jsx i anlayamadığı için Babel aracılığıyla js e dönüştürülür. Webpack, tüm farklı dosyaları alır ve 
tek yerde birleştirir.*
* Tüm prop isimleri camelCase olmalıdır.
* Number lar {} içerisinde verilmeli.
* Boolean proplarda doğru olduğunu ekstra belirtmeye gerek yok. False da ise {} içerisinde belirtmeliyiz.
* Class yerine className kullanılır .
* Satır içi style obje olarak kullanılır.

*React developer tools: Bir geliştirme aracıdır. Chrome a eklenti olarak ekleyerek component tree, states ve birçok durumu kontrol edebilmenizi sağlar.*

## RENDERLAMA:



## CSS Kütüphaneleri
* Bulma.io
* Material UI
* TailwindCSS

# Hooks:
* İşlev bileşenlerine (functional components) state ve diğer React özelliklerini eklemek için kullanılan fonksiyonlardır.
* Hookları kondisyon içine koymamalı ve erken return yapamamalıyız.
  
## useState: 
* Değişkenleri değiştirmek için kullanılır. `const [text, setText]=useState(0)`

## useEffect:
* React fonksiyonel bileşenlerinde yan etkileri (side effects) yönetmek için kullanılan bir Hook'tur. Bileşenin her render işlemi sonrasında çalışır. Bu, bir bileşenin mount (oluşturulma), update (güncelleme), ve unmount (kaldırma) durumlarına tepki verebileceği anlamına gelir. `useEffect(function(){},[])`
 * 3 farklı bağımlılık dizisi türü vardır:
  * useEffect(fn,[x,y,z]); update te çalışır.
  * useEffect(fn,[ ]); sadece mount ta çalışır.
  * useEffect(fn); Sayfa ilk yüklendiğinde çalışır.


## useRef:
 * Renderlar arasında korunmasını istediğimiz her veriyi içine koyabileceğimiz kutu olarak düşünebiliriz.
 * Değeri değişse bile bileşeni yeniden renderlamaz.
 * DOM öğelerini seçmek ve saklamak için kullanılır!
 * Refler sadece event handlers da ve effectlerde görünür.( jsx te değil)
 * State gibi renderlarda kalıcıdır(değerleri hatırlar).
 * State te güncelleme(async) bileşenin yeniden oluşturulmasına neden olur ama ref(sync) te olmaz.
   
## useReducer:
 * Aynı anda birden fazla state güncellemek istediğimizde kullanırız.
 * State güncellemesini dispatch ile tetikleriz.
   
## Router:

