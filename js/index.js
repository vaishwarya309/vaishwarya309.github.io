$(Document).ready(function() {

    //animating the developer text
    var count = 0;
    developer_animation();

    function developer_animation() {
        setTimeout(function() {
            count++;
            if (count == 1) {
                title = "D";
            } else if (count == 2) {
                title = "De";
            } else if (count == 3) {
                title = "Dev";
            } else if (count == 4) {
                title = "Deve";
            } else if (count == 5) {
                title = "Devel";
            } else if (count == 6) {
                title = "Develo";
            } else if (count == 7) {
                title = "Develop";
            } else if (count == 8) {
                title = "Develope";
            } else if (count == 9) {
                title = "Developer";
            }

            if (count != 10) {
                $('.title').text(`I'm a ${title}`);
                developer_animation();
            } else if (count == 10) {
                count = 0;
                setTimeout(function() {
                    designer_animation();
                }, 1000);
            }
        }, 100);
    }

    //animation for designer
    function designer_animation() {
        setTimeout(function() {
            count++;
            if (count == 1) {
                title = "D";
            } else if (count == 2) {
                title = "De";
            } else if (count == 3) {
                title = "Des";
            } else if (count == 4) {
                title = "Desi";
            } else if (count == 5) {
                title = "Desig";
            } else if (count == 6) {
                title = "Design";
            } else if (count == 7) {
                title = "Designe";
            } else if (count == 8) {
                title = "Designer";
            }


            if (count != 10) {
                $('.title').text(`I'm a ${title}`);
                designer_animation();
            } else if (count == 10) {
                count = 0;
                setTimeout(function() {
                    developer_animation();
                }, 1000);
            }
        }, 100);
    }

    var number = 0;
    start_position: while (true) {
        animates();

        function animates() {

            setTimeout(function() {
                $(".html").animate({ fontSize: "+=50px" }, 500);
                $(".html").animate({ letterSpacing: "+=15px" }, 1000);

                $(".html").animate({ fontSize: "-=50px" }, 500);
                $(".html").animate({ letterSpacing: "-=15px" }, 1000);


                $(".css").animate({ fontSize: "+=50px" }, 500);
                $(".css").animate({ letterSpacing: "+=15px" }, 1000);

                $(".css").animate({ fontSize: "-=50px" }, 500);
                $(".css").animate({ letterSpacing: "-=15px" }, 1000);

                $(".js").animate({ fontSize: "+=50px" }, 500);
                $(".js").animate({ letterSpacing: "+=15px" }, 1000);

                $(".js").animate({ fontSize: "-=50px" }, 500);
                $(".js").animate({ letterSpacing: "-=15px" }, 1000);
            }, 2000)

        }
        number++;

        if (number <= 1000) continue start_position;
        break;

    }


    $('.project_name').text('IOT');
    $('.project_content').text('Internet of Things (IoT) is changed world by partner conventional items together. For occasion, in a general store, all things can be associated with one another, confining a splendid shopping system. In such an IoT system, an unobtrusive radio repeat ID (RFID) tag can be joined to every thing which, when put into a clever shopping bin, can be thusly perused by a truck outfitted with a RFID per client. Along these lines, charging can be coordinated from the shopping bushel itself, shielding customers from holding up in a long queue at checkout. Additionally, sharp racking can be incorporated into this system, outfitted with RFID scrutinizes. Another favorable position of this kind of system is that stock organization swings out to be significantly less difficult, as all things can be normally scrutinized by a RFID examine as opposed to physically sifted by a laborer. To favor the likelihood of such a structure, in this paper we perceive the arrangement requirements of a splendid shopping structure, develop a model structure to test convenience. This is the first run through a brilliant shopping system is thought with security under idea.')
        //Changing project images while clicking next and prev
    var project_count = 1;
    $('.next').click(function() {
        if (project_count == 3) {
            project_count = 0;
        }
        project_count++;
        $('.actual').attr('src', 'img/pic' + project_count + '.jpg');
        if (project_count == 1) {
            $('.project_name').text('pic');
            $('.project_content').text('Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat')
        } else if (project_count == 2) {
            $('.project_name').text('IOT');
            $('.project_content').text('Internet of Things (IoT) is changed world by partner conventional items together. For occasion, in a general store, all things can be associated with one another, confining a splendid shopping system. In such an IoT system, an unobtrusive radio repeat ID (RFID) tag can be joined to every thing which, when put into a clever shopping bin, can be thusly perused by a truck outfitted with a RFID per client. Along these lines, charging can be coordinated from the shopping bushel itself, shielding customers from holding up in a long queue at checkout. Additionally, sharp racking can be incorporated into this system, outfitted with RFID scrutinizes. Another favorable position of this kind of system is that stock organization swings out to be significantly less difficult, as all things can be normally scrutinized by a RFID examine as opposed to physically sifted by a laborer. To favor the likelihood of such a structure, in this paper we perceive the arrangement requirements of a splendid shopping structure, develop a model structure to test convenience. This is the first run through a brilliant shopping system is thought with security under idea.')
        } else if (project_count == 3) {
            $('.project_name').text('Web Development');
            $('.project_content').text('It is the website designed using HTML,CSS and JAVA Script.My Resume is the project name.')
        }


    });

    $('.prev').click(function() {
        if (project_count == 1) {
            project_count = 4;
        }
        project_count--;
        $('.actual').attr('src', 'img/pic' + project_count + '.jpg');
        if (project_count == 1) {
            $('.project_name').text('Project');
            $('.project_content').text('Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat')
        } else if (project_count == 2) {
            $('.project_name').text('IOT');
            $('.project_content').text('Internet of Things (IoT) is changed world by partner conventional items together. For occasion, in a general store, all things can be associated with one another, confining a splendid shopping system. In such an IoT system, an unobtrusive radio repeat ID (RFID) tag can be joined to every thing which, when put into a clever shopping bin, can be thusly perused by a truck outfitted with a RFID per client. Along these lines, charging can be coordinated from the shopping bushel itself, shielding customers from holding up in a long queue at checkout. Additionally, sharp racking can be incorporated into this system, outfitted with RFID scrutinizes. Another favorable position of this kind of system is that stock organization swings out to be significantly less difficult, as all things can be normally scrutinized by a RFID examine as opposed to physically sifted by a laborer. To favor the likelihood of such a structure, in this paper we perceive the arrangement requirements of a splendid shopping structure, develop a model structure to test convenience. This is the first run through a brilliant shopping system is thought with security under idea.')
        } else if (project_count == 3) {
            $('.project_name').text('Web Development');
            $('.project_content').text('It is the website designed using HTML,CSS and JAVA Script.My Resume is the project name.')
        }


    });


});