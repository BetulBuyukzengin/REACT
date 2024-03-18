# <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg" width="30" height="30" /> `REACT`

Merhaba! Bu depo, React öğrenme serüvenimde oluşturduğum projeleri ve edindiğim bilgileri içeriyor. Şu anki çalışmalarım ve birikimlerim burada bulunuyor, ancak bu serüveni daha da zenginleştirmek ve geliştirmek istiyorum. Projelerimi Visual Studio Code (VS Code) geliştirme ortamında hazırlıyorum. İlerleyen günlerde, yeni projeler ekleyecek, öğrendikçe notlar alacak ve bu serüveni daha da güçlendireceğim.

# React ın kurulumu ile başlayalım:
Öncelikle React projesi oluşturmak veya geliştirmek için Node.js'in yüklü olması gerekmektedir. 
"Vite" ve "Create React App" (CRA) arasında tercih yaparken, projenizin ihtiyaçlarına bağlı olarak karar vermelisiniz.
Projelerinizin ihtiyaçlarına ve öğrenme hedefinize bağlı olarak tercih yapabilirsiniz. Ben öğrenmek amaçlı olarak "Creat React App" ı tercih ederken, gerçek hayat projelerinde "Vite" ı kullanacağım.

## <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg" width="20" height="20" /><a href="https://create-react-app.dev/">`Create-react-app`</a>

"Create React App" olgun ve geniş bir topluluğa ve daha geleneksel bir yapıya sahiptir.<br>
* `create-react-app@latest project_name` komutu ile projemizi oluşturabiliriz.
* Projeyi başlatır: npm start 

## <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/f/f1/Vitejs-logo.svg/410px-Vitejs-logo.svg.png" width="20" height="20"><a href="https://vitejs.dev/">`Vite`</a>
"Vite" hızlı geliştirme ve performans avantajları sunar, yeni bir projedir.
* `npm creat vite@latest` ile proje oluşturabiliriz.
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
* Bir Single Page Application (SPA) içinde sayfa değişikliklerini yönetmek için kullanılan bir kütüphanedir. 
* Router ile farklı URL leri farklı UI görünümleriyle (componentleri) eşleştiririz. Böylece, kullanıcıların tarayıcı URL sini kullanarak farklı uygulama ekranları arasında gezinmesine olanak tanır.
* Tek sayfalı uygulamalar oluşturmamızı sağlar.
* Sayfa içeriği değişirken, React DOM, Virtual DOM üzerinden etkili bir şekilde gerçek DOM'u günceller. Bu, kullanıcıya daha hızlı bir kullanıcı deneyimi sunar, çünkü sadece değişen kısımların güncellenmesi 
  gerekir.
* Kullanıcı arayüzünü geçerli tarayıcı URL siyle senkronize tutar.
* Web API'lerinden veri almak ve bu veriyi kullanarak sayfa içeriğini güncellemek de mümkündür.
* npm i react-router-dom ile kurulum yapılır.
  ### Single Page Application (SPA):
  * Web uygulamalarının geleneksel çok sayfalı yapı yerine tek bir HTML sayfasında yüklenen ve dinamik olarak içeriği değiştiren; istemcide yani kullanıcının web tarayıcısında tamamen yürütülen bir tür
    web uygulama mimarisini ifade eder.
  * SPA'lar, sayfalar arasında geçiş yaparken tarayıcıda tam bir sayfa yeniden yüklemesi yapmazlar. Bunun yerine, React Router gibi yönlendirme kütüphaneleri kullanılarak tarayıcıdaki URL'yi değiştirmek ve 
    uygun React bileşenlerini göstermek suretiyle sayfa içeriğini dinamik olarak güncellerler.
  ### Routes:
  * Bir web uygulamasında belirli URL yolları ile ilişkilendirilen sayfaların veya bileşenlerin tanımlandığı bir kavramdır. Bu, genellikle bir web uygulamasının gezinme yapısını yönetmek ve belirli URL'lere 
  karşılık gelen içeriği göstermek için kullanılır.<br>
  Basitçe Router yapısı (eski versiyon) : <br>
`<BrowserRouter>`<br>
   `<Routes>` <br>
      `<Route path="product" element={<Product />} />`<br>
   `</Routes>`<br>
`</BrowserRouter>`<br>
* Link to ile bileşenleri kullanıcıların farklı sayfalara gitmelerini sağlamak için kullanılır.
* Bu kod proje başladığında veya pathi kontrol paneline eşit olduğunda Kontrol Paneli bileşenine gitmeyi sağlar. Yinelemeleri önlemek için *Navigate* kullanabiliriz.
* `  <Route index element={<Navigate replace to="dashboard" />} />
        <Route path="dashboard" element={<Dashboard />} />`
* ---
### *ROUTER OLUŞTURMANIN YENİ VERSİYONU:*
* App componentimizde createBrowserRouter fonksiyonunu react router dom dan import ettikten sonra route ları oluşturuyoruz.
  * Fonksiyonun içinde objeler dizimizde yönlendirmeyi yaparken *path* ile *element* özelliklerini kullanıyoruz.
   * Path yolu belirtirken, element de componentimize işaret ediyor.
   * İç içe route oluşturmak için children kullanıyoruz. Ve bu child route ları göstermek için `<Outlet/>` componentini import ederek kullanıyoruz.
* RouterProvider a, oluşturduğumuz _createBrowserRouter_ fonksiyonunu prop olarak veriyoruz.

# Performans Optimizasyonu
 * React uygulamalarının performansını optimize etmek için odaklanacağımız 3 ana dal var:
   * Renderların boşa harcanmasını engellemek. (Prevent wasted renders):
    * memo, useMemo, useCallback, elementleri children ya da prop olarak geçmek 
   * Genel uygulama hızını arttırmak. (Improve app speed / responsiveness)
    * useMemo, useCallback, useTransition 
   * Paket boyutunu azaltmak.(Reduce bundle size)
    * 3.taraf kütüphaneler kullanmak , code splitting ve lazy loading (import)
 ---
# REDUX :
 * Bir web uygulamasında global state i yönetmek için kullandığımız 3. taraf kütüphanedir.
 * Uygulamamızdaki tüm global state, global olarak erişilebilen yerde ( globally accessible store) saklanır ve action ile güncellenir. Tıpkı useReducer gibi.
 * Global store güncellenir güncellenmez bazı verileri tüketen tüm react bileşenleri store dan yeniden renderlanacak. (Context api ile useReducer ı birleştirmeye benzer).
 * Redux ı kullanmanın 2 yolu var
   * 1- Classic Redux
   * 2- Modern Redux Toolkit
 * Redux ile küresel durumu güncelleme döngüsü:
   * Bir bileşende bir action oluşturucuyu (action creator function) çağırarak başlıyoruz.
   * Ardından sonuçlanan action, store a ulaşacak. Yani doğru reducerın, action ı alıp güncelleyeceği yer.
   * Daha sonra bu kullanıcı arayüzünün yeniden tetiklenmesini sağlayacak.
   * Buradaki asıl hedef, durum güncelleme mantığını uygulamanın geri kalanından ayrı kılmak.
 * *npm i redux* ile kurulum yapılır.
 * Tıpkı reducer da oluşturduğumuz gibi initialState objesi oluşturuyoruz.
 * Daha sonra reducer fonksiyonu oluşturup parametrelerini *state* ve *action* olarak veriyoruz. useReducerdan farkı, *state i default olarak initial state* e eşitliyoruz.
 * Switch case yapımızı oluşturup her durumu ele alıyoruz. Default olarak error oluşturmak yerine state i döndürüyoruz.
 * createStore u reduxtan import ediyoruz ve çağırıyoruz, parametre olarak da  reducer fonksiyonunu ekliyoruz. `const state=createStore(reducer)`
 * Daha sonrasında, store objesinden dispatch fonksiyonumuzu okuyoruz ve useReducerda olduğu gibi güncelliyoruz (her state için manuel olarak).
 * Aslında manuel olarak yapmaktansa, otomatik olarak bu işlevi gerçekleştirmek için *Action Creators* yapısını kullanabiliriz (Yaptığı tek şey eylemleri geri döndürmek).
 * Oluşturulan birden fazla Reducer fonksiyonunu bir araya getirmek ve kullanmak için bir Root reducer oluşturup, bu değişken üzerinde *combineReducers* fonksiyonunu çağırabiliriz.
   * `const routeReducer = combineReducers({
  account: accountReducer,
  customer: customerReducer,
});
`
* Redux store u react uygulamasıyla bağlamak için öncelikle *npm i react-redux* ı kurmamız gerekiyor.
* React reduxtan *Provider* componentini import edip uygulamamızın tümünü providera saralım, bu işlem context api daki gibi yapılır. Daha sonra oluşturduğumuz *store* yapısını providera prop olarak verelim.
* Redux store dan veri okumak için useSelector() kullanılır. `const customer=useSelector((store)=>store.customer)`.
* React componentlerinin içersinden redux mağazasına action göndermek için useDispatch() kullanılır.
* Bazı api lara asenkron çağrı yaparken reducer ların içerisinde kesinlikle yapamayız. Çünkü reducer ların saf (pure) fonksiyonlar olması gerekir.
* Asenkron bir işlemi component içerisinde yaparak dispatch için kullanabiliriz ama bu da ideal değildir.
* Peki ya store veya componentlerde yapamayacaksak nerede yapacağız? Tam burada devreye *Middleware* giriyor.
* Middleware, action ın gönderilmesi ile  store arasında yer alan bir fonksiyondur
* Gönderdikten (dispatching) sonra güncellenen state, direkt store a gitmek yerine bir ara birime uğrar. Burası *"Redux Thunks"* olarak isimlendirilir ve 3rd party bir pakettir.
* Asenkron tüm işlemler için Thunks kullanalım:
  * 1- `npm i redux-thunk` ile Redux Thunks ı kuralım.
  * 2- Store içerisinde oluşturma.
  *  `const store = createStore(rootReducer, applyMiddleware(thunk));`
  * 3- Action Creator içerisinde kullanma
  # REDUX GELİŞTİRİCİ ARAÇLARI:
    * Chrome eklentisi olarak *redux-devtools* u kuralım.
    * Daha sonra `npm i redux-devtools-extension` ı terminalde yazarak kuralım.
    * Bu paketten {composeWithDevTools} fonksiyonunu store adlı dosyada import edelim.
    * Ve bunu applyMiddleware e saralım. `const store = createStore(
     routeReducer,
     composeWithDevTools(applyMiddleware(thunk))
     );`
  # REDUX TOOLKIT:
    * Redux kodu yazmanın daha modern ve tercih edilen yoludur.
    * Daha az kod yazmamızı sağlar.
    * !!! Reducer içerisinde state'i değiştiren kod yazabiliriz. (Arka planda Immer isimli bir kütüphane tarafından immutable olarak çevirilir).
    * !!! Action Creatorlar otomatik olarak oluşturulur.
    * !!! Otomatik olarak thunk middleware ve devtools setup'u yapılır.
    * `npm i @reduxjs/toolkit` ile kurulum yapalım ve store dosyasında *configureStore* u import edelim.(createStore yerine kullanacağız).
    * configureStore, reducerları otomatik olarak birleştirecek, thunk middleware i otomatik olarak ekleyecek, hatta geliştirici ayarlarını otomatik olarak ayarlayacaktır.

  ---
  # İSTEMCİ (Client) TARAFINDA İŞLEME (CSR) Mİ, (Server) SUNUCU TARAFINDA İŞLEME (SSR) Mİ?

| CSR WITH PLAIN REACT | SSR WITH FRAMEWORK |
|-----------------------|--------------------|
| Tek Sayfalı Uygulamalar (SPA'lar) oluşturmak için kullanılır | Çok Sayfalı Uygulamalar (MPA'lar) oluşturmak için kullanılır |
| Tüm HTML istemcide oluşturulur | Bazı HTML'ler sunucuda işleniyor |
| Uygulamalar çalışmaya başlamadan tüm js in indirilmesi gerekiyor: performans açısından kötü (kalitesiz cihaz, kötü internet bağlantısı var ise) | Daha az JavaScript indirilmesi gerektiğinden daha performanslı |
| Mükemmel bir kullanım örneği: kullanılan uygulamalar Şirket içi araçlar olarak “dahili olarak” tamamen bir girişin arkasına gizlenmiş | React ekibi bu yönde giderek daha fazla ilerliyor |

# STYLED COMPONENTS
* React uygulamalarında kullanılan popüler bir CSS-in-JS kütüphanesidir.
* React bileşenlerini oluştururken herhangi bir harici CSS dosyası oluşturmanıza veya sınıflarla uğraşmanıza gerek kalmadan, js dosyaları içerisinde css style tanımlamalarını yapmamızı sağlar.
* Dinamik stiller oluşturmayı ve bileşenler arasında stil iletimini kolaylaştırmayı sağlar. Bu sayede bileşenlerinizin stilini daha modüler ve okunabilir bir şekilde yönetebilirsiniz.
* `npm i styled-components` ile kurulum yapılır.
* `import styled from "styled-components` ile dosyamıza  import ettikten sonra kullanıma geçebiliriz.
  
 <img src="img/styledComponents.png" alt="styled components ">
 
* `createGlobalStyle` fonksiyonu, bileşen stillerini merkezi bir yerden oluşturmak ve tekrarı azaltmak için kullanılır. Bu, kodun daha düzenli ve bakımı daha kolay olmasını sağlar.
## Styled Components de Esnek Bileşenler ve Varsayılan Özellikler Kullanımı:
 <img src="img/default1.png" alt="default1">
 <img src="img/default2.png" alt="defaul2">

# SUPABASE
* Geliştiricilerin postgres veritabanıyla kolayca arka uç (backend) oluşturmasına olanak tanıyan hizmet.
* Otomatik olarak bir veritabanı ve API oluşturur, böylece sunucudan kolayca veri isteyip alabiliriz.
* Sadece bir API değildir, supabase ayrıca kullanımı kolay kullanıcı kimlik doğrulama ve dosya depolama özellikleriyle birlikte gelir.
* Supabase, SQL tarafından desteklenen, ilişkisel bir veritabanı olan postgres veritabanını kullanmaktadır. Bu tabloları birleştirmek için foreign key kullanılır.

# REACT QUERY
* 
