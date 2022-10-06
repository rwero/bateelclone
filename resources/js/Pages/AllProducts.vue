<script setup>
import AuthenticatedLayout from "@/Layouts/AuthenticatedLayout.vue";
import { Head } from "@inertiajs/inertia-vue3";
import { ref } from "vue";
defineProps({
	products : Object,
});
const breadcrumbs = ref([
    { id: 1, name: "Home", href: "#" },
    { id: 2, name: "All Products", href: "#" },
]);

</script>

<template>
    <Head title="All Products" />

    <AuthenticatedLayout>
        <template #header>
            <nav
                aria-label="Breadcrumb"
                class="flex md:justify-end items-center"
            >
                <ol role="list" class="flex items-center space-x-2">
                    <li
                        v-for="(breadcrumb, i) in breadcrumbs"
                        :key="breadcrumb.id"
                    >
                        <div
                            v-if="i + 1 < breadcrumbs.length"
                            class="flex items-center"
                        >
                            <a
                                :href="breadcrumb.href"
                                class="mr-2 text-sm font-bold text-gray-900"
                                >{{ breadcrumb.name }}</a
                            >
                            <svg
                                width="16"
                                height="20"
                                viewBox="0 0 16 20"
                                fill="currentColor"
                                xmlns="http://www.w3.org/2000/svg"
                                aria-hidden="true"
                                class="h-5 w-4 text-gray-300"
                            >
                                <path
                                    d="M5.697 4.34L8.98 16.532h1.327L7.025 4.341H5.697z"
                                />
                            </svg>
                        </div>
                        <div v-else class="mr-2 text-sm text-gray-700">
                            {{ breadcrumb.name }}
                        </div>
                    </li>
                </ol>
            </nav>
        </template>
        <template #main>
{{products[30].images[0]}}
            <div class="py-2">
                <div class="max-w-7xl mx-auto px-6" >
                    <div
                        class="bg-white overflow-hidden shadow-sm md:rounded-lg"
                    >
                        <h2
                            class="font-medium md:text-4xl text-xl text-gray-800 leading-tight sm:p-6 lg:p-8 text-center lg:text-left"
                        >
                            All Products
                        </h2>
                        <div class="bg-white">
                            <div
                                class="mx-auto max-w-2xl py-8 pt-0 px-4 sm:px-6 lg:max-w-7xl lg:px-8"
                            >
                                <div
                                    class="grid grid-cols-1 gap-y-10 gap-x-6 sm:grid-cols-2 lg:grid-cols-3 xl:gap-x-4"
                                >
                                    <div
                                        v-for="product in products"
                                        :key="product.id"
                                        class="relative"
                                    >
                                        <div
                                            class="min-h-80 aspect-w-1 aspect-h-1 w-full overflow-hidden bg-gray-200 hover:opacity-75 cursor-pointer"
                                        >
                                            <img
                                                :src="hhh"
                                                :alt="product.imageAlt"
                                                class="h-full w-full object-cover object-center lg:h-full lg:w-full"
                                            />
                                        </div>
                                        <div class="mt-4 flex justify-between ">
                                            <div>
                                                <h3
                                                    class="text-sm text-gray-700"
                                                >
                                                    <a
                                                        :href="
                                                            route(
                                                                'products.show',
                                                                product.id
                                                            )
                                                        "
                                                    >
                                                  
                                                        {{ product.name }}
                                                    </a>
                                                </h3>
                                                <button
                                                    class="mt-1 text-sm text-gray-500 hover:text-gray-700"
                                                >
                                                    Add to cart
                                                </button>
                                            </div>
                                            <p
                                                class="text-sm font-medium text-gray-900"
                                            >
                                                {{ product.price }}
                                            </p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div class="py-12">
                <div class="max-w-7xl mx-auto md:px-6 lg:px-8">
                    <div
                        class="bg-white overflow-hidden shadow-sm md:rounded-lg"
                    >
                        <h2
                            class="font-medium md:text-4xl text-xl text-gray-800 leading-tight sm:p-6 lg:p-8 text-center lg:text-left"
                        >
                            New Products
                        </h2>
                        <div class="bg-white">
                            <div
                                class="mx-auto max-w-2xl pb-8 pt-0 px-4 sm:px-6 lg:max-w-7xl lg:px-8"
                            >
                                <div
                                    class="grid grid-cols-1 gap-y-10 gap-x-6 sm:grid-cols-2 lg:grid-cols-3 xl:gap-x-4"
                                >
                                    <div
                                        v-for="product in products"
                                        :key="product.id"
                                        class="group relative"
                                    >
                                        <div
                                            class="min-h-80 aspect-w-1 aspect-h-1 w-full overflow-hidden bg-gray-200 group-hover:opacity-75"
                                        >
                                            <img
                                                :src="product.imageSrc"
                                                :alt="product.imageAlt"
                                                class="h-full w-full object-cover object-center lg:h-full lg:w-full"
                                            />
                                        </div>
                                        <div class="mt-4 flex justify-between">
                                            <div>
                                                <h3
                                                    class="text-sm text-gray-700"
                                                >
                                                    <a
                                                        :href="
                                                            route(
                                                                'products.show',
                                                                product.id
                                                            )
                                                        "
                                                    >
                                                        <span
                                                            aria-hidden="true"
                                                            class="absolute inset-0"
                                                        />
                                                        {{ product.name }}
                                                    </a>
                                                </h3>
                                                <p
                                                    class="mt-1 text-sm text-gray-500"
                                                >
                                                    {{ product.color }}
                                                </p>
                                            </div>
                                            <p
                                                class="text-sm font-medium text-gray-900"
                                            >
                                                {{ product.price }}
                                            </p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </template>
    </AuthenticatedLayout>
</template>
