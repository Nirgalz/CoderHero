 /*déclaration de variables*/
        var scoreHeros = 0;
        var scoreEnnemi = 0;
        var armes = ["a0", "a1", "a2", "a3", "a4", "a5", "a6"];
        var heros = ["h0", "h1", "h2", "h3", "h4"];
        var lieux = ["l0", "l1", "l2", "l3"];
        var win = [1, 2, 3, 2, 4, 1, 2, 3, 2, 4, 1, 2, 3, 2, 4];
        var heroPlayer = [];
        var fight = [];
        /*tableau en cache (à vider à la fin du combat*/
        var armeHero = [];
        var armeEnnemi = [];
        var herosEnnemi = [];
        var nombreClicks = 0;
        /*vars timer*/
        var startS = 0;
        var startM = 0;
        var stopS = 0;
        var stopM = 0;
        var stopMin = 0;


        function selectH(a) {
            heroPlayer.push(heros[a]);
            heros.splice(a, 1);
            document.getElementsByClassName('affichHero')[0].innerHTML = '<img src="herofull/h'+a+'.png"/>';
            document.getElementsByClassName('img_heros_gauche')[0].src = 'heros/h'+a+'.png';
             document.getElementsByClassName('affich_heros_gauche')[0].innerHTML = '<img class="cover"  src="herofull/h'+a+'.png"/>';
            
            finSelect();
        }

        function selectA(a) {
            armeHero.push(armes[a]);
            if (armeHero[0] == armeHero[1]) {
                armeHero.splice(-0, 1);
            }
            document.getElementsByClassName('gauche')[0].src= 'armes/'+armeHero[0]+'.png';
            document.getElementsByClassName('droite')[0].src = 'armes/'+armeHero[1]+'.png';
            document.getElementsByClassName('img_arme_gauche')[0].src= 'armes/'+armeHero[0]+'.png';
            document.getElementsByClassName('img_arme_droit')[0].src= 'armes/'+armeHero[1]+'.png';
            
            
            finSelect();
        }

        function finSelect() {
            if (armeHero.length == 2 && heroPlayer.length == 1) {
                document.getElementById('bouttonStart').style.opacity = 1;
                var puissance = ((parseInt(armeHero[1].charAt(1)) + 1) + (parseInt(armeHero[0].charAt(1)) + 1));
                document.getElementsByClassName('affichResult')[0].innerHTML = 'puisance des armes : '+puissance+'';
                document.getElementsByClassName('armes_gauche')[0].innerHTML += 'puisance des armes : '+puissance+'';
            }
        }

        function start() {
            var d = new Date();
            startS = d.getSeconds();
            startM = d.getMilliseconds();
            startMin = d.getMinutes();
            ennemyGenerator();
        }

        function stop() {
            var d = new Date();
            stopS = d.getSeconds();
            stopM = d.getMilliseconds();
            stopMin = d.getMinutes();
            var timeS = stopS - startS;
            var timeM = stopM - startM;
            var timeMin = stopMin - startMin;
            var time = (timeMin * 60000) + (timeS * 1000) + timeM;
            return time;
        }

        function combat(a) {
            document.getElementById(a).style.backgroundColor="#A52A2A";
            if (a == win[nombreClicks]) {
                fight.push(a);
                nombreClicks++;
                if (nombreClicks == 15) {
                    /*stop() affiche le temps */
                    stop();
                    scoreHeros = Math.floor((((armeHero[1].charAt(1) + 1) + (armeHero[0].charAt(1) + 1) * 10000) / stop()));
                    console.log(stop());
                    /*si gagné ou perdu*/
                    if (scoreHeros >= scoreEnnemi) {
                        winner();
                    } else {
                        loser();
                    }
                }
            } else {
                document.getElementById(win[nombreClicks]).style.backgroundColor="green";

            }
        }


        function ennemyGenerator() {
            /*random du héros*/
            var herosIndex = Math.floor((Math.random() * heros.length));
            herosEnnemi.push(heros[herosIndex]);
            heros.splice(herosIndex, 1);

            /*appel de la fonction random des armes*/
            randomArmes();
            randomArmes();
            scoreEnnemi = Math.floor(((armeEnnemi[0].charAt(1) + 1 + armeEnnemi[1].charAt(1) + 1) * 10000) / 7500);
            var puissanceEnnemi = ((parseInt(armeEnnemi[1].charAt(1)) + 1) + (parseInt(armeEnnemi[0].charAt(1)) + 1));
            /*réinitialisation de la var armes*/
            armes = ["a0", "a1", "a2", "a3", "a4", "a5", "a6"];
            /*affiche des éléments*/
            document.getElementsByClassName('img_portrait_droit')[0].src= 'heros/'+herosEnnemi[0]+'.png';
            document.getElementsByClassName('img_arme_0')[0].src= 'armes/'+armeEnnemi[0]+'.png';
            document.getElementsByClassName('img_arme1_droite')[0].src= 'armes/'+armeEnnemi[1]+'.png';
            
            document.getElementsByClassName('affich_heros_droit')[0].innerHTML = '<img class="cover"  src="herofull/'+herosEnnemi[0]+'.png"/>';
            document.getElementsByClassName('armes_droit')[0].innerHTML += 'puisance des armes : '+puissanceEnnemi+'';
            
            

        }


        /*function random des armes ennemi*/
        function randomArmes() {
            var armeIndex = Math.floor((Math.random() * armes.length));
            armeEnnemi.push(armes[armeIndex]);
            armes.splice(armeIndex, 1);
        }


        /* fonction victoir/defait*/
        function winner() {
            document.getElementById('message').innerHTML = 'Victoir avec ' + scoreHeros + ' contre ' + scoreEnnemi + ' Bien ouéj gros !';
            scoreHeros = 0;
            scoreEnnemi = 0;
            fight = [];
            armeEnnemi = [];
            herosEnnemi = [];
            nombreClicks = 0;
            startS = 0;
            startM = 0;
            stopS = 0;
            stopM = 0;
            stopMin = 0;
        }

        function loser() {
            document.getElementById('message').innerHTML = 'Défaite avec ' + scoreHeros + ' contre ' + scoreEnnemi + ' grosse merde!';
            heros = ["h0", "h1", "h2", "h3", "h4"];
            lieux = ["l0", "l1", "l2", "l3"];
            scoreHeros = 0;
            scoreEnnemi = 0;
            fight = [];
            armeEnnemi = [];
            herosEnnemi = [];
            nombreClicks = 0;
            startS = 0;
            startM = 0;
            stopS = 0;
            stopM = 0;
            stopMin = 0;
            armeHero = [];
        }