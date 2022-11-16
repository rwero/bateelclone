<script setup>
import { ref } from "vue";
import ApplicationLogo from "@/Components/ApplicationLogo.vue";
import Dropdown from "@/Components/Dropdown.vue";
import DropdownLink from "@/Components/DropdownLink.vue";
import NavLink from "@/Components/NavLink.vue";
import ResponsiveNavLink from "@/Components/ResponsiveNavLink.vue";
import TextInput from "@/Components/TextInput.vue";
import { Link } from "@inertiajs/inertia-vue3";
import { ShoppingCartIcon, MagnifyingGlassIcon } from '@heroicons/vue/24/outline'
import SideCart from "@/Components/SideCart.vue";
import FB from '@/Components/SVGs/FB.vue';
import Inst from '@/Components/SVGs/Inst.vue';
import Linkedin from '@/Components/SVGs/Linkedin.vue';
import Twitter from '@/Components/SVGs/Twitter.vue';
import Youtube from '@/Components/SVGs/Youtube.vue';
import axios from "axios";

const showingNavigationDropdown = ref(false);
const showCart = ref(false);
const searchTerm = ref("");

const search =  ()=>{
    window.location = route("search.index",{ _query:{ q:searchTerm.value },})
    }

</script>

<template>
	<div>
		<SideCart :open="showCart" @close="showCart =false" />
		<div class="min-h-screen bg-gray-100">
			<nav class="bg-white border-b border-gray-100">
				<!-- Primary Navigation Menu -->
				<div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
					<div class="flex justify-between h-16">
						<div class="flex">
							<!-- Logo -->
							<div class="shrink-0 flex items-center">
								<Link :href="route('home.index')">
								<ApplicationLogo class="block h-9 w-auto" />
								</Link>
							</div>

							<!-- Navigation Links -->
							<div class="hidden space-x-6 md:-my-px md:ml-10 md:flex">
								<NavLink :href="route('home.index')" :active="route().current('home.index')">
									Home
								</NavLink>

								<NavLink :href="route('products.index')"
									:active="route().current('products.index') || route().current('products.show')">
									Products
								</NavLink>

								<NavLink :href="route('products.index')" :active="route().current('contact')">
									Contact us
								</NavLink>
							</div>
						</div>

						<div class="hidden md:flex md:items-center md:ml-6">
							<!-- Settings Dropdown -->

							<div class="relative text-gray-700">

								<TextInput type="text"
									class=" block w-full focus:border-0 hover:border-gray-400 text-sm" autofocus
									placeholder="Search for products..." v-model='searchTerm' @keyup.enter="search" />
								<MagnifyingGlassIcon class="h-5 w-5 absolute top-2 bottom-0 right-2 " />
							</div>
							<div class="ml-3 relative">
								<Dropdown align="right" width="48">
									<template #trigger>
										<span class="inline-flex rounded-md">
											<button type="button"
												class="inline-flex items-center px-3 py-2 border border-transparent text-sm leading-4 font-medium rounded-md text-gray-500 bg-white hover:text-gray-700 focus:outline-none transition ease-in-out duration-150">
												{{ $page.props.auth.user ?
												$page.props.auth.user
												.first_name: 'Account'
												}}

												<svg class="ml-2 -mr-0.5 h-4 w-4" xmlns="http://www.w3.org/2000/svg"
													viewBox="0 0 20 20" fill="currentColor">
													<path fill-rule="evenodd"
														d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z"
														clip-rule="evenodd" />
												</svg>
											</button>
										</span>
									</template>

									<template #content>

										<DropdownLink v-if="!$page.props.auth.user" :href="route('login')" as="button">
											Login
										</DropdownLink>
										<DropdownLink v-if="!$page.props.auth.user" :href="route('register')"
											as="button">
											Register
										</DropdownLink>
										<DropdownLink v-if="$page.props.auth.user" :href="route('account.show')"
											as="button">
											My Account
										</DropdownLink>
										<DropdownLink v-if="$page.props.auth.user" :href="route('logout')" method="post"
											as="button">
											Log Out
										</DropdownLink>
									</template>
								</Dropdown>
							</div>
							<div class="text-gray-500 bg-white hover:text-gray-700 cursor-pointer"
								@click="showCart = true">

								<ShoppingCartIcon class="h-5 w-5" aria-hidden="true" />
							</div>
						</div>

						<!-- Hamburger -->
						<div class="-mr-2 flex items-center md:hidden">
							<button @click="
							    showingNavigationDropdown =
							        !showingNavigationDropdown
							"
								class="inline-flex items-center justify-center p-2 rounded-md text-gray-400 hover:text-gray-500 hover:bg-gray-100 focus:outline-none focus:bg-gray-100 focus:text-gray-500 transition duration-150 ease-in-out">
								<svg class="h-6 w-6" stroke="currentColor" fill="none" viewBox="0 0 24 24">
									<path :class="{
                                            hidden: showingNavigationDropdown,
                                            'inline-flex':
                                                !showingNavigationDropdown,
                                        }" stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
										d="M4 6h16M4 12h16M4 18h16" />
									<path :class="{
                                            hidden: !showingNavigationDropdown,
                                            'inline-flex':
                                                showingNavigationDropdown,
                                        }" stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
										d="M6 18L18 6M6 6l12 12" />
								</svg>
							</button>
						</div>
					</div>
				</div>

				<!-- Responsive Navigation Menu -->
				<div :class="{
                        block: showingNavigationDropdown,
                        hidden: !showingNavigationDropdown,
                    }" class="md:hidden">
					<div class="pt-2 pb-3 space-y-1">
						<ResponsiveNavLink :href="route('home.index')" :active="route().current('home.index')">
							Shop
						</ResponsiveNavLink>
						<ResponsiveNavLink :href="route('products.index')" :active="route().current('products.index')">
							Products
						</ResponsiveNavLink>
						<ResponsiveNavLink :href="route('products.index')" :active="route().current('contact.index')">
							Contact us
						</ResponsiveNavLink>
					</div>

					<!-- Responsive Settings Options -->
					<div class="pt-4 pb-1 border-t border-gray-200">
						<div class="" v-if="$page.props.auth.user">
							<div class="px-4 font-medium text-sm text-gray-500">
								{{ $page.props.auth.user.email }}
							</div>
							<ResponsiveNavLink :href="route('account.show')"
								:active="route().current('contact.index')">
								{{ $page.props.auth.user.first_name }}
							</ResponsiveNavLink>
						</div>

							<button   @click="showCart = true"
							class="block w-full text-left pl-3 pr-4 py-2 border-l-4 border-transparent text-base font-medium text-gray-600 hover:text-gray-800 hover:bg-gray-50 hover:border-gray-300 focus:outline-none focus:text-gray-800 focus:bg-gray-50 focus:border-gray-300 transition duration-150 ease-in-out"
								>
								My cart
						</button>
						<div class=" space-y-1">


							<ResponsiveNavLink v-if="!$page.props.auth.user" :href="route('login')" as="button"
								class="w-full text-left">
								Login
							</ResponsiveNavLink>
							<ResponsiveNavLink v-if="!$page.props.auth.user" :href="route('register')" as="button"
								class="w-full text-left">
								Register
							</ResponsiveNavLink>
							<ResponsiveNavLink v-if="$page.props.auth.user" :href="route('logout')" method="post"
								as="button" class="w-full text-left">
								Log Out
							</ResponsiveNavLink>
						</div>
					</div>
				</div>
			</nav>

			<!-- Page Heading -->
			<header class="bg-white shadow" v-if="$slots.header">
				<div class="max-w-7xl mx-auto py-6 px-4 sm:px-6 lg:px-8">
					<slot name="header" />
				</div>
			</header>

			<!-- Page Content -->
			<main class=" sm:py-4 font-serif">
				<slot name="main" />
			</main>

			<footer class=" bg-gray-700 text-white  py-6">
				<div
					class="grid grid-cols-[repeat(auto-fit,minmax(200px,1fr))] justify-center  max-w-7xl mx-auto py-6 px-6  lg:px-8 gap-6">
					<div class="">
						<h1 class=" text-xl ">Bateel International</h1>
						<ul>
							<li><a class="text-sm" href="">About us</a></li>
							<li><a class="text-sm" href="">Bateel forms</a></li>
							<li><a class="text-sm" href="">Bateel worldwide</a></li>
							<li><a class="text-sm" href="">Careers</a></li>
							<li><a class="text-sm" href="">Press</a></li>
							<li><a class="text-sm" href="">Contact Us</a></li>
						</ul>
					</div>
					<div>
						<h1 class=" text-xl ">The Boutique</h1>
						<ul>
							<li><a class="text-sm" href="">Find a Boutique</a></li>
							<li><a class="text-sm" href="">Corporate Orders</a></li>
							<li><a class="text-sm" href="">Franchise Opportunities</a></li>
						</ul>
					</div>
					<div>
						<h1 class=" text-xl ">Shopping Online</h1>
						<ul>
							<li><a class="text-sm" href="">FAQs</a></li>
							<li><a class="text-sm" href="">Shipping & Delivery</a></li>
							<li><a class="text-sm" href="">Returns</a></li>
							<li><a class="text-sm" href="">Cookie Policy</a></li>
						</ul>
					</div>
					<div>
						<h1 class=" text-xl ">Explore</h1>
						<ul>
							<li><a class="text-sm" href="">Ambassador</a></li>
							<li><a class="text-sm" href="">Seven Dates</a></li>
							<li><a class="text-sm" href="">Ajwa Dates</a></li>
							<li><a class="text-sm" href="">Medjool Dates</a></li>
							<li><a class="text-sm" href="">Single Origin Chocolate</a></li>
							<li><a class="text-sm" href="">Nutrition</a></li>
							<li><a class="text-sm" href="">Blog</a></li>
						</ul>
					</div>
					<div>
						<h1 class=" text-xl ">Our Brands</h1>
						<ul>
							<li><a class="text-sm" href="">Bateel Boutique</a></li>
							<li><a class="text-sm" href="">Café Bateel</a></li>
						</ul>
					</div>
				</div>
				<div class="w-fit mx-auto flex justify-center gap-4 items-center mt-10">
					<button>
						<FB class="h-5 w-5" />
					</button>
					<button>
						<Inst class="h-5 w-5" />
					</button>
					<button>
						<Linkedin class="h-5 w-5" />
					</button>
					<button>
						<Twitter class="h-5 w-5" />
					</button>
					<button>
						<Youtube class="h-5 w-5" />
					</button>
				</div>
			</footer>
		</div>
	</div>
</template>
<style>
footer h1 {
	@apply font-serif mb-4
}
</style>
