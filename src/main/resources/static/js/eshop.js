var box = {};

$('document').ready(function(){
    loadGoods();
    Check_Box();//Проверяем есть ли товары в корзине
    ShowMiniBox();
});


function loadGoods() {
    //загружаем товары на страницу из JSON
    $.getJSON(src="json/goods.json", function (data){
        var out ='';
        for(var key in data){
            out+='<div class="parts">';

            out+='<h2>'+'<i>'+data[key]['name']+'</i>'+'</h2>';
            out+='<h2>Цена: '+'<i>'+data[key]['cost']+'</i>'+'</h2>';
            out+='<img src="'+data[key].img+'">';

            out+='<div class="button_div">';
            out+='<button class="add-To-Box" data-art="'+key+'">Купить</button>';
            out+='</div>';

            out+='</div>';
        }
        $('#for_parts').html(out);
        $('button.add-To-Box').on('click', addToBox);
    });
}

function addToBox() {
    //добавляем товар в корзину
    var article = $(this).attr('data-art');
    if(box[article]!=undefined) {
        //есть ли в массиве товаров такой артикул
            box[article]++;
        }
    else {
            box[article] =1;
        }
    localStorage.setItem('box', JSON.stringify(box));//перевод значения в строку и сохранение его в xранилище
    ShowMiniBox();//выводим измененное значение товаров
}

function Check_Box (){
    //проверяю оставался ли товар в корзине
    if(localStorage.getItem('box') != null){
        box = JSON.parse (localStorage.getItem('box'));//переводим значение обратно в массив
    }
}

function ShowMiniBox(){
    //показываю содержимое корзины
    var out ='';
    for(var key in box){
    out+='<div class="for_ls_parts">';
    out += '<i>Артикул товара:'+key+'   ' +'  Количество:'+ box[key]+'</i><br>';
    out+='</div>';
    }
    $('#for_ls').html(out);//Выводим содержимое корзины
}