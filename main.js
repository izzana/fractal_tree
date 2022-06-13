var myCanvas = document.getElementById("my_canvas");//referenciando ao canvas que criei no html
        var ctx = myCanvas.getContext("2d");//dando o contexto de 2D para o meu Canvas
        function draw(starX, starY, len, angle) {
            ctx.beginPath();
            ctx.save();

            ctx.translate(starX, starY);//estou adicionando uma transformação de tradução à matriz atual, movendo a tela e sua origem na posição X e Y que irei receber, e consequentemente mudando o centro de rotação 
            ctx.rotate(angle * Math.PI/180);//método para rotacionar a reta criada inicialmente , como segundo argumento passamos a função matemática para calcular um radiano(pois por padrão o ângulo é um radiano) a partir de um grau
            ctx.moveTo(0, 0);
            ctx.lineTo(0, -len);
            ctx.strokeStyle = "purple";
            ctx.stroke();//adicionar cor depois(contorno)

            //caso queira altere o valor do if
            if(len < 10) { //condicional que checa se o tamanho(len), passado como parâmetro na linha 12, é menor que 10, caso o tamanho seja ele ira salvar a forma desenhada, esse if é o caso base para não ficar infinito
                ctx.restore();//método que restaura o estado da tela que foi salvo por último
                ctx.strokeStyle = "red";
                ctx.stroke();   
                return;//quebra a cadeia quecursiva quando o len(tamanho) passado (em pixels) é menor que 10
            }


            draw(0, -len, len*0.9, -8);//estou chamando de forma recursiva a mesma função, mas passando um len menor
            draw(0, -len, len*0.9, +8);//os primeiros parâmetros são 0 e -len pois eles são passados para o translate, que é acumulativo e muda o eixo da posição   
            ctx.restore();
        }
    draw(500, 800, 80, 0); //passando os argumentos, como valor de x, y, tamanho e ângulo de rotação
