$(function(){
        localStorage.c = (localStorage.c || "0.0");
        localStorage.cad =(localStorage.cad ||  "");
        var t, cont = 1, cl = $("#crono"), li = $("#lista");
        
        function incr(){
            localStorage.c = +localStorage.c + 0.1;
        }
        
        function mostrar()  { 
            cl.html((+localStorage.c).toFixed(1)); 
        };
        
        function arrancar() {
            t=setInterval(function(){incr(); mostrar()}, 100);
        };
        
        function parar()    {
            clearInterval(t);  
            t=undefined;
            localStorage.cad +=  cont + " => " + cl.html() + " segundos <br>";
            li.html(localStorage.cad);
            cont += 1;
        };
        
        function cambiar()  {
            if (!t) 
                arrancar(); 
            else 
                parar();
        };
        
        $("#cambiar").on('click', cambiar);
        
        $("#inicializar").on('click', 
                             function(){ 
                                 if (!t) {
                                     localStorage.c = "0.0";
                                     cl.html("0.0");
                                     li.html("");
                                     localStorage.cad = "";
                                     cont = 1;
                                 }
                                 else {
                                     alert("No se puede inicializar mientras este contando!!!");
                                 }
                                 
                             });
        $("#crono").on('tap',cambiar);
        $("#crono").on('swipe',function(){ 
                                 if (!t) {
                                     localStorage.c = "0.0";
                                     cl.html("0.0");
                                     li.html("");
                                     localStorage.cad = "";
                                     cont = 1;
                                 }
                                 else {
                                     alert("No se puede inicializar mientras este contando!!!");
                                 }
                                 
                             });
    });