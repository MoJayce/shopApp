<template>
	<div class="monitoring">
		<h2>监控</h2>
		<div style="margin-bottom: 20px;">
			<el-button size="small" @click="addTab(editableTabsValue2)">
				add tab
			</el-button>
		</div>
		<el-tabs v-model="editableTabsValue2" type="card" closable @tab-remove="removeTab" lazy="true">
			<el-tab-pane v-for="(item, index) in editableTabs2" :key="item.name" :label="item.title" :name="item.name">
				{{item.content}}
			</el-tab-pane>
		</el-tabs>
	     <quill-editor 
	      v-model="content" 
	      ref="myQuillEditor" 
	      :options="editorOption" 
	      @blur="onEditorBlur($event)" @focus="onEditorFocus($event)"
	      @change="onEditorChange($event)" placeholder="请输入至少五个字符">
	    </quill-editor>
	</div> 
</template>
<script>
	  import { quillEditor } from 'vue-quill-editor' //调用编辑器
	export default {
		data() {
			return {
				editableTabsValue2: '2',
				editableTabs2: [{
					title: 'Tab 1',
					name: '1',
					content: 'Tab 1 content'
				}, {
					title: 'Tab 2',
					name: '2',
					content: 'Tab 2 content'
				}],
		  		content:null,
                editorOption:{}
			}
		},
		methods: {
			addTab(targetName) {
				let newTabName = ++this.tabIndex + '';
				this.editableTabs2.push({
					title: 'New Tab',
					name: newTabName,
					content: 'New Tab content'
				});
				this.editableTabsValue2 = newTabName;
			},
			 onEditorBlur(){//失去焦点事件
            },
            onEditorFocus(){//获得焦点事件
            },
            onEditorChange(){//内容改变事件
            },
			removeTab(targetName) {
				let tabs = this.editableTabs2;
				let activeName = this.editableTabsValue2;
				if(activeName === targetName) {
					tabs.forEach((tab, index) => {
						if(tab.name === targetName) {
							let nextTab = tabs[index + 1] || tabs[index - 1];
							if(nextTab) {
								activeName = nextTab.name;
							}
						}
					});
				}

				this.editableTabsValue2 = activeName;
				this.editableTabs2 = tabs.filter(tab => tab.name !== targetName);
			}
		},
	    components: {
	//使用编辑器
	      quillEditor
	    }
	}
</script>
<style scoped>

</style>
<