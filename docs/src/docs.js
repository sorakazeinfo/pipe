import Vue from 'vue';
import VueRouter from "vue-router";
import Accordion from "./components/accordion";
import Agreement from "./components/agreement";
import Breadcrumb from "./components/breadcrumb";
import Button from "./components/button";
import Clearfix from "./components/clearfix";
import Contract from "./components/contract";
import Divider from "./components/divider";
import Footer from "./components/Footer";
import Form from "./components/form";
import Heading from "./components/heading";
import Hidden from "./components/hidden";
import ItemIndex from "./components/item_index";
import List from "./components/list";
import Loading from "./components/loading";
import Margin from "./components/margin";
import Modal from "./components/modal";
import Navbar from "./components/navbar";
import Notification from "./components/notification";
import Pagination from "./components/pagination";
import Toggle from "./components/toggle";
import ToScroll from "./components/to_scroll";
import SeeMore from "./components/see_more";
import Snackbar from "./components/snackbar";
import Tab from "./components/tab";
import Text from "./components/text";
import TextCounter from "./components/text_counter";
import TransformTable from "./components/transform_table";

Vue.use(VueRouter);

const routes = [
	{path: "/accordion", component: Accordion},
	{path: "/agreement", component: Agreement},
	{path: "/breadcrumb", component: Breadcrumb},
	{path: "/button", component: Button},
	{path: "/clearfix", component: Clearfix},
	{path: "/contract", component: Contract},
	{path: "/divider", component: Divider},
	{path: "/footer", component: Footer},
	{path: "/form", component: Form},
	{path: "/heading", component: Heading},
	{path: "/hidden", component: Hidden},
	{path: "/item-index", component: ItemIndex},
	{path: "/list", component: List},
	{path: "/loading", component: Loading},
	{path: "/margin", component: Margin},
	{path: "/modal", component: Modal},
	{path: "/navbar", component: Navbar},
	{path: "/notification", component: Notification},
	{path: "/pagination", component: Pagination},
	{path: "/toggle", component: Toggle},
	{path: "/to-scroll", component: ToScroll},
	{path: "/see-more", component: SeeMore},
	{path: "/snackbar", component: Snackbar},
	{path: "/tab", component: Tab},
	{path: "/text", component: Text},
	{path: "/text-counter", component: TextCounter},
	{path: "/transform-table", component: TransformTable},
];

new Vue({router: new VueRouter({routes})}).$mount("#docs");
