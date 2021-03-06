(function(){
    var app = angular.module('pss', ['ngSanitize']);

    app.controller('PostController', function($http) {
        var $that = this;

        $http({
            method : "GET",
            url : "/getPosts"
        }).then(function mySucces(response) {
            $that.posts = response.data.posts;
            console.log('*****************writing response: ');
            console.log(response.data);
        }, function myError(response) {
            $that.posts = [];
            console.log('****************oops in retrieving posts');
        });
    });

    app.controller("PostController2", function() {
        this.posts = [
            {
                title: 'Movie Night (Screening "Hich" by A. Kahani)',
                content: 'PSS is hosting a public screening of "Hich", a movie by Abdolreza Kahani. Join us for this free event in SAC Auditorium (SAC 1.402) at 7:15 pm on Tuesday 4/26.\n\n* The movie is in Farsi, with English subtitle.',
                images: [
                    'images/movies/hich'
                ],
                id: 'id4',
                dir: 'ltr'
            },
            {
                title: 'Nowruz Celebration (عید نوروز)',
                content: 'سال نو داره از راه می‌رسه و چه بهونه‌ای از این بهتر برای دور هم بودن و گفتن و خندیدن و رقصیدن! \n\nساعت ۸ شب شنبه ۲۶ مارچ منتظرتون هستیم تا لحظات پر از شادی رو در کنار هم بسازیم. قسمت اول برنامه رو به گفت و شنود و بازی و خنده اختصاص میدیم و در قسمت دوم مشغول رقص و پایکوبی میشیم. در فاصله بین دو قسمت هم با شام از عزیزان پذیرایی میشه. مثل برنامه‌های قبلی آوردن نوشیدنی‌های الکلی به مراسم آزاد است و به همین دلیل متاسفانه از پذیرایی از افراد زیر ۲۱ سال معذوریم. \n\nهزینه شرکت در برنامه در صورت خرید بلیط تا ساعت ۱۲ شب پنجشنبه ۲۴ مارچ ، ۱۵ دلار برای دانشجویان و ۲۲ دلار برای غیردانشجویان، و بعد از آن (از جمله در محل برگزاری مراسم) ۳۰ دلار برای همه است. برای خرید آنلاین بلیط لطفا مبلغ رو به حساب Paypal گروه (iranians@uts.cc.utexas.edu) واریز کنید. (لطفا از گزینه Send money to friends and family استفاده کنید.) \n\n',
                images: [
                    'images/nowruz/2016/2',
                    'images/nowruz/2016/1'
                ],
                id: 'id3',
                dir: 'rtl'
            },
            {
                title: 'Yalda Night (شب یلدا)',
                content: 'شاید خیلی از ماها هیچ‌وقت کرسی‌ای ندیده باشیم که بخوایم شب ‌چله رو با کرسی به یاد بیاریم. شاید حتی بیشتر به شب یلدا بشناسیمش تا شب چله. ولی هنوزم واسه خیلیامون شب یلدا یعنی دور هم جمع شدن، یعنی شعر و غزل و حافظ، یعنی هندونه و آجیل و انار دون‌شده، یعنی یه دنیا خاطره دوست‌داشتنی و این روزا دور از دسترس. به رسم هر سال، انجمن دانشجویان ایرانی برنامه‌ای سرشار از شعر و موسیقی و رقص رو برای روز شنبه ۱۹ دسامبر تدارک دیده و از همگی شما عزیزان دعوت می‌کنه تا در این جشن شرکت کنید.\n\n\
قسمت اول برنامه (۸ تا ۹:۳۰) رو به شعرخونی و تفأل زدن و گوش دادن به اجرای دوستان هنرمندمون می‌گذرونیم. آجیل و هندونه و انار هم هست که هر چه بیشتر به حال و هوای خاطراتمون از شب یلدا نزدیک بشیم. در قسمت دوم (۱۰ تا ۱۱:۴۵) برنامه بزن و برقص و پایکوبی خواهد بود و در فاصله بین این دو قسمت هم از عزیزان با شام مختصری پذیرایی میشه.\n\n\
هزینه شرکت در برنامه، در صورت خرید بلیط تا ۲۴ ساعت قبل (ساعت ۸ روز ۱۸ دسامبر) ، برای دانشجویان ۷ دلار و برای غیر دانشجویان ۱۰ دلار، و در روز برگزاری برنامه قیمت بلیط برای همگی عزیزان ۱۵ دلار خواهد بود. برای تهیه آنلاین بلیط می‌توانید از طریق PayPal هزینه را به حساب گروه (iranians@uts.cc.utexas.edu) واریز نمایید.\n\n\
در پایان از شما خواهش می‌کنیم تا با در نظر گرفتن نکات زیر به ما در هر چه بهتر برگزار کردن این برنامه کمک کنید:\n\n\
۱- مقدم عموم افراد بالای ۲۱ سال (دانشجو، غیردانشجو، ایرانی، غیر ایرانی، …) رو در این برنامه گرامی می‌داریم. متاسفانه امکان پذیرایی از خردسالان عزیز در این مراسم فراهم نیست.\n\
۲- با خرید زودتر بلیط به ما در تخمین تعداد شرکت‌کنندگان و انجام تدارکات مورد نیاز کمک کنید.\n\
۳- آوردن نوشیدنی‌های الکلی به این مراسم آزاد است. (BYOB)\n\
۴- با توجه به محل برگزاری مراسم و کمبود جای پارک، لطفا تا جای امکان در گروه‌های چند نفره در یک ماشین به مراسم تشریف بیاورید.(carpool)\n\
۵- در صورت پرداخت هزینه بلیط از طریق PayPal، لطفا از گزینه Send money to friends and family برای انتقال وجه استفاده کنید.\n\
۶- لطفا همراه داشتن لبخند رو فراموش نکنید!!! :)',
                images: [
                    'images/yalda/1',
                    'images/yalda/2',
                    'images/yalda/3',
                    'images/yalda/4'
                ],
                id: 'id1',
                dir: 'rtl'
            },
            {
                title: 'Bowling Night',
                content: 'دلتون تنگ شده واسه دیدن دوستاتون؟ واسه کل‌کل کردن چطور؟ پس کفشای بولینگتون رو بپوشید که چند دست بولینگ بزنیم دور هم. کفش بولینگ ندارید؟؟؟ مشکلی نداره، ما هم نداریم، اونجا امانت می‌گیریم.\n\n\
اونجا کجاست؟ Union Underground. کی اونجا باشیم؟ پنج‌شنبه ۲۲ اکتبر (آره، همین پنج‌شنبه)، ساعت ۷ تا ۹ شب.\n\n\
بولینگ دوست ندارید؟ چی؟ واقعا؟؟؟… اشکال نداره. میز بیلیارد و air hockey‌ هم داره اونجا. (البته اینا همه بهانه است، مهم دیدن دوستانه.:) )\n\n\
قیمتش چقدره؟ اینجا می‌تونید لیست قیمتا رو ببینید: \n\n\
https://www.utexas.edu/universityunions/texas-union/scene/underground/facilities-and-rates\n\n\
پس پنج‌شنبه با کلی انرژی بیاید که می‌خوایم حسابی کل‌کل کنیم. و صد البته که لبخنداتون رو جا نذارید، با خودتون بیاریدشون. :)',
                images: [
                'images/bowling/1',
                'images/bowling/2',
                'images/bowling/3',
                'images/bowling/4'
            ],
                id: 'id0',
                dir: 'rtl'
            },
            {
                title: 'Game Night',
                content: 'خسته نشدین از یه هفته درس و کار و تلاش؟ خسته شدین؟ خب، وقتشه که یه چند ساعتی درس و کار رو بیخیال بشیم و دور هم بشینیم بازی کنیم. از پوکر و انواع بازیا با ورق گرفته تا مونوپولی و ستلرز. میز بیلیارد هم هست که استعدادتون تو این زمینه رو نشون بدید. هر بازی دیگه ‌ای هم که دوست دارید بیارید با خودتون (مثلا کسی تخته داره؟‌ تخته بیارید یه کم از اساتید فن بازی یاد بگیرید). جمعه (۹ اکتبر) از ساعت ۶ عصر منتظرتون هستیم. تا ساعت ۸.۵ هم قراره بازی کنیم. کجا؟ تو اتاق بازی جیم دانشگاه(GRE 3.120). دیر نکنید، منتظریم! \n\n \
یه نکته مهم: دوستانی که دانشجو UT نیستن (یا به عبارت دقیقتر مجوز ورود به جیم دانشگاه رو ندارن) لطفا تا ساعت ۴ عصر روز پنج‌شنبه (۸ اکتبر) به ما خبر بدن که میخوان تو این برنامه شرکت کنن. در اون صورت ما هماهنگ می کنیم که بدون پرداخت هزینه‌ای بتونن تو برنامه شرکت کنن، وگرنه این دوستان باید برای ورود به جیم مجوز یک روزه خریداری کنن. \n\n\
\
یه نکته نه چندان مهم: ما می‌خواستیم یه مقادیری بیسکویت و شیرینی تدارک ببینیم که در کنار بازی بخوریم، ولی متوجه شدیم بین خوردن چیزی در اتاق بازی یا داشتن میز بیلیارد باید یکی رو انتخاب کنیم. ما داشتن میز بیلیارد رو انتخاب کردیم، واسه همین تو این برنامه فقط با لبخندامون ازتون پذیرایی می‌کنیم، تا برنامه‌های بعدی که خوردنی هم داشته باشیم واسه پذیرایی. :) \n\n\
\
پس قرارمون جمعه ساعت ۶ عصر. لطفا هر چی بازی باحال دارید بیارید با خودتون، ضرر نداره. منتظر دیدن خنده‌هاتون هستیم.',
                images: [
                    'images/game-night/1',
                    'images/game-night/2',
                    'images/game-night/3',
                    'images/game-night/4',
                    'images/game-night/5',
                    'images/game-night/6',
                    'images/game-night/7'
                ],
                id: 'id2',
                dir: 'rtl'
            }
        ];
    });

    app.controller("NewPostController", function() {
        this.newPost = {};

        this.createNewPost = function() {
            console.log("INANGI");

        };
    });

    app.controller('TabsCtrl', ['$scope', function ($scope) {
            $scope.tabs = [{
                title: 'Home',
                icon: 'fa-home',
                url: 'one.tpl.html'
            }, {
                title: 'About',
                icon: 'fa-users',
                url: 'two.tpl.html'
            }, {
                title: 'Sponsors',
                icon: 'fa-bank',
                url: 'three.tpl.html'
            }];

            $scope.currentTab = 'one.tpl.html';

            $scope.onClickTab = function (tab) {
                $scope.currentTab = tab.url;
            };

            $scope.isActiveTab = function(tabUrl) {
                return tabUrl == $scope.currentTab;
            }
        }]);
})();