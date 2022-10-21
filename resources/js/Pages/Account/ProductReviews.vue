<script setup>
import AccountLayout from '@/Layouts/AccountLayout.vue';
import {ExclamationTriangleIcon} from '@heroicons/vue/24/solid'
</script>
<template>

  <AccountLayout> 

  <template  #content>
<div>
 
                   
                    <div class="block block-dashboard-info">
                        <div
                            class="block-title text-xl  p-4"
                        >
                            <strong>My Product Reviews</strong>
                        </div>
<div class="flex items-center justify-start gap-4 bg-indigo-600 rounded-md w-full text-white px-4 py-3">
	<div>
<ExclamationTriangleIcon class="h-6 w-6 " />
	</div>
	<div>
		You Have submitted 0 reviews
	</div>
</div>

                    </div>
                    
                   
  </div>
  </template>
  </AccountLayout>


  
</template>
