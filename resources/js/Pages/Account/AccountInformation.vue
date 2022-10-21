<script setup>
import AccountLayout from '@/Layouts/AccountLayout.vue';
</script>
<template>

  <AccountLayout> 

  <template  #content>
<div>
 
                   
                    <div class="block block-dashboard-info">
                        <div
                            class="block-title text-xl border-b border-gray-300 p-4"
                        >
                            <strong>Account Information</strong>
                        </div>
                        <div class="block-content grid md:grid-cols-2 grid-cols-1   ">
                            <div class="box box-information mt-4">
                                <div class="box-title p-4  font-bold" >
                  Contact Information</div>
                                <div class="box-content px-4">
                                    <p>{{$page.props.auth.user.first_name}} {{$page.props.auth.user.last_name}} </p>
                  <p>{{$page.props.auth.user.email}}</p>
                                </div>
                            </div>
                            <div class="box box-newsletter mt-4">
                                <div class="box-title font-bold p-4" >
                 Newsletters</div>
                                <div class="box-content px-4 ">
                                    <address>
                                        Newsletter not yet available.
                                    </address>
                                </div>
                              
                            </div>
                        </div>
                    </div>
                    <div class="block block-dashboard-addresses">
                        <div class="block-title text-xl border-b border-gray-300 p-4 mt-8">
                            <strong>Address Book</strong>
                          
                        </div>
                        <div class="block-content grid md:grid-cols-2 grid-cols-1">
                            <div class="box box-billing-address mt-4">
                                <div class="box-title font-bold p-4" > Default Billing Address </div>
                                <div class="box-content px-4">
                                    <address>
                                        You have not set a default billing
                                        address.
                                    </address>
                                </div>
                            </div>
                            <div class="box box-shipping-address mt-4">
                                <div class="box-title font-bold p-4" > Default Shipping Address</div>
                                <div class="box-content px-4">
                                    <address>
                                        You have not set a default shipping
                                        address.
                                    </address>
                                </div>
                            </div>
                        </div>
                    </div>
                   
  </div>
  </template>
  </AccountLayout>


  
</template>
