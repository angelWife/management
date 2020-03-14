<template>
  <div id="app">
    <router-view />
  </div>
</template>

<script>
export default {
  name: "App",
};
</script>

<style lang="less">
*,
*::before,
*::after {
  box-sizing: border-box;
  padding: 0;
  margin: 0;
}
html,
body {
  height: 100%;
}
#app {
  font-family: "Avenir", Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  color: #484a4d;
  /* background:  #b6bbbb21; */
  position: absolute;
  top: 0px;
  bottom: 0px;
  left: 0px;
  right: 0px;
  font-size: 14px;
  a {
    text-decoration: none;
    &:hover {
      color: #409eff;
    }
    &.text {
      color: #409eff;
      cursor: pointer;
    }
  }
  .el-button--warning {
    background: #ff9900;
    border-color: #ff9900;
    &:hover {
      background: rgba(255, 153, 0, 0.8);
      border-color: rgba(255, 153, 0, 0.8);
    }
  }
  .float-left {
    float: left;
  }
  .float-right {
    float: right;
  }
  .text_center {
    text-align: center;
  }
  .text_right {
    text-align: right;
  }
  .clearfix {
    clear: both;
  }
  .breakWord {
    overflow: hidden;
    white-space: normal;
    word-break: break-all;
    word-wrap: break-word;
  }
  .clearfix:after {
    display: block;
    clear: both;
    content: "";
  }
  .mustFill {
    label {
      position: relative;
      &::before {
        content: "*";
        color: #f56c6c;
        margin-right: 4px;
      }
    }
  }
  .link {
    color: #409eff;
    text-decoration: none;
  }
  .f_blod {
    font-weight: 600;
  }
  .red {
    color: #f56c6c;
  }
  .blue {
    color: #409eff;
  }
  .yello {
    color: #ff9900;
  }
  .c999 {
    color: #999;
  }
  .c666 {
    color: #666;
  }
  .fs12 {
    font-size: 12px;
  }
  .fs13 {
    font-size: 13px;
  }
  .fs14 {
    font-size: 14px;
  }
  .fs15 {
    font-size: 15px;
  }
  .fs16 {
    font-size: 16px;
  }
  .fs18 {
    font-size: 18px;
  }
  .fs20 {
    font-size: 20px;
  }
  .fs30 {
    font-size: 30px;
  }
  .m-t-10{
    margin-top: 10px !important;
  }
  .m-t-20 {
    margin-top: 20px !important;
  }
  .m-l-20 {
    margin-left: 20px;
  }
  .cur-pointer {
    cursor: pointer;
  }
  /*flex布局*/
  .flex {
    display: -webkit-box;
    display: flex;
  }

  .flex.f-row {
    -webkit-box-orient: horizontal;
    -webkit-box-direction: normal;
    flex-direction: row;
  }

  .flex.row-rev {
    -webkit-box-orient: horizontal;
    -webkit-box-direction: reverse;
    flex-direction: row-reverse;
  }

  .flex.f-col {
    -webkit-box-orient: vertical;
    -webkit-box-direction: normal;
    flex-direction: column;
  }

  .flex.col-rev {
    -webkit-box-orient: vertical;
    -webkit-box-direction: reverse;
    flex-direction: column-reverse;
  }

  .flex.nowrap {
    flex-wrap: nowrap;
  }

  .flex.f-wrap {
    flex-wrap: wrap;
  }

  .flex.wrap-rev {
    flex-wrap: wrap-reverse;
  }

  .flex.item-base {
    -webkit-box-align: baseline;
    align-items: baseline;
  }

  .flex.item-top {
    -webkit-box-align: start;
    align-items: flex-start;
  }

  .flex.item-bottom {
    -webkit-box-align: end;
    align-items: flex-end;
  }

  .flex.item-center {
    -webkit-box-align: center;
    align-items: center;
  }

  .flex.item-full {
    -webkit-box-align: stretch;
    align-items: stretch;
  }

  .flex.just-con-l {
    -webkit-box-pack: start;
    justify-content: flex-start;
  }

  .flex.just-con-r {
    -webkit-box-pack: end;
    justify-content: flex-end;
  }

  .flex.just-con-c {
    -webkit-box-pack: center;
    justify-content: center;
  }

  .flex.just-con-b {
    -webkit-box-pack: justify;
    justify-content: space-between;
  }

  .flex.just-con-a {
    justify-content: space-around;
  }

  .flex.align-star {
    align-content: flex-start;
  }

  .flex.align-end {
    align-content: flex-end;
  }

  .flex.align-center {
    align-content: center;
  }

  .flex.align-full {
    align-content: stretch;
  }

  .flex.align-between {
    align-content: space-between;
  }

  .flex.align-round {
    align-content: space-around;
  }

  .flex.align-stretch {
    align-content: stretch;
  }

  .flex .order {
    -webkit-box-ordinal-group: 2;
    order: 1;
  }

  .flex .flex-1 {
    -webkit-box-flex: 1;
    flex-grow: 1;
  }

  .flex .flex-2 {
    -webkit-box-flex: 2;
    flex-grow: 2;
  }

  .flex .flex-3 {
    -webkit-box-flex: 3;
    flex-grow: 3;
  }

  .flex .flex-4 {
    -webkit-box-flex: 4;
    flex-grow: 4;
  }

  .flex .shrink-0 {
    flex-shrink: 0;
  }

  .flex .shrink-1 {
    flex-shrink: 1;
  }

  .flex .flex-basis {
    flex-basis: auto;
  }

  .flex .flex-basis-0 {
    flex-basis: 0;
  }

  .flex .self {
    align-self: auto;
  }

  .flex .self-top {
    align-self: flex-start;
  }

  .flex .self-base {
    align-self: baseline;
  }

  .flex .self-bottom {
    align-self: flex-end;
  }

  .flex .self-center {
    align-self: center;
  }

  .flex .self-full {
    align-self: stretch;
  }

  .clamp {
    overflow: hidden;
    text-overflow: ellipsis;
    display: -webkit-box;
    display: box;
    -webkit-box-orient: vertical;
  }

  .textEllipsis {
    white-space: nowrap;
    overflow: hidden;
    text-overflow: ellipsis;
  }

  .clamp.clamp-3 {
    -webkit-line-clamp: 3;
  }

  .clamp.clamp-2 {
    -webkit-line-clamp: 2;
  }

  .clamp.clamp-1 {
    -webkit-line-clamp: 1;
  }
}
.comModal {
  background: #fff;
  border-radius: 0.3em;
  padding: 20px;
  min-height: 100%;
}
</style>
