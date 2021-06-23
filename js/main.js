$(document).ready(function (e) {
    function t(e, t = !1, a = "") {
        var n = "",
            o = "",
            i = "";
        return (
            "manager" === e && (n = '<img class="chat-content-desc-image" src="krit-1.png" alt="" />'),
            t && ((o = "text-" + t), (i = ' class="p' + t + '"')),
            '<div class="chat-content-item ' + e + " " + o + '"><div class="chat-content-desc">' + n + '<div class="chat-content-desc-item ' + e + '"><p' + i + ">" + a + "</p></div></div></div>"
        );
    }
    function a(a) {
        $(".chat-content-buttons-gender").remove(),
            $(".chat-content-list").append(t("user")),
            $(".chat-content-item.user p").html(e.managerDialog[1][a].text),
            $(".chat-content-list").append(t("manager")),
            $(".chat-content-item.manager p").typed({
                strings: [e.managerDialog[2].text],
                showCursor: !1,
                callback: function () {
                    setTimeout(function () {
                        var n, o, r;
                        $(".chat-content-list").append(
                            '<form name="questionForm" class="form"><div class="form-group"><div class="form-group-inline"><select name="day" class="custom-select select-day"><option value="" selected="selected">Day</option>' +
                                (function () {
                                    for (i = e.DateBirthday[0].day[0]; i < e.DateBirthday[0].day[1] + 1; i++) n += '<option value="' + i + '">' + i + "</option>";
                                    return n;
                                })() +
                                '</select></div><div class="form-group-inline full-month"><select name="month" class="custom-select select-month"><option value="" selected="selected">Month</option>' +
                                ($.each(e.DateBirthday[0].month, function (e, t) {
                                    o += '<option value="' + (e + 1) + '">' + t + "</option>";
                                }),
                                o) +
                                '</select></div><div class="form-group-inline year"><select name="year" class="custom-select select-year"><option value="" selected="selected">Year</option>' +
                                (function () {
                                    for (i = e.DateBirthday[0].year[0]; i < e.DateBirthday[0].year[1] + 1; i++) r += '<option value="' + i + '">' + i + "</option>";
                                    return r;
                                })() +
                                "</select></div></div></form>"
                        ),
                            e.Scroll();
                        var c,
                            s = [],
                            d = $('form[name="questionForm"]');
                        d.find("select").addClass("empty_field"),
                            d.find("select").change(function () {
                                if (
                                    (d.find("select").each(function () {
                                        "" != $(this).val() ? $(this).removeClass("empty_field") : $(this).addClass("empty_field"), (s[this.name] = $(this).val());
                                    }),
                                    0 == d.find(".empty_field").size())
                                ) {
                                    d.remove();
                                    console.log(e.MonthVariant);
                                    console.log(e.MonthVariantType);
                                    var n = e.MonthVariantType[s.month - 1],
                                        o = e.MonthVariant[s.month - 1][0],
                                        i = e.MonthVariant[s.month - 1][1],
                                        r = e.MonthVariant[s.month - 1][2];
                                    (c = [s.day, s.month]),
                                        (c = e.getZodiak(c)),
                                        (s.day = s.day.length > 1 ? s.day : "0" + s.day),
                                        (s.month = s.month.length > 1 ? s.month : "0" + s.month),
                                        $(".chat-content-list").append(t("user", "date")),
                                        $(".chat-content-item.user.text-date p").html(s.day + "." + s.month + "." + s.year);
                                        console.log(c);
                                    var l = [],
                                        m = [],
                                        p = { zodie: e.ZodiakName[c - 1].name, date: s.day, month1: o, month2: i, month3: r, year: s.year, number: e.randomIntFromInterval(4, 10) };
                                    $(".chat-content-list").append(t("manager", "birthday"));
                                    var u = e.userZodiak[0].text,
                                        h = e.Replace(u, p);
                                    $(".chat-content-item.manager p").typed({
                                        strings: [h],
                                        showCursor: !1,
                                        callback: function () {
                                            var t = [{ text: e.Replace(e.socNumber[0].text, p) }];
                                            (l = $.merge(e.managerVariants[a][0][0], t)),
                                                (l = $.merge(l, e.managerVariants[a][0][1])),
                                                $.each(l, function (t, a) {
                                                    m.push(e.Replace(a.text, p));
                                                }),
                                                e.LoadListMessages(m, p.zodie);
                                        },
                                    });
                                }
                            });
                    }, 1e3);
                },
            });
    }
    var n = document.querySelector(".country_action").innerHTML,
        o = document.querySelector(".new_price_val").innerHTML,
        r = document.querySelector(".new_price_cur").innerHTML;
    console.log(e.userZodiak),
        (e.randomIntFromInterval = function (e, t) {
            return Math.floor(Math.random() * (t - e + 1) + e);
        }),
        (e.managerDialog = [
            {
                text:
                    "สวัสดีค่ะ! ฉันชื่อ <b style='color: rgb(134, 144, 254);'>หมอช้าง ทศพร ศรีตุลา</b>!<br><br>คำทำนายสำหรับ " +
                    ((d = new Date()), (p = new Date(d.getTime() - 0)), (monthA = "มกราคม,กุมภาพันธ,มีนาคม,เมษายน,พฤษภาคม,มิถุนายน,กรกฎาคม,สิงหาคม,กันยายน,ตุลาคม,พฤศจิกายน,ธันวาคม".split(",")), monthA[p.getMonth()]) +
                    " ของฉันทำให้ คนไทย ทั้งประเทศอึ้งกันไปหมด 3 ราศีจะเริ่มทำเงินได้มากขึ้นในขณะที่ 2 ราศีจะเงินขาดมือ <br><br>ตอบคำถาม 2 ข้อเพื่อรับคำทำนายฟรี.",
            },
            { text: "คุณเป็นผู้ชายหรือผู้หญิง?", m: { text: "ชาย" }, w: { text: "หญิง" } },
            { text: "คุณเกิดเมื่อใด?" },
        ]),
        (e.userZodiak = [{ text: "ขอบคุณ ตามคำทำนาย คุณเป็นคนราศี - {zodie}. <p class='hidden-zodie' style='display: none'>{zodie}</p>" }]),
        (e.managerVariants = {
            w: [
                [
                    [
                        {
                            text:
                                "ราศี {zodie} จะมีการปฏิวัติทางการเงินในอนาคตอันใกล้นี้ แต่ตอนนี้โชคทางการเงินของคุณอยู่ในจุดต่ำสุด คุณปฏิเสธตัวคุณเองในหลายสิ่งหลายอย่าง หนี้สินกำลังตามหลอกหลอนคุณ ตามดวงแล้ว คุณมักจะผลักเงินทองและโชคลาภออกไปจากชีวิตของคุณ ",
                        },
                        { text: "คุณจะไม่สามารถออกไปจากสถานการณ์ที่ย่ำแย่นี้ได้ในปีที่จะมาถึงหากคุณไม่เลือกในสิ่งที่ถูกต้องซึ่งย่อมจะหมายถึงการปฏิวัติทางการเงินนั่นเอง" },
                        { text: "หากคุณอยากจะเลิกยากจนในปี 2564 คุณจะต้องฟังในสิ่งที่ฉันกำลังจะบอกคุณให้ดี" },
                        {
                            text:
                                "ฉันมองเห็นได้อย่างชัดเจนว่า คุณจะมีโอกาสในการเปลี่ยนแปลงทิศทางที่กำหนดใน" +
                                ((d = new Date()), (p = new Date(d.getTime() - 0)), (monthA = "มกราคม,กุมภาพันธ,มีนาคม,เมษายน,พฤษภาคม,มิถุนายน,กรกฎาคม,สิงหาคม,กันยายน,ตุลาคม,พฤศจิกายน,ธันวาคม".split(",")), monthA[p.getMonth()]) +
                                " นี่จะเป็นช่วงเวลาที่ดีในการเปลี่ยนแปลงชีวิตของคุณจากเคราะห์ร้ายให้เป็นโชคดีไปจนสิ้นอายุขัยของคุณ ",
                        },
                        { text: "ไม่มีอะไรในชีวิตของคุณที่เกิดขึ้นโดยบังเอิญ ราศี {zodie} มีความเปราะบางต่อพลังงานที่ไม่ดี คุณจะต้องปกป้องตัวคุณเองและดึงดูดโชคเรื่องเงินทองไปพร้อมกัน " },
                    ],
                    [
                        { text: "<b>วิธีดึงดูดเงินและโชคลาภสำหรับราศีของคุณในปี 2564? </b>" },
                        /*{
                            text:
                                "Сразу хочу вас предупредить, что в вашей ситуации обычные заговоры не помогут. Тут нужно действовать наверняка и смотреть в корень проблемы. Простой заговор не сможет решить вашу проблему, а только ухудшит ситуацию.",
                        },*/

                        { text: "นี่จะเป็นโอกาสสุดท้ายในการเปลี่ยนแปลงโชคชะตาของคุณในปี 2564 หากคุณพลาดเครื่องรางนี้ ชีวิตของคุณจะยังคงเป็นเหมือนเดิมต่อไป คุณคือคนที่ต้องตัดสินใจในเรื่องนี้เอง! " },
                        { text: "ฉันจะช่วยคุณในการดึงดูดเงินทองและโชคลาภให้เข้ามาหาราศีของคุณในปี 2564 หากคุณตกลง คุณจะลืมไปเลยว่า ความจนเป็นอย่างไร ฉันจะปลดปล่อยโชคลาภของคุณที่ถูกกักขังให้คุณเอง" },
                        { text: "ฉันจะสร้างเครื่องรางพิเศษสำหรับคุณ ฉันจะใส่พลังลงไปในเครื่องรางด้วยมนต์วิเศษซึ่งจะทำให้พลังงานด้านมืดของคุณหมดไป" },
                        {text: " <br> <img width='200px' src='img/product.png'> </br> เครื่องรางจะมีลักษณะดังนี้ "},
                        { text: "ทำไมคุณถึงต้องมีเครื่องรางนี้?" },
                        { text: "เครื่องรางนี้จะเปลี่ยนแปลงชีวิตของคุณจากหน้ามือเป็นหลังมือภายในเวลาแค่เดือนเดียว หนี้สินทั้งหมดของคุณจะหมดไป เงินทองจะหลั่งไหลเข้ามาหาคุณจากช่องทางต่างๆ และคุณจะสามารถลืมความล้มเหลวทางการเงิน และจะมีเงินไปตลอดชีวิตที่เหลืออยู่ของคุณ"},
                        {
                            text:
                                'ฉันพยายามช่วยเหลือผู้คนแก้ปัญหาอยู่เสมอ และฉันไม่เคยหากำไรจากการทำเช่นนั้น นั่นจึงเป็นเหตุผลที่จนกระทั่งถึงเดือน ' + ( new Date().getDate() + 1 ) + ' ' +
                                ((d = new Date()), (p = new Date(d.getTime() - 0)), (monthA = "มกราคม,กุมภาพันธ,มีนาคม,เมษายน,พฤษภาคม,มิถุนายน,กรกฎาคม,สิงหาคม,กันยายน,ตุลาคม,พฤศจิกายน,ธันวาคม".split(",")), monthA[p.getMonth()]) + ' คุณจะได้รับส่วนลด 90% สำหรับเครื่องราง ราคาสำหรับคุณจึงจะอยู่ที่ <b>' +
                                '990' +
                                '</b> <b>' +
                                '฿' +
                                " เท่านั้น </b>",
                        },
                        {text: "คุณสามารถสั่งซื้อเครื่องรางได้ในตอนนี้เลย! แค่กรอกชื่อและหมายเลขโทรศัพท์ของคุณลงในแบบฟอร์ม และชีวิตของคุณจะเปลี่ยนแปลงไป ฉันสัญญากับคุณเลย!<br><br> "}
                    ],
                ],
            ],
            m: [
                [
                    [
                        {
                            text:
                                "ราศี {zodie} จะมีการปฏิวัติทางการเงินในอนาคตอันใกล้นี้ แต่ตอนนี้โชคทางการเงินของคุณอยู่ในจุดต่ำสุด คุณปฏิเสธตัวคุณเองในหลายสิ่งหลายอย่าง หนี้สินกำลังตามหลอกหลอนคุณ ตามดวงแล้ว คุณมักจะผลักเงินทองและโชคลาภออกไปจากชีวิตของคุณ ",
                        },
                        { text: "คุณจะไม่สามารถออกไปจากสถานการณ์ที่ย่ำแย่นี้ได้ในปีที่จะมาถึงหากคุณไม่เลือกในสิ่งที่ถูกต้องซึ่งย่อมจะหมายถึงการปฏิวัติทางการเงินนั่นเอง" },
                        { text: "หากคุณอยากจะเลิกยากจนในปี 2564 คุณจะต้องฟังในสิ่งที่ฉันกำลังจะบอกคุณให้ดี" },
                        {
                            text:
                                "ฉันมองเห็นได้อย่างชัดเจนว่า คุณจะมีโอกาสในการเปลี่ยนแปลงทิศทางที่กำหนดใน" +
                                ((d = new Date()), (p = new Date(d.getTime() - 0)), (monthA = "มกราคม,กุมภาพันธ,มีนาคม,เมษายน,พฤษภาคม,มิถุนายน,กรกฎาคม,สิงหาคม,กันยายน,ตุลาคม,พฤศจิกายน,ธันวาคม".split(",")), monthA[p.getMonth()]) +
                                " นี่จะเป็นช่วงเวลาที่ดีในการเปลี่ยนแปลงชีวิตของคุณจากเคราะห์ร้ายให้เป็นโชคดีไปจนสิ้นอายุขัยของคุณ ",
                        },
                        { text: "ไม่มีอะไรในชีวิตของคุณที่เกิดขึ้นโดยบังเอิญ ราศี {zodie} มีความเปราะบางต่อพลังงานที่ไม่ดี คุณจะต้องปกป้องตัวคุณเองและดึงดูดโชคเรื่องเงินทองไปพร้อมกัน " },
                    ],
                    [
                        { text: "<b>วิธีดึงดูดเงินและโชคลาภสำหรับราศีของคุณในปี 2564? </b>" },
                        /*{
                            text:
                                "Сразу хочу вас предупредить, что в вашей ситуации обычные заговоры не помогут. Тут нужно действовать наверняка и смотреть в корень проблемы. Простой заговор не сможет решить вашу проблему, а только ухудшит ситуацию.",
                        },*/

                        { text: "นี่จะเป็นโอกาสสุดท้ายในการเปลี่ยนแปลงโชคชะตาของคุณในปี 2564 หากคุณพลาดเครื่องรางนี้ ชีวิตของคุณจะยังคงเป็นเหมือนเดิมต่อไป คุณคือคนที่ต้องตัดสินใจในเรื่องนี้เอง! " },
                        { text: "ฉันจะช่วยคุณในการดึงดูดเงินทองและโชคลาภให้เข้ามาหาราศีของคุณในปี 2564 หากคุณตกลง คุณจะลืมไปเลยว่า ความจนเป็นอย่างไร ฉันจะปลดปล่อยโชคลาภของคุณที่ถูกกักขังให้คุณเอง" },
                        { text: "ฉันจะสร้างเครื่องรางพิเศษสำหรับคุณ ฉันจะใส่พลังลงไปในเครื่องรางด้วยมนต์วิเศษซึ่งจะทำให้พลังงานด้านมืดของคุณหมดไป" },
                        {text: " <br> <img width='200px' src='img/thai-am.png'> </br> เครื่องรางจะมีลักษณะดังนี้ "},
                        { text: "ทำไมคุณถึงต้องมีเครื่องรางนี้?" },
                        { text: "เครื่องรางนี้จะเปลี่ยนแปลงชีวิตของคุณจากหน้ามือเป็นหลังมือภายในเวลาแค่เดือนเดียว หนี้สินทั้งหมดของคุณจะหมดไป เงินทองจะหลั่งไหลเข้ามาหาคุณจากช่องทางต่างๆ และคุณจะสามารถลืมความล้มเหลวทางการเงิน และจะมีเงินไปตลอดชีวิตที่เหลืออยู่ของคุณ"},
                        {
                            text:
                                'ฉันพยายามช่วยเหลือผู้คนแก้ปัญหาอยู่เสมอ และฉันไม่เคยหากำไรจากการทำเช่นนั้น นั่นจึงเป็นเหตุผลที่จนกระทั่งถึงเดือน ' + ( new Date().getDate() + 1 ) + ' ' +
                                ((d = new Date()), (p = new Date(d.getTime() - 0)), (monthA = "มกราคม,กุมภาพันธ,มีนาคม,เมษายน,พฤษภาคม,มิถุนายน,กรกฎาคม,สิงหาคม,กันยายน,ตุลาคม,พฤศจิกายน,ธันวาคม".split(",")), monthA[p.getMonth()]) + ' คุณจะได้รับส่วนลด 90% สำหรับเครื่องราง ราคาสำหรับคุณจึงจะอยู่ที่ <b>' +
                                '990' +
                                '</b> <b>' +
                                '฿' +
                                " เท่านั้น </b>",
                        },
                        {text: "คุณสามารถสั่งซื้อเครื่องรางได้ในตอนนี้เลย! แค่กรอกชื่อและหมายเลขโทรศัพท์ของคุณลงในแบบฟอร์ม และชีวิตของคุณจะเปลี่ยนแปลงไป ฉันสัญญากับคุณเลย!<br><br> "}
                    ],
                ],
            ],
        }),
        (e.socNumber = [
            {
                text:
                    "หมายเลขศักดิ์สิทธิ์ของคุณคือ 1 นั่นก็หมายความว่า ในวันที่ 1 มกราคม 2564 ชีวิตของคุณจะเปลี่ยนแปลงไปในทางที่ดีขึ้นจากหน้ามือเป็นหลังมือ"
            },
        ]),
        (e.Forms = function (t) {
            e.FormsParams = {
                method: "POST",
                action: "",
                inputs: [
                    { name: "name", value: "", placeholder: "ชื่อจริง", type: "text", required: !0 },
                    { name: "phone", value: "", placeholder: "หมายเลขโทรศัพท์", type: "tel", required: !0 },
                ],
                btn_text: "สั่งซื้อ",
                title: " สั่งซื้อจาก ",
            };
            return function () {
                document.getElementById("cont_form").style.display = "block";
            };
        }),
        (e.getZodiak = function (t) {

            var date = parseInt(t[0]);
            var month = parseInt(t[1]);

                if (month == 2 && date >= 13 || month == 3 && date <= 13) e.zodiak = 1;
                else if (month == 3 && date >= 14 || month == 4 && date <= 12) e.zodiak = 2;
                else if (month == 4 && date >= 13 || month == 5 && date <= 13) e.zodiak = 3;
                else if (month == 5 && date >= 14 || month == 6 && date <= 13) e.zodiak = 4;
                else if (month == 6 && date >= 14 || month == 7 && date <= 14) e.zodiak = 5;
                else if (month == 7 && date >= 15 || month == 8 && date <= 16) e.zodiak = 6;
                else if (month == 8 && date >= 17 || month == 9 && date <= 16) e.zodiak = 7;
                else if (month == 9 && date >= 17 || month == 10 && date <= 16) e.zodiak = 8;
                else if (month == 10 && date >= 17 || month == 11 && date <= 15) e.zodiak = 9;
                else if (month == 11 && date >= 16 || month == 12 && date <= 15) e.zodiak = 10;
                else if (month == 12 && date >= 16 || month == 1 && date <= 13) e.zodiak = 11;
                else if (month == 1 && date >= 14 || month == 2 && date <= 12) e.zodiak = 12;

            return e.zodiak;
        }),
        (e.ZodiakName = [
          {name: "ราศีกุมภ์", id: 1},
                      {name: "ราศีมีน", id: 2},
                      {name: "ราศีเมษ", id: 3},
                      {name: "ราศีพฤษภ", id: 4},
                      {name: "ราศีเมถุน", id: 5},
                      {name: "ราศีกรกฎ", id: 6},
                      {name: "ราศีสิงห", id: 7},
                      {name: "ราศีกันย", id: 8},
                      {name: "ราศีตุลย์", id: 9},
                      {name: "ราศีพิจิก", id: 10},
                      {name: "ราศีธนู", id: 11},
                      {name: "ราศีมังกร", id: 12},
        ]),
        (e.DateBirthday = [{ day: [1, 31], month: ["มกราคม","กุมภาพันธ์","มีนาคม", "เมษายน", "พฤษภาคม", "มิถุนายน", "กรกฎาคม", "สิงหาคม", "กันยายน", "ตุลาคม", "พฤศจิกายน", "ธันวาคม"], year: [2483, 2548] }]),
        (e.MonthVariantType = ["มกราคม","กุมภาพันธ์","มีนาคม", "เมษายน", "พฤษภาคม", "มิถุนายน", "กรกฎาคม", "สิงหาคม", "กันยายน", "ตุลาคม", "พฤศจิกายน", "ธันวาคม"]),
        (e.MonthVariant = {

            1: ["январь", "января", "январе"],
            2: ["февраль", "февраля", "феврале"],
            3: ["март", "марта", "марте"],
            4: ["апрель", "апреля", "апреле"],
            5: ["май", "мая", "мае"],
            6: ["июнь", "июня", "июне"],
            7: ["июль", "июля", "июле"],
            8: ["август", "августа", "августе"],
            9: ["сентябрь", "сентября", "сентябре"],
            10: ["октябрь", "октября", "октебре"],
            11: ["ноябрь", "ноября", "ноябре"],
            12: ["декабрь", "декабря", "декабре"],
        }),
        (e.Scroll = function () {
            $(document).ready(function () {
                !(function (e, t = function () {}, a = []) {
                    (e = jQuery(e)), (t = t.bind(e));
                    var n = -1,
                        o = -1;
                    setInterval(function () {
                        (e.height() == n && e.width() == o) || ((n = e.height()), (o = e.width()), e.parent().animate({ scrollTop: n }, 50), t.apply(null, a));
                    }, 100);
                })(".chat-content-container .chat-content-list", function (e) {}, []);
            });
        }),
        (e.Replace = function (e, t) {
            var a = e;
            return (
                Object.entries(t).forEach((e) => {
                    var t = "{" + e[0] + "}",
                        n = new RegExp(t, "g");
                    a = a.replace(n, e[1]);
                }),
                a
            );
        }),
        (e.LoadListMessages = function (a, n) {
            var o,
                i = 1,
                r = 1,
                c = { showCursor: !1 };
            for (o = a.length; i < o + 1; i++)
                (c.onStringTyped = function () {
                    ++r < o + 1 && ((c.array_id = r), (c.strings = [a[r - 1]]), $(".chat-content-list").append(t("manager", r)), $(".chat-content-item.manager p.p" + r).typed(c), e.Scroll()),
                        r == o + 1 &&
                            setTimeout(function () {
                                $(".chat-content-list").append(e.Forms(n)), e.Scroll();
                            }, 1500); // 1500
                }),
                    1 == i && ((c.array_id = i), (c.strings = [a[i - 1]]), $(".chat-content-list").append(t("manager", i)), $(".chat-content-item.manager p.p" + i).typed(c), e.Scroll());
        }),
        $(window).on("load", function () {
            $(".chat-content-list").append(t("manager")),
                e.Scroll(),
                $(".chat-content-item.manager p").typed({
                    strings: [e.managerDialog[0].text],
                    showCursor: !1,
                    callback: function () {
                        setTimeout(function () {
                            $(".chat-content-list").append(t("manager")),
                                e.Scroll(),
                                $(".chat-content-item.manager p").typed({
                                    strings: [e.managerDialog[1].text],
                                    showCursor: !1,
                                    callback: function () {
                                        setTimeout(function () {
                                            var t;
                                            e.Scroll(),
                                                $(".chat-content-list").append(
                                                    '<div class="chat-content-buttons-gender"><div class="chat-content-buttons-gender-block"><span class="chooseGender" data-type="m">' +
                                                        (t = e.managerDialog[1]).m.text +
                                                        '</span></div><div class="chat-content-buttons-gender-block"><span class="chooseGender" data-type="w">' +
                                                        t.w.text +
                                                        "</span></div></div>"
                                                ),
                                                e.Scroll(),
                                                $(".chooseGender").on("click", function () {
                                                    a($(this).data("type"));
                                                });
                                        }, 1e3);
                                    },
                                });
                        }, 1e3);
                    },
                });
        });
});

function learn_sign() {
    var date = document.form1.day.value;
    var month = document.form1.month.value;

    with(document.form1.znak) {
        if (month == 2 && date >= 13 || month == 3 && date <= 13) value = "ราศีกุมภ์";
        else if (month == 3 && date >= 14 || month == 4 && date <= 12) value = "ราศีมีน";
        else if (month == 4 && date >= 13 || month == 5 && date <= 13) value = "ราศีเมษ";
        else if (month == 5 && date >= 14 || month == 6 && date <= 13) value = "ราศีพฤษภ";
        else if (month == 6 && date >= 14 || month == 7 && date <= 14) value = "ราศีเมถุน";
        else if (month == 7 && date >= 15 || month == 8 && date <= 16) value = "ราศีกรกฎ";
        else if (month == 8 && date >= 17 || month == 9 && date <= 16) value = "ราศีสิงห์";
        else if (month == 9 && date >= 17 || month == 10 && date <= 16) value = "ราศีกันย์";
        else if (month == 10 && date >= 17 || month == 11 && date <= 15) value = "ราศีตุลย์";
        else if (month == 11 && date >= 16 || month == 12 && date <= 15) value = "ราศีพิจิก";
        else if (month == 12 && date >= 16 || month == 1 && date <= 13) value = "ราศีธนู";
        else if (month == 1 && date >= 14 || month == 2 && date <= 12) value = "ราศีมังกร";
        else value = "Неверная дата!";

    }
    $('.lunar-date').text(document.form1.znak.value);
}
