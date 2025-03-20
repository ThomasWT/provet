<template>
    <div class="n-reset">
        <provet-stack direction="horizontal" justify-content="center" style="margin-bottom: calc(var(--n-space-xxl) * 3)">
            <provet-dropdown :open="open" size="s" @click="toggleDropdown">
                <provet-button slot="toggle">
                    <provet-stack direction="horizontal" justify-content="center">
                        <img class="n-border" style="width: 25px; height: 20px;" :src="`/flags/${currentLocale.flag}`" alt="Flag" /> <span style="margin-left: 10px;">{{ currentLocale.name }}</span>
                    </provet-stack>
                </provet-button>
                <provet-dropdown-item v-for="locale in availableLocales" :key="locale.code" @click.stop="handleLocaleChange(locale.code)">
                    <provet-stack direction="horizontal" justify-content="center" item-align="center">
                        <img class="n-border" style="width: 25px; height: 20px;" :src="`/flags/${locale.flag}`" alt="Flag" /> <span style="margin-left: 10px;">{{ locale.name }}</span>
                    </provet-stack>
                </provet-dropdown-item>
            </provet-dropdown>
        </provet-stack>
    </div>
</template>

<script setup lang="ts">
import '@provetcloud/web-components/lib/Button'
import '@provetcloud/web-components/lib/Stack'
import '@provetcloud/web-components/lib/Dropdown'
import '@provetcloud/web-components/lib/Icon'
import '@provetcloud/web-components/lib/DropdownItem'
import type { LocaleObject } from '@nuxtjs/i18n'


const open = ref(false)
const { locale, locales, setLocale } = useI18n()

const currentLocale = computed((): LocaleObject => {
  return locales.value.filter(i => i.code === locale.value)[0]
})

const toggleDropdown = (): void => {
  open.value = !open.value
}

const handleLocaleChange = (code: LocaleObject['code']): void => {
  setLocale(code)
  open.value = false
}

const availableLocales = computed((): LocaleObject[] => {
  return locales.value.filter(i => i.code !== locale.value)
})
</script>
