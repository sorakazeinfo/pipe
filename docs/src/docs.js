import Vue from 'vue';
import VueRouter from "vue-router";
import Button from "./components/button";
import Clearfix from "./components/clearfix";
import Contract from "./components/contract";
import Footer from "./components/Footer";
import Form from "./components/form";
import Heading from "./components/heading";
import Hidden from "./components/hidden";
import Margin from "./components/margin";
import Modal from "./components/modal";
import Notification from "./components/notification";
import Pagination from "./components/pagination";
import Scroll from "./components/scroll";
import Tab from "./components/tab";
import Text from "./components/text";
import TextCounter from "./components/text_counter";
import TransformTable from "./components/transform_table";

Vue.use(VueRouter);

const routes = [
	{path: "/button", component: Button},
	{path: "/clearfix", component: Clearfix},
	{path: "/contract", component: Contract},
	{path: "/footer", component: Footer},
	{path: "/form", component: Form},
	{path: "/heading", component: Heading},
	{path: "/hidden", component: Hidden},
	{path: "/margin", component: Margin},
	{path: "/modal", component: Modal},
	{path: "/notification", component: Notification},
	{path: "/pagination", component: Pagination},
	{path: "/scroll", component: Scroll},
	{path: "/tab", component: Tab},
	{path: "/text", component: Text},
	{path: "/text-counter", component: TextCounter},
	{path: "/transform-table", component: TransformTable},
];

new Vue({router: new VueRouter({routes})}).$mount("#docs");
