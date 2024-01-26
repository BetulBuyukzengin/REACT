# `REACT`
<h1>React Nedir? </h1>
<ul>
  <li>React, Facebook tarafından geliştirilen ve kullanıcı arayüzü oluşturmak için kullanılan bir JavaScript kütüphanesidir. </li>
  <li>Bileşen tabanlı bir yapıya sahiptir. Bu sayede, uygulama içinde farklı bileşenler oluşturulabilir ve yönetilebilir. </li>
  <li>React, kullanıcı arayüzüne dinamizm kazandırmak için bileşenleri bir araya getirir. </li>
  <li>Virtual DOM (Sanal DOM) konseptini kullanarak, sayfa performansını artırır ve güncellemelerin daha verimli bir şekilde yapılmasını sağlar.</li>
</ul>

<h2>KURULUM: </h2><br>
<p>Node JS kurulumundan sonra, 
<strong> npm i -g create-react-app </strong> ile react kurulumunu yaptım.</p>  

<h2>Proje oluşturma</h2>
<p><strong>npx create-react-app project_name </strong>(öğrenim aşamasında) komutunu kullanarak proje oluşturdum.
Daha büyük projeleri oluştururken <strong>Vite</strong> ı kullanacağım.
npm start komutuyla oluşturduğum projemi çalıştırıyorum.
(localhost : 3000)</p>


<h3>COMPONENT : </h3><p>Her component, uygulamanın belirli bölümü için içerik görüntülemekten sorumludur. Ve isimlerinin ilk harfi büyüktür.Örn, App.js gibi</p>
<h3>STATE : </h3> <p>Kullanıcının etkileşimiyle değişen değişkenler.</p>
<h3>JSX : </h3> <p> Kullanışlı olduğu ve bileşen oluşturmayı kolaylaştırdığı için kullanıyoruz.</p>
<h3>BABEL : </h3> <p>Tarayıcı jsx i anlamayacağı için babel aracılığıyla js e dönüştürülür.</p>
<h3>WEBPACK : </h3> <p>Tüm farklı dosyaları alır ve tek dosyada bir araya getirir.</p>
<h3>Dev Server : </h3> <p>Projeden  oluşturulmuş dosyaları tarayıcıya sunar</p>


<h3>Teknolojiler</h3>
<p><strong> Reactstrap:</strong> React.js ile kullanılabilen, Bootstrap 4'un React bileşenlerini içeren bir kütüphanedir. (npm i reactstrap)</p>
<p><strong>React developer tools:</strong> Uygulamayı oluşturan componentleri görmemizi ve uygulamaların oluşturulmasında reat ın kullanılıp kullanılmadığının bilgisini almayı sağlar.</p> 
<p> bulma.io: Css lib (npm i  bulma)</p>

## App.js file :Uygulama bileşenini oluşturmakla görevli dosyadır.<br>
## Index.js file: React ve ReactDOM u içeri aktarıldığı dosyadır.Burada App componentini içeri aktaracağız. Root oluşturacağız ve App bileşenini göstereceğiz.<br>
   
<h2>React uygulamasını çalıştırmak için gerekli 5 dosya:</h2>
<ul>
  <li>index.js :Uygulama çalıştığında çalıştırılan ilk dosya</li>
  <li>index.html</li>
  <li>package.json</li>
  <li>package-lock.json</li>
  <li>node modules</li>
</ul>


<h2> index.js içerisine eklememiz gereken kod parçacıkları</h2>
1) React and ReactDOM kütüphanelerini içeri aktarma<br>

`import React from react; ` -> Bileşenin ne old anlayan ve kullanılabilir uygulama oluşt. için birden fazla bileşenin birlikte nasıl çalışacağını bilen kütüphane.<br>
`import ReactDom from 'react-dom/client; `-> Componentleri farklı tarayıcılarda göstermeyi sağlar<br>

2) Kök kimliğine sahip div'e referans alma<br>
`const el =document.getElementById('root');`

3)React'a bu öğenin kontrolünü ele almasını söyler<br>
`const root=ReactDOM.createRoot(el);`

4)Component(bileşen) oluşturma<br>
`function App(){
return <h1>Hi</h1>;
}`

5)Componenti ekranda gösterme<br>
`root.render(<App />);`

<h2>JSX Nedir? </h2>
Ekranda göstermek istediğimizi belirtmek için bileşen içine yazdığımız içeriklerdir.Html ögelerini göstermek için kullanıldığı gibi diğer componentleri göstermek için de kullanılır.<br>
JSX i kullanabilmek için, bir bileşenden döndürmemiz(return) gerekir.<br>
-String ve number değişkenlerini göstermek için <strong>{}</strong>kullanırız.<br>
-Boolean, null ve undefined değerleri nasıl oluşturacağını bilmediği için hiçbir şey GÖSTERMEZ !!!<br>
-Dizilerde ise, içerisindeki virgüller silinir ve tüm elemanlar gösterilir.<br>
-Nesneyi direkt yazdırmaya çalışırsak hata mesajı alırız (h1 gibi etiketler arasına giremez). Ama prop olarak yazdırabiliriz. ( const config={color:'red'} )

`<input abc={config}/>` <br>

- Önceden değişken oluşturup çağrmak yerine küme parantezi içerisinde hesap da yapılabilir. `return <h1> {new Date().toLocaleTimeString()}</h1>`<br>

<h2>PROPS : </h2>

-Parent componentten child componente veri aktarırken `PROP` lar kullanılır.<br>
-Propların, değişken olarak tanımlanması gerekmez. `(inputType="number",minValue=5 )`<br>`<input type={inputType} min={minValue}> ya da <input type="number" min={5}>`<br>

<h2>HTML i JSX e çevirmek için gerekli kurallar: </h2><br>

1- Tüm prop isimleri `camelCase` olmalı.<br>

2- Number lar için `{}` kullanılır.<br>

3- Boolean da true için `prop adını doğrudan` yazabiliriz. False ise, `{}`içerisinde belirtmeliyiz.`<input spellCheck />` || `<input spellCheck={false} />`<br>
4- Class yerine `className` kulanılmalı. `<li className='item' />`<br>
5- Satır içi style özellikleri string olarak değil `obje` olarak veririlir. `<div style={{padding:'5px'}}</div>`<br>



<h2>Bir component oluştururken: </h2>
  - Componentin ilk harfi büyük olalı tabiki şart değil ama diğer geliştiriciler için component olduğunun anlaşıabilirliği için ortak kullanımıdır.<br>
  - JSX döndüren bir fonks. olmalı<br>
  - Daha sonra bileşeni dışarı aktarmalıyız.<br>
  - Bileşenimizi kullanmak istediğimiz dosyaya import etmeliyiz.<br>
  - Son olarak bileşenimizi kullanabiliriz.<br>
   
<h2>Props ile iletişim: </h2>
* JSX elementine özellikler eklenir.<br>
* React, özellikleri toplar ve bunları bir nesneye yerleştirir.<br>
* Props nesnesi, child component fonksiyonunun ilk argümanı olarak görünür.<br>
* Propsları istediğimiz gibi kullanırız.<br>

<h2>Image kullanımı: </h2>
- Eğer bir klasöre ait img kullanılmak isteniyorsa App.js componentine import edilmeli.<br>
- Görüntü 9.7kb dan az ise ham verileri alır, aynı dosyada ele alınır. Fakat 9.7kb dan büyük ise ayrı dosya olarak ele alınır.

<h2>Event System: </h2>
Kullanıcının uygulamamızın içine bir  düğmeye tıklaması, öge yazarken sürüklemesi gibi olayları nasıl algıladığımızdır.<br>
<h2>State System: </h2>
Ekrandaki içeriği nasıl güncelleyebileceğimizdir.<br>

<h3>Uygulamamıza etkinlik eklemeye başlar başlamaz bilmemiz gerekenler: </h3>
<ul>
  <li>1- Ne tür etkinlik izlemek istediğinize karar verin (tıklama, çift tıklama, sürükleme)</li>
  <li>2- Bir fonksiyon oluştur. Bu fonksiyon genelde event handler veya call back fonksiyonu olarak adlandırılır.</li>
  <li>3- Fonksiyona isim verin. Genellikle handle + EventName (örn. handleClick) </li>
  <li>4- Fonksiyonu elemente (div, span, button) prop olarak aktar.</li>
  <li>5- Fonksiyonu geçerli event adı kullanarak ilettiğinden emin ol (onClick, onMouseOver)</li>
  <li>6- Bu fonksiyonları, fonksiyona referans kullanarak aktardığınızdan emin olun.
    Eğer referans olarak aktarmazsak uygulama renderlandığında handleClick fonksiyonu hemen çağırılacaktır fakat biz tıklama olayına göre çağırmak istiyoruz!<br>
    Çok küçük call back fonksiyonu veya event handler aktarmaya çalışıyorsak ayrı fonksiyon oluşturup aktarmak yerine doğrudan satıra yazabiliriz<br>
</ul>
