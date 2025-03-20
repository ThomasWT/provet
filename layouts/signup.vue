<template>
    <div class="signup-container n-reset">
        
        <langswitcher class="langswitcher" />
        <div class="signup-hero">
            <div class="signup-hero-content">
                <div class="signup-hero-text n-stack n-gap-xl n-typeset">
                    <h1 class="n-color-text-on-accent">{{ $t('betterSoftware') }}</h1>
                    <div class="n-stack n-gap-l">
                        <p class="hero-subtitle n-font-weight-medium n-font-size-xl n-color-text-on-accent">{{ $t('offerConsistentProactivePersonalizedCare') }}</p>
                        <h2 class="n-color-text-on-accent">{{ $t('withProvetCloudHealthPlans') }}</h2>
                    </div>
                    <SignupContact />
                </div>
            </div>
        </div>
        <div class="signup-form n-justify-center n-items-center n-relative">
            <slot />
            <SignupCat />
        </div>
    </div>
</template>

<style scoped>
.langswitcher {
    position: absolute;
    top: 8px;
    right: 8px;
    z-index: 1
}
.signup-container {
    display: flex;
    flex-direction: row;
    height: 100vh;
}

.signup-hero {
    flex: 1;
    background-color: var(--n-color-accent);
    box-shadow: var(--n-shadow-l);
    background-image: url('~/assets/images/vet_bg.jpg');
    background-size: cover;
    background-position: center;
    background-repeat: no-repeat;
    position: relative;
    display: flex;
    align-items: center;
    justify-content: center;
}

.signup-hero::before {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    background-color: rgb(64 17 150 / 73%);
    z-index: 1;
}

.signup-hero-content {
    position: relative;
    z-index: 2;
    width: 100%;
    max-width: 800px;
    padding: var(--n-space-xxl) var(--n-space-xl);
    height: 100%;
    display: flex;
    flex-direction: column;
}

.signup-hero-text {
    color: white;
    text-align: center;
    flex: 1;
    display: flex;
    flex-direction: column;
    justify-content: center;
}

.signup-hero-text h1 {
    line-height: 1.2;
    letter-spacing: -0.02em;
    margin: 0;
}

.signup-hero-text .hero-subtitle {
    opacity: 0.95;
    margin: 0;
    max-width: 600px;
    margin: 0 auto;
}

.signup-hero-text h2 {
    font-size: var(--n-font-size-l);
    font-weight: var(--n-font-weight-regular);
    line-height: 1.4;
    opacity: 0.85;
    margin: 0;
}

.signup-form {
    flex: 1;
    margin: 0;
    position: relative;
    display: flex;
    flex-direction: column;
    min-width: 400px;
    background-color: var(--n-color-surface);
}

@media (max-width: 900px) {
    .signup-hero {
        display: none;
    }

    .signup-form {
       width: auto;
       min-width: unset;
    }
}
</style>