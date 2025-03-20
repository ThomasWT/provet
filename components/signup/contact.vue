<template>
<div class="contact-info">
    <div class="contact-section n-padding-l n-border-radius n-margin-auto">
        <h3 class="n-color-text-on-accent n-font-size-xl n-margin-be-l">{{ $t('contactSales') }}</h3>
        <div class="contact-regions n-grid-2 n-gap-l">
            <div class="contact-region">
                <h4 class="n-color-text-on-accent n-font-size-m n-space-be-m n-font-weight-heading n-font-size-m n-margin-be-m">UK & Ireland</h4>
                <div class="contact-details n-margin-b-l">
                    <a href="mailto:sales@provetcloud.com" class="contact-link  n-padding-b-s n-padding-i-m n-border-radius-s">sales@provetcloud.com</a>
                </div>
            </div>
            <div class="contact-region">
                <h4 class="n-color-text-on-accent n-font-size-m n-space-be-m n-font-weight-heading n-font-size-m n-margin-be-m">North America</h4>
                <div class="contact-details n-margin-b-l">
                    <a href="tel:+15616992307" class="contact-link n-padding-b-s n-padding-i-m n-border-radius-s">+1 (561) 699-2307</a>
                </div>
            </div>
        </div>
    </div>
</div>
</template>

<style scoped>

.contact-info {
    padding: 0 var(--n-space-xl);
}

.contact-section {
    background: rgba(255, 255, 255, 0.1);
    backdrop-filter: blur(4px);
    max-width: 600px;
}

.contact-section h3 {
    opacity: 0.95;
    font-weight: var(--n-font-weight-medium);
}

.contact-region h4 {
    opacity: 0.9;
}


.contact-link {
    color: white;
    text-decoration: none;
    font-size: var(--n-font-size-l);
    opacity: 0.85;
    transition: opacity 0.2s ease;
}

.contact-link:hover {
    opacity: 1;
    background: rgba(255, 255, 255, 0.1);
}

@media (max-width: 1300px) {
    .contact-regions {
        grid-template-columns: 1fr;
    }
    .contact-section {
        padding: var(--n-space-s);
    }
}
</style>