NUMBER_TEACHERS=4; //Количество представленных учителей
var bgMas=[1,0,0,0];
var bgColor=['#fccfc2','#d6fff0','#f0e5ff','#ffe8cc'];
var windowWidth=window.innerWidth;
if (windowWidth>768) {
    document.getElementById('pers-1').style.backgroundColor = bgColor[0];
}
document.getElementById('quest').style.backgroundColor = bgColor[0];


function removeClass(removeClass) {

    var elem = document.getElementsByClassName(removeClass)[0];
    if(elem!==undefined) {
        var numElem=elem.classList.remove(removeClass);
    }
}

function processingPerson(id_person,id_PersonInfo) {
    if(windowWidth<=1024 && windowWidth>=768)return;
    removeClass('triangle_active');
    removeClass('pi_active');
    for (var i=0;i<4;i++)
        if(bgMas[i]===1){
        bgMas[i]=0;
        break;
        }
    var idPersonOld=document.getElementById('pers-'+(i+1));
        /*Установка цвета фона для не активного элемента*/
        idPersonOld.style.backgroundColor='#fff';
        /*Восстановление эффекта наведения для не активного элемента*/
        idPersonOld.onmouseover=function () {
            this.setAttribute("style","background-color:"+bgColor[i]+";");
        };
        idPersonOld.onmouseout=function () {
            this.setAttribute("style","background-color:#fff;");
        };
    var idPersonNew=document.getElementById(id_person);
    idPersonNew.getElementsByClassName('triangle')[0].classList.add('triangle_active');
    var zInd=id_person.split('-');
    bgMas[zInd[1]-1]=1;//Отметка текущего элемента как активного
    idPersonNew.style.backgroundColor=bgColor[zInd[1]-1];
    idPersonNew.onmouseout=function () {
        this.setAttribute('style','background-color:'+bgColor[zInd[1]-1]+';');
    };

    var idPI=document.getElementById(id_PersonInfo);
    idPI.classList.add('pi_active');

}

/*Переключение раздела с вопросами*/

function removeOldClassQuestion() {
    removeClass('pag_r_active');
    removeClass('pag_g_active');
    removeClass('pag_p_active');
    removeClass('pag_o_active');
    removeClass('quest_cont_active');
}
function prevQuestion() {

    var blokQuest=document.getElementsByClassName('quest_cont_active')[0];
    var indQuest=blokQuest.id.split('-');
    if (indQuest[1]>1){
        pagQuestion(parseInt(indQuest[1])-1);

    }
}
function nextQuestion() {

    var blokQuest=document.getElementsByClassName('quest_cont_active')[0];
    var indQuest=blokQuest.id.split('-');
    if (indQuest[1]<8){
        pagQuestion(parseInt(indQuest[1])+1);

    }
}

function pagQuestion(pagNumber) {
    removeOldClassQuestion();
    var pagActive='';
    var questBlokColor='';
    switch (+pagNumber){
        case 1:
        case 5: pagActive='pag_r_active';
            questBlokColor='bg_red';
        break;
        case 2:
        case 6: pagActive='pag_g_active';
            questBlokColor='bg_green';
        break;
        case 3:
        case 7: pagActive='pag_p_active';
            questBlokColor='bg_purple';
        break;
        case 4:
        case 8: pagActive='pag_o_active';
            questBlokColor='bg_orange';
        break;
    }
    var questBlok=document.getElementById('quest');
    if(questBlok.classList.contains('bg_red'))questBlok.classList.remove('bg_red');
    else if(questBlok.classList.contains('bg_green'))questBlok.classList.remove('bg_green');
    else if(questBlok.classList.contains('bg_purple'))questBlok.classList.remove('bg_purple');
    else if(questBlok.classList.contains('bg_orange'))questBlok.classList.remove('bg_orange');
    questBlok.classList.add(questBlokColor);
    if(pagNumber>4)quest.style.backgroundColor=bgColor[pagNumber-1-4];
    else quest.style.backgroundColor=bgColor[pagNumber-1];
    var questContActive=document.getElementById('questCont-'+pagNumber);
    questContActive.classList.add('quest_cont_active');
    var pagId=document.getElementById('pag-'+pagNumber);
    pagId.classList.add(pagActive);
}
/*Обработчик кнопки отправки*/
function submitButton() {
    var inputName=document.getElementById('name');
    var inputTelephone=document.getElementById('telephone');
    var inputEMail=document.getElementById('email');
    var labelGender=document.getElementById('gender');
    var comments=document.getElementById('comments');
    if(inputName.value!==''&& inputTelephone.value!==''&&
    inputEMail.value!=='') {
        alert(inputName.value + ' ваша заявка принята.\n' +
            'В ближайшее время с вами свяжутся наши операторы!');
    }
    else alert('Заполните ваши контактные данные');
    /*Очистка формы, после отправки заявки*/
    inputName.value='';
    inputTelephone.value='';
    inputEMail.value='';
    labelGender.value='web';
    comments.value='';
}
//Стилизация мобильного меню
function mobileMenu() {
    var headMenu=document.getElementById('menu');
    var checkMobileMenu=document.getElementById('gl_menu');
    if (checkMobileMenu.checked==false){
        headMenu.style.minHeight='330px';
    }
    else {
        headMenu.style.minHeight='75px';
    };
}

/*Переммещение между преподавателями на девайсах с малым разрешением*/
var personPosition=1; //указывает на выбранного преподавателя
function teachers(ind) {
    var lastTeacher=document.getElementById('pers-'+personPosition);
    lastTeacher.classList.add('person_img_visible');
    personPosition+=ind;
    if(personPosition<1)personPosition=NUMBER_TEACHERS;
    else if (personPosition>NUMBER_TEACHERS)personPosition=1;
    var newTeacher=document.getElementById('pers-'+personPosition);
    newTeacher.classList.remove('person_img_visible');
    processingPerson('pers-'+personPosition,'pi-'+personPosition);


}