<script setup>
import { Head } from "@inertiajs/inertia-vue3";
import { ref } from "vue";
import AuthenticatedLayout from "@/Layouts/AuthenticatedLayout.vue";

let hey = ref("0");
// defineProps({
//     canLogin: Boolean,
//     canRegister: Boolean,
//
// })

function handleAccrodion(){
hey.value = hey.value == '0' ? '418px' : '0'
}
</script>

<template>
    <Head title="Welcome" />
    <AuthenticatedLayout>
        <template #header>
            <div class=" hidden md:block text-2xl font-bold">My Account</div>
        </template>

        <template #main>
            <div class="columns grid grid-cols-1 md:grid-cols-4 gap-6  my-12 font-sans max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
<div
                    class="rounded-lg bg-white px-4 py-2 text-left text-sm font-medium md:block hidden"
                >
                   
                    <div class="">
                                <ul class="items py-2">
                                    <li
                                        :class="
                                            route().current('account.show')
                                                ? 'font-bold  !text-black bg-gray-100'
                                                : ''
                                        "
                                    >
                                       <a :href="route('account.show')"> My Account </a>
                                    </li>
                                    <li
                                        :class=" route().current('orders.index')
                                                ? 'font-bold !text-black'
                                                : '' "
                                    >
                                        <a
                                            :href="route('orders.index')"
                                            >My Orders</a
                                        >
                                    </li>
                                    
                                    <li
                                      :class="
                                            route().current('address-book.index')
                                                ? 'font-bold !text-black'
                                                : ''
                                        ">
                                        <a
                                            href="https://bateel.com/en/customer/address/"
                                            >Address Book</a
                                        >
                                    </li>
                                    <li
                                       :class="
                                            route().current('account.edit.show')
                                                ? 'font-bold !text-black'
                                                : ''
                                        " 
                                    >
                                        <a
                                            href="https://bateel.com/en/customer/account/edit/"
                                            >Account Information</a
                                        >
                                    </li>
                                    <li
                                       :class="
                                            route().current('account.payment.show')
                                                ? 'font-bold !text-black'
                                                : ''
                                        " 
                                    >
                                        <a
                                            href="https://bateel.com/en/vault/cards/listaction/"
                                            >Stored Payment Methods</a
                                        >
                                    </li>
                                    <li
                                        :class="
                                            route().current('.index')
                                                ? 'font-bold !text-black'
                                                : ''
                                        " 
                                    >
                                        <a
                                            href="https://bateel.com/en/paypal/billing_agreement/"
                                            >Billing Agreements</a
                                        >
                                    </li>
                                    <li
                                       :class="
                                            route().current('account.reviews.index')
                                                ? 'font-bold !text-black'
                                                : ''
                                        "
                                    >
                                        <a
                                            href="https://bateel.com/en/review/customer/"
                                            >My Product Reviews</a
                                        >
                                    </li>
                                    <li
                                     :class="
                                            route().current('.index')
                                                ? 'font-bold !text-black'
                                                : ''
                                        ">
                                        <a
                                            href="https://bateel.com/en/newsletter/manage/"
                                            >Newsletter Subscriptions</a
                                        >
                                    </li>
                                    <li
                                     :class="
                                            route().current('.index')
                                                ? 'font-bold !text-black'
                                                : ''
                                        " 
                                    >
                                        <a
                                            href="https://bateel.com/en/amstorecredit/"
                                            >Store Credit &amp; Refunds</a
                                        >
                                    </li>

                                </ul>
                    </div>
                </div>
                <div
                    class="rounded-lg bg-white px-4 py-2 text-left text-sm font-medium md:hidden block"
                >
                    <button
                        @click="handleAccrodion()"
                        class="px-4 py-2 flex w-full justify-between  font-bold text-lg"
                    >
                        My Account
                    </button>
                    <div class="helo">
                                <ul class="items py-2">
                                    <li
                                        :class="
                                            route().current('account.show')
                                                ? 'font-bold  !text-black bg-gray-100'
                                                : ''
                                        "
                                    >
                                       <a :href="route('account.show')"> My Account </a>
                                    </li>
                                    <li
                                        :class=" route().current('orders.index')
                                                ? 'font-bold !text-black'
                                                : '' "
                                    >
                                        <a
                                            :href="route('orders.index')"
                                            >My Orders</a
                                        >
                                    </li>
                                    
                                    <li
                                      :class="
                                            route().current('address-book.index')
                                                ? 'font-bold !text-black'
                                                : ''
                                        ">
                                        <a
                                            href="https://bateel.com/en/customer/address/"
                                            >Address Book</a
                                        >
                                    </li>
                                    <li
                                       :class="
                                            route().current('account.edit.show')
                                                ? 'font-bold !text-black'
                                                : ''
                                        " 
                                    >
                                        <a
                                            href="https://bateel.com/en/customer/account/edit/"
                                            >Account Information</a
                                        >
                                    </li>
                                    <li
                                       :class="
                                            route().current('account.payment.show')
                                                ? 'font-bold !text-black'
                                                : ''
                                        " 
                                    >
                                        <a
                                            href="https://bateel.com/en/vault/cards/listaction/"
                                            >Stored Payment Methods</a
                                        >
                                    </li>
                                    <li
                                        :class="
                                            route().current('.index')
                                                ? 'font-bold !text-black'
                                                : ''
                                        " 
                                    >
                                        <a
                                            href="https://bateel.com/en/paypal/billing_agreement/"
                                            >Billing Agreements</a
                                        >
                                    </li>
                                    <li
                                       :class="
                                            route().current('account.reviews.index')
                                                ? 'font-bold !text-black'
                                                : ''
                                        "
                                    >
                                        <a
                                            href="https://bateel.com/en/review/customer/"
                                            >My Product Reviews</a
                                        >
                                    </li>
                                    <li
                                     :class="
                                            route().current('.index')
                                                ? 'font-bold !text-black'
                                                : ''
                                        ">
                                        <a
                                            href="https://bateel.com/en/newsletter/manage/"
                                            >Newsletter Subscriptions</a
                                        >
                                    </li>
                                    <li
                                     :class="
                                            route().current('.index')
                                                ? 'font-bold !text-black'
                                                : ''
                                        " 
                                    >
                                        <a
                                            href="https://bateel.com/en/amstorecredit/"
                                            >Store Credit &amp; Refunds</a
                                        >
                                    </li>

                                </ul>
                    </div>
                </div>

                <div class=" rounded-md bg-white   p-6 md:col-span-3">
                <slot  name="content"/>
        </div>
            </div>
        </template>
    </AuthenticatedLayout>
</template>
<style scoped>
.helo {
    height: v-bind(hey);
    overflow: hidden;

    transition: all 0.4s ease;
}
.items li {
@apply   rounded-md  hover:text-black  text-gray-700 hover:bg-gray-100 my-1
}
.items li a {
@apply px-4 py-2 block  text-sm  
}

</style>
