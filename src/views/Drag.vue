<template>
  <div class="drag">
    <!-- 左侧组件列表 -->
    <div class="left">
      <div
        class="left-item"
        v-for="item in list1"
        :key="item.code"
        draggable
        v-on="{
          dragstart: (e) => dragstart(e, item),
          dragend,
        }"
      >
        {{ item.name }}
      </div>
    </div>
    <!-- 画布区域 -->
    <div class="target-content" ref="targetContent">
      <div
        class="item"
        v-for="item in list2"
        :key="item.id"
        :style="{
          top: `${item.top - 16}px`,
          left: `${item.left - 85}px`,
          zIndex: `${item.zIndex}`,
        }"
        @mousedown="(e) => mousedown(e, item)"
      >
        <template v-if="item.code === 'MyInput'">
          <el-input v-model="input" placeholder="Please input" />
        </template>
      </div>
    </div>
  </div>
</template>

<script lang="ts" setup>
// 拖拽组件 https://mp.weixin.qq.com/s/0OzwIi-pLHT6mAphpcfgjg
import { ref, getCurrentInstance } from 'vue';
import _ from 'lodash';

const { proxy } = getCurrentInstance();

const input = ref('');
const dragItem = ref(null);
const moveItem = ref(null);

const list1 = ref([
  {
    code: 'MyInput',
    name: '输入框',
    props: {},
  },
]);
const list2 = ref([]);

const dragenter = (e) => {
  e.dataTransfer.dropEffect = 'move';
};

const dragover = (e) => {
  e.preventDefault();
};

const dragleave = (e) => {
  e.dataTransfer.dropEffect = 'none';
};

const drop = (e) => {
  const { code } = dragItem.value;

  list2.value.push({
    top: e.offsetY,
    left: e.offsetX,
    zIndex: 1,
    code,
    id: Date.parse(new Date()),
  });

  dragItem.value = null;
};

const dragstart = (e, item) => {
  dragItem.value = item;

  // 设置元素的放置行为 -- 移动
  proxy.$refs.targetContent.addEventListener('dragenter', dragenter);
  // 在目标元素经过，必须要阻止默认行为，否则不能触发 drop
  proxy.$refs.targetContent.addEventListener('dragover', dragover);
  // 离开目标元素时，设置元素的放置行为 -- 禁止拖放
  proxy.$refs.targetContent.addEventListener('dragleave', dragleave);
  // 拖动元素在目标元素松手时，添加元素到画布
  proxy.$refs.targetContent.addEventListener('drop', drop);
};

const dragend = () => {
  proxy.$refs.targetContent.removeEventListener('dragenter', dragenter);
  proxy.$refs.targetContent.removeEventListener('dragover', dragover);
  proxy.$refs.targetContent.removeEventListener('dragleave', dragleave);
  proxy.$refs.targetContent.removeEventListener('drop', drop);
};

const mousemove = (e) => {
  const { clientX, clientY } = e;

  const moveIdx = _.findIndex(list2.value, (o) => o.id === moveItem.value.id);
  const newList2 = _.cloneDeep(list2.value);

  newList2[moveIdx].top = clientY;
  newList2[moveIdx].left = clientX;
  list2.value = newList2;
};

const mouseup = () => {
  document.removeEventListener('mousemove', mousemove, false);
  document.removeEventListener('mouseup', mouseup, false);
};

const mousedown = (e, item) => {
  moveItem.value = item;

  document.addEventListener('mousemove', mousemove, false);
  document.addEventListener('mouseup', mouseup, false);
};
</script>

<style scoped lang="stylus">
.left
  padding 10px
  position absolute
  width 270px
  background rgb(247, 202, 202)
  top 0
  bottom 0
  left 0

  .left-item
    height 100px
    line-height 100px
    background #fff


.target-content
  background rgb(173, 244, 247)
  height 100vh
  padding 0 270px

  .item
    position absolute
</style>
