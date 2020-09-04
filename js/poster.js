/*
 * @Descripttion: 
 * @version: 
 * @Author: liuxiangle
 * @Date: 2020-09-02 14:01:59
 * @LastEditors: liuxiangle
 * @LastEditTime: 2020-09-02 14:02:00
 */ 
var pointMsg = $(".pointtxt").val(),
                daiyanMsg = $(".daiyan_msg").html();
            var imgbox = document.getElementById("daiyan_bg"),
                canvas = document.getElementById("myCanvas");
            var ctx = canvas.getContext("2d");
            canvas.width = 750;            
            var imgUrl = new Image,
                qrCodeUrl = new Image,
                point = new Image;
            imgUrl.crossOrigin = "anonymous";
            imgUrl.src = imgbox.src;
            qrCodeUrl.src = "/Resource/4.0/images/201709daiyan/qrcode.jpg";
            point.src = "/Resource/4.0/images/201709daiyan/point.png";
            var daiyan_text = "我要代颜";            
            var btm = document.getElementById("bottom");                
            imgUrl.onload = function () {
                canvas.height = this.height + 50;
                ctx.fillStyle = "#fff";
                ctx.fillRect(0, 0, 750, 1334);
                var erWeiMaY = this.height - qrCodeUrl.height - 70;
                var wyDyY = this.height - 57;
                if (ctx.drawImage(imgUrl, 0, 0, 750, this.height), ctx.beginPath(), ctx.beginPath(), ctx.font = "normal 44px PingFangSC-Medium", ctx.textAlign = "start", ctx.textBaseline = "hanging", ctx.shadowOffsetX = 0, ctx.shadowOffsetY = 5, ctx.shadowColor = "rgba(0, 0, 0, 0.3)", ctx.shadowBlur = 5, "" != pointMsg && void 0 != pointMsg && null != pointMsg) {
                    var pTxt = "我在：" + pointMsg;
                    ctx.fillText(pTxt, 95, offy * 2 + 55);
                    ctx.drawImage(point, 0, 0, 42, 55, 40, offy * 2 + 55, 42, 55);
                }
 
                ctx.beginPath();
                ctx.drawImage(qrCodeUrl, 0, 0, 140, 140, 570, erWeiMaY, 140, 140);
                ctx.drawImage(btm, 0, 0, 750, 50, 0, this.height, 750, 50);
 
                if (ctx.beginPath(), ctx.font = "normal 22px PingFangSC-Medium") {
                    ctx.fillText(daiyan_text, 595, wyDyY);
                }
![](http://images2017.cnblogs.com/blog/688074/201709/688074-20170930143321965-1499864646.jpg)
 
 
                if (ctx.beginPath(), ctx.font = "normal 30px PingFangSC-Medium", ctx.shadowOffsetX = 0, ctx.shadowOffsetY = 5, ctx.shadowColor = "rgba(0, 0, 0, 0.3)", ctx.shadowBlur = 5) {
                    ctx.fillText(daiyanMsg, 95, offy * 2 + 130);
                }
 
                document.getElementById("daiyan_bg1").src = canvas.toDataURL('image/jpeg');
 
                $(".page2").hide().siblings(".page3").show();
 
                $.post(url, { base64_string: canvas.toDataURL('image/jpeg') }, function (res) { }, "json");    //记录用户生成的海报信息
 
                var tipTop = this.height / 4 - 47;
                $(".save_tip").show().css("top", tipTop);
                setTimeout(function () {
                    $(".save_tip").hide();
                }, 3000);               
            };
