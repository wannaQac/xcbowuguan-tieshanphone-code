<template>
    <div id="content">
        <div class="banner-ld" ng-controller="clgkbanner">
            <img src="https://ts-1305062858.cos-website.ap-nanjing.myqcloud.com/pic18.png" width="100%">
        </div>
        <div class="ui" id="address">
            <div class="mainbox-ld"  ng-controller="clls">
                <div class="title-ld">
                    <div class="title-1">招商引资</div>
                </div>
                <div class="text-ld">
                    <div class="imgvideo">

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
        name: "Zhaoshang"
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