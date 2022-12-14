$(document).ready(function(){
    //상단 햄버거 아이콘 클릭
    let i=0;
    $("header button").click(function(){
        i++;
        if(i == 1) {  //그러면 메뉴를 슬라이드다운으로 보여주고 햄버거아이콘을 닫기아이콘으로 변경
            $("nav").slideDown("slow");  //<nav>가 현재 display:none;되어있는데 내려오면서 보이게(=slideDown)
            $(this).text("close"); //menu아이콘을 close아이콘으로 변경
        }
        else {  //한 번 클릭한 상태에서 또 누르면 i=2가 되는데, 맨 밑에 i=0; 안쓰면 한 번밖에 적용이 안됨
            $("nav").slideUp("slow");
            $(this).text("menu"); //원래 설정으로 돌아오기
            i=0;
        }
    });

    //nav메뉴 항목 클릭
    $("nav li").click(function(){
        $("nav").slideUp("slow");
        $("header button").text("menu");
        i=0;
    });
});