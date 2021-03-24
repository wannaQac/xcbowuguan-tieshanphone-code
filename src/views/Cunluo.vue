<template>
    <div>
        <div>

        <div id="cunluo_index" style="margin-top: -215px;">
            <div class="sub_tit ng-binding">青岛西海岸新区</div>
            <div class="main_tit ng-binding" style="height: 430px;">铁山街道</div>
            <!--<div class="open_icon" onclick="showDiscript();" style="opacity: 1; display: none;"></div>-->
            <div class="descript" style="left: 0%;">
                <div class="cont">
                    <div class="txt_area ">
                        <p class="te ng-binding"style="margin-left: 75px">&nbsp;&nbsp;&nbsp;铁山街道位于西海岸新区中部，面积 101平方公里，辖43个行政村，人口2.4 万，基层党组织66个，党员1527人,区域 特色是“六个一”。
                        街道城市规划区面积约22平方公里， 形成了“是城是乡，亦城亦乡，城乡联 动，融合发展”的乡村振兴格局。<p/>
                        <p class="te ng-binding"style="margin-left: 75px">    <br>杨家山里片区包含上沟、墩上、黄泥巷、东南 崖、西北庄、大下庄、后石沟 7 个村，现有居民 982 户 3017 人，山林 1.58 万亩，耕地 4433 亩。街道
                            抢抓美丽乡村建设机遇，牢固践行“绿水青山就是
                            金山银山”发展理念，充分挖掘山、水、村浑然一体
                            的自然资源禀赋，大力发展优势产业，坚持“六化
                            并举”，片区化规划、景区化建设、文旅化融合、产
                            业化联动、生态化提升、党建化聚力，美丽乡村建
                            设取得明显成效。上沟村被评为“全国生态文化 村”（2018）“山东省传统村落”（2018）“青岛市十
                            大旅游名村”（2017），后石沟（2017）、东南崖
                            （2019）、大下庄村（2019）被评为“山东省美丽乡
                            村示范村”，上沟（2017）、墩上（2018）、黄泥巷
                            （2018）、西北庄（2019）被评为“青岛市美丽乡村
                            示范村”。<br/>
                        <p class="te ng-binding" style="margin-left: 75px">&nbsp;&nbsp;&nbsp;&nbsp;通过实施景区化建设，推进杨家山里片区业态升
                        级、设施升级、管理升级、服务升级，不断提升美丽乡
                        村建设品质，培育旅游产业新的增长极。目前该片区投
                        入财政资金7000余万元，撬动社会资金4亿余元。<p/>
                        <p class="te ng-binding" style="margin-left: 75px">杨家山里樱桃种植有着100多年的历史，种植面积达2325亩，年产量可达410吨，所产樱桃含糖量高，口感好，是远近闻名的“樱桃之 乡”，已连续举办16届樱桃采摘节，“杨家山里樱桃”已申请国家地理标志认证。街道大力发展以樱桃采摘为主的生态旅游业，将红色文化
                        优势和绿色生态优势有机结合，实现了1+1>2效应。仅5月份樱桃采摘节一个月，杨家山里接待游客7万余人次，如5月12日（周日）接待量
                        超过2万人次。<p/>

                        <!--<table width="100%" border="0" cellspacing="0" cellpadding="0">
                            <tbody>
                            <tr>
                                <td valign="top"><p class="ng-binding">现有居民：982户3017人</p>
                                  &lt;!&ndash;  <p class="ng-binding">耕地面积：9.53平方公里</p>
                                    <p class="ng-binding">户籍人口：2553人</p>
                                    <p class="ng-binding">主要民族：汉</p>&ndash;&gt;
                                </td>
                                <td valign="top"><p class="ng-binding">山林面积：1.58万亩</p>
                                   &lt;!&ndash; <p class="ng-binding">村庄占地面积：764.4亩</p>
                                    <p class="ng-binding">常住人口：2600人</p>
                                    <p class="ng-binding">主要产业：种植业和劳务输出</p>&ndash;&gt;
                                </td>
                                <td valign="top"><p class="ng-binding">耕地面积：4433亩</p>
                                </td>
                                &lt;!&ndash;<td valign="top"><p>&nbsp;</p>
                                    <p>&nbsp;</p>
                                    <p class="ng-binding">村民人均年收入：6484.7元</p>
                                </td>&ndash;&gt;
                            </tr>
                            </tbody>
                        </table>-->
                    </div>
                </div>
                <!--<div class="closeButton" onclick="hidDiscript();"></div>
                <div class="right_line"></div>-->
                <!--<div class="enter_cnt" style="opacity: 1;"> <span>进入村落</span></div>-->
                <router-link to="/Quanjing" class="enter_cnt" style="opacity: 1;" ><span>进入村落</span></router-link>
            </div>
        </div>
            <el-carousel :interval="5000" arrow="always" height="650px" style="top: -500px ;" >
                <el-carousel-item v-for="item in address" :key="item">
                    <img :src="item.addre" style="">
                </el-carousel-item>
            </el-carousel>

        <el-backtop :visibility-height="60">
            <i class="el-icon-caret-top"></i>
        </el-backtop>
        </div>
    </div>

</template>

<script>
    export default {
        name: "Cunluo",
        data (){
            return {
                address:[
                    {addre: 'https://ts-1305062858.cos-website.ap-nanjing.myqcloud.com/pic1.png'},
                    {addre: 'https://ts-1305062858.cos-website.ap-nanjing.myqcloud.com/pic5.png'}
                ]
            }
        }
    }
</script>

<style scoped>
    @import "../../static/css/common.css";
    @import "../../static/css/section.css";
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