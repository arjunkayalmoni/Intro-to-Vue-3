// const product = 'Socks'

// const app = Vue.createApp({
// 	data: function () {
// 		return {
// 			product: "Socks",
// 		};
// 	},
// });

// const app = Vue.createApp({
// 	// options object should be at least an empty object
// 	data: function () {
// 		return {
// 			product: "Shoes",
// 		};
// 	},
// });

const app = Vue.createApp({
	data() {
		return { product: "Socks", description: "Blue colored woolen socks" };
	},
});
