# REACT
<h1>React Nedir? </h1>
* React, Facebook tarafından geliştirilen ve kullanıcı arayüzü oluşturmak için kullanılan bir JavaScript kütüphanesidir.<br>
* Web uygulamaları geliştirmek için kullanışlıdır.<br>
* Bileşen tabanlı bir yapıya sahiptir. Bu sayede, uygulama içinde farklı bileşenler oluşturulabilir ve yönetilebilir.<br>
* React, kullanıcı arayüzüne dinamizm kazandırmak için bileşenleri bir araya getirir. <br>
Virtual DOM (Sanal DOM) konseptini kullanarak, sayfa performansını artırır ve güncellemelerin daha verimli bir şekilde yapılmasını sağlar. <br>
* React, JSX adı verilen bir yapı kullanır; bu yapı, JavaScript içinde HTML benzeri kod yazılmasına olanak tanır, böylece bileşenler daha okunabilir ve geliştirici dostu olur.<br>
*Html ögelerini göstermek için kullanıldığı gibi diğer componentleri göstermek için de kullanılır.<br>

<h1>KURULUM: </h1><br>
* Node JS kurulumundan sonra, npm i -g create-react-app

<h1>Proje oluşturma</h1>
* npx create-react-app project_name <br>
*cd jsx (jsx e girilir) ve ardından npm start ile başlatılır.<br>
*localhost:3000<br>

*Her component, uygulamanın belirli bölümü için içerik görüntülemekten sorumludur. Ve isimlerinin ilk harfi büyüktür.Örn, App.js-Language.js gibi<br>
* STATE:Kullanıcının etkileşimiyle değişen değişkenler.<br>
* JSX: Kullanışlı olduğuve bileşen oluşturmayı kolaylaştırdığı için kullanıyoruz.<br>
* BABEL: Tarayıcı jsx i anlamayacağı için babel aracılığıyla js e dönüştürülür.<br>
* WEBPACK, tüm farklı dosyaları alır ve tek dosyada bir araya getirir.<br>

<h3>Teknolojiler</h3>
* Reactstrap :React.js ile kullanılabilen, Bootstrap 4'un React bileşenlerini içeren bir kütüphanedir. (npm i reactstrap) <br>
* React developer tools: Uygulamayı oluşturan componentleri görmemizi ve uyugamaların oluşturulmasında reat ın kullanılıp kullanılmadığının bilgisini almayı sağlar.<br>
*bulma.io :Css lib  (npm i  bulma ile kurulum yaptıktan sonra import etmeliyiz.)

<h2>React uygulamasını çalıştırmak için gerekli 5 dosya:</h2>
-index.js :Uygulama çalıştığında çalıştırılan ilk dosya<br>
-index.html<br>
-package.json<br>
-package-lock.json<br>
-node modules<br>


*index.js içerisinde:<br>
//1) Import the React and ReactDOM libraries<br>
import React from 'react';  ---> Bileşenin ne old anlayan ve kullanılabilir uygulama oluşt. için birden fazla bileşenin birlikte nasıl çalışacağını bilen kütüphane.<br>
import ReactDom from 'react-dom/client';  ---> Componentleri farklı tarayıcılarda göstermeyi sağlar<br>

//2) Get a reference to the div with ID root <br>
const el =document.getElementById('root');

//3) Tell React to take control of that element<br>
const root=ReactDOM.createRoot(el);

//4) Create a component<br>
function App(){
return <h1>Hi</h1>;
}

//5) Show the component on the screen<br>
root.render(<App />);

<h2>JSX Nedir? </h2>
Ekranda göstermek istediğimizi belirtmek için bileşen içine yazdığımız şeydir.<br>
JSX i kullanabilmek için, bir bileşenden döndürmemiz(return) gerekir.<br>
-String ve number değişkenlerini göstermek için {} kullanırız.<br>
-Boolean, null ve undefined değerler nasıl oluşturacağını bilmediği için hiçbir şey GÖSTERMEZ !!!<br>
-Dizilerde ise, içerisindeki virgüller silinir ve tüm elemanlar gösterilir.<br>
-Nesneyi direkt yazdırmaya çalışırsak hata mesajı alınız(etiketler arasına giremez h1 gibi). Ama prop olarak yazdırabiliriz. ( const config={color:'red'} ) <input abc={config}/> <br>

- Önceden değişken oluşturup çağrmak yerine küme parantezi içerisinde hesap da yapılabilir. return <h1> {new Date().toLocaleTimeString()}</h1><br>

-Ebeveyn component ten child componente veri aktarırken PROPS lar kullanılır.<br>
-Propsların, değişken olarak tanımlanması gerekmez. (inputType="number",minValue=5 ) <input type={inputType} min={minValue}> ya da <input type="number" min={5}><br>
<h2>HTML i JSX e çevirmek için gerekli kurallar: </h2><br>
1- Tüm prop isimleri camelCase olmalı.<br>
2- Number lar için {} kullanılır.<br>
3- Boolean da true için prop adını doğrudan yazabiliriz.False ise, {} içerisinde belirtmeliyiz. <input spellCheck />  <input spellCheck={false} /><br>
4- Class yerine className kulanılmalı. <li className='item' /><br>
5- Satır içi style özellikleri string olarak değil obje olarak veririlir. <div style={{padding:'5px'}}</div><br>

  <h3>Karmaşık bir yapı kullanmamak adına 2 dosya oluşturacağız:<h3><br>
   - App.js file :Uygulama bileşenini oluşturmakla görevli.<br>
   - Index.js file: React ve ReactDOM u içeri aktaracağız. App componentini içeri aktaracağız. Root oluşturacağız ve App bileşenini göstereceğiz.<br>

*Bir component oluştururken:<br>
   - Componentin ilk harfi büyük olalı tabiki şart değil ama diğer geliştiriciler için component olduğunun anlaşıabilirliği için ortak kullanımıdır.<br>
   - JSX döndüren bir fonks. olmalı<br>
   - Daha sonra bileşeni dışarı aktarmalıyız.<br>
   - Bileşenimizi kullanmak istediğimiz dosyaya import etmeliyiz.<br>
   - Son olarak bileşenimizi kullanabiliriz.<br>
   
<h2>Props ile iletişim</h2>
* JSX elementine özellikler eklenir.<br>
* React, özellikleri toplar ve bunları bir nesneye yerleştirir.<br>
* Props nesnesi, child component fonksiyonunun ilk argümanı olarak görünür.<br>
* Propsları istediğimiz gibi kullanırız.<br>

Dev Server: Projeden bazı oluşturulmuş dosyaları tarayıcıya sunar.<br>

<h2>Image kullanımı:</h2>
*Eğer bir klasöre ait img kullanılmak isteniyorsa App.js componentine import edilmeli.<br>
*Görüntü 9.7kb dan az ise ham verileri alır ,aynı dosya da ele alınır. Fakat 9.7kb dan büyük ise ayrı dosya olarak ele alınır.

<h2>Event System:</h2>
*Kullanıcının uygulamamızın içine bir  düğmeye tıklamak, öge yazarken sürüklemek gibi olayları nasıl algıladığımızdır.<br>
<h2>State System:</h2>
*Ekrandaki içeriği nasıl güncelleyebileceğimizdir.<br>

<h3>Uygulamamıza etkinlik eklemeye başlar başlamaz bilmemiz gerekenler:</h3>
<ul>
  <li>1-Ne tür etkinlik izlemek istediğinize karar verin(tıklama,çift tıklama,sürükleme)</li>
  <li>2- Bir fonksiyon oluştur. Bu fonk genelde event handler veya call back func. olarak adlandırılır.</li>
  <li>3- Fonksiyona isim verin. Genellikle handle + EventName (örn. handleClick) </li>
  <li>4- Fonksiyonu elemente(div, span, button) prop olarak aktar.</li>
  <li>5- Fonksiyonu geçerli event adı kullanarak ilettiğinden emin ol(onClick,onMouseOver)</li>
  <li>6- Bu fonksiyonları fonksiyona referans kullanarak aktardığınızdan emin olun.
    Eğer referans olarak aktarmazsak uygulama renderlandığında handleClick fonksiyonu hemen çağıralacaktır fakat biz tıklama olayına göre çağırmak istiyoruz!<br>
    Çok küçük call back fonksiyonu veya event handler aktarmaya çalışıyorsak ayrı fonksiyon oluşturup aktarmak yerine doğrudan satıra yazabiliriz<br>
</ul>
