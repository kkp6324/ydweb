<template>
	<h2>表单的第三个组件</h2>
	<h3>开关组件</h3>
	<mt-switch v-model="val1">开关</mt-switch>
	<button @click="handleSwitch">读取值</button>
	<h3>单选框</h3>
	<mt-radio title="单选框列表" v-model="val2" :option="['选项a','选项b','选项c']"></mt-radio>
	<button @click="handleRidio">选中了一个</button>
	<h3>复选框列表</h3>
	<mt-checklist title="复选框列表" v-model="val3"></mt-checklist>
	
</template>

<script>
</script>

<style>
</style>
