<template>
    <div id="content">
        <div class="banner-ld" ng-controller="clgkbanner">
            <img src="https://ts-1305062858.cos-website.ap-nanjing.myqcloud.com/pic24.png" width="100%">
        </div>
        <div class="ui" id="cndl">
            <div class="mainbox-ld ng-scope" ng-controller="cndl">
                <div class="title-ld">
                    <div class="title-1 ng-binding">到村路线</div>
                </div>
                <div class="text-ld width-ld fl-ld"><p ng-bind-html="content|to_trusted " class="ng-binding">
                    <p class="te">1.&nbsp;公共交通："在苹果园地铁站乘坐929路支线公共汽车在斋堂镇下车，然后再乘出租车到马栏村。<br><br>2.&nbsp;自驾线路：北京城区阜石路或莲石路到门头沟，再沿109国道到斋堂镇附近85公里处，见马栏村路牌向左行使即可到达。<br></p>
                </div>
                <div class="s-banner fr-ld" style=" padding-top:26px">
                    <imgqh data="imgs" class="ng-isolate-scope"><div class="swiper-container swiper-container-horizontal">
                        <ul class="swiper-wrapper">
                            <!-- ngRepeat: item in data --><!-- ngIf: $index<5 --><li class="swiper-slide ng-scope swiper-slide-active" ng-repeat="item in data" ng-if="$index<5" style="width: 422px;">
                            <img src="https://ts-1305062858.cos-website.ap-nanjing.myqcloud.com/pic9.jpg" style="border: 1px solid #d3d3d3;">
                        </li><!-- end ngIf: $index<5 --><!-- end ngRepeat: item in data -->
                        </ul>
                        <div class="swiper-pagination swiper-pagination-clickable swiper-pagination-bullets"><span class="swiper-pagination-bullet swiper-pagination-bullet-active"></span></div>
                    </div></imgqh>
                </div>
                <div class="clear"></div>
            </div>
        </div>
       <!-- <div class="ui" id="cndl1">
            <div class="mainbox-ld ng-scope" ng-controller="cndl">
                <div class="title-ld">
                    <div class="title-1 ng-binding">村内导览</div>
                </div>
                <div class="text-ld width-ld fl-ld"><p ng-bind-html="content|to_trusted" class="ng-binding"><p>1.&nbsp;红色纪念区游览线<br>挺进军路——冀热察挺进军陈列馆——红色讲解区——小延安红色创意街——演绎戏台——大食堂——革命之路<br><br>2.&nbsp;村域游览线<br>观光休闲新村——红色观光纪念园——红色拓展体验园——马栏休闲森林公园<br></p></p> </div>
                <div class="s-banner fr-ld" style=" padding-top:26px">
                    <imgqh data="imgs" class="ng-isolate-scope"><div class="swiper-container swiper-container-horizontal">
                        <ul class="swiper-wrapper">
                            &lt;!&ndash; ngRepeat: item in data &ndash;&gt;&lt;!&ndash; ngIf: $index<5 &ndash;&gt;<li class="swiper-slide ng-scope swiper-slide-active" ng-repeat="item in data" ng-if="$index<5" style="width: 422px;">
                            <img src="../assets/pic8.jpg" style="border: 1px solid #d3d3d3;">
                        </li>&lt;!&ndash; end ngIf: $index<5 &ndash;&gt;&lt;!&ndash; end ngRepeat: item in data &ndash;&gt;
                        </ul>
                        <div class="swiper-pagination swiper-pagination-clickable swiper-pagination-bullets"><span class="swiper-pagination-bullet swiper-pagination-bullet-active"></span></div>
                    </div></imgqh>
                </div>
                <div class="clear"></div>
            </div>
        </div>-->
        <el-backtop :visibility-height="60">
            <i class="el-icon-caret-top"></i>
        </el-backtop>
    </div>
</template>

<script>
    export default {
        name: "Lvyou"
    }
</script>

<style scoped>

    .te{width:300px  !important; font-size:18px !important; margin-bottom:25px  !important; }
    .tw{width:100%  !important; font-size:18px !important; margin-bottom:25px !important;}
    td p{
        width: 100% !important;;
        font-size:18px !important;
        line-height:25px;
    }
    .txt_area{padding-left:30px !important;}
</style>