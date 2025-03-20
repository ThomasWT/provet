<template>
<div class="contact-info">
    <div class="contact-section n-padding-l n-border-radius n-margin-auto">
        <h3 class="n-color-text-on-accent n-font-size-xl n-margin-be-l">{{ $t('contactSales') }}</h3>
        <div class="contact-regions n-grid-2 n-gap-l">
            <div class="contact-region" v-for="contact in currentContacts?.contacts" :key="contact?.name">
                <h4 class="n-color-text-on-accent n-font-size-m n-space-be-m n-font-weight-heading n-font-size-m n-margin-be-m">{{ contact.name }}</h4>
                <div class="contact-details n-margin-b-l">
                    <a :href="`mailto:${contact.contact}`" class="contact-link  n-padding-b-s n-padding-i-m n-border-radius-s">{{ contact.contact }}</a>
                </div>
            </div>
        </div>
    </div>
</div>
</template>

<script setup lang="ts">
import type { LocaleObject } from '@nuxtjs/i18n'

const { locale, locales } = useI18n()

type Contact = {
    name: string
    contact: string
}

type Contacts = {
    country: string
    contacts: Contact[]
}

// Move to an API call
const contacts: Contacts[] = [
    {
        country: 'en',
        contacts: [
            {
                name: 'UK & Ireland',
                contact: 'sales@provetcloud.com',
            },
            {
                name: 'North America',
                contact: '+1 (561) 699-2307'
            }
        ]
    },
    {
        country: 'fi',
        contacts: [
            {
                name: 'Timo Hiltunen',
                contact: '+358 44 7394 913',
            },
            {
                name: 'Juha Huttunen',
                contact: '+358 50 4398 983',
            }
        ]
    }
]

const currentLocale = computed((): LocaleObject => {
  return locales.value.filter((i: LocaleObject) => i.code === locale.value)[0]
})

const currentContacts = computed((): Contacts | undefined => {
    return contacts.find((contacts: any) => contacts.country === currentLocale.value.code)
})

</script>

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