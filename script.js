const addForm = document.querySelector('.add'); // 1. add formu queryselector ile seçiyoruz.
const list = document.querySelector('.todos'); // 7. list değişkeni ile .todos classımı da seçiyorum. çünkü indexde ul tagını .todos classı simgeliyor.
const search = document.querySelector('.search input'); // * önce search classı içindeki inputa ulaşıyoruz.


const generateTemplate = todo => { // 5. genereateTemplate diye bir arrowFunction değişkeni oluşturduk. 
    // ve todo ya eşitledik ki yapılacaklar listemize ekleme yapmamızı bu sayede olacak.
    // buraya html için string ifade yazacağız bu yüzden.
    const html = `
    <li class="list-group-item d-flex justify-content-between align-items-center">
        <span>${todo}</span>
        <i class="far fa-trash-alt delete"></i>
    </li>
    `; // 6. html adında bir değişken tanımladık ve indexteki <li></li> tagları arasındaki kodları buraya yapmıştırdık.
    list.innerHTML +=html; // 8. olarak listeme html değişkeninde yazdığım string ifadelerimi bas diyorum.
}


addForm.addEventListener('submit' , e => {  // 2. addformu addevent listener ile submit parametresini veriyoruz ve arrow funcktion ile dönüyoruz. 
    e.preventDefault(); // 3. sayfa yenilenmesin diye eventimiz olan e harfine preventDefault veriyhoruz.
    const todo = addForm.add.value.trim(); // 4. todo (yapılacaklar ) diye bir değişkenin oluşturuyoruz ve bunu addFroma eşitliyoruz
    // .add class'ının name add olduğu için value sunu alıyoruz. name.value demek ( yapılacak olan işin ekrana yazıldığındaki değeri demek)
    // .trim yazıyı yazarken arkasına ve önüne boşluk gelmemesini sağlıyoruz. 
    // console.log(todo);
    if(todo.length) // 9. olarak eğer todo bir karakter uzunluğu yoksa yani boşsa true döneceği için 
    {
        generateTemplate(todo); // 10. entera basıp ekleme işlemi yaptığımda boş döndür ve ekrana birşey basma
        addForm.reset(); // ekleme işlemi bittikten sonra addForm u yenile ki eski yazdığım şeyler oradan silinsin.
    }   
})
    
list.addEventListener('click', e => {  // list değişkenini addEventListener ile click metodunu veriyoruz arrowFunction ile dönüyoruz ve
    if(e. target.classList.contains('delete')) // contains : içeriyorsa demek --> diyoruz ki eğer e.ile seçtiğimiz list elemanı içinde delete diye bir class varsa
    // ki burada var ve buda bizim çöp kutusu iconumuz "delete classı ile belirtilmiş"
    {
        e.target.parentElement.remove(); // çöp kutusuna tıkladığımızda delete classının parent elementi olan li yi sil diyoruz.
    }
})
    
const filterTodos = term => { // filterTodos su term eşitleyip arrowFunction ile yazıyorum. term= ara kısmına yazdığımız değer.
    // console.log(term);
    // console.log(list.children);
    // console.log(Array.from(list.children));
    
    Array.from (list.children) // forEach metodu dönmek için array.from ile listin alt elemanlarına ulaşıyorum. yani span tagına
    .filter(todo => !todo.textContent.toLowerCase().includes(term)) //.filter ile her bir li etiketi için isim veriyoruz todo olarak isim verdik ve içindeki yazıyo kontrol etmek için textContent.inclodus metodu ile benim değerimi içeriyor mu içermiyor mu diye kontrol edicem. 
                    /* eğer başına gelip (!) koyarsam içermiyorsa olur */    
    .forEach(todo => todo.classList.add('filtered'));

    Array.from (list.children)
    .filter(todo => todo.textContent.includes(term))
    .forEach(todo => todo.classList.remove('filtered'));
}

search.addEventListener('keyup', () => { // * search değişkenini keyup eventi ekliyorum ve arrow function oluşturuyorum.
    const term = search.value.trim().toLowerCase(); // * ara kısmına yazdığım değerlere ulaşmam gerekiyor bunun için de yeni bir değişken oluşturuyorum.
    // term adında bir değişken oluşturuyorum searh inputa tekabul ediyor. value ile de girdiğim değere ulaşıyorum. trim ile de sağ sol boşlukları kaldırıyorum. toLowerCase ise büyük küçük uyumu ile ilgili
    // console.log(term);
    filterTodos(term); // eğer todo (yapılacaklar) listemin içinde yazdığım kelimeler varsa göstericez yoksa göstemiycez bu yüzden "filterTodos" metodunu oluşturuyrz.
})