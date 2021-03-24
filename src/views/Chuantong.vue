<template>
    <div id="content">
        <el-carousel :interval="4000" >
            <el-carousel-item v-for="(item,i) in address" :key="i">
                <img :src="item.addre" style="width: 100%">
            </el-carousel-item>
        </el-carousel>

        <div class="ui" id="history">
            <div class="mainbox-ld"  ng-controller="clls">
                <div class="title-ld">
                    <div class="title-1">村落风貌</div>
                </div>
                <div class="text-ld">
                    <div class="imgvideo">
                        <p class="te ng-binding" ng-bind-html="cltd|to_trusted">青岛西海岸新区铁山街道杨家山里片区共由大下庄等八个村组成，现有村民982户、3017人，片区总面积约23平方公里。在美丽乡村建设中，杨家山里片区坚持问题导向，立足独特的自然禀赋，充分挖掘历史和红色文化资源，大力发展优势特色产业，实施“片区化规划、景区化建设、生态化提升、文旅化融合、产业化联动、党建化聚力”，六化并举，统筹做好六大工程，
                            即：实施基础设施配套工程，河道治理工程，建筑外立面修缮工程，村容和环境整治工程，村庄导视系统工程，支路小巷铺装工程，统筹推进农村“厕所革命”、农村生活垃圾分类、农村生活污水治理，坚持内外兼修，提升大下庄村在内的整个片区的生活生产水平，打造了宜居宜业宜游的新农村。<p/>
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
        name: "Chuantong",
        data (){
            return {
                address:[
                    {addre: 'https://ts-1305062858.cos-website.ap-nanjing.myqcloud.com/pic2.png'},
                    {addre: 'https://ts-1305062858.cos-website.ap-nanjing.myqcloud.com/pic3.png'},
                    {addre: 'https://ts-1305062858.cos-website.ap-nanjing.myqcloud.com/pic4.png'}
                ]
            }
        }
    }
</script>
<style scoped>
    .el-carousel__item h3 {
        color: #475669;
        font-size: 14px;
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