var box={};//корзина

$.getJSON(src="json/goods.json",function(data){
          var goods = data;//все товары в массиве
          Check_Box();//проверяем наличие товаров в массиве
          ShowBox();//выводим товары на страницу

    function ShowBox(){
        var out ='';
        //перебираем корзину
        for (var i in box){
                out+='<div class="parts2">';

                out += '<div class ="name_div">';
                out += '<h2>'+'<i>'+goods[i].name+'</h2>'+'</i>';
                out+= '</div>';

                out += '<div class ="del_div">';
                out += '<button class="delete" data-art="'+i+'">Удалить</button>';
                out += '</div>';


                out += '<img src="'+goods[i].img+'">';

                out += '<div class ="cost_div">';
                out += '<h2>'+'<i>'+box[i]*goods[i].cost+'</i>'+'</h2>';
                out += '</div>';

                out += '<div class ="for_plus_and_minus">';
                out += '<button class="minus" data-art="'+i+'">-</button>';//Уменьшение
                out += box[i];
                out += '<button class="plus" data-art="'+i+'">+</button>';//Увеличение количества товаров
                out += '</div>';

                out+='</div>';
            }
        $('#for_parts2').html(out);
        //События кнопок
        $('.plus').on('click', plusGood);
        $('.minus').on('click', minusGood);
        $('.delete').on('click', deleteGood);
}

    function plusGood(){
        var article = $(this).attr('data-art');//определяем, какой товар нужно увеличить
        box[article]++;//увелиение товара
        UpdateBox();
        ShowBox();//перерисовка корзины
    }

    function minusGood(){
        var article = $(this).attr('data-art');//определяем, какой товар нужно
        if(box[article] > 1) {
            box[article]--;//уменьшаем товар
            UpdateBox();
        }
        else  {
            delete box[article];//удаляем товар
            UpdateBox();
        }
        ShowBox();//перерисовка корзины
    }

    function deleteGood(){
        var article = $(this).attr('data-art');//определяем, какой товар нужно удалить
        delete box[article];
        UpdateBox();//сохранение состояния local storage
        ShowBox();//перерисовка корзины
    }
});

function Check_Box (){
    //проверяю оставался ли товар в корзине
    if(localStorage.getItem('box') != null){
        box = JSON.parse(localStorage.getItem('box'));//переводим значение обратно в массив
    }
}

function UpdateBox(){
    localStorage.setItem('box', JSON.stringify(box));//обновление изменений корзины
}