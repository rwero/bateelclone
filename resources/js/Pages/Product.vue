<script setup>
import { Head } from "@inertiajs/inertia-vue3";
import { ref } from "vue";
import AuthenticatedLayout from "@/Layouts/AuthenticatedLayout.vue";
import { RadioGroup, RadioGroupLabel, RadioGroupOption } from "@headlessui/vue";
import { TabGroup, TabList, Tab, TabPanels, TabPanel } from "@headlessui/vue";
import {
    StarIcon,
    PlusIcon,
    PlusSmallIcon,
    MinusIcon,
    MinusSmallIcon,
} from "@heroicons/vue/20/solid";

const qte = ref(1);
const reviews = ref([
    {
        id: 1,
        first_name: "Redouane",
        last_name: "Moussaoui",
        date: "July 6, 2022",
        rating: 5,
        review: "Quality of goods was good . All the dates were of consistent size and fresh. Packing was good and promptly delivered. ",
    },
    {
        id: 2,
        first_name: "Redouane",
        last_name: "Moussaoui",
        rating: 4,
        date: "July 6, 2022",
        review: "Quality of goods was good . All the dates were of consistent size and fresh. Packing was good and promptly delivered. ",
    },
]);
const product = {
    name: "Ajwa Dates",
    price: "$192",
    rating: 3.9,
    reviewCount: 117,
    href: "#",
    images: [
        "https://bateel.com/media/catalog/product/cache/7b87012fab0eaa0484d820bd62ac7576/0/1/01_ajwa_lf.jpg",
        "https://bateel.com/media/catalog/product/cache/7b87012fab0eaa0484d820bd62ac7576/0/2/02_ajwa_plain.jpg",
        "https://bateel.com/media/catalog/product/cache/7b87012fab0eaa0484d820bd62ac7576/0/2/02_ajwa_plain.jpg",
        "https://bateel.com/media/catalog/product/cache/7b87012fab0eaa0484d820bd62ac7576/0/3/03_ballotin_box2_25_2.jpg",
        "https://bateel.com/media/catalog/product/cache/7b87012fab0eaa0484d820bd62ac7576/0/3/03_ballotin_box2_25_2.jpg",
    ],
    imageSrc:
        "https://bateel.com/media/catalog/product/cache/7b87012fab0eaa0484d820bd62ac7576/0/1/01_ajwa_lf.jpg",
    imageAlt: "Two each of gray, white, and black shirts arranged on table.",
    colors: [
        { name: "White", class: "bg-white", selectedClass: "ring-gray-400" },
        { name: "Gray", class: "bg-gray-200", selectedClass: "ring-gray-400" },
        { name: "Black", class: "bg-gray-900", selectedClass: "ring-gray-900" },
    ],
    sizes: [
        { name: "XXS", inStock: true },
        { name: "XS", inStock: true },
        { name: "S", inStock: true },
        { name: "M", inStock: true },
        { name: "L", inStock: true },
        { name: "XL", inStock: true },
        { name: "XXL", inStock: true },
        { name: "XXXL", inStock: false },
    ],
};

const open = ref(false);
const selectedColor = ref(product.colors[0]);
const selectedSize = ref(product.sizes[2]);
defineProps({
    canLogin: Boolean,
    canRegister: Boolean,
    id: String,
});
</script>

<template>
    <Head title="Welcome" />
    <AuthenticatedLayout>
        <!-- <template #header> -->
        <!--     <div> -->
        <!--         Main Header page -->
        <!--          -->
        <!--     </div> -->
        <!-- </template> -->

        <template #main>
            <div>
                <div
                    class="flex transform text-left text-base transition md:my-8 md:px-4 max-w-7xl mx-auto"
                >
                    <div
                        class="relative flex w-full items-center overflow-hidden bg-white px-4 pt-14 pb-8 shadow-2xl sm:px-6 sm:pt-8 md:p-6 lg:p-8"
                    >
                        <div
                            class="grid w-full grid-cols-1 items-start gap-y-8 gap-x-6 sm:grid-cols-12 lg:gap-x-8"
                        >
                            <div
                                class="overflow-hidden rounded-lg sm:col-span-6 lg:col-span-6"
                            >
                                <TabGroup>
                                    <TabPanels class="mt-2">
                                        <TabPanel
                                            v-for="(image, i) in product.images"
                                            :key="i"
                                        >
                                            <img
                                                :src="image"
                                                alt=""
                                                class="object-cover object-center"
                                            />
                                        </TabPanel>
                                    </TabPanels>
                                    <TabList
                                        class="grid grid-cols-4 gap-4 my-2.5 mx-1 sm:grid-cols-2 md:grid-cols-4"
                                    >
                                        <Tab
                                            v-for="(image, i) in product.images"
                                            as="template"
                                            :key="i"
                                        >
                                            <img
                                                :src="image"
                                                alt=""
                                                :class="[
                                                    'w-full   rounded-lg ',
                                                    ' focus:outline-none focus:ring-2',
                                                ]"
                                            />
                                        </Tab>
                                    </TabList>
                                </TabGroup>
                                <div class="hidden sm:block">
                                    <h2 class="font-bold text-2xl mt-4 mb-2">
                                        A gift of Ajwa is a rare treat for date
                                        connoisseurs
                                    </h2>

                                    <p>
                                        Known as the ‘Holy Date’, Ajwa dates
                                        have long held a special place within
                                        Arabic tradition. With their sweet,
                                        luscious taste and raisin-like texture,
                                        they are reminiscent of prunes, with a
                                        ﬂesh which beautifully melts in the
                                        mouth.
                                    </p>

                                    <p>
                                        Ranging in colour from a delicate soft
                                        brown to almost black, Bateel's gourmet
                                        Ajwa dates are delicious and packed with
                                        nutrients. With each mouthful, you will
                                        be consuming a high level of vitamins,
                                        healthy fats, protein and carotenoids.
                                        You can improve your digestive health,
                                        boost heart health, reduce blood
                                        pressure and your risk of a stroke, all
                                        while enjoying the sweet, creamy ﬂavour
                                        of these organic superfoods.
                                    </p>

                                    <p>
                                        Ajwa dates have been consumed in Arabia
                                        for more than 8000 years, given their
                                        irresistible ﬂavour and superb nutrient
                                        content. At Bateel, we supply only the
                                        ﬁnest Ajwa dates, providing a real treat
                                        for date connoisseurs. These enigmatic
                                        dates have become one of the most
                                        sought-after varieties in the world.
                                    </p>
                                </div>
                            </div>
                            <div class="sm:col-span-6 lg:col-span-6">
                                <h2
                                    class="text-2xl font-bold text-gray-900 sm:pr-12"
                                >
                                    {{ product.name }}
                                </h2>

                                <section
                                    aria-labelledby="information-heading"
                                    class="mt-2"
                                >
                                    <h3
                                        id="information-heading"
                                        class="sr-only"
                                    >
                                        Product information
                                    </h3>

                                    <div class="text-2xl text-gray-900">
                                        <span>{{ product.price }}</span>
                                        <span class="text-sm"> per Kg</span>
                                    </div>

                                    <!-- Reviews -->
                                    <div class="mt-6">
                                        <h2 class="sr-only">Reviews</h2>
                                        <div class="flex items-center">
                                            <div class="flex items-center">
                                                <StarIcon
                                                    v-for="rating in [
                                                        0, 1, 2, 3, 4,
                                                    ]"
                                                    :key="rating"
                                                    :class="[
                                                        product.rating > rating
                                                            ? 'text-gray-900'
                                                            : 'text-gray-200',
                                                        'h-5 w-5 flex-shrink-0',
                                                    ]"
                                                    aria-hidden="true"
                                                />
                                            </div>
                                            <p class="sr-only">
                                                {{ product.rating }} out of 5
                                                stars
                                            </p>
                                            <a
                                                href="#"
                                                class="ml-3 text-sm font-medium text-indigo-600 hover:text-indigo-500"
                                                >{{
                                                    product.reviewCount
                                                }}
                                                reviews</a
                                            >
                                        </div>
                                    </div>
                                </section>

                                <section
                                    aria-labelledby="options-heading"
                                    class="mt-10"
                                >
                                    <h3 id="options-heading" class="sr-only">
                                        Product options
                                    </h3>

                                    <!-- delivery -->
                                    <h2 class="font-bold text-lg">
                                        Delivery Details
                                    </h2>
                                    <div class="text-sm">
                                        Ship to Algeria with approximate
                                        shipping fee of $28.00. Estimated
                                        delivery is between September 25 -
                                        September 28 .
                                    </div>

                                    <form>
                                        <!-- Sizes -->
                                        <div class="mt-10">
                                            <div
                                                class="flex items-center justify-between"
                                            >
                                                <h2>Size</h2>
                                                <a
                                                    href="#"
                                                    class="text-sm font-medium text-indigo-600 hover:text-indigo-500"
                                                    >Size guide</a
                                                >
                                            </div>

                                            <RadioGroup
                                                v-model="selectedSize"
                                                class="mt-4"
                                            >
                                                <RadioGroupLabel
                                                    class="sr-only"
                                                >
                                                    Choose a size
                                                </RadioGroupLabel>
                                                <div
                                                    class="grid grid-cols-4 gap-4"
                                                >
                                                    <RadioGroupOption
                                                        as="template"
                                                        v-for="size in product.sizes"
                                                        :key="size.name"
                                                        :value="size"
                                                        :disabled="
                                                            !size.inStock
                                                        "
                                                        v-slot="{
                                                            active,
                                                            checked,
                                                        }"
                                                    >
                                                        <div
                                                            :class="[
                                                                size.inStock
                                                                    ? 'bg-white shadow-sm text-gray-900 cursor-pointer'
                                                                    : 'bg-gray-50 text-gray-200 cursor-not-allowed',
                                                                active
                                                                    ? 'ring-2 ring-indigo-500'
                                                                    : '',
                                                                'group relative border rounded-md py-3 px-4 flex items-center justify-center text-sm font-medium uppercase hover:bg-gray-50 focus:outline-none sm:flex-1',
                                                            ]"
                                                        >
                                                            <RadioGroupLabel
                                                                as="span"
                                                                >{{
                                                                    size.name
                                                                }}</RadioGroupLabel
                                                            >
                                                            <span
                                                                v-if="
                                                                    size.inStock
                                                                "
                                                                :class="[
                                                                    active
                                                                        ? 'border'
                                                                        : 'border-2',
                                                                    checked
                                                                        ? 'border-indigo-500'
                                                                        : 'border-transparent',
                                                                    'pointer-events-none absolute -inset-px rounded-md',
                                                                ]"
                                                                aria-hidden="true"
                                                            />
                                                            <span
                                                                v-else
                                                                aria-hidden="true"
                                                                class="pointer-events-none absolute -inset-px rounded-md border-2 border-gray-200"
                                                            >
                                                                <svg
                                                                    class="absolute inset-0 h-full w-full stroke-2 text-gray-200"
                                                                    viewBox="0 0 100 100"
                                                                    preserveAspectRatio="none"
                                                                    stroke="currentColor"
                                                                >
                                                                    <line
                                                                        x1="0"
                                                                        y1="100"
                                                                        x2="100"
                                                                        y2="0"
                                                                        vector-effect="non-scaling-stroke"
                                                                    />
                                                                </svg>
                                                            </span>
                                                        </div>
                                                    </RadioGroupOption>
                                                </div>
                                            </RadioGroup>
                                        </div>
                                        <div class="mt-10">
                                            <h2>Kilograms</h2>
                                            <div
                                                class="mt-4 grid grid-cols-7 gap-4"
                                            >
                                                <div
                                                    class="col-span-2 flex items-start justify-between gap-4 group relative border rounded-md p-3 font-medium"
                                                >
                                                    <button
                                                        type="button"
                                                        @click="
                                                            qte =
                                                                qte == 1
                                                                    ? 1
                                                                    : qte - 1
                                                        "
                                                    >
                                                        <MinusIcon
                                                            class="w-5 h-5 hover:text-gray-700 text-gray-300 translate-y-[2px]"
                                                        />
                                                    </button>
                                                    <span class="">{{
                                                        qte
                                                    }}</span>
                                                    <button
                                                        type="button"
                                                        @click="qte += 1"
                                                    >
                                                        <PlusIcon
                                                            class="w-5 h-5 hover:text-gray-700 text-gray-300 translate-y-[2px]"
                                                        />
                                                    </button>
                                                </div>
                                            </div>
                                        </div>

                                        <button
                                            type="submit"
                                            class="mt-6 flex w-full items-center justify-center rounded-md border border-transparent bg-indigo-600 py-3 px-8 text-base font-medium text-white hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2"
                                        >
                                            Add to cart
                                        </button>
                                    </form>
                                </section>
                            </div>
                            <div class="w-full col-span-12">
                                <h1 class="text-2xl font-bold">
                                    Customer Reviews
                                </h1>
                                    <div class="flex items-end gap-4  mt-3">
                                <div
                                    class="flex items-center "
                                >
                                    <StarIcon
                                        v-for="rating in [0, 1, 2, 3, 4]"
                                        :key="rating"
                                        :class="[
                                            product.rating > rating
                                                ? 'text-yellow-400'
                                                : 'text-gray-200',
                                            'h-5 w-5 flex-shrink-0',
                                        ]"
                                        aria-hidden="true"
                                    /></div> <span class="text-gray-500 text-xs">{{product.rating}} Based on 7 reviews</span>
                                </div>

                                <div
                                    class="p-5 mt-4 border-b last:border-none"
                                    v-for="review in reviews"
                                    :key="review.id"
                                >
                                    <h2 class="font-bold text-xl">
                                        {{ review.first_name }}
                                        {{ review.last_name }}
                                    </h2>
                                    <p class="text-gray-500">
                                        {{ review.date }}
                                    </p>

                                    <div
                                        class="flex items-center mt-3 -translate-x-1"
                                    >
                                        <StarIcon
                                            v-for="rating in [0, 1, 2, 3, 4]"
                                            :key="rating"
                                            :class="[
                                                review.rating > rating
                                                    ? 'text-yellow-400'
                                                    : 'text-gray-200',
                                                'h-5 w-5 flex-shrink-0',
                                            ]"
                                            aria-hidden="true"
                                        />
                                    </div>
                                    <p class="mt-3 text-gray-600">
                                        {{ review.review }}
                                    </p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </template>
    </AuthenticatedLayout>
</template>
