<template>
    <div id="content">
        <div class="banner-ld" ng-controller="clgkbanner">
            <img src="https://ts-1305062858.cos-website.ap-nanjing.myqcloud.com/pic10.png" width="100%">
        </div>
        <div class="ui" id="address"  >
            <div class="mainbox-ld"  ng-controller="clls">
                <div class="title-ld">
                    <div class="title-1">村落选址</div>
                </div>
                <div class="text-ld">
                    <div class="imgvideo">
                        <p class="te ng-binding" ng-bind-html="cltd|to_trusted">&nbsp;&nbsp;&nbsp;铁山街道位于西海岸新区中部，面积 101平方公里，辖43个行政村，人口2.4 万，基层党组织66个，党员1527人,区域 特色是“六个一”。
                            街道城市规划区面积约22平方公里，形成了“是城是乡，亦城亦乡，城乡联 动，融合发展”的乡村振兴格局。<p/>
                    </div>
                </div>
            </div>
        </div>
        <!--<div class="ui" id="geju">
            <div class="mainbox-ld"  ng-controller="clls">
                <div class="title-ld">
                    <div class="title-1">村落格局</div>
                </div>
                <div class="text-ld">
                    <div class="imgvideo">
                        <ul>

                        </ul>
                    </div>
                </div>
            </div>
        </div>-->
       <!-- <div class="ui" id="build">
            <div class="mainbox-ld"  ng-controller="clls">
                <div class="title-ld">
                    <div class="title-1">建村智慧</div>
                </div>
                <div class="text-ld">
                    <div class="imgvideo">

                    </div>
                </div>
            </div>
        </div>
        <div class="ui" id="environment">
            <div class="mainbox-ld"  ng-controller="clls">
                <div class="title-ld">
                    <div class="title-1">自然环境</div>
                </div>
                <div class="text-ld">
                    <div class="imgvideo">

                    </div>
                </div>
            </div>
        </div>
        <div class="ui" id="mingsheng">
            <div class="mainbox-ld"  ng-controller="clls">
                <div class="title-ld">
                    <div class="title-1">风景名胜</div>
                </div>
                <div class="text-ld">
                    <div class="imgvideo">

                    </div>
                </div>
            </div>
        </div>-->
        <div class="ui" id="wenwu" >
            <div class="mainbox-ld"  ng-controller="clls" >
                <div class="title-ld">
                    <div class="title-1">村落发展</div>
                </div>
                <div class="text-ld">
                    <div class="imgvideo">
                        <p class="te ng-binding" ng-bind-html="cltd|to_trusted">&nbsp;&nbsp;近年来，青岛西海岸新区铁山街道立足独特的自然禀赋，大力发展优势特色产业，打造四季旅游新常态，乡村振兴“六化”并举，实施“片区化规划、景区化建设、生态化提升、文旅化融合、产业化联动、党建化聚力”，逐步探索出乡村振兴齐鲁样板新路径。<p/>

                    </div>
                    <div class="block" style="margin-top: 3%">
                        <el-timeline style="width: 300px;margin-left: -60px">
                            <el-timeline-item  placement="top">
                                <el-card>
                                    <h4>片区化规划 统筹区域发展新布局</h4>
                                    <p>在东南崖村建设杨家山里红色教育基地，主推红色教育；在大下庄、西北庄村大力发展优势产业；在后石沟村着力打造乡村影视基地。</p>
                                    </el-card>
                            </el-timeline-item>
                            <el-timeline-item  placement="top">
                                <el-card>
                                    <h4>景区化建设 推动品质新升级</h4>
                                    <p>通过实施景区化建设，推进杨家山里片区业态升级、设施升级、管理升级、服务升级，不断提升美丽乡村建设品质，培育旅游产业新的增长极。</p>
                                   </el-card>
                            </el-timeline-item>
                            <el-timeline-item  placement="top">
                                <el-card>
                                    <h4>文旅化融合 探索乡村旅游新路子</h4>
                                    <p>杨家山里的红色文化、齐长城文化等人文资源具有独特的魅力，是新区旅游必选地，“杨家山里樱桃”声名远播，是新区著名的果蔬采摘目的地。</p>
                                    </el-card>
                            </el-timeline-item>
                            <el-timeline-item  placement="top">
                                <el-card>
                                    <h4>产业化联动 拓宽村民增收新渠道</h4>
                                    <p>立足区位优势和资源禀赋，科学谋划，与时俱进理思路、促转型、强品牌，培植增强樱桃采摘主导产业，全面提升经济发展水平，大力发展生态旅游及农产品深加工产业，实现了四季互补、淡季不淡、全年兴旺的旅游市场格局。</p>
                                    </el-card>
                            </el-timeline-item>
                            <el-timeline-item  placement="top">
                                <el-card>
                                    <h4>生态化提升 打造生态宜居新家园</h4>
                                    <p>街道遵照总书记“千村示范、万村整治”指示要求，高起点谋划、高品质建设、高水平管理，注重自然禀赋、注重要素统筹。</p>
                                    </el-card>
                            </el-timeline-item>
                            <el-timeline-item  placement="top">
                                <el-card>
                                    <h4>党建化聚力 建强基层战斗新堡垒</h4>
                                    <p>杨家山里社区党委深入传承红色基因，全面深化拓展“莱西经验”，按照“党建核心引领、红色文化支撑、治理六共六联、区域统筹发展”的理念，打造“山里别样红”党建品牌，创新“六共六联”工作机制，构建“党建区域化、发展融合化、治理网格化、服务社会化”的区域化党建工作新格局。</p>
                                </el-card>
                            </el-timeline-item>
                        </el-timeline>
                    </div>
                </div>
            </div>
        </div>
        <!--<div class="ui" id="lishihuanjing">
            <div class="mainbox-ld"  ng-controller="clls">
                <div class="title-ld">
                    <div class="title-1">历史环境</div>
                </div>
                <div class="text-ld">
                    <div class="imgvideo">
                        <el-table
                                :data="tableData"
                                height="250"
                                border
                                style="width: 100%">
                            <el-table-column
                                    prop="num"
                                    label="编号"
                                    width="180">
                            </el-table-column>
                            <el-table-column
                                    prop="name"
                                    label="历史环境要素名称">
                            </el-table-column>
                        </el-table>
                    </div>
                </div>
            </div>
        </div>-->
        <el-backtop :visibility-height="60">
            <i class="el-icon-caret-top"></i>
        </el-backtop>
    </div>
</template>

<script>
    export default {
        name: "Huanjing",
        data() {
            return {
                tableData: [{
                    num: '王小虎',
                    name: '上海市普陀区金沙江路 1518 弄'
                }, {
                    num: '王小虎',
                    name: '上海市普陀区金沙江路 1518 弄'
                }, {
                    num: '王小虎',
                    name: '上海市普陀区金沙江路 1518 弄'
                }, {
                    num: '王小虎',
                    name: '上海市普陀区金沙江路 1518 弄'
                }, {
                    num: '王小虎',
                    name: '上海市普陀区金沙江路 1518 弄'
                }]
            }
        }
    }
</script>

<style scoped>
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