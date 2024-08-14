$(document).ready(function() {
    function sizeHeight() {
        const sidebarHeader_left        = $(".sidebar-header-left").height();
        const sidebarContainer_left     = $(".container-scroll-left").height();
        const sidebarLeft_sum           = sidebarHeader_left + sidebarContainer_left;

        const sidebarHeader_right       = $(".sidebar-header-right").height();
        const sidebarContainer_right    = $(".container-scroll-right").height();
        const sidebarRight_sum          = sidebarHeader_right + sidebarContainer_right;

        const sidebarHeader_center       = $("#header").height();
        const sidebarContainer_center    = $(".container-scroll-center").height();
        const sidebarCenter_sum          = sidebarHeader_center + sidebarContainer_center;

        $(".container-scroll-left").css("height", sidebarLeft_sum);
        $(".container-scroll-right").css("height", sidebarRight_sum);
        $(".container-scroll-center").css("height", sidebarCenter_sum);

        $(window).resize(function() {
            $(".container-scroll-left").css("height", sidebarLeft_sum);
            $(".container-scroll-right").css("height", sidebarRight_sum);
            $(".container-scroll-center").css("height", sidebarRight_sum);
        });
    }
    sizeHeight();

    function updateToggleButtons() {
        if ($(window).width() > 930) {
            $('.sidebar-left').show();
            $('.overlay-left').hide();
            $('#toggle-left').prop('disabled', true);
            $('#toggle-left').hide();
        } else {
            $('.sidebar-left').hide();
            $('#toggle-left').prop('disabled', false);
            $('#toggle-left').show();
        }

        if ($(window).width() > 1210) {
            $('.sidebar-right').show();
            $('.overlay-right').hide();
            $('#toggle-right').prop('disabled', true);
            $('#toggle-right').hide();
        } else {
            $('.sidebar-right').hide();
            $('#toggle-right').prop('disabled', false);
            $('#toggle-right').show();
        }
    }

    updateToggleButtons();
    $(window).resize(updateToggleButtons);

    $('#toggle-left').click(function() {
        if (!$(this).prop('disabled')) {
            if ($(window).width() <= 930) {
                if ($('.sidebar-right').css('display') == 'block') {
                    $('.sidebar-right').toggle();
                    $('.overlay-right').toggle();
                }
                $('.sidebar-left').toggle();
                $('.overlay-left').toggle();
            }
        }
    });

    $('#toggle-right').click(function() {
        if (!$(this).prop('disabled')) {
            if ($(window).width() <= 1210) {
                if ($('.sidebar-left').css('display') == 'block' && !$('#toggle-left').prop('disabled')) {
                    $('.sidebar-left').toggle();
                    $('.overlay-left').toggle();
                }
                $('.sidebar-right').toggle();
                $('.overlay-right').toggle();
            }
        }
    });

    $('.overlay-left, .close-left').click(function() {
        $('.sidebar-left').hide();
        $('.overlay-left').hide();
    });

    $('.overlay-right, .close-right').click(function() {
        $('.sidebar-right').hide();
        $('.overlay-right').hide();
    });


    var textWrapper = document.querySelector('.containerName .letters');
    textWrapper.innerHTML = textWrapper.textContent.replace(/\S/g, "<span class='letter'>$&</span>");

    anime.timeline({loop: true})
    .add({
        targets: '.containerName .letter',
        rotateY: [-90, 0],
        duration: 1300,
        delay: (el, i) => 45 * i
    }).add({
        targets: '.containerName',
        opacity: 0,
        duration: 100,
        easing: "easeOutExpo",
        delay: 100
    });
    $('.letter').addClass('gradient-text');







    // fetch("https://api.jsonbin.io/v3/qs/66b7a871ad19ca34f894479c").then(function(response) {
    //     return response.json();
    // }).then(function(friends) {
    //     let placeholder = document.querySelector("#side-list");
    //     let out = "";
    //     for(let friend of friends) {
    //         out += `
    //             <div class="user">
    //                 <img src='${friend.avatarLink}' class='user-img'>
    //                 <a class='btn d-flex align-items-center rounded text-white' target='_blank' href='${friend.xatLink}'>
    //                     <div class='username'>${friend.nickname}</div>
    //                 </a>
    //             </div>
    //         `
    //     }

    //     placeholder.innerHTML = out;
    // });

    // Friends
    $.getJSON('https://api.jsonsilo.com/demo/fae06b6f-978b-41e0-b06d-870a68b2338d', function(dataFriendsList) {
        let out = "";
        $.each(dataFriendsList, function(index, item) {
            if (item.id && item.nickname && item.avatarLink && item.xatLink) {
                out += `
                    <div class="user">
                        <img src='${item.avatarLink}' class='user-img'>
                        <a class='btn d-flex align-items-center rounded text-white' target='_blank' href='${item.xatLink}'>
                            <div class='username'>${item.nickname}</div>
                        </a>
                    </div>`;
            } else {
                console.error('');
            }
        });
        $('#side-list').html(out);
    }).fail(function() {
        console.error('');
    });


    function activaTab(tab) {
        $('.nav-tabs a[data-bs-target="#' + tab + '"]').tab('show');
    };
    activaTab('home');


    // Inners
    $.getJSON('https://api.jsonsilo.com/demo/5b2bcb61-216d-4a4a-8546-72fe6f022454', function(dataInnersList) {
        let out = "";
        $.each(dataInnersList, function(index, item) {
            if (item.id && item.backgroundLink && item.description) {
                out += `
                    <div class="col-sm-6 col-md-4 col-lg-3 col-xl-2 mb-4">
                        <div class="card h-100">
                            <a class="overlayLink" target="_blank" href="${item.backgroundLink}"></a>
                            <div class="card-body p-2">
                                <img class="card-img-top img-fluid mb-2" loading="lazy" src="${item.backgroundLink}" alt="">
                                <p class="card-text">${item.description}</p>
                            </div>
                        </div>
                    </div>`;
            } else {
                console.error('');
            }
        });
        $('#inners').html(out);
    }).fail(function() {
        console.error('');
    });


    // Outers
    $.getJSON('https://api.jsonsilo.com/demo/5b2bcb61-216d-4a4a-8546-72fe6f022454', function(dataOutersList) {
        let out = "";
        $.each(dataOutersList, function(index, item) {
            if (item.id && item.backgroundLink && item.description) {
                out += `
                    <div class="col-sm-6 col-md-4 col-lg-3 col-xl-2 mb-4">
                        <div class="card h-100">
                            <a class="overlayLink" target="_blank" href="${item.backgroundLink}"></a>
                            <div class="card-body p-2">
                                <img class="card-img-top img-fluid mb-2" loading="lazy" src="${item.backgroundLink}" alt="">
                                <p class="card-text">${item.description}</p>
                            </div>
                        </div>
                    </div>`;
            } else {
                console.error('');
            }
        });
        $('#outers').html(out);
    }).fail(function() {
        console.error('');
    });


    // PCBacks
    $.getJSON('https://api.jsonsilo.com/demo/5b2bcb61-216d-4a4a-8546-72fe6f022454', function(dataPCBacksList) {
        let out = "";
        $.each(dataPCBacksList, function(index, item) {
            if (item.id && item.backgroundLink && item.description) {
                out += `
                    <div class="col-sm-6 col-md-4 col-lg-3 col-xl-2 mb-4">
                        <div class="card h-100">
                            <a class="overlayLink" target="_blank" href="${item.backgroundLink}"></a>
                            <div class="card-body p-2">
                                <img class="card-img-top img-fluid mb-2" loading="lazy" src="${item.backgroundLink}" alt="">
                                <p class="card-text">${item.description}</p>
                            </div>
                        </div>
                    </div>`;
            } else {
                console.error('');
            }
        });
        $('#pcbacks').html(out);
    }).fail(function() {
        console.error('');
    });
});