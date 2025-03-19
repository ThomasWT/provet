<template>
    <div class="signup-page-container n-gap-m">
        <provet-stack  direction="vertical" justify-content="center" align-items="center" gap="s">
            <img class="logo" src="~/assets/images/provet_cloud_new_logo_570x80.png" alt="Provet Cloud Logo" />
            <h1 class="n-font-size-xxl" style="color: #4e71de">{{ $t('healthPlans') }}</h1>
       </provet-stack>
 
        <SignupSignupform></SignupSignupform>
    </div>
</template>

<script setup lang="ts">

definePageMeta({
    layout: 'signup',
})

useSeoMeta({
    title: 'Sign Up | Provet Cloud Health Plans',
    description: 'Sign up for Provet Cloud Health Plans'
})

</script>

<style scoped>
.signup-page-container {
    display: flex;
    height: 80%;
    width: auto;
    flex-direction: column;
    align-items: center;
}
.logo {
    width: 80%;
    max-width: 400px;
}
</style>