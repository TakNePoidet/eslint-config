<template>
	<div>
		<div>{{ isLover ? loverTitle : upperTitle }}</div>
		<button @click="clickHandle">click</button>
	</div>
</template>

<script>
import { defineComponent } from 'vue';

export default defineComponent({
	props: {
		title: {
			type: String,
			required: false,
			default() {
				return 'Options API Typing';
			}
		}
	},
	data() {
		return {
			isLover: false
		};
	},
	computed: {
		upperTitle() {
			const { title } = this;
			const upper = title.toUpperCase();

			this.log(`upperTitle: ${upper}`);
			return upper;
		},
		loverTitle() {
			const { title } = this;
			const lover = title.toUpperCase();

			this.log(`loverTitle: ${lover}`);
			return lover;
		}
	},
	methods: {
		log(text) {
			console.log(text);
		},
		clickHandle(event) {
			event.preventDefault();
			this.log(this.titlePage);
		}
	}
});
</script>
