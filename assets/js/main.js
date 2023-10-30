const $ = document.querySelector.bind(document);
const $$ = document.querySelectorAll.bind(document);

//Render videos
function renderVideos() {
    const listVideos = [
        {
            linkVideo: './list-videos/video1.html',
            avatar: 'video1.png',
            time: '3:29',
            channelAvatar: 'silvershuu.jpg',
            title: '[Vietsub+ Kara] Clean Bandit - Symphony feat. Zara Larsson // AMV',
            author: 'SilverShuu - Channel D..',
            view: '3,990 回視聴',
            date: '6 年前'
        },
        {
            linkVideo: './list-videos/video2.html',
            avatar: 'video2.jpg',
            time: '2:49',
            channelAvatar: '16typh.jpg',
            title: '16 Typh - Thức Giấc [HIDDEN LUV EP]',
            author: '16 Typh',
            view: '95万 回視聴 ',
            date: '2023/09/17'
        },
    
        {
            linkVideo: './list-videos/video3.html',
            avatar: 'video3.png',
            time: '4:15',
            channelAvatar: 'LOL.jpg',
            title: 'GODS ft. NewJeans(뉴진스)(公式ミュージックビデオ) | Worlds 2023 テーマ曲 - リーグ・オブ・レジェンド',
            author: 'League of Legends',
            view: '2812万 回視聴',
            date: '2023/10/04'
        },
    
        {
            linkVideo: './list-videos/video4.html',
            avatar: 'video4.jpg',
            time: '41:44',
            channelAvatar: 'GAM.jpg',
            title: 'GAM Life at Worlds23 | EP.6: FLU GAME',
            author: 'GAM Esports',
            view: '4027 回視聴',
            date: '46 分前'
        },
        {
            linkVideo: './list-videos/video5.html',
            avatar: 'video5.jpg',
            time: '0:17',
            channelAvatar: 'f8-myfavourite.jpg',
            title: 'F8 có gì mới trong lần trở lại này ?',
            author: 'F8 Official',
            view: '8000 回視聴',
            date: '1か月前'
        },

        {
            linkVideo: './list-videos/video6.html',
            avatar: 'video6.jpg',
            time: '6:35',
            channelAvatar: 'f8-myfavourite.jpg',
            title: 'Lần trở lại này F8 sẽ làm gì cho các bạn? Học lập trình để đi làm tại F8 nào!',
            author: 'F8 Official',
            view: '1.2万 回視聴',
            date: '1か月前'
        },

        {
            linkVideo: './list-videos/video7.html',
            avatar: 'video7.jpg',
            time: '15:44',
            channelAvatar: 'f8-myfavourite.jpg',
            title: 'F8 SẬP? MÌNH ĐÃ FIX NHƯ THẾ NÀO? - FIX BUGS IN THE HOSPITAL',
            author: 'F8 Official',
            view: '2万 回視聴',
            date: '24日前'
        },

        {
            linkVideo: './list-videos/video8.html',
            avatar: 'video8.png',
            time: '34:51',
            channelAvatar: 'f8-myfavourite.jpg',
            title: 'Sinh viên IT đi thực tập cần biết những gì? | Đi thực tập cần chuẩn bị những gì? | Thực tập IT',
            author: 'F8 Official',
            view: '9.8万 回視聴',
            date: '8か月前'
        },



        {
            linkVideo: './list-videos/video9.html',
            avatar: 'video9.jpg',
            time: '4:59',
            channelAvatar: 'K-ICM.jpg',
            title: 'Đi Đi Đi - Xách ba lô lên và đi (Cuộc sống được bao lâu mà bạn phải chờ đợi)',
            author: 'K-ICM Official',
            view: '530万 回視聴',
            date: '3年前'
        },

        {
            linkVideo: './list-videos/video10.html',
            avatar: 'video10.jpg',
            time: '5:30',
            channelAvatar: 'tik_tokNH.jpg',
            title: 'Ngẫu hứng-Bóng Tối Trước Bình Minh Remix (DJ QT Mix) Trai xinh gái đẹp trong Bar',
            author: 'TikTok QT - Dj QT',
            view: '290万 回視聴',
            date: '2年前'
        },

        {
            linkVideo: './list-videos/video11.html',
            avatar: 'video11.jpg',
            time: '5:46',
            channelAvatar: 'HoaNguyen_Official.jpg',
            title: 'Đại Thiên Bồng - Lộ Gia | 大天蓬 - 璐爷 (DJ 阿超 Remix) Cổ Phong Thần Khúc - TikTok',
            author: 'Hoa Nguyễn Official',
            view: '340万 回視聴',
            date: '8か月前'
        },

        {
            linkVideo: './list-videos/video12.html',
            avatar: 'video12.jpg',
            time: '3:32',
            channelAvatar: 'Alan_Walker.jpg',
            title: 'Alan Walker - Faded (Bản nhạc hay nhất thế giới)',
            author: 'Alan Walker',
            view: '310万 回視聴',
            date: '5年前'
        },

        {
            linkVideo: './list-videos/video13.html',
            avatar: 'video13.jpg',
            time: '11:59',
            channelAvatar: 'k+_plus.jpg',
            title: 'WEST HAM - LEICESTER | ANTONIO TỎA SÁNG, BÚA TẠ ĐẬP NÁT BẦY CÁO TẠI LONDON | NGOẠI HẠNG ANH 2021/22',
            author: 'K-plus Sports',
            view: '66万 回視聴',
            date: '1日前'
        },

        {
            linkVideo: './list-videos/video14.html',
            avatar: 'video14.jpg',
            time: '32:42',
            channelAvatar: 'cam_bong_da.jpg',
            title: 'Ngôi đền huyền thoại | LIONEL MESSI (Phần 3)',
            author: 'Cảm bóng đá',
            view: '19.6万 回視聴',
            date: '5日前'
        },

        {
            linkVideo: './list-videos/video15.html',
            avatar: 'video15.jpg',
            time: '8:09',
            channelAvatar: 'tuyen_van_hoa.jpg',
            title: 'TIN TRƯA 7/8 | MESSI VỀ VỚI PSG ĐỂ GIEO ÁC MỘNG CHO MỌI ĐỘI BÓNG TRÊN TOÀN THẾ GIỚI',
            author: 'Tuyền Văn Hóa',
            view: '36万 回視聴',
            date: '18日前'
        },

        {
            linkVideo: './list-videos/video16.html',
            avatar: 'video16.jpg',
            time: '25:58',
            channelAvatar: 'man_nhan_tv.jpg',
            title: 'Khoảnh khắc lịch sử - Messi thâu tóm mọi danh hiệu cá nhân - ăn mừng chức vô địch Copa 2021',
            author: 'MÃN NHÃN TV',
            view: '88.3万 回視聴',
            date: '1か月前'
        },


    ]

    let videos = $('.render-list-videos');
    let video = '';

    for(getVideo of listVideos) {
        video += `
                        <div class="col-3 col-video-mb add-video-translateX product_video-X">
                            <div class="product_video">
                                <a href="${getVideo.linkVideo}" class="product_video-link">
                                    <div class="product_video-img">
                                        <img  src="./assets/img/${getVideo.avatar}" alt="Avatar Video" class="product_video-img-main product_video-img-main-X">
                                        <span class="product_video-img-time">${getVideo.time}</span>

                                        <div class="videos-icon-play">
                                            <i class="bx bx-play"></i>
                                        </div>

                                        <ul class="videos_list-icon-hover">
                                            <li class="videos_item-icon-hover videos_item-icon-hover-time">
                                                <i class="bx bxs-time bxf-time"></i>
                                                
                                                <div class="list-icon-skiing-time">
                                                <span>後で見る</span>
                                                </div>   
                                            </li>

                                            <li class="videos_item-icon-hover videos_item-icon-hover-list-ul">
                                                <i class="bx bx-list-ul bxf-list-ul"></i>

                                                <div class="list-icon-skiing-ul">
                                                <span>保存</span>
                                                </div>
                                            </li>
                                        </ul>

                                        
                                    </div>

                                    <div class="product_video_content">
                                        <div class="product_video-img-user">
                                            <img src="./assets/img/${getVideo.channelAvatar}" alt="Avatar Channel">
                                        </div>

                                        <div class="product_video-description">
                                            <div class="product_video-title">
                                                <h4>${getVideo.title}</h4>
                                            </div>

                                          <div class="product_video-user-channel-content">
                                                <div class="product_video_user-chanel">
                                                    <span class="product_video_user-name">${getVideo.author}</span>
                                                    <span class="product_video_user-verified">
                                                        <i class="bx bxs-check-circle"></i>
                                                    </span>
                                                </div>

                                                <div class="product_video-info">
                                                    <span class="product_video-info-view">${getVideo.view}</span>
                                                    <span class="product_video-info-dot">
                                                        <i class="fas fa-circle"></i>
                                                    </span>
                                                    <span class="product_video-info-date">${getVideo.date}</span>
                                                </div>
                                          </div>

                                            <div class="product_video-option">
                                                <i class="bx bx-dots-vertical-rounded bxf-dots-vertical-rounded-video"></i>
                                            </div>

                                        </div>
                                    </div>
                                </a>
                            </div>
                    </div> 

                  `
    }

    videos.innerHTML = video;
}

renderVideos();

//Khi click vào navbar
const navMenuClick = $('.nav-bar-click');
const sliderBar = $('.slider_bar');
const barChange = $('.btn-click');
const sliderSmall = $('.slider-small');
const containerVideos = $('.container-videos');
const productVideosX = $('.product_videos-total');
const addTranslateX = $$('.add-video-translateX');
const addTranslateImgX = $$('.product_video-img-main');
const scrollWhenClick = $('.slider_container_scroll');
const navBarTransformNextBtn = $('.next-btn');
const navBarFixSlider = $('.container_scroll-list');

//Hiệu ứng nhấp nháy khi người dùng ấn chuột xuống và nhả chuột ra
navMenuClick.onmouseup = () => {
    barChange.classList.add('btn-up');
    barChange.classList.remove('btn-down');
};

navMenuClick.onmousedown = () => {
    barChange.classList.remove('btn-up');
    barChange.classList.add('btn-down');
    
};

navMenuClick.onclick = () => {
    sliderBar.classList.toggle('bar-active');
    sliderSmall.classList.toggle('show-small');


    //Dịch chuyển thanh trượt slider khi click vào navbar
    scrollWhenClick.classList.toggle('scroll-when-click');


    //Dịch chuyển container_scroll-list khi click vào navbar
    navBarFixSlider.classList.toggle('container_scroll-list-fix-navbar');


    //Dịch chuyển nút next-btn khi click vào navbar
    navBarTransformNextBtn.classList.toggle('next-transform-btn');

    
    //fix lại width của container khi click vào navbar
    containerVideos.classList.toggle('container-videos-X');
    productVideosX.classList.toggle('product_videos-total-X');


    addTranslateX.forEach((itemCol) => {
        itemCol.classList.toggle('product_video-X'); //Kiểm tra khi có class này thì thêm vô --> không có thì xóa đi
    });

    addTranslateImgX.forEach((itemImg) => {
        itemImg.classList.toggle('product_video-img-main-X'); //Kiểm tra khi có class này thì thêm vô --> không có thì xóa đi
    })
    
};


//Khi click vào Hiển thị thêm
const sliderBtn = $('#item-js');
const itemChange = $$('.item-change');
const btnDownToUp = $('.bx-chevron-down');
const btnClickHtt = $('.btn_click-htt');

sliderBtn.onclick = () => {
    itemChange.forEach((item) => {
        item.classList.toggle('on');   
    });
    btnDownToUp.classList.toggle('btn-arrow-up'); 

    //Kiểm tra nếu có class btn-arrow-up thì inner 'Ẩn bớt" nếu không có --> thì inner 'Hiển thị thêm'
    const btn_icon_fix = $('.btn-arrow-up')
    if(btn_icon_fix) {
        btnClickHtt.innerHTML = '一部表示t';
    }else {
        btnClickHtt.innerHTML = 'もっと見る'             
    };
}


//When click on microphone
const micClickBtn = $('.header_microphone');
const micBtn = $('.item-mic');
const micModal = $('.modal_mic');
const micOverlay = $('.overlay-mic');
const mic_title = $('.mic_title');
const micBoxWhenClick = $('.mic_box');
const micDescription = $('.mic_description');
const micClose = $('.btn-x');
const barChange2 = $('.btn-click-2')



var SpeechRecognition = SpeechRecognition || webkitSpeechRecognition
const recognition = new SpeechRecognition();

recognition.lang = 'vi-VI';
recognition.continuous = false;

micBtn.onclick = (e) => {
    mic_title.innerHTML = '音声で検索  ';
    mic_title.style.userSelector = 'none';
    e.preventDefault();
    micClickBtn.classList.toggle('mic_click');
    recognition.start();
    micBoxWhenClick.classList.toggle('mic-active');
    micDescription.style.display = 'none'
};


//Listener click on dấu X
micClose.onclick = () => {
    micClickBtn.classList.remove('mic_click');
};

//Listener click on overlay
micOverlay.onclick = () => {
    micClickBtn.classList.remove('mic_click');
};

micBtn.onmouseup = () => {
    barChange2.classList.toggle('btn-up-mic');
    barChange2.classList.remove('btn-down-mic');
};

micBtn.onmousedown = () => {
    barChange2.classList.remove('btn-up-mic');
    barChange2.classList.toggle('btn-down-mic');
    
};

recognition.onspeechend = () => {
    recognition.stop();
};

// recognition.onerror = (err) => {
//   let text = err.type

//   if(text === 'error') {
//     mic_title.innerHTML = 'Tôi chưa nghe rõ.Mời bạn nói lại';
//     micBoxWhenClick.classList.remove('mic-active')
//   }
// }

// recognition.onresult = (e) => {
    
// }


//When click on videos
const iconVideos = $('.item-videos')
const clickVideos = $('.btn-click-3');

iconVideos.onmouseup = () => {
    clickVideos.classList.toggle('btn-up-videos');
    clickVideos.classList.remove('btn-down-videos');
    listVideosDown.addEventListener('mouseup', (e) => {
        e.stopPropagation();
    });

};

iconVideos.onmousedown = () => {
    clickVideos.classList.remove('btn-up-videos');
    clickVideos.classList.toggle('btn-down-videos');
    listVideosDown.addEventListener('mousedown', (e) => {
        e.stopPropagation();
    });

};



//When click on grid
const iconGrid = $('.item-grid')
const clickGrid = $('.btn-click-4');

iconGrid.onmouseup = () => {
    clickGrid.classList.toggle('btn-up-grid');
    clickGrid.classList.remove('btn-down-grid');        
    listGridDown.addEventListener('mouseup', (e) => {
        e.stopPropagation();
    });
};

iconGrid.onmousedown = () => {
    clickGrid.classList.remove('btn-up-grid');
    clickGrid.classList.toggle('btn-down-grid');   
    listGridDown.addEventListener('mousedown', (e) => {
        e.stopPropagation();
    });
    
};



//When click on grid
const iconBell = $('.item-bell')
const clickBell = $('.btn-click-5');

iconBell.onmouseup = () => {
    clickBell.classList.toggle('btn-up-bell');
    clickBell.classList.remove('btn-down-bell');
    listBellDown.addEventListener('mouseup', (e) => {
        e.stopPropagation();
    });
};

iconBell.onmousedown = () => {
    clickBell.classList.remove('btn-up-bell');
    clickBell.classList.toggle('btn-down-bell');
    listBellDown.addEventListener('mousedown', (e) => {
        e.stopPropagation();
    });
};


// when click on videos show list-down
const videoOnClick = $('.item-videos');
const listVideosDown = $('.videos_list-down');
const gridOnClick = $('.item-grid');
const listGridDown = $('.grid_down');
const bellOnclick = $('.item-bell');
const listBellDown = $('.bell_down');
const userOnclick = $('.item-user');
const listUserDown = $('.user_down');
const borderUserClick = $('.border_user-avatar')

videoOnClick.onclick = (e) => {
    listVideosDown.classList.toggle('active');
    listGridDown.classList.remove('active');
    listBellDown.classList.remove('active');
}

//Ngăn chặn sự kiện nổi bọt
listVideosDown.addEventListener('click', (e) => {
    e.stopPropagation();
});

gridOnClick.onclick = () => {
    listGridDown.classList.toggle('active');
    listVideosDown.classList.remove('active');
    listBellDown.classList.remove('active');
};

//Ngăn chặn sự kiện nổi bọt và mặc định của trình duyệt
listGridDown.addEventListener('click', (e) => {
    e.preventDefault();
    e.stopPropagation();
});

bellOnclick.onclick = () => {
    listBellDown.classList.toggle('active');
    listVideosDown.classList.remove('active');
    listGridDown.classList.remove('active');
};

//Ngăn chặn sự kiện nổi bọt
listBellDown.addEventListener('click', (e) => {
    e.stopPropagation();
});

userOnclick.onclick = () => {
    listUserDown.classList.toggle('active');
    listBellDown.classList.remove('active');
    listVideosDown.classList.remove('active');
    borderUserClick.classList.toggle('border_user-click');
};

//Ngăn chặn sự kiện nổi bọt
listUserDown.addEventListener('click', (e) => {
    e.stopPropagation();
});


       
