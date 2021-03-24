<template>
    <div id="content">
        <div class="banner-ld" ng-controller="clgkbanner">
            <img src="https://ts-1305062858.cos-website.ap-nanjing.myqcloud.com/pic11.png" width="100%" height="80%">
        </div>
        <div class="ui" id="history">
            <div class="mainbox-ld"  ng-controller="clls">
                <div class="title-ld">
                    <div class="title-1">建村历史</div>
                    </div>
                <div class="text-ld">
                    <div class="imgvideo">
                        <p class="te ng-binding" ng-bind-html="cltd|to_trusted">青岛西海岸新区铁山街道杨家山里片区共由大下庄等八个村组成，现有村民982户、3017人，片区总面积约23平方公里。
                            在美丽乡村建设中，杨家山里片区坚持问题导向，立足独特的自然禀赋，充分挖掘历史和红色文化资源，大力发展优势特色产业，实施“片区化规划、景区化建设、生态化提升、文旅化融合、
                            产业化联动、党建化聚力”，六化并举，统筹做好六大工程，即：实施基础设施配套工程，河道治理工程，建筑外立面修缮工程，村容和环境整治工程，村庄导视系统工程，支路小巷铺装工程，
                            统筹推进农村“厕所革命”、农村生活垃圾分类、农村生活污水治理，坚持内外兼修，提升大下庄村在内的整个片区的生活生产水平，打造了宜居宜业宜游的新农村。<p/>

                    </div>
                </div>
            </div>
        </div>
        <!--<div class="ui" id="renwu">
            <div class="mainbox-ld"  ng-controller="clls">
                <div class="title-ld">
                    <div class="title-1">历史事件</div>
                </div>
                <div class="text-ld">
                    <div class="imgvideo">
                        <ul>
                            <div>
                                <span>为坚决遏制新冠病毒疫情蔓延，切实加强疫情科学防控，铁山街道应急管理办15人，一直奋战在疫情防控的前沿，从“省内各类企业不早于2月9日24时前复工”的严厉督查，到现在各类企业有序分批、错峰返岗复工复产，从党员在高速路铁山口认真值守到协助利康源口罩的安全、顺利生产，这支似乎永远不知疲倦的队伍在应急管理办主任李平的带领下，严防死守抗疫情，恪尽职守显担当，全力以赴保平安
                                </span>
                                <el-divider></el-divider>
                                <span>为传承红色基因，弘扬革命精神，青岛西海岸新区铁山街道党工委联合工委组织部、工委党史研究中心于2018年5月开始设计打造，2019年7月建成并启用杨家山里抗日战争展厅，标志着杨家山里红色教育基地正式启动。该基地坐落于铁山街道东南崖村，占地15亩，是青岛西海岸新区首个以“使命担当”为主题，以党员干部教育为主、覆盖社会各界的综合性红色教育基地。为进一步完善基地建设，今年3月开始在周边重点打造青岛工委旧址和后石沟村奋斗史馆，目前展陈设计和大纲内容都已调整完毕，预计2021年3月底建成使用。与此同时，配套建设的网上展厅、党史资料展阅室、荣誉陈列室和党性教育课堂，现已建成并发挥作用，由此全方位构建了“1个基地+3个展馆+N个现场教学点”红色教育体系。</span>
                                <el-divider></el-divider>
                            </div>
                        </ul>
                    </div>
                </div>
            </div>
        </div>-->
        <!--<div class="ui" id="shijian">
            <div class="mainbox-ld"  ng-controller="clls">
                <div class="title-ld">
                    <div class="title-1">历史事件</div>
                </div>
                <div class="text-ld">
                    <div class="imgvideo">

                    </div>
                </div>
            </div>
        </div>-->
        <div class="ui" id="people">
            <div class="mainbox-ld"  ng-controller="clls" style="height: 1000px ">
                <div class="title-ld">
                    <div class="title-1">视频集锦</div>
                </div>
                <div class="text-ld">
                    <div class="imgvideo">
                    <iframe src="//player.bilibili.com/player.html?aid=585809426&bvid=BV11z4y1r78T&cid=270776740&page=1" style="width: 300px;height: 300px;margin-left: -60px"  scrolling="no" border="0" frameborder="no" framespacing="0" allowfullscreen="true"> </iframe>
                    </div>
                </div>
            </div>
        </div>
        <el-backtop :visibility-height="60">
            <i class="el-icon-caret-top"></i>
        </el-backtop>
    </div>
</template>

<script>
    export default {
        data(){
            return{
                name: "Lishi",

            }
        }

    }
</script>

<style scoped>
    @import "../../static/css/model.css";
    @import "../../static/css/main-new.css";
    .el-carousel__item h3 {
        color: #475669;
        font-size: 18px;
        opacity: 0.75;
        line-height: 300px;
        margin: 0;
    }
    /*.te{width:100%  !important; font-size:18px !important; margin-bottom:25px  !important; }
    .tw{width:100%  !important; font-size:18px !important; margin-bottom:25px !important;}
    td p{
        width: 100% !important;;
        font-size:18px !important;
        line-height:25px;
    }
    .txt_area{padding-left:30px !important;}*/

    /*本页正文内容样式*/
    .te{width:300px  !important; font-size:18px !important; margin-bottom:25px  !important; }
    .tw{width:100%  !important; font-size:18px !important; margin-bottom:25px !important;}
    td p{
        width: 100% !important;;
        font-size:18px !important;
        line-height:25px;
    }
    .txt_area{padding-left:30px !important;}
</style>